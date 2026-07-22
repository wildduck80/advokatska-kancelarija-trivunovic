import React from 'react';
import { useLang } from '../context/useLang';

const Footer = () => {
  const { t } = useLang();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-column">
            <h3 className="footer-logo">
              Trivunovic <span>Advokatska Kancelarija</span>
            </h3>
            <p className="footer-about">{t.footer.about.text}</p>
            <div className="footer-social">
              {/* Placeholder for social media links */}
              {/* <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a> */}
              {/* <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a> */}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-heading">{t.footer.quickLinks.title}</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('team');
                  }}
                >
                  {t.nav.team}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('faq');
                  }}
                >
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Areas Column */}
          <div className="footer-column">
            <h4 className="footer-heading">{t.footer.practiceAreas.title}</h4>
            <ul className="footer-links">
              {t.footer.practiceAreas.areas.map((area, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-heading">{t.footer.contact.title}</h4>
            <ul className="footer-contact">
              <li>
                <span className="footer-icon">📍</span>
                <div>
                  <strong>{t.contact.info.addressLabel}</strong>
                  <p>{t.company.address}</p>
                </div>
              </li>
              <li>
                <span className="footer-icon">📞</span>
                <div>
                  <strong>{t.contact.info.phoneLabel}</strong>
                  <p>
                    <a href={`tel:${t.company.phone.replace(/\s/g, '')}`}>{t.company.phone}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="footer-icon">✉️</span>
                <div>
                  <strong>{t.contact.info.emailLabel}</strong>
                  <p>
                    <a href={`mailto:${t.company.email}`}>{t.company.email}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="footer-icon">🕐</span>
                <div>
                  <strong>{t.contact.info.hoursLabel}</strong>
                  <p>{t.company.workingHours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">{t.footer.bottom.copyright}</p>
          <div className="footer-bottom-links">
            <a href="#">{t.footer.bottom.privacy}</a>
            <span className="separator">|</span>
            <a href="#">{t.footer.bottom.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
