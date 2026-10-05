import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="site-container">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.headline}
          description={business.whyChooseUs.description}
          align="center"
        />

        {/* 4-column Trust Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div
          className="why-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-5)',
            marginTop: 'var(--space-6)',
          }}
        >
          {business.whyChooseUs.points.map((point) => (
            <div
              key={point.number}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                boxShadow: 'var(--shadow-resting)',
              }}
            >
              {/* Natural Editorial Numbering */}
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-3)',
                  letterSpacing: '-0.03em',
                }}
              >
                {point.number}
              </span>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                {point.title}
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
