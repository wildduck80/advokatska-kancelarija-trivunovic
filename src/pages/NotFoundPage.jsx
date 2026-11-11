import React from 'react';
import { useLang } from '../context/useLang';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  const { t, homeHref } = useLang();

  return (
    <>
      <SEO title={`${t.notFound.title} | ${t.company.name}`} description={t.notFound.text} />
      <section className="not-found">
        <div className="container">
          <h1>{t.notFound.title}</h1>
          <p>{t.notFound.text}</p>
          <a href={homeHref} className="cta-button primary-btn">
            {t.notFound.backHome}
          </a>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
