import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Rate limiting: Track last submission time
const RATE_LIMIT_MS = 60000; // 1 minute between submissions
let lastSubmissionTime = 0;

const ContactForm = () => {
  const { t } = useLang();
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Honeypot field
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  // Get environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      console.warn('Bot detected via honeypot');
      setStatus('success'); // Fake success to fool bots
      e.target.reset();
      setTimeout(() => setStatus(''), 5000);
      return;
    }

    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmissionTime < RATE_LIMIT_MS) {
      setStatus('rateLimit');
      setTimeout(() => setStatus(''), 5000);
      return;
    }

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey ||
        serviceId === 'your_service_id_here' ||
        templateId === 'your_template_id_here' ||
        publicKey === 'your_public_key_here') {
      console.error('EmailJS not configured. Please set environment variables.');
      setStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
      .then(() => {
        setStatus('success');
        setIsSubmitting(false);
        lastSubmissionTime = Date.now(); // Update rate limit timestamp
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        setStatus('error');
        setIsSubmitting(false);
        console.error('EmailJS Error:', error);
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header animate-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2>{t.contact.form.heading}</h2>
          <p className="section-subtitle">{t.contact.form.subheading}</p>
        </div>

        <div
          ref={formRef}
          className={`form-wrapper animate-scale ${formVisible ? 'visible' : ''}`}
        >
          <form ref={form} onSubmit={sendEmail} className="legal-form">
            {/* Honeypot field - hidden from users, visible to bots */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from_name">{t.contact.form.fields.name}</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder={t.contact.form.placeholders.name}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reply_to">{t.contact.form.fields.email}</label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  placeholder={t.contact.form.placeholders.email}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">{t.contact.form.fields.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={t.contact.form.placeholders.phone}
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="legal_area">{t.contact.form.fields.legalArea}</label>
                <select
                  id="legal_area"
                  name="legal_area"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">{t.contact.form.placeholders.selectArea}</option>
                  {t.services.list.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.form.fields.message}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t.contact.form.placeholders.message}
                rows="6"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* Privacy Notice */}
            <div className="privacy-notice">
              <p>{t.contact.form.privacyNotice}</p>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
              </button>
            </div>
          </form>

          {status && (
            <div className={`status-message ${
              status === 'success' ? 'success' :
              status === 'rateLimit' ? 'warning' :
              'error'
            }`}>
              <span className="status-icon">
                {status === 'success' ? '✓' : status === 'rateLimit' ? '⚠' : '✕'}
              </span>
              <p>
                {status === 'success' ? t.contact.form.successMessage :
                 status === 'rateLimit' ? t.contact.form.rateLimitError :
                 t.contact.form.errorMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
