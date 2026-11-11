import React from 'react';
import { useLang } from '../context/useLang';
import SEO from '../components/SEO';
import ArticleBody from '../components/ArticleBody';
import { absoluteUrl, articlePath } from '../routing/routes';
import { buildArticleSchema } from '../seo/schemas';

const ArticlePage = ({ articleIndex, path, alternates }) => {
  const { lang, t, homeHref } = useLang();
  const article = t.blog.articles[articleIndex];
  const otherArticles = t.blog.articles.filter((_, index) => index !== articleIndex);
  const schema = buildArticleSchema({ article, t, lang, url: absoluteUrl(path) });

  return (
    <>
      <SEO
        title={`${article.title} | ${t.company.name}`}
        description={article.excerpt}
        path={path}
        alternates={alternates}
        ogType="article"
        image={article.img}
        schemas={[schema]}
      />
      <article className="article-page">
        <div className="container article-container">
          <a href={`${homeHref}#blog`} className="article-back">
            <span aria-hidden="true">←</span> {t.blog.backToBlog}
          </a>

          <header className="article-header">
            <span className="article-category">{article.category}</span>
            <h1 className="article-title">{article.title}</h1>
            <time className="article-date" dateTime={article.isoDate}>
              {article.date}
            </time>
          </header>

          <img
            className="article-image"
            src={article.img}
            alt={`${t.blog.imageAlt} ${article.category}`}
            width="800"
            height="400"
            fetchPriority="high"
          />

          <ArticleBody content={article.content} />

          <aside className="article-cta">
            <h2>{t.blog.ctaHeading}</h2>
            <p>{t.blog.ctaText}</p>
            <a href={`${homeHref}#contact-form`} className="cta-button primary-btn">
              {t.hero.cta}
            </a>
          </aside>

          {otherArticles.length > 0 && (
            <nav className="article-more" aria-labelledby="article-more-heading">
              <h2 id="article-more-heading">{t.blog.moreArticles}</h2>
              <ul>
                {otherArticles.map((other) => (
                  <li key={other.slug}>
                    <a href={articlePath(lang, other.slug)}>{other.title}</a>
                    <time dateTime={other.isoDate}>{other.date}</time>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </article>
    </>
  );
};

export default ArticlePage;
