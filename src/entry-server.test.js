import { describe, expect, test } from 'vitest';
import { buildSiteFiles } from './entry-server';
import { translations } from './data/content';
import { SITE_URL } from './data/site';

const TEMPLATE = `<!doctype html>
<html lang="sr-Latn-RS">
  <head>
    <meta charset="UTF-8" />
    <!--app-head-->
  </head>
  <body>
    <div id="root"><!--app-html--></div>
  </body>
</html>`;

const files = Object.fromEntries(buildSiteFiles(TEMPLATE).map((f) => [f.file, f.content]));
const { sr, en } = translations;

// React and Helmet escape quotes in text and attributes.
const escapeHtml = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

const canonicalOf = (html) => html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
const hreflangOf = (html, lang) =>
  html.match(new RegExp(`<link[^>]*hreflang="${lang}"[^>]*href="([^"]+)"`, 'i'))?.[1];
const jsonLdOf = (html) =>
  [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(
    (m) => JSON.parse(m[1])
  );

describe('prerendered pages', () => {
  test('no template placeholders are left in any page', () => {
    Object.entries(files)
      .filter(([file]) => file.endsWith('.html'))
      .forEach(([file, html]) => {
        expect(html, file).not.toContain('<!--app-head-->');
        expect(html, file).not.toContain('<!--app-html-->');
      });
  });

  test('Serbian home page', () => {
    const html = files['index.html'];
    expect(html).toContain('<html lang="sr-Latn-RS"');
    expect(html).toContain(escapeHtml(sr.hero.title));
    expect(canonicalOf(html)).toBe(`${SITE_URL}/`);
    expect(hreflangOf(html, 'en')).toBe(`${SITE_URL}/en/`);
    expect(hreflangOf(html, 'x-default')).toBe(`${SITE_URL}/`);
    sr.blog.articles.forEach((a) => expect(html).toContain(`href="/blog/${a.slug}/"`));
    expect(html).toContain('href="/en/"');
  });

  test('English home page', () => {
    const html = files['en/index.html'];
    expect(html).toContain('<html lang="en"');
    expect(html).toContain(escapeHtml(en.hero.title));
    expect(canonicalOf(html)).toBe(`${SITE_URL}/en/`);
    expect(hreflangOf(html, 'sr')).toBe(`${SITE_URL}/`);
    en.blog.articles.forEach((a) => expect(html).toContain(`href="/en/blog/${a.slug}/"`));
  });

  test('home page has the organization, FAQ structured data and no article list schema', () => {
    const types = jsonLdOf(files['index.html'])
      .flat()
      .map((s) => s['@type']);
    expect(types).toEqual(expect.arrayContaining(['LegalService', 'Attorney', 'FAQPage']));
    expect(types).not.toContain('Article');
  });

  test.each([
    ['sr', 0],
    ['en', 2],
  ])('%s article page %i', (lang, index) => {
    const article = translations[lang].blog.articles[index];
    const other = lang === 'sr' ? 'en' : 'sr';
    const otherArticle = translations[other].blog.articles[index];
    const prefix = (l) => (l === 'sr' ? '' : `/${l}`);
    const html = files[`${lang === 'sr' ? '' : `${lang}/`}blog/${article.slug}/index.html`];

    expect(html).toBeDefined();
    expect(html).toMatch(new RegExp(`<title[^>]*>${escapeRegex(escapeHtml(article.title))}`));
    expect(html).toContain(`<h1`);
    expect(html).toContain(escapeHtml(article.title));
    expect(html).toMatch(new RegExp(`datetime="${article.isoDate}"`, 'i'));
    expect(canonicalOf(html)).toBe(`${SITE_URL}${prefix(lang)}/blog/${article.slug}/`);
    expect(hreflangOf(html, other)).toBe(`${SITE_URL}${prefix(other)}/blog/${otherArticle.slug}/`);
    expect(html).toContain('property="og:type" content="article"');

    const schema = jsonLdOf(html).find((s) => s['@type'] === 'Article');
    expect(schema.headline).toBe(article.title);
    expect(schema.datePublished).toBe(article.isoDate);
    expect(schema.mainEntityOfPage['@id']).toBe(canonicalOf(html));

    expect(html).toContain(`href="${prefix(lang)}/#blog"`);
    expect(html).toContain(`href="${prefix(lang)}/#contact-form"`);
  });

  test('article body renders bold headings and list items as markup', () => {
    const html = files[`blog/${sr.blog.articles[0].slug}/index.html`];
    expect(html).toMatch(/<strong>Ključni rokovi<\/strong>/);
    expect(html).toMatch(/<li>[^<]+<\/li>/);
    expect(html).not.toContain('**');
  });

  test('404 page is not indexable and links home', () => {
    const html = files['404.html'];
    expect(html).toContain('name="robots" content="noindex');
    expect(canonicalOf(html)).toBeUndefined();
    expect(html).toContain('href="/"');
  });
});

describe('sitemap.xml', () => {
  const xml = files['sitemap.xml'];

  test('lists every indexable page with language alternates', () => {
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locs).toContain(`${SITE_URL}/`);
    expect(locs).toContain(`${SITE_URL}/en/`);
    sr.blog.articles.forEach((a) => expect(locs).toContain(`${SITE_URL}/blog/${a.slug}/`));
    en.blog.articles.forEach((a) => expect(locs).toContain(`${SITE_URL}/en/blog/${a.slug}/`));
    expect(locs).toHaveLength(2 + sr.blog.articles.length + en.blog.articles.length);
    expect(xml).toContain(`hreflang="en" href="${SITE_URL}/en/"`);
  });

  test('articles carry their publication date as lastmod', () => {
    expect(xml).toContain(`<lastmod>${sr.blog.articles[0].isoDate}</lastmod>`);
  });
});

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
