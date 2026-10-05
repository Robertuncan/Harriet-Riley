import React, { useState, useEffect } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import Button from './ui/Button.jsx';
import { MessageSquare, Phone, MapPin, Navigation, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Auto-fill service when selected from a service card
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService.title,
      }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError('Please provide a telephone number.');
      return;
    }

    setSubmitting(true);
    // Simulate instantaneous client-side submission feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="site-container">
        <SectionHeading
          eyebrow={business.contactSection.eyebrow}
          title={business.contactSection.headline}
          description={business.contactSection.description}
        />

        <div
          className="contact-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Action & Location Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {/* Primary Action Card: WhatsApp */}
            {business.contact.whatsapp && (
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-5)',
                  boxShadow: 'var(--shadow-resting)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(23, 56, 41, 0.08)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--color-text)' }}>
                      Message on WhatsApp
                    </h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      Quickest response for quotes & photos
                    </span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  href={business.contact.whatsappHref}
                  isExternal={true}
                  icon={MessageSquare}
                >
                  Chat with Harriet Riley
                </Button>
              </div>
            )}

            {/* Telephone Call Card */}
            {business.contact.phone && (
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-5)',
                  boxShadow: 'var(--shadow-resting)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(23, 56, 41, 0.08)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--color-text)' }}>
                      Call Direct
                    </h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      {business.contact.phoneDisplay}
                    </span>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  href={business.contact.phoneHref}
                >
                  Call Now
                </Button>
              </div>
            )}

            {/* Address & Google Maps Directions Card */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-alt)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={22} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1.1rem', margin: '0 0 4px 0', color: 'var(--color-text)' }}>
                    Solihull Location
                  </h3>
                  <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--color-text-muted)' }}>
                    {business.contact.address}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginTop: '6px' }}>
                    {business.contact.consultationNote}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-2)' }}>
                <Button
                  variant="secondary"
                  size="sm"
                  href={business.contact.googleMapsUrl}
                  isExternal={true}
                  icon={Navigation}
                >
                  {business.contact.directionsLabel}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Usable Inquiry Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(24px, 4vw, 36px)',
              boxShadow: 'var(--shadow-resting)',
            }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--color-text)',
                    marginBottom: '4px',
                  }}
                >
                  {business.contactSection.form.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-5)',
                  }}
                >
                  {business.contactSection.form.subtitle}
                </p>

                {validationError && (
                  <div
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#FDF2F2',
                      border: '1px solid #F8B4B4',
                      borderRadius: 'var(--radius-sm)',
                      color: '#9B1C1C',
                      fontSize: '0.875rem',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    {validationError}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="form-name"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      {business.contactSection.form.fields.name.label} *
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={business.contactSection.form.fields.name.placeholder}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                        transition: 'border-color var(--transition-fast)',
                      }}
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label
                      htmlFor="form-phone"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      {business.contactSection.form.fields.phone.label} *
                    </label>
                    <input
                      id="form-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={business.contactSection.form.fields.phone.placeholder}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                        transition: 'border-color var(--transition-fast)',
                      }}
                    />
                  </div>

                  {/* Service selector */}
                  <div>
                    <label
                      htmlFor="form-service"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      {business.contactSection.form.fields.service.label}
                    </label>
                    <select
                      id="form-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '0.98rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                      }}
                    >
                      <option value="">{business.contactSection.form.fields.service.defaultOption}</option>
                      {business.services.items.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="form-message"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      {business.contactSection.form.fields.message.label}
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={business.contactSection.form.fields.message.placeholder}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <div style={{ marginTop: 'var(--space-2)' }}>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={submitting}
                      icon={Send}
                      className="w-full"
                    >
                      {submitting ? 'Submitting...' : business.contactSection.form.submitButton}
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: 'var(--space-6) var(--space-4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                }}
              >
                <CheckCircle2 size={48} color="var(--color-accent)" />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text)' }}>
                  {business.contactSection.form.successTitle}
                </h3>
                <p style={{ maxWidth: '420px', color: 'var(--color-text-muted)', fontSize: '1rem' }}>
                  {business.contactSection.form.successMessage}
                </p>

                <div style={{ marginTop: 'var(--space-4)' }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleReset}
                  >
                    {business.contactSection.form.resetButton}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
