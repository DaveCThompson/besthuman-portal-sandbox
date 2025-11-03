# Best Human Portal Sandbox

A high-fidelity, interactive proof-of-concept (POC) designed to explore and validate a new UI/UX for the Best Human portal. This sandbox serves as a "living style guide" and a testbed for component interactions, built with a focus on best practices, scalability, and an exceptional developer experience.

**Guiding Principle:** All work must exemplify high-craft, best-practice UI and UX. Every component, file, and line of code should be a clear, maintainable, and professional example of modern front-end development.

---

## 🚀 Getting Started

### Prerequisites

-   Node.js (LTS version recommended, e.g., 20.x)
-   `npm` (comes with Node.js)

### Installation & Setup

1.  **Clone the repository** (if applicable)
2.  **Navigate to the project directory:**
    ```bash
    cd best-human-portal-sandbox
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 🛠️ Key Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles the application for production into the `/dist` folder. |
| `npm run lint` | Runs ESLint to analyze the codebase for quality and style issues. |
| `npm run preview` | Serves the production build locally to preview the final app. |

---

## 🏛️ Project Architecture

This project follows a lean, feature-driven structure designed for clarity and scalability.

-   `src/`
    -   `assets/`: For static assets like SVG icons, logos, or images.
    -   `components/`: **The core of the UI.** All reusable React components live here.
    -   `data/`: **Mock Data Provider.** All static data for the sandbox is defined and exported from `mockData.ts`.
    -   `layouts/`: Contains the main application shell (`MainLayout.tsx`), which includes persistent elements like the sidebar and header.
    -   `pages/`: Top-level components that correspond to a specific route (e.g., `HomePage.tsx`).
    -   `theme/`: **The Design System's source of truth.**
        -   `primitives.css`: Raw, context-agnostic design tokens (e.g., `--p-grey-500: #...`).
        -   `semantics.css`: Contextual design tokens that map primitives to use-cases (e.g., `--color-text-primary: var(--p-grey-900)`).
        -   `theme.ts`: The MUI theme object that acts as a **bridge** between our CSS token system and the component library.
    -   `types/`: Contains all global TypeScript interfaces (e.g., `Session`, `Cohort`).

---

## 💻 Technology Stack

Our stack is chosen to maximize developer velocity, code quality, and UI fidelity.

| Technology | Role | Rationale / Best Practice |
| :--- | :--- | :--- |
| **Vite** | Build Tool / Dev Server | Provides a near-instant development feedback loop, crucial for rapid UI iteration. |
| **React** | UI Library | The industry standard for component-based architecture. |
| **TypeScript** | Language | **Non-negotiable.** Enforces type safety, prevents bugs, and enables superior tooling. |
| **MUI (Material-UI)** | Component Library | **v5 (Stable).** Provides a robust set of accessible components. We leverage its powerful theme object for deep, consistent customization of variants, component styles, and micro-interactions. |
| **Emotion** | CSS-in-JS Engine | The default styling engine for MUI. We leverage it via the `sx` prop and `styled()` API. |
| **React Router** | Client-Side Routing | Handles navigation between pages. |
| **GSAP** | Animation Engine | For high-fidelity, performant, and interactive animations that go beyond CSS capabilities. |
| **ESLint** | Code Linting | Automatically enforces a consistent, high-quality code style. |

---

## 📜 Core Architectural Principles & Coding Conventions

**This is the most important section for any contributor (human or AI). Adherence is mandatory.**

1.  **Strict Typing Above All:**
    -   **NO `any` type.** If a type is unknown, use `unknown` and perform type checking.
    -   All function parameters, return values, and component props **MUST** be explicitly typed. Use interfaces (`interface`) for object shapes like component props.
    -   Respect the project's strict `tsconfig.json`, including `verbatimModuleSyntax` which requires type-only imports (`import type {...}`).

2.  **Styling via Design Tokens ONLY:**
    -   **DO NOT** use hardcoded values (e.g., `color: '#FFF'`, `padding: '10px'`) in components.
    -   **The Styling Workflow:**
        1.  If a new raw value is needed, add it to `primitives.css`.
        2.  Give it a semantic meaning in `semantics.css`.
        3.  **Bridge to MUI:** If the token is for a theme palette color or shape that MUI calculates at runtime, add the *static value* (e.g., hex code) to `theme.ts` with a comment tracing it back to the token.
        4.  Reference the semantic CSS variable directly in the `sx` prop for all other one-off styles: `sx={{ padding: 'var(--space-md)' }}`.

3.  **Component Design:**
    -   **Single Responsibility:** Components should do one thing well. A `CohortCard` should only display cohort data. It should not fetch data. An `AnimatedBestHumanLogo` should only handle the logo and its animation.
    -   **Data-Driven:** Components should be "dumb." They receive data via props and render UI. All data for this sandbox comes from `src/data/mockData.ts`.
    -   **Composition over Configuration:** Build complex UI by combining smaller, simpler components.

4.  **State Management Philosophy:**
    -   **Local State First:** Use the `useState` hook for all component-level state (e.g., whether a modal is open).
    -   **No Global State (for now):** This is a UI sandbox. There is no need for complex global state managers. All data is mocked.

5.  **Accessibility (a11y) is a Core Feature:**
    -   Use semantic HTML5 elements (`<nav>`, `<main>`, `<button>`).
    -   Leverage MUI's built-in accessibility features.
    -   Ensure all interactive elements are keyboard-navigable and have clear focus states.