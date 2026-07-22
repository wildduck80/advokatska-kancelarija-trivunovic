import React, { useState } from 'react';
import { useLang } from '../context/useLang';

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
              <h3 className="faq-question-heading">
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
              >
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
