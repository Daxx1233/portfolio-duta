// ============================================================
// PORTFOLIO DATA - Edit this file to update portfolio content
// ============================================================

export const personalInfo = {
  name: "Duta Fithra Qolby",
  degree: "S.Tr.T.",
  title: "Electronics & Embedded Systems Engineer",
  subtitle: "I build things for hardware.",
  greeting: "Hi, my name is",
  location: "Surabaya, Jawa Timur, Indonesia",
  email: "dutafithra1233@gmail.com",
  phone: "082257788266",
  linkedin: "https://linkedin.com/in/duta-fithra-qolby",
  github: "",
  photo: "/foto_no_bg.png",
  photoBg: "/foto.jpeg",
  summary:
    "Fresh Graduate Sarjana Terapan Teknik Komputer dari Politeknik Elektronika Negeri Surabaya (PENS) dengan minat kuat pada bidang elektronika, embedded systems, dan desain PCB. Memiliki keahlian dalam pemrograman mikrokontroler, integrasi sensor serta aktuator, perancangan skematik, simulasi rangkaian elektronika, tata letak (layout) PCB, pengujian perangkat keras (hardware testing), dan troubleshooting.",
  summaryEn:
    "Fresh Graduate in Applied Computer Engineering from the State Electronics Polytechnic of Surabaya (PENS) with a strong interest in electronics, embedded systems, and PCB design. Experienced in microcontroller programming, sensor & actuator integration, schematic design, circuit simulation, PCB layout, hardware testing, and troubleshooting.",
};

export const education = [
  {
    institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
    degree: "Sarjana Terapan (D4) — Teknik Komputer",
    degreeEn: "Bachelor of Applied Science — Computer Engineering",
    location: "Surabaya, Indonesia",
    period: "2022 — 2026",
    gpa: "3.64 / 4.00",
    description:
      "Specialized in Electronics & IoT Systems. Coursework covering embedded systems, digital electronics, PCB design, IoT architecture, and machine learning for IoT.",
  },
];

export const experiences = [
  {
    id: 1,
    role: "Electrical Engineering Intern",
    company: "PT VIXMO Transportasi Cerdas",
    period: "Agustus 2025 — Desember 2025",
    location: "Surabaya, Indonesia",
    description:
      "Mengembangkan QC Test Board berbasis ESP32 untuk pengujian sistem pengereman otomatis (Advanced Emergency Braking System / AEBS) pada truk.",
    highlights: [
      "Mengembangkan QC Test Board berbasis ESP32 untuk pengujian sistem AEBS pada truk",
      "Mengimplementasikan mode simulasi Otomatis dan Manual menggunakan potensiometer sebagai pengontrol parameter uji",
      "Membangun simulasi jarak kendaraan untuk menguji respons Emergency Brake, Soft Brake, dan Full Brake",
      "Mengintegrasikan data sensor radar dan menguji respons AEBS dalam berbagai kondisi simulasi",
    ],
    tech: ["ESP32", "C/C++", "PCB Design", "EasyEDA", "Radar Sensor", "AEBS"],
  },
  {
    id: 2,
    role: "Electrical Engineering Intern",
    company: "PT VIXMO Transportasi Cerdas",
    period: "Januari 2025 — Juni 2025",
    location: "Surabaya, Indonesia",
    description:
      "Mengembangkan interface display TFT berbasis ESP32 sebagai penunjuk indikasi jarak antar-truk (truck-to-truck distance).",
    highlights: [
      "Mengembangkan interface display TFT berbasis ESP32 untuk indikasi jarak antar-truk",
      "Melakukan pengujian sistem serta debugging untuk memastikan fungsi display dan komunikasi antar-perangkat",
      "Mengintegrasikan data dari sensor radar untuk mendeteksi dan menampilkan jarak antar-kendaraan secara real-time",
      "Melaksanakan pengujian serta pelacakan error (debugging) pada sistem display dan jalur komunikasi",
    ],
    tech: ["ESP32", "TFT Display", "Radar Sensor", "C/C++", "UART", "SPI"],
  },
];

