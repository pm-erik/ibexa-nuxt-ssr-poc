# ssr poc — current state

last updated 2026-05-06.

this is a clean-playground proof of concept validating the architectural claims in `buerkert_new/ssr-poc-plan.md` for the symfony → nuxt ssr migration. it is **not** the production migration target — it's a stripped-down ibexa commerce install where we exercise the patterns in isolation before bringing them into the buerkert codebase.

## what's been built

end-to-end dual rendering pipeline:

```
                                        ┌──────────────────────────────┐
                                        │   IbexaPageMapper (php)      │
                                        │   single source of truth     │
                                        │   ibexa content → PageDto    │
                                        └──────────────┬───────────────┘
                                                       │
                              ┌────────────────────────┴────────────────────────┐
                              │                                                 │
                              ▼                                                 ▼
                ┌──────────────────────────┐                       ┌──────────────────────────┐
                │  /api/v1/pages/{id}      │                       │  /_preview/pages/{id}    │
                │  json over rest          │                       │  twig shell + page-data  │
                │                          │                       │  + editor bundle         │
                └──────────────┬───────────┘                       └──────────────┬───────────┘
                               │                                                  │
                               │  openapi-fetch typed client                      │  <script type="module">
                               ▼                                                  ▼
                ┌──────────────────────────┐                       ┌──────────────────────────┐
                │  nuxt SSR (port 3000)    │                       │  vue mount (browser)     │
                │  app/pages/index.vue     │                       │  entries/editor.ts       │
                └──────────────┬───────────┘                       └──────────────┬───────────┘
                               │                                                  │
                               └─────────────────┬────────────────────────────────┘
                                                 │  both render the same:
                                                 ▼
                                ┌─────────────────────────────────────┐
                                │  PageRenderer.vue                   │
                                │  + components/blocks/{Richtext,…}   │
                                │  shared between both pipelines      │
                                └─────────────────────────────────────┘
```

## the 4 signals — status

| signal | claim | status |
|---|---|---|
| #1 | block dto contract works | structurally done; richtext mapper wired but no seeded richtext block to exercise visually |
| #2 | dual rendering produces visually-identical output | **stronger than the original framing** — both pipelines now share `PageRenderer.vue` + block components, so visual identity is true by construction, not by post-hoc screenshot diff |
| #3 | shared css artifact is feasible | not addressed; decision pending (encore-as-authority vs shared-scss-source vs tailwind-utilities) |
| #4 | editor preview is independent | done; `/api/v1/pages/{id}` and `/_preview/pages/{id}` coexist as separate routes, share only `IbexaPageMapper` upstream |

