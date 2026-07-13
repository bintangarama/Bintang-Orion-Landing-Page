import React, { useState } from 'react';
import { Send, FileText, Check, Plus, Minus } from 'lucide-react';

export default function OrderEstimator() {
  const [brand, setBrand] = useState('Gen-Z (Madao Tec)');
  const [lensType, setLensType] = useState('Blue-Chromic (Anti-Blue + Photochromic)');
  const [needFaset, setNeedFaset] = useState(true);
  const [cleanerQty, setCleanerQty] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [branch, setBranch] = useState('Karawang');

  const brands = ['Essilor', 'Gen-Z (Madao Tec)', 'Domas'];
  const lensTypes = [
    'Single Vision Standard (Bening)',
    'Anti-Radiation / Blue-Cut',
    'Photochromic (Adaptasi Cahaya)',
    'Blue-Chromic (Anti-Blue + Photochromic)',
    'Progressive (Multi-focal)'
  ];

  const branches = [
    { name: 'Karawang', phone: '6281110127728', address: 'Galuh Mas' },
    { name: 'Bekasi', phone: '6281110127728', address: 'Mayor Oking' } // using the official number for both, or can configure separately
  ];

  // Generate WhatsApp text message draft
  const generateMessage = () => {
    const selectedBranch = branches.find(b => b.name === branch);
    const fasetStatus = needFaset ? 'Ya (Pasang Lensa)' : 'Tidak (Hanya Lensa)';
    const cleanerText = cleanerQty > 0 ? `${cleanerQty} Botol NexQ Cleaner 30ml` : 'Tidak Ada';
    
    return `Halo Bintang Orion ${branch}, saya ingin menanyakan ketersediaan stok & penawaran harga grosir untuk pesanan berikut:

- Merek Lensa: ${brand}
- Jenis Lensa: ${lensType}
- Jasa Faset: ${fasetStatus}
- Tambahan: ${cleanerText}
- Jumlah Pesanan: ${quantity} Pasang

Mohon info harga grosir spesial kemitraan. Terima kasih!`;
  };

  const handleSendWhatsApp = () => {
    const selectedBranch = branches.find(b => b.name === branch);
    const message = encodeURIComponent(generateMessage());
    const waUrl = `https://wa.me/${selectedBranch.phone}?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="estimator" className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-title">
          <span className="badge">Alat Kalkulator B2B</span>
          <h2>Kalkulator Estimasi Order & Faset</h2>
          <p>Konfigurasikan detail kebutuhan lensa optik Anda untuk mendapatkan draf pesanan otomatis yang siap dikirim langsung ke WhatsApp sales kami.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'stretch'
        }} className="estimator-grid">
          
          {/* Left Side: Configuration Panel */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            
            {/* 1. Brand Selection */}
            <div>
              <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-blue)', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                1. Pilih Merek Lensa
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBrand(b)}
                    style={{
                      padding: '12px 10px',
                      borderRadius: 'var(--border-radius-sm)',
                      border: brand === b ? '2px solid var(--brand-orange)' : '1px solid var(--border-color)',
                      backgroundColor: brand === b ? 'var(--brand-orange-light)' : 'transparent',
                      color: brand === b ? 'var(--brand-orange)' : 'var(--text-dark)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    {brand === b && <Check size={16} />}
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Lens Type Selection */}
            <div>
              <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-blue)', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                2. Pilih Jenis Lensa & Proteksi
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {lensTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setLensType(t)}
                    style={{
                      padding: '14px 16px',
                      borderRadius: 'var(--border-radius-sm)',
                      border: lensType === t ? '1px solid var(--brand-orange)' : '1px solid var(--border-color)',
                      backgroundColor: lensType === t ? 'var(--brand-orange-light)' : 'transparent',
                      color: 'var(--text-dark)',
                      fontWeight: lensType === t ? 700 : 500,
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <span>{t}</span>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: lensType === t ? 'var(--brand-orange)' : 'transparent'
                    }}>
                      {lensType === t && <Check size={12} style={{ color: 'white' }} />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Faset and Cleaner Addons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-blue)', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  3. Jasa Faset (Potong Lensa)
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { label: 'Ya (Presisi)', value: true },
                    { label: 'Tidak', value: false }
                  ].map((f) => (
                    <button
                      key={f.label}
                      onClick={() => setNeedFaset(f.value)}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: 'var(--border-radius-sm)',
                        border: needFaset === f.value ? '2px solid var(--brand-orange)' : '1px solid var(--border-color)',
                        backgroundColor: needFaset === f.value ? 'var(--brand-orange-light)' : 'transparent',
                        color: needFaset === f.value ? 'var(--brand-orange)' : 'var(--text-dark)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        transition: 'var(--transition-smooth)'
                      }}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-blue)', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  4. NexQ Cleaner 30ml
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <button
                    onClick={() => cleanerQty > 0 && setCleanerQty(cleanerQty - 1)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--bg-light)'
                    }}
                  ><Minus size={16} /></button>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, width: '30px', textAlign: 'center' }}>{cleanerQty}</span>
                  <button
                    onClick={() => setCleanerQty(cleanerQty + 1)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--bg-light)'
                    }}
                  ><Plus size={16} /></button>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>Botol</span>
                </div>
              </div>
            </div>

            {/* 4. Quantity and Branch selection */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-blue)', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  5. Jumlah Lensa
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--bg-light)'
                    }}
                  ><Minus size={16} /></button>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, width: '30px', textAlign: 'center' }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--bg-light)'
                    }}
                  ><Plus size={16} /></button>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>Pasang (Pairs)</span>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-blue)', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  6. Kirim ke Cabang Sales
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {branches.map((b) => (
                    <button
                      key={b.name}
                      onClick={() => setBranch(b.name)}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: 'var(--border-radius-sm)',
                        border: branch === b.name ? '2px solid var(--brand-orange)' : '1px solid var(--border-color)',
                        backgroundColor: branch === b.name ? 'var(--brand-orange-light)' : 'transparent',
                        color: branch === b.name ? 'var(--brand-orange)' : 'var(--text-dark)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        transition: 'var(--transition-smooth)'
                      }}
                    >
                      {b.name} ({b.address})
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Message Preview & Action */}
          <div style={{
            backgroundColor: 'var(--primary-blue)',
            color: 'white',
            padding: '40px 30px',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative white glow */}
            <div style={{
              position: 'absolute',
              bottom: '-10%',
              right: '-10%',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
              pointerEvents: 'none'
            }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <FileText size={20} style={{ color: 'var(--brand-orange)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--brand-orange)' }}>
                  Draf Pesanan WhatsApp
                </span>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>Ringkasan Order Anda</h3>
              <p style={{ fontSize: '0.9rem', color: '#93c5fd', marginBottom: '24px' }}>
                Berikut adalah draf pesan yang akan dikirim secara otomatis ke nomor sales WhatsApp Bintang Orion cabang **{branch}**.
              </p>

              {/* Message Code Block Mockup */}
              <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: 'var(--border-radius-sm)',
                padding: '20px',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                color: '#e0f2fe',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxHeight: '260px',
                overflowY: 'auto'
              }}>
                {generateMessage()}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#93c5fd' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-orange)' }}></span>
                <span>Harga grosir dihitung berdasarkan jumlah kuantitas bulanan mitra optik.</span>
              </div>
              <button
                onClick={handleSendWhatsApp}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '1.05rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 15px -3px rgba(240, 90, 36, 0.4)'
                }}
              >
                <Send size={18} /> Kirim Penawaran via WhatsApp
              </button>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .estimator-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 992px) {
          .estimator-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
      `}</style>
    </section>
  );
}
