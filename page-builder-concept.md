# Page Builder in the SSR Migration — Architectural Options, Trade-offs, and POC Questions

Context for stakeholders. Yesterday's discussion went back and forth on the migration's architectural options without reaching a clear path forward. A few factors made it hard to agree:

- Familiarity with the **Page Builder** feature varies across the room (some use it daily, others have never opened it).
- The new **Symfony backend architecture** (facade pattern, DTO-based JSON API) is unfamiliar.
- The cost of replacing the editor preview with Nuxt — including rebuilding the editor's interactivity from scratch — is an open question without a shared estimate.

This document gives everyone a shared baseline, contrasts the two architectural options, names the constraints, and lists the open questions a POC should answer before timelines are committed.

**Page Builder is the illustrative example throughout** — the most editor- and Ibexa-coupled feature, which makes it the cleanest test case for the architectural choices. The trade-offs surfaced here apply broadly to the migration.

---

## TL;DR

- The migration can either **keep the editor on its current Twig + Vue setup and rebuild only the public site in Nuxt** (Option A — dual rendering), or **rebuild everything in Nuxt including the editor preview** (Option B — Nuxt-only).
- The case against Option B rests primarily on **the cost of rebuilding editor interactivity from scratch** — click-to-edit, drag-drop, toolbars, block selection, all currently tied to Ibexa's existing pipeline. That cost hasn't been carefully estimated (Q6). Option B's other pieces (iframe URL redirection, admin/iframe communication compatibility) are real engineering work but sit inside official Ibexa extension points.
- The analysis points toward **Option A (dual rendering)** as the better fit for the constraints. **This is offered as a position to evaluate, not a settled decision** — the case partly rests on assumptions about Option B's costs that haven't been carefully estimated.
- **Today's preview shows the full page** — header, footer, navigation, storefront CSS, all of it (the "page frame" wrapping the actual content blocks). Under Option A, the default behavior is block-only, so **a page-frame workaround must be included in Option A's scope** to avoid a real regression for editors. Three workarounds are described below, all compatible with the constraints; "keep the Twig page frame for preview only" preserves today's behavior most directly.
- Key open questions that need a **Buerkert-specific follow-up POC** before timelines are committed: do existing Vue components decouple cleanly from `data-*` mounting, render server-side, and have cleanly-separable CSS? What's a realistic estimate for rebuilding editor interactivity?

---

## What the Migration Is, in One Paragraph

Buerkert is moving from an intertwined Symfony + Twig + Vue codebase to **Symfony serving JSON, Nuxt rendering pages on the server**. The public site is rendered by Nuxt; Symfony stops producing HTML; Ibexa is hidden behind a clean PHP wrapper so the rest of the system doesn't depend on Ibexa-specific data shapes. Routes migrate one at a time over phases — Twig stays live for un-migrated routes until each new Nuxt route is healthy. No big-bang rewrite. The strategic prize: cleaner architecture, an Ibexa-replaceable backend, and a modern frontend stack.

---

## What Page Builder Is (Catch-Up)

Ibexa's editor-driven page composition tool. A page is `layout + zones + blocks`. An editor:

- Picks a layout (e.g., `default` or `complex_layout`).
- Drops blocks into zones (richtext, image, multimedia, custom block types — Buerkert defines ~20 of them).
- Edits each block's attributes inline.
- Sees a live preview as they work.

At Buerkert, the `landing_page` content type uses Page Builder, and editors use it daily. **This is their primary work surface.** Anything that breaks Page Builder breaks the editor workflow.

## What the Editor Experience Is Today

Inside Ibexa admin, Page Builder shows a **preview iframe**. Inside that iframe, editors can:

- **Click any block** to open its edit panel.
- **Drag blocks** to reorder them within or across zones.
- **See in-place toolbars** when hovering.
- **See visual highlights** on the selected block.

This isn't standard browser behavior. It's custom wiring connecting Ibexa admin (React + jQuery + Bootstrap), the iframe content (Twig + Vue + `data-*` attributes), and Ibexa's preview machinery. Editors depend on it. **How hard it would be to rebuild this interactivity in a different stack is the biggest open question below.**

## What's Actually in the Codebase Today

The Page Builder blocks at Buerkert are not pure Twig templates. They are **Twig wrappers that mount Vue components via `data-*` attribute glue**:

- The Twig template emits markup like `<div data-block="..." data-attrs="...">...</div>`.
- A JS bootloader reads those attributes and mounts a Vue component into the wrapper.
- The Vue component does the actual visual rendering.

