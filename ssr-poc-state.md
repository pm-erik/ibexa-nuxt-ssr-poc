# ssr poc — current state

last updated 2026-05-07.

clean-playground proof of concept validating the architectural claims in `buerkert_new/ssr-poc-plan.md`. **not** the production migration target — a stripped-down ibexa commerce install where we exercise the patterns in isolation before bringing them into buerkert.

## what's been built

**three render paths, one mapper, one component tree.** ibexa's actual page-builder iframe hydrates the same vue components nuxt SSR renders on the public site.

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
  │  json over rest          │           │  DEV-ONLY: twig shell    │           │  (admin/content/preview/...)    │
  │                          │           │  + page-data + editor    │           │  twig overrides emit page-data  │
  │                          │           │  bundle (404 in prod)    │           │  + per-block markers + bundle   │
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
| #1 | block dto contract works | **done.** location 72 has a real richtext block; `/api/v1/pages/72` returns a flat `PageDto` with rendered html. |
| #2 | dual rendering produces visually-identical output | **done.** the same `RichtextBlock.vue` renders in nuxt SSR and inside the editor iframe — by construction (single source tree, two bundles). |
| #3 | shared css artifact is feasible | not addressed; decision pending (encore-as-authority vs shared-scss vs tailwind). blocks render unstyled. |
| #4 | editor preview is independent | **done.** `/api/v1/pages/{id}`, `/_preview/pages/{id}` (dev-only), and the in-pipeline ibexa-iframe integration all coexist; ibexa is not modified. |

