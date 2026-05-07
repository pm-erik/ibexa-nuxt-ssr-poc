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
├── Dto/{PageDto,ZoneDto,BlockDto,ContentSummaryDto}.php   flat domain shapes; zero ibexa imports
├── Service/
│   ├── ContentSummarizer.php                resolves contentId/locationId → ContentSummaryDto via ContentService + UrlGenerator + tagged TypedDataExtractors
│   ├── TypedDataExtractorInterface.php      per-content-type data extractor contract (mirrors ibexa's "view per content type")
│   ├── ImageDataExtractor.php               supports 'image' content type; extracts {url, alt, caption}
│   └── FileDataExtractor.php                supports 'file' content type; extracts {url, fileName, fileSize, mimeType}
├── EventSubscriber/
│   └── ExposeBlockValueSubscriber.php       adds `_block_value` to twig render params for per-block templates
├── Mapper/
│   ├── BlockMapperInterface.php             tagged service contract; mapAttributes($block, ?MappingContext)
│   ├── MappingContext.php                   per-call collector for related content ids (→ http cache tags)
│   ├── IbexaPageMapper.php                  orchestrator (!tagged_iterator); returns PageRenderResult{dto, cacheTags}
│   ├── IbexaRichtextBlockMapper.php         priority 100; uses RichTextConverterExtension
│   ├── IbexaEmbedBlockMapper.php            priority 100; {contentId, summary}
│   ├── IbexaVideoBlockMapper.php            priority 100; {contentId, summary, videoUrl: null}
│   ├── IbexaContentListBlockMapper.php      priority 100; {parentContentId, limit, contentTypes[], items: ContentSummaryDto[]}
│   └── PassthroughBlockMapper.php           priority -1000 fallback
├── Twig/PageDtoExtension.php                twig fns `app_page_dto(content)` + `app_block_dto(blockValue)` + filter `app_json_for_script`
├── Repository/
│   ├── PageRepositoryInterface.php          findByLocationId → ?PageRenderResult
│   ├── PageRenderResult.php                 {PageDto dto, list<string> cacheTags}
│   └── IbexaPageRepository.php              only repo importing ibexa
├── Controller/
│   ├── Api/PageController.php               GET /api/v1/pages/{id} → json + xkey cache header
│   └── PageBuilderPreviewController.php     GET /_preview/pages/{id} (DEV-ONLY; 404 elsewhere)
└── Command/
    └── PocSeedBlocksCommand.php             app:poc-seed-blocks — idempotent seed of video + contentlist blocks at location 72
```

`services.yaml`: `App\Repository\PageRepositoryInterface: '@App\Repository\IbexaPageRepository'`. swap = config change. block mappers tagged via `app.block_mapper`.

### twig overrides + ibexa config

```
templates/page_builder/
├── preview.html.twig                        standalone shell (page-data mode)
├── blocks/
│   ├── _marker.html.twig                    shared base: empty marker `<div data-block-vue="…">` + sibling `<script data-block-data data-for="…">` data
│   └── {richtext,embed,video,contentlist}.html.twig   one-liners: `{% include '_marker.html.twig' with {type: '…'} %}`
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
│   │   ├── blocks/{index.ts, RichtextBlock.vue, EmbedBlock.vue, VideoBlock.vue, ContentListBlock.vue, UnknownBlock.vue}
│   │   └── embeds/                          per-content-type embed view registry (mirrors ibexa's view-per-type)
│   │       ├── index.ts                     resolveEmbedComponent(contentTypeIdentifier) → ImageEmbed | ArticleEmbed | GenericEmbed
│   │       ├── ContentEmbed.vue             dispatches by contentTypeIdentifier
│   │       └── {ImageEmbed,FileEmbed,ArticleEmbed,GenericEmbed}.vue + types.ts
│   ├── pages/index.vue                      nuxt SSR page (locationId 72)
│   ├── composables/useApiClient.ts          env-aware openapi-fetch typed client
│   └── types/api.d.ts                       codegened from /api/doc.json
├── entries/editor.ts                        DUAL-MODE: marker | page-data
├── nuxt.config.ts                           allowedHosts: ['ibexa-nuxt-ssr-poc.ddev.site']
├── vite.editor.config.ts                    second vite config; dev mode flips __VUE_PROD_DEVTOOLS__
└── package.json                             scripts: dev, build, build:editor, dev:editor, api:types
```

editor bundle output: `public/build/editor/main.js` (~73 kb prod, gzip ~28 kb) + `.vite/manifest.json`.

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
3. **single vue app per editor iframe**, not per block. `EditorRoot.vue` mounts once, walks `[data-block-vue]` markers, teleports block components into them via vue's [`<Teleport>`](https://vuejs.org/guide/built-ins/teleport) — renders children into a different dom location while keeping them part of the parent component (shared state, lifecycle, reactivity). avoids the "n parallel vue apps" anti-pattern. **a `MutationObserver` keeps `markers` in sync with the DOM** so blocks dragged in or republished by ibexa hydrate immediately, without a page reload — required because ibexa re-renders individual blocks (not the field template wrapper) on those operations, so a field-template-emitted `#page-data` would go stale.
4. **openapi spec is code-first.** nelmio attributes produce `/api/doc.json`; ts types codegened from it. spec-first would add discipline overhead without payoff at this scale.
5. **ibexa stays unmodified.** uses ibexa's public php api (`ContentService`, `LocationService`, page-builder field-type contracts) and official extension points (template config + twig extension). no patches, forks, admin-ui mods, or undocumented internals.
6. **ibexa template overrides DON'T use symfony's bundle-override path.** `templates/bundles/IbexaFieldTypePageBundle/...` is silently ignored. block templates register via `ibexa_fieldtype_page.blocks.<type>.views.<view>.template` (config-merge wins); field templates via `ibexa.system.<sa>.field_templates` priority list (higher wins).

7. **cross-content resolution lives in the block mappers, eager.** blocks that reference other content (embed, video, contentlist) inject `App\Service\ContentSummarizer` and embed a flat `ContentSummaryDto` (`{id, locationId, name, contentTypeIdentifier, url, data}`) into their attributes. dto stays self-contained; renderers stay dumb; no client-side waterfall. n+1 trade is real (one `ContentService::loadContent` per reference) and accepted for the poc — production should batch via a side-table on `IbexaPageMapper` without changing dto shapes. broken references (NotFound/Unauthorized) yield `summary: null`; mappers never throw.

8. **per-content-type embed views, mirroring ibexa's view-per-type.** ibexa's stock embed delegates to `render(controller('ibexa_content:viewAction', { viewType: 'embed' }))` so each content type renders differently. ours splits the same concern in two:
   - **server side**: `TypedDataExtractorInterface` (tagged `app.typed_data_extractor`) attaches per-type extras to `ContentSummaryDto.data` (e.g. `ImageDataExtractor` reads the `image` field's uri/alt/caption). adding a new content type = adding one extractor.
   - **client side**: `frontend/app/components/embeds/` registry maps `contentTypeIdentifier` → vue component (`ImageEmbed`, `ArticleEmbed`, fallback `GenericEmbed`). `ContentEmbed.vue` dispatches by type. all four blocks (embed, video, contentlist items) feed through it.

9. **http cache tags collected per-page, set as response header.** `MappingContext` is created per `IbexaPageMapper::map()` call and threaded through block mappers + `ContentSummarizer`. each touched contentId is recorded; `IbexaPageMapper` builds tags (`l{locationId}`, `c{contentId}`, ...) and returns `PageRenderResult{dto, cacheTags}`. `PageController` sets the `xkey` header (the varnish convention ibexa's own `TagHandler` uses). when an embedded content changes, varnish invalidates every page that referenced it — same model as ibexa's stock `ibexa_http_cache_tag_relation_*` twig functions, just hoisted to the response level instead of emitted per-block.

10. **per-block sibling data + `MutationObserver` + WeakSet-based prepare for editor-iframe robustness.** each block twig template emits two siblings — an empty marker `<div data-block-vue="…" data-block-id="…">` and a sibling `<script type="application/json" data-block-data data-for="…">{ ...BlockDto }</script>` — via the shared `_marker.html.twig` partial. data is computed via the `app_block_dto(_block_value)` twig fn → `IbexaPageMapper::mapStandaloneBlock`. **siblings, not nested**: keeps the marker pristine so vue's Teleport target has no other content to collide with. when ibexa drag-adds or republishes, ibexa re-renders the per-block twig (both siblings as one fragment) and inserts; `EditorRoot.vue`'s `MutationObserver` detects the added marker, reads the sibling script via `script[data-block-data][data-for="…"]`, teleports the right vue component.

    **two non-obvious safeguards to avoid double-mount in the page-builder edit view** (where ibexa's react admin serializes the `c-pb-block-preview__inner` DOM and re-injects on interactions, capturing vue's prior `<article>` as part of the new marker's children):
    - **`prepareMarker(el)` clears each marker's children on first encounter** via a `WeakSet<HTMLElement>` of "already prepared" els. wipes any stale `<article>` carried over from ibexa's serialize+reinject cycle before vue mounts. subsequent rescans (where vue's own children are legitimately inside) don't re-clean.
    - **v-for `:key` is `${blockId}-${WeakMap-tracked-elIdentity}`**, so a new DOM node for the same block id forces vue to unmount + remount cleanly rather than leaving stale mounts in orphaned targets.

    `editor.ts` is also idempotent (guards on `__editor-vue-root__` existing) so a re-eval of the bundle script doesn't double-mount. global `<script id="page-data">` is preserved as a fallback (covers blocks somehow missing sibling data) but the sibling source wins.

## findings — costs of in-pipeline editor integration

**critical for the buerkert migration assessment.** the poc surfaced concrete collisions between vue mounting and ibexa's admin DOM/render patterns that the buerkert migration WILL hit. each one is a real cost line; together they bound the client-side rewiring effort beyond the "extract vue from data-* glue" framing.

| # | finding | what it means | concretely costs |
|---|---|---|---|
| 1 | **ibexa renders per-block, not per-page, on drag-add and publish.** the field-template wrapper (which would emit a global `#page-data`) renders ONCE at iframe load and is not refreshed. only the affected block's twig template re-runs server-side. | any global state attached to the field-template wrapper goes stale on the first interaction. data delivery must be per-block (sibling script, attribute, or api refetch). | per-block twig partial + per-block dto computation in the mapper; no "render once, walk markers, done" pattern. |
| 2 | **ibexa's react admin serializes+reinjects DOM in `c-pb-block-preview` panels.** vue's already-mounted `<article>` is captured as part of the serialized HTML and reappears inside the "fresh" marker on reinject. | naively mounting vue produces stacked duplicates (the bug we hit). defensive cleanup is required at the integration boundary. | `prepareMarker(el)` + `WeakSet<HTMLElement>` to wipe each marker exactly once before vue takes over. |
| 3 | **DOM target references change without warning.** ibexa replaces marker DOM nodes during interactions; vue Teleport's reactive `:to` prop has edge cases when the target el flips out from under it. | stable v-for keys based on block id alone aren't enough; a Teleport keyed only on block id can leave content in orphaned targets. | mountKey of `${blockId}-${elIdentity}` via WeakMap so a new DOM node forces unmount + remount instead of attempting an in-place move. |
| 4 | **the bundle `<script>` re-evaluates in the iframe on draft transitions.** without a guard, EditorRoot mounts more than once, multiple Teleports target the same markers, content stacks. | single mount must be enforced explicitly at the entry. | idempotency guard in `editor.ts` (`document.getElementById('__editor-vue-root__')`). |
| 5 | **the page-builder edit view runs in a nested document** (separate from the preview iframe). they're independent vue mounts, each managing its own block markers. | architecture has to assume "vue runs in any number of admin contexts" not "one editor iframe." | EditorRoot is per-document, no cross-frame coordination needed today, but state sync would be needed if any block carries shared client-side state. |

**how each was found here, and where it'll show up in buerkert:**

- 1, 2, 3, 4 surfaced through dragging blocks and republishing — the most basic editor interactions. they will all hit any vue-in-ibexa-admin integration that touches the page-builder edit view, not specifically anything about the poc's choice of richtext/embed/video/contentlist.
- 5 isn't a bug we fixed but a fact we noticed; flagged in case buerkert ships block components that need cross-instance state.

**implications for the buerkert migration estimate:**

- the "editor side stays unchanged" framing is **wrong**. editor *visuals* are preserved; editor *wiring* gains a non-trivial client-side reconciliation layer (`MutationObserver` rescan, `prepareMarker`, stable mountKey, idempotency guard, sibling-data delivery). that layer is ~150 LOC for stock ibexa blocks; it scales weakly with block count but strongly with the variety of admin interactions exercised. the buerkert-specific follow-up POC must exercise drag-add, publish, attribute edit, delete, reorder against real buerkert blocks to confirm no further collisions surface — each one would add to this layer.
- the "rewire, not rewrite" framing remains correct in spirit, but the rewiring includes **client-side glue beyond `data-*` → props**. extracting components is the easy part; reconciling vue's lifecycle with ibexa's admin DOM patterns is the discovery-heavy part.
- decoupling guarantee: none of this glue couples to ibexa internals — it's all DOM-pattern observation and cleanup. ibexa upgrades remain safe. but if a future ibexa version changes its admin DOM patterns, the glue may need updating; this is a real maintenance line.

**what's NOT in this poc and remains an open cost:**

- block-level editor interactivity (click-to-edit handles, drag-handles overlay, in-place toolbars). the poc renders block CONTENT via vue but does not introduce editor affordances on top. ibexa's stock editor affordances continue to work because we render INTO ibexa's existing block DOM, not in place of it. but if buerkert needs custom editor affordances per-block, those are an additional client-side surface — not exercised here.
- iframe-vs-edit-view double rendering (visual sync between the live preview iframe and the c-pb-block-preview panels). today both work because both run our bundle independently. if state needs to be shared (e.g., a vue store reflecting a block's draft attributes in real time), cross-document coordination becomes a concern. not exercised here.

## what's deferred / pending

| item | status | note |
|---|---|---|
| css strategy (signal #3) | **pending decision** | (a) encore-as-authority + nuxt loads artifact, (b) shared scss source, (c) tailwind utilities. blocks render unstyled until decided. |
| ~~second block type~~ | **done 2026-05-07** | richtext + embed + video + contentlist mapped end-to-end with cross-content resolution via `ContentSummarizer` → `ContentSummaryDto`. seeded by `make seed-blocks`. registry pattern scales linearly (bundle +5 kb for 3 blocks) |
| cross-content resolution n+1 | **eager per-call (poc accept)** | `ContentSummarizer` loads each referenced content individually; for production, batch-resolve via `IbexaPageMapper` with the same dto shape — only the filler changes |
| `ContentSummaryDto` not in openapi spec | **known gap** | nelmio rejects schema-only declarations on controller methods; the dto is only reachable via `BlockDto.attributes` (loosely typed). vue components hand-type a local `ContentSummary` interface. fix would be a separate schema-registration mechanism |
| ~~per-content-type embed views~~ | **done 2026-05-07** | `TypedDataExtractorInterface` (tagged) + `ContentSummaryDto.data` (server) + `frontend/app/components/embeds/` registry (client). image content gets `ImageEmbed`; folder/landing_page → `GenericEmbed` fallback. add new types by adding one extractor + one vue component. |
| ~~http cache tags on the response~~ | **done 2026-05-07** | `MappingContext` collects related contentIds across mappers; `PageRenderResult.cacheTags` returned from repository; `PageController` sets `xkey: l{loc} c{id} c{id} …` — varnish-style convention ibexa's `TagHandler` uses. |
| ~~empty block on drag-add / after publish~~ | **done 2026-05-07** | per-block sibling data scripts (via shared `_marker.html.twig`) + `MutationObserver` in `EditorRoot.vue` + WeakMap-based stable mountKey + WeakSet-based `prepareMarker` (defends against ibexa's serialize+reinject in `c-pb-block-preview`). blocks render immediately without page reload, no double-render anywhere. |
| ~~file content type extractor~~ | **done 2026-05-07** | `FileDataExtractor` + `FileEmbed.vue` for `file` content type → `{url, fileName, fileSize, mimeType}` |
| port to buerkert_new | the actual goal | poc patterns transfer once #3 is decided and a second block is in |
