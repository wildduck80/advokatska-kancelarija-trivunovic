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