export const projects = [
  {
    id: 1,
    title: "IoT-Based Electric Cupping System",
    subtitle: "Sistem Bekam Listrik Berbasis IoT",
    period: "September 2025 — September 2026",
    description:
      "Prototipe bekam listrik berbasis ESP32-S3 dengan custom PCB, mengintegrasikan sensor tekanan, pengontrol pompa vakum, dan layar sentuh HMI. Menerapkan kontrol tekanan closed-loop dan integrasi cloud via Supabase REST API.",
    longDescription:
      "Merancang prototipe bekam listrik berbasis ESP32-S3 dengan custom PCB, mengintegrasikan sensor tekanan, pengontrol pompa vakum, dan layar sentuh HMI. Mengimplementasikan kontrol tekanan loop tertutup (closed-loop) dengan umpan balik sensor, PWM, dan histeresis untuk regulasi otomatis. Mengintegrasikan koneksi Wi-Fi dan Supabase REST API untuk pencatatan riwayat sesi terapi dan pemantauan real-time.",
    images: [
      "/images/bekam_electric.jpeg",
      "/images/bekam_3d.png",
      "/images/bekam_board.png",
      "/images/bekam_schematic.png",
    ],
    coverImage: "/images/bekam_3d.png",
    tech: [
      "ESP32-S3",
      "C++",
      "EasyEDA",
      "ADS1115",
      "L298N",
      "TJC HMI",
      "I2C",
      "UART",
      "Wi-Fi",
      "Supabase",
    ],
    category: "Embedded Systems & IoT",
    featured: true,
  },
  {
    id: 2,
    title: "TFT AEBS QC Test Bench",
    subtitle: "Advanced Emergency Braking System Test Interface",
    period: "Agustus 2025 — Desember 2025",
    description:
      "QC Test Board berbasis ESP32 untuk pengujian sistem pengereman otomatis (AEBS) pada truk, dengan mode simulasi Otomatis dan Manual, serta integrasi sensor radar real-time.",
    longDescription:
      "Mengembangkan board pengujian QC berbasis ESP32 untuk validasi sistem AEBS pada truk. Sistem mendukung simulasi Emergency Brake, Soft Brake, dan Full Brake dengan kontrol melalui potensiometer. Interface TFT menampilkan status pengujian dan data radar secara real-time.",
    images: [
      "/images/tft_3d.png",
      "/images/tft_casing.png",
      "/images/tft_board.jpg",
      "/images/tft_3d_komponen.png",
    ],
    coverImage: "/images/tft_3d.png",
    tech: [
      "ESP32",
      "TFT Display",
      "EasyEDA",
      "PCB Design",
      "Radar Sensor",
      "C/C++",
      "PWM",
      "ADC",
    ],
    category: "Hardware & PCB Design",
    featured: true,
  },
  {
    id: 3,
    title: "Truck Distance Indicator",
    subtitle: "TFT Display — Truck-to-Truck Distance System",
    period: "Januari 2025 — Juni 2025",
    description:
      "Interface display TFT berbasis ESP32 untuk menampilkan jarak antar-truk secara real-time menggunakan data dari sensor radar. Dilengkapi PCB custom dan casing Fusion 360.",
    longDescription:
      "Mengembangkan sistem indikator jarak antar-truk berbasis ESP32 dengan display TFT. Sistem mengintegrasikan data radar untuk deteksi jarak real-time, didukung PCB custom yang dirancang menggunakan EasyEDA dan casing yang dimodelkan dengan Fusion 360.",
    images: ["/images/testbench_3d.png", "/images/testbench_mapping.png"],
    coverImage: "/images/testbench_3d.png",
    tech: [
      "ESP32",
      "TFT Display",
      "Radar Integration",
      "EasyEDA",
      "Fusion 360",
      "UART",
      "C/C++",
    ],
    category: "Hardware & PCB Design",
    featured: true,
  },
  {
    id: 4,
    title: "Wearable Human Activity Recognition",
    subtitle: "Ensemble Learning — TCN + GCN + ResNeXt + XGBoost",
    period: "Agustus 2025 — Juli 2026",
    description:
      "Sistem wearable HAR menggunakan 5 sensor IMU MPU6050 untuk mengklasifikasikan 11 kelas aktivitas dari dataset 104 subjek. Akurasi uji offline 98.73%, cross-subject 96.27%, real-time 90.31%.",
    longDescription:
      "Merancang sistem wearable HAR dengan 5 unit sensor IMU MPU6050 untuk mengklasifikasikan 11 kelas aktivitas (aktivitas harian, transisi postur, dan deteksi jatuh) dari dataset 104 subjek. Membangun pipeline ensemble learning yang menggabungkan TCN, GCN, dan ResNeXt dengan meta-learner XGBoost (stacking).",
    images: [],
    coverImage: "",
    tech: ["Python", "ESP8266", "MPU6050", "TCN", "GCN", "ResNeXt", "XGBoost"],
    category: "Machine Learning & IoT",
    featured: false,
  },
  {
    id: 5,
    title: "EVIORA Wearable Dataset",
    subtitle: "Human Activity Recognition Dataset — 104 Subjects",
    period: "Agustus 2025 — Juli 2026",
    description:
      "Dataset aktivitas manusia wearable melibatkan 104 partisipan dan 5 sensor MPU6050. Bertanggung jawab atas akuisisi data, pelabelan aktivitas, dan validasi sensor.",
    longDescription:
      "Berkontribusi dalam pembuatan dataset aktivitas manusia wearable 'EVIORA' yang melibatkan 104 partisipan dan 5 sensor MPU6050. Bertanggung jawab atas persiapan partisipan, pemasangan sensor, akuisisi data, pelabelan aktivitas, dan koordinasi sesi perekaman.",
    images: [],
    coverImage: "",
    tech: [
      "MPU6050",
      "ESP8266",
      "Python",
      "Data Acquisition",
      "Data Preprocessing",
      "Wearable Sensors",
    ],
    category: "Data Science & IoT",
    featured: false,
  },
  {
    id: 6,
    title: "ESP32-CAM RC Robot",
    subtitle: "Remote Controlled Robot with Live Camera Streaming",
    period: "April 2025",
    description:
      "Robot kendali jarak jauh berbasis ESP32-CAM yang dikendalikan via Wi-Fi dari smartphone, dengan streaming kamera real-time untuk navigasi dan pemantauan visual.",
    longDescription:
      "Mengembangkan robot kendali jarak jauh berbasis ESP32-CAM yang dikendalikan via Wi-Fi dari smartphone. Mengintegrasikan kontrol motor penggerak serta streaming kamera real-time untuk navigasi dan pemantauan visual.",
    images: [],
    coverImage: "",
    tech: [
      "ESP32-CAM",
      "C/C++",
      "Wi-Fi",
      "Camera Streaming",
      "Motor Control",
      "Embedded Systems",
    ],
    category: "Robotics & IoT",
    featured: false,
  },
];

