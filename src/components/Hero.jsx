import React from 'react';
import { ShieldCheck, Truck, Zap, Percent } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #f0f6fc 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Light Circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240, 90, 36, 0.05) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-5%',
        left: '-5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(15, 76, 129, 0.05) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }}>
        {/* Left Content */}
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="badge">
            Partner Terpercaya Optik Indonesia
          </div>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            color: 'var(--primary-blue)', 
            lineHeight: 1.15,
            letterSpacing: '-0.5px'
          }} className="hero-title">
            Distributor Grosir Lensa Resmi & <span style={{ color: 'var(--brand-orange)' }}>Jasa Faset Presisi</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '540px' }}>
            Bintang Orion adalah mitra terpercaya untuk toko optik Anda. Kami menyuplai lensa resmi berkualitas tinggi dari <strong>Essilor, Gen-Z, & Domas</strong> dengan layanan faset cepat menggunakan mesin otomatis berteknologi tinggi.
          </p>

          {/* Core Trust Indicators Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '16px', 
            marginTop: '10px', 
            marginBottom: '15px' 
          }} className="trust-grid">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: 'var(--brand-orange)' }}><ShieldCheck size={20} /></div>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>100% Lensa Original</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: 'var(--brand-orange)' }}><Zap size={20} /></div>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Terima Jasa Faset Cepat</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: 'var(--brand-orange)' }}><Truck size={20} /></div>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Gratis Ongkir Area Tertentu</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: 'var(--brand-orange)' }}><Percent size={20} /></div>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Harga Grosir Terbaik</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#estimator" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Kalkulator Order Cepat
            </a>
            <a href="#cabang" className="btn btn-secondary" style={{ padding: '14px 32px' }}>
              Hubungi Cabang Kami
            </a>
          </div>
        </div>

        {/* Right Graphic/Mockup */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }} className="hero-graphic">
          <div style={{
            background: 'white',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            padding: '30px',
            border: '1px solid var(--border-color)',
            width: '100%',
            maxWidth: '460px',
            position: 'relative',
            zIndex: 2,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#fbbf24' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-light)', letterSpacing: '0.5px' }}>BINTANG ORION OPTICAL LAB</span>
            </div>

            {/* Simulated Live Order Dashboard */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ padding: '12px 16px', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--border-radius-sm)', borderLeft: '4px solid var(--brand-orange)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  <span>STATUS: PROSES FASET</span>
                  <span style={{ color: 'var(--brand-orange)' }}>SELESAI HARI INI</span>
                </div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '4px 0', color: 'var(--primary-blue)' }}>Lensa Essilor Crizal Sapphire + Faset</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Order dari: Mitra Optik Cikarang</p>
              </div>

              <div style={{ padding: '12px 16px', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--border-radius-sm)', borderLeft: '4px solid var(--primary-blue)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  <span>STATUS: PENGIRIMAN</span>
                  <span style={{ color: 'var(--success)' }}>GRATIS ONGKIR</span>
                </div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '4px 0', color: 'var(--primary-blue)' }}>Lensa Gen-Z Blue-Cut 1.56 (5 Pasang)</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Tujuan: Ruko Arcadia Galuh Mas, Karawang</p>
              </div>

              {/* Machine Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                border: '1px dashed var(--border-color)',
                borderRadius: 'var(--border-radius-sm)',
                marginTop: '5px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--primary-blue-light)',
                  color: 'var(--primary-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.75rem'
                }}>EDG</div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>Essilor Delta 2 Edger</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pemotongan lensa presisi & rapi otomatis</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back shadow element */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '100%',
            maxWidth: '460px',
            height: '100%',
            backgroundColor: 'var(--primary-blue-light)',
            borderRadius: 'var(--border-radius-lg)',
            zIndex: 1,
            pointerEvents: 'none',
            border: '1px solid rgba(15, 76, 129, 0.05)'
          }} />
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 60px;
          }
          .hero-title {
            font-size: 3.5rem !important;
          }
        }
        @media (max-width: 480px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-title {
            font-size: 2.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
