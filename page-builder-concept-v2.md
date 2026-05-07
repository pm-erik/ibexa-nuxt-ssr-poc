# Page Builder in the SSR Migration — Concept

How the page-builder migrates, what the POC has verified, and the real costs we found along the way.

## TL;DR

- **Adopt Option A — dual rendering.** Editor preview keeps Twig + Vue (current setup); public site is rebuilt in Nuxt. Both render the same flat `PageDto` from one Ibexa-free mapper.
- **Option B (Nuxt-only, replacing the editor preview) is off the table** — would require rebuilding click-to-edit, drag-drop, toolbars, and block selection from scratch. Unscoped, unstaffed, almost certainly too expensive.
- **Treat dual rendering as the permanent end state**, not a transitional phase.
- **The POC surfaced real costs** that earlier framing hid — the editor side is NOT untouched; it gains a client-side reconciliation layer. Documented below.
- **Page-frame fidelity needs to be in scope** — without it, Option A is a real regression for editors.
- **Pre-migration go/no-go** depends on a Buerkert-specific POC against real blocks and CSS.

## What's at stake

Page Builder is editors' primary work surface. Anything that breaks it breaks the editor workflow.

**Today's blocks are mostly pure Twig.** Some — a minority — mount Vue components via `data-*` attribute glue; those Vue components are full apps with their own dependencies, running as DOM islands with no global scope. **Vue is not widely used across Buerkert's blocks today.**

This reframes the migration's per-block effort. The "rewire, not rewrite" framing applies only to the (minority of) blocks that already have a Vue component. For the rest — the majority of blocks — the migration means **building Vue components from scratch**, using the existing Twig markup as reference. Per-block effort therefore splits into two cohorts:

- **Already-Vue blocks**: extract from `data-*` mounting, decouple from any global state assumptions, ensure SSR compatibility (no `window`/`document` at render time). Lighter — but the dependency-tree-per-block reality (full apps, no shared scope) makes it less mechanical than 1:1 prop-feeding.
- **Pure-Twig blocks**: port markup to a fresh Vue component, design props, ensure SSR compatibility, write tests. Heavier — but more predictable, since there's no legacy Vue baggage to reconcile.

Editor interactivity (click-to-edit, drag-drop, in-place toolbars, block selection) is custom wiring across Ibexa admin, the iframe content, and Ibexa's preview machinery — not standard browser behavior. Editors depend on it daily.

## Why Option A

Two hard constraints decide it:

1. **Editor interactivity is non-negotiable.** Losing it or temporarily breaking it is unacceptable for a daily-use feature.
2. **Ibexa stays unmodified.** No patches, forks, or admin-UI customization. Extensions only via official extension points. Keeps Ibexa upgradable.

Under those, replacing the iframe content with a Nuxt-rendered preview means rebuilding editor interactivity in Nuxt — a separate, unscoped project.

**The DTO is the contract.** Both render paths consume the same flat `PageDto` with no Ibexa concepts. One mapper bridges Ibexa to the DTO. Swapping the CMS = changing one binding.

## Real costs the POC surfaced

The POC confirmed the architecture works, but it also surfaced concrete collisions between Vue mounting and Ibexa's admin DOM/render patterns. **These are characteristics of the integration point, not bugs.** Each one requires explicit handling and adds a real client-side cost beyond "extract Vue components from `data-*` glue":

1. **Per-block server re-render, not per-page.** When an editor drags a block in or publishes, Ibexa re-renders just that block, not the whole field. Anything we'd attach to the field-level wrapper goes stale on the first interaction → data delivery must be per-block.
2. **Ibexa's admin serializes and re-injects DOM in the page-builder edit view.** Vue's already-mounted output gets captured and reappears. Without defensive cleanup, blocks render twice.
3. **DOM target references flip without warning.** Vue's reactivity has edge cases when the target element is replaced. Stable mount keys are needed to force clean unmount/remount.
4. **The bundle re-evaluates on draft transitions.** Without an idempotency guard, the editor app mounts more than once.
5. **The edit view is a nested document, separate from the preview iframe.** Independent Vue mounts in each — cross-frame state sync becomes a real concern if blocks need shared client-side state.

**Implication for the migration estimate:** "Editor side stays unchanged" was too soft. Editor _visuals_ are preserved; editor _wiring_ gains a client-side reconciliation layer (~150 LOC for the POC's stock Ibexa blocks). It scales weakly with block count but strongly with the variety of editor interactions exercised. Stays inside official extension points — Ibexa upgrades remain safe — but it's a real maintenance line.

Findings 1–4 surfaced via the most basic editor interactions (drag, publish). They are admin-interaction-driven, not block-type-specific, so they apply to any Vue-in-Ibexa-admin integration at Buerkert too. The Buerkert-specific POC must exercise drag-add, publish, attribute edit, delete, reorder against real blocks to confirm no further collisions surface.

## What the POC has verified

| Signal | Status |
|---|---|
| Block JSON contract works | **Done.** Four block types mapped end-to-end (richtext, embed, video, contentlist) including cross-content resolution into a shared `ContentSummaryDto`. |
| Dual rendering produces visually-identical output | **Done by construction** — same Vue components in both render paths. |
| Shared CSS artifact is feasible | **Not addressed.** Open architectural decision. |
| Editor preview is independent | **Done.** Both render paths coexist; Ibexa is not modified; the editor-side rewiring is contained behind official extension points. |

The integration costs above are also explicit now, instead of buried.

## Page-frame caveat

Today's preview shows the full page (header, footer, navigation, storefront CSS). Option A as a default would show block-only — a real regression. A page-frame strategy must be in Option A's scope. Candidates:

- **Keep the Twig page frame for preview only** — most direct match for today's behavior; low ongoing cost.
- **Use Ibexa's standard preview-mode (outside the page-builder iframe) as a Nuxt mount-point** — editor keeps in-iframe interactivity for block editing; clicks through to a full-page Nuxt preview for context.
- **"View full page" link** to the actual public-site URL — UX downgrade from today's inline preview.

## What's still open

1. **CSS strategy.** Biggest open architectural decision. Block SCSS extraction from the storefront bundle isn't free in Nuxt; choice between encore-as-authority, shared-SCSS, and tailwind-utilities is structural.
2. **Page-frame strategy.** Must be committed before Option A is sized realistically.
3. **Real Buerkert blocks vs stock Ibexa.** The POC used stock blocks. Real Buerkert blocks split into two cohorts (see "what's at stake" above): a minority with existing Vue components, a majority that are pure Twig today and need fresh Vue components built. Either cohort may surface additional integration collisions; the per-block port effort is mixed and almost certainly larger than the previous "extract from `data-*`, feed via Nuxt props" framing implied.
4. **Custom block-level editor affordances** (per-block toolbars, in-place edit handles). Not exercised here. If Buerkert needs custom affordances, that's an additional client-side surface beyond what the POC validates.

## Recommendation

Adopt Option A. Treat dual rendering as the permanent end state. Run the Buerkert-specific POC against real blocks and CSS — exercising drag-add, publish, edit, delete, reorder — before committing migration timelines.