So today's preview is **already running Vue inside Twig wrappers** on both the editor and public sides. The implication for sizing: **the migration's port work is "rewire," not "rewrite"** — the ~20 Vue components already exist, and the migration extracts them from `data-*` mounting and feeds them via Nuxt props on the public side.

---

## The New PHP Backend Architecture (Catch-Up)

What changes on the Symfony side:

- Controllers no longer render HTML. They return **plain data objects (DTOs) serialized to JSON** (`/api/v1/pages/{id}` returns a `PageDto`, etc.).
- A **wrapper layer** hides Ibexa from everyone else. Only `Ibexa*Repository` and `Ibexa*Mapper` files are allowed to import Ibexa. Consumers depend on **interfaces** (`PageRepositoryInterface`), not on `Ibexa*` classes.
- Swapping Ibexa for another backend = changing one binding line in `services.yaml`.

Why this matters for Page Builder: the migration's keystone is a `PageDto` produced by the facade. Shape:

```json
{
  "layout": "default",
  "zones": {
    "main": [
      { "type": "richtext", "attributes": { "html": "..." } },
      { "type": "image",    "attributes": { "src": "...", "caption": "..." } }
    ]
  }
}
```

**No Ibexa concepts in the DTO.** Nuxt and the editor Twig both consume this same DTO. This is what POC criterion #1 validates. Without it, the rest of the architecture has no foundation.

---

## The Two Architectural Options

With the JSON API in place, there are two ways the Page Builder migration can play out.

### Option A — Dual Rendering (Keep Editor As-Is, Rebuild Public Side)

- **Editor preview** keeps using Twig + Vue mounting (current state, mostly unchanged), now consuming the new DTO instead of ad-hoc data passed through Twig.
- **Public site** renders blocks via pure Nuxt — Vue components fed by props directly, not by `data-*` attribute mounting.
- **Block CSS** is extracted from the storefront bundle into one compiled artifact loaded by both pipelines.

```
Ibexa admin (editor)            Public site
       │                              │
   preview iframe                  Nuxt SSR
       │                              │
  Twig + Vue (data-*)         Vue (Nuxt props)
       │                              │
       └──── same DTO + CSS ──────────┘
```

Two render paths permanently coexist. **The editor side stays exactly as it works today.** The public side is rebuilt on Nuxt.

#### A caveat under Option A: preview fidelity

The editor preview iframe under Option A shows blocks rendered with their CSS, arranged by the existing Twig layout — but it does **not** show Nuxt's **page frame** (the header, footer, navigation, and breadcrumbs that wrap the content) or the storefront-wide CSS (variables, mixins, global typography that lives outside the shared block artifact). The editor sees blocks in their zones, not in a full-page context.

**Today's preview shows the full page** — header, footer, navigation, storefront CSS, the works (Symfony + Twig currently renders the whole page for editor preview). Under Option A as described above, the preview would default to block-only. **This is a real regression for editors unless mitigated.** A page-frame workaround therefore needs to be part of Option A's scope, not an optional add-on.

Three workarounds are compatible with the no-Ibexa-modifications rule and the editor-interactivity rule:

- **Keep the Twig page frame for preview only** *(most natural fit for Buerkert)*. When the rest of Twig is retired at the end of the migration, keep the templates that render the page frame (header, footer, navigation) alive — used only by the editor preview. The editor's preview-rendering Symfony controller continues to wrap blocks in those existing frame templates. **This preserves today's preview behavior directly.** The page frame changes rarely, so the ongoing cost is low.
- **Page-frame-as-API.** Nuxt exposes an endpoint that returns a rendered HTML snippet of the page frame. The editor iframe loads it around the blocks. Cleanest architecturally, but introduces a runtime dependency on Nuxt for the editor preview to render in full.
- **"View full page" link.** Editors keep a block-only iframe and click through to the actual public-site URL (with a draft token) for full-context review. Cheapest to build but a UX downgrade from today's inline full-page preview.

All three sit inside the constraints (no Ibexa changes, no interactivity rebuild). The first is the most direct match for Buerkert's current behavior; the other two are noted for completeness.

### Option B — Nuxt-Only (Collapse Editor Preview into Nuxt)

