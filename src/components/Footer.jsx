import React from 'react';
import { business } from '../config/business.js';
import { MapPin, Phone, MessageSquare, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0E241A',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        paddingTop: 'var(--space-7)',
        paddingBottom: 'var(--space-6)',
      }}
    >
      <div className="site-container">
        {/* Main Footer Row */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-7)',
          }}
        >
          {/* Brand Column */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              {business.name}
            </span>
            <p style={{ color: '#BACBC1', fontSize: '0.95rem', marginBottom: '16px' }}>
              {business.tagline}
            </p>
            <p style={{ color: '#8EA295', fontSize: '0.875rem', lineHeight: 1.6 }}>
              {business.footer.metaLine}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4
              style={{
                color: '#8BD4AC',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: 'var(--space-3)',
              }}
            >
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {business.navigation.map((nav) => (
                <a
                  key={nav.label}
                  href={nav.href}
                  style={{
                    color: '#D1DDD6',
                    fontSize: '0.95rem',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#D1DDD6')}
                >
                  {nav.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact Information */}
          <div>
            <h4
              style={{
                color: '#8BD4AC',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: 'var(--space-3)',
              }}
            >
              Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={business.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#D1DDD6',
                  fontSize: '0.95rem',
                }}
              >
                <MessageSquare size={16} color="#8BD4AC" />
                <span>WhatsApp: {business.contact.whatsappDisplay}</span>
              </a>

              <a
                href={business.contact.phoneHref}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#D1DDD6',
                  fontSize: '0.95rem',
                }}
              >
                <Phone size={16} color="#8BD4AC" />
                <span>Phone: {business.contact.phoneDisplay}</span>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  color: '#AABEB2',
                  fontSize: '0.875rem',
                  marginTop: '4px',
                }}
              >
                <MapPin size={16} color="#8BD4AC" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{business.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer / Copyright */}
        <div
          style={{
            paddingTop: 'var(--space-5)',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.875rem',
            color: '#8EA295',
          }}
        >
          <span>{business.footer.copyright}</span>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#D1DDD6',
              fontSize: '0.85rem',
              fontWeight: 500,
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
            }}
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
