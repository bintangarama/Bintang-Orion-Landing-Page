import React, { useState } from 'react';
import { Eye, Shield, Award, Sparkles, Box, Hammer } from 'lucide-react';
import LensaGallery from './LensaGallery';
import FrameGallery from './FrameGallery';
import Lightbox from './Lightbox';

export default function Brands() {
  const brands = [
    {
      name: 'ESSILOR',
      tagline: 'Pemimpin Global Lensa Kacamata',
      icon: <Award size={28} style={{ color: 'var(--brand-orange)' }} />,
      image: '/images/lensa-essilor.png',
      desc: 'Merek lensa kelas dunia asal Prancis yang terkenal dengan presisi optik tinggi. Menyediakan varian populer seperti Crizal, Varilux (progresif), Transitions, dan Eyezen.',
      points: ['Presisi visual maksimal', 'Lapisan anti-pantul terbaik (Crizal)', 'Teknologi transisi warna otomatis']
    },
    {
      name: 'GEN-Z (Madao Tec)',
      tagline: 'Lensa Kekinian Berkualitas & Ekonomis',
      icon: <Sparkles size={28} style={{ color: 'var(--brand-orange)' }} />,
      image: '/images/lensa-genz-drive.jpg',
      desc: 'Pilihan terpopuler bagi anak muda dan optik retail. Menawarkan proteksi Blue-Ray (cahaya biru) optimal serta lensa photochromic yang cepat beradaptasi dengan harga grosir kompetitif.',
      points: ['Proteksi radiasi layar biru tinggi', 'Transisi gelap-terang ekstra cepat', 'Harga grosir ramah optik baru']
    },
    {
      name: 'DOMAS',
      tagline: 'Keseimbangan Kualitas & Ketahanan',
      icon: <Shield size={28} style={{ color: 'var(--brand-orange)' }} />,
      image: '/images/lensa-domas-bluecromic.jpg',
      desc: 'Produsen lensa terkemuka dengan ketahanan luar biasa dan pilihan resep (power) terlengkap. Sangat andal untuk kebutuhan harian pasien optik Anda.',
      points: ['Garansi lapisan lensa yang terjamin', 'Rentang resep silinder/minus luas', 'Bahan lensa kokoh & tahan gores']
    }
  ];

  const products = [
    {
      name: 'NexQ Cleaner — Pembersih Lensa',
      icon: <Eye size={24} style={{ color: 'var(--primary-blue)' }} />,
      image: '/images/nexq-pembersih-lensa.jpg',
      desc: 'Cairan pembersih lensa kacamata 30ml — efektif mengangkat debu, kotoran, dan minyak pada frame & lensa. Formula aman, terdaftar Kemenkes RI.'
    },
    {
      name: 'NexQ Anti Fog Agent',
      icon: <Eye size={24} style={{ color: 'var(--primary-blue)' }} />,
      image: '/images/nexq-anti-fog-agent.jpg',
      desc: 'Formula anti-kabut premium untuk kaca, cermin, dan akrilik. Coating permukaan anti-embun berbasis US Formula, cocok untuk kacamata & pelindung wajah.'
    },
    {
      name: 'Frames & Aksesoris',
      icon: <Box size={24} style={{ color: 'var(--primary-blue)' }} />,
      image: '/images/hardcase-custom.jpg',
      desc: 'Menyediakan berbagai pilihan bingkai kacamata grosir, kotak kacamata (termasuk tipe lipat custom sablon), obeng mikro, nosepad, dan lap microfiber berkualitas tinggi.'
    },
    {
      name: 'Alat & Suku Cadang Mesin',
      icon: <Hammer size={24} style={{ color: 'var(--primary-blue)' }} />,
      image: '/images/alat-mesin.png',
      desc: 'Menyuplai kebutuhan suku cadang laboratorium optik, suction cup faset, roughing wheel, dan perlengkapan mesin lab lainnya.'
    }
  ];

  // Lightbox state — brand cards
  const [brandLbIndex, setBrandLbIndex] = useState(null);
  const brandLbImages = brands.map(b => ({
    src: b.image,
    alt: b.name,
    name: b.name,
    brand: b.tagline,
    tag: 'Lensa Resmi',
    tagColor: '#f05a24',
    desc: b.desc,
  }));

  // Lightbox state — product + flyer cards
  const flyerImage = {
    src: '/images/hardcase-lipat-banner.jpg',
    alt: 'Koleksi Hardcase Lipat Bintang Orion',
    name: 'Hardcase Lipat — New Arrival',
    brand: 'Bintang Orion',
    tag: 'New Arrival',
    tagColor: '#16a34a',
    desc: 'Hardcase lipat custom sablon terbaru dari Bintang Orion. Ringan, kokoh, dan bisa dipesan dengan logo toko optik Anda.'
  };
  const [productLbIndex, setProductLbIndex] = useState(null);
  const productLbImages = [flyerImage, ...products.map(p => ({
    src: p.image,
    alt: p.name,
    name: p.name,
    brand: 'Bintang Orion',
    tag: 'Produk Pendukung',
    tagColor: '#0f4c81',
    desc: p.desc,
  }))];

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
              className="brand-card"
              style={{
                backgroundColor: 'white',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'var(--transition-smooth)'
              }}
            >
              {/* Brand Card Image Header */}
              <div
                className="brand-image-container"
                onClick={() => setBrandLbIndex(idx)}
                style={{ cursor: 'zoom-in' }}
                title="Klik untuk perbesar"
              >
                <img src={brand.image} alt={brand.name} className="brand-card-image" />
              </div>

              {/* Brand Card Content */}
              <div style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                flexGrow: 1
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-blue)' }}>{brand.name}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--brand-orange)', fontWeight: 600 }}>{brand.tagline}</span>
                  </div>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--brand-orange-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>{brand.icon}</div>
                </div>
                
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', flexGrow: 1, lineHeight: '1.6' }}>{brand.desc}</p>
                
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                  <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {brand.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-orange)', flexShrink: 0 }}></span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Products Section Title */}
        <h3 style={{
          textAlign: 'center',
          fontSize: '1.8rem',
          fontWeight: 700,
          color: 'var(--primary-blue)',
          marginBottom: '32px'
        }}>Produk Pendukung & Alat Optik</h3>

        {/* Layout Grid with Flyer Banner and Product Cards */}
        <div className="secondary-products-layout">
          {/* Left: Flyer Promo Card */}
          <div
            className="flyer-card"
            onClick={() => setProductLbIndex(0)}
            style={{ cursor: 'zoom-in' }}
            title="Klik untuk perbesar"
          >
            <div className="flyer-badge">New Arrival</div>
            <img 
              src="/images/hardcase-lipat-banner.jpg" 
              alt="Koleksi Hardcase Lipat Bintang Orion" 
              className="flyer-image"
            />
          </div>

          {/* Right: Products Cards Grid */}
          <div className="products-grid">
            {products.map((prod, idx) => (
              <div 
                key={idx}
                className="product-card"
              >
                <div
                  className="product-image-container"
                  onClick={() => setProductLbIndex(idx + 1)}
                  style={{ cursor: 'zoom-in' }}
                  title="Klik untuk perbesar"
                >
                  <img src={prod.image} alt={prod.name} className="product-card-image" />
                </div>
                <div className="product-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <div className="product-icon-badge">{prod.icon}</div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)' }}>{prod.name}</h4>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{prod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Galeri Lensa Domas === */}
        <LensaGallery />

        {/* === Galeri Frame Kacamata === */}
        <FrameGallery />

      </div>

      {/* Brand Lightbox */}
      {brandLbIndex !== null && (
        <Lightbox
          images={brandLbImages}
          initialIndex={brandLbIndex}
          onClose={() => setBrandLbIndex(null)}
        />
      )}

      {/* Product Lightbox */}
      {productLbIndex !== null && (
        <Lightbox
          images={productLbImages}
          initialIndex={productLbIndex}
          onClose={() => setProductLbIndex(null)}
        />
      )}

      <style>{`
        /* Brand Cards Styling */
        .brand-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl) !important;
          border-color: rgba(240, 90, 36, 0.25) !important;
        }
        
        .brand-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background-color: var(--bg-light);
          border-bottom: 1px solid var(--border-color);
        }
        
        .brand-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .brand-card:hover .brand-card-image {
          transform: scale(1.06);
        }

        /* Secondary Section Layout */
        .secondary-products-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          align-items: stretch;
        }
        
        .flyer-card {
          position: relative;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          max-height: 520px;
          aspect-ratio: 9/16;
          justify-self: center;
          max-width: 320px;
          width: 100%;
          transition: var(--transition-smooth);
        }
        
        .flyer-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }
        
        .flyer-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .flyer-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background-color: var(--brand-orange);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          z-index: 10;
          box-shadow: 0 3px 10px rgba(240, 90, 36, 0.4);
        }
        
        .products-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .product-card {
          background-color: white;
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        
        .product-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: rgba(15, 76, 129, 0.2);
        }
        
        .product-image-container {
          width: 100%;
          height: 160px;
          overflow: hidden;
          background-color: var(--bg-light);
        }
        
        .product-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .product-card:hover .product-card-image {
          transform: scale(1.06);
        }
        
        .product-info {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .product-icon-badge {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background-color: var(--primary-blue-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
          flex-shrink: 0;
        }
        
        /* Tablet Layout Adjustment */
        @media (min-width: 768px) {
          .product-card {
            flex-direction: row;
            align-items: stretch;
          }
          .product-image-container {
            width: 180px;
            height: auto;
            min-height: 130px;
            flex-shrink: 0;
          }
          .product-info {
            flex-grow: 1;
            padding: 20px 24px;
            display: flex;
            justify-content: center;
          }
        }
        
        /* Desktop Layout Adjustment */
        @media (min-width: 992px) {
          .secondary-products-layout {
            grid-template-columns: 320px 1fr;
            gap: 40px;
          }
          .flyer-card {
            max-width: 100%;
            height: 100%;
            max-height: none;
            aspect-ratio: auto;
          }
          .products-grid {
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
}