- Editor preview iframe points at a Nuxt route — something like `/preview/{id}?revision=...`.
- Nuxt becomes the only render path; Twig templates retire.
- One render path, no drift risk.
- **The upside**: the editor preview shows the full page exactly as the public site renders it — header, footer, navigation, storefront CSS, everything. No fidelity gap, no need for the workarounds described under Option A.

Requires building:

- A **draft API** on Symfony, so the iframe can fetch unpublished content.
- **Session forwarding**, so the editor's identity flows from Ibexa admin into the iframe.
- **Revision selection**, so the editor can preview a specific draft.
- **Iframe URL redirection** — an event subscriber on `GenerateContentPreviewUrlEvent` (an officially-supported Ibexa extension point in `Ibexa\Contracts\PageBuilder\Event`) plus a small Buerkert-side Symfony route that redirects to the Nuxt URL. Sits inside the no-modifications rule.
- **Admin/iframe communication compatibility** — Ibexa admin and the preview iframe likely exchange messages (postMessage events, scroll synchronization, save-state coordination). Whatever Ibexa admin expects to send to or read from the iframe has to be reproduced on the Nuxt-rendered preview. Engineering work inside the constraints, but the exact contract needs investigating (see Q7 below).
- **Rebuilding all editor interactivity in Nuxt**: click-to-edit, drag-drop, in-place toolbars, block selection — currently tied to Ibexa's Twig + admin pipeline; would have to be re-implemented from scratch.

The last item is what most affects the cost comparison between the two options. It's a single bullet but represents the biggest unknown in Option B's sizing — getting a real estimate is one of the open questions listed below.

### Also considered: a Nuxt-renders / Ibexa-takes-over hybrid

Another idea raised in discussion: have Nuxt produce the page HTML on the server (with the full page frame), let the editor iframe load that HTML, and then let Ibexa's existing client-side JS — the same code that handles drag-drop and click-to-edit today — take over before Nuxt hydrates. On paper, this would solve Option A's preview-fidelity gap and Option B's interactivity-rebuild cost at the same time.

**Initial reading: not promoted to a third option in the near term, but worth documenting for future reference.** Three concerns:

- **The iframe source has to change** — handled the same way as Option B (event subscriber on `GenerateContentPreviewUrlEvent` + a Buerkert-side Symfony route). Not a hybrid-specific blocker; just listed because the hybrid inherits this requirement.
- **Editor wiring leaks into the public site, structurally.** Nuxt is the sole renderer for both the editor preview and the public site, so whatever editor-specific `data-*` markup Ibexa's JS needs has to be emitted on both sides — including the public site where it serves no purpose. Under Option A this leakage is avoidable: the `data-*` can live on the editor-only Twig wrapper around the Vue mount point. Under the hybrid there's no editor-only wrapper, so the leakage is unavoidable.
- **Two systems would compete for the same DOM.** Nuxt's hydration and Ibexa's existing JS mounting both expect to manage the same elements. Coordinating them cleanly looks tricky, but the team doesn't have enough hands-on Nuxt experience yet to know how hard or easy that coordination would actually be.

Option A with the "keep the Twig page frame for preview" workaround already covers the same fidelity benefit without these concerns. The hybrid could become more attractive in the future if (a) Ibexa ships an officially-supported way to redirect its preview iframe to an external URL, and (b) the team builds enough hands-on Nuxt experience to confidently design and estimate the hydration-coordination work. Until both are clearly in place, the hybrid is parked rather than evaluated as a near-term alternative — without ruling it out for later.

---

## Honest Contrast

| Dimension | Option A — Dual Rendering | Option B — Nuxt-Only |
|---|---|---|
| **Render paths** | 2 (permanent) | 1 |
| **Editor interactivity** | Preserved as-is, no change | Must be rebuilt from scratch in Nuxt |
| **Editor preview fidelity** | Block-only by default; **today's preview is full page**, so Option A must include a page-frame workaround in scope (most natural: keep the Twig page frame for preview only) | Full page exactly as the public site renders — no fidelity gap |
| **Ibexa modifications required** | None — uses official extension points | None — iframe redirect uses `GenerateContentPreviewUrlEvent` (official extension point). Admin/iframe communication compatibility is engineering work, not core modification. |
| **Upgrade-safety** | Safe — nothing modified in Ibexa | Safe for the iframe redirect (event lives in `Ibexa\Contracts`, the public API). Admin/iframe communication compatibility may need adjustment across Ibexa versions. |
| **Drift between paths** | Ongoing risk; needs guardrails | N/A — one path |
| **Build cost (one-time)** | Rewire ~20 existing Vue components from `data-*` to Nuxt props; build CSS extraction; build mappers | All of the above PLUS the iframe→Nuxt bridge PLUS rebuilding editor interactivity |
| **Recurring cost** | Sync between two renderers, regression tests, double-updates per block change | Low — one renderer to maintain |
| **Risk of editor regression during migration** | Low — editor side untouched | High — editor depends on rebuilt interactivity working from day 1 |
| **Fits within "no Ibexa modifications" rule** | Yes | Yes — iframe redirect is event-based; admin/iframe communication compatibility is engineering work, not core modification. |

