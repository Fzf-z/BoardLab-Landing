# BoardLab Pro — Landing Page Design Spec

## Overview

A professional landing page for BoardLab Pro to present the software and convert visitors into users/customers. The page serves dual purposes: showcase the product's capabilities and drive downloads + Pro subscriptions via Lemon Squeezy.

**Target audience:** Electronics repair technicians, QA departments, hardware engineers, diagnostic labs.

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Visual style | Hybrid (dark hero → light body) | Impactful first impression, readable content sections |
| Language | Bilingual EN/ES | Matches app's i18n support, broader reach |
| Framework | Astro 5 (SSG) | Zero client JS, native i18n, Tailwind integration, fast Cloudflare deploy |
| Hosting | Cloudflare Pages (free tier) | Global CDN, auto-deploy from GitHub, SSL included |
| Domain | `board-lab.pro` | Custom domain on Cloudflare Pages |
| Repository | Separate public repo (`BoardLab-Landing`) | Clean separation from Electron app codebase (app repo is private) |

## Page Structure

### 1. Navbar (sticky, dark)

- **Left:** Logo icon (from `public/logo.png`) + "BoardLab Pro" text
- **Center/Right:** Anchor links — Features · Pricing · FAQ
- **Right:** Language toggle `EN | ES` + primary CTA button "Download"
- **Behavior:** Sticky on scroll, subtle backdrop blur, border-bottom appears on scroll

### 2. Hero Section (dark background: slate-900 → gradient to light)

- **Badge:** Pill with version/announcement — e.g., "✨ v3.0 — Now with AI-Powered Diagnosis"
- **Headline:** Large text with gradient accent word:
  - EN: `"**Intelligent** Electronic Board Diagnostics"`
  - ES: `"Diagnóstico **Inteligente** de Placas Electrónicas"`
  - "Intelligent"/"Inteligente" uses `bg-gradient-to-r from-blue-400 to-teal-400` text effect
- **Subheadline:** One-liner describing the app:
  - EN: "Map PCB measurements, connect SCPI instruments, load boardview files, and get AI-powered diagnosis — all in one desktop app."
  - ES: "Mapea mediciones de PCB, conecta instrumentos SCPI, carga archivos boardview, y obtén diagnóstico con IA — todo en una app de escritorio."
- **CTAs (2 buttons):**
  - Primary: EN: "⬇ Download Free" / ES: "⬇ Descargar Gratis" → links to Cloudflare R2: `https://pub-a5c39dc41b1845aab82e6839d91eff7d.r2.dev/BoardLab%20Pro%20Setup%203.0.0.exe`
  - Secondary (outline): EN: "View Pricing →" / ES: "Ver Precios →" → scrolls to pricing section
- **Hero image:** App screenshot (`Doc/Main.png`) displayed in a styled browser/app window frame with rounded corners, subtle shadow, and slight perspective tilt. On mobile (<640px): full-width below text, no tilt.
- **Badge version:** Hardcoded, updated manually on each major release

### 3. Features Section (light background: slate-50)

- **Section label:** EN: "FEATURES" / ES: "CARACTERÍSTICAS" (uppercase, small, blue-600 text)
- **Section title:** EN: "Everything you need for PCB diagnostics" / ES: "Todo lo que necesitas para diagnosticar PCBs"
- **Layout:** 3×2 responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile)
- **6 feature cards**, each with:
  - Icon (Lucide or simple emoji/SVG)
  - Title (bold)
  - Description (1-2 lines, slate-500 text)

**Features to highlight:**

| # | Title (EN) | Title (ES) | Description (EN) | Icon |
|---|-----------|-----------|------------------|------|
| 1 | PCB Point Mapping | Mapeo de Puntos PCB | Dual-side boards with click-to-measure, zoom, pan & minimap | MapPin |
| 2 | SCPI Instruments | Instrumentos SCPI | Real-time multimeter & oscilloscope via TCP/Serial. Keysight, Rigol, Siglent & more | Zap |
| 3 | AI Diagnosis ᴾᴿᴼ | Diagnóstico con IA ᴾᴿᴼ | Gemini-powered anomaly detection, contextual analysis & interactive chat | Bot |
| 4 | Boardview Files | Archivos Boardview | Load BRD, BVR3, ASC formats. Search nets & components, view connections | Search |
| 5 | Test Sequencer ᴾᴿᴼ | Secuenciador de Pruebas ᴾᴿᴼ | Automated sequential test workflows with instrument auto-configuration | ListChecks |
| 6 | Cloud Sync ᴾᴿᴼ | Sincronización Cloud ᴾᴿᴼ | Offline-first with automatic cloud backup. Works without internet | Cloud |

Features marked with ᴾᴿᴼ display a small "PRO" badge to indicate they require a Pro subscription.

### 4. Pricing Section (white background)

- **Section label:** EN: "PRICING" / ES: "PRECIOS" (uppercase, small, blue-600 text)
- **Section title:** EN: "Start free, upgrade when ready" / ES: "Empieza gratis, mejora cuando quieras"
- **Layout:** 2 cards side-by-side (centered, max-width ~600px)

