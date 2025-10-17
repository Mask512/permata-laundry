import logoImg from "@/app/assets/images/logo.png";
import heroImg from "@/app/assets/images/hero-image.png";
import partner1 from "@/app/assets/images/brands-logo/partner-1.png";
import partner2 from "@/app/assets/images/brands-logo/partner-2.png";
import partner3 from "@/app/assets/images/brands-logo/partner-3.png";
import partner4 from "@/app/assets/images/brands-logo/partner-4.png";
import partner5 from "@/app/assets/images/brands-logo/partner-5.png";
import aboutImg from "@/app/assets/images/about-image.png";
import { Sparkles, Clock, Shirt } from "lucide-react";
import bedCoverImg from "@/app/assets/images/services/bed-cover.jpg";
import bonekaImg from "@/app/assets/images/services/boneka.jpg";
import dryImg from "@/app/assets/images/services/dry.png";
import expressImg from "@/app/assets/images/services/express.png";
import karpetImg from "@/app/assets/images/services/karpet.jpg";
import pickupImg from "@/app/assets/images/services/pickup.png";
import satuanImg from "@/app/assets/images/services/satuan.png";
import sepatuImg from "@/app/assets/images/services/sepatu.jpg";
import setrikaImg from "@/app/assets/images/services/setrika.jpg";
import { StaticImageData } from "next/image";
import smileImg from "@/app/assets/images/smile.jpg";

export const info = {
  name: "Permata Laundry",
  address:
    "Jl. Mancagar No.2a, Cipedes, Kec. Cipedes, Kab. Tasikmalaya,Jawa Barat 46133",
  phoneNumber: "6282119931767",
};

// NAVBAR

export const logoImage = {
  url: "/",
  src: logoImg,
  alt: "Logo Permata Laundry",
  title: "Permata Laundry",
};

export const navbarMenus = [
  { title: "Home", url: "/#" },
  {
    title: "Tentang Kami",
    url: "#about-us",
  },
  {
    title: "Layanan",
    url: "#services",
    // items: [
    //   {
    //     title: "Help Center",
    //     description: "Get all the answers you need right here",
    //     icon: <Zap className="size-5 shrink-0" />,
    //     url: "#",
    //   },
    //   {
    //     title: "Contact Us",
    //     description: "We are here to help you with any questions you have",
    //     icon: <Sunset className="size-5 shrink-0" />,
    //     url: "#",
    //   },
    //   {
    //     title: "Status",
    //     description: "Check the current status of our services and APIs",
    //     icon: <Trees className="size-5 shrink-0" />,
    //     url: "#",
    //   },
    //   {
    //     title: "Terms of Service",
    //     description: "Our terms and conditions for using our services",
    //     icon: <Book className="size-5 shrink-0" />,
    //     url: "#",
    //   },
    // ],
  },
  {
    title: "Kontak Kami",
    url: "#location",
  },
];

// HERO

export const hero = {
  badge: "✨ FRESH - FAST - CLEAN",
  heading: "Biar Kami yang Nge-laundry, Kamu Fokus ke Hal Penting",
  description:
    "Dari jemput sampai antar, semua kami tangani — kamu tinggal terima pakaian bersih dan wangi.",
  buttons: {
    primary: {
      text: "Pesan sekarang",
      url: "/#",
    },
    secondary: {
      text: "Lihat Layanan",
      url: "#services",
    },
  },
  bgImage: {
    src: "/images/hero-background.jpg",
    alt: "Hero Image",
  },
  image: {
    src: heroImg,
    alt: "Hero Image",
  },
};

// PARTNERS
export const partners = {
  heading: "MITRA KAMI",
  description: "Join agar logo anda tampil disini.",
  brands: [
    { src: partner1, alt: "Brand 1" },
    { src: partner2, alt: "Brand 2" },
    { src: partner3, alt: "Brand 3" },
    { src: partner4, alt: "Brand 4" },
    { src: partner5, alt: "Brand 5" },
  ],
};

