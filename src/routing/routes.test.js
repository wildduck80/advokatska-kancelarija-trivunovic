import { describe, expect, test } from 'vitest';
import { translations } from '../data/content';
import { SITE_URL } from '../data/site';
import {
  PAGE,
  absoluteUrl,
  alternatePaths,
  articlePath,
  getPrerenderRoutes,
  homePath,
  privacyPath,
  resolveRoute,
  routePath,
} from './routes';

const srArticles = translations.sr.blog.articles;
const enArticles = translations.en.blog.articles;
const srSlug = srArticles[0].slug;
const enSlug = enArticles[0].slug;

describe('path builders', () => {
  test('home paths use a language prefix only for English', () => {
    expect(homePath('sr')).toBe('/');
    expect(homePath('en')).toBe('/en/');
  });

  test('article paths live under /blog/ with a trailing slash', () => {
    expect(articlePath('sr', 'some-slug')).toBe('/blog/some-slug/');
    expect(articlePath('en', 'some-slug')).toBe('/en/blog/some-slug/');
  });

  test('privacy policy paths use a translated slug per language', () => {
    expect(privacyPath('sr')).toBe('/politika-privatnosti/');
    expect(privacyPath('en')).toBe('/en/privacy-policy/');
  });

  test('absoluteUrl prefixes the site origin', () => {
    expect(absoluteUrl('/en/')).toBe(`${SITE_URL}/en/`);
  });
});

describe('resolveRoute', () => {
  test.each([
    ['/', 'sr'],
    ['/index.html', 'sr'],
    ['/en/', 'en'],
    ['/en', 'en'],
    ['/en/index.html', 'en'],
  ])('%s is the %s home page', (pathname, lang) => {
    expect(resolveRoute(pathname)).toEqual({ lang, page: PAGE.HOME });
  });

  test('resolves a Serbian article with or without the trailing slash', () => {
    const expected = { lang: 'sr', page: PAGE.ARTICLE, articleIndex: 0 };
    expect(resolveRoute(`/blog/${srSlug}/`)).toEqual(expected);
    expect(resolveRoute(`/blog/${srSlug}`)).toEqual(expected);
  });

  test('resolves an English article', () => {
    expect(resolveRoute(`/en/blog/${enSlug}/`)).toEqual({
      lang: 'en',
      page: PAGE.ARTICLE,
      articleIndex: 0,
    });
  });

  test.each([
    ['/politika-privatnosti/', 'sr'],
    ['/politika-privatnosti', 'sr'],
    ['/en/privacy-policy/', 'en'],
  ])('%s is the %s privacy policy', (pathname, lang) => {
    expect(resolveRoute(pathname)).toEqual({ lang, page: PAGE.PRIVACY });
  });

  // Unknown paths always resolve to the single prerendered (Serbian) 404 page,
  // so the client hydrates exactly what Vercel served.
  test.each([
    '/blog/',
    `/blog/${enSlug}/`,
    `/en/blog/${srSlug}/`,
    '/en/nope/',
    '/sr/',
    '/x/y/z',
    '/privacy-policy/',
    '/en/politika-privatnosti/',
  ])('%s is not found', (pathname) => {
    expect(resolveRoute(pathname)).toEqual({ lang: 'sr', page: PAGE.NOT_FOUND });
  });
});

describe('routePath', () => {
  test('returns the canonical path of a route', () => {
    expect(routePath({ lang: 'en', page: PAGE.HOME })).toBe('/en/');
    expect(routePath({ lang: 'sr', page: PAGE.ARTICLE, articleIndex: 0 })).toBe(`/blog/${srSlug}/`);
  });

  test('returns null for the not-found page', () => {
    expect(routePath({ lang: 'sr', page: PAGE.NOT_FOUND })).toBeNull();
  });
});

describe('alternatePaths', () => {
  test('home pages point at each other', () => {
    expect(alternatePaths({ lang: 'sr', page: PAGE.HOME })).toEqual({ sr: '/', en: '/en/' });
  });

  test('articles point at the translated article with its own slug', () => {
    expect(alternatePaths({ lang: 'en', page: PAGE.ARTICLE, articleIndex: 0 })).toEqual({
      sr: `/blog/${srSlug}/`,
      en: `/en/blog/${enSlug}/`,
    });
  });

  test('privacy policy pages point at each other', () => {
    expect(alternatePaths({ lang: 'sr', page: PAGE.PRIVACY })).toEqual({
      sr: '/politika-privatnosti/',
      en: '/en/privacy-policy/',
    });
  });

  test('the not-found page offers the home pages', () => {
    expect(alternatePaths({ lang: 'sr', page: PAGE.NOT_FOUND })).toEqual({ sr: '/', en: '/en/' });
  });
});

describe('getPrerenderRoutes', () => {
  const routes = getPrerenderRoutes();
  const files = routes.map((r) => r.file);

  test('covers home, privacy and every article page in both languages plus the 404 page', () => {
    expect(files).toContain('index.html');
    expect(files).toContain('en/index.html');
    expect(files).toContain('politika-privatnosti/index.html');
    expect(files).toContain('en/privacy-policy/index.html');
    srArticles.forEach((a) => expect(files).toContain(`blog/${a.slug}/index.html`));
    enArticles.forEach((a) => expect(files).toContain(`en/blog/${a.slug}/index.html`));
    expect(files).toContain('404.html');
    expect(files).toHaveLength(4 + srArticles.length + enArticles.length + 1);
  });

  test('every indexable path resolves back to its own route', () => {
    routes
      .filter((r) => r.path)
      .forEach(({ path, route }) => expect(resolveRoute(path)).toEqual(route));
  });
});
