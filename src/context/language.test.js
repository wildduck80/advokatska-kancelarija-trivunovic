import { describe, expect, test } from 'vitest';
import { otherLanguage, toHtmlLang } from './language';

describe('toHtmlLang', () => {
  test('maps languages to BCP 47 tags', () => {
    expect(toHtmlLang('sr')).toBe('sr-Latn-RS');
    expect(toHtmlLang('en')).toBe('en');
  });

  test('falls back to Serbian for unknown values', () => {
    expect(toHtmlLang('xx')).toBe('sr-Latn-RS');
  });
});

describe('otherLanguage', () => {
  test('returns the language to switch to', () => {
    expect(otherLanguage('sr')).toBe('en');
    expect(otherLanguage('en')).toBe('sr');
  });
});
