import React, { useEffect } from 'react';
import { useLang } from '../context/LanguageContext';

const ArticleModal = ({ article, isOpen, onClose }) => {
  const { t } = useLang();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatContent = (content) => {
    if (!content) return '';

    return content
      .split('\n')
      .map((line, index) => {
        // Bold text: **text**
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // List items
        if (line.startsWith('- ')) {
          return `<li key="${index}">${line.substring(2)}</li>`;
        }

        // Empty lines become paragraph breaks
        if (line.trim() === '') {
          return '<br />';
        }

        return `<p>${line}</p>`;
      })
      .join('');
  };

  return (
    <div className="article-modal-overlay" onClick={handleOverlayClick}>
      <div className="article-modal">
        <button
          className="article-modal-close"
          onClick={onClose}
          aria-label={t.blog.closeModal}
        >
          &times;
        </button>

        <div className="article-modal-image">
          <img src={article.img} alt={article.title} />
          <span className="article-modal-category">{article.category}</span>
        </div>

        <div className="article-modal-content">
          <div className="article-modal-meta">
            <span className="article-modal-date">{article.date}</span>
          </div>

          <h2 className="article-modal-title">{article.title}</h2>

          <div
            className="article-modal-body"
            dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
          />

          <button className="article-modal-close-btn" onClick={onClose}>
            {t.blog.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
