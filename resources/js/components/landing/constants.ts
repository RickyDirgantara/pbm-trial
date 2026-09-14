/* Content, data tables and shared constants for the Full Bright TOEFL landing page. */

/** Prefilled WhatsApp messages. The number itself comes from WHATSAPP_NUMBER via page props. */
export const WA_MESSAGES = {
    selfStudy:
        'Halo Admin Full Bright Indonesia. Saya minat mau daftar E-Course Self-Study LMS.',
    starter:
        'Halo Admin Full Bright Indonesia. Saya minat mau daftar kelas TOEFL Level Starter',
    bundling:
        'Halo Admin Full Bright Indonesia. Saya minat mau daftar paket HEMAT TOEFL Level Starter + Intermediate.',
    intermediate:
        'Halo Admin Full Bright Indonesia. Saya minat mau daftar kelas TOEFL Level Intermediate.',
    consult:
        'Halo Admin Full Bright Indonesia. Saya minat mau daftar kelas TOEFL. Saya mau tanya-tanya dulu.',
    floating:
        'Halo Admin Full Bright Indonesia. Saya tertarik daftar kelas TOEFL Online.',
} as const;

export function initialMode(): PricingMode {
    try {
        return new URLSearchParams(window.location.search).get('mode') ===
            'tutor'
            ? 'tutor'
            : 'self';
    } catch {
        return 'self';
    }
}

export type PricingMode = 'self' | 'tutor';

export const WA_SCREENSHOTS: { src: string; score: string }[] = [
    { src: '/assets/toefl1.webp', score: '547' },
    { src: '/assets/toefl2.webp', score: '543' },
    { src: '/assets/toefl3.webp', score: '563' },
    { src: '/assets/toefl4.webp', score: '560' },
    { src: '/assets/toefl5.webp', score: '507' },
    { src: '/assets/toefl6.webp', score: '513' },
    { src: '/assets/toefl7.webp', score: '537' },
    { src: '/assets/toefl9.webp', score: '560' },
];

/** Logo marquee: the list is rendered twice so the CSS translateX(-50%) loop is seamless. */
const ALUMNI_UNIVERSITY_LOGOS: { src: string; name: string }[] = [
    { src: '/assets/logos/ui.png', name: 'Universitas Indonesia' },
    { src: '/assets/logos/itb.png', name: 'Institut Teknologi Bandung' },
    { src: '/assets/logos/ugm.webp', name: 'Universitas Gadjah Mada' },
    { src: '/assets/logos/ipb.png', name: 'IPB University' },
    { src: '/assets/unair.png', name: 'Universitas Airlangga' },
    {
        src: 'https://www.unpad.ac.id/wp-content/uploads/2025/12/logo-unpad-duo.svg',
        name: 'Universitas Padjadjaran',
    },
    {
        src: '/assets/logos/its.png',
        name: 'Institut Teknologi Sepuluh Nopember',
    },
    { src: '/assets/logos/undip.png', name: 'Universitas Diponegoro' },
    { src: '/assets/logos/nottingham.png', name: 'University of Nottingham' },
    { src: '/assets/logos/stuttgart.png', name: 'Universität Stuttgart' },
];
export const ALUMNI_UNIVERSITIES: { src: string; name: string }[] = [
    ...ALUMNI_UNIVERSITY_LOGOS,
    ...ALUMNI_UNIVERSITY_LOGOS,
];

/** Score strip: duplicated so the CSS translateX(-50%) marquee loops seamlessly. */
export const SCORE_MARQUEE: { src: string; score: string }[] = [
    ...WA_SCREENSHOTS,
    ...WA_SCREENSHOTS,
];

export const REVIEW_COUNT = 19;
export const reviewSrc = (i: number): string =>
    `/assets/Riview (${i + 1}).webp`;

/** Mirrors the visible option labels; used only for analytics labelling. */
export const SURVEY_OPTIONS: string[] = [
    'Bingung mulai belajar dari mana',
    'Sudah belajar tapi skor masih stuck',
    'Masih ragu apakah perlu ikut kursus',
    'Lainnya',
];

export const RETURN_OPTIONS: string[] = [
    'Harganya masih terlalu mahal buatku',
    'Belum yakin bisa mencapai target TOEFL-ku',
    'Belum yakin program ini cocok untuk kebutuhanku',
    'Masih membandingkan dengan program lain',
];

export const RETURN_WA_MSGS: string[] = [
    'Halo Admin Full Bright Indonesia. Saya mau konsultasi soal paket dan harga sebelum daftar.',
    'Halo Admin Full Bright Indonesia. Saya mau konsultasi soal metode belajar dan hasil yang bisa dicapai sebelum daftar.',
    'Halo Admin Full Bright Indonesia. Saya mau konsultasi apakah program ini cocok dengan kebutuhan saya sebelum daftar.',
    'Halo Admin Full Bright Indonesia. Saya masih membandingkan dengan program lain, mau tanya-tanya dulu.',
];

export const RETURN_SUBTEXTS: string[] = [
    'Ada yang ingin ditanyakan soal harga atau paket?',
    'Mau tahu apakah program ini cocok untuk target skor kamu?',
    'Konsultasikan dulu apakah program ini cocok untukmu.',
    'Masih membandingkan? Tanya tim kami tentang programnya.',
];

export const FAQ_CATEGORIES: string[] = [
    'Belajar Mandiri (LMS)',
    'Metode & Efektivitas',
    'Dibimbing Tutor',
    'Sertifikat & Legalitas',
    'Pendaftaran & Pembayaran',
    'Jaminan & Garansi',
];

export const FAQ_ITEM_CATEGORIES: string[] = [
    'Belajar Mandiri (LMS)',
    'Belajar Mandiri (LMS)',
    'Belajar Mandiri (LMS)',
    'Belajar Mandiri (LMS)',
    'Belajar Mandiri (LMS)',
    'Metode & Efektivitas',
    'Metode & Efektivitas',
    'Metode & Efektivitas',
    'Metode & Efektivitas',
    'Metode & Efektivitas',
    'Dibimbing Tutor',
    'Dibimbing Tutor',
    'Dibimbing Tutor',
    'Sertifikat & Legalitas',
    'Sertifikat & Legalitas',
    'Pendaftaran & Pembayaran',
    'Jaminan & Garansi',
];

/** Navbar row height; the urgency banner above it is measured at runtime. */
export const NAVBAR_HEIGHT = 64;

export const KEYFRAMES = `
  @keyframes infiniteScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes fbFadeInUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fbSheetUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
  @keyframes heroBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }

  /* Base rules live in a layer so Tailwind utility classes (also layered)
     can override them — e.g. per-link colors must beat the global a rule. */
  @layer base {
    body { margin: 0; font-family: 'Nunito', system-ui, sans-serif; }
    h1, h2, h3, h4, h5, h6, p, span, div, li, a, button, input, select, textarea, ul, ol, strong, b, em, i, label { font-family: 'Nunito', system-ui, sans-serif; }
    a { color: #D70808; }
    a:hover { color: #b30606; }
    /* Keep anchor targets clear of the sticky urgency banner + navbar */
    section[id], div[id] { scroll-margin-top: 120px; }
  }
`;
