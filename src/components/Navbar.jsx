import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'var(--transition-smooth)',
        padding: isScrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/bintang-orion-icon-crop.png"
            alt="Bintang Orion Logo"
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 10px rgba(240, 90, 36, 0.25)' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              color: 'var(--primary-blue)', 
              lineHeight: 1, 
              letterSpacing: '0.5px' 
            }}>
              BINTANG ORION
            </span>
            <span style={{ 
              fontSize: '0.7rem', 
              color: 'var(--brand-orange)', 
              fontWeight: 700, 
              letterSpacing: '1px',
              marginTop: '2px'
            }}>
              DISTRIBUTOR RESMI LENSA
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'none', gap: '28px', alignItems: 'center' }} className="desktop-menu">
          {[
            { name: 'Katalog Lensa', href: '#produk' },
            { name: 'Jasa Faset', href: '#faset' },
            { name: 'Estimator Order', href: '#estimator' },
            { name: 'Lokasi Cabang', href: '#cabang' },
            { name: 'FAQ', href: '#faq' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-dark)',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
            >
              {item.name}
            </a>
          ))}
          <a href="#estimator" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
            <Phone size={16} /> Order Cepat
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'block', color: 'var(--primary-blue)' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderBottom: '1px solid var(--border-color)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {[
            { name: 'Katalog Lensa', href: '#produk' },
            { name: 'Jasa Faset', href: '#faset' },
            { name: 'Estimator Order', href: '#estimator' },
            { name: 'Lokasi Cabang', href: '#cabang' },
            { name: 'FAQ', href: '#faq' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--text-dark)',
                padding: '8px 0',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#estimator" 
            onClick={() => setIsOpen(false)}
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '10px' }}
          >
            <Phone size={16} /> Order Cepat (WhatsApp)
          </a>
        </div>
      )}

      {/* Embedded style tag for handling responsive media queries for desktop-menu vs mobile-menu-btn */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