---

## The Constraints That Decide It

Six constraints, ranked by how strongly they push toward Option A:

1. **Editor interactivity is non-negotiable.** Click-to-edit, drag-drop, toolbars, selection — all tightly coupled to Ibexa admin's pipeline. Losing them or temporarily breaking them is unacceptable for a feature editors use daily.
2. **Ibexa stays unmodified.** No patches, no forks, no admin-UI customization, no dependence on private APIs. Extensions only via official extension points (event subscribers, DI decorators, public PHP API, Twig extensions, configuration). This keeps Ibexa upgradable without rework — a core requirement, not a nice-to-have.
3. **Consumers must not couple to Ibexa.** The JSON API uses Ibexa-free DTOs. Only `Ibexa*Repository` / `Ibexa*Mapper` files import Ibexa. Swapping backends = one line change. (This is the *outward* boundary — paired with #2, the *inward* boundary.)
4. **The site must not go down during migration.** Routes move one at a time, Twig stays live until each Nuxt route is healthy, rollback is one switch.
5. **Drift between two render paths is permanent risk.** *(Only relevant under Option A.)* Mitigated by the **dual-rendering guardrails**: block attribute schema as single source of truth, dumb renderers (for *display*; editor-side keeps its interactivity hooks), shared CSS artifact, visual-regression tests. Treated as permanent maintenance discipline.
6. **The API contract becomes load-bearing.** Silent schema changes break Nuxt. Mitigated by OpenAPI as enforceable contract, CI diff on the spec, and URL versioning.

**How the constraints apply to each option:**

- **Option A** fits all six without conflict. Twig templates for the editor, a Nuxt consumer of the JSON API for the public site, a read-only wrapper using only Ibexa's public PHP API. Everything inside Ibexa's official extension points. Nothing brittle, nothing tied to a specific Ibexa version.
- **Option B** also satisfies #2 (Ibexa stays unmodified). The iframe redirect uses `GenerateContentPreviewUrlEvent`, an officially-supported event in `Ibexa\Contracts\PageBuilder\Event`; with an event subscriber + a Buerkert-side redirect route, the iframe points at Nuxt without modifying Ibexa core. The remaining work — admin/iframe communication compatibility (postMessage, scroll sync, save-state coordination) — is engineering work inside the constraints, not core modification.
- **Option B's blocker is #1.** Rebuilding editor interactivity from scratch (click-to-edit, drag-drop, toolbars, block selection — all currently tied to Ibexa's pipeline) is the dominant cost. That cost hasn't been carefully estimated (Q6). If Q6 lands at "manageable," Option B becomes a real candidate; if it lands at "expensive," Option A holds.

---

## What a POC Should Validate, and What It Would Leave Open

The proposal is to build a **clean-playground POC outside the Buerkert codebase** to validate the general dual-rendering pattern using stock Ibexa blocks. It would check four things:

1. **Block JSON contract works** — the wrapper can produce a clean Ibexa-free DTO. **The foundation — without it, nothing else works.**
2. **Dual rendering produces visually-identical output** — same DTO rendered two ways looks the same.
3. **Shared CSS artifact is feasible** — block SCSS can be extracted from the storefront bundle and loaded by both pipelines.
4. **Editor preview is independent** — adding a Vue path on the public side doesn't break the editor's existing setup.

The four checks above test the **general pattern** with stock Ibexa. They would **not** address Buerkert-specific questions, which need separate investigation before timelines are committed.

### Open Questions for a Buerkert-Specific Follow-Up POC

These need real Buerkert blocks, real storefront CSS, and the real Ibexa version:

