import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';

const FAQ = () => {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.faqs.heading}</h2>
          <p className="section-subtitle">{t.faqs.subheading}</p>
        </div>

        <div className="faq-list">
          {t.faqs.list.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleFAQ(index)}
              >
                <h3>{item.q}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
