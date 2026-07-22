import React from 'react';
import { useLang } from '../context/useLang';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { t } = useLang();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header animate-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2>{t.about.heading}</h2>
          <p className="section-subtitle">{t.about.subheading}</p>
        </div>

        <div className="about-content">
          {/* Company Story */}
          <div
            ref={storyRef}
            className={`about-story animate-slide-left ${storyVisible ? 'visible' : ''}`}
          >
            <div className="about-founded">
              <span className="founded-year">{t.company.foundedYear}</span>
              <span className="founded-label">{t.about.foundedText}</span>
            </div>

            <div className="about-text">
              {t.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="about-values">
            <div
              ref={valuesRef}
              className={`values-grid stagger-animation ${valuesVisible ? 'visible' : ''}`}
            >
              {t.about.values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className={`about-stats stagger-animation ${statsVisible ? 'visible' : ''}`}
        >
          {t.stats.items.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
