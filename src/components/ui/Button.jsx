import React from 'react';

/**
 * Universal Button component
 * @param {'primary' | 'secondary' | 'outline' | 'dark'} variant
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  isExternal = false,
  className = '',
  type = 'button',
  icon: Icon,
  disabled = false,
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 600,
    fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.05rem' : '0.95rem',
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '14px 28px' : '11px 22px',
    borderRadius: 'var(--radius-sm)',
    transition: 'all var(--transition-fast)',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    whiteSpace: 'nowrap',
    border: '1px solid transparent',
    letterSpacing: '-0.01em',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-secondary)',
      borderColor: 'var(--color-primary)',
      boxShadow: 'var(--shadow-resting)',
    },
    secondary: {
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-border)',
      boxShadow: 'var(--shadow-resting)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-secondary)',
      borderColor: 'rgba(255, 255, 255, 0.4)',
    },
    dark: {
      backgroundColor: '#121C16',
      color: '#FFFFFF',
      borderColor: '#121C16',
    },
  };

  const style = {
    ...baseStyles,
    ...(variantStyles[variant] || variantStyles.primary),
  };

  const hoverClass = `btn-${variant}`;

  if (href) {
    return (
      <a
        href={href}
        style={style}
        className={`custom-btn ${hoverClass} ${className}`}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onClick={onClick}
      >
        {children}
        {Icon && <Icon size={18} aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={style}
      className={`custom-btn ${hoverClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {Icon && <Icon size={18} aria-hidden="true" />}
    </button>
  );
}
