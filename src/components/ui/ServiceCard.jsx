import React, { useState } from 'react';
import { ArrowUpRight, Wrench } from 'lucide-react';
import { business } from '../../config/business.js';

export default function ServiceCard({
  service,
  onSelect,
}) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappInquiryUrl = `https://wa.me/${business.contact.whatsapp}?text=${encodeURIComponent(
    `Hello Harriet, I am interested in inquiring about ${service.title} in Solihull.`
  )}`;

  return (
    <div
      className="service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
        boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-resting)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image container with fixed 16:10 aspect ratio and tonal hover zoom */}
      <div
        className="image-cover-frame"
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          position: 'relative',
          backgroundColor: '#1E3326',
        }}
      >
        {!imgError ? (
          <img
            src={service.image}
            alt={service.imageAlt || service.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#193425',
              color: '#A8D2BC',
              padding: '24px',
              textAlign: 'center',
            }}
          >
            <Wrench size={32} strokeWidth={1.5} style={{ marginBottom: '8px' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.02em' }}>
              {business.tradeType}
            </span>
          </div>
        )}

        {/* Tonal protective overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(14, 36, 26, 0.05) 0%, rgba(14, 36, 26, 0.35) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: 'var(--space-4)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            style={{
              color: 'var(--color-text)',
              fontSize: '1.25rem',
              marginBottom: 'var(--space-2)',
              fontWeight: 600,
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              marginBottom: 'var(--space-4)',
            }}
          >
            {service.description}
          </p>
        </div>

        {/* Action Link */}
        <div
          style={{
            paddingTop: 'var(--space-3)',
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-accent)',
              transition: 'color var(--transition-fast)',
            }}
          >
            Inquire via WhatsApp
            <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => onSelect && onSelect(service)}
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-text-light)',
              fontWeight: 500,
              padding: '4px 8px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-bg)',
            }}
          >
            Fill Form
          </button>
        </div>
      </div>
    </div>
  );
}
