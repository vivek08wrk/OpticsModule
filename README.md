# Optics Module (Next.js + Tailwind)

An interactive learning module for Class 10 Optics concepts. Built with Next.js 15, React 18, Tailwind CSS 4, and next-themes for dark mode. The module simplifies heavy simulations into clean visuals and consistent, accessible UI.

## ✨ Features
- Global light/dark mode with a navbar toggle
- Large, legible typography and spacious layout
- Consistent section wrappers and headers
- Interactive but lightweight demos (SVG/emoji-based)
- Quiz components per chapter for quick checks

## 🧩 Sections
- Introduction to Light
- Properties of Light
- Refraction of Light
- Lenses
- Human Eye
- Optical Instruments
- Scattering of Light
- Concept Map
- Solved Problems

All sections share the same background treatment:
- Light: gradient from blue-50 to indigo-100
- Dark: solid gray-900

Main section headings render black in dark mode for clarity.

## 📦 Tech stack
- Next.js 15 + React 18
- Tailwind CSS 4 (with dark variant)
- next-themes for theme switching
- lucide-react icons
- Local UI kit (Card, Button, Tabs, etc.)

## 🚀 Getting started

Prerequisites: Node 18+ and pnpm or npm.

Install dependencies and run the dev server:

```powershell
# using npm
npm install
npm run dev

# or using pnpm
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## 🧭 Project structure (high level)
- `app/layout.tsx` — Root layout with ThemeProvider
- `app/page.tsx` — Main page with Sidebar, sections, Footer
- `components/Navbar.tsx` — Top bar with theme toggle and progress
- `components/Sidebar.tsx` — Table of contents
- `components/Footer.tsx` — Next/Previous navigation
- `components/sections/*` — Individual chapter sections
- `components/ui/*` — Local UI primitives (Card, Button, Tabs, etc.)

## 🎨 Theming
- Theme is controlled with next-themes via `ThemeProvider` in `app/layout.tsx`.
- Toggle in `components/Navbar.tsx`.
- In dark mode, primary H1 headings use `dark:text-black`.

## 🧪 Scripts
```json
{
	"dev": "next dev",
	"build": "next build",
	"start": "next start",
	"lint": "next lint"
}
```

## 🔧 Troubleshooting
- If some text disappears in dark mode, ensure elements have matching `dark:` color utilities (e.g., `dark:text-...`, `dark:bg-...`).
- If Tailwind classes don’t apply, restart the dev server.
- On Windows CRLF warnings from Git are safe to ignore.

## 📤 Deploy
- Any Next.js-compatible platform (Vercel recommended).
- Build command: `next build`
- Start command: `next start`

## 📜 License
MIT (or your preferred license).

---

For a deeper dive (architecture, approach, and extension guidelines), see `docs/OVERVIEW.md`.
