import { translations } from '../data/content';
import { DEFAULT_LANGUAGE } from '../context/language';
import { PAGE, absoluteUrl, alternatePaths } from '../routing/routes';

const lastModified = ({ lang, page, articleIndex }) => {
  if (page === PAGE.ARTICLE) return translations[lang].blog.articles[articleIndex].isoDate;
  if (page === PAGE.PRIVACY) return translations[lang].privacy.isoDate;
  return null;
};

const alternateLinks = (route) => {
  const alternates = alternatePaths(route);
  return [...Object.entries(alternates), ['x-default', alternates[DEFAULT_LANGUAGE]]].map(
    ([lang, path]) =>
      `    <xhtml:link rel="alternate" hreflang="${lang}" href="${absoluteUrl(path)}"/>`
  );
};

/**
 * @param {{ path: string | null, route: import('../routing/routes').Route }[]} pages
 * @returns {string}
 */
export const buildSitemap = (pages) => {
  const entries = pages
    .filter(({ path }) => path)
    .map(({ path, route }) => {
      const lastmod = lastModified(route);
      return [
        '  <url>',
        `    <loc>${absoluteUrl(path)}</loc>`,
        ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
        ...alternateLinks(route),
        '  </url>',
      ].join('\n');
    });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');
};
