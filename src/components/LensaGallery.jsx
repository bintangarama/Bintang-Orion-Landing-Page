import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Lightbox from './Lightbox';

const lensaProducts = [
  // Single Vision
  {
    id: 'sv-sunbeach-pgabr',
    category: 'single-vision',
    image: '/images/lensa-domas-sv-sunbeach-pgabr.jpg',
    name: 'Sun Beach SV PG-ABR',
    brand: 'DOMAS',
    tag: 'Photogrey + Anti Blue Ray',
    tagColor: '#f05a24',
    desc: 'Lensa Single Vision dengan kombinasi Photogrey (gelap otomatis di bawah sinar matahari) dan Anti Blue Ray, cocok untuk aktivitas outdoor.',
  },
  {
    id: 'nalco-pgx-sv',
    category: 'single-vision',
    image: '/images/lensa-domas-nalco-pgx-singlevision.jpg',
    name: 'Nalco PGX Single Vision',
    brand: 'DOMAS',
    tag: 'Multi Coated',
    tagColor: '#16a34a',
    desc: 'Lensa single vision seri PGX dengan lapisan multi-coat berkualitas tinggi. Pilihan andalan untuk resep minus, plus, maupun silinder.',
  },
  // Progressive
  {
    id: 'nalco-pgx-prog',
    category: 'progressive',
    image: '/images/lensa-domas-nalco-pgx-progressive.jpg',
    name: 'Nalco PGX Progressive',
    brand: 'DOMAS',
    tag: 'Progressive',
    tagColor: '#7c3aed',
    desc: 'Lensa progresif seri PGX dengan zona penglihatan jauh, menengah, dan dekat yang mulus. Ideal untuk pengguna presbyopia yang aktif.',
  },
  {
    id: 'bcl-glowing-prog',
    category: 'progressive',
    image: '/images/lensa-domas-bcl-glowing-progressive.jpg',
    name: 'BCL Glowing Progressive',
    brand: 'DOMAS',
    tag: 'Flexi-cord Progressive',
    tagColor: '#0891b2',
    desc: 'Lensa progresif Flexi-cord seri BCL Glowing, dirancang dengan koridor yang fleksibel dan nyaman untuk penggunaan seharian.',
  },
  {
    id: 'nalco-blubloc-prog',
    category: 'progressive',
    image: '/images/lensa-domas-nalco-blubloc-progressive.jpg',
    name: 'Nalco BluBloc Progressive',
    brand: 'DOMAS',
    tag: 'UV-420 BluBloc',
    tagColor: '#1d4ed8',
    desc: 'Lensa progresif dengan teknologi BluBloc UV-420, memblokir sinar biru berbahaya dari layar digital sekaligus melindungi dari UV hingga 420nm.',
  },
  {
    id: 'innovative-prog',
    category: 'progressive',
    image: '/images/lensa-domas-innovative-progressive.jpg',
    name: 'Innovative Progressive',
    brand: 'DOMAS',
    tag: 'Inovatif Corridor',
    tagColor: '#b45309',
    desc: 'Lensa progresif Inovatif Corridor dengan teknologi desain koridor terbaru, memberikan peralihan penglihatan yang lebih natural dan adaptasi lebih cepat.',
  },
  {
    id: 'sunbeach-prog-pgabr',
    category: 'progressive',
    image: '/images/lensa-domas-sunbeach-prog-pgabr.jpg',
    name: 'Sun Beach Progressive PG-ABR',
    brand: 'DOMAS',
    tag: 'Photogrey + ABR',
    tagColor: '#f05a24',
    desc: 'Lensa progresif premium kombinasi Photogrey dan Anti Blue Ray. Satu lensa untuk kebutuhan baca dekat, menengah, jauh, sekaligus perlindungan UV & blue light.',
  },
  // Bifocal
  {
    id: 'nalco-kryptok-rs28',
    category: 'bifocal',
    image: '/images/lensa-domas-nalco-kryptok-rs28.jpg',
    name: 'Nalco Kryptok RS28 HMC',
    brand: 'DOMAS',
    tag: 'Bifocal',
    tagColor: '#b45309',
    desc: 'Lensa bifocal Kryptok RS28 dengan lapisan Hard Multi-Coat. Garis bifocal yang halus dan natural, cocok untuk pasien yang baru beralih dari lensa biasa ke bifocal.',
  },
];

const tabs = [
  { key: 'all', label: 'Semua Varian' },
  { key: 'single-vision', label: 'Single Vision' },
  { key: 'progressive', label: 'Progressive' },
  { key: 'bifocal', label: 'Bifocal' },
];