**Free card:**

- Title: EN: "Free" / ES: "Gratis"
- Price: "$0"
- Subtitle: EN: "Perfect for getting started" / ES: "Perfecto para empezar"
- Limits: EN: "3 projects · 50 points · 1 device" / ES: "3 proyectos · 50 puntos · 1 dispositivo"
- Feature list: EN: Basic PCB mapping, Single instrument connection, Local storage / ES: Mapeo básico de PCB, Una conexión de instrumento, Almacenamiento local
- CTA: EN: "Download Free" / ES: "Descargar Gratis" (outline button)

**Pro card (highlighted):**
- Badge: "POPULAR" pill (gradient blue-teal, positioned top-right)
- Title: "Pro"
- Price: Toggle between monthly/annual. Monthly: "$15/mo". Annual: "$13.75/mo" with smaller text "billed $165/year — save $15"
- Subtitle: "For professional technicians"
- Feature list: Unlimited projects & points, AI-powered diagnosis, Golden board comparison, Cloud sync & backup, PDF/image export, Test sequencer, 2 device activations, Priority support
- CTA: EN: "Get Pro →" / ES: "Obtener Pro →" (gradient blue-teal filled button) → Links to Lemon Squeezy checkout URL per selected variant
- Subtle highlight: Blue-600 border, light blue gradient background at top
- **Monthly/Annual toggle:** A pill toggle above the pricing cards switches between monthly and annual display. Annual shows the equivalent monthly price ($13.75) with a "billed $165/year" note.

### 5. FAQ Section (light background: slate-50)

- **Section title:** EN: "Frequently Asked Questions" / ES: "Preguntas Frecuentes"
- **Layout:** Accordion using native `<details>/<summary>` HTML elements (zero JS). Centered max-width ~600px
- **Questions:**

**FAQ (EN):**

| Question | Answer |
|----------|--------|
| Does it work offline? | Yes! All data is stored locally in SQLite. Cloud sync is optional and happens automatically when you're connected. |
| Which instruments are supported? | Any SCPI-compatible instrument via TCP/IP or Serial. Presets for Keysight, Rigol, Siglent, Owon, Fluke, and Tektronix. |
| Which operating systems are supported? | Windows is fully supported. macOS and Linux support is planned. |
| What boardview formats can I load? | BRD, BVR3, ASC, GenCAD, BDV, FZ, and TVW formats. |
| Can I cancel my Pro subscription? | Yes, anytime from your customer portal. You keep Pro access until the end of your billing period. |
| Is my data secure? | API keys are encrypted locally. Cloud sync uses Supabase with Row Level Security — only you can access your projects. |

**FAQ (ES):**

| Pregunta | Respuesta |
|----------|-----------|
| ¿Funciona sin internet? | ¡Sí! Todos los datos se guardan localmente en SQLite. La sincronización cloud es opcional y ocurre automáticamente cuando te conectas. |
| ¿Qué instrumentos son compatibles? | Cualquier instrumento SCPI via TCP/IP o Serial. Presets para Keysight, Rigol, Siglent, Owon, Fluke y Tektronix. |
| ¿Qué sistemas operativos soporta? | Windows está completamente soportado. Soporte para macOS y Linux está planificado. |
| ¿Qué formatos de boardview puedo cargar? | Formatos BRD, BVR3, ASC, GenCAD, BDV, FZ y TVW. |
| ¿Puedo cancelar mi suscripción Pro? | Sí, en cualquier momento desde tu portal de cliente. Mantienes acceso Pro hasta el final de tu periodo de facturación. |
| ¿Mis datos están seguros? | Las claves API están encriptadas localmente. La sincronización cloud usa Supabase con Row Level Security — solo tú puedes acceder a tus proyectos. |

### 6. Footer (dark background: slate-900)

- **Left:** "© 2026 Z Electrónica UY. All rights reserved."
- **Right:** Links — Support · zelectronicauy@gmail.com
- Simple, single-row layout

## Visual Design Tokens

Reuse from the app's existing Tailwind palette:

```
Primary gradient:   from-blue-600 to-teal-600 (CTAs, accents)
Dark background:    slate-900, slate-800 (hero, navbar, footer)
Light background:   slate-50, white (features, pricing, FAQ)
Text (dark):        slate-900 (headings), slate-600 (body)
Text (light/dark):  white (headings), slate-400 (body on dark bg)
Border:             slate-200 (light), slate-700 (dark)
Accent text:        blue-400 to teal-400 gradient (headline keyword)
```

## i18n Strategy

- Use Astro's built-in routing: `/en/` and `/es/` prefixes
- Default locale: English (`/en/` or `/`)
- Translation files: JSON or TypeScript objects in `src/i18n/`
- Language toggle in navbar switches between `/en/` and `/es/` paths
- `<html lang="en|es">` set per page for SEO

## Technical Architecture

