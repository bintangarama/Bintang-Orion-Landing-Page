import React from 'react';
import { Cpu, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

export default function FasetService() {
  const benefits = [
    {
      title: 'Presisi Tinggi & Bebas Gap',
      desc: 'Mesin membaca lekukan bingkai secara digital 3D, memotong lensa dengan akurasi 0.01mm untuk hasil pas sempurna tanpa kelonggaran.',
      icon: <Cpu size={20} />
    },
    {
      title: 'Bebas Risiko Lensa Rusak',
      desc: 'Proses otomatis mengurangi risiko lensa tergores, retak, atau tidak simetris dibandingkan dengan pemotongan manual tradisional.',
      icon: <ShieldAlert size={20} />
    },
    {
      title: 'Tingkatkan Efisiensi Bisnis Optik',
      desc: 'Hemat biaya investasi mesin faset yang mahal (ratusan juta rupiah) dan gaji staf lab. Fokuslah pada penjualan, kami urus teknisnya.',
      icon: <CheckCircle2 size={20} />
    }
  ];

  return (
    <section id="faset" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '50px',
          alignItems: 'center'
        }} className="faset-grid">
          
          {/* Left Side - Tech Graphic */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }} className="faset-graphic">
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-hover) 100%)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '40px',
              color: 'white',
              boxShadow: 'var(--shadow-xl)',
              width: '100%',
              maxWidth: '500px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative light reflection */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)',
                pointerEvents: 'none'
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  padding: '8px',
                  borderRadius: '8px'
                }}><Sparkles size={20} style={{ color: 'var(--brand-orange)' }} /></div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Teknologi Laboratorium Optik</span>
              </div>

              <h3 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: '1.2', marginBottom: '16px' }}>
                Essilor Delta 2
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '30px', lineHeight: '1.6' }}>
                Kami memproses faset menggunakan mesin edger otomatis **Essilor Delta 2**. Teknologi ini memindai bingkai kacamata secara tiga dimensi dan memotong lensa secara presisi mengikuti kurva bingkai.
              </p>

              {/* Specs Overlay Card */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 'var(--border-radius-md)',
                padding: '20px',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '8px' }}>
                    <span>Metode Tracing</span>
                    <span style={{ fontWeight: 700 }}>Digital 3D Frame Tracing</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '8px' }}>
                    <span>Jenis Bevel</span>
                    <span style={{ fontWeight: 700 }}>Mini-Bevel / Flat / Grooving</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span>Bahan Lensa</span>
                    <span style={{ fontWeight: 700 }}>CR39 / Polycarbonate / Hi-Index</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background floating circles for technical vibe */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '80px',
              height: '80px',
              border: '2px dashed var(--brand-orange)',
              borderRadius: '50%',
              opacity: 0.3,
              zIndex: -1
            }} />
          </div>

          {/* Right Side - Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className="badge">Layanan Faset Lab Maklun</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-blue)', lineHeight: '1.2' }}>
              Serahkan Pekerjaan Faset ke Lab Kami yang Presisi
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Memotong lensa secara manual membutuhkan keahlian tinggi dan risiko kesalahan yang besar. Melalui layanan faset otomatis Bintang Orion, Anda dapat memberikan hasil kacamata berkualitas tinggi kepada pelanggan tanpa repot.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
              {benefits.map((b, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--brand-orange-light)',
                    color: 'var(--brand-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>{b.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '4px' }}>{b.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .faset-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
        }
        @media (min-width: 992px) {
          .faset-grid {
            grid-template-columns: 0.95fr 1.05fr;
            gap: 70px;
          }
        }
      `}</style>
    </section>
  );
}
