import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  if (!business.faq || !business.faq.items || business.faq.items.length === 0) {
    return null;
  }

  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="site-container">
        <SectionHeading
          eyebrow={business.faq.eyebrow}
          title={business.faq.headline}
          description={business.faq.description}
          align="center"
        />

        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {business.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'box-shadow var(--transition-fast)',
                  boxShadow: isOpen ? 'var(--shadow-resting)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: isOpen ? 'var(--color-primary)' : 'var(--color-text)',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ lineHeight: 1.4 }}>{item.question}</span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'rgba(23, 56, 41, 0.08)' : 'var(--color-bg-alt)',
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--color-border-subtle)',
                      paddingTop: '16px',
                    }}
                  >
                    <p style={{ margin: 0 }}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
