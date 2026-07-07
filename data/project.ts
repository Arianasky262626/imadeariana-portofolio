export interface Project {
  id: number;
  title: string;
  slug: string;

  category: string;
  year: string;

  role: string;
  client: string;

  description: string;

  problem: string;
  solution: string;
  result: string;

  cover: string;
  gallery: string[];

  technologies: string[];

  featured: boolean;
}

const project: Project[] = [
  {
    id: 1,

    title: "AIThink Academy",

    slug: "aithink-academy",

    category: "AI Education",

    year: "2026",

    role: "Founder • Product Designer • AI Developer",

    client: "Personal Project",

    description:
      "Platform pembelajaran Artificial Intelligence yang membantu mahasiswa berpikir lebih kritis dan memanfaatkan AI secara bertanggung jawab.",

    problem:
      "Banyak mahasiswa menggunakan AI hanya untuk menyalin jawaban tanpa memahami konsep yang dipelajari.",

    solution:
      "Membangun platform AI yang berfokus pada proses berpikir, bukan sekadar menghasilkan jawaban instan.",

    result:
      "Menghasilkan konsep platform edukasi modern dengan pendekatan pembelajaran berbasis AI yang lebih etis dan efektif.",

    cover: "/images/projects/aithink/cover.jpg",

    gallery: [
      "/images/projects/aithink/1.jpg",
      "/images/projects/aithink/2.jpg",
      "/images/projects/aithink/3.jpg",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI",
      "UI/UX",
    ],

    featured: true,
  },

  {
    id: 3,

    title: "Satria Madura",

    slug: "satria-madura",

    category: "Digital Marketing",

    year: "2025",

    role: "Project Manager • Content Strategist",

    client: "CV Bhumi Blambangan Sakti",

    description:
      "Strategi digital marketing untuk meningkatkan performa penjualan melalui konten organik dan optimasi marketplace.",

    problem:
      "Brand memiliki performa digital yang rendah dan belum memiliki strategi konten yang konsisten.",

    solution:
      "Menyusun strategi konten, optimasi marketplace, serta pengembangan branding digital.",

    result:
      "Terjadi peningkatan engagement, traffic, dan penjualan melalui konten organik.",

    cover: "/images/projects/satria/cover.jpg",

    gallery: [
      "/images/projects/satria/1.jpg",
      "/images/projects/satria/2.jpg",
      "/images/projects/satria/3.jpg",
    ],

    technologies: [
      "Content Strategy",
      "SEO",
      "TikTok",
      "Shopee",
      "Digital Marketing",
    ],

    featured: true,
  },

  {
    id: 4,

    title: "Nyicil UTBK",

    slug: "nyicil-utbk",

    category: "Education Platform",

    year: "2025",

    role: "Product Strategist",

    client: "Personal Project",

    description:
      "Platform belajar UTBK berbasis sistem belajar bertahap yang dirancang untuk meningkatkan konsistensi belajar siswa.",

    problem:
      "Banyak siswa gagal menjaga konsistensi belajar menjelang UTBK.",

    solution:
      "Merancang metode belajar harian yang sederhana dan mudah diikuti.",

    result:
      "Konsep platform edukasi yang berfokus pada pembentukan kebiasaan belajar.",

    cover: "/images/projects/nyicil/cover.jpg",

    gallery: [
      "/images/projects/nyicil/1.jpg",
      "/images/projects/nyicil/2.jpg",
      "/images/projects/nyicil/3.jpg",
    ],

    technologies: [
      "Product Strategy",
      "Education",
      "UI Design",
    ],

    featured: false,
  },

  {
    id: 5,

    title: "Personal Portfolio",

    slug: "personal-portfolio",

    category: "Web Development",

    year: "2026",

    role: "Frontend Developer • UI Designer",

    client: "Personal",

    description:
      "Website portfolio modern yang menampilkan pengalaman, karya, dan personal branding secara profesional.",

    problem:
      "Membutuhkan media yang mampu merepresentasikan kemampuan multidisiplin dalam satu platform.",

    solution:
      "Membangun portfolio modern menggunakan Next.js, React, TypeScript, dan Tailwind CSS.",

    result:
      "Portfolio yang cepat, responsif, dan mudah dikembangkan sebagai personal branding jangka panjang.",

    cover: "/images/projects/portfolio/cover.jpg",

    gallery: [
      "/images/projects/portfolio/1.jpg",
      "/images/projects/portfolio/2.jpg",
      "/images/projects/portfolio/3.jpg",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    featured: true,
  },
];

export default project;