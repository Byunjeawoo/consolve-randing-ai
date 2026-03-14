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

**Page structure** (`src/App.jsx`): Navbar → Hero → Services → Process → Testimonials → Pricing → FAQ → Contact → Footer. All sections are independent components in `src/components/`. A `PrivacyModal` is toggled via Footer and a fixed KakaoTalk CTA button appears on mobile.

**Styling approach**: Tailwind CSS v4 loaded via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed). Global CSS variables defined in `src/index.css`:
- `--color-primary` (#C2773A warm brown), `--color-primary-light` (#D9955A), `--color-cta` (#F97316 orange)
- `--color-bg` (#FFFBF5), `--color-text` (#2C1A0E), `--color-text-muted` (#7C5C45), `--color-border` (#E8D5C0)

**Reusable CSS utility classes** in `src/index.css`:
- `.gradient-text` — warm brown-to-red gradient text
- `.gradient-bg` — warm brown gradient background
- `.glass-card` — frosted glass card style
- `.bento-card` — hover lift effect for grid cards
- `.btn-primary` / `.btn-secondary` — button interaction states
- `.animate-fade-up` / `.animate-pulse-dot` — keyframe animations

**Fonts**: Noto Sans KR (default body font, Korean), Roboto Mono (`.font-mono` class for code/tech display), loaded via Google Fonts in `index.html`.

**Icons**: `lucide-react` package.

The site is in Korean. All user-facing copy should remain in Korean.
