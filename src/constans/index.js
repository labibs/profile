import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    inertia,
    vue,
    arroyanna,
    bimakarya,
    cashier,
    tailwind,
    nodejs,
    mongodb,
    git,
    laravel,
    mysql,
    bootstrap,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    jne,
    alfamart,
    shopify,
    carrent,
    jobit,
    tripguide,
    slip,
    request,
    login,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "#about",
        title: "About",
    },
    {
        id: "#portofolio",
        title: "Portofolio",
    },
    {
        id: "#contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: web,
    },
    
    {
        title: "Network Administrator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Laravel",
        icon: laravel,
    },
    {
        name: "Mysql",
        icon: mysql,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Inertia JS",
        icon: inertia,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
        name: "git",
        icon: git,
    },
    
    
];

const experiences = [
    {
        title: "Team Progress",
        company_name: "Alfamart",
        icon: alfamart,
        iconBg: "#383E56",
        date: "November 2012 - November 2015",
        points: [
            "Memastikan ketersediaan barang yang akan di ambil oleh team picker",
            "dan memastikan stock barang sehingga tidak terjadi selisih antara data stock dan barang yang ada di gudang",
            
        ],
    },
    {
        title: "Team Inbound",
        company_name: "JNE Cilacap",
        icon: jne,
        iconBg: "#E6DEDD",
        date: "November 2015 - Agustus 2017",
        points: [
            "Menerima barang kiriman dari cabang lain",
            "Menyortir per area pengantaran",
            "Menyiapkan dan memastikan barang sesui dengan data kiriman yang akan di kirim oleh kurir",
            
        ],
    },
    {
        title: "Human Capital & General Affair",
        company_name: "JNE Cilacap",
        icon: jne,
        iconBg: "#E6DEDD",
        date: "Agustus 2017 - Jan 2020",
        points: [
            "Managememnt Karyawan Dan Asset",
            "HC : Melakukan Proses Kekaryawanan meliputi psikotes, interview, training dan semua yang berhubungan dengan karyawan",
            "GA : Melakukan Proses Management Asset meliputi, pengadaan, pendataan, perawatan dan smua yang berhubungan dengan Asset",
            
        ],
    },
    {
        title: "IT",
        company_name: "JNE Cilacap",
        icon: jne,
        iconBg: "#E6DEDD",
        date: "Jan 2020 - Sekarang",
        points: [
            "Management System JNE",
            "IT : Melakukan support system yang di pakai untuk kelangsungan kerja di JNE dari mulai software sampai hardware"
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Dengan adanya website company profile, perusahaan jadi terlihat lebih profesional dan mempermudah untuk pencarian vendor dan karyawan",
        name: "Pak Imam",
        designation: "Manager",
        company: "PT. Bimakarya Kaloka",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Dengan adanya aplikasi POS jadi memudahkan dalam menganalisa profit dan memberi motivasi kepada customer dengan system point",
        name: "Mba Uus",
        designation: "Owner",
        company: "Warung Ayun Farhan",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Dengan adanya System Request Online jadi mempermudah dalam pemesanan dan pemantauan ATK agen, dan penangana GA juga jadi lebih tertib",
        name: "Retno Adi Nugroho",
        designation: "GA",
        company: "JNE Cilacap",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Slipgaji Online",
        description:
            
            "Web untuk cek slipgaji, absensi, masa kerja, tunjangan beras, BPJS Kesehatan dan BPJS Ketenagakerjaan secara online,  tersedia riwayat 12 bulan, dan export PDF untuk Slipgaji ",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: slip,
        source_code_link: "https://jne-cilacap.com/slip/public/login",
    },
    {
        name: "Jaringan & CCTV",
        description:
            "Instalasi Jaringan internet dengan teknologi Mikrotik dan SDWAN, dengan menerapkan MAC Filtering dan Login Wifi, serta Instalasi CCTV online bisa pantau lewat HP lewat Aplikasi Yoosee",
        tags: [
            {
                name: "Mikrotik",
                color: "blue-text-gradient",
            },
            {
                name: "SDWAN",
                color: "green-text-gradient",
            },
            {
                name: "IP Cam",
                color: "pink-text-gradient",
            },
        ],
        image: login,
        source_code_link: "http://wifijne.net/login?dst=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirect",
    },
    {
        name: "System Request",
        description:
            "Web untuk melayani Pemesanan ATK, Penanganan GA dan Penanganan IT, di sertai dashboard Realtime, Master Data Asset, Purchase Order, Management Stock ATK dan Laporan",
        tags: [
            {
                name: "Laravel",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: request,
        source_code_link: "https://jne-cilacap.com/pesan/public/backend/login",
    },
    {
        name: "Company Profile ",
        description:
            
            "Web company profile, yang dilengkapi dengan frontend dan backend, tersedia juga menu vendor dan career untuk memberi kesempatan kepada vendor memasukan penawaran untuk bekerja sama dan memasukan lamaran bagi karyawan untuk melamar posisi yang tersedia",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: bimakarya,
        source_code_link: "http://www.bimakaryakaloka.com/",
    },
    {
        name: "Aplikasi POS ( hybrid )",
        description:
            "Apliaksi Point of Sale atau aplikasi cashier, yang di rancang untuk tersedia offline maupun online, dengan di sertai point pada setiap belanja, laporan penjualan, laporan profit, peringatan stock di bawah 10, grafik barang terlaris dan grafik penjualan mingguan ",
        tags: [
            {
                name: "Inertia js",
                color: "blue-text-gradient",
            },
            {
                name: "vue js",
                color: "green-text-gradient",
            },
            {
                name: "Laravel",
                color: "pink-text-gradient",
            },
        ],
        image: cashier,
        source_code_link: "",
    },
    {
        name: "Website Sekolah",
        description:
            "Website profile sekolah yang di lengkapi dengan frontend dan backend, tersedia berbagai menu antara lain Berita, ekstrakurikuler, Visi & misi, pesan, kisah sukses alumni, program beasiswa, informasi dan tahap pendaftaran, tentang sekolah, dan kompetensi kelulusan",
        tags: [
            {
                name: "Laravel",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: arroyanna,
        source_code_link: "https://smkislamarroyyanna.sch.id/",
    },
];

export { services, technologies, experiences, testimonials, projects };