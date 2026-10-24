# Cireng A'paweh - Official Brand & Catalog Website 🥟✨

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)
![WhatsApp API](https://img.shields.io/badge/WhatsApp_API-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

Repositori ini berisi berkas kode sumber resmi untuk situs web **Cireng A'paweh** (pelopor camilan Sunda modern). Versi ini merupakan **hasil final penyerahan ke mitra**, yang telah dimigrasikan secara penuh dari arsitektur dinamis (Laravel) menjadi arsitektur **Web Statis Murni (*Pure Static Web*)** yang siap dihosting melalui GitHub Pages maupun penyedia hosting statis lainnya.

---

## 📌 Latar Belakang & Transformasi Proyek

Situs ini awalnya dirancang sebagai bagian dari platform terpadu dengan dashboard backend dan sistem transaksi otomatis. Namun, dalam tahap finalisasi dan penyerahan ke pihak mitra Cireng A'paweh, dilakukan restrukturisasi menyeluruh:

1. **Kelanjutan Proyek Mandiri:**
   Proyek ini dilanjutkan dan diselesaikan secara independen. Seluruh arsitektur tampilan antarmuka (*front-end*)—mulai dari struktur HTML, sistem *styling* CSS Variables yang modular, tata letak responsif, logika interaktivitas JavaScript, hingga halaman Beranda, Tentang Kami, dan Detail Produk—dikembangkan serta dikelola secara mandiri sesuai kebutuhan visual dan fungsional brand. Komponen dashboard admin backend yang sebelumnya dikerjakan terpisah telah dipangkas untuk menghasilkan platform publik yang ramping, cepat, dan mandiri.
2. **Kebutuhan Strategis Mitra (*Business Strategy*):**
   Berdasarkan permintaan langsung dari pihak pemilik bisnis/mitra, situs ini difokuskan sebagai **Katalog Digital & Brand Awareness**, bukan toko online transaksional penuh.
3. **Peniadaan Informasi Harga (*Price Concealment*):**
   Atas pertimbangan persaingan bisnis (*competitor analysis*) dan fluktuasi harga bahan baku, nominal harga dan persentase diskon **sengaja ditiadakan** dari antarmuka publik. Pelanggan diarahkan untuk langsung berkonsultasi mengenai harga dan ketersediaan stok secara personal dengan admin.
4. **Pemesanan Terintegrasi WhatsApp (*WhatsApp Direct Ordering*):**
   Seluruh aksi pembelian (*Call-to-Action*) pada menu reguler maupun promo dialihkan menjadi pemesanan instan ke WhatsApp resmi dengan format pesan terstruktur otomatis.

---

## 🚀 Fitur Utama

* **Pure Static & Zero Maintenance:** Berjalan 100% di sisi klien (*client-side*). Tanpa server backend (PHP/Node.js), tanpa runtime database, bebas biaya operasional server berkala, kebal dari eksploitasi celah backend, dan memiliki performa *load time* yang instan.
* **Database Statis Terpusat & Aman (`database.js`):** Seluruh data katalog produk, deskripsi, gambar, kategori, status promo, hingga playlist video Reels diatur dalam satu berkas terpusat. Dilengkapi proteksi fungsi `deepFreeze` untuk mencegah manipulasi data lewat *browser console*.
* **Pencarian Cepat Sisi Klien (*Instant Client-side Search*):** Fitur input pencarian interaktif di Hero section yang memfilter menu secara *realtime* tanpa perlu memuat ulang halaman atau memanggil API eksternal.
* **Interactive Reels Player with Frame UI:** Pemutar video pendek dengan frame ponsel interaktif, fitur *smart auto-scroll*, kontrol tombol audio mute/unmute, dan sensor fokus tengah yang datanya dirender langsung dari database.
* **Halaman Detail Produk Interaktif:** Membaca parameter ID produk dari URL secara dinamis, dilengkapi fitur pemilihan porsi (*quantity counter*).
* **Generator Pesan WhatsApp Terstruktur:** Tombol pemesanan langsung mengonversi nama menu dan jumlah porsi menjadi teks pesan WhatsApp yang rapi dan siap kirim ke nomor WhatsApp resmi mitra.
* **Navigasi Mulus (*Smart Smooth Scroll & Offset Handling*):** Menggunakan properti modern `scroll-behavior: smooth` dan `scroll-padding-top` sehingga perpindahan antar-bagian halaman tidak menutupi judul section.
* **Native 404 Fallback:** Halaman error kustom (`404.html`) yang dideteksi secara otomatis oleh GitHub Pages tanpa perlu konfigurasi web server (.htaccess/nginx).

---

## 📁 Struktur Direktori

```text
cirengapaweh-web/
├── assets/
│   ├── icon/                        # Ikon antarmuka (SVG/PNG)
│   ├── image/                       # Aset visual brand
│   │   ├── dekorasi/                # Ilustrasi, banner, frame HP, & ornamen
│   │   ├── logo/                    # Identitas resmi Cireng A'paweh
│   │   ├── lokasi/                  # Foto outlet cabang
│   │   └── produk/                  # Foto katalog menu produk
│   ├── scripts/
│   │   ├── database.js              # DATA UTAMA PRODUK & REELS (Single Source of Truth)
│   │   └── components/              # Skrip logika interaktif modular
│   │       ├── hero.js              # Logika pencarian produk Hero
│   │       ├── menu.js              # Logika carousel & filter menu
│   │       ├── navbar.js            # Scroll-spy, mobile toggle, & hash offset
│   │       ├── reels.js             # Kontrol interaksi pemutar video reels
│   │       └── rollback.js          # Tombol navigasi kembali ke atas
│   ├── styles/
│   │   ├── global.css               # Variabel warna, tipografi, & reset layout
│   │   ├── components/              # Styling komponen independen (hero, promo, reels, dll.)
│   │   └── page/                    # Styling spesifik tiap halaman
│   └── video/                       # Berkas video MP4 promosi & reels
├── index.html                       # Halaman Utama (Beranda, Promo, Menu, Reels, Mitra, Lokasi)
├── produk.html                      # Halaman Detail Produk & Pemesanan WhatsApp
├── tentangKami.html                 # Halaman Profil, Visi-Misi, & Komitmen Brand
├── 404.html                         # Halaman Fallback Error (Kompatibel dengan GitHub Pages)
└── README.md                        # Dokumentasi resmi proyek
```

---

## 🛠️ Panduan Manajemen Data (Khusus Mitra)

Mitra dapat memperbarui menu produk, promo, maupun video Reels dengan sangat mudah tanpa perlu mengutak-atik susunan kode HTML.

Cukup buka berkas **`assets/scripts/database.js`**:

### 1. Mengubah / Menambah Menu & Promo
```javascript
const rawProducts = {
    "1": {
        id: "1",
        name: "Cireng Salju Kuah Keju Creamy",
        category: "fastfood",     // Pilihan: "fastfood" atau "frozenfood"
        isPromo: true,            // true: tampil di banner Promo | false: hanya di Menu
        image: "assets/image/produk/Cireng Salju Kuah Keju Creamy.jpg",
        description: "Perpaduan cireng salju yang renyah di luar dan kenyal di dalam, disiram kuah keju otentik yang super creamy dan gurih."
    },
    // Tambahkan item produk baru di sini...
};
```

### 2. Mengubah / Menambah Video Reels
```javascript
const rawReels = [
    {
        id: "1",
        title: "Iklan Cireng A'paweh",
        videoSrc: "assets/video/cireng/Iklan.mp4"
    },
    {
        id: "2",
        title: "Cireng Kuah Keju",
        videoSrc: "assets/video/cireng/Cireng Kuah Keju.mp4"
    },
    // Tambahkan item video baru di sini...
];
```

Setiap perubahan di berkas tersebut akan **otomatis tersinkronisasi** ke:
1. Rekomendasi pencarian Hero section.
2. Kartu pada banner Promo Beranda.
3. Daftar menu kartu Beranda.
4. Tampilan halaman detail produk dan deskripsi di `produk.html`.
5. Frame pemutar video Reels di Beranda.

---

## 🌐 Menjalankan Proyek Secara Lokal & Deployment

### 1. Menjalankan di Komputer Lokal
Karena tidak menggunakan backend server, proyek ini tidak memerlukan PHP, Composer, maupun Apache/MySQL:
1. Buka folder proyek menggunakan teks editor (misalnya Visual Studio Code).
2. Jalankan ekstensi **Live Server** pada berkas `index.html`, atau langsung klik dua kali berkas `index.html` untuk membukanya di browser (Chrome, Edge, Firefox, Safari).

### 2. Publikasi ke GitHub Pages
1. Pastikan seluruh berkas sudah di-*commit* dan di-*push* ke repositori GitHub.
2. Masuk ke halaman repositori di GitHub, lalu pilih **Settings** > **Pages**.
3. Pada bagian **Build and deployment**:
   * **Source:** Pilih `Deploy from a branch`.
   * **Branch:** Pilih branch `main` (atau `master`) dan path root `/ (root)`.
4. Klik **Save**. Situs akan aktif secara publik dalam beberapa menit di URL `https://ansyahmf.github.io/cirengapaweh-web`.

---

## 📄 Lisensi & Hak Kepemilikan

Seluruh aset visual, logo, materi video, foto produk, dan identitas merek merupakan hak milik eksklusif **Cireng A'paweh**. Kode sumber antarmuka situs dikembangkan dan diserahkan untuk kebutuhan operasional branding digital Cireng A'paweh.