# Page Builder Migration: Strategy and POC Results

## Architectural Options: The "Why"
We evaluated two primary paths for migrating Ibexa's Page Builder to a Nuxt SSR architecture.

### Option A: Dual Rendering (Chosen)
*   **Approach**: Keep the existing Twig-based editor pipeline for the admin interface while building a new Nuxt-based pipeline for the public site.
*   **Rationale**: Preserves 100% of Ibexa's editor interactivity (drag-and-drop, click-to-edit, toolbars) which is tightly coupled to the Twig/iframe environment.
*   **Cost**: "Rewire, not rewrite." Requires extracting Vue components from Ibexa-specific glue and feeding them via props in Nuxt.

### Option B: Nuxt-Only (Rejected)
*   **Approach**: Redirect the editor preview iframe to a Nuxt route, retiring Twig entirely.
*   **Rationale**: Single render path, zero drift risk.
*   **Blockers**: Prohibitive cost and risk of rebuilding the complex editor interactivity from scratch in Nuxt. Requires complex Draft APIs, session forwarding, and replicating the Admin/Iframe communication contract (postMessage, scroll sync).

## POC Achievements: The Foundation
The POC successfully validated that **Option A** is a viable, permanent end state:
- **Unified Data Contract**: A single `PageDto` (JSON) serves both Twig and Nuxt.
- **Visual Parity**: Sharing the same Vue component tree ensures the public site and editor look identical by construction.
- **Ibexa Integrity**: Zero modifications to Ibexa core; uses official extension points (Event Subscribers, Twig Extensions).
- **Verified Complexity**: Successfully mapped RichText, Embeds, and cross-content relations.

## Technical Implementation & Stability
To make Vue work reliably inside Ibexa's legacy admin UI, the POC implemented a "Reconciliation Layer":
1.  **MutationObserver**: The editor bundle watches for DOM changes. When a block is dragged in or republished, Vue detects the new marker and hydrates it instantly.
2.  **Vue Teleport**: Blocks are teleported into Ibexa's DOM markers from a single shared Vue app, avoiding the overhead of multiple Vue instances.
3.  **Sibling Data Delivery**: Block data is emitted as sibling `<script>` tags next to markers, ensuring data stays fresh even when Ibexa re-renders individual blocks.
4.  **Idempotency Guards**: Defensive cleanup (`prepareMarker`) prevents "stacked" renders when Ibexa re-injects DOM fragments.

## Costs and Challenges
1.  **Vue Component Debt**: Existing Twig-based blocks must be rebuilt as Vue components.
2.  **Page-Frame Fidelity**: To avoid a "block-only" preview regression, we will keep the Twig page frame (header/footer) alive for the editor preview shell.
3.  **CSS Extraction**: Block-specific styles must be separated from the main storefront bundle to be shared between Nuxt and the editor.

## Remaining Gaps
- **CSS Strategy**: Decision needed on shared SCSS vs. Utility-first (Tailwind) approach.
- **Buerkert-Specific Validation**: Testing against real-world complex blocks and legacy CSS dependencies.
- **Timeline Commitment**: Schedules will be finalized after the go/no-go checks on component decoupling and SSR readiness.
