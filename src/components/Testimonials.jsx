import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * Testimonials Component
 * Rendered ONLY if real testimonials exist in business.js.
 * Returns null cleanly if empty or missing, preventing filler or artificial reviews.
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What homeowners say"
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-5)',
          }}
        >
          {business.testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-5)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-resting)',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                "{item.quote}"
              </p>
              <div>
                <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>
                  {item.author}
                </span>
                {item.location && (
                  <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    {item.location}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
