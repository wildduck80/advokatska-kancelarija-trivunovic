import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';

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
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
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
              onClick={toggleLanguage}
              className="lang-btn"
              title={lang === 'sr' ? 'Switch to English' : 'Prebaci na srpski'}
            >
              {lang === 'sr' ? '🇬🇧' : '🇷🇸'}
            </button>
          </li>
        </ul>

        <div className="nav-controls">
          {/* Hamburger Icon */}
          <button className="mobile-menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
