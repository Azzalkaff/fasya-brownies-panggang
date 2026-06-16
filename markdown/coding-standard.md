# Coding Standard

## Brownies Premium Website

Dokumen ini adalah standar coding untuk AI agentic dan developer manusia agar implementasi website konsisten, rapi, mudah dirawat, SEO-friendly, dan cocok untuk stack berikut:

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* Motion
* Vercel

---

## 1) Tujuan Utama

Website harus memenuhi prioritas berikut:

1. Cepat diakses.
2. SEO kuat.
3. Mobile-first.
4. Visual premium dan elegan.
5. Mudah dikembangkan.
6. Komponen reusable.
7. Aksesibilitas dasar terpenuhi.

AI agent wajib mengoptimalkan untuk pengalaman pengguna, bukan hanya sekadar “berjalan”.

---

## 2) Prinsip Umum

### Wajib

* Gunakan TypeScript untuk semua file logic dan komponen.
* Gunakan App Router.
* Gunakan komponen server by default.
* Jadikan komponen client hanya jika memang perlu interaksi, state, event handler, atau Motion.
* Prioritaskan semantic HTML.
* Jaga markup tetap bersih dan mudah dipindai.
* Gunakan Tailwind utility classes secara konsisten.
* Gunakan shadcn/ui untuk komponen dasar yang butuh konsistensi visual.
* Gunakan Motion secukupnya, tidak berlebihan.

### Dilarang

* Inline style kecuali sangat terpaksa.
* Menulis CSS custom panjang kalau bisa diselesaikan dengan Tailwind.
* Komponen yang terlalu besar dan mencampur banyak tanggung jawab.
* Duplikasi logic dan styling.
* Menggunakan class acak tanpa pola yang jelas.
* Mengorbankan SEO demi animasi.

---

## 3) Tech Stack Rules

### Next.js

* Gunakan App Router.
* Gunakan `metadata` API untuk title, description, Open Graph, dan Twitter cards.
* Gunakan `next/image` untuk semua gambar produk dan hero.
* Gunakan `next/link` untuk navigasi internal.
* Minimalkan client components.
* Gunakan `loading.tsx` atau skeleton hanya bila benar-benar dibutuhkan.

### TypeScript

* Hindari `any`.
* Definisikan type untuk:

  * product data
  * testimonial data
  * navigation items
  * CTA links
* Gunakan `readonly` untuk data statis bila cocok.
* Ekspor type dari file data bila dipakai lintas komponen.

### Tailwind CSS

* Gunakan design token berbasis warna brand.
* Gunakan spacing konsisten.
* Hindari class yang berulang jika bisa diekstrak menjadi komponen.
* Gunakan responsive utilities dengan pola mobile-first.
* Gunakan `cn()` helper untuk class merging bila diperlukan.

### shadcn/ui

* Gunakan untuk tombol, card, dialog, dropdown, tabs, dan komponen interaktif lain.
* Jangan ubah internal source shadcn tanpa alasan kuat.
* Jika perlu custom variant, lakukan dengan pola yang konsisten.

### Motion

* Gunakan untuk fade-in, slide-up, hover subtle, dan entrance animation.
* Jangan membuat animasi yang mengganggu pembacaan.
* Animasi harus memperkuat premium feel, bukan menjadi fokus utama.
* Hormati `prefers-reduced-motion` bila memungkinkan.

---

## 4) Struktur Folder

Gunakan struktur yang sederhana dan scalable:

```text
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ globals.css
│  └─ sitemap.ts
├─ components/
│  ├─ layout/
│  ├─ sections/
│  ├─ ui/
│  └─ shared/
├─ data/
├─ lib/
├─ hooks/
└─ types/
```

### Aturan folder

* `app/` untuk routing dan page-level composition.
* `components/sections/` untuk section hero, about, products, testimonials, location, cta.
* `components/ui/` untuk komponen dasar reusable.
* `data/` untuk data statis seperti produk dan testimoni.
* `lib/` untuk helper, formatter, dan utilities.
* `types/` untuk type global jika dibutuhkan.

---

## 5) Naming Convention

### File

* Gunakan `kebab-case` untuk file dan folder.

  * Contoh: `product-card.tsx`, `hero-section.tsx`

### Component

* Gunakan `PascalCase` untuk nama komponen.

  * Contoh: `HeroSection`, `ProductCard`

### Function

* Gunakan `camelCase`.

  * Contoh: `formatPrice`, `buildWhatsAppLink`

### Constants

* Gunakan `SCREAMING_SNAKE_CASE` untuk konstanta global.

  * Contoh: `SITE_NAME`, `DEFAULT_OG_IMAGE`

### Data Object Keys

* Gunakan `camelCase` secara konsisten.

---

## 6) Component Design Rules

### Komponen harus

