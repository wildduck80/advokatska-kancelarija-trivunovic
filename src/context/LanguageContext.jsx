import React, { useState, useEffect } from 'react';
import { translations } from '../data/content';
import { LanguageContext } from './language-context';

// Get initial language from localStorage or default to Serbian
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('preferredLanguage');
    return savedLang || 'sr';
  }
  return 'sr';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLanguage);

  const t = translations[lang];

  // Update <html lang> attribute and persist to localStorage
  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'sr' ? 'sr-Latn-RS' : 'en';

    // Persist to localStorage
    localStorage.setItem('preferredLanguage', lang);
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
