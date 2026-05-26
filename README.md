# ibexa nuxt ssr poc

proof-of-concept validating dual-rendering architecture for the buerkert symfony→nuxt migration.

the core claim: ibexa's page builder can serve two render paths from a single shared `PageDto` — twig in the editor preview, nuxt ssr on the public site — with zero modifications to ibexa core.

## quick start

requires [ddev](https://ddev.readthedocs.io/en/stable/) and docker.

```bash
make up        # start ddev
make install   # composer install + yarn install
make nuxt      # start nuxt dev server (port 3000 on the ddev host)
make urls      # print all useful urls
```

editor bundle (vue in ibexa admin):
```bash
make editor-dev    # vite --watch, for development
make editor-build  # production build
```

run `make` (no args) for a full command list.

## architecture

```
ibexa/symfony  →  IbexaPageMapper  →  PageDto  →  /api/v1/pages/{id}
                                           │
                          ┌────────────────┴────────────────┐
                          ▼                                  ▼
                  twig + editor bundle               nuxt ssr (public)
                  (editor preview)                   PageRenderer.vue
```

- `src/Dto/` — ibexa-free data shapes; the shared contract
- `src/Mapper/` — converts ibexa content to dtos
- `src/Repository/` — swappable backend binding (`PageRepositoryInterface`)
- `frontend/app/components/` — shared vue components used by both render paths
- `frontend/entries/editor.ts` — in-pipeline editor bundle (mutationobserver + vue teleport)
- `templates/page_builder/` — twig overrides that inject the editor bundle and block markers

## docs

- [`ssr-poc-state.md`](./ssr-poc-state.md) — current state, endpoints, what's been validated
- [`dual-rendering.md`](./dual-rendering.md) — the dual-rendering pattern in detail
- [`page-builder-concept-v2.md`](./page-builder-concept-v2.md) — poc results and migration strategy
- [`concept-buerkert.md`](./concept-buerkert.md) — buerkert-specific migration plan

## vanilla ibexa skeleton files

`assets/`, `webpack.config.js`, `ibexa.webpack.config*.js`, and the root `package.json` are part of the standard ibexa flex skeleton and are left untouched. they are **not used by this poc** — the poc build is entirely in `frontend/` (vite + nuxt). ignore them when reading the poc code.

## openapi / typed client

the symfony backend exposes an openapi spec at `/api/doc.json`. the frontend consumes it via a generated typed client:

```bash
make types   # regenerates frontend/app/types/api.d.ts from the live spec
```
