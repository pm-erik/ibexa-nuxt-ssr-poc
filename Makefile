# shorthand wrappers around ddev / yarn / symfony console for the ssr poc.
# run `make` (no target) for a list.

DDEV_PHP      := ddev exec
DDEV_FRONTEND := ddev exec --dir /var/www/html/frontend
HOST_URL      := https://ibexa-nuxt-ssr-poc.ddev.site

# default location id for the seeded landing page used in `make page`
ID ?= 72

.DEFAULT_GOAL := help

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

# ─── ddev lifecycle ──────────────────────────────────────────────────────────

.PHONY: up down restart describe
up:        ## start ddev project
	ddev start

down:      ## stop ddev project
	ddev stop

restart:   ## restart ddev (needed after .ddev/config.yaml changes)
	ddev restart

describe:  ## show ddev status + exposed urls
	ddev describe

# ─── install ─────────────────────────────────────────────────────────────────

.PHONY: install
install: ## composer install + yarn install (frontend)
	ddev composer install
	$(DDEV_FRONTEND) yarn install

# ─── nuxt (public site) ──────────────────────────────────────────────────────

.PHONY: nuxt
nuxt: ## start nuxt dev server (foreground; ctrl-c to stop)
	$(DDEV_FRONTEND) yarn dev

# ─── editor bundle (vite second entry) ───────────────────────────────────────

.PHONY: editor-dev editor-build
editor-dev:    ## vite build --watch --mode development (vue devtools attach)
	$(DDEV_FRONTEND) yarn dev:editor

editor-build:  ## production build of the editor bundle
	$(DDEV_FRONTEND) yarn build:editor

# ─── openapi types codegen ───────────────────────────────────────────────────

.PHONY: types
types: ## regenerate frontend/app/types/api.d.ts from /api/doc.json
	$(DDEV_FRONTEND) bash -c 'IBEXA_INTERNAL_URL=http://127.0.0.1 yarn api:types'

# ─── symfony helpers ─────────────────────────────────────────────────────────

.PHONY: cc lint routes
cc:     ## clear symfony cache (dev env)
	$(DDEV_PHP) php bin/console cache:clear --env=dev

lint:   ## lint twig templates
	$(DDEV_PHP) php bin/console lint:twig templates/

routes: ## show api + preview routes
	$(DDEV_PHP) php bin/console debug:router | grep -E '/api|/_preview' || true

# ─── ibexa config inspection (verify overrides took effect) ──────────────────

.PHONY: config-blocks config-fields
config-blocks: ## show merged ibexa block-view config (the richtext override should win)
	$(DDEV_PHP) php bin/console debug:config ibexa_fieldtype_page blocks.richtext.views

config-fields: ## show merged ibexa field-template config (priority 100 entry should be there)
	$(DDEV_PHP) php bin/console debug:config ibexa system.default.field_templates | grep -A 1 'page_builder' || true

# ─── verification curls ──────────────────────────────────────────────────────

.PHONY: spec page
spec: ## curl the openapi spec to stdout (pretty)
	@curl -sS $(HOST_URL)/api/doc.json | python3 -m json.tool

page: ## curl /api/v1/pages/$$ID (default 72; override with `make page ID=2`)
	@curl -sS $(HOST_URL)/api/v1/pages/$(ID) | python3 -m json.tool

# ─── url cheat-sheet ─────────────────────────────────────────────────────────

.PHONY: urls
urls: ## print useful urls
	@echo "  symfony / api : $(HOST_URL)"
	@echo "  swagger ui    : $(HOST_URL)/api/doc"
	@echo "  openapi spec  : $(HOST_URL)/api/doc.json"
	@echo "  page dto      : $(HOST_URL)/api/v1/pages/$(ID)"
	@echo "  preview html  : $(HOST_URL)/_preview/pages/$(ID)"
	@echo "  editor bundle : $(HOST_URL)/build/editor/main.js"
	@echo "  nuxt ssr      : (run \`make describe\` and look for the host port mapped to container 3000)"
