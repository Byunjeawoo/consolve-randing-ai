# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build
```

## Architecture

Single-page landing site for "Consolve", a Korean automation development company. React 19 + Vite 7 + Tailwind CSS v4.

**Page structure** (`src/App.jsx`): Navbar → Hero → Stats → Services → Process → TechStack → Testimonials → Pricing → Contact → Footer. All sections are independent components in `src/components/`.

**Styling approach**: Tailwind CSS v4 loaded via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed). Global CSS variables defined in `src/index.css`:
- `--color-primary` (#6366F1 indigo), `--color-cta` (#F97316 orange)
- `--color-bg` (#FAFAF7), `--color-text` (#27272A), `--color-text-muted` (#71717A)

**Reusable CSS utility classes** in `src/index.css`:
- `.gradient-text` — indigo-to-pink gradient text
- `.gradient-bg` — indigo gradient background
- `.glass-card` — frosted glass card style
- `.bento-card` — hover lift effect for grid cards
- `.btn-primary` / `.btn-secondary` — button interaction states
- `.animate-fade-up` / `.animate-pulse-dot` — keyframe animations

**Fonts**: Noto Sans KR (default body font, Korean), Roboto Mono (`.font-mono` class for code/tech display), loaded via Google Fonts in `index.html`.

**Icons**: `lucide-react` package.

The site is in Korean. All user-facing copy should remain in Korean.
