# Portfolio — Duta Fithra Qolby, S.Tr.T.

Portfolio profesional berbasis Next.js untuk **Duta Fithra Qolby, S.Tr.T.** — Electronics & Embedded Systems Engineer dari PENS Surabaya.

🌐 **Live:** [Deploy ke Vercel — lihat instruksi di bawah](#deployment)

---

## ✨ Fitur

- **Dark navy theme** mirip Brittany Chiang's portfolio
- **Animasi smooth** dengan Framer Motion
- **Fully responsive** — desktop & mobile
- **SEO optimized** — meta tags, Open Graph
- **Sections:** Hero, About, Education, Experience, Projects (dengan modal gallery), Skills, Certifications, Contact
- **Side elements** — social links & email vertical (desktop)
- **Project gallery modal** dengan image carousel
- **Zoomable certificates**

## 🛠 Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS**
- **Framer Motion** — animasi
- **Lucide React** — icons

## 📁 Struktur Project

```
portfolio-duta/
├── public/
│   ├── foto_no_bg.png       # Foto profil (no background)
│   ├── foto.jpeg            # Foto profil asli
│   └── images/
│       ├── bekam_electric.jpeg
│       ├── bekam_3d.png
│       ├── bekam_board.png
│       ├── bekam_schematic.png
│       ├── testbench_3d.png
│       ├── testbench_mapping.png
│       ├── tft_3d.png
│       ├── tft_casing.png
│       ├── tft_board.jpg
│       ├── tft_3d_komponen.png
│       └── toefl_cert.png
├── src/
│   ├── app/
│   │   ├── page.tsx         # Main page (assembles all sections)
│   │   ├── layout.tsx       # Root layout + SEO metadata
│   │   └── globals.css      # Global styles & design tokens
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navbar + mobile menu
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About me + photo
│   │   ├── Education.tsx    # Education + GPA
│   │   ├── Experience.tsx   # Experience tabs
│   │   ├── Projects.tsx     # Featured projects + modal gallery
│   │   ├── Skills.tsx       # Skills + progress bars
│   │   ├── Certifications.tsx # Certifications + zoom
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Footer.tsx       # Footer
│   │   └── SideElements.tsx # Left/right sidebar
│   └── data/
│       └── portfolio.ts     # ← EDIT INI untuk update konten
```

## ✏️ Cara Edit Konten

Semua data portfolio ada di satu file: **`src/data/portfolio.ts`**

Edit file tersebut untuk mengubah:
- Info pribadi, email, telepon
- Pendidikan & IPK
- Pengalaman kerja
- Proyek
- Skills
- Sertifikasi

## 🚀 Menjalankan Secara Lokal

```bash
# Masuk ke folder project
cd portfolio-duta

# Install dependencies (sudah dilakukan)
npm install

# Jalankan dev server
npm run dev
```

Buka **http://localhost:3000** di browser.

## 📦 Deployment ke Vercel

### Opsi 1: Via Vercel CLI (direkomendasikan)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Opsi 2: Via GitHub + Vercel Dashboard

1. **Install Git** — https://git-scm.com/download/win
2. **Buat akun GitHub** — https://github.com
3. **Buat repository baru** di GitHub (nama: `portfolio-duta`)
4. **Push kode:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio Duta Fithra Qolby"
   git remote add origin https://github.com/USERNAME/portfolio-duta.git
   git push -u origin main
   ```
5. **Buka** https://vercel.com — Login dengan GitHub
6. **New Project** → Import repository `portfolio-duta`
7. Vercel akan otomatis mendeteksi Next.js dan deploy!

### Opsi 3: Via Vercel Dashboard (Upload)

1. Buka https://vercel.com/new
2. Pilih "Import Third-Party Git Repository" atau drag & drop folder
3. Set framework: **Next.js**
4. Deploy!

## 📝 Catatan

- File sumber (biodata, gambar) **tidak diubah** — hanya disalin ke `public/images/`
- Konten sepenuhnya berdasarkan data asli dari `biodata_duta_fithra_qolby.txt`
- Tidak ada backend atau database

---

*Dibuat dengan Next.js + Framer Motion · Terinspirasi dari Brittany Chiang's Portfolio*
