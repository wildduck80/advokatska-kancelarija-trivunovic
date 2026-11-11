import React from 'react';
import { translations } from '../data/content';
import { LanguageContext } from './language-context';
import { homePath } from '../routing/routes';

/**
 * The language comes from the URL (see routing/routes.js), so it is fixed for the
 * lifetime of a page; switching language is a link to the translated page.
 */
export const LanguageProvider = ({ lang, switchLanguageHref, children }) => {
  const value = {
    lang,
    t: translations[lang],
    homeHref: homePath(lang),
    switchLanguageHref,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
