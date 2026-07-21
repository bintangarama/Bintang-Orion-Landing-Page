import React from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function Branches() {
  const branchData = [
    {
      name: "Bintang Orion Karawang",
      subtitle: "Grosir Lensa Resmi Essilor, Gen-Z & Domas",
      address:
        "Komplek Ruko Arcadia Jl. Galuh Mas Raya, Blok XII A No.7, Sukaharja, Telukjambe Timur, Karawang, Jawa Barat 41361",
      hours: "Senin - Sabtu: 11.00 - 20.00 WIB (Minggu Libur)",
      phone: "0811 1012 7728",
      waNumber: "6281110127728",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Bintang+Orion+Karawang+Grosir+Lensa+Resmi+Essilor",
    },
    {
      name: "Bintang Orion Bekasi",
      subtitle: "Grosir Lensa Resmi Gen-Z, Essilor & Domas",
      address:
        "Jl. Mayor Oking, RT.002/RW.002, Bekasi Jaya, Kec. Bekasi Timur, Kota Bekasi, Jawa Barat 17113",
      hours: "Senin - Sabtu: 09.00 - 18.00 WIB (Minggu Libur)",
      phone: "0811 8105 679",
      waNumber: "628118105679",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Bintang+Orion+Bekasi+Grosir+Lensa+Resmi+GEN+Z",
    },
  ];

  return (
    <section id="cabang" className="section">
      <div className="container">
        <div className="section-title">
          <span className="badge">Kunjungan & Kontak</span>
          <h2>Lokasi Cabang & Kontak Resmi</h2>
          <p>
            Kunjungi gudang distribusi kami atau hubungi perwakilan sales untuk
            melihat contoh produk dan berkonsultasi mengenai kemitraan optik.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
          }}
          className="branches-grid"
        >
          {branchData.map((branch, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "white",
                borderRadius: "var(--border-radius-lg)",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border-color)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "var(--shadow-xl)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
            >
              {/* Header branch info */}
              <div
                style={{
                  backgroundColor: "var(--primary-blue-light)",
                  padding: "24px 30px",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "var(--primary-blue)",
                    marginBottom: "4px",
                  }}
                >
                  {branch.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--brand-orange)",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {branch.subtitle}
                </p>
              </div>

              {/* Branch Details */}
              <div
                style={{
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  flexGrow: 1,
                }}
              >
                {/* Address */}
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{ color: "var(--brand-orange)", marginTop: "3px" }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        marginBottom: "4px",
                      }}
                    >
                      Alamat Distribusi
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.5",
                      }}
                    >
                      {branch.address}
                    </p>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{ color: "var(--brand-orange)", marginTop: "3px" }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        marginBottom: "4px",
                      }}
                    >
                      Jam Operasional
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.5",
                      }}
                    >
                      {branch.hours}
                    </p>
                  </div>
                </div>

                {/* Telepon */}
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{ color: "var(--brand-orange)", marginTop: "3px" }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        marginBottom: "4px",
                      }}
                    >
                      Kontak WhatsApp
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.5",
                      }}
                    >
                      {branch.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons / Actions */}
              <div
                style={{
                  padding: "24px 30px",
                  borderTop: "1px solid var(--border-color)",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, padding: "10px 14px", fontSize: "0.85rem" }}
                >
                  <Navigation size={16} /> Google Maps
                </a>
                <a
                  href={`https://wa.me/${branch.waNumber}?text=Halo%20Bintang%20Orion%20${encodeURIComponent(branch.name.split(" ").pop())},%20saya%20tertarik%20untuk%20menanyakan%20kemitraan%20grosir%20lensa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1, padding: "10px 14px", fontSize: "0.85rem" }}
                >
                  <Phone size={16} /> Hubungi Cabang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .branches-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