3/4 structurally complete. only css decision (signal #3) and a seeded richtext block (closing tail of #1) remain.

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
│   ├── IbexaRichtextBlockMapper.php         priority 100; uses ibexa_richtext_to_html5
│   └── PassthroughBlockMapper.php           priority -1000 fallback
└── Controller/
    ├── Api/PageController.php               GET /api/v1/pages/{id} → json
    └── PageBuilderPreviewController.php     GET /_preview/pages/{id} → twig
```

interface binding lives as a single line in `config/services.yaml`:

```yaml
App\Repository\PageRepositoryInterface: '@App\Repository\IbexaPageRepository'
```

block mapper registration is one line per implementation, also in `config/services.yaml`. swap = config change.

### frontend (`frontend/`)

```
frontend/
├── app/
│   ├── components/
│   │   ├── PageRenderer.vue                 shared root for both pipelines
│   │   └── blocks/
│   │       ├── index.ts                     type → component registry
│   │       ├── RichtextBlock.vue            v-html the rendered html5 from the mapper
│   │       └── UnknownBlock.vue             fallback dump of attributes
│   ├── pages/index.vue                      nuxt SSR page; uses PageRenderer
│   ├── composables/useApiClient.ts          env-aware openapi-fetch typed client
│   └── types/api.d.ts                       codegened from /api/doc.json
├── entries/editor.ts                        editor bundle entry; parses #page-data
├── server/api/ibexa/v2/[...path].ts         legacy nitro proxy, unused, leave for now
├── nuxt.config.ts
├── vite.editor.config.ts                    second vite config for editor bundle
└── package.json
```

### twig

`templates/page_builder/preview.html.twig` — the editor shell. emits status bar + `<script id="page-data" type="application/json">` + `<div id="page-builder-app">` + bundle script tag.

### built artifacts

- `public/build/editor/main.js` — editor bundle, ~61 kb (gzip ~24 kb)
- `public/build/editor/.vite/manifest.json`

## endpoints

| endpoint | purpose | controller / source |
|---|---|---|
| `GET /api/doc.json` | openapi spec, scoped to `^/api/v1` | nelmio |
| `GET /api/v1/pages/{locationId}` | flat `PageDto` json | `App\Controller\Api\PageController` |
| `GET /_preview/pages/{locationId}` | editor-side preview html | `App\Controller\PageBuilderPreviewController` |
| `GET /build/editor/main.js` | editor bundle | static asset, vite-built |
| `GET /` (nuxt, port 3000) | nuxt SSR public page | `frontend/app/pages/index.vue` |

## how to run

assumes ddev project is started.

### nuxt dev (public site)

```sh
ddev exec --dir /var/www/html/frontend yarn dev
# nuxt listens on 0.0.0.0:3000 inside the web container
# host port mapping via ddev web_extra_exposed_ports
```

### regenerate ts types from openapi spec

```sh
ddev exec --dir /var/www/html/frontend bash -c \
  'IBEXA_INTERNAL_URL=http://127.0.0.1 yarn api:types'
```

### rebuild editor bundle

```sh
ddev exec --dir /var/www/html/frontend yarn build:editor
# output: public/build/editor/main.js
```

### symfony cache clear (after php changes)

```sh
ddev exec php bin/console cache:clear --env=dev
```

## how to verify

1. **openapi spec served**:
   `curl https://ibexa-nuxt-ssr-poc.ddev.site/api/doc.json | python3 -m json.tool | head -40`
   should show the full spec with `PageDto`/`ZoneDto`/`BlockDto` schemas.

2. **dto endpoint**:
   `curl https://ibexa-nuxt-ssr-poc.ddev.site/api/v1/pages/2 | python3 -m json.tool`
   should return:
   ```json
   {
     "locationId": 2,
     "contentId": 52,
     "layout": "default",
     "title": "Ibexa Digital Experience Platform",
     "zones": [{"id": "1", "name": "default", "blocks": []}]
   }
   ```

3. **editor preview html**:
   open `https://ibexa-nuxt-ssr-poc.ddev.site/_preview/pages/2` in a browser. should show the dark status bar at top + below it (rendered by vue):
   - `<h1>Ibexa Digital Experience Platform</h1>`
   - `location 2 · content 52 · layout default`
   - `zone: default`, `(no blocks)`

   if you see only the status bar and nothing below, the editor bundle didn't mount — check devtools console.

4. **nuxt SSR**:
   open `http://localhost:<ddev-port-for-3000>/` (find via `ddev describe | grep 3000`). same content as the editor preview, but rendered server-side (view-source shows fully-rendered html).

## key versions

| component | version |
|---|---|
| php (ddev container) | 8.3 |
| symfony | 5.4 |
| ibexa commerce | 4.6.29 |
| nelmio/api-doc-bundle | ^4.23 (resolved 4.38.7) |
| nuxt | 4.4.4 |
| vue | 3.5.x |
| vite | 8.0.10 |
| @vitejs/plugin-vue | 6.0.6 |
| openapi-fetch | 0.17.x |
| openapi-typescript | 7.13.x |
| typescript | 6.0.x |

## architectural decisions worth noting

1. **the dto is the contract; both renderers are dumb consumers.** `IbexaPageMapper` is the only file that bridges ibexa shapes to domain shapes. swapping the cms is a mapper rewrite + interface binding change in `services.yaml`. nothing else.

2. **single source for vue components.** `frontend/app/components/blocks/` is the only place a block's visual representation is defined. nuxt SSR imports it. editor bundle imports it. dual rendering at the build layer is one tree, two bundles. (option (b) "nuxt project owns both" from the design discussion — option (a) "encore owns the editor" was rejected to avoid touching ibexa-encore conventions; option (c) "workspace with shared blocks package" was rejected as overkill for two consumers.)

3. **single vue app per editor iframe**, not per block. the bundle parses one page-level json payload (`<script id="page-data">`), mounts a single `createApp` at `<div id="page-builder-app">`, and walks the dto from there. avoids the "n parallel vue apps with no shared reactivity context" problem.

4. **openapi spec is code-first**. nelmio attributes on dtos and controllers produce `/api/doc.json`. ts types are codegened from there into `frontend/app/types/api.d.ts`. spec-first wasn't chosen because the dto-driven facade naturally produces a clean spec; spec-first would add discipline overhead without payoff at this scale.

5. **ibexa stays unmodified.** no patches, forks, admin-ui mods, or dependence on undocumented internals. the facade pattern uses ibexa's public php api only (`ContentService`, `LocationService`, page-builder field-type contracts).

## what's deferred / pending

| item | status | note |
|---|---|---|
| seed a real richtext block in some content | pending | needed to visually exercise signal #1 — a one-block ibexa migration would do it |
| css strategy (signal #3) | pending decision | three options on the table; no choice committed |
| visual regression tests | deferred | per plan §10.4 — phase 2 ergonomic |
| ci diff check on `/api/doc.json` | deferred | phase 2 ergonomic |
| swagger ui at `/api/doc` | available, not enabled | uncomment in `config/routes/nelmio_api_doc.yaml` if needed |
| remove legacy nitro proxy at `frontend/server/api/ibexa/v2/[...path].ts` | unused, can be deleted | not blocking |
| port to buerkert_new codebase | the actual goal | poc patterns transfer mechanically once #3 is decided and one more block is exercised |

## relationship to plan documents

- `buerkert_new/ssr-poc-plan.md` — the plan this poc validates
- `buerkert_new/ssr-migration-plan.md` — the bigger migration plan
- `buerkert_new/ssr-architecture-notes.md` — the decoupling pattern (§3) implemented here verbatim