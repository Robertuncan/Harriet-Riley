import React, { useState } from 'react';
import { MessageSquare, ArrowDown, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        backgroundColor: '#0E241A',
        overflow: 'hidden',
        paddingTop: '64px',
        paddingBottom: '80px',
      }}
    >
      {/* Full-bleed background image with high-performance CSS and fallback */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        <img
          src={business.hero.backgroundImage}
          alt={business.hero.backgroundImageAlt}
          onLoad={() => setImgLoaded(true)}
          referrerPolicy="no-referrer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            opacity: imgLoaded ? 1 : 0.6,
            transition: 'opacity 500ms ease',
          }}
        />

        {/* Measured single tonal contrast overlay for WCAG AA readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(11, 28, 19, 0.94) 0%, rgba(14, 36, 26, 0.88) 55%, rgba(11, 28, 19, 0.75) 100%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div
        className="site-container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          {/* Eyebrow: city + business type (Unboxed clean text) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#8BD4AC',
              marginBottom: 'var(--space-3)',
            }}
          >
            <MapPin size={15} aria-hidden="true" />
            <span>{business.hero.eyebrow}</span>
          </div>

          {/* Large confident H1 headline */}
          <h1
            style={{
              color: '#FFFFFF',
              marginBottom: 'var(--space-4)',
              fontWeight: 600,
              textWrap: 'balance',
            }}
          >
            {business.hero.headline}
          </h1>

          {/* One short supporting line */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: '#E0ECE4',
              lineHeight: 1.6,
              marginBottom: 'var(--space-6)',
              maxWidth: '62ch',
            }}
          >
            {business.hero.subheadline}
          </p>

          {/* CTA Row: Primary + Secondary */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              marginBottom: 'var(--space-7)',
            }}
          >
            <Button
              variant="secondary"
              size="lg"
              href={business.actions.primary.href}
              isExternal={business.actions.primary.isExternal}
              icon={MessageSquare}
            >
              {business.actions.primary.label}
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={business.actions.secondary.href}
            >
              {business.actions.secondary.label}
            </Button>
          </div>

          {/* Quiet Trust Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              paddingTop: 'var(--space-4)',
              borderTop: '1px solid rgba(255, 255, 255, 0.16)',
              color: '#B5C8BC',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            <ShieldCheck size={18} color="#8BD4AC" aria-hidden="true" />
            <span>{business.hero.trustMarker}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
