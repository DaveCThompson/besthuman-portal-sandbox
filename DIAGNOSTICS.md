# Unresolved Issues: Systematic Diagnostic Plan

This document tracks the investigation into persistent, high-priority issues. The goal is to follow a methodical, evidence-based approach to find the true root cause where previous attempts have failed.

---

## 1. Persistent VS Code TypeScript / ESLint Error

-   **Problem:** The editor incorrectly reports "Cannot find namespace 'JSX'" and other fatal parsing errors, despite the presence of correct `tsconfig` and `eslint.config.js` files. This breaks all developer tooling.
-   **What Has Been Tried:**
    -   Creating `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json` with correct project references.
    -   Creating `.vscode/settings.json` to force the workspace TS version.
    -   Splitting `eslint.config.js` to handle Node and App files separately.
    -   Complete `node_modules` and lockfile deletion and reinstallation.
    -   Reloading the VS Code window and restarting the TS server.
    -   Disabling all VS Code extensions.

-   **Systematic Verification Plan:**
    1.  **Verify Environment:**
        -   [ ] In the terminal, run `node -v` and `npm -v`. Confirm they are modern, stable versions (e.g., Node 20.x, npm 10.x).
    2.  **Isolate from VS Code:**
        -   [ ] In the terminal, run `npx eslint . --max-warnings=0`. This runs ESLint directly.
        -   [ ] **Analyze the output.** Does it produce the same `vite.config.ts` parsing error? If so, the `eslint.config.js` is still flawed. If it passes with zero errors, the problem is 100% within VS Code's extension host.
    3.  **Clear All Caches:**
        -   [ ] Delete the `node_modules` folder.
        -   [ ] Delete the `.vite` cache folder in the project root.
        -   [ ] In the terminal, run `npm cache clean --force` to clear npm's global cache.
        -   [ ] Re-run `npm install`.
    4.  **Minimal Reproduction:**
        -   [ ] In a completely separate directory, run `npm create vite@latest minimal-test -- --template react-swc-ts`.
        -   [ ] `cd minimal-test` and `npm install`.
        -   [ ] Open this new, clean project in VS Code. Does it show any JSX errors? If yes, the issue is with the global VS Code installation itself. If no, it confirms a subtle misconfiguration still exists within the main project's files.

---

## 2. Profile Page Layout Incorrect

-   **Problem:** The form content on the profile page does not stretch to the full width of the main content area, appearing shrink-wrapped.
-   **What Has Been Tried:**
    -   Removing `alignItems="flex-start"` from the `ProfilePage`'s root `Stack`.
    -   Changing the `MainLayout` main content `Box` to use `flex: 1` instead of a `width` calculation.

-   **Systematic Verification Plan:**
    1.  **Isolate the Layout (`MainLayout.tsx` vs. `ProfilePage.tsx`):**
        -   [ ] In `ProfilePage.tsx`, temporarily replace the entire component's return value with a simple, colored `Box`: `return <Box sx={{ width: '100%', height: '300px', bgcolor: 'crimson' }} />;`
        -   [ ] **Check the browser.** Does the red box fill the entire width of the main content area (respecting padding)?
            -   **If YES:** The problem is inside the original `ProfilePage.tsx` component's structure (likely the `Stack`).
            -   **If NO:** The problem is definitively in the parent `MainLayout.tsx` structure.
    2.  **If the Problem is in `ProfilePage.tsx`:**
        -   [ ] Restore the original code.
        -   [ ] Change the root `<Stack>` component to a `<Box>`. Does the layout fix itself? This will confirm if `Stack` is the problematic component.
    3.  **If the Problem is in `MainLayout.tsx`:**
        -   [ ] In DevTools, inspect the `<main>` element. What are its computed `display`, `flex-direction`, and `width` properties?
        -   [ ] Inspect its direct child (the `Box` wrapping `<Outlet />`). What are its `flex-grow`, `flex-shrink`, `flex-basis`, and `width` properties? The issue must lie in one of these values.

---

## 3. Dynamic Greeting Has Sharp Corners

-   **Problem:** The `Chip` component in the header renders as a rectangle, not a pill.
-   **What Has Been Tried:**
    -   Applying `borderRadius: 'var(--radius-full)'` in the `sx` prop.
    -   Increasing specificity by targeting `'&.MuiChip-root'` within the `sx` prop.

-   **Systematic Verification Plan:**
    1.  **Find the Overriding Rule:**
        -   [ ] In DevTools, inspect the `Chip` component.
        -   [ ] In the "Styles" panel, use the "Filter" input and type `border-radius`.
        -   [ ] Find the CSS rule from an MUI stylesheet (e.g., `... MuiChip-root ...`) that is setting a low `border-radius` (e.g., `4px` or `0px`). Note its full CSS selector.
    2.  **Confirm Specificity Issue:**
        -   [ ] In DevTools, edit the `sx` prop style for `borderRadius` and add `!important` to the end (`borderRadius: 'var(--radius-full) !important'`).
        -   [ ] **Check the browser.** Does the `Chip` immediately become a pill? If yes, it confirms 100% that we are losing a CSS specificity battle.
    3.  **Final Fix Strategy (if confirmed):**
        -   [ ] If specificity is the issue, the most robust solution is to use a global override in `theme.ts` that is guaranteed to win.
        -   [ ] In `theme.ts`, under `components`, add an override for `MuiChip` that targets the exact selector found in step 1, or simply `root`, and set the `borderRadius` there. This is more powerful than an `sx` prop.