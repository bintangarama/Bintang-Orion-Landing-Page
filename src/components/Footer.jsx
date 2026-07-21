import React from 'react';
import { MapPin, Eye } from 'lucide-react';

const InstagramIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Will resolve to 2026 based on system time

  return (
    <footer 
      style={{
        backgroundColor: '#091e3a', // dark blue background
        color: 'white',
        padding: '60px 0 30px 0',
        borderTop: '4px solid var(--brand-orange)'
      }}
    >
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        {/* About column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/bintang-orion-icon-crop.png"
              alt="Bintang Orion Logo"
              style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.5px' }}>BINTANG ORION</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6' }}>
            Distributor resmi lensa kacamata terpercaya untuk toko optik di Indonesia. Kami menghadirkan produk lensa original dari Essilor, Gen-Z, dan Domas, serta layanan faset presisi tinggi.
          </p>
        </div>

        {/* Brand partners */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, borderLeft: '3px solid var(--brand-orange)', paddingLeft: '10px' }}>Katalog Lensa Resmi</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#94a3b8' }}>
            <li>Lensa Essilor (Varilux, Crizal, Transitions)</li>
            <li>Lensa Gen-Z (Blue Block & Photochromic)</li>
            <li>Lensa Domas (Single Vision & Progresif)</li>
            <li>Cairan NexQ Cleaner (Antifog & Anti Bakteri)</li>
          </ul>
        </div>

        {/* Quick Location info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, borderLeft: '3px solid var(--brand-orange)', paddingLeft: '10px' }}>Cabang Lab Utama</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem', color: '#94a3b8' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <MapPin size={16} style={{ color: 'var(--brand-orange)', flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Karawang:</strong> Ruko Arcadia Galuh Mas</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <MapPin size={16} style={{ color: 'var(--brand-orange)', flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Bekasi:</strong> Mayor Oking, Bekasi Timur</span>
            </div>
          </div>
        </div>

        {/* Social Media column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, borderLeft: '3px solid var(--brand-orange)', paddingLeft: '10px' }}>Sosial Media Resmi</h4>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Ikuti kami di Instagram untuk update produk dan testimoni terbaru mitra optik:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a 
              href="https://www.instagram.com/bintangorion_karawang/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#38bdf8' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'}
              onMouseLeave={(e) => e.target.style.color = '#38bdf8'}
            >
              <InstagramIcon size={18} /> @bintangorion_karawang
            </a>
            <a 
              href="https://www.instagram.com/bintangorion_bekasi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#38bdf8' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'}
              onMouseLeave={(e) => e.target.style.color = '#38bdf8'}
            >
              <InstagramIcon size={18} /> @bintangorion_bekasi
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div 
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          marginTop: '30px',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#64748b'
        }}
      >
        <p>© {currentYear} Bintang Orion Optical Wholesaler. Semua Hak Cipta Dilindungi Undang-Undang.</p>
        <p style={{ marginTop: '5px', fontSize: '0.75rem' }}>Distributor Resmi Lensa Kacamata Essilor, Gen-Z, & Domas.</p>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.2fr 0.9fr 0.9fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
