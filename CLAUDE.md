# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server at http://localhost:5173/alice-typing-trainer/
- `npm run build` — `tsc -b` (emits `tsconfig.tsbuildinfo` cache) then `vite build`. Any typecheck error fails the build.
- `npm run preview` — serve the built `dist/` locally to validate the Pages base path.
- `npm test` — run the Vitest suite once (Node env, `src/**/*.test.ts`).
- `npm run test:watch` — interactive watch mode.
- Run a single test file: `npx vitest run src/lib/wpm.test.ts` (or `-t "<name>"` to filter by test name).

No linter / formatter is configured — keep style consistent with existing code by inspection.

## Architecture

**Stack**: Vite 5 + React 18 + TypeScript, deployed as a static site to GitHub Pages via `.github/workflows/deploy.yml` (push to `main`). No backend; everything lives in the browser including all state.

### Routing on GitHub Pages — read before touching

This app uses `BrowserRouter` with `basename="/alice-typing-trainer"`, not HashRouter. Deep links survive a Pages hard reload via a two-part redirect dance adapted from `rafgraph/spa-github-pages`:

1. Pages serves [public/404.html](public/404.html) for any unknown path. Its inline script rewrites `/alice-typing-trainer/lessons/foo` into `/alice-typing-trainer/?/lessons/foo` and redirects.
2. The counterpart script at the top of [index.html](index.html) decodes `?/…` back into a real path via `history.replaceState` before React Router mounts.

If you change the repo name, the base path must be updated in four places: [vite.config.ts](vite.config.ts) `base`, [src/App.tsx](src/App.tsx) `basename`, `pathSegmentsToKeep` / URLs in [public/404.html](public/404.html), [public/sitemap.xml](public/sitemap.xml), and the favicon href in [index.html](index.html).

### Theme system

Dark is the baseline palette in `:root`; light is an override under `[data-theme='light']` (see [src/index.css](src/index.css)). To avoid a flash-of-wrong-theme, a synchronous inline `<script>` at the top of `<head>` in [index.html](index.html) reads `localStorage['att.theme.v1']` (or the local hour in auto mode) and sets `data-theme` on `<html>` before the React bundle loads. Do not move that script after the module import, and do not rely on React for initial theme application. Runtime toggling / re-resolution lives in [src/lib/theme.ts](src/lib/theme.ts) via the `useTheme` hook.

All colors flow through CSS custom properties — including SVG fills (see `FINGER_COLOR` in [src/lib/aliceLayout.ts](src/lib/aliceLayout.ts) which references `var(--finger-*)`). Don't hardcode hex values in components or stylesheets; add a var to both the dark and light blocks instead.

### Keyboard layout is the single source of truth

[src/lib/aliceLayout.ts](src/lib/aliceLayout.ts) exports `leftHalf` and `rightHalf` `Key[]` arrays with `{char, row, col, hand, finger, splitSensitive, width?, label?}`. Both [src/components/KeyboardView.tsx](src/components/KeyboardView.tsx) (the SVG visualization) and the `SplitCallout` helper derive from these arrays via `keyFor(char)`. The `splitSensitive` flag on B/T/G/Y/H/N is what drives the "Alice: this is your left/right hand" warning — the core product value.

### TypingArena is reused

[src/components/TypingArena.tsx](src/components/TypingArena.tsx) is the single keystroke-capture + live-stats component; both the Lessons page and the timed Test page wrap it. It exposes `onChange({ nextChar, stats, finished, wrongHit })` so the parent can drive the keyboard highlight and split-sensitive callout. A `resetKey` prop remounts its internal state when the parent wants a fresh run (new quote, duration change, etc.).

### Pages + SEO

Per-page SEO uses [src/lib/seo.ts](src/lib/seo.ts)'s `useSeo({ title, description, path })` hook, which imperatively mutates `document.title`, the description / OG / Twitter meta tags, and the canonical link. When adding a new route, also add it to [public/sitemap.xml](public/sitemap.xml) (absolute URLs, no hash fragments).

### localStorage convention

All persisted keys follow `att.{feature}.v1`: `att.testHistory.v1`, `att.lessonProgress.v1`, `att.theme.v1`. Each helper in [src/lib/storage.ts](src/lib/storage.ts) / [src/lib/theme.ts](src/lib/theme.ts) inlines its own `try { JSON.parse } catch` — there's no shared wrapper, and that's intentional (small enough to not warrant the abstraction).
