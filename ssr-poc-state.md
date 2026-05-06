# ssr poc — current state

last updated 2026-05-06.

this is a clean-playground proof of concept validating the architectural claims in `buerkert_new/ssr-poc-plan.md` for the symfony → nuxt ssr migration. it is **not** the production migration target — it's a stripped-down ibexa commerce install where we exercise the patterns in isolation before bringing them into the buerkert codebase.

## what's been built

**three render paths, one mapper, one component tree.** ibexa's actual page-builder iframe now hydrates the same vue components that nuxt ssr renders on the public site.

```
                                        ┌──────────────────────────────┐
                                        │   IbexaPageMapper (php)      │
                                        │   single source of truth     │
                                        │   ibexa content → PageDto    │
                                        └──────────────┬───────────────┘
                                                       │
              ┌────────────────────────────────────────┼────────────────────────────────────────┐
              │                                        │                                        │
              ▼                                        ▼                                        ▼
  ┌──────────────────────────┐           ┌──────────────────────────┐           ┌─────────────────────────────────┐
  │  /api/v1/pages/{id}      │           │  /_preview/pages/{id}    │           │  ibexa page-builder iframe      │
  │  json over rest          │           │  twig shell + page-data  │           │  (admin/content/preview/...)    │
  │                          │           │  + editor bundle         │           │  twig overrides emit page-data  │
  │                          │           │                          │           │  + per-block markers + bundle   │
  └─────────────┬────────────┘           └─────────────┬────────────┘           └────────────────┬────────────────┘
                │                                      │                                         │
                │ openapi-fetch                        │ <script type="module">                  │ <script type="module">
                │ typed client                         │ (page-data mode)                        │ (marker mode)
                ▼                                      ▼                                         ▼
  ┌──────────────────────────┐           ┌──────────────────────────┐           ┌─────────────────────────────────┐
  │  nuxt SSR (port 3000)    │           │  PageRenderer mounts     │           │  EditorRoot walks markers,      │
  │  app/pages/index.vue     │           │  full PageDto tree       │           │  teleports block components     │
  │  uses PageRenderer       │           │  into #page-builder-app  │           │  into [data-block-vue] divs     │
  └─────────────┬────────────┘           └─────────────┬────────────┘           └────────────────┬────────────────┘
                │                                      │                                         │
                └──────────────────────────────────────┼─────────────────────────────────────────┘
                                                       │  all three render the same:
                                                       ▼
                                    ┌─────────────────────────────────────┐
                                    │  PageRenderer.vue / EditorRoot.vue  │
                                    │  + components/blocks/{Richtext,…}   │
                                    │  shared between all consumers       │
                                    └─────────────────────────────────────┘
```

## the 4 signals — status

| signal | claim | status |
|---|---|---|
| #1 | block dto contract works | **done — visually exercised.** location 72 ("poc landing page") has a real richtext block; `/api/v1/pages/72` returns the flat `PageDto` with rendered html. |
| #2 | dual rendering produces visually-identical output | **done — visually demonstrated inside ibexa's actual page-builder iframe.** the same `RichtextBlock.vue` renders in nuxt SSR (public site) AND inside the editor iframe. by construction (single source tree, two bundles) — not by post-hoc screenshot diff. |
| #3 | shared css artifact is feasible | not addressed; decision pending (encore-as-authority vs shared-scss-source vs tailwind-utilities). blocks render unstyled. |
| #4 | editor preview is independent | done. `/api/v1/pages/{id}` (nuxt-side json), `/_preview/pages/{id}` (standalone editor sanity-probe) and the in-pipeline ibexa-iframe integration all coexist. they share `IbexaPageMapper` upstream and the vue component tree downstream; ibexa itself is not modified. |

