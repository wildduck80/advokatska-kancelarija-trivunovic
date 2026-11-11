/** @typedef {'sr' | 'en'} Language */

export const SUPPORTED_LANGUAGES = ['sr', 'en'];
export const DEFAULT_LANGUAGE = 'sr';

const HTML_LANG = { sr: 'sr-Latn-RS', en: 'en' };

/**
 * @param {Language} lang
 * @returns {Language}
 */
export const otherLanguage = (lang) => SUPPORTED_LANGUAGES.find((l) => l !== lang);

/**
 * @param {Language} lang
 * @returns {string}
 */
export const toHtmlLang = (lang) => HTML_LANG[lang] ?? HTML_LANG[DEFAULT_LANGUAGE];
