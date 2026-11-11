import React, { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import App from './App';
import { getPrerenderRoutes } from './routing/routes';
import { buildSitemap } from './seo/sitemap';

const HEAD_TAG_GROUPS = ['title', 'meta', 'link', 'script'];

/**
 * Renders one route to the HTML fragments that get injected into index.html.
 * @param {import('./routing/routes').Route} route
 * @returns {{ appHtml: string, headHtml: string, htmlAttributes: string }}
 */
export const render = (route) => {
  const helmetContext = {};
  const appHtml = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <App route={route} />
      </HelmetProvider>
    </StrictMode>
  );
  const { helmet } = helmetContext;

  return {
    appHtml,
    headHtml: HEAD_TAG_GROUPS.map((group) => helmet[group].toString()).join('\n    '),
    htmlAttributes: helmet.htmlAttributes.toString(),
  };
};

// Function replacers: rendered content may contain "$" sequences (e.g. priceRange "$$"),
// which string replacements would treat as special patterns.
const injectIntoTemplate = (template, { appHtml, headHtml, htmlAttributes }) =>
  template
    .replace(/<html[^>]*>/, () => `<html ${htmlAttributes}>`)
    .replace('<!--app-head-->', () => headHtml)
    .replace('<!--app-html-->', () => appHtml);

/**
 * Every file the prerender step writes into dist/: one HTML page per route plus the sitemap.
 * @param {string} template - the client build's dist/index.html
 * @returns {{ file: string, content: string }[]}
 */
export const buildSiteFiles = (template) => {
  const routes = getPrerenderRoutes();
  const pages = routes.map(({ file, route }) => ({
    file,
    content: injectIntoTemplate(template, render(route)),
  }));

  return [...pages, { file: 'sitemap.xml', content: buildSitemap(routes) }];
};
