import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import { business } from './config/business.js';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleSelectService = (service: any) => {
    setSelectedService(service);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      {/* Sticky, contrast-protective Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero with full-height atmospheric focal point */}
        <Hero />

        {/* Elevated Services Showcase */}
        <Services onSelectService={handleSelectService} />

        {/* Refined Two-Column About Section */}
        <About />

        {/* Why Choose Us Trust Standards */}
        <WhyChooseUs />

        {/* Testimonials (rendered only if real reviews exist) */}
        <Testimonials />

        {/* Clear, helpful FAQ accordion */}
        <Faq />

        {/* Conversion-Focused Contact Section */}
        <Contact selectedService={selectedService} />
      </main>

      {/* Calm & Minimal Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick-Connect (Subtle, non-intrusive) */}
      {business.contact.whatsapp && (
        <a
          href={business.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp message"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 40,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#1E4833',
            color: '#FFFFFF',
            padding: '12px 18px',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-elevated)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontSize: '0.875rem',
            fontWeight: 600,
            transition: 'transform var(--transition-fast), background-color var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#163828';
            e.currentTarget.style.transform = 'scale(1.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1E4833';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <MessageSquare size={18} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      )}
    </div>
  );
}
