# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build static site to dist/
npm run preview   # Serve dist/ locally
```

No test runner or linter is configured. Node >= 22.12.0 required.

## Architecture

Static landing page for **BoardLab Pro** (PCB diagnostics desktop app). Built with **Astro 6** (SSG, zero client JS) and **Tailwind CSS v4** via `@tailwindcss/vite` plugin.

### i18n

Astro's built-in i18n routing with `prefixDefaultLocale: true` — all pages live under `/en/` and `/es/`. The root `/` redirects to `/en/`.

- **Translation files:** `src/i18n/en.ts` and `src/i18n/es.ts` — typed const objects with identical nested structure (`nav`, `hero`, `features`, `pricing`, `faq`, `footer`, `seo`, `notFound`).
- **Helpers in `src/i18n/utils.ts`:** `getLang(url)` extracts locale from pathname, `t(lang)` returns the translation object, `getLocalizedPath(lang, path)` builds localized routes, `getAlternateLang(lang)` returns the opposite locale.
- **Page pattern:** `src/pages/en/index.astro` and `src/pages/es/index.astro` are structurally identical — they set `const lang` and pass `t(lang)` to components.

### Components

All in `src/components/` as `.astro` files. Each receives translations as props. Minimal inline `<script>` only in Navbar (mobile menu toggle) and Pricing (monthly/annual toggle). FAQ uses native `<details>/<summary>` with no JS.

### Layout & SEO

`src/layouts/Layout.astro` handles all meta tags, canonical URLs, hreflang alternates, Open Graph, Twitter Cards, and JSON-LD `SoftwareApplication` schema. Props: `title` and `description` (both optional with defaults).

### Styling

Tailwind v4 imported in `src/styles/global.css` with a `@theme` block defining custom OKLch color tokens (blue-600, teal-600, slate variants). All styling is utility-first — no custom CSS classes.

## Key URLs

- **Site:** `https://board-lab.pro` (configured in `astro.config.mjs` `site` field)
- **Installer download:** hosted on Cloudflare R2 — URL includes version number and must be updated manually on new releases (currently in `Navbar.astro` and `Hero.astro`)
- **Pro checkout:** Lemon Squeezy — placeholder `data-checkout-monthly` / `data-checkout-annual` attributes in `Pricing.astro`

## Hosting

Cloudflare Pages with custom domain. No SSR adapter — pure static output.