```
boardlab-landing/                 # New repo
├── src/
│   ├── components/               # Astro components
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Pricing.astro
│   │   ├── FAQ.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML layout
│   ├── pages/
│   │   ├── en/
│   │   │   └── index.astro       # English page
│   │   ├── es/
│   │   │   └── index.astro       # Spanish page
│   │   └── index.astro           # Redirect to /en/
│   ├── i18n/
│   │   ├── en.ts                 # English translations
│   │   ├── es.ts                 # Spanish translations
│   │   └── utils.ts              # getLang(), t() helper
│   └── styles/
│       └── global.css            # Tailwind directives
├── public/
│   ├── logo.png                  # From BoardLab-Pro/public/logo.png
│   ├── icon.png                  # From BoardLab-Pro/public/icon.png
│   ├── screenshots/
│   │   ├── main.png              # From BoardLab-Pro/Doc/Main.png
│   │   ├── measure.png           # From BoardLab-Pro/Doc/Measure.png
│   │   └── xy.png                # From BoardLab-Pro/Doc/XY.png
│   └── favicon.ico               # Generated from BoardLab-Pro/public/icon.ico
├── src/pages/
│   └── 404.astro                 # Custom 404 page (bilingual)
├── astro.config.mjs              # Astro config + Tailwind integration
├── tailwind.config.mjs           # Extended with BoardLab color tokens
├── package.json
└── .gitignore
```

## External Links

| Link | Target |
|------|--------|
| Download Free | Cloudflare R2: `https://pub-a5c39dc41b1845aab82e6839d91eff7d.r2.dev/BoardLab%20Pro%20Setup%203.0.0.exe` |
| Get Pro | Lemon Squeezy checkout: `https://boardlab.lemonsqueezy.com` |
| Support email | `zelectronicauy@gmail.com` |

> **Note:** Download URL includes a hardcoded version (3.0.0). Update the filename manually on each new release.

## Responsive Behavior

- **Desktop (≥1024px):** Full layout as designed
- **Tablet (640–1023px):** Features grid → 2 columns, pricing cards stack, navbar collapses to hamburger
- **Mobile (<640px):** Single column, hamburger nav, hero text smaller, full-width CTA buttons

## Accessibility (WCAG 2.1 AA)

- All images (`<img>`) must have descriptive `alt` text (screenshots: describe what the UI shows)
- Color contrast: Minimum 4.5:1 for body text, 3:1 for large text. Verify gradient text on dark backgrounds
- Keyboard navigation: All interactive elements (navbar links, language toggle, CTA buttons, FAQ accordions) must be focusable and operable with keyboard
- FAQ: Native `<details>/<summary>` provides built-in accessibility; no ARIA needed
- Mobile hamburger menu: `aria-expanded`, `aria-controls`, focus trap when open
- Language toggle: `aria-label="Switch language"` with current language indicated
- Skip-to-content link: Hidden link at top of page for screen reader users
- Focus indicators: Visible outline on all focusable elements (Tailwind `focus-visible:ring-2`)

## SEO

- **Meta tags per locale:**
  - `<title>`: EN: "BoardLab Pro — Intelligent Electronic Board Diagnostics" / ES: "BoardLab Pro — Diagnóstico Inteligente de Placas Electrónicas"
  - `<meta name="description">`: EN/ES versions of the subheadline text
- **Open Graph / Twitter Card:** `og:title`, `og:description`, `og:image` (use hero screenshot), `og:url`, `twitter:card=summary_large_image`
- **Canonical URLs:** Each page has `<link rel="canonical">` pointing to itself
- **hreflang tags:** `<link rel="alternate" hreflang="en" href="/en/">` and `<link rel="alternate" hreflang="es" href="/es/">` on both pages
- **Structured data:** JSON-LD `SoftwareApplication` schema with name, description, operatingSystem, offers
- **sitemap.xml:** Auto-generated by `@astrojs/sitemap` integration
- **robots.txt:** Allow all crawlers

## Performance Targets

- **Lighthouse score:** 95+ on all metrics (Astro SSG makes this achievable)
- **First Contentful Paint:** <1s (static HTML, Cloudflare CDN)
- **Total page weight:** <500KB (optimize screenshots with WebP)
- **Zero client JavaScript** (FAQ uses native `<details>/<summary>`, no JS needed)

## Deployment

1. GitHub repo: `Fzf-z/BoardLab-Landing` (public)
2. Connect to Cloudflare Pages (auto-deploy on push to main)
3. Build command: `npm run build`
4. Output directory: `dist/`
5. Custom domain: `board-lab.pro`

## Verification

1. `npm run build` succeeds without errors
2. `npm run preview` serves the site locally
3. Both `/en/` and `/es/` routes render correctly
4. Language toggle switches between EN and ES
5. All external links (R2 download, Lemon Squeezy, email) work
6. Responsive layout works on mobile/tablet/desktop viewports
7. Lighthouse audit scores 95+ on Performance, Accessibility, Best Practices, SEO
