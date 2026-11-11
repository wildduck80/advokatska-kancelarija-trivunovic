# Languages, URLs and Prerendering

The site is bilingual (Serbian default, English). Every page in every language has its own
URL and is prerendered to static HTML at build time, so search engines and social-media
previews see the full content without running JavaScript.

## URLs

| Page | Serbian | English |
|---|---|---|
| Home | `/` | `/en/` |
| Article | `/blog/<sr-slug>/` | `/en/blog/<en-slug>/` |
| Not found | `404.html` (Serbian, `noindex`) | — |

- The URL is the only source of the language. There is no `localStorage` preference and no
  automatic redirect; the flag in the navbar links to the same page in the other language.
- URLs end with a slash. Vercel redirects `/en` → `/en/` (`"trailingSlash": true` in
  `vercel.json`).
- Old `/?lang=en` links (used briefly before path-based URLs) redirect permanently to `/en/`.
- Section links (`#about`, `#contact-form`, ...) are written as `<home path>#section`, so they
  also work from article pages.

All of this lives in `src/routing/routes.js` (`resolveRoute`, `homePath`, `articlePath`,
`alternatePaths`, `getPrerenderRoutes`) and is unit-tested in `routes.test.js`.

## Language codes

- Serbian: `sr-Latn-RS` (Latin script) in `<html lang>`, `sr` in hreflang and URLs
- English: `en`

`src/context/language.js` holds the supported languages and the `<html lang>` mapping.

## Content

All copy is in `src/data/content.js` under `translations.sr` and `translations.en`, which
must stay structurally identical. Blog articles are paired **by array position**: the
first Serbian article is the translation of the first English article, and so on. Each has
its own `slug` (lowercase, digits and hyphens). Tests in `src/data/content.test.js` enforce
matching counts, dates, images and URL-safe unique slugs.

To add an article: add an object with the same fields to **both** `articles` arrays at the
same position. Its pages, hreflang links, structured data and sitemap entries are generated
automatically on the next build.

## How rendering works

```
npm run build
  ├─ build:client   vite build                     → dist/ (JS, CSS, index.html template)
  ├─ build:server   vite build --ssr entry-server  → dist-ssr/ (temporary)
  └─ scripts/prerender.js
       for every route in getPrerenderRoutes():
         renderToString(<App route={...} />)  + Helmet head tags
         → dist/<path>/index.html
       → dist/404.html, dist/sitemap.xml
```

- `src/entry-server.jsx` renders a route and injects the HTML and head tags into the
  `<!--app-head-->` / `<!--app-html-->` placeholders in `index.html`.
- `src/entry-client.jsx` resolves the route from `window.location.pathname` and hydrates the
  prerendered HTML. In `npm run dev` there is no prerendered HTML, so it renders from scratch.
- Head tags (title, description, canonical, hreflang, Open Graph, JSON-LD) come from
  `src/components/SEO.jsx`; the JSON-LD builders are in `src/seo/schemas.js`.

Because pages are hydrated, the first client render must match the server render. Do not
read `window`, `localStorage` or the current time during render; do it in an effect.

## SEO per page

| | Home | Article | 404 |
|---|---|---|---|
| `<link rel="canonical">` | own URL | own URL | none |
| hreflang `sr` / `en` / `x-default` | yes | yes (paired article) | none |
| `robots` | `index, follow` | `index, follow` | `noindex, follow` |
| `og:type` | `website` | `article` | `website` |
| JSON-LD | LegalService, Attorney, Service, Person, FAQPage | Article | none |

## Testing

- `npm test` runs `src/entry-server.test.js`, which prerenders every page in memory and
  checks titles, canonical/hreflang links, JSON-LD, the 404 page and the sitemap.
- After deploying, check pages with
  [Google's Rich Results Test](https://search.google.com/test/rich-results) and submit
  `https://trivunovic-law.rs/sitemap.xml` in Google Search Console.
