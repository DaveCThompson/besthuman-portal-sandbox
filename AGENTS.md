# Agent Charter & Execution Protocol

This document defines the operating protocol for AI agents working on the Best Human Portal Sandbox codebase. Its purpose is to maximize the probability of a correct, complete, and architecturally sound "one-shot" outcome for any given task.

## Prime Directive: One-Shot Excellence

The agent's primary goal is to deliver a complete and correct solution in a single response, minimizing the need for iterative correction. This is achieved by adhering to three pillars:

1.  **Holistic Analysis:** Before writing code, the agent must ingest and synthesize **all** provided context: the user's request, `README.md`, `CSS.md`, and all relevant existing code files.
2.  **Internal Simulation:** The agent must mentally "execute" the proposed changes and simulate their impact. This involves walking through the React component tree, anticipating how styling changes might break layouts, and pre-emptively identifying potential bugs or architectural violations.
3.  **Comprehensive Delivery:** A "one-shot" response is not just code. It is a complete solution package, including all necessary file creations, code modifications, documentation updates, and a strategic verification plan.

## Standard Execution Algorithm (Internal)

For any non-trivial task, the agent must follow this internal thought process *before* generating the final output:

1.  **Ingestion & Synthesis:** Read and fully comprehend the entire user request and all context files.
2.  **Impact Analysis & Dependency Mapping:** Create a definitive list of all files that will be **Created, Read, Updated, or Deleted (CRUD)**.
3.  **Virtual Refactoring (The Mental Walkthrough):** Simulate the changes in the most critical files first. The agent must act as its own QA engineer, actively trying to "break" its own plan by checking it against the **Technical Mandates**.
4.  **Code Generation & Self-Correction:** Generate the full code for all modified files and perform a final pass over the generated code.

## Technical Mandates & Known Pitfalls

These are non-negotiable rules for this project. Violating them will result in rework.

0.  **Consult `DIAGNOSTICS.md` First.** For any issue listed in `DIAGNOSTICS.md`, the agent must first read the entire entry for that issue and execute the "Systematic Verification Plan" outlined there. Do not attempt to solve a known, tracked issue without first using the established diagnostic framework.
1.  **The Rules of Hooks are Absolute.** All React Hooks must be called unconditionally at the top level of a component.
2.  **MUI Components are the Default.** Do not build a primitive component from scratch if a corresponding MUI component exists.
3.  **Styling is Token-First.** No hardcoded style values. All styling must originate from the design token system.
4.  **Props are Explicitly Typed.** All component props must have an `interface` or `type` definition. The `any` type is strictly forbidden.
5.  **Mock Data is the Single Source of Truth.** All display data must be imported from `src/data/mockData.ts`.
6.  **Precision in Imports is Mandatory.** All relative paths must be correct.
7.  **MUI v5 is the Standard.** Be aware of v5-specific API conventions.
8.  **Bridge `theme.ts` Correctly.** The MUI v5 `createTheme` function **cannot** parse CSS `var()` for its `palette` colors at runtime. You **must** provide static hex codes in `theme.ts` for the palette.
9.  **Respect `verbatimModuleSyntax`.** Use `import type { MyType } from './my-file';`.
10. **Ensure Component Visibility.** If an element is invisible, diagnose its computed `width` and `height`. It is likely `0x0`.
11. **Manage Side Effects in `useEffect`.** For integrations with libraries like GSAP, all setup and cleanup must be contained within a `useEffect` hook.
12. **When in Doubt, Restart the TS Server.** Use the Command Palette to run `TypeScript: Restart TS Server` to resolve stale cache issues.
13. **Ripple Color Specificity:** MUI's ripple effect defaults to the component's current text `color`. To force a specific brand color (e.g., red on a light button), you must target the `.MuiTouchRipple-root` or `.MuiTouchRipple-child` class *within that component's theme override*. A global ripple style is not specific enough and will be overridden.
14. **Prevent Layout Shift with Invisible Borders:** When a state change (e.g., `:hover`, `.Mui-selected`) adds a border, it will cause a layout shift. The best practice is to give the element a border in its default state that is colored to be invisible against its background (e.g., `border: '1px solid var(--color-background-secondary)'`).
15. **Clean Shadows on Rounded Corners:** Browser rendering can cause `box-shadow` to look rough or "janky" around `border-radius` corners. The fix is to add `overflow: hidden` to the element's style, which forces the browser to clip the shadow cleanly to the border.
16. **Forcing Circular Shapes:** If a container with `borderRadius: 'var(--radius-full)'` fails to render as a perfect circle, it is likely because text content inside is stretching it. The fix is to apply `lineHeight: 0` to the container to collapse the text's vertical space, allowing the shape to become circular.
17. **Explicitly Type Complex Style Objects.** When creating a complex style object for use with the `styled()` utility (especially one with nested selectors like `&.Mui-selected` or `&::after`), TypeScript's inference can fail, causing a `No overload matches this call` error. **The fix is to explicitly type the style object as `SystemStyleObject<Theme>` from `@mui/system`**. This removes all ambiguity for the compiler.
18. **Override Aggressive Component Styles Defensively.** Some MUI components, like `ToggleButtonGroup`, aggressively apply styles to their children to enforce a specific look (e.g., removing `borderRadius` to create a segmented control). To override this, you must win the CSS specificity war. The pattern is twofold:
    - **In the styled component:** Add a highly specific selector that targets the class the parent applies (e.g., `&.MuiToggleButtonGroup-grouped { borderRadius: 'var(--radius-md)'; }`).
    - **In the JSX:** Use layout props like `gap` on the parent (`<ToggleButtonGroup sx={{ gap: '...' }}>`) to provide the physical space for your custom styles (like rounded corners) to be visible.
19. **Scrutinize Global Stylesheets for Conflicts.** Boilerplate CSS files like `index.css` often contain global element selectors (e.g., `button { ... }`). These low-specificity styles can create silent, hard-to-debug conflicts with the component library's styles. A global `transition` rule in `index.css` was the root cause of all transition failures. **Always assume global styles are a potential source of error and validate them first.**
20. **Respect CSS Animation Limitations.** Do not attempt to transition non-animatable properties. The most common pitfall is `backgroundImage` with a `linear-gradient()`. The browser cannot interpolate between two gradients, causing the transition to be instant. The correct pattern is to transition animatable properties like `backgroundColor`, `opacity`, or `transform` instead.