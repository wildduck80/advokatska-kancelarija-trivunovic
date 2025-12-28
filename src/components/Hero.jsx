import React from 'react';
import { useLang } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLang(); // Access translations

  return (
    <header className="hero">
      <div className="container hero-content">
        <h1>{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-actions">
          <a href="#contact-form" className="cta-button primary-btn">
            {t.hero.cta}
          </a>
          <a href="#services" className="cta-button outline-btn">
            {t.nav.services}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
