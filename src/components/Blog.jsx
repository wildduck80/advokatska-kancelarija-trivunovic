import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ArticleModal from './ArticleModal';

const Blog = () => {
  const { t } = useLang();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (e, article) => {
    e.preventDefault();
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

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
          {t.blog.articles.map((article, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <img
                  src={article.img}
                  alt={`Legal article about ${article.category}`}
                  loading="lazy"
                />
                <span className="blog-category">{article.category}</span>
              </div>

              <div className="blog-content">
                <span className="blog-date">{article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <button
                  className="read-more"
                  onClick={(e) => handleReadMore(e, article)}
                >
                  {t.blog.readMore} <span className="arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ArticleModal
        article={selectedArticle}
        isOpen={selectedArticle !== null}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Blog;
