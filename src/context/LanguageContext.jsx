import React, { useState, useEffect } from 'react';
import { translations } from '../data/content';
import { LanguageContext } from './language-context';
import {
  buildLanguageUrl,
  readStoredLanguage,
  resolveInitialLanguage,
  toHtmlLang,
  writeStoredLanguage,
} from './language';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return resolveInitialLanguage();
  return resolveInitialLanguage({
    search: window.location.search,
    storedLanguage: readStoredLanguage(window.localStorage),
  });
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLanguage);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = toHtmlLang(lang);
    writeStoredLanguage(window.localStorage, lang);

    // Keep the address bar on the same URL search engines index for this language.
    const nextUrl = buildLanguageUrl(window.location.href, lang);
    if (nextUrl !== window.location.href) {
      window.history.replaceState(window.history.state, '', nextUrl);
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'sr' ? 'en' : 'sr'));
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