export const skills = [
  {
    category: "PCB Design & Simulation",
    icon: "Circuit",
    items: [
      { name: "EasyEDA", level: 90 },
      { name: "Autodesk EAGLE", level: 80 },
      { name: "Proteus", level: 75 },
      { name: "Schematic Design", level: 90 },
      { name: "PCB Layout", level: 85 },
    ],
  },
  {
    category: "Microcontrollers & IoT",
    icon: "Cpu",
    items: [
      { name: "ESP32 / ESP32-S3", level: 92 },
      { name: "STM32", level: 75 },
      { name: "Arduino", level: 90 },
      { name: "ESP32-CAM", level: 80 },
      { name: "Blynk IoT", level: 70 },
    ],
  },
  {
    category: "Programming Languages",
    icon: "Code2",
    items: [
      { name: "C / C++", level: 88 },
      { name: "Python", level: 80 },
      { name: "Arduino IDE", level: 92 },
      { name: "STM32CubeIDE", level: 72 },
    ],
  },
  {
    category: "3D Design & CNC",
    icon: "Box",
    items: [
      { name: "Fusion 360", level: 80 },
      { name: "Tinkercad", level: 85 },
      { name: "Vectric Aspire", level: 65 },
    ],
  },
  {
    category: "Protocols & Interfaces",
    icon: "Wifi",
    items: [
      { name: "UART / I2C / SPI", level: 88 },
      { name: "Wi-Fi / HTTP", level: 85 },
      { name: "ADC / PWM", level: 90 },
      { name: "Sensor Integration", level: 88 },
    ],
  },
  {
    category: "Machine Learning",
    icon: "BrainCircuit",
    items: [
      { name: "Python (ML)", level: 75 },
      { name: "TensorFlow / Keras", level: 65 },
      { name: "XGBoost", level: 70 },
      { name: "Data Acquisition", level: 80 },
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: "TOEFL — PEPT (Paper-based)",
    issuer: "TOEFL PEPT",
    score: "Score: 450",
    date: "2024",
    image: "/images/toefl_cert.png",
    description:
      "Test of English as a Foreign Language — Paper-based English Proficiency Test",
  },
];

export const navLinks = [
  { label: "About", href: "#about", number: "01" },
  { label: "Education", href: "#education", number: "02" },
  { label: "Experience", href: "#experience", number: "03" },
  { label: "Projects", href: "#projects", number: "04" },
  { label: "Skills", href: "#skills", number: "05" },
  { label: "Contact", href: "#contact", number: "06" },
];
