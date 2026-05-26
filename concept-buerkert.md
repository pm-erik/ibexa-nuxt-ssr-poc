# Page Builder Migration Strategy: Dual Rendering

## Summary
This document outlines the technical plan for migrating the Ibexa Page Builder to a modern Nuxt SSR frontend. Based on POC results, we propose the **Dual Rendering** approach as the most effective path forward. This allows us to modernize the public-facing site while keeping the business-critical editor experience with small changes to Ibexa core.

---

## 1. The Strategy: Dual Rendering
We have evaluated two paths and recommend **Option A** as the most viable long-term design.

### Option A: Dual Rendering (Recommended)
*   **Approach**: Every page has **two primary render paths** using **one shared mapper**:
    1.  **Public Site**: Pure Nuxt SSR.
    2.  **Editor Preview**: In-pipeline Ibexa/Twig (kept for stability).
*   **Reasoning**: This path **focuses on keeping the editor experience the same**. By keeping the editor inside Ibexa’s native environment, we preserve complex interactivity (drag-and-drop, in-place toolbars, click-to-edit) by using existing native features.
*   **Main Benefit**: Ensures the platform remains **upgrade-safe**. Since we do not modify Ibexa’s core admin UI or preview systems, the editor experience is protected from potential issues caused by future CMS updates.
*   **Implementation Effort**: A hybrid "rewire and port" effort. While existing Vue components can be reused, the **majority of Ibexa blocks are currently Twig-only** and must be moved to Vue to enable the Nuxt render path.

### Option B: Nuxt-Only (Considered Alternative)
*   **Approach**: Removing Twig entirely and pointing the editor preview iframe to a Nuxt route.
*   **Challenges**: Significant investment and technical complexity. This would require rebuilding the entire **Admin-to-Iframe communication system** from scratch, including session forwarding, draft content APIs, and UI synchronization.
*   **Long-term Considerations**: Introduces a lot of ongoing maintenance. Any future changes to Ibexa's internal admin patterns would likely require updates to our custom Nuxt bridge, making the system more complex and resource-intensive to maintain.

---

## 2. The Foundation: Unified Data Contract
The foundation of this setup is the **Ibexa-free PageDto**.
*   **Schema-First Design**: A shared JSON DTO (defined via OpenAPI/YAML) is used by both the Twig renderer (editor) and the Nuxt renderer (public).
*   **Display-Only Renderers**: Business logic (filtering, sorting, reference resolution) is handled in the Mapper layer. Both renderers serve as streamlined display layers focused on presentation.
*   **Identical Look**: Both renderers target the same markup. Sharing the same Vue components ensures that the public site and editor look identical.
*   **Backend Separation**: Symfony acts as a data provider. Swapping the CMS backend in the future would only require updating the Mapper, not the frontend.

## 3. Authentication & Sessions
We suggest using **Cookie-based authentication** to maintain consistency with Ibexa’s native session management.
*   **Unified Session**: This ensures that users remain logged in while moving between legacy pages and new Nuxt pages. It also simplifies access to the commerce cart and user-specific data.
*   **Simpler Integration**: Avoiding tokens reduces the need for new infrastructure to issue and refresh credentials. Nuxt can simply pass existing cookies to the backend.
*   **Upgrade Safety**: By sticking to Ibexa’s standard session patterns, we avoid custom security implementations that could be affected by future platform updates.

---

## 4. Technical Hurdles: The Sync Layer
The POC surfaced specific technical issues between Vue's lifecycle and Ibexa’s admin DOM patterns. These represent the primary development considerations for the migration effort:

*   **Non-Persistent Shells**: Ibexa renders individual blocks on drag-add/publish without refreshing the main page. This requires a move from "global data delivery" to a more detailed **per-block sibling data** model to keep Vue components in sync with editor changes.
*   **DOM Data Considerations**: Ibexa’s React admin frequently saves and restores DOM fragments. Standard Vue mounting can result in "stacked" renders (duplicate blocks). We addressed this with a defensive cleanup layer.
*   **Dynamic DOM Targets**: Ibexa replaces marker nodes during interactions. To prevent Vue from "losing" its mount point, we implemented a custom strategy that forces clean unmounts when the underlying DOM node changes.
*   **Iframe Separation**: The editor shell and the preview iframe are separate documents. Any shared state (e.g., global configuration) must be handled through communication between documents or redundant mounts.

---

## 5. Migration Costs & Maintenance
*   **Large Porting Effort**: The "rewire" framing is accurate for existing Vue blocks, but the **majority of Ibexa blocks must be moved from Twig to Vue**. This represents an initial effort per block.
*   **Editor Integration Effort**: While visuals are kept the same, the editor requires a **client-side sync layer** (~150 lines of code for basic blocks). This layer grows with the variety of admin interactions (drag-and-drop, reorder, etc.) that need to be supported.
*   **Maintenance of the Sync Layer**: This layer is a necessary part of maintenance. While it avoids touching Ibexa internals, it relies on watching Ibexa's DOM patterns. Future Ibexa versions might change these patterns, requiring matching updates.
*   **CSS Extraction & Refactoring**: Block-specific styles must be separated from the legacy storefront bundle into a shared file. This is a difficult refactoring task for complex legacy components.
*   **SSR Compatibility Review**: Existing Vue blocks should be reviewed and cleaned of `window`/`document` dependencies to ensure stability in the Nuxt SSR environment.
*   **Page-Frame Strategy**: To maintain a consistent preview experience, the proposed plan continues to support the **Twig page frame** (header/footer/navigation) for the editor, which involves a small maintenance effort for the preview shell.
*   **Caching & Update Strategy**: Separating the frontend introduces an additional cache layer. Synchronizing Ibexa’s cache tags with the Nuxt SSR response is a key technical need to ensure content updates appear quickly on the public site.

---

## 6. Next Steps
The POC has validated the core design. The following steps are suggested to progress with the Buerkert-specific implementation:
1.  **Component Audit**: Map all existing Ibexa blocks to identify which are already in Vue vs. the majority needing a move from Twig. Verify that existing Vue components separate cleanly.
2.  **CSS Strategy**: Finalize the move to a shared CSS file (e.g., extracting SCSS vs. moving to a utility-first approach).
3.  **Buerkert-Specific POC**: Validate the "Sync Layer" against real-world complex blocks and legacy CSS dependencies.
4.  **Cache Tag Bridge**: Design the mechanism for passing Ibexa’s cache tags (xkey) through the PageDto to the Nuxt SSR response for robust updates.
