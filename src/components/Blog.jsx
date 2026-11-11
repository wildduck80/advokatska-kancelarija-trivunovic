import React from 'react';
import { useLang } from '../context/useLang';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { articlePath } from '../routing/routes';

const Blog = () => {
  const { lang, t } = useLang();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header animate-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2>{t.blog.heading}</h2>
          <p className="section-subtitle">{t.blog.subheading}</p>
        </div>

        <div
          ref={gridRef}
          className={`blog-grid stagger-animation ${gridVisible ? 'visible' : ''}`}
        >
          {t.blog.articles.map((article) => (
            <article key={article.slug} className="blog-card">
              <div className="blog-image">
                <img
                  src={article.img}
                  alt={`${t.blog.imageAlt} ${article.category}`}
                  width="400"
                  height="240"
                  loading="lazy"
                />
                <span className="blog-category">{article.category}</span>
              </div>

              <div className="blog-content">
                <span className="blog-date">{article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a
                  href={articlePath(lang, article.slug)}
                  className="read-more"
                  aria-label={`${t.blog.readMore}: ${article.title}`}
                >
                  {t.blog.readMore} <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
