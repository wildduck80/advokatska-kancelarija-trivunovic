# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing website for **Advokatska Kancelarija Trivunović**, a law firm in Futog / Novi Sad, Serbia. Bilingual (Serbian default, English), built with React 19 + Vite. There is no backend — the contact form submits directly to EmailJS from the browser.

## Commands

```bash
npm run dev            # Start Vite dev server (HMR)
npm run build          # Production build to dist/
npm run preview        # Serve the production build locally
npm run lint           # ESLint over the repo
npm run format         # Prettier --write on src/**/*.{js,jsx,css}
npm run format:check   # Prettier --check (CI-friendly)
npm test               # Vitest (unit tests, *.test.js next to the code)
```

## Architecture

The app is a flat, single-page layout. `src/App.jsx` renders every section in fixed order (`Navbar → Hero → About → Services → Team → Blog → FAQ → ContactForm → LazyMap → Footer`) inside a `LanguageProvider`. `src/main.jsx` wraps everything in `HelmetProvider` (`@dr.pogodin/react-helmet`) and imports self-hosted `@fontsource` fonts — fonts are bundled, not loaded from Google, for GDPR reasons; keep it that way.

Three cross-cutting concerns drive most of the structure:

### 1. Content & i18n — the single source of truth is `src/data/content.js`

All user-facing copy for both languages lives in `translations.sr` and `translations.en` in `src/data/content.js` (~940 lines). Components render **no hardcoded strings** — they read from the `t` object. To change any text, edit this file; do not put copy in components.

- `src/context/LanguageContext.jsx` exposes `useLang()` → `{ lang, t, toggleLanguage }`. `t` is `translations[lang]`.
- Initial language: valid `?lang=` URL param → valid `localStorage['preferredLanguage']` → `sr` (logic in `src/context/language.js`, unit-tested). Invalid values are ignored and storage errors are tolerated. The effect syncs `document.documentElement.lang` (`sr-Latn-RS` or `en`) and rewrites the URL so English is `/?lang=en` and Serbian is `/` — these are the URLs used for canonical/hreflang and in `public/sitemap.xml`.
- Serbian uses the locale code `sr-Latn-RS` (Latin script), matching `index.html`'s initial `<html lang>`.
- When adding a new component that displays text, add matching keys to **both** `sr` and `en` blocks. The `sr` and `en` objects must stay structurally identical — SEO structured data and section renders map over shared array shapes (e.g. `t.services.list`, `t.team.members`, `t.blog.articles`, `t.faqs.list`).

See `LANGUAGE_HANDLING.md` for the full i18n rationale.

### 2. SEO — `src/components/SEO.jsx` is generated from content

`SEO.jsx` builds all meta tags and JSON-LD structured data (`LegalService`, `Attorney`, `Service`, `Person`, `FAQPage`, `Article`) by mapping over the `t` arrays and injecting them via `<Helmet>`. Because the schemas derive from `content.js`, updating content automatically updates structured data. `index.html` also contains a static baseline set of meta tags for the pre-hydration state.

Language-independent facts (domain `https://trivunovic-law.rs`, coordinates, postal address, geo region) live in `src/data/site.js`. `index.html`, `public/robots.txt` and `public/sitemap.xml` are static and must be kept in sync with it by hand.

### 3. Contact form — EmailJS, client-side only

`src/components/ContactForm.jsx` sends via `@emailjs/browser` using three `VITE_EMAILJS_*` env vars (see `.env.example`, `EMAILJS_SETUP.md`). It guards against unconfigured/placeholder credentials, and includes a honeypot field plus a 60s client-side rate limit (`RATE_LIMIT_MS`). All `VITE_`-prefixed vars are exposed to the client bundle — never put secrets there. The client-side checks are UX only; real abuse protection (allowed origins, CAPTCHA, fixed recipient) is configured in the EmailJS dashboard.

### Security headers

Hosted on Vercel. `vercel.json` sets CSP, HSTS and friends for all routes. `style-src` needs `'unsafe-inline'` for React style props and Leaflet. If you add a new third-party origin (images, API, tiles), add it to the CSP there or it will be blocked.

### Styling & animations

- CSS is split per section under `src/styles/` (imported via `src/styles/index.css` from `App.jsx`); `src/index.css` holds only base resets. There is no CSS-module or Tailwind setup.
- Scroll-reveal animations use `src/hooks/useScrollAnimation.js` (IntersectionObserver, fires once). Components toggle a `visible` class based on the returned `isVisible`.
- The Leaflet map is code-split: `LazyMap.jsx` lazy-loads `Map.jsx` via `React.lazy` + IntersectionObserver (200px rootMargin) so Leaflet is only fetched when scrolled near. Leaflet marker assets are served from `public/leaflet/`.

## Conventions

- ESLint flat config; `no-unused-vars` ignores `^[A-Z_]` patterns (constants/components). Prettier: single quotes, semicolons, 2-space, `printWidth` 100, `trailingComma: es5`.
- Components are `.jsx` under `src/components/`, PascalCase, default-exported, one component per file.
