import React from 'react';

/**
 * Disciplined Section Heading component
 * Follows zero-pill discipline (unboxed uppercase eyebrow text)
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`section-header-block ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        marginBottom: 'var(--space-6)',
        maxWidth: isCenter ? '780px' : '680px',
        marginLeft: isCenter ? 'auto' : 0,
        marginRight: isCenter ? 'auto' : 0,
      }}
    >
      {eyebrow && (
        <span
          className="section-eyebrow"
          style={{
            color: isDark ? '#A3D9BE' : 'var(--color-accent)',
          }}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          style={{
            color: isDark ? 'var(--color-secondary)' : 'var(--color-text)',
            marginBottom: description ? 'var(--space-3)' : 0,
          }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          style={{
            color: isDark ? '#D1DDD6' : 'var(--color-text-muted)',
            fontSize: '1.05rem',
            marginLeft: isCenter ? 'auto' : 0,
            marginRight: isCenter ? 'auto' : 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
