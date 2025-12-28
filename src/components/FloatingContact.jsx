import React from 'react';

const FloatingContact = () => {
  return (
    <div className="floating-actions">
      {/* WhatsApp Link - Replace with your actual number */}
      <a
        href="https://wa.me/381600000000"
        className="whatsapp-fab"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FloatingContact;
