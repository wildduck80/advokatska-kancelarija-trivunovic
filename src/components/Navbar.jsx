import React, { useState } from 'react';
import { useLang } from '../context/useLang';
import { otherLanguage } from '../context/language';

const SECTION_LINKS = [
  { id: 'about', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'team', key: 'team' },
  { id: 'contact-form', key: 'contact' },
  { id: 'blog', key: 'blog' },
];

const Navbar = () => {
  const { lang, t, homeHref, switchLanguageHref } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const switchTo = otherLanguage(lang);
  const switchLabel = lang === 'sr' ? 'Switch to English' : 'Prebaci na srpski';

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-flex">
        <a href={homeHref} className="logo">
          Trivunović <span>Advokatska Kancelarija</span>
        </a>

        {/* Section links are prefixed with the home path so they also work from article pages. */}
        <ul id="primary-nav" className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href={homeHref} onClick={closeMenu}>
              {t.nav.home}
            </a>
          </li>
          {SECTION_LINKS.map(({ id, key }) => (
            <li key={id}>
              <a href={`${homeHref}#${id}`} onClick={closeMenu}>
                {t.nav[key]}
              </a>
            </li>
          ))}

          <li>
            <a
              href={switchLanguageHref}
              hrefLang={switchTo}
              className="lang-btn"
              aria-label={switchLabel}
              title={switchLabel}
            >
              <span aria-hidden="true">{lang === 'sr' ? '🇬🇧' : '🇷🇸'}</span>
            </a>
          </li>
        </ul>

        <div className="nav-controls">
          <button
            type="button"
            className="mobile-menu-icon"
            onClick={toggleMenu}
            aria-label={t.nav.menu}
            aria-expanded={isMenuOpen}
            aria-controls="primary-nav"
          >
            <span aria-hidden="true">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