* Punya satu tanggung jawab utama.
* Mudah diuji secara visual.
* Bisa dipakai ulang bila relevan.
* Menerima props secara eksplisit.

### Komponen section

Setiap section sebaiknya memiliki:

* wrapper semantic yang jelas
* heading yang benar
* subtitle bila perlu
* CTA bila relevan
* spacing konsisten

### Contoh pemecahan

* `HeroSection`
* `BrandPromiseSection`
* `ProductsSection`
* `TestimonialsSection`
* `LocationSection`
* `FinalCtaSection`
* `SiteFooter`

### Komponen kecil yang disarankan

* `SectionHeading`
* `PrimaryButton`
* `SecondaryButton`
* `ProductCard`
* `TestimonialCard`
* `SocialLinkButton`
* `BadgePill`

---

## 7) Styling Rules

### Design tokens

Gunakan token warna brand di `globals.css` atau `tailwind.config` sesuai pola project.

Warna utama harus konsisten:

* primary: kuning premium
* secondary: coklat cokelat gelap
* background: cream hangat
* surface: putih / off-white
* text: coklat tua atau near-black warm

### Layout

* Gunakan container dengan max-width yang jelas.
* Hindari layout terlalu penuh.
* Beri whitespace yang cukup untuk kesan premium.
* Gunakan grid responsif untuk section produk dan testimoni.

### Buttons

* CTA utama harus paling menonjol.
* Secondary button harus lebih tenang secara visual.
* Gunakan radius dan padding konsisten.

### Cards

* Card produk harus rapi, ringan, dan tidak terlalu ramai.
* Gunakan shadow halus.
* Jangan gunakan border atau glow berlebihan.

---

## 8) Responsive Rules

### Mobile-first wajib

* Desain utama harus nyaman di layar kecil.
* CTA harus mudah disentuh dengan ibu jari.
* Teks jangan terlalu kecil.
* Jarak antar elemen cukup agar tidak sesak.

### Breakpoints

Gunakan breakpoint Tailwind standar dan jangan membuat breakpoint tambahan tanpa kebutuhan nyata.

### Prioritas mobile

* Navbar ringkas
* Hero tidak terlalu tinggi
* CTA jelas
* Produk tampil dalam kartu yang mudah di-scroll
* Maps tidak mendominasi layar

---

## 9) Accessibility Rules

AI agent wajib mengutamakan aksesibilitas dasar:

* Gunakan heading hierarchy yang benar: `h1` → `h2` → `h3`.
* Gambar wajib punya `alt` yang informatif.
* Tombol dan link harus punya label yang jelas.
* Kontras warna harus cukup.
* Elemen interaktif harus bisa diakses via keyboard.
* Jangan mengandalkan warna saja untuk menyampaikan informasi.
* Gunakan `aria-label` bila teks visual tidak cukup menjelaskan fungsi.

---

## 10) SEO Rules

### Metadata

Setiap page wajib memiliki:

* `title`
* `description`
* Open Graph tags
* Twitter card

### Konten

* `h1` hanya satu per halaman utama.
* Gunakan keyword lokal secara natural.
* Tulis copy yang menjawab intent pembeli.
* Jangan isi halaman hanya dengan gambar tanpa konteks teks.

### Local SEO

Untuk bisnis brownies lokal:

* cantumkan area layanan
* tampilkan alamat
* embed Google Maps
* gunakan structured data jika memungkinkan
* pastikan informasi kontak konsisten

### Structured Data

Bila relevan, tambahkan schema:

* LocalBusiness
* Bakery
* Product
* FAQPage bila ada FAQ

---

## 11) Performance Rules

* Gunakan `next/image` dengan ukuran yang tepat.
* Kompres gambar sebelum dipakai.
* Hindari library besar jika tidak perlu.
* Gunakan dynamic import bila komponen berat hanya dipakai di satu tempat.
* Jangan memuat animasi atau media berat di atas fold tanpa alasan.
* Prioritaskan LCP yang cepat.

### Target performa

* Mobile loading cepat.
* CLS rendah.
* Layout stabil.
* Tidak ada render blocking yang tidak perlu.

---

## 12) Data Management

### Data statis

* Simpan produk, testimoni, dan link sosial di folder `data/`.
* Jangan hardcode data berulang di banyak file.
* Bila data bertambah, pindahkan ke source of truth tunggal.

### Contoh data yang sebaiknya dipisah

* daftar produk
* harga
* varian kondimen
* review pelanggan
* link marketplace
* nomor WhatsApp

---

## 13) CTA Rules

CTA adalah elemen paling penting untuk konversi.

### Prinsip

* Satu CTA utama.
* CTA utama harus konsisten di seluruh halaman.
* CTA sekunder boleh ada, tetapi jangan mengalahkan CTA utama.

### Prioritas CTA untuk website ini

1. WhatsApp
2. Marketplace utama
3. Social media

### Implementasi

