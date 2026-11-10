/** @typedef {'sr' | 'en'} Language */

export const SUPPORTED_LANGUAGES = ['sr', 'en'];
export const DEFAULT_LANGUAGE = 'sr';
export const LANG_QUERY_PARAM = 'lang';
export const STORAGE_KEY = 'preferredLanguage';

const HTML_LANG = { sr: 'sr-Latn-RS', en: 'en' };

/**
 * @param {unknown} value
 * @returns {value is Language}
 */
export const isSupportedLanguage = (value) => SUPPORTED_LANGUAGES.includes(value);

/**
 * Picks the language for first render: a valid `?lang=` wins (so hreflang URLs
 * render the right language), then a valid stored preference, then Serbian.
 * @param {{ search?: string, storedLanguage?: string | null }} [sources]
 * @returns {Language}
 */
export const resolveInitialLanguage = ({ search = '', storedLanguage = null } = {}) => {
  const fromUrl = new URLSearchParams(search).get(LANG_QUERY_PARAM);
  if (isSupportedLanguage(fromUrl)) return fromUrl;
  if (isSupportedLanguage(storedLanguage)) return storedLanguage;
  return DEFAULT_LANGUAGE;
};

// localStorage throws when storage is disabled (privacy modes, blocked cookies);
// the language preference is non-essential, so we fall back instead of crashing.

/**
 * @param {Pick<Storage, 'getItem'> | undefined} storage
 * @returns {string | null}
 */
export const readStoredLanguage = (storage) => {
  try {
    return storage?.getItem(STORAGE_KEY) ?? null;
  } catch {
    return null;
  }
};

/**
 * @param {Pick<Storage, 'setItem'> | undefined} storage
 * @param {Language} lang
 * @returns {void}
 */
export const writeStoredLanguage = (storage, lang) => {
  try {
    storage?.setItem(STORAGE_KEY, lang);
  } catch {
    // Preference just won't persist; see note above.
  }
};

/**
 * Returns `href` with `?lang=` set for non-default languages and removed for the default.
 * @param {string} href
 * @param {Language} lang
 * @returns {string}
 */
export const buildLanguageUrl = (href, lang) => {
  const url = new URL(href);
  if (lang === DEFAULT_LANGUAGE) {
    url.searchParams.delete(LANG_QUERY_PARAM);
  } else {
    url.searchParams.set(LANG_QUERY_PARAM, lang);
  }
  return url.toString();
};

/**
 * @param {Language} lang
 * @returns {string}
 */
export const toHtmlLang = (lang) => HTML_LANG[lang] ?? HTML_LANG[DEFAULT_LANGUAGE];
