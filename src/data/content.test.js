import { describe, expect, test } from 'vitest';
import { translations } from './content';

const { sr, en } = translations;

describe('blog articles', () => {
  test('sr and en have the same number of articles', () => {
    expect(en.blog.articles).toHaveLength(sr.blog.articles.length);
  });

  test('paired articles share isoDate and image', () => {
    sr.blog.articles.forEach((article, i) => {
      expect(en.blog.articles[i].isoDate).toBe(article.isoDate);
      expect(en.blog.articles[i].img).toBe(article.img);
    });
  });

  test('every article has the fields the UI and SEO schema read', () => {
    [...sr.blog.articles, ...en.blog.articles].forEach((article) => {
      ['slug', 'title', 'excerpt', 'content', 'date', 'isoDate', 'category', 'img'].forEach(
        (field) => {
          expect(article[field], `${article.title} → ${field}`).toBeTruthy();
        }
      );
      expect(article.isoDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  test.each([
    ['sr', sr],
    ['en', en],
  ])('%s slugs are unique and URL-safe', (_, language) => {
    const slugs = language.blog.articles.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/));
  });

  test('content uses only the markup ArticleBody can render', () => {
    [...sr.blog.articles, ...en.blog.articles].forEach((article) => {
      const withoutBold = article.content.replace(/\*\*.*?\*\*/g, '');
      expect(withoutBold, article.title).not.toContain('*');
    });
  });
});

describe('privacy policy', () => {
  test('sr and en have the same sections and last-updated date', () => {
    expect(en.privacy.sections).toHaveLength(sr.privacy.sections.length);
    expect(en.privacy.isoDate).toBe(sr.privacy.isoDate);
  });

  test.each([
    ['sr', sr],
    ['en', en],
  ])('%s policy has the fields the page, SEO and contact form read', (_, language) => {
    const { privacy } = language;
    ['slug', 'title', 'description', 'lastUpdatedLabel', 'lastUpdated', 'isoDate'].forEach(
      (field) => expect(privacy[field], field).toBeTruthy()
    );
    expect(privacy.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    expect(privacy.isoDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    privacy.sections.forEach((section) => {
      expect(section.heading).toBeTruthy();
      expect(section.content.replace(/\*\*.*?\*\*/g, ''), section.heading).not.toContain('*');
    });
    expect(language.contact.form.privacyLink).toBeTruthy();
  });

  test('names the controller contact address and the supervisory authority', () => {
    [sr, en].forEach((language) => {
      const text = language.privacy.sections.map((s) => s.content).join('\n');
      expect(text).toContain(language.company.email);
      expect(text).toContain('poverenik.rs');
    });
  });
});