* CTA muncul di hero.
* CTA juga muncul setelah produk.
* CTA akhir harus jelas dan besar.
* Floating WhatsApp boleh dipakai bila tidak mengganggu.

---

## 14) Content Rules

### Tone of voice

* Hangat
* Premium
* Jelas
* Tidak bertele-tele
* Tidak terlalu promosi berlebihan

### Copywriting

* Fokus pada manfaat bagi pelanggan.
* Hindari klaim generik tanpa bukti.
* Gunakan kalimat yang konkret.
* Hindari jargon yang tidak perlu.

### Contoh yang baik

* Dipanggang fresh setiap hari.
* Tekstur lembut dan rasa cokelat yang kaya.
* Cocok untuk hadiah, keluarga, dan momen spesial.

### Hindari

* Klaim kosong seperti “terbaik”, “paling enak”, tanpa konteks.
* Bahasa yang terlalu ramai.
* Paragraf panjang yang sulit dipindai.

---

## 15) Motion Rules

Motion harus subtle dan purposeful.

### Boleh

* fade in ringan
* slide up ringan
* hover lift tipis
* stagger kecil antar card

### Tidak boleh

* bounce berlebihan
* rotation yang mengganggu
* parallax berat tanpa alasan
* animasi panjang yang memperlambat interaksi

### Prinsip

Jika animasi tidak membantu pemahaman atau konversi, jangan dipakai.

---

## 16) Code Quality Rules

### Wajib

* Gunakan ESLint.
* Format dengan Prettier atau standar formatter yang disepakati.
* Hindari komponen raksasa.
* Refactor sebelum file menjadi sulit dibaca.
* Tambahkan komentar hanya bila ada logic yang tidak langsung jelas.

### Disarankan

* Gunakan type alias atau interface secara konsisten.
* Pisahkan presentational component dan data logic jika memungkinkan.
* Gunakan helper untuk format harga, link, dan date.

---

## 17) Error Handling Rules

* Jangan biarkan UI rusak karena data kosong.
* Siapkan fallback state untuk gambar atau data tidak lengkap.
* Kalau link kosong, sembunyikan tombolnya atau nonaktifkan dengan jelas.
* Jangan asumsi semua konten selalu tersedia.

---

## 18) Testing & Validation

Minimal validasi yang wajib dilakukan:

* cek layout mobile
* cek layout desktop
* cek klik CTA
* cek link WhatsApp
* cek performance dasar
* cek heading structure
* cek alt text gambar
* cek metadata halaman

Jika ada testing setup, prioritaskan:

* component rendering
* utility function tests
* link generation tests

---

## 19) Deployment Rules

* Deploy ke Vercel.
* Pastikan environment variable aman.
* Jangan commit secret ke repo.
* Cek production build sebelum publish.
* Pastikan domain, OG image, dan metadata final sudah benar.

---

## 20) AI Agent Operating Rules

AI agent harus mengikuti urutan kerja berikut:

1. Baca tujuan section.
2. Identifikasi komponen yang bisa dipakai ulang.
3. Cek apakah solusi server component cukup.
4. Gunakan client component hanya jika perlu.
5. Tulis code yang ringkas, konsisten, dan mudah di-review.
6. Hindari overengineering.
7. Jika ada pilihan, pilih yang paling maintainable dan SEO-friendly.

### Saat diminta membuat fitur baru

AI agent harus menjawab:

* Apakah fitur ini menambah konversi?
* Apakah fitur ini memperbaiki UX?
* Apakah fitur ini membuat page lebih berat?
* Apakah fitur ini bisa dibuat lebih sederhana?

Jika jawabannya tidak jelas, pilih solusi yang paling sederhana.

---

## 21) Definition of Done

Sebuah task dianggap selesai bila:

* tidak ada error build
* tampilan responsive
* CTA berfungsi
* SEO dasar terpasang
* komponen rapi dan reusable
* styling sesuai brand
* aksesibilitas dasar aman
* tidak ada duplikasi tidak perlu
* code mudah dibaca oleh developer lain dan AI agent berikutnya

---

## 22) Checklist Cepat Sebelum Merge

* [ ] TypeScript aman
* [ ] Komponen sudah dipisah dengan baik
* [ ] Mobile layout sudah dicek
* [ ] Gambar sudah dioptimalkan
* [ ] Metadata lengkap
* [ ] CTA utama jelas
* [ ] Tidak ada class Tailwind berantakan
* [ ] Tidak ada `any` tanpa alasan
* [ ] Tidak ada client component yang tidak perlu
* [ ] Copywriting sesuai tone premium

---

## 23) Penutup

Standar ini dibuat untuk menjaga website tetap:

* premium
* cepat
* SEO-friendly
* mudah dirawat
* siap berkembang

Jika ada konflik antara estetika dan performa, prioritaskan performa, keterbacaan, dan konversi.
