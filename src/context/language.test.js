import { describe, expect, test } from 'vitest';
import {
  buildLanguageUrl,
  readStoredLanguage,
  resolveInitialLanguage,
  toHtmlLang,
  writeStoredLanguage,
} from './language';

const throwingStorage = {
  getItem: () => {
    throw new Error('SecurityError');
  },
  setItem: () => {
    throw new Error('QuotaExceededError');
  },
};

describe('resolveInitialLanguage', () => {
  test('defaults to Serbian when nothing is set', () => {
    expect(resolveInitialLanguage({ search: '', storedLanguage: null })).toBe('sr');
  });

  test('uses a valid stored language', () => {
    expect(resolveInitialLanguage({ search: '', storedLanguage: 'en' })).toBe('en');
  });

  test('ignores an unsupported stored language', () => {
    expect(resolveInitialLanguage({ search: '', storedLanguage: 'de' })).toBe('sr');
  });

  test('URL ?lang= takes precedence over the stored language', () => {
    expect(resolveInitialLanguage({ search: '?lang=en', storedLanguage: 'sr' })).toBe('en');
    expect(resolveInitialLanguage({ search: '?lang=sr', storedLanguage: 'en' })).toBe('sr');
  });

  test('ignores an unsupported ?lang= value and falls back to storage', () => {
    expect(resolveInitialLanguage({ search: '?lang=xx', storedLanguage: 'en' })).toBe('en');
  });

  test('works with no arguments', () => {
    expect(resolveInitialLanguage()).toBe('sr');
  });
});

describe('storage helpers', () => {
  test('readStoredLanguage returns null when storage throws', () => {
    expect(readStoredLanguage(throwingStorage)).toBeNull();
  });

  test('readStoredLanguage returns null when storage is missing', () => {
    expect(readStoredLanguage(undefined)).toBeNull();
  });

  test('writeStoredLanguage does not throw when storage throws', () => {
    expect(() => writeStoredLanguage(throwingStorage, 'en')).not.toThrow();
  });

  test('round-trips through a working storage', () => {
    const store = new Map();
    const storage = {
      getItem: (k) => store.get(k) ?? null,
      setItem: (k, v) => store.set(k, v),
    };
    writeStoredLanguage(storage, 'en');
    expect(readStoredLanguage(storage)).toBe('en');
  });
});

describe('buildLanguageUrl', () => {
  test('adds ?lang=en for English', () => {
    expect(buildLanguageUrl('https://example.rs/', 'en')).toBe('https://example.rs/?lang=en');
  });

  test('removes the lang param for the default language', () => {
    expect(buildLanguageUrl('https://example.rs/?lang=en', 'sr')).toBe('https://example.rs/');
  });

  test('preserves other params and the hash', () => {
    expect(buildLanguageUrl('https://example.rs/?utm=x#contact-form', 'en')).toBe(
      'https://example.rs/?utm=x&lang=en#contact-form'
    );
  });
});

describe('toHtmlLang', () => {
  test('maps languages to BCP 47 tags', () => {
    expect(toHtmlLang('sr')).toBe('sr-Latn-RS');
    expect(toHtmlLang('en')).toBe('en');
  });
});