// ABOUT US
export const aboutUs = {
  heading: "Tentang Kami",
  subheading: "Laundry Praktis untuk Gaya Hidup Masa Kini",
  description:
    "Di Permata Laundry, kami percaya mencuci pakaian nggak harus repot. Dengan dukungan teknologi modern, tim berpengalaman, dan layanan antar-jemput yang tepat waktu, kami bantu kamu menghemat waktu tanpa mengorbankan kebersihan dan kualitas.",
  image: {
    src: aboutImg,
    alt: "About Us Image",
  },
  points: [
    {
      icon: Sparkles,
      title: "FRESH",
      description:
        "Pakaian dicuci dengan penuh perhatian dan dilipat rapi, siap dipakai kapan saja.",
    },
    {
      icon: Clock,
      title: "FAST",
      description:
        "Kami tahu waktu Anda berharga, jadi kami jaga setiap janji pengantaran.",
    },
    {
      icon: Shirt,
      title: "CLEAN",
      description: "Setiap pakaian dirawat dengan standar kebersihan tinggi.",
    },
    // {
    //   icon: Shirt,
    //   title: "Cuci Bersih, Wangi, dan Rapi",
    //   description: "Setiap pakaian dirawat dengan standar tinggi.",
    // },
    // {
    //   icon: CreditCard,
    //   title: "Pembayaran Mudah",
    //   description: "Bisa bayar tunai, transfer, atau e-wallet.",
    // },
    // {
    //   icon: Clock,
    //   title: "Tepat Waktu",
    //   description:
    //     "Kami tahu waktu Anda berharga, jadi kami jaga setiap janji pengantaran.",
    // },
  ],
};

// HOW IT WORKS

export const howItWorks = {
  heading: "Proses Layanan Kami",
  subheading: "Layanan Laundry dalam Empat Langkah Mudah",
  description:
    "Mencuci pakaian kini semudah ini! Ikuti empat langkah sederhana berikut dan nikmati pakaian bersih dan wangi tanpa repot.",
  steps: [
    {
      index: 1,
      title: "Jadwalkan Penjemputan",
      description:
        "Pilih waktu dan lokasi yang kamu inginkan. Kami akan datang tepat waktu untuk mengambil cucianmu.",
    },
    {
      index: 2,
      title: "Kami Ambil Cucianmu",
      description:
        "Tim kami mengambil cucianmu dengan aman dan memberi label agar proses pencucian akurat dan tertata.",
    },
    {
      index: 3,
      title: "Cuci & Lipat",
      description:
        "Pakaian dicuci, dikeringkan, dan dilipat rapi dengan detergen aman serta mesin bersih.",
    },
    {
      index: 4,
      title: "Diantar Kembali",
      description:
        "Cucianmu dikembalikan dalam keadaan bersih, lembut, dan siap pakai — tepat waktu.",
    },
  ],
};

// SERVICES

export interface Service {
  title: string;
  summary: string;
  image: StaticImageData;
}

