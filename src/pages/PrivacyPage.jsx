import React from 'react';
import { useLang } from '../context/useLang';
import SEO from '../components/SEO';
import ArticleBody from '../components/ArticleBody';

/**
 * @param {{ path: string, alternates: Record<string, string> }} props
 */
const PrivacyPage = ({ path, alternates }) => {
  const { t, homeHref } = useLang();
  const { privacy } = t;

  return (
    <>
      <SEO
        title={`${privacy.title} | ${t.company.name}`}
        description={privacy.description}
        path={path}
        alternates={alternates}
      />
      <article className="article-page privacy-page">
        <div className="container article-container">
          <a href={homeHref} className="article-back">
            <span aria-hidden="true">←</span> {t.notFound.backHome}
          </a>

          <header className="article-header">
            <h1 className="article-title">{privacy.title}</h1>
            <p className="article-date">
              {privacy.lastUpdatedLabel}{' '}
              <time dateTime={privacy.isoDate}>{privacy.lastUpdated}</time>
            </p>
          </header>

          <div className="article-body">
            <p>{privacy.intro}</p>
          </div>

          {privacy.sections.map((section) => (
            <section key={section.heading} className="privacy-section">
              <h2>{section.heading}</h2>
              <ArticleBody content={section.content} />
            </section>
          ))}
        </div>
      </article>
    </>
  );
};

export default PrivacyPage;
