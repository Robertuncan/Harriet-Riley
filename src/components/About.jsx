import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import { Check, ShieldCheck, MapPin } from 'lucide-react';
import Button from './ui/Button.jsx';

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="site-container">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-7)',
            alignItems: 'center',
          }}
        >
          {/* Column 1: Editorial Craft Image */}
          <div
            className="about-image-wrapper"
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-hover)',
              border: '1px solid var(--color-border)',
              aspectRatio: '4 / 3',
              backgroundColor: '#1E3326',
            }}
          >
            {!imgError ? (
              <img
                src={business.about.image}
                alt={business.about.imageAlt}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#183B2B',
                  color: '#FFFFFF',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <ShieldCheck size={48} strokeWidth={1.5} color="#8BD4AC" />
              </div>
            )}

            {/* Subtle Location Trust Badge anchored to the photo corner */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                backgroundColor: 'rgba(14, 36, 26, 0.92)',
                color: '#FFFFFF',
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <MapPin size={14} color="#8BD4AC" />
              <span>Homer Road, Solihull</span>
            </div>
          </div>

          {/* Column 2: Specific Owner Copy */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SectionHeading
              eyebrow={business.about.eyebrow}
              title={business.about.headline}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              {business.about.paragraphs.map((p, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text)',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Unboxed Highlights (Zero-Pill discipline) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: 'var(--space-6)',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              {business.about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(23, 56, 41, 0.1)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '3px',
                    }}
                  >
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-text)' }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <Button
                variant="primary"
                href="#contact"
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
