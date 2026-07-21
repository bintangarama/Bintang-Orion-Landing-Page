import React, { useState } from 'react';

const frames = [
  {
    id: 'genz-mseries-crystal',
    brand: 'gen-z',
    brandLabel: 'Gen-Z',
    series: 'M-Series',
    image: '/images/frame-genz-mseries-crystal.jpg',
    name: 'M-Series Crystal Clear',
    material: 'Plastik TR',
    style: 'Full Rim',
    color: 'Transparan/Crystal',
    desc: 'Bingkai full-rim transparan modern dengan material TR ringan. Tampilan minimalis kekinian yang cocok untuk semua usia.',
  },
  {
    id: 'genz-mseries-tortoise',
    brand: 'gen-z',
    brandLabel: 'Gen-Z',
    series: 'M-Series',
    image: '/images/frame-genz-mseries-tortoise.jpg',
    name: 'M-Series Tortoise Amber',
    material: 'Plastik Asetat',
    style: 'Full Rim',
    color: 'Tortoise/Amber',
    desc: 'Bingkai full-rim dengan motif tortoise klasik berwarna amber hangat. Material asetat premium dengan detail silver accent.',
  },
  {
    id: 'genz-sseries-halfrim',
    brand: 'gen-z',
    brandLabel: 'Gen-Z',
    series: 'S-Series',
    image: '/images/frame-genz-sseries-halfrim.jpg',
    name: 'S-Series Half-Rim Metal',
    material: 'Metal + Plastik',
    style: 'Half Rim',
    color: 'Hitam/Abu',
    desc: 'Bingkai half-rim kombinasi metal hitam dan temple abu-abu. Desain maskulin profesional untuk pria aktif.',
  },
  {
    id: 'genz-eseries-sport',
    brand: 'gen-z',
    brandLabel: 'Gen-Z',
    series: 'E-Series',
    image: '/images/frame-genz-eseries-sport.jpg',
    name: 'E-Series Sport Edition',
    material: 'TR Fleksibel',
    style: 'Full Rim',
    color: 'Hitam/Biru',
    desc: 'Bingkai sport ringan dengan material TR fleksibel dan aksen biru cerah. Cocok untuk aktivitas outdoor dan olahraga.',
  },
  {
    id: 'md-metal-91263',
    brand: 'md',
    brandLabel: 'MD',
    series: 'Metal Collection',
    image: '/images/frame-md-metal-91263.jpg',
    name: 'MD 91263 Metal Square',
    material: 'Metal Premium',
    style: 'Full Rim',
    color: 'Hitam',
    desc: 'Bingkai metal full-rim seri 91263 dengan bentuk persegi elegan. Temple transparan memberikan kesan modern dan ringan. Korean Design.',
  },
  {
    id: 'md-tr-korean-9195',
    brand: 'md',
    brandLabel: 'MD',
    series: 'Korean Design TR',
    image: '/images/frame-md-tr-korean-9195.jpg',
    name: 'MD 9195 Korean TR',
    material: 'TR90 Korea',
    style: 'Full Rim',
    color: 'Transparan/Crystal',
    desc: 'Bingkai TR90 Korean Design model 9195 yang ringan dan tahan lama. Sertifikasi FDA & ECO, cocok untuk penggunaan harian panjang.',
  },
];

const filters = [
  { key: 'all', label: 'Semua Frame' },
  { key: 'gen-z', label: 'Gen-Z' },
  { key: 'md', label: 'MD Multi Design' },
];

