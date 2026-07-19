# Dokumentasi Teknis Proyek Landing Page Bintang Orion

Dokumen ini menjelaskan arsitektur teknis, sistem desain, logika komponen, dan detail implementasi dari website Bintang Orion.

---

## 🎨 1. Sistem Desain & Konseptual Visual

Website ini dirancang khusus untuk mewakili citra laboratorium optik & grosir yang bersih (*Clean*), profesional, dan tepercaya secara klinis (*Clinical*), dengan menggunakan kombinasi font yang dinamis dan autentik:

### A. Tipografi & Font Pairing
* **Heading (`h1` sampai `h6`)**: Menggunakan font **Lora** (Serif). Desain Lora yang memiliki kaki huruf yang halus memberikan nuansa akademis, klinis, dan kredibilitas medis tingkat tinggi. Ini menghindari kesan "dibuat oleh AI / template standar".
* **Body Copy & Elemen Kontrol**: Menggunakan font **Plus Jakarta Sans** (Sans-serif). Font ini sangat ramah di mata, memiliki tingkat keterbacaan yang tinggi pada berbagai layar, dan memiliki lengkungan modern yang dinamis.

### B. Palet Warna (CSS Variables)
Sistem warna didefinisikan secara global pada file `src/index.css` menggunakan CSS Custom Properties:
- `--brand-orange: #f05a24;` – Warna oranye logo resmi Bintang Orion untuk tombol aksi primer dan aksen penting.
- `--primary-blue: #0f4c81;` – Warna biru tua tepercaya untuk heading utama dan latar belakang footer, memberikan kontras klinis yang kuat.
- `--bg-light: #f8fafc;` – Warna abu-abu sangat muda untuk latar belakang section selang-seling agar transisi halaman lebih mulus.
- `--text-dark: #0f172a;` – Warna abu-abu gelap (Slate 900) untuk teks agar tidak terlalu tajam (tidak menggunakan hitam pekat `#000000`).

---

## 🧩 2. Detail Arsitektur Komponen React

Aplikasi ini dirancang sebagai SPA (Single Page Application) dengan komponen fungsional yang terbagi secara modular dalam folder `src/components`:

### 1. `Navbar` (Header Navigasi & Drawer Mobile)
- Mengelola state `isOpen` untuk membuka/tutup menu laci pada perangkat seluler.
- Mengelola state `isScrolled` menggunakan *Scroll Listener* aktif. Ketika halaman digulir ke bawah sejauh lebih dari 20px, navigasi akan berubah menjadi putih dengan latar belakang blur (efek *glassmorphism*) dan memiliki garis batas bawah tipis untuk menjaga estetika premium.

### 2. `Hero` (Proposisi Nilai & Dashboard Statis)
- Menyajikan headline tebal bertema B2B.
- Menampilkan visual statis menyerupai sistem pelacak pesanan lab real-time dan detail mesin faset **Essilor Delta 2**. Ini memperkuat visualisasi kapasitas produksi Bintang Orion.

### 3. `Brands` (Showcase Produk Lensa & Aksesoris)
- Terbagi menjadi dua bagian:
  1. Kartu Tiga Brand Utama (**Essilor**, **Gen-Z**, dan **Domas**) beserta poin-poin garansi dan kecocokan segmentasi pasar.
  2. Produk pelengkap penambah margin optik retail seperti cairan pembersih **NexQ Cleaner 30ml** (antifog), frames, dan alat-alat laboratorium.

### 4. `FasetService` (Detail Jasa Potong Lensa)
- Menjelaskan keuntungan kerja sama maklun faset dengan Bintang Orion (menghindari kerugian akibat lensa pecah saat dipotong manual, akurasi mesin edger digital 3D).

### 5. `OrderEstimator` (Kalkulator Kemitraan)
- Komponen paling interaktif di landing page ini.
- **Logika State**:
  - `brand` (string): Menyimpan merek lensa terpilih.
  - `lensType` (string): Menyimpan jenis lensa & pelindung radiasi.
  - `needFaset` (boolean): Menentukan apakah order memerlukan faset perakitan atau hanya beli bahan lensa mentah.
  - `cleanerQty` (number): Kuantitas botol cairan NexQ.
  - `quantity` (number): Kuantitas pasang lensa kacamata.
  - `branch` (string): Memilih cabang pengiriman ('Karawang' atau 'Bekasi').
- **Integrasi WhatsApp**:
  - Mengonversi data formulir menjadi draf pesan teks terstruktur.
  - Fungsi `handleSendWhatsApp` menyandikan pesan menggunakan `encodeURIComponent()` dan membuka jendela baru dengan URL API WhatsApp resmi:
    `https://wa.me/{phone_number}?text={encoded_message}`

### 6. `Branches` (Dua Gudang Cabang Utama)
- Menyajikan informasi operasional terupdate: **Senin - Sabtu: 11.00 - 20.00 WIB** dan **Minggu Libur**.
- Tombol integrasi rute navigasi cepat ke Google Maps menggunakan parameter pencarian query terenkripsi aman.

### 7. `FAQ` (Tanya Jawab Accordion)
- Accordion interaktif stateful. Menggunakan state indeks `activeIndex` untuk mendeteksi baris pertanyaan yang dibuka. Ketika pertanyaan aktif diklik, tinggi jawaban (`max-height`) akan berubah secara halus dari `0` ke `300px` dengan animasi transisi CSS agar tidak patah.

---

## 📱 3. Strategi Desain Responsif & Kinerja

1. **Mobile Stacking Grid**: Grid utama pada layout menggunakan aturan CSS Grid standard yang dikombinasikan dengan media query `@media (min-width: 992px)`. Hal ini membuat layout tersusun satu kolom (vertikal) di ponsel, dan otomatis melebar menjadi multi-kolom di layar komputer.
2. **Fluid Typography**: Menggunakan ukuran font berbasis `rem` yang dikombinasikan dengan media query untuk memastikan ukuran judul utama mengecil secara wajar di layar smartphone berukuran kecil (di bawah 480px) agar kata-kata tidak meluber keluar layar.
3. **No Unused CSS**: Seluruh class CSS didefinisikan secara langsung di [index.css](src/index.css), meminimalkan ukuran file dan meningkatkan kecepatan render awal (*FCP - First Contentful Paint*).
