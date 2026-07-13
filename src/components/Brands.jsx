import React from 'react';
import { Eye, Shield, Award, Sparkles, Box, Hammer } from 'lucide-react';

export default function Brands() {
  const brands = [
    {
      name: 'ESSILOR',
      tagline: 'Pemimpin Global Lensa Kacamata',
      icon: <Award size={28} style={{ color: 'var(--brand-orange)' }} />,
      desc: 'Merek lensa kelas dunia asal Prancis yang terkenal dengan presisi optik tinggi. Menyediakan varian populer seperti Crizal, Varilux (progresif), Transitions, dan Eyezen.',
      points: ['Presisi visual maksimal', 'Lapisan anti-pantul terbaik (Crizal)', 'Teknologi transisi warna otomatis']
    },
    {
      name: 'GEN-Z (Madao Tec)',
      tagline: 'Lensa Kekinian Berkualitas & Ekonomis',
      icon: <Sparkles size={28} style={{ color: 'var(--brand-orange)' }} />,
      desc: 'Pilihan terpopuler bagi anak muda dan optik retail. Menawarkan proteksi Blue-Ray (cahaya biru) optimal serta lensa photochromic yang cepat beradaptasi dengan harga grosir kompetitif.',
      points: ['Proteksi radiasi layar biru tinggi', 'Transisi gelap-terang ekstra cepat', 'Harga grosir ramah optik baru']
    },
    {
      name: 'DOMAS',
      tagline: 'Keseimbangan Kualitas & Ketahanan',
      icon: <Shield size={28} style={{ color: 'var(--brand-orange)' }} />,
      desc: 'Produsen lensa terkemuka dengan ketahanan luar biasa dan pilihan resep (power) terlengkap. Sangat andal untuk kebutuhan harian pasien optik Anda.',
      points: ['Garansi lapisan lensa yang terjamin', 'Rentang resep silinder/minus luas', 'Bahan lensa kokoh & tahan gores']
    }
  ];

  const products = [
    {
      name: 'NexQ Cleaner 30ml',
      icon: <Eye size={24} style={{ color: 'var(--primary-blue)' }} />,
      desc: 'Cairan pembersih khusus lensa kacamata dengan formula ANTIFOG (anti-embun) & Anti-Bakteri. Produk wajib untuk *upselling* di meja kasir optik Anda.'
    },
    {
      name: 'Frames & Aksesoris',
      icon: <Box size={24} style={{ color: 'var(--primary-blue)' }} />,
      desc: 'Menyediakan berbagai pilihan bingkai kacamata grosir, kotak kacamata, obeng mikro, nosepad, dan lap microfiber berkualitas tinggi.'
    },
    {
      name: 'Alat & Suku Cadang Mesin',
      icon: <Hammer size={24} style={{ color: 'var(--primary-blue)' }} />,
      desc: 'Menyuplai kebutuhan suku cadang laboratorium optik, suction cup faset, roughing wheel, dan perlengkapan mesin lab lainnya.'
    }
  ];

  return (
    <section id="produk" className="section section-bg">
      <div className="container">
        <div className="section-title">
          <span className="badge badge-blue">Katalog Produk Resmi</span>
          <h2>Lensa & Aksesoris Pendukung Terbaik</h2>
          <p>Kami mendistribusikan produk orisinal langsung dari pabrik untuk menjamin kualitas penglihatan pasien optik Anda.</p>
        </div>

        {/* Brand Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {brands.map((brand, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'white',
                padding: '35px 30px',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                e.currentTarget.style.borderColor = 'rgba(240, 90, 36, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-blue)' }}>{brand.name}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--brand-orange)', fontWeight: 600 }}>{brand.tagline}</span>
                </div>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--brand-orange-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>{brand.icon}</div>
              </div>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', flexGrow: 1 }}>{brand.desc}</p>
              
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {brand.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-orange)' }}></span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Products Section Title */}
        <h3 style={{
          textAlign: 'center',
          fontSize: '1.6rem',
          fontWeight: 700,
          color: 'var(--primary-blue)',
          marginBottom: '32px'
        }}>Produk Pendukung & Alat Optik</h3>

        {/* Secondary Products Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {products.map((prod, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: 'var(--border-radius-md)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                gap: '16px'
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-blue-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>{prod.icon}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-blue)' }}>{prod.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{prod.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
