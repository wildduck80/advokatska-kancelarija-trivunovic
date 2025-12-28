import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team = () => {
  const { t } = useLang();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header animate-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2>{t.team.heading}</h2>
          <p className="section-subtitle">{t.team.subheading}</p>
        </div>

        <div
          ref={gridRef}
          className={`team-grid stagger-animation ${gridVisible ? 'visible' : ''}`}
        >
          {t.team.members.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                {/* Placeholder: Replace with actual professional portrait photos */}
                {/* Recommended: High-quality headshots, 400x500px, professional attire */}
                <img
                  src={member.img}
                  alt={`Professional portrait of ${member.name}, ${member.role}`}
                  loading="lazy"
                />
                <div className="team-overlay">
                  <a href={`mailto:${member.email}`} className="team-email-btn">
                    📧 Contact
                  </a>
                </div>
              </div>

              <div className="team-content">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
