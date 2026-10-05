import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';
import { MessageSquare, ArrowRight } from 'lucide-react';
import Button from './ui/Button.jsx';

export default function Services({ onSelectService }) {
  const [filterCategory, setFilterCategory] = useState('all');

  // Groupings for intuitive inspection without pill clutter
  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'doors', label: 'Door Types' },
    { id: 'automation', label: 'Automation & Openers' },
    { id: 'repairs', label: 'Repairs & Care' },
  ];

  const getCategoryForService = (id) => {
    if (id.includes('sectional') || id.includes('roller') || id.includes('supply') || id.includes('custom') || id.includes('commercial')) {
      return 'doors';
    }
    if (id.includes('automatic') || id.includes('opener')) {
      return 'automation';
    }
    return 'repairs';
  };

  const filteredServices = filterCategory === 'all'
    ? business.services.items
    : business.services.items.filter((item) => getCategoryForService(item.id) === filterCategory);

  return (
    <section
      id="services"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="site-container">
        {/* Header Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '24px',
            marginBottom: 'var(--space-6)',
          }}
        >
          <SectionHeading
            eyebrow={business.services.eyebrow}
            title={business.services.headline}
            description={business.services.description}
          />

          {/* Interactive Category Segmented Control (Allowed per constitution) */}
          <div
            className="filter-bar"
            style={{
              display: 'inline-flex',
              padding: '4px',
              backgroundColor: 'var(--color-bg-alt)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)',
              gap: '4px',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => {
              const isActive = filterCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilterCategory(cat.id)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: '6px',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    backgroundColor: isActive ? 'var(--color-surface)' : 'transparent',
                    boxShadow: isActive ? 'var(--shadow-resting)' : 'none',
                    transition: 'all var(--transition-fast)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Elevated 3-column Service Grid (1 on mobile, 2 on tablet, 3 on desktop) */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-5)',
            marginBottom: 'var(--space-7)',
          }}
        >
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
            />
          ))}
        </div>

        {/* Quiet consultative prompt */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-alt)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-5) var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'var(--color-primary)' }}>
              {business.services.ctaPrompt}
            </h3>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              Send photos or measurements directly to Harriet on WhatsApp for friendly, pressure-free advice.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            href={business.actions.primary.href}
            isExternal={business.actions.primary.isExternal}
            icon={MessageSquare}
          >
            {business.services.ctaButton}
          </Button>
        </div>
      </div>
    </section>
  );
}
