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
      "Platform edukasi berbasis AI yang membantu mahasiswa memahami konsep pembelajaran melalui pendekatan interaktif dan etis. Seluruh aktivitas pemasaran digital dilakukan secara berbasis data dengan memanfaatkan analisis Instagram Insights untuk mengidentifikasi performa konten, perilaku audiens, waktu unggah yang optimal, serta tren yang berpotensi meningkatkan jangkauan organik.",

    problem:
      "interaksi ini berdampak pada terbatasnya distribusi organik oleh algoritma Instagram sehingga pertumbuhan akun, peningkatan brand awareness, dan kemampuan menjangkau calon pengguna baru menjadi kurang optimal. Setelah dilakukan evaluasi terhadap konten yang dipublikasikan, ditemukan beberapa faktor yang berkontribusi terhadap rendahnya engagement. Konten belum dioptimalkan berdasarkan karakteristik algoritma Instagram, baik dari sisi pemilihan topik, penyusunan hook, kualitas visual, copywriting, penggunaan hashtag, maupun format konten yang sedang diminati audiens. Selain itu, belum terdapat content pillar yang jelas sehingga materi yang dipublikasikan masih kurang konsisten dalam menjawab kebutuhan mahasiswa tingkat akhir sebagai target utama Aithink Academy. Akibatnya, sebagian besar konten memperoleh jumlah views, likes, comments, shares, dan saves yang relatif rendah. Rendahnya interaksi ini berdampak pada terbatasnya distribusi organik oleh algoritma Instagram sehingga pertumbuhan akun, peningkatan brand awareness, dan kemampuan menjangkau calon pengguna baru menjadi kurang optimal. Oleh karena itu, diperlukan penyusunan strategi content marketing yang lebih terarah, berbasis data, dan berorientasi pada kebutuhan audiens agar mampu meningkatkan reach, engagement, serta memperkuat posisi Aithink Academy sebagai platform edukasi AI bagi mahasiswa tingkat akhir.",

    solution:
      "Untuk mengatasi rendahnya reach dan engagement, strategi pemasaran difokuskan pada peningkatan nilai (value) yang diterima audiens sebelum melakukan promosi produk. Pendekatan ini menerapkan prinsip reciprocity, yaitu memberikan manfaat secara gratis kepada calon pengguna sehingga mendorong mereka untuk berinteraksi, mengikuti akun, serta membangun kepercayaan terhadap Aithink Academy. Strategi utama yang diterapkan adalah membagikan berbagai sumber daya gratis yang relevan dengan kebutuhan mahasiswa tingkat akhir, seperti template, panduan penggunaan AI, prompt siap pakai, dan materi pendukung penyusunan skripsi. Seluruh konten dirancang untuk menyelesaikan permasalahan nyata yang dihadapi target audiens sehingga memiliki nilai yang tinggi dan mendorong pengguna untuk menyimpan maupun membagikan konten. Untuk mengotomatisasi proses distribusi, digunakan ManyChat yang diintegrasikan dengan Instagram. Audiens dapat memperoleh produk gratis hanya dengan memberikan komentar menggunakan kata kunci tertentu atau mengirimkan direct message (DM). Setelah interaksi dilakukan, ManyChat secara otomatis mengirimkan tautan unduhan serta mengarahkan pengguna untuk mengikuti akun dan melanjutkan percakapan melalui DM. Mekanisme ini tidak hanya meningkatkan interaksi pada setiap unggahan, tetapi juga memperluas distribusi organik karena algoritma Instagram mendeteksi tingginya aktivitas komentar dan pesan. Selain implementasi ManyChat, strategi konten juga dioptimalkan melalui penyusunan content pillar yang berfokus pada mahasiswa tingkat akhir, penggunaan hook yang kuat pada beberapa detik pertama, copywriting yang berorientasi pada masalah audiens, serta pemanfaatan format Reels dan carousel yang memiliki potensi jangkauan lebih tinggi. Hasil implementasi strategi tersebut menunjukkan peningkatan performa akun secara signifikan. Dalam waktu sekitar satu bulan, jumlah pengikut Instagram Aithink Academy meningkat menjadi lebih dari 13.000 followers. Pertumbuhan ini didukung oleh meningkatnya interaksi pengguna terhadap konten, distribusi organik yang lebih luas, serta efektivitas sistem otomatisasi ManyChat dalam mengubah audiens yang tertarik menjadi pengikut baru dan calon pengguna platform.",

    result:
      "Singkat padat, saya bisa membuat followersnya menjadi 13K dalam 1 bulan. dan mendapatkan penjualan produk digital senilai 700k",

    cover: "/images/projects/aithink/cover.jpg",

    gallery: [
      "/images/projects/aithink/cover.jpg",
      "/images/projects/aithink/2.jpg",
      "/images/projects/aithink/3.jpg",
    ],

    technologies: [
      "Lynk.id",
      "Google Trends",
      "Manychat",
      "ChatGPT",
      "Instagram",
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