export default function FrameGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeFilter === 'all'
    ? frames
    : frames.filter(f => f.brand === activeFilter);

  return (
    <div className="frame-gallery-wrapper">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="badge badge-blue" style={{ marginBottom: '8px' }}>Koleksi Frame</span>
          <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--primary-blue)', margin: 0, lineHeight: 1.2 }}>
            Bingkai Kacamata Grosir
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
            {filtered.length} model tersedia — Gen-Z &amp; MD Multi Design Eyewear
          </p>
        </div>

        {/* Filter Pills */}
        <div className="frame-filter-pills">
          {filters.map(f => (
            <button
              key={f.key}
              className={`frame-pill ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="frame-grid">
        {filtered.map(frame => (
          <div
            key={frame.id}
            className="frame-card"
            onMouseEnter={() => setHoveredId(frame.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image + Overlay */}
            <div className="frame-img-wrap">
              <img
                src={frame.image}
                alt={`${frame.brandLabel} ${frame.name}`}
                className="frame-img"
                loading="lazy"
              />

              {/* Brand badge */}
              <div className={`frame-brand-badge brand-${frame.brand}`}>
                {frame.brandLabel}
              </div>

              {/* Hover Overlay */}
              <div className={`frame-overlay ${hoveredId === frame.id ? 'visible' : ''}`}>
                <div className="frame-overlay-content">
                  <p className="frame-overlay-name">{frame.name}</p>
                  <p className="frame-overlay-desc">{frame.desc}</p>
                  <div className="frame-overlay-specs">
                    <span>🏷 {frame.material}</span>
                    <span>🔲 {frame.style}</span>
                    <span>🎨 {frame.color}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card info */}
            <div className="frame-card-info">
              <p className="frame-series-label">{frame.series}</p>
              <h4 className="frame-card-name">{frame.name}</h4>
              <div className="frame-meta">
                <span className="frame-meta-chip">{frame.material}</span>
                <span className="frame-meta-chip">{frame.style}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .frame-gallery-wrapper {
          margin-top: 60px;
          padding-top: 50px;
          border-top: 1px solid var(--border-color);
        }

        /* Filter Pills */
        .frame-filter-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .frame-pill {
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

        .frame-pill:hover {
          border-color: var(--brand-orange);
          color: var(--brand-orange);
          background: var(--brand-orange-light);
        }

        .frame-pill.active {
          background: var(--brand-orange);
          border-color: var(--brand-orange);
          color: white;
        }

        /* Grid */
        .frame-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (min-width: 640px) {
          .frame-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 900px) {
          .frame-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }

        /* Frame Card */
        .frame-card {
          background: white;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .frame-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 76, 129, 0.12);
          border-color: rgba(15, 76, 129, 0.25);
        }

        /* Image Wrap */
        .frame-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #f8f9fb;
        }

        .frame-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 12px;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .frame-card:hover .frame-img {
          transform: scale(1.07);
        }

        /* Brand Badge */
        .frame-brand-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          z-index: 2;
        }

        .brand-gen-z {
          background: rgba(15, 76, 129, 0.1);
          color: var(--primary-blue);
          border: 1px solid rgba(15, 76, 129, 0.2);
        }

        .brand-md {
          background: rgba(240, 90, 36, 0.1);
          color: var(--brand-orange);
          border: 1px solid rgba(240, 90, 36, 0.2);
        }

        /* Hover Overlay */
        .frame-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(15, 76, 129, 0.92) 0%, rgba(10, 53, 92, 0.95) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(3px);
        }

        .frame-overlay.visible { opacity: 1; }

        .frame-overlay-content {
          text-align: center;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .frame-overlay-name {
          font-family: var(--font-serif);
          font-size: 0.9rem;
          font-weight: 700;
          margin: 0;
        }

        .frame-overlay-desc {
          font-size: 0.73rem;
          line-height: 1.55;
          color: #cbd5e1;
          margin: 0;
        }

        .frame-overlay-specs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 4px;
          margin-top: 4px;
        }

        .frame-overlay-specs span {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 3px 8px;
          border-radius: 999px;
          font-size: 0.65rem;
          font-weight: 600;
        }

        /* Card Info */
        .frame-card-info {
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .frame-series-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin: 0;
        }

        .frame-card-name {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-blue);
          line-height: 1.3;
          margin: 0;
        }

        .frame-meta {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .frame-meta-chip {
          font-size: 0.68rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 999px;
          background: var(--bg-light);
          color: var(--text-muted);
          border: 1px solid var(--border-color);
        }

        @media (max-width: 480px) {
          .frame-overlay { display: none; }
          .frame-img-wrap { aspect-ratio: 1 / 1; }
        }
      `}</style>
    </div>
  );
}
