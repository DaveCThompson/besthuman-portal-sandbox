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
4.  **Component `sx` prop / `styled()`:** The final layer for applying styles, which **must** reference the semantic tokens.

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

**Case Study:** A global `transition` property in the boilerplate `index.css` was overriding all component-level transitions, causing them to fail silently. By using the browser inspector's "Computed" styles panel, this low-specificity global rule was identified and removed, immediately fixing the issue across the entire application. This highlights the danger of unscoped global styles and the power of methodical inspection.

---

### Key Architectural Patterns

#### Layout Primitives: `Box`, `Stack`, and `Grid`

We rely exclusively on MUI's layout components for consistency.
-   **`Box`:** The fundamental building block, a replacement for `div`.
-   **`Stack`:** The default choice for one-dimensional layouts (rows or columns).
-   **`Grid`:** For complex, two-dimensional, responsive layouts.

#### The Dual Styling Strategy: Global Defaults & High-Craft Components

To ensure a consistent and maintainable UI, we employ a dual strategy for styling:

1.  **Global Defaults via `theme.ts`:** For foundational components used throughout the app (`Button`, `TextField`, `Card`), we define their base styles once in the `components` section of `createTheme`. This is our "global contract"—it guarantees that every instance of a component starts with the correct, on-brand look and feel, minimizing code duplication and maximizing consistency.

2.  **High-Craft Components via `styled()`:** When a component requires unique, complex, or highly interactive styles that don't apply globally (like our `StyledTab`), we create a new, dedicated component using the `styled()` utility. This encapsulates its complex logic and styling in a single, reusable, and self-documenting module. This approach keeps our global theme clean while allowing for exceptional, high-fidelity UI where needed.

#### High-Craft Focus States (Keyboard-Only)

We provide clear accessibility for keyboard users without penalizing mouse users with unnecessary outlines.
-   **Method:** A custom focus ring is implemented using an `::after` pseudo-element on interactive components.
-   **Trigger:** The ring's visibility is toggled **only** by MUI's `.Mui-focusVisible` class, which is applied exclusively during keyboard navigation.
-   **Implementation:** All interactive components must have `position: relative` and `outline: none`. The focus ring is then defined on the `&.Mui-focusVisible::after` selector.

#### The Centralized Transition System

To ensure a cohesive and fluid user experience, all UI animations and transitions are governed by a centralized token system. Hardcoding `transition` values in components is strictly forbidden.

-   **The Token:** A standard transition is defined in `semantics.css` as `--transition-short`. This variable is the single source of truth for the timing and easing of all standard component interactions.
-   **The Pitfall (Non-Animatable Properties):** CSS cannot transition certain properties, most notably `backgroundImage` when its value is a `linear-gradient()`. Applying a transition to a component that changes its gradient on hover will result in an instant, jarring switch.
-   **The High-Craft Solution:** Instead of attempting to transition a gradient, our pattern is to design interactions around animatable properties. For example, our primary buttons have a gradient in their default state, which is smoothly transitioned to a solid `backgroundColor` on hover. This is intentional, performant, and works reliably in all browsers.

#### Reliable Ripple Effects

MUI's ripple (`TouchRipple`) styling is notoriously difficult to override globally.
-   **RULE:** Do not attempt to style the ripple effect in `theme.ts`. It is unreliable.
-   **Method:** To ensure a consistent ripple effect, the `TouchRippleProps` prop **must** be applied directly to the component instance on the page where it is used.

    **Example (`FAQPage.tsx`):**
    ```tsx
    // Define the ripple configuration once on the page
    const rippleProps = {
      TouchRippleProps: {
        style: {
          color: 'rgba(255, 255, 255, 0.9)',
        },
      },
    };

    // Spread the props onto the interactive component
    <StyledTab value="Coaching" label="Coaching" {...rippleProps} />
    ```