import { useCallback, useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { FAQ_CATEGORIES, WA_MESSAGES } from './constants';
import {
    catBtnStyle,
    css,
    faqChevStyle,
    faqItemStyle,
    faqQStyle,
} from './styles';

export function FaqSection({ waUrl }: { waUrl: (text: string) => string }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeCat, setActiveCat] = useState<string | null>(null);

    const toggleCat = useCallback(
        (i: number): void =>
            setActiveCat((cur) =>
                cur === FAQ_CATEGORIES[i] ? null : FAQ_CATEGORIES[i],
            ),
        [],
    );

    return (
        <>
            <section
                id="faq"
                className="[padding:80px_24px_48px] [background:#F3F3F3]"
            >
                <div className="[margin:0_auto] [max-width:1152px]">
                    <div className="[margin-bottom:56px] [text-align:center]">
                        <div className="[margin-bottom:20px] [display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                            ❓ Masih Ragu?
                        </div>
                        <h2 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [color:#151515]">
                            Apakah Kamu Benar-Benar{' '}
                            <span className="[color:#D70808]">
                                Butuh Ini Sekarang?
                            </span>
                        </h2>
                    </div>

                    <div className="[margin-bottom:32px] [display:flex] [flex-wrap:wrap] [justify-content:center] [gap:8px]">
                        <button
                            onClick={() => setActiveCat(null)}
                            style={css(catBtnStyle(activeCat === null))}
                        >
                            Semua
                        </button>

                        <button
                            onClick={() => toggleCat(0)}
                            style={css(
                                catBtnStyle(activeCat === FAQ_CATEGORIES[-1]),
                            )}
                        >
                            Belajar Mandiri (LMS)
                        </button>

                        <button
                            onClick={() => toggleCat(1)}
                            style={css(
                                catBtnStyle(activeCat === FAQ_CATEGORIES[-1]),
                            )}
                        >
                            Metode &amp; Efektivitas
                        </button>

                        <button
                            onClick={() => toggleCat(2)}
                            style={css(
                                catBtnStyle(activeCat === FAQ_CATEGORIES[-1]),
                            )}
                        >
                            Dibimbing Tutor
                        </button>

                        <button
                            onClick={() => toggleCat(3)}
                            style={css(
                                catBtnStyle(activeCat === FAQ_CATEGORIES[-1]),
                            )}
                        >
                            Sertifikat &amp; Legalitas
                        </button>

                        <button
                            onClick={() => toggleCat(4)}
                            style={css(
                                catBtnStyle(activeCat === FAQ_CATEGORIES[-1]),
                            )}
                        >
                            Pendaftaran &amp; Pembayaran
                        </button>

                        <button
                            onClick={() => toggleCat(5)}
                            style={css(
                                catBtnStyle(activeCat === FAQ_CATEGORIES[-1]),
                            )}
                        >
                            Jaminan &amp; Garansi
                        </button>
                    </div>

                    <div className="[margin:0_auto_48px] [max-width:768px] [border-radius:24px] [padding:0_28px] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)] [background:#fff]">
                        <div style={css(faqItemStyle(activeCat, 0))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 0 ? null : 0)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 0))}>
                                    Kalau ambil paket Self-Study LMS, apa saja
                                    yang saya dapat?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 0))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 0 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Kamu dapat akses penuh ke LMS Full
                                            Bright: 60+ video materi Full Skills
                                            (Listening, Structure, Reading),
                                            materi terstruktur hari ke-1 sampai
                                            ke-15, 1.000+ nomor latihan soal
                                            beserta pembahasan, diagnostic test,
                                            simulasi dan post test full skills,
                                            serta grup WA diskusi. Semua bisa
                                            diakses kapan saja tanpa terikat
                                            jadwal kelas.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 1))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 1 ? null : 1)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 1))}>
                                    Bagaimana cara akses LMS setelah saya bayar?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 1))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 1 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Setelah pembayaran berhasil, kamu
                                            langsung menerima email berisi link
                                            dan akun untuk masuk ke platform LMS
                                            Full Bright. Akses berlaku 2 tahun
                                            dan bisa dibuka dari HP maupun
                                            laptop, kapan pun kamu punya waktu.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 2))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 2 ? null : 2)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 2))}>
                                    Saya belajar sendiri di LMS. Kalau bingung,
                                    bisa tanya ke siapa?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 2))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 2 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Kamu tetap tidak belajar sendirian.
                                            Setiap peserta LMS masuk ke grup WA
                                            diskusi, jadi kalau ada soal atau
                                            materi yang bikin bingung, kamu bisa
                                            langsung bertanya dan dibantu. Ini
                                            bedanya dengan belajar otodidak dari
                                            YouTube — di sana tidak ada yang
                                            menjawab kalau kamu stuck.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 3))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 3 ? null : 3)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 3))}>
                                    Apakah bisa dicoba dulu sebelum bayar?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 3))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 3 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Bisa. Tersedia free trial LMS dengan
                                            akses 1 modul agar kamu bisa
                                            merasakan sendiri kualitas video
                                            materi dan latihan soalnya sebelum
                                            memutuskan. Kalau cocok, tinggal
                                            lanjut ambil paketnya.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 4))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 4 ? null : 4)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 4))}>
                                    Apakah bisa belajar tanpa terikat jadwal
                                    karena saya sibuk?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 4))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 4 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Justru itu kelebihan paket belajar
                                            mandiri: tidak ada jam kelas yang
                                            harus dikejar. Semua materi tersedia
                                            di LMS 24/7 dan bisa diulang berapa
                                            kali pun. Banyak alumni kami
                                            karyawan, PNS aktif, dan mahasiswa
                                            tingkat akhir yang belajar di
                                            sela-sela kesibukan.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 5))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 5 ? null : 5)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 5))}>
                                    Apakah metode ini cocok untuk pemula yang
                                    grammar-nya sangat lemah?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 5))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 5 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Sangat cocok. Materi disusun dari
                                            level dasar dan berurutan hari ke-1
                                            sampai ke-15, jadi kamu tidak perlu
                                            grammar sempurna untuk memulai.
                                            Fokusnya bukan menguasai semua tata
                                            bahasa Inggris, tapi mengenali pola
                                            soal yang benar-benar keluar di
                                            TOEFL ITP.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 6))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 6 ? null : 6)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 6))}>
                                    Kenapa belajar di sini beda dengan belajar
                                    sendiri dari buku dan YouTube?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 6))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 6 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Dua hal yang paling sering bikin
                                            belajar otodidak gagal: materinya
                                            tidak terstruktur dan tidak ada yang
                                            bisa ditanya kalau salah. Di Full
                                            Bright, materi sudah berurutan dan
                                            fokus ke pola soal TOEFL, setiap
                                            latihan ada pembahasannya, dan ada
                                            grup diskusi untuk bertanya.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 7))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 7 ? null : 7)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 7))}>
                                    Berapa kenaikan skor yang bisa saya
                                    harapkan?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 7))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 7 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Berdasarkan data alumni, peserta
                                            yang mengikuti materi secara
                                            konsisten dan mengerjakan semua bank
                                            soal rata-rata naik 80–100 poin.
                                            Yang paling banyak dirasakan alumni
                                            adalah jadi paham pola soal TOEFL,
                                            dan dari situ skornya ikut naik.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 8))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 8 ? null : 8)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 8))}>
                                    Apakah dijamin bisa mencapai skor 500?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 8))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 8 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Kami tidak menjanjikan skor 500
                                            secara mutlak karena hasil
                                            tergantung konsistensi masing-masing
                                            peserta. Yang bisa kami jamin:
                                            metode yang sudah terbukti pada
                                            45.000+ alumni, materi yang fokus
                                            dan terstruktur, serta pendampingan
                                            selama program.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 9))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 9 ? null : 9)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 9))}>
                                    Apakah ada batasan usia untuk mengikuti
                                    program ini?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 9))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 9 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Program terbuka untuk usia 17 hingga
                                            45 tahun. Cocok untuk pelajar,
                                            mahasiswa, fresh graduate, maupun
                                            karyawan yang butuh skor TOEFL untuk
                                            studi, karir, atau beasiswa.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 10))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 10 ? null : 10)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 10))}>
                                    Apa bedanya paket Dibimbing Tutor dengan
                                    Self-Study LMS?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 10))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 10 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Semua materi LMS tetap kamu dapat.
                                            Tambahannya khusus di paket
                                            Dibimbing Tutor: LIVE ZOOM 15 hari
                                            bersama instruktur, rekaman ZOOM,
                                            dan sertifikat TOEFL Prediction.
                                            Cocok kalau kamu merasa lebih
                                            terbantu dengan penjelasan langsung
                                            dan tempo belajar yang dipandu.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 11))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 11 ? null : 11)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 11))}>
                                    Kapan jadwal LIVE ZOOM-nya dan apakah bisa
                                    dipilih?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 11))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 11 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Khusus paket Dibimbing Tutor.
                                            Tersedia 5 pilihan sesi harian: •
                                            Pagi (09.00 – 10.00 WIB) • Siang
                                            (13.00 – 14.00 WIB) • Sore (16.00 –
                                            17.00 WIB) • Malam (19.00 – 20.00
                                            WIB) • Malam (20.15 – 21.15 WIB)
                                            Catatan: Jika berhalangan hadir LIVE
                                            ZOOM, jangan khawatir — materi bisa
                                            diakses di rekaman ZOOM.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 12))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 12 ? null : 12)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 12))}>
                                    Kalau saya tidak bisa hadir LIVE ZOOM,
                                    bagaimana?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 12))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 12 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Khusus paket Dibimbing Tutor. Setiap
                                            sesi direkam dan rekamannya bisa
                                            diakses seumur hidup, jadi kamu
                                            tetap bisa mengejar materi kalau
                                            berhalangan hadir. Kelas hanya 60
                                            menit per hari agar tetap muat di
                                            jadwal yang padat.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 13))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 13 ? null : 13)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 13))}>
                                    Apakah saya dapat sertifikat TOEFL?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 13))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 13 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Sertifikat TOEFL Prediction
                                            diberikan khusus untuk paket
                                            Dibimbing Tutor setelah mengikuti
                                            post test. Paket Self-Study LMS
                                            fokus pada materi dan latihan, tanpa
                                            sertifikat.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 14))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 14 ? null : 14)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 14))}>
                                    Apakah lembaganya resmi dan sertifikatnya
                                    valid?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 14))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 14 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Full Bright Indonesia adalah lembaga
                                            resmi dengan legalitas lengkap: SK
                                            Kemenkumham RI Nomor
                                            AHU-0055720-AH.0114 Tahun 2020, SK
                                            Izin Operasional LKP
                                            503/20177/LKP/DPM-PTSP/8/2024, NPSN
                                            Nomor K9998700, dan bekerja sama
                                            dengan IIEF Jakarta. Sertifikat
                                            dapat digunakan untuk daftar kuliah
                                            S1/S2/S3, lamar kerja, seleksi CPNS,
                                            rekrutmen BUMN, ujian skripsi,
                                            kenaikan pangkat, dan pendaftaran
                                            beasiswa.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 15))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 15 ? null : 15)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 15))}>
                                    Bagaimana cara mendaftar dan metode
                                    pembayaran apa saja?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 15))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 15 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Klik tombol daftar, pilih paket yang
                                            sesuai, lalu selesaikan pembayaran.
                                            Setelah itu kamu langsung menerima
                                            email konfirmasi beserta akses LMS
                                            dan grup WhatsApp. Pembayaran bisa
                                            via transfer bank, GoPay, OVO, DANA,
                                            dan QRIS.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div style={css(faqItemStyle(activeCat, 16))}>
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === 16 ? null : 16)
                                }
                                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
                            >
                                <span style={css(faqQStyle(openFaq === 16))}>
                                    Apakah ada garansi kalau skor saya belum
                                    mencapai target?
                                </span>
                                <span style={css(faqChevStyle(openFaq === 16))}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === 16 ? (
                                <>
                                    <div className="[padding:0_32px_24px_0]">
                                        <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                                            Garansi mengulang sampai skor target
                                            tercapai berlaku khusus untuk Paket
                                            Bundling (Dibimbing Tutor). Jika
                                            sudah mengikuti program secara penuh
                                            dan konsisten tapi skor belum
                                            tercapai, kamu bisa claim garansi
                                            dan mengulang kelas di batch
                                            berikutnya.
                                        </p>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>

                    <div className="[margin:0_auto] [max-width:512px] [text-align:center]">
                        <p className="[margin:0_0_24px] [font-size:14px] [font-weight:600] [color:#3d3d3d]">
                            Masih ada pertanyaan lain? Hubungi kami sekarang.
                        </p>
                        <div className="[display:flex] [flex-wrap:wrap] [justify-content:center] [gap:12px]">
                            <TrackedCTA
                                zone="faq"
                                action="whatsapp"
                                label="FAQ - Chat Via WA"
                                href={waUrl(WA_MESSAGES.consult)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:14px_28px] [font-size:16px] [font-weight:700] [color:#fff] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [background:#D70808] [text-decoration:none]"
                            >
                                Chat Via WA →
                            </TrackedCTA>
                            <TrackedCTA
                                zone="faq"
                                action="scroll"
                                label="FAQ - Lihat Bukti Alumni"
                                href="#testimonials"
                                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:14px_28px] [font-size:16px] [font-weight:700] [color:#151515] [border:2px_solid_#D70808] [text-decoration:none]"
                            >
                                Lihat Bukti Alumni →
                            </TrackedCTA>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