3/4 done end-to-end. only css decision (signal #3) remains.

## what's where

### php (`src/`)

```
src/
├── Dto/{PageDto,ZoneDto,BlockDto}.php       flat domain shapes; zero ibexa imports
├── Repository/
│   ├── PageRepositoryInterface.php          contract; depended on by controllers
│   └── IbexaPageRepository.php              only repo importing ibexa
├── Mapper/
│   ├── BlockMapperInterface.php             tagged service contract
│   ├── IbexaPageMapper.php                  orchestrator, !tagged_iterator
│   ├── IbexaRichtextBlockMapper.php         priority 100; injects RichTextConverterExtension directly
│   └── PassthroughBlockMapper.php           priority -1000 fallback (private normalize() helper)
├── Twig/
│   └── PageDtoExtension.php                 twig fn `app_page_dto(content)` + filter `app_json_for_script`
└── Controller/
    ├── Api/PageController.php               GET /api/v1/pages/{id} → json
    └── PageBuilderPreviewController.php     GET /_preview/pages/{id} → twig (sanity probe)
```

interface binding lives as a single line in `config/services.yaml`:

```yaml
App\Repository\PageRepositoryInterface: '@App\Repository\IbexaPageRepository'
```

block mapper registration is one line per implementation, also in `config/services.yaml`. swap = config change.

### twig overrides + ibexa config (the in-pipeline integration)

```
templates/page_builder/
├── preview.html.twig                        standalone shell (page-data mode of bundle)
├── blocks/richtext.html.twig                THIN MARKER: <div data-block-vue="richtext" data-block-id="…">
└── fields/ezlandingpage.html.twig           extends parent, injects #page-data + bundle script tag
```

```
config/packages/
├── nelmio_api_doc.yaml                      openapi spec scope: ^/api/v1
├── ibexa_fieldtype_page.yaml                richtext block view → page_builder/blocks/richtext.html.twig
└── app_ibexa_overrides.yaml                 ezlandingpage field template, priority 100
```

ibexa block + field templates do NOT honor symfony's bundle-override path. both must be registered through ibexa's own config keys (see "architectural decisions" below).

### frontend (`frontend/`)

```
frontend/
├── app/
│   ├── components/
│   │   ├── PageRenderer.vue                 nuxt + standalone preview: full page tree from PageDto
│   │   ├── EditorRoot.vue                   in-pipeline: walks markers, teleports per-marker block
│   │   └── blocks/
│   │       ├── index.ts                     type → component registry
│   │       ├── RichtextBlock.vue            v-html the rendered html5 from the mapper
│   │       └── UnknownBlock.vue             fallback dump of attributes
│   ├── pages/index.vue                      nuxt SSR page; locationId 72; uses PageRenderer
│   ├── composables/useApiClient.ts          env-aware openapi-fetch typed client
│   └── types/api.d.ts                       codegened from /api/doc.json
├── entries/editor.ts                        DUAL-MODE: marker mode (in-pipeline) | page-data mode (standalone)
├── server/api/ibexa/v2/[...path].ts         legacy nitro proxy, unused, kept for now
├── nuxt.config.ts                           allowedHosts: ['ibexa-nuxt-ssr-poc.ddev.site']
├── vite.editor.config.ts                    second vite config; dev mode flips __VUE_PROD_DEVTOOLS__
└── package.json                             scripts: dev, build, build:editor, dev:editor, api:types
```

### built artifacts (`public/build/editor/`)

- `main.js` — editor bundle. ~65.84 kb prod (gzip 25.85 kb) / ~67.90 kb dev (with source map)
- `.vite/manifest.json`

## endpoints

| endpoint | purpose | controller / source |
|---|---|---|
| `GET /api/doc` | swagger ui (browse + try the spec) | nelmio |
| `GET /api/doc.json` | openapi spec, scoped to `^/api/v1` | nelmio |
| `GET /api/v1/pages/{locationId}` | flat `PageDto` json | `App\Controller\Api\PageController` |
| `GET /_preview/pages/{locationId}` | standalone editor preview html (page-data mode) | `App\Controller\PageBuilderPreviewController` |
| `GET /admin/content/preview/{contentId}/{versionNo}/{language}/site_access/{sa}` | ibexa's own page-builder iframe url; our twig overrides hijack the render | ibexa (we override the templates only) |
| `GET /build/editor/main.js` | editor bundle | static asset, vite-built |
| `GET /` (nuxt, port 3000) | nuxt SSR public page | `frontend/app/pages/index.vue` |

## how to run

all common commands are in the `Makefile` — run `make help` for the list. the most-used:

| target | what |
|---|---|
| `make up` | start ddev |
| `make install` | composer + frontend yarn install |
| `make nuxt` | nuxt dev server (public site, port 3000) |
| `make editor-dev` | editor bundle in watch mode + vue devtools enabled |
| `make editor-build` | production editor bundle |
| `make types` | regenerate `frontend/app/types/api.d.ts` from `/api/doc.json` |
| `make cc` | symfony cache clear (after php / template / config changes) |

vue devtools must be opened via right-click *inside* the page-builder iframe → inspect (devtools attaches per browser frame).

## how to verify

1. **openapi spec**: `make spec` — should show the spec with `PageDto`/`ZoneDto`/`BlockDto` schemas.

2. **dto endpoint** for the seeded richtext page: `make page` (defaults to `ID=72`) — should return a `PageDto` with the richtext block's `attributes.html` containing `<h1>test block for richtext rendering</h1><p>this is a test block</p>`.

3. **standalone editor preview**: open `https://ibexa-nuxt-ssr-poc.ddev.site/_preview/pages/72` in a browser. status bar at top + below it (vue-rendered): page title, zone heading, the richtext html.

4. **in-pipeline editor — the headline result**: log into ibexa admin, edit "poc landing page" (location 72) in the page-builder. the iframe content is rendered by *ibexa's* pipeline, but the richtext block markup is now `<div data-block-vue="richtext" data-block-id="…">…vue-rendered…</div>` — our `RichtextBlock.vue` mounted via `EditorRoot.vue` reading the inlined `#page-data`. byte-identical html to what nuxt SSR produces.

5. **nuxt SSR (public site)**: open the nuxt url (`make describe`, look for the host port mapped to container 3000). same `RichtextBlock.vue` renders — view-source shows fully-rendered html (server-side).

6. **bonus** — `make config-blocks` and `make config-fields` confirm our ibexa template overrides actually merged into the runtime config.

## key versions

| component | version |
|---|---|
| php (ddev container) | 8.3 |
| symfony | 5.4 |
| ibexa commerce | 4.6.29 |
| nelmio/api-doc-bundle | ^4.23 (resolved 4.38.7) |
| nuxt | 4.4.4 |
| vue | 3.5.x |
| vite | 8.0.10 (uses `rolldownOptions`, not `rollupOptions`) |
| @vitejs/plugin-vue | 6.0.6 |
| openapi-fetch | 0.17.x |
| openapi-typescript | 7.13.x |
| typescript | 6.0.x |

## architectural decisions worth noting

1. **the dto is the contract; all renderers are dumb consumers.** `IbexaPageMapper` is the only file that bridges ibexa shapes to domain shapes. it runs once per render — exposed via the api endpoint (json) AND via a twig function `app_page_dto(content)` that inlines the same dto into the editor iframe as `<script id="page-data">`. swapping the cms is a mapper rewrite + interface binding change in `services.yaml`. nothing else.

2. **single source for vue components.** `frontend/app/components/blocks/` is the only place a block's visual representation is defined. nuxt SSR imports it. editor bundle imports it. dual rendering at the build layer is one tree, two vite bundles. (option (b) "nuxt project owns both" — option (a) "encore owns the editor" was rejected to avoid touching ibexa-encore conventions; option (c) "workspace with shared blocks package" was rejected as overkill for two consumers.)

3. **single vue app per editor iframe**, not per block. `EditorRoot.vue` mounts once, walks `[data-block-vue]` markers, and renders block components into them via `<Teleport>`. shared reactivity context, shared plugin tree. avoids the "n parallel vue apps" anti-pattern.

4. **openapi spec is code-first**. nelmio attributes on dtos and controllers produce `/api/doc.json`. ts types are codegened into `frontend/app/types/api.d.ts`. the dto-driven facade naturally produces a clean spec; spec-first would add discipline overhead without payoff at this scale.

5. **ibexa stays unmodified.** no patches, forks, admin-ui mods, or dependence on undocumented internals. the facade pattern uses ibexa's public php api (`ContentService`, `LocationService`, page-builder field-type contracts). the in-pipeline integration uses official extension points (template config + twig extension).

6. **ibexa template overrides DON'T use symfony's bundle-override path.** putting an override at `templates/bundles/IbexaFieldTypePageBundle/...` is silently ignored. block templates must be registered via `ibexa_fieldtype_page.blocks.<type>.views.<view>.template` (same view name wins by config-merge); field templates via `ibexa.system.<sa>.field_templates` as a priority-ordered list (higher priority wins). burned ~30 minutes on this; documented in detail.

## what's deferred / pending

| item | status | note |
|---|---|---|
| css strategy (signal #3) | **pending decision** | three options: (a) encore-as-authority + nuxt loads static artifact, (b) shared scss source compiled by both, (c) tailwind utilities only. blocks render unstyled until decided. |
| visual regression tests | deferred | per plan §10.4 — phase 2 ergonomic |
| ci diff check on `/api/doc.json` | deferred | phase 2 ergonomic |
| remove legacy nitro proxy at `frontend/server/api/ibexa/v2/[...path].ts` | unused, can be deleted | not blocking |
| second block type | not done | richtext is the only mapped block; adding e.g. embed proves the registry pattern scales (low risk, high signal) |
| draft content in iframe | works because ibexa renders the draft via its own twig pipeline; our `app_page_dto` reads from the in-render `Content` (which IS the draft) | no change needed |
| port to buerkert_new codebase | the actual goal | poc patterns transfer mechanically once #3 is decided and a second block is in |

## relationship to plan documents

- `buerkert_new/ssr-poc-plan.md` — the plan this poc validates
- `buerkert_new/ssr-migration-plan.md` — the bigger migration plan
- `buerkert_new/ssr-architecture-notes.md` — the decoupling pattern (§3) implemented here verbatim
