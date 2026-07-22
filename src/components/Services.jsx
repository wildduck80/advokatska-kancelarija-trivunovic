import React from 'react';
import { useLang } from '../context/useLang';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { t } = useLang();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header animate-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2>{t.services.heading}</h2>
          <p className="section-subtitle">{t.services.subheading}</p>
        </div>

        <div
          ref={gridRef}
          className={`services-grid stagger-animation ${gridVisible ? 'visible' : ''}`}
        >
          {t.services.list.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