| # | Open Question | Category | Why It Matters |
|---|---|---|---|
| Q1 | **Can Buerkert's existing Vue components decouple cleanly from `data-*` mounting?** | Go / no-go | Two things hinge on this. (a) Port effort: if components have hidden dependencies on the mounting glue (global state, jQuery hooks, DOM assumptions), the "rewire" is much harder than 1:1 prop-feeding. (b) Public/editor separation under Option A: if `data-*` lives on the editor-only Twig wrapper around the Vue mount point, the public side emits no editor-specific markup. If `data-*` is baked into the Vue components' own output, the public side inherits it as dead weight. |
| Q2 | **Do the existing Vue components render server-side?** | Go / no-go | Server-side rendering generally requires components to work without browser-only objects like `window` / `document` at render time. Components that rely on those may need refactoring before they can render server-side; the per-component effort depends on what assumptions they make. |
| Q3 | **Can block SCSS be cleanly separated from the storefront CSS bundle?** | Go / no-go | If block styles depend on storefront-wide variables / mixins that aren't trivially extractable, extraction is much harder than estimated and the migration's sizing grows significantly. |
| Q4 | **What is the actual recurring cost of the dual-rendering guardrails in Buerkert's release rhythm?** | Execution risk | The guardrails (schema discipline, visual-regression testing infrastructure such as Percy / Loki / Chromatic, double-updates per block change) aren't free. Without real numbers, recurring cost is a guess. |
| Q5 | **Does the editor's interactivity break if the underlying Vue is changed?** | Execution risk | The editor's drag-drop and click-to-edit might depend on specific Vue mount semantics. When we rewire Vue from `data-*` to Nuxt props on the public side, does anything affect the editor inadvertently? |
| Q6 | **What does Option B's editor-interactivity rebuild actually look like, scoped honestly?** | Architectural decision input | The case for Option A vs. Option B rests partly on the assumption that rebuilding click-to-edit, drag-drop, toolbars, and block selection in Nuxt is expensive. Without a real estimate, the architectural decision is being made on intuition. Closing this gap is needed both to firm up an Option A recommendation and to ground any future Option B revisit. |
| Q7 | **What is the contract between Ibexa admin and the preview iframe — postMessage events, scroll synchronization, save-state coordination?** | Architectural decision input | If Option B is on the table after Q6, the Nuxt-rendered preview must reproduce whatever Ibexa admin expects to send to and read from the iframe. Without knowing the contract, Option B's full sizing is incomplete. |

**Q1, Q2, Q3 are pre-migration go/no-go checks** — answers determine whether Option A's sizing is achievable. These block timeline commitments for Option A specifically.

**Q4 and Q5 are migration-execution risks** — they affect cost and timeline but not the architectural decision. Surface them with explicit checkpoints in early phases.

**Q6 is the dominant blocker for Option B** and the main architectural-decision input. The choice between Option A and Option B mostly comes down to whether rebuilding editor interactivity in Nuxt is expensive enough to make Option B unworkable. Without a real estimate, the recommendation rests partly on intuition.

**Q7 is architectural decision input for Option B** — relevant if Q6 lands favorably enough that Option B is on the table. Until then it can be parked.

---

## Where the Analysis Points

**The analysis points toward Option A.** It satisfies all six constraints with the smallest scope: the port work is "rewire, not rewrite" — existing Vue components are reusable, the editor side doesn't change, and there's no editor-interactivity rebuild. Option B can also fit the constraints (iframe redirect is event-based, communication compatibility is engineering work) but adds a substantial scope unknown — rebuilding the editor's click-to-edit, drag-drop, and toolbars in Nuxt (Q6).

**This is offered as a position to evaluate, not a settled decision.** The case mostly rests on Q6. If Q6 lands cheap, Option B becomes a real candidate; everything else under Option B sits inside official Ibexa extension points. If Q6 lands expensive, Option A holds.

**Before committing to migration timelines:**

1. Build and run a **clean-playground POC** to validate criteria #1–#4 (the general pattern works).
2. Build and run a **Buerkert-specific follow-up POC** to answer Q1, Q2, Q3 against real Buerkert blocks and CSS — these are the go/no-go checks for Option A's sizing. Could run in parallel with #1.
3. Produce a **real estimate for Q6** — what does the editor-interactivity rebuild actually cost? This firms up the architectural decision and grounds any future revisit of Option B.

**Provisional planning premises** (if the analysis is adopted after the open questions resolve):

- Dual rendering is the **permanent end state**, not a transitional phase. Invest in the dual-rendering guardrails as permanent maintenance discipline.
- The migration is **rewire, not rewrite** — extract existing Vue components for the public side, leave the editor side untouched.
