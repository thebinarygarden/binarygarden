@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The main Binary Garden site (`binarygarden.com`): a landing section plus a list of projects. Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, TypeScript 5.x, pnpm.

## Commands

```bash
pnpm dev     # dev server at localhost:3000
pnpm build   # production build (output: 'standalone')
pnpm lint    # eslint (flat config in eslint.config.mjs)
```

## Structure

- `src/app/layout.tsx` - root layout; wires Flora's `ScriptPreloadTheme` and `ThemeProvider`
- `src/app/themes.ts` - Flora `lightTheme` / `darkTheme` (site palette)
- `src/components/landing/` - hero section
- `src/components/content/` - project list rendered from `projects.yaml` (read with `js-yaml` at build time)
- `src/components/navbar/` - fixed top-right nav with Flora's `ThemeToggleButton`

## Styling and Flora

- UI and theming come from `@binarygarden/flora` via subpath imports (`/theme`, `/icons`, `/ui`). Check Flora before building new components here.
- Flora's `ThemeProvider` sets CSS variables (`--background`, `--on-background`, `--primary`, `--on-surface`, `--border`, ...) on `<html>`. It does **not** add a `dark` class, so don't use Tailwind `dark:` variants. Use the variables instead, e.g. `bg-(--background)`, `text-(--primary)`, `shadow-(color:--primary)`.
- `globals.css` imports `tailwindcss` then `@binarygarden/flora/styles.css`. There is no `tailwind.config.js` (Tailwind v4 is CSS-first).
- `public/svg/wifi*.svg` have no Flora equivalent yet; they're candidates to move into Flora.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yaml`) builds the multi-stage `Dockerfile` (Node 24, pnpm via corepack), pushes to `us-central1-docker.pkg.dev/binarygarden/bg-images/bg:<sha>`, and deploys the `binary-garden` Cloud Run service on port 3000. No runtime secrets are required.