3/4 done end-to-end. only css decision (#3) remains.

## what's where

### php (`src/`)

```
src/
├── Dto/{PageDto,ZoneDto,BlockDto}.php       flat domain shapes; zero ibexa imports
├── Repository/
│   ├── PageRepositoryInterface.php          contract
│   └── IbexaPageRepository.php              only repo importing ibexa
├── Mapper/
│   ├── BlockMapperInterface.php             tagged service contract
│   ├── IbexaPageMapper.php                  orchestrator (!tagged_iterator)
│   ├── IbexaRichtextBlockMapper.php         priority 100; uses RichTextConverterExtension
│   └── PassthroughBlockMapper.php           priority -1000 fallback
├── Twig/PageDtoExtension.php                twig fn `app_page_dto(content)` + filter `app_json_for_script`
└── Controller/
    ├── Api/PageController.php               GET /api/v1/pages/{id} → json
    └── PageBuilderPreviewController.php     GET /_preview/pages/{id} (DEV-ONLY; 404 elsewhere)
```

`services.yaml`: `App\Repository\PageRepositoryInterface: '@App\Repository\IbexaPageRepository'`. swap = config change. block mappers tagged via `app.block_mapper`.

### twig overrides + ibexa config

```
templates/page_builder/
├── preview.html.twig                        standalone shell (page-data mode)
├── blocks/richtext.html.twig                THIN MARKER: <div data-block-vue="richtext" data-block-id="…">
└── fields/ezlandingpage.html.twig           extends parent, injects #page-data + bundle script tag

config/packages/
├── nelmio_api_doc.yaml                      openapi spec scope: ^/api/v1
├── ibexa_fieldtype_page.yaml                richtext block view → page_builder/blocks/richtext.html.twig
└── app_ibexa_overrides.yaml                 ezlandingpage field template, priority 100
```

ibexa block + field templates do NOT honor symfony's bundle-override path — must register via ibexa's own config keys (see decision #6).

### frontend (`frontend/`)

```
frontend/
├── app/
│   ├── components/
│   │   ├── PageRenderer.vue                 nuxt + standalone preview
│   │   ├── EditorRoot.vue                   in-pipeline: walks markers, teleports per-marker
│   │   └── blocks/{index.ts, RichtextBlock.vue, UnknownBlock.vue}
│   ├── pages/index.vue                      nuxt SSR page (locationId 72)
│   ├── composables/useApiClient.ts          env-aware openapi-fetch typed client
│   └── types/api.d.ts                       codegened from /api/doc.json
├── entries/editor.ts                        DUAL-MODE: marker | page-data
├── nuxt.config.ts                           allowedHosts: ['ibexa-nuxt-ssr-poc.ddev.site']
├── vite.editor.config.ts                    second vite config; dev mode flips __VUE_PROD_DEVTOOLS__
└── package.json                             scripts: dev, build, build:editor, dev:editor, api:types
```

editor bundle output: `public/build/editor/main.js` (~65 kb prod, gzip ~26 kb) + `.vite/manifest.json`.

## endpoints

| endpoint | purpose | source |
|---|---|---|
| `GET /api/doc` | swagger ui | nelmio |
| `GET /api/doc.json` | openapi spec, scoped `^/api/v1` | nelmio |
| `GET /api/v1/pages/{locationId}` | flat `PageDto` json | `Api\PageController` |
| `GET /_preview/pages/{locationId}` | **DEV-ONLY** standalone preview html; 404 in non-dev | `PageBuilderPreviewController` |
| `GET /admin/content/preview/{contentId}/{versionNo}/{language}/site_access/{sa}` | ibexa's page-builder iframe; our twig overrides hijack the render | ibexa (templates only) |
| `GET /build/editor/main.js` | editor bundle | static asset |
| `GET /` (port 3000) | nuxt SSR | `frontend/app/pages/index.vue` |

### production vs dev surface

production exposes only **two** render surfaces:

1. nuxt SSR (public site) — consumes `/api/v1/pages/{id}`
2. ibexa's page-builder iframe (editorial) — twig overrides hijack the render in-pipeline

`/_preview/pages/{id}` is **dev-only** (env guard in `PageBuilderPreviewController`; 404 when `kernel.environment !== 'dev'`). exists to iterate on the editor bundle without logging into admin. when porting to buerkert_new the route stays gated.

## how to run

`make help` lists everything. most-used: `make nuxt` (public site), `make editor-dev` (editor bundle watch), `make editor-build` (prod bundle), `make types` (regen ts types), `make cc` (symfony cache clear). vue devtools: right-click *inside* the page-builder iframe → inspect.

## how to verify

1. **dto endpoint**: `make page` (defaults to `ID=72`) — `PageDto` with the richtext block's `attributes.html`.
2. **standalone preview** (dev): `https://ibexa-nuxt-ssr-poc.ddev.site/_preview/pages/72` — status bar + vue-rendered page.
3. **in-pipeline editor — the headline result**: log into ibexa admin, edit "poc landing page" (location 72). richtext block markup is `<div data-block-vue="richtext">…vue-rendered…</div>` — `RichtextBlock.vue` mounted via `EditorRoot.vue` reading `#page-data`. byte-identical html to nuxt SSR.
4. **nuxt SSR**: `make describe` shows the host port mapped to container 3000. view-source confirms server-rendered html.
5. **ibexa overrides merged**: `make config-blocks` / `make config-fields`.

## key versions

| component | version |
|---|---|
| php (ddev container) | 8.3 |
| symfony | 5.4 |
| ibexa commerce | 4.6.29 |
| nelmio/api-doc-bundle | ^4.23 (resolved 4.38.7) |
| nuxt | ^4.4.4 |
| vue | ^3.5.33 |
| vite | ^7.3.2 (pinned; vite 8 leaks `__BUNDLED_DEV__` at runtime) |
| @vitejs/plugin-vue | ^5.2.0 |
| openapi-fetch | ^0.17.0 |
| openapi-typescript | ^7.13.0 |
| typescript | ^6.0.3 |

## architectural decisions

1. **dto is the contract; renderers are dumb consumers.** `IbexaPageMapper` is the only ibexa→domain bridge — exposed via the api endpoint AND via the twig fn `app_page_dto(content)` that inlines the same dto into the editor iframe. swapping the cms = mapper rewrite + one binding line.
2. **single source for vue components.** `frontend/app/components/blocks/` is the only place a block's visual lives. nuxt SSR + editor bundle both import it. one tree, two vite bundles. (encore-owns-editor and workspace-package were rejected as convention drift / overkill.)
3. **single vue app per editor iframe**, not per block. `EditorRoot.vue` mounts once, walks `[data-block-vue]` markers, teleports block components into them via vue's [`<Teleport>`](https://vuejs.org/guide/built-ins/teleport) — renders children into a different dom location while keeping them part of the parent component (shared state, lifecycle, reactivity). avoids the "n parallel vue apps" anti-pattern.
4. **openapi spec is code-first.** nelmio attributes produce `/api/doc.json`; ts types codegened from it. spec-first would add discipline overhead without payoff at this scale.
5. **ibexa stays unmodified.** uses ibexa's public php api (`ContentService`, `LocationService`, page-builder field-type contracts) and official extension points (template config + twig extension). no patches, forks, admin-ui mods, or undocumented internals.
6. **ibexa template overrides DON'T use symfony's bundle-override path.** `templates/bundles/IbexaFieldTypePageBundle/...` is silently ignored. block templates register via `ibexa_fieldtype_page.blocks.<type>.views.<view>.template` (config-merge wins); field templates via `ibexa.system.<sa>.field_templates` priority list (higher wins).

## what's deferred / pending

| item | status | note |
|---|---|---|
| css strategy (signal #3) | **pending decision** | (a) encore-as-authority + nuxt loads artifact, (b) shared scss source, (c) tailwind utilities. blocks render unstyled until decided. |
| second block type | not done | richtext is the only mapped block; adding e.g. embed proves the registry pattern scales |
| port to buerkert_new | the actual goal | poc patterns transfer once #3 is decided and a second block is in |
