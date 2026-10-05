import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className="site-navbar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(14, 34, 24, 0.96)' : 'rgba(14, 34, 24, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        transition: 'background-color var(--transition-normal), border-color var(--transition-normal)',
      }}
    >
      <div
        className="site-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px',
        }}
      >
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-secondary)',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {business.name}
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {business.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.85)',
                transition: 'color var(--transition-fast)',
                position: 'relative',
                padding: '6px 0',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div className="hidden-mobile">
            <Button
              variant="secondary"
              size="sm"
              href={business.actions.primary.href}
              isExternal={business.actions.primary.isExternal}
              icon={MessageSquare}
            >
              {business.actions.primary.label}
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-secondary)',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-drawer"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            backgroundColor: '#0F241A',
            padding: '24px 20px 32px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {business.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <Button
              variant="secondary"
              href={business.actions.primary.href}
              isExternal={business.actions.primary.isExternal}
              onClick={closeMenu}
              icon={MessageSquare}
            >
              {business.actions.primary.label}
            </Button>
            <Button
              variant="outline"
              href={business.contact.phoneHref}
              onClick={closeMenu}
              icon={Phone}
            >
              {business.actions.callDirect.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
