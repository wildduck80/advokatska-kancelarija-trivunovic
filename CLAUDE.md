# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing website for **Advokatska Kancelarija Trivunović**, a law firm in Futog / Novi Sad, Serbia. Bilingual (Serbian default, English), built with React 19 + Vite. There is no backend — the contact form submits directly to EmailJS from the browser.

## Commands

```bash
npm run dev            # Start Vite dev server (HMR)
npm run build          # Client build + SSR build + prerender every page to dist/
npm run preview        # Serve the production build locally
npm run lint           # ESLint over the repo
npm run format         # Prettier --write on src/**/*.{js,jsx,css}
npm run format:check   # Prettier --check (CI-friendly)
npm test               # Vitest (unit tests, *.test.js next to the code)
```

## Architecture

A small multi-page site, prerendered to static HTML at build time and hydrated in the browser. `src/App.jsx` takes a `route` (from `src/routing/routes.js`) and renders `Navbar → <page> → Footer` inside a `LanguageProvider`. Pages live in `src/pages/`: `HomePage` (`Hero → About → Services → Team → Blog → FAQ → ContactForm → LazyMap`), `ArticlePage` (one per blog article) and `NotFoundPage`.

URLs: `/` and `/en/` (home), `/blog/<slug>/` and `/en/blog/<slug>/` (articles), `404.html`. `src/entry-client.jsx` resolves the route from `location.pathname` and hydrates (or renders, in dev); it also imports the self-hosted `@fontsource` fonts — bundled, not loaded from Google, for GDPR reasons; keep it that way. `src/entry-server.jsx` renders every route for `scripts/prerender.js`, which writes `dist/**/index.html`, `dist/404.html` and `dist/sitemap.xml`. Because pages are hydrated, never read `window`/`localStorage`/time during render — only in effects. See `LANGUAGE_HANDLING.md` for the full picture.

Three cross-cutting concerns drive most of the structure:

### 1. Content & i18n — the single source of truth is `src/data/content.js`

All user-facing copy for both languages lives in `translations.sr` and `translations.en` in `src/data/content.js` (~940 lines). Components render **no hardcoded strings** — they read from the `t` object. To change any text, edit this file; do not put copy in components.

- `src/context/LanguageContext.jsx` exposes `useLang()` → `{ lang, t, homeHref, switchLanguageHref }`. `t` is `translations[lang]`. The language comes only from the URL path; there is no stored preference.
- In-page links must be built as `${homeHref}#section` so they work from article pages too.
- Serbian uses the locale code `sr-Latn-RS` (Latin script) in `<html lang>`.
- Blog articles are paired across languages **by array index**; each has its own URL `slug`. Add new articles at the same position in both arrays.
- When adding a new component that displays text, add matching keys to **both** `sr` and `en` blocks. The `sr` and `en` objects must stay structurally identical — SEO structured data and section renders map over shared array shapes (e.g. `t.services.list`, `t.team.members`, `t.blog.articles`, `t.faqs.list`).

### 2. SEO — generated from content, per page

Each page renders `<SEO>` (`src/components/SEO.jsx`) with its title, description, canonical path and hreflang alternates; it is injected via `<Helmet>` and serialized into the prerendered `<head>`. JSON-LD builders (`LegalService`, `Attorney`, `Service`, `Person`, `FAQPage` on home; `Article` on article pages) are pure functions in `src/seo/schemas.js`. The sitemap is generated from the route list (`src/seo/sitemap.js`) — don't hand-edit one. `index.html` is only a template with `<!--app-head-->` / `<!--app-html-->` placeholders; don't add SEO tags there.

Language-independent facts (domain `https://trivunovic-law.rs`, coordinates, postal address, geo region) live in `src/data/site.js`. Only `public/robots.txt` must be kept in sync with it by hand.

### 3. Contact form — EmailJS, client-side only

`src/components/ContactForm.jsx` sends via `@emailjs/browser` using three `VITE_EMAILJS_*` env vars (see `.env.example`, `EMAILJS_SETUP.md`). It guards against unconfigured/placeholder credentials, and includes a honeypot field plus a 60s client-side rate limit (`RATE_LIMIT_MS`). All `VITE_`-prefixed vars are exposed to the client bundle — never put secrets there. The client-side checks are UX only; real abuse protection (allowed origins, CAPTCHA, fixed recipient) is configured in the EmailJS dashboard.

### Security headers

Hosted on Vercel. `vercel.json` sets `trailingSlash: true`, redirects old `/?lang=en` links to `/en/`, and sets CSP, HSTS and friends for all routes. `style-src` needs `'unsafe-inline'` for React style props and Leaflet. If you add a new third-party origin (images, API, tiles), add it to the CSP there or it will be blocked.

### Styling & animations

- CSS is split per section under `src/styles/` (imported via `src/styles/index.css` from `App.jsx`); `src/index.css` holds only base resets. There is no CSS-module or Tailwind setup.
- Scroll-reveal animations use `src/hooks/useScrollAnimation.js` (IntersectionObserver, fires once). Components toggle a `visible` class based on the returned `isVisible`.
- The Leaflet map is code-split: `LazyMap.jsx` lazy-loads `Map.jsx` via `React.lazy` + IntersectionObserver (200px rootMargin) so Leaflet is only fetched when scrolled near. Leaflet marker assets are served from `public/leaflet/`.

## Conventions

- ESLint flat config; `no-unused-vars` ignores `^[A-Z_]` patterns (constants/components). Prettier: single quotes, semicolons, 2-space, `printWidth` 100, `trailingComma: es5`.
- Components are `.jsx` under `src/components/` (pages under `src/pages/`), PascalCase, default-exported, one component per file.
- Tests are Vitest `*.test.js` files next to the code. `src/entry-server.test.js` prerenders every page in memory and is the main regression check for routing and SEO.