export const services = {
  heading: "Layanan Kami",
  subheading: "Layanan yang Pas Buat Kamu",
  description:
    "Dari pakaian harian sampai perawatan khusus, Permata Laundry siap bantu biar urusan cucian kamu selalu beres — cepat, rapi, dan tanpa drama.",
  servicesList: [
    {
      image: expressImg,
      title: "Cuci Express",
      summary:
        "Untuk kamu yang butuh pakaian bersih dan rapi dalam waktu singkat — cepat, wangi, dan siap pakai.",
    },
    {
      image: satuanImg,
      title: "Cuci Satuan",
      summary:
        "Layanan ideal untuk pakaian kerja atau bahan khusus. Kami rawat satu per satu agar hasilnya maksimal.",
    },
    {
      image: pickupImg,
      title: "Antar Jemput",
      summary:
        "Layanan praktis tanpa repot. Kami ambil, cuci, dan antar kembali pakaianmu tepat waktu.",
    },
    {
      image: karpetImg,
      title: "Cuci Karpet",
      summary:
        "Bersihkan karpet dari debu dan noda membandel dengan perawatan profesional. Hasilnya wangi, higienis, dan lembut di kaki.",
    },
    {
      image: sepatuImg,
      title: "Cuci Sepatu",
      summary:
        "Dari sneakers sampai sepatu kulit — kami bersihkan dengan teknik yang aman tanpa merusak bahan.",
    },
    {
      image: bedCoverImg,
      title: "Cuci Bed Cover",
      summary:
        "Layanan khusus untuk bed cover dan sprei besar. Bersih menyeluruh, bebas tungau, dan tetap lembut setelah dicuci.",
    },
    {
      image: dryImg,
      title: "Dry Cleaning",
      summary:
        "Perawatan premium untuk pakaian formal, jas, kebaya, dan bahan sensitif. Tanpa air, tanpa risiko kusut atau susut.",
    },
    {
      image: setrikaImg,
      title: "Setrika Saja",
      summary:
        "Buat kamu yang sudah mencuci sendiri tapi pengin hasil rapi dan wangi tanpa repot menyetrika.",
    },
    {
      image: bonekaImg,
      title: "Cuci Boneka",
      summary:
        "Boneka kesayangan dicuci dengan lembut dan aman, tanpa merusak bentuk atau warna aslinya.",
    },
  ],
};

// TESTIMONIAL

export const testimonials = {
  heading: "Kepuasan Pelanggan",
  subheading: "Apa yang Mereka Katakan Tentang Layanan Kami",
  description:
    "Lupakan stres karena cucian menumpuk. Permata Laundry menjemput, mencuci, dan mengantarkan pakaian Anda dalam kondisi bersih, segar, dan siap pakai — supaya Anda bisa fokus pada hal yang lebih penting.",
  image: {
    src: smileImg,
    alt: "Happy Customer Image",
  },
  list: [
    {
      id: 1,
      name: "Agus Pratama",
      profession: "Karyawan Swasta",
      avatar: "/avatar.svg",
      quote:
        "Layanan antar-jemput laundry dari Permata Laundry benar-benar memudahkan. Pakaian saya selalu bersih, wangi, dan dilipat rapi tanpa perlu keluar rumah.",
    },
    {
      id: 2,
      name: "Sinta Dewi",
      profession: "Ibu Rumah Tangga",
      avatar: "/avatar.svg",
      quote:
        "Sprei dan bed cover keluarga saya selalu bersih seperti baru. Permata Laundry jadi andalan setiap minggu — cepat dan hasilnya memuaskan.",
    },
    {
      id: 3,
      name: "Rizky Aditya",
      profession: "Mahasiswa",
      avatar: "/avatar.svg",
      quote:
        "Hemat waktu banget! Tinggal jadwalkan penjemputan, dan dua hari kemudian semua pakaian udah balik dalam keadaan bersih dan wangi.",
    },
    {
      id: 4,
      name: "Lina Oktaviani",
      profession: "Pemilik Butik",
      avatar: "/avatar.svg",
      quote:
        "Dry clean-nya top! Bahan halus dan pakaian formal pelanggan saya tetap terjaga kualitasnya. Sangat direkomendasikan.",
    },
    {
      id: 5,
      name: "Bayu Rahman",
      profession: "Guru",
      avatar: "/avatar.svg",
      quote:
        "Saya suka pelayanan yang ramah dan profesional. Permata Laundry selalu tepat waktu dan hasil cucinya konsisten bersih.",
    },
  ],
};

// LOCATION

export const location = {
  heading: "Lokasi Kami",
  address:
    "Jl. Mancagar No.2a, Cipedes, Kec. Cipedes, Kab. Tasikmalaya,Jawa Barat 46133",
  phoneNumber: "+62 821-1993-1767",
  tagline: "FRESH | FAST | CLEAN",
  name: "Permata Laundry",
};
