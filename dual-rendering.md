# dual rendering in the buerkert page builder migration

a conceptual explainer for the dual-renderer architecture chosen for the buerkert symfony→nuxt migration, and what the `ibexa-nuxt-ssr-poc` playground validates against it.

---

## the concept

every page builder block ends up with two render paths in production:

- **editor preview** (inside ibexa admin's iframe): the existing twig wrapper that mounts a vue component via `data-*` attribute glue. the same setup that runs today, untouched by the migration.
- **public site**: a pure nuxt path where the same vue component is fed via nuxt props (no twig wrapper, no `data-*` mounting).

both paths consume the **same flat block dto** from a single mapper, and both load the **same compiled block css**.

```
ibexa admin (editor)            public site
       │                              │
   preview iframe                  nuxt ssr
       │                              │
  twig wrapper + vue           vue (nuxt props)
   (data-*, unchanged)
       │                              │
       └──── same dto + css ──────────┘
```

the editor side **stays exactly as it works today**. the public side is rebuilt on nuxt using the existing vue components, extracted from their `data-*` mounting and fed via nuxt props.

---

## the migration is rewire, not rewrite

~20 vue components already exist at buerkert. they're mounted today via `data-*` attribute glue inside twig wrappers — both in the editor preview and on the public site. the migration extracts them from that mounting on the public side and feeds them via nuxt props instead. nothing on the editor side changes.

per-block port work:

- rewire each vue component from `data-*` props to nuxt props on the public side
- write the per-block mapper that produces the dto
- ensure server-side rendering compatibility (no `window` / `document` assumptions at render time)
- keep css working for both pipelines via the shared block-css artifact

the migration plan previously sized this as "~20 vue ports / 1:1 from twig" — a number that reflects an abstract pure-twig baseline. the actual work is extraction and rewiring; the components don't need to be built from scratch.

---

## why dual rendering is the right architecture for buerkert

the migration plan (§10.5) cites four reasons to keep the editor preview separate from the public render path: building a draft api, session forwarding, revision selection, and admin-chrome integration. for buerkert, three of those are weaker than they look — the existing vue-in-twig already passes draft data through `data-*` attributes, session forwarding is a phase-1 ssr requirement regardless of preview, and revision selection is a small url-param change. that leaves admin-chrome integration as the only meaningful cost on the bridge side.

the **real reason dual rendering is justified for buerkert** is something §10.5 does not name explicitly: **the existing editor's in-iframe interactivity is non-negotiable.** click-to-edit, drag-drop block reordering, in-place toolbars, block-selection highlighting — all of it is tightly coupled to ibexa's twig + admin-chrome pipeline and to the existing vue mount. replacing the iframe with a vanilla nuxt render would strip those affordances. rebuilding equivalent interactivity in nuxt is a separate project that is not currently scoped or staffed.

a **second hard constraint reinforces this**: ibexa itself stays unmodified. patches to ibexa core, forks, or customizations to ibexa's admin ui are excluded — those would have to be re-applied or re-validated on every ibexa upgrade, creating an open-ended maintenance liability. the rule is: extend ibexa only via its official extension points (event subscribers, di decorators, public PHP api, twig extensions, configuration). under that rule, the iframe→nuxt collapse is **structurally impossible**, not just expensive — it would require modifying ibexa's admin ui to point the preview elsewhere, or hooking into ibexa's react+jquery+bootstrap admin chrome and its preview pipeline, both of which the no-modifications constraint excludes.

dual rendering, by contrast, **stays entirely inside ibexa's officially-supported extension surface**: the editor preview uses ibexa's existing twig template rendering (a stable, public extension point); the public site is a separate nuxt consumer of a clean json api; the only ibexa coupling sits in the `Ibexa*Repository` / `Ibexa*Mapper` files and uses ibexa's public PHP api (content service, location service, etc.). nothing hooks into ibexa's admin pipeline. nothing depends on undocumented internals. nothing is fragile across ibexa upgrades. **that's a positive architectural feature of the chosen approach, not just an absence of bad ideas.**

so dual rendering is **not a "pragmatic compromise during migration."** it is the **architecture that preserves a critical editor experience while keeping ibexa upgrade-compatible by extending only via official extension points**. the framing matters because it determines whether dual rendering is a temporary state or a permanent one (see "dual rendering is the steady state" below).

---

## what the preview actually shows

the editor iframe gives **block-level fidelity, not full-page fidelity**.

**shows:**
- the blocks being edited, rendered by twig with current attribute values
- the shared block css artifact (so block visuals match production)
- the existing twig layout (`default` / `complex_layout`) arranging the zones

**does not show:**
- nuxt's page chrome — header, footer, navigation, breadcrumbs
- storefront-wide css — variables, mixins, global typography outside the block artifact
- nuxt's vue layout component — which may render the same dto with different markup than the twig layout

this is what the migration plan calls "approximate accuracy." it's tolerated because editors using page builder are editing blocks, not chrome — *"does this block render correctly with these attribute values?"* is the question the preview needs to answer, and shared block css ensures the editor's per-block decisions survive into production. for true block-plus-chrome-plus-global-css fidelity, editors view the actual public-site url. **the preview is for iteration, not approval.**

since the preview already runs vue (inside the twig wrapper), block-level visual fidelity is high — same vue components on both sides, same css artifact. the "approximate accuracy" gap becomes acute mainly **after** the migration moves the public site to nuxt-rendered pure vue while the preview keeps the twig-wrapped mount; at that point the two paths need to be kept in lockstep, which is what §10.4's guardrails (below) enforce.

---

## how the recurring cost stays bounded

dual rendering is only sustainable if the two render paths don't drift. four guardrails keep that cost manageable:

1. **block attribute schema is the single source of truth.** lives in yaml, mirrored into openapi schemas. attribute changes are schema-first; both renderers update against the same schema.
2. **both renderers are dumb.** all conditionals, sorting, filtering, reference resolution happen in the mapper *before* serialization. twig and vue each receive a fully-prepared payload and walk it. no business logic in either renderer. this is the single highest-leverage rule.
3. **markup structure is part of the block contract.** documented per block. visual-regression tests (percy / loki / chromatic — tooling deferred) catch drift cheaply.
4. **css is shared, not duplicated.** block scss is extracted from the webpackencore bundle into a standalone compiled artifact loaded by both pipelines. one source, two consumers.

---

## dual rendering is the steady state

§10.5 frames the iframe→nuxt collapse as something to "revisit post-migration." in light of the editor interactivity requirement, that framing is misleading: **the collapse is off the table for the foreseeable future**. it is not a near-term option. it is a separate future project that would require rebuilding click-to-edit, drag-drop, in-place toolbars, and block-selection in nuxt — work nobody is currently scoping.

the planning should accept this honestly. dual rendering is the **end state**, not a transitional phase. that has implications:

- **§10.4's guardrails are not temporary scaffolding.** schema as single source of truth, dumb renderers, shared css, regression tests — these are the permanent maintenance discipline. invest in the regression tooling deliberately, not as a stopgap.
- **rule #2 ("both renderers are dumb") needs a small nuance**: dumb for *display*. the editor-side mount continues to have edit-affordance hooks (drag handlers, edit-mode listeners, click-to-edit wiring) — those are part of the editor's interactivity and aren't business logic. the rule still excludes conditionals, sorting, filtering, and reference resolution from the renderers; it does not exclude editor interactivity wiring.
- **the buerkert team won't get the "single render path" simplification** that §10.5 dangles as a future possibility. unless someone explicitly funds a rebuild of editor interactivity in nuxt, two paths is the architecture.

if the team ever wants to revisit, the entry point is: scope a separate project to rebuild editor interactivity in a nuxt-served `/preview/{id}?revision=...` route. that is a major effort, not a follow-up cleanup.

---

## the poc and what it validates

the `ibexa-nuxt-ssr-poc` repo is a **clean playground built outside the buerkert codebase** to validate the dual-rendering architecture in isolation, before committing to the multi-month buerkert migration. it uses a stock ibexa install with default block types, so the architecture question is decoupled from buerkert-specific complications (custom block yaml, storefront css entanglement, custom symfony bundles).

four signals must pass (per `ssr-poc-plan.md` §2.3):

| # | signal | what it proves about dual rendering |
|---|---|---|
| 1 | **block json contract works** | the mapper layer can flatten ibexa page builder content into a generic, ibexa-free dto — the **prerequisite** for any dual-renderer setup. without a clean dto, there is nothing for two renderers to share. |
| 2 | **dual rendering produces visually-identical output** | the same block dto rendered by twig and by vue is pixel-close (screenshot diff is the headline result) — proves the **core dual-rendering claim** that two paths can stay visually consistent. |
| 3 | **shared css artifact is feasible** | block scss extracts cleanly from a unified bundle and is consumed by both encore (preview) and nuxt (production) without dragging in storefront-wide variables or mixins — the **css half** of "two paths, same output." |
| 4 | **editor preview is independent** | the page builder iframe keeps rendering through twig while the public site renders through nuxt; both pipelines coexist; neither breaks the other — proves dual rendering is **safely additive** to the existing editor workflow. |

passing all four signals confirms the architecture works at small scale on stock ibexa blocks. it does **not** prove buerkert's 20 custom blocks and storefront css disentangle cleanly — that's a separate codebase-specific follow-up poc, run against buerkert once the pattern is validated here.

what the poc explicitly does **not** test (per §2.4): caching headers / cdn invalidation, ssr cookie forwarding, scaling to 20 blocks, openapi-typescript client wiring, the iframe→nuxt collapse. those are well-understood execution risk and post-migration concerns, not architecture validation.

> **why the follow-up buerkert poc carries weight:** the buerkert port is "extract existing vue from `data-*` mounting glue and feed it via nuxt props." that's a different shape of work from "build vue from scratch" and has its own risks: does the vue cleanly decouple from the `data-*` wiring? do components rely on global state or jquery hooks? does the storefront css actually separate from block css? the stock-ibexa playground cannot surface these — they need real buerkert blocks and css.

> **what the four signals actually test for buerkert:** signal #1 (clean dto) is the keystone, universal across architectures. signal #3 (shared css artifact) is essential because both paths consume the same compiled block scss. signal #2 — for buerkert, the real test is **"does the same vue component render identically when mounted via `data-*` (editor-side, twig wrapper) vs. mounted via nuxt props (public-side)?"**; the playground's pure-twig-vs-pure-vue parity test is the abstract pattern but doesn't mirror the codebase. signal #4 — **"does the public migration leave the editor's existing vue-in-twig setup undisturbed?"** — structurally yes by construction (the editor side isn't touched), but worth verifying that css extraction and shared-infra changes don't leak into the editor.

---

## related documents

in the `buerkert_new` repo:

- `ssr-poc-plan.md` — poc concept, scope, the four signals, sequencing, pass/fail criteria
- `ssr-migration-plan.md` — full symfony-side plan with locked decisions; §10 covers page builder (including §10.4 dual rendering and §10.5 editor preview), §11 covers the admin ui lane
- `ssr-architecture-notes.md` — broader architecture sketch (cdn/ssr/api caching layers, ibexa decoupling pattern, openapi flow)
