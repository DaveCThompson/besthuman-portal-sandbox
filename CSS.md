# High-Craft CSS Architecture

This document codifies the core principles and patterns for styling in the Best Human Portal Sandbox. Adhering to these guidelines is essential for creating a consistent, scalable, and high-craft user interface. Our architecture is built on the synergy between a formal design token system and the MUI component library.

---

### Core Principles

#### 1. The Design Token Cascade is the Single Source of Truth

All styling decisions flow from a single, predictable source. This is not just a preference; it is a strict rule. Guessing at color codes or spacing values is forbidden.

The flow is unidirectional:
1.  **`primitives.css`:** Contains raw, context-agnostic values (e.g., `--p-grey-900: #14221a`).
2.  **`semantics.css`:** Gives contextual meaning to the primitives (e.g., `--color-text-primary: var(--p-grey-900)`).
3.  **`theme.ts` (The Bridge):** Bridges the CSS token system with MUI's JavaScript-based theme object.
4.  **Component `sx` prop:** The final layer for applying one-off styles, which **must** reference the semantic tokens.

##### The MUI v5 `createTheme` Limitation

MUI's `createTheme` function performs runtime JavaScript calculations on certain theme properties, most notably `palette` colors. It cannot parse a CSS `var()` string for these calculations.

-   **RULE:** For `theme.palette` colors, you **must** provide the static, raw value (e.g., the hex code).
-   **BEST PRACTICE:** Include a comment tracing the static value back to its semantic token.

#### 2. Diagnose, Don't Guess

When debugging a UI issue, follow this diagnostic process:
1.  **Isolate:** Use the browser inspector to find the exact element that is failing.
2.  **Inspect:** Analyze its "Computed" styles in DevTools.
3.  **Hypothesize:** Form a hypothesis based on CSS fundamentals.
4.  **Test:** Use the browser's style editor to test your hypothesis in real-time.

---

### Key Architectural Patterns

#### Layout Primitives: `Box`, `Stack`, and `Grid`

We rely exclusively on MUI's layout components for consistency.
-   **`Box`:** The fundamental building block, a replacement for `div`.
-   **`Stack`:** The default choice for one-dimensional layouts (rows or columns).
-   **`Grid`:** For complex, two-dimensional, responsive layouts.

#### The Global Customization Contract (`theme.ts`)

To ensure UI components are consistent, we customize them globally in `src/theme/theme.ts`. Instead of styling each component instance, we define styles once in the `components` section of our `createTheme` call. This guarantees that every `<Button>` or `<TextField>` rendered in the app adheres to our standards by default, reducing code duplication.

#### High-Craft Focus States (Keyboard-Only)

We provide clear accessibility for keyboard users without penalizing mouse users with unnecessary outlines.
-   **Method:** A custom focus ring is implemented using an `::after` pseudo-element on interactive components.
-   **Trigger:** The ring's visibility is toggled **only** by MUI's `.Mui-focusVisible` class, which is applied exclusively during keyboard navigation.
-   **Implementation:** All interactive components must have `position: relative` and `outline: none`. The focus ring is then defined on the `&.Mui-focusVisible::after` selector.

#### Reliable Ripple Effects

MUI's ripple (`TouchRipple`) styling is notoriously difficult to override globally.
-   **RULE:** Do not attempt to style the ripple effect in `theme.ts`. It is unreliable.
-   **Method:** To ensure a consistent ripple effect, the `TouchRippleProps` prop **must** be applied directly to the component instance on the page where it is used (e.g., `<StyledTab {...rippleProps} />`).