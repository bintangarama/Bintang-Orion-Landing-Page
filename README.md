# Bintang Orion - Landing Page B2B (Grosir Lensa Resmi)

Website ini adalah landing page modern berbasis **React + Vite** yang dirancang khusus untuk **Bintang Orion**, distributor resmi dan grosir lensa kacamata terpercaya untuk toko-toko optik di Indonesia. Desain mengusung tema **"Clean & Clinical"** dengan perpaduan warna oranye khas branding Bintang Orion dan biru medis profesional.

---

## 🚀 Fitur Utama

1. **B2B Landing Vibe**: Desain premium yang meyakinkan pemilik optik baru mengenai keaslian produk dan kecepatan pelayanan.
2. **Katalog Lensa Resmi**: Menampilkan produk orisinal dari pabrikan terkemuka: **Essilor**, **Gen-Z (Madao Tec)**, dan **DOMAS**.
3. **Showcase Layanan Faset**: Menyorot keunggulan jasa faset (pemotongan lensa otomatis) dengan teknologi berpresisi tinggi menggunakan mesin **Essilor Delta 2**.
4. **Kalkulator Estimator Order B2B**: Fitur interaktif untuk menyimulasikan pemesanan grosir (merek lensa, jenis proteksi, kuantitas pasang, tambahan cairan NexQ Cleaner, dan jasa faset) yang menghasilkan draf teks WhatsApp siap kirim ke cabang sales.
5. **Dua Cabang Distribusi**: Detail jam buka, kontak, dan link navigasi Google Maps untuk cabang **Karawang Arcadia** dan **Bekasi Mayor Oking**.
6. **FAQ Accordion**: Tanya jawab terstruktur mengenai pengiriman gratis ongkir, garansi lensa 12-24 bulan, dan pengiriman resep faset.
7. **Responsif Mobile & Touch-Friendly**: Dioptimalkan secara penuh untuk kenyamanan akses melalui layar sentuh smartphone maupun tablet.

---

## 🛠️ Tech Stack & Dependensi

* **Frontend Framework**: [React (v19)](https://react.dev/)
* **Build Tool**: [Vite (v8)](https://vite.dev/)
* **Gaya Visual (CSS)**: Vanilla CSS dengan variabel kustom di [index.css](src/index.css)
* **Ikon**: [Lucide React](https://lucide.dev/) (Garis bersih & profesional)

---

## 📁 Struktur Folder Proyek

```bash
bintang-orion/
├── public/                 # Aset statis publik
├── src/
│   ├── components/         # Komponen React Modular
│   │   ├── Navbar.jsx      # Header & Menu Mobile Laci
│   │   ├── Hero.jsx        # Bagian Hero & Statistik Lab
│   │   ├── Brands.jsx      # Katalog Lensa & Produk Pendukung
│   │   ├── FasetService.jsx# Teknologi Lab & Mesin Essilor Delta 2
│   │   ├── OrderEstimator.jsx# Kalkulator Estimasi Order & Integrasi WhatsApp
│   │   ├── Branches.jsx    # Info Kontak Cabang Karawang & Bekasi
│   │   ├── FAQ.jsx         # Accordion Tanya Jawab Kemitraan
│   │   └── Footer.jsx      # Footer & Link Instagram Resmi
│   │
│   ├── App.jsx             # Hub Penggabung Komponen Halaman
│   ├── index.css           # Sistem Desain Global & Variabel Warna
│   └── main.jsx            # Entrypoint Inisialisasi React
│
├── index.html              # HTML Root & Konfigurasi SEO
├── package.json            # Daftar Dependensi & Skrip Proyek
└── vite.config.js          # Konfigurasi Bundler Vite
```

---

## 💻 Cara Menjalankan Proyek Secara Lokal

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda (versi 18 ke atas direkomendasikan).

### Langkah-Langkah:
1. **Masuk ke direktori proyek**:
   ```bash
   cd bintang-orion
   ```
2. **Instal dependensi** (jika belum diinstal):
   ```bash
   npm install
   ```
3. **Jalankan server pengembangan lokal (development mode)**:
   ```bash
   npm run dev
   ```
   Buka alamat **[http://localhost:5173/](http://localhost:5173/)** di browser Anda untuk melihat dan menguji coba website.

4. **Kompilasi build produksi (production build)**:
   ```bash
   npm run build
   ```
   Hasil build akan disimpan di folder `dist/` dan siap dideploy ke layanan hosting statis (Vercel, Netlify, GitHub Pages, cPanel, dll).
