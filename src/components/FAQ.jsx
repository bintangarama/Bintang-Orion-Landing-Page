import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: 'Apakah Bintang Orion melayani pembelian satuan oleh pengguna langsung (B2C)?',
      a: 'Bintang Orion beroperasi sebagai distributor resmi dan grosir yang melayani kemitraan dengan toko optik retail (B2B). Kami tidak melayani penjualan kacamata retail langsung ke konsumen akhir. Mitra optik dapat memesan lensa secara grosir (stok) maupun eceran maklun faset.'
    },
    {
      q: 'Bagaimana alur pengiriman bingkai (frame) untuk jasa Faset?',
      a: 'Untuk layanan faset, Anda cukup mengirimkan bingkai kacamata pelanggan Anda ke salah satu cabang terdekat kami (Karawang atau Bekasi). Setelah frame kami terima, lensa pilihan Anda akan dipotong menggunakan mesin otomatis Essilor Delta 2 dan dirakit secara presisi. Kacamata yang sudah selesai dirakit beserta kemasan lensa asli akan dikirimkan kembali ke optik Anda.'
    },
    {
      q: 'Daerah mana saja yang masuk dalam jangkauan Gratis Ongkir Bintang Orion?',
      a: 'Kami menyediakan layanan gratis ongkir tanpa minimal pembelian menggunakan tim ekspedisi internal kami sendiri untuk area Karawang, Cikampek, Cikarang, Subang, Bekasi, dan Purwakarta. Pengiriman di luar wilayah tersebut akan diproses menggunakan kurir ekspedisi terpercaya (JNE, J&T, Sicepat, dll).'
    },
    {
      q: 'Berapa lama estimasi waktu proses faset dan pengiriman lensa?',
      a: 'Untuk lensa yang masuk dalam kategori Ready Stock (stok gudang), proses faset diselesaikan dalam waktu 1 hari kerja setelah frame tiba di lab kami. Untuk lensa resep khusus (lab order / indent), waktu pengerjaan berkisar antara 3 sampai 5 hari kerja.'
    },
    {
      q: 'Apakah lensa yang disediakan memiliki garansi resmi?',
      a: 'Tentu saja. Semua lensa yang kami distribusikan (Essilor, Gen-Z, Domas) dijamin 100% orisinal. Setiap pembelian lensa akan disertai dengan kartu garansi resmi dan lap microfiber asli bawaan lensa. Garansi mencakup pengelupasan lapisan pelindung (coating) akibat cacat produksi pabrik selama 12 hingga 24 bulan.'
    }
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="section section-bg">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-title">
          <span className="badge badge-blue">Tanya Jawab</span>
          <h2>Pertanyaan yang Sering Diajukan</h2>
          <p>Temukan jawaban cepat seputar kerja sama grosir, teknis layanan faset, jangkauan pengiriman, dan garansi produk.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--border-radius-md)',
                  border: isOpen ? '1px solid var(--brand-orange)' : '1px solid var(--border-color)',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  overflow: 'hidden',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {/* FAQ Question */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    color: isOpen ? 'var(--brand-orange)' : 'var(--primary-blue)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    backgroundColor: isOpen ? 'var(--brand-orange-light)' : 'transparent',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* FAQ Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease-in-out',
                  }}
                >
                  <p style={{
                    padding: '20px 24px',
                    fontSize: '0.925rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    borderTop: '1px solid var(--border-color)'
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
