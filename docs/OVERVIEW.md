# Optics Module: Detailed Documentation

This document provides a deep dive into the Optics learning module, covering problem framing, design principles, architecture, tech stack, and implementation details, plus guidance for maintenance and extension.

## 1. Goals & Non-Goals

### Goals

- Deliver a clean, readable, and accessible learning experience for Class 10 Optics.
- Replace heavy, CPU-intensive simulations with simple, intuitive visuals (SVG and emoji-based) that explain concepts quickly.
- Offer consistent theming (light/dark) and typography scale across the module.
- Provide small interactive demos and quizzes to reinforce concepts without overwhelming the learner.

### Non-Goals

- High-fidelity physics simulations or 3D rendering.
- Complex state management; keep interactivity local and easy to reason about.

## 2. Product Design Principles

- Clarity over cleverness: prioritize comprehension.
- Consistency: identical section scaffolding (backgrounds, headings, spacing).
- Performance: avoid unnecessary re-renders or heavy animation loops.
- Accessibility: large fonts, strong contrast, and keyboard-friendly controls.

## 3. Information Architecture

Top-level composition:

- Navbar (title, progress, theme toggle)
- Sidebar (navigation across sections)
- Content area (one of the section components)
- Footer (prev/next section)

Sections (components/sections/\*):

- IntroductionToLight
- PropertiesOfLight
- RefractionOfLight
- Lenses
- HumanEye
- OpticalInstruments
- ScatteringOfLight
- ConceptMap
- SolvedProblems

Each section uses:

- A hero heading, standardized background (light gradient / dark gray), and large copy.
- Lightweight interactive blocks and diagrams.
- Optional quiz at the end for formative checks.

## 4. Theming & Styling

- Global theme via `next-themes` (`ThemeProvider` in `app/layout.tsx`).
- Class-based toggling (`attribute="class"`) enables Tailwind `dark:` variants.
- Main headings override dark mode to black (`dark:text-black`) for crisp contrast.
- Standard backgrounds:
  - Light: `bg-gradient-to-br from-blue-50 to-indigo-100`
  - Dark: `bg-gray-900`
- UI primitives come from local `components/ui/*` built on Tailwind + Radix primitives.

## 5. Interactivity Approach

- Keep state local within sections using `useState`.
- Prefer simple toggles and minimal SVG animations using native `<animateTransform>` or CSS keyframes.
- Avoid global stores; each demo is isolated and deterministic.
- Quizzes accept a minimal `questions` prop and render inline feedback.

## 6. Tech Stack

- Next.js 15 (App Router) + React 18
- Tailwind CSS 4 + tailwindcss-animate
- next-themes for dark mode
- lucide-react for icons
- Radix UI primitives (via local wrappers) for accessibility and consistent UX
- TypeScript for typesafety

Key deps from `package.json`:

- next, react, react-dom
- next-themes
- tailwindcss, @tailwindcss/postcss, postcss
- lucide-react
- radix ui packages (accordion, dialog, tabs, etc.)

## 7. Directory & Key Files

- `app/layout.tsx`: ThemeProvider wiring; HTML attributes for class-based dark mode.
- `app/page.tsx`: Main page shell that renders sidebar + content + footer.
- `components/Navbar.tsx`: Theme toggle, title, and progress indicator.
- `components/Sidebar.tsx`: Section navigation; larger hit targets.
- `components/Footer.tsx`: Prev/next navigation.
- `components/sections/*`: Each topic’s content, visuals, and inline demos.
- `components/Quiz.tsx`: Reusable quiz component.
- `components/ui/*`: Local UI building blocks (Card, Button, Tabs, etc.).

## 8. Component Contracts (examples)

### Quiz

- Input: `questions: { question: string; options: string[]; correctAnswer: number; explanation?: string }[]`, `title?: string`.
- Behavior: renders MCQ, shows correctness, explanation.
- Error modes: none (assumes valid indices); defensive checks recommended for extensions.

### Section Components

- Self-contained state; no required props.
- May import UI primitives and icons.
- Should keep visuals theme-aware via Tailwind `dark:` classes.

## 9. Edge Cases & Guidelines

- Dark mode visibility: ensure any custom SVG labels use theme-aware `fill-...` classes (with `dark:` variants).
- Mobile: keep diagrams scrollable horizontally (`overflow-x-auto`) and ensure min-widths for SVGs.
- Performance: cap animation durations; avoid re-render loops; prefer CSS animations.
- Accessibility: ensure buttons have discernible labels; use `sr-only` where needed.

## 10. Build, Lint, and Run

- Dev: `npm run dev` (or `pnpm dev`) -> http://localhost:3000
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`

## 11. Deployment

- Any Next.js-compatible platform (Vercel recommended).
- Build: `next build`; Start: `next start`.
- Set `NEXT_TELEMETRY_DISABLED=1` if desired.

## 12. Extending the Module

- Add a new section under `components/sections/YourSection.tsx`.
- Reuse the standard wrapper classes and H1.
- Keep interactivity minimal; prefer explanatory visuals.
- Update the Sidebar entries and optionally add a quiz.

## 13. Maintenance Tips

- When editing theming, verify dark mode with the navbar toggle.
- Keep `dark:` variants for text and borders; test SVG label colors.
- Write small unit tests for any logic-heavy helpers (if added later).

## 14. Known Trade-offs

- Simplified simulations may not capture all physical nuances; optimized for pedagogy and clarity.
- Local state per section avoids complexity but duplicates simple patterns; acceptable for this scope.

## 15. Changelog highlights

- Introduced global ThemeProvider; added navbar toggle.
- Simplified Introduction and Properties sections; removed heavy/unused demos.
- Standardized wrappers/headers; increased typography scale.
- Dark-mode fixes: ensured main H1 uses black; adjusted toggle styling.

---

For questions or contributions, open an issue or PR in the repository.
