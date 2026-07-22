import React, { useEffect, useRef } from 'react';
import { useLang } from '../context/useLang';

const ArticleModal = ({ article, isOpen, onClose }) => {
  const { t } = useLang();
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Lock body scroll while open
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

  // Move focus into the dialog on open, restore it on close
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement;
    // Focus the dialog container so screen readers announce it
    dialogRef.current?.focus();

    return () => {
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [isOpen]);

  // Escape to close + Tab focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Render structured JSX from the lightweight markdown-ish content
  // (**bold**, "- " list items). Content is developer-authored in content.js;
  // do not wire this to dynamic/user input without a sanitizer.
  const renderContent = (content) => {
    if (!content) return null;

    const lines = content.split('\n');
    const blocks = [];
    let listItems = [];

    const flushList = (key) => {
      if (listItems.length > 0) {
        blocks.push(<ul key={`ul-${key}`}>{listItems}</ul>);
        listItems = [];
      }
    };

    const renderInline = (text) => {
      // Split on **bold** segments, keeping the captured groups
      const parts = text.split(/\*\*(.*?)\*\*/g);
      return parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
      );
    };

    lines.forEach((rawLine, index) => {
      const line = rawLine.trim();

      if (line.startsWith('- ')) {
        listItems.push(<li key={index}>{renderInline(line.substring(2))}</li>);
        return;
      }

      flushList(index);

      if (line !== '') {
        blocks.push(<p key={index}>{renderInline(line)}</p>);
      }
    });

    flushList('end');
    return blocks;
  };

  return (
    <div className="article-modal-overlay" onClick={handleOverlayClick}>
      <div
        className="article-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-modal-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button className="article-modal-close" onClick={onClose} aria-label={t.blog.closeModal}>
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="article-modal-image">
          <img src={article.img} alt={article.title} width="800" height="300" />
          <span className="article-modal-category">{article.category}</span>
        </div>

        <div className="article-modal-content">
          <div className="article-modal-meta">
            <span className="article-modal-date">{article.date}</span>
          </div>

          <h2 className="article-modal-title" id="article-modal-title">
            {article.title}
          </h2>

          <div className="article-modal-body">{renderContent(article.content)}</div>

          <button className="article-modal-close-btn" onClick={onClose}>
            {t.blog.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
