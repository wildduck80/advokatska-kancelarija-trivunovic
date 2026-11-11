import { translations } from '../data/content';
import { SITE_URL } from '../data/site';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../context/language';

/** @typedef {import('../context/language').Language} Language */
/** @typedef {{ lang: Language, page: string, articleIndex?: number }} Route */

export const PAGE = Object.freeze({
  HOME: 'home',
  ARTICLE: 'article',
  PRIVACY: 'privacy',
  NOT_FOUND: 'notFound',
});

const BLOG_SEGMENT = 'blog';
const NOT_FOUND_ROUTE = Object.freeze({ lang: DEFAULT_LANGUAGE, page: PAGE.NOT_FOUND });

const langPrefix = (lang) => (lang === DEFAULT_LANGUAGE ? '' : `/${lang}`);
const articlesFor = (lang) => translations[lang].blog.articles;

/**
 * @param {Language} lang
 * @returns {string}
 */
export const homePath = (lang) => `${langPrefix(lang)}/`;

/**
 * @param {Language} lang
 * @param {string} slug
 * @returns {string}
 */
export const articlePath = (lang, slug) => `${langPrefix(lang)}/${BLOG_SEGMENT}/${slug}/`;

/**
 * @param {Language} lang
 * @returns {string}
 */
export const privacyPath = (lang) => `${langPrefix(lang)}/${translations[lang].privacy.slug}/`;

/**
 * @param {string} path
 * @returns {string}
 */
export const absoluteUrl = (path) => `${SITE_URL}${path}`;

/**
 * Maps a URL pathname to the page it shows. Anything unrecognised is the 404 page.
 * @param {string} pathname
 * @returns {Route}
 */
export const resolveRoute = (pathname) => {
  const segments = pathname
    .replace(/index\.html$/, '')
    .split('/')
    .filter(Boolean);
  const hasLangPrefix =
    segments[0] !== DEFAULT_LANGUAGE && SUPPORTED_LANGUAGES.includes(segments[0]);
  const lang = hasLangPrefix ? segments[0] : DEFAULT_LANGUAGE;
  const rest = hasLangPrefix ? segments.slice(1) : segments;

  if (rest.length === 0) return { lang, page: PAGE.HOME };
  if (rest.length === 1 && rest[0] === translations[lang].privacy.slug) {
    return { lang, page: PAGE.PRIVACY };
  }

  if (rest.length === 2 && rest[0] === BLOG_SEGMENT) {
    const articleIndex = articlesFor(lang).findIndex((article) => article.slug === rest[1]);
    if (articleIndex !== -1) return { lang, page: PAGE.ARTICLE, articleIndex };
  }

  return NOT_FOUND_ROUTE;
};

/**
 * Canonical path for a route, or null when the page has no indexable URL.
 * @param {Route} route
 * @returns {string | null}
 */
export const routePath = ({ lang, page, articleIndex }) => {
  if (page === PAGE.HOME) return homePath(lang);
  if (page === PAGE.ARTICLE) return articlePath(lang, articlesFor(lang)[articleIndex].slug);
  if (page === PAGE.PRIVACY) return privacyPath(lang);
  return null;
};

/**
 * The same page in every language; the 404 page offers the home pages.
 * Articles are paired by their index in content.js.
 * @param {Route} route
 * @returns {Record<Language, string>}
 */
export const alternatePaths = (route) =>
  Object.fromEntries(
    SUPPORTED_LANGUAGES.map((lang) => [
      lang,
      route.page === PAGE.NOT_FOUND ? homePath(lang) : routePath({ ...route, lang }),
    ])
  );

const toFile = (path) => `${path.slice(1)}index.html`;

/**
 * Every page that gets its own HTML file at build time.
 * @returns {{ path: string | null, file: string, route: Route }[]}
 */
export const getPrerenderRoutes = () => {
  const pages = SUPPORTED_LANGUAGES.flatMap((lang) => [
    { lang, page: PAGE.HOME },
    { lang, page: PAGE.PRIVACY },
    ...articlesFor(lang).map((_, articleIndex) => ({ lang, page: PAGE.ARTICLE, articleIndex })),
  ]).map((route) => {
    const path = routePath(route);
    return { path, file: toFile(path), route };
  });

  return [...pages, { path: null, file: '404.html', route: NOT_FOUND_ROUTE }];
};