export default function LensaGallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const scrollRef = useRef(null);

  const filtered = activeTab === 'all'
    ? lensaProducts
    : lensaProducts.filter(p => p.category === activeTab);

  // Map to Lightbox image format
  const lightboxImages = filtered.map(lens => ({
    src: lens.image,
    alt: `${lens.brand} ${lens.name}`,
    name: lens.name,
    brand: lens.brand,
    tag: lens.tag,
    tagColor: lens.tagColor,
    desc: lens.desc,
  }));

  const openLightbox = (lens) => {
    const idx = filtered.findIndex(l => l.id === lens.id);
    setLightboxIndex(idx);
  };

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="lensa-gallery-wrapper">
      {/* Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="badge" style={{ marginBottom: '8px' }}>Koleksi Lengkap</span>
          <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--primary-blue)', margin: 0, lineHeight: 1.2 }}>
            Varian Lensa Domas
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
            {filtered.length} produk tersedia — geser atau klik panah untuk melihat semua
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="lensa-filter-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`lensa-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div style={{ position: 'relative' }}>
        {/* Left Arrow */}
        <button className="carousel-arrow carousel-arrow-left" onClick={() => scroll('left')} aria-label="Scroll kiri">
          <ChevronLeft size={20} />
        </button>

        {/* Scroll Track */}
        <div ref={scrollRef} className="lensa-scroll-track">
          {filtered.map((lens) => (
            <div
              key={lens.id}
              className="lensa-card"
              onMouseEnter={() => setHoveredId(lens.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(lens)}
              style={{ cursor: 'pointer' }}
            >
              {/* Image */}
              <div className="lensa-card-img-wrap">
                <img
                  src={lens.image}
                  alt={`${lens.brand} ${lens.name}`}
                  className="lensa-card-img"
                  loading="lazy"
                />
              {/* Overlay on hover */}
                <div className={`lensa-card-overlay ${hoveredId === lens.id ? 'visible' : ''}`}>
                  <p className="lensa-overlay-desc">🔍 Klik untuk melihat detail</p>
                </div>
              </div>

              {/* Info */}
              <div className="lensa-card-info">
                <span
                  className="lensa-tag"
                  style={{ backgroundColor: lens.tagColor + '18', color: lens.tagColor }}
                >
                  {lens.tag}
                </span>
                <h4 className="lensa-card-name">{lens.name}</h4>
                <p className="lensa-card-brand">{lens.brand}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="carousel-arrow carousel-arrow-right" onClick={() => scroll('right')} aria-label="Scroll kanan">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <style>{`
        .lensa-gallery-wrapper {
          margin-top: 60px;
          padding-top: 50px;
          border-top: 1px solid var(--border-color);
        }

        /* Filter Tabs */
        .lensa-filter-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .lensa-tab {
          padding: 7px 18px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          border: 1.5px solid var(--border-color);
          background: white;
          color: var(--text-muted);
          transition: var(--transition-smooth);
          font-family: var(--font-sans);
        }

        .lensa-tab:hover {
          border-color: var(--primary-blue);
          color: var(--primary-blue);
          background: var(--primary-blue-light);
        }

        .lensa-tab.active {
          background: var(--primary-blue);
          border-color: var(--primary-blue);
          color: white;
        }

        /* Scroll Track */
        .lensa-scroll-track {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 12px 4px 20px;
        }

        .lensa-scroll-track::-webkit-scrollbar {
          display: none;
        }

        /* Lensa Card */
        .lensa-card {
          flex: 0 0 220px;
          scroll-snap-align: start;
          background: white;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .lensa-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
          border-color: rgba(15, 76, 129, 0.2);
        }

        .lensa-card-img-wrap {
          position: relative;
          width: 100%;
          height: 190px;
          overflow: hidden;
          background: var(--bg-light);
        }

        .lensa-card-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 10px;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .lensa-card:hover .lensa-card-img {
          transform: scale(1.05);
        }

        /* Hover overlay description */
        .lensa-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 76, 129, 0.88);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(2px);
        }

        .lensa-card-overlay.visible {
          opacity: 1;
        }

        .lensa-overlay-desc {
          font-size: 0.78rem;
          line-height: 1.55;
          text-align: center;
        }

        /* Card Info */
        .lensa-card-info {
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .lensa-tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          width: fit-content;
        }

        .lensa-card-name {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-blue);
          line-height: 1.3;
          margin: 0;
        }

        .lensa-card-brand {
          font-size: 0.75rem;
          color: var(--text-light);
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin: 0;
        }

        /* Carousel Arrows */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 1.5px solid var(--border-color);
          box-shadow: var(--shadow-md);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--primary-blue);
          transition: var(--transition-smooth);
          font-family: var(--font-sans);
        }

        .carousel-arrow:hover {
          background: var(--primary-blue);
          color: white;
          border-color: var(--primary-blue);
        }

        .carousel-arrow-left  { left: -20px; }
        .carousel-arrow-right { right: -20px; }

        @media (max-width: 600px) {
          .carousel-arrow { display: none; }
          .lensa-card { flex: 0 0 180px; }
          .lensa-card-img-wrap { height: 160px; }
        }
      `}</style>
    </div>
  );
}
