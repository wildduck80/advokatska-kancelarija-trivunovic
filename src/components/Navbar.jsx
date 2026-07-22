import React, { useState } from 'react';
import { useLang } from '../context/useLang';

const Navbar = () => {
  const { lang, t, toggleLanguage } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-flex">
        {/* Fixed Logo Logic */}
        <div className="logo">
          Trivunovic <span>Advokatska Kancelarija</span>
        </div>

        {/* Links now have 'active' class and 'closeMenu' handler */}
        <ul id="primary-nav" className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#" onClick={closeMenu}>
              {t.nav.home}
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              {t.nav.services}
            </a>
          </li>
          <li>
            <a href="#team" onClick={closeMenu}>
              {t.nav.team}
            </a>
          </li>
          <li>
            <a href="#contact-form" onClick={closeMenu}>
              {t.nav.contact}
            </a>
          </li>
          <li>
            <a href="#blog" onClick={closeMenu}>
              {t.nav.blog}
            </a>
          </li>

          {/* Language Toggle - visible in both desktop and mobile menu */}
          <li>
            <button
              type="button"
              onClick={toggleLanguage}
              className="lang-btn"
              aria-label={lang === 'sr' ? 'Switch to English' : 'Prebaci na srpski'}
              title={lang === 'sr' ? 'Switch to English' : 'Prebaci na srpski'}
            >
              <span aria-hidden="true">{lang === 'sr' ? '🇬🇧' : '🇷🇸'}</span>
            </button>
          </li>
        </ul>

        <div className="nav-controls">
          {/* Hamburger Icon */}
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
