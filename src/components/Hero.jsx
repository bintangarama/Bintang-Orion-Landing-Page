import React from "react";
import { ShieldCheck, Truck, Zap, Percent } from "lucide-react";

const stats = [
  { value: "200+", label: "Mitra Optik Aktif" },
  { value: "3", label: "Kota Layanan" },
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "3", label: "Brand Lensa Resmi" },
];

const trustItems = [
  { icon: <ShieldCheck size={18} />, text: "100% Lensa Original" },
  { icon: <Zap size={18} />, text: "Jasa Faset Presisi Cepat" },
  { icon: <Truck size={18} />, text: "Gratis Ongkir Area Tertentu" },
  { icon: <Percent size={18} />, text: "Harga Grosir Terbaik" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        paddingTop: "110px",
        paddingBottom: "0",
        background:
          "linear-gradient(160deg, #eef5fd 0%, #f8fbff 50%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          right: "-8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(240, 90, 36, 0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-8%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(15, 76, 129, 0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Main Hero Content ── */}
      <div className="container hero-content animate-fade-in">
        {/* Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <span className="badge">Partner Terpercaya Optik Indonesia</span>
        </div>

        {/* Headline */}
        <h1
          className="hero-title"
          style={{
            fontWeight: 800,
            color: "var(--primary-blue)",
            lineHeight: 1.12,
            letterSpacing: "-0.5px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Distributor Grosir Lensa Resmi
          <br />
          &amp;{" "}
          <span style={{ color: "var(--brand-orange)" }}>
            Jasa Faset Presisi
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-muted)",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          Bintang Orion adalah mitra grosir terpercaya untuk toko optik Anda —
          menyuplai lensa resmi dari <strong>Essilor, Gen-Z &amp; Domas</strong>{" "}
          dengan layanan faset otomatis berteknologi tinggi.
        </p>

        {/* Trust Indicators — horizontal row */}
        <div className="hero-trust-row">
          {trustItems.map((item, i) => (
            <div key={i} className="hero-trust-item">
              <span style={{ color: "var(--brand-orange)", flexShrink: 0 }}>
                {item.icon}
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "64px",
          }}
        >
          <a
            href="#estimator"
            className="btn btn-primary"
            style={{ padding: "14px 36px", fontSize: "1rem" }}
          >
            Kalkulator Order Cepat
          </a>
          <a
            href="#cabang"
            className="btn btn-secondary"
            style={{ padding: "14px 36px", fontSize: "1rem" }}
          >
            Hubungi Cabang Kami
          </a>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="hero-stats-bar">
        <div className="container">
          <div className="hero-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="hero-stat-item">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Headline size */
        .hero-title { font-size: 2.6rem; }
        @media (min-width: 640px)  { .hero-title { font-size: 3.2rem; } }
        @media (min-width: 992px)  { .hero-title { font-size: 3.8rem; } }
        @media (max-width: 480px)  { .hero-title { font-size: 2.1rem; } }

        /* Trust row */
        .hero-trust-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px 28px;
          margin-bottom: 32px;
        }
        .hero-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--text-dark);
        }

        /* Stats bar */
        .hero-stats-bar {
          background: var(--primary-blue);
          padding: 28px 0;
          margin-top: 0;
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px 0;
        }
        @media (min-width: 640px) {
          .hero-stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .hero-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 0 20px;
          border-right: 1px solid rgba(255,255,255,0.12);
        }
        .hero-stat-item:last-child { border-right: none; }
        @media (max-width: 639px) {
          .hero-stat-item:nth-child(2) { border-right: none; }
          .hero-stat-item:nth-child(3) { border-top: 1px solid rgba(255,255,255,0.12); }
          .hero-stat-item:nth-child(4) { border-top: 1px solid rgba(255,255,255,0.12); }
        }
        .hero-stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          line-height: 1;
          font-family: var(--font-serif);
        }
        .hero-stat-label {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.65);
          font-weight: 600;
          letter-spacing: 0.3px;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
