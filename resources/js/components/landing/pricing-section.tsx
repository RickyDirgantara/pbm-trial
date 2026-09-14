import { useCallback, useState, useSyncExternalStore } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { initialMode, WA_MESSAGES } from './constants';
import type { PricingMode } from './constants';
import { css, toggleBtnStyle } from './styles';

/** The landing HTML is cached per path, so `?mode=` can only be read in the browser. */
const subscribeToUrl = () => () => {};
const serverMode = (): PricingMode => 'self';

export function PricingSection({ waUrl }: { waUrl: (text: string) => string }) {
    const urlMode = useSyncExternalStore(
        subscribeToUrl,
        initialMode,
        serverMode,
    );
    const [chosenMode, setMode] = useState<PricingMode | null>(null);
    const mode = chosenMode ?? urlMode;

    /* Remember the outbound checkout so the return survey can be shown later. */
    const markCheckoutClicked = useCallback((): void => {
        try {
            localStorage.setItem('fb_checkout_clicked_at', String(Date.now()));
            localStorage.removeItem('fb_return_popup_shown');
        } catch {
            /* storage disabled */
        }
    }, []);

    return (
        <>
            {/* Pricing: Belajar Sendiri (self-study mode) */}
            {mode === 'self' ? (
                <>
                    <section
                        id="pricing"
                        className="[padding:80px_24px_48px] [background:#fff]"
                    >
                        <div className="[margin:0_auto] [max-width:1152px]">
                            <div className="[margin-bottom:32px] [text-align:center]">
                                <div className="[margin-bottom:20px] [display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                                    ⏳ Mulai dari Sekarang, Bukan Nanti
                                </div>
                                <h2 className="[margin:0_0_20px] [font-family:Nunito,sans-serif] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [color:#151515]">
                                    Persiapkan Sekarang,{' '}
                                    <span className="[color:rgb(215,_8,_8)]">
                                        Jangan Ditunda
                                    </span>
                                </h2>
                                <p className="[margin:0] [margin-right:auto] [margin-left:auto] [max-width:512px] [font-size:16px] [line-height:1.6] [color:#3d3d3d]">
                                    <b>
                                        Semakin cepat kamu mulai, semakin besar
                                        peluang kamu diterima beasiswa
                                    </b>{' '}
                                    karena skor 500+ tercapai sebelum deadline
                                    submission.
                                </p>
                            </div>

                            <div className="[margin-bottom:44px] [text-align:center]">
                                <p className="[margin:0_0_6px] [font-size:13px] [font-weight:800] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase]">
                                    👇 Pilih Cara Belajarmu
                                </p>

                                <div className="[display:inline-flex] [gap:4px] [border-radius:9999px] [padding:5px] [box-shadow:0_2px_12px_rgba(215,8,8,0.08)] [background:#fff] [border:1px_solid_#ffb3b3]">
                                    <button
                                        onClick={() => setMode('self')}
                                        style={css(toggleBtnStyle(true))}
                                    >
                                        Belajar Sendiri
                                    </button>
                                    <button
                                        onClick={() => setMode('tutor')}
                                        style={css(toggleBtnStyle(false))}
                                    >
                                        Dibimbing Tutor
                                        <span className="[position:absolute] [top:-9px] [right:-6px] [display:flex] [height:34px] [width:34px] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:11px] [font-weight:900] [color:#151515] [box-shadow:0_2px_8px_rgba(249,115,22,0.4)] [background:#F97316] [border:2px_solid_#fff]">
                                            -80%
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="[margin:0_auto_40px] [max-width:520px]">
                                <div className="[position:relative] [display:flex] [flex-direction:column] [overflow:hidden] [border-radius:24px] [padding:28px] [box-shadow:0_8px_32px_rgba(245,183,0,0.15)] [background:linear-gradient(165deg,#ffffff_0%,#fffbf0_100%)] [border:2px_solid_#F5B700]">
                                    <div className="[position:absolute] [top:0] [right:0] [border-bottom-left-radius:16px] [padding:8px_16px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#151515] [background:#F5B700]">
                                        🔥 POPULAR
                                    </div>
                                    <div className="[margin-top:20px] [margin-bottom:4px] [display:flex] [align-items:flex-start] [justify-content:space-between]">
                                        <div>
                                            <p className="[margin:0_0_4px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                                                E-Course
                                            </p>
                                            <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:24px] [font-weight:900] [color:#151515]">
                                                Self-Study LMS
                                            </h3>
                                        </div>
                                        <span className="[display:flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#D70808] [background:#FFF0F0]">
                                            📚 Mandiri
                                        </span>
                                    </div>
                                    <p className="[margin:0_0_16px] [font-size:15px] [font-weight:700] [color:#4b5563]">
                                        Target Skor:{' '}
                                        <span className="[font-size:20px] [font-weight:900] [color:#16a34a]">
                                            500+
                                        </span>{' '}
                                        ·{' '}
                                        <span className="[font-weight:900] [color:#151515]">
                                            Belajar Kapan Saja
                                        </span>
                                    </p>
                                    <div className="[margin-bottom:20px] [border-radius:16px] [padding:16px] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <div className="[margin-bottom:4px] [display:flex] [align-items:center] [gap:8px]">
                                            <span className="[font-size:14px] [font-weight:600] [color:#4b5563] [text-decoration:line-through]">
                                                Rp 250.000
                                            </span>
                                            <span className="[border-radius:9999px] [padding:2px_8px] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                                HEMAT 60%
                                            </span>
                                        </div>
                                        <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:30px] [font-weight:900] [color:#D70808]">
                                            Rp 99.000
                                        </p>
                                    </div>
                                    <ul className="[margin:0_0_8px] [display:flex] [flex:1] [flex-direction:column] [gap:8px] [padding:0] [list-style:none]">
                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            60+ Video Materi Pembelajaran
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Materi Hari ke-1 s/d ke-15 (Roadmap
                                            Lengkap)
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Lebih dari 1.000+ Nomor Latihan Soal
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Grup WA Diskusi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Diagnostic Test
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Simulasi dan Post Test (Full Skills)
                                        </li>
                                    </ul>
                                    <p className="[margin:12px_0_8px] [font-size:12px] [font-weight:700] [letter-spacing:0.06em] [color:#9ca3af] [text-transform:uppercase]">
                                        Belum termasuk:
                                    </p>
                                    <ul className="[margin:0_0_20px] [display:flex] [flex-direction:column] [gap:8px] [padding:0] [list-style:none]">
                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#9ca3af]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#d1d5db]">
                                                ✕
                                            </span>
                                            LIVE ZOOM 15 Hari
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#9ca3af]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#d1d5db]">
                                                ✕
                                            </span>
                                            Sertifikat TOEFL
                                        </li>
                                    </ul>
                                    <div className="[display:flex] [flex-direction:column] [gap:6px]">
                                        <TrackedCTA
                                            zone="pricing"
                                            action="external_checkout"
                                            label="Self-Study LMS - Mulai Belajar Mandiri"
                                            href="https://member.fullbrightindonesia.com/paket-gold-e-course-toefl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={markCheckoutClicked}
                                            className="[box-sizing:border-box] [display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:16px_20px] [font-size:16px] [font-weight:900] [color:#fff] [box-shadow:0_6px_24px_rgba(215,8,8,0.4)] [background:#D70808] [text-decoration:none]"
                                        >
                                            Mulai Belajar Mandiri →
                                        </TrackedCTA>
                                        <p className="[margin:0] [display:flex] [align-items:center] [justify-content:center] [gap:4px] [text-align:center] [font-size:12px] [color:#9ca3af]">
                                            🔒 Pembayaran aman &amp; terenkripsi
                                        </p>
                                    </div>
                                    <div className="[margin:12px_0] [display:flex] [align-items:center] [gap:12px]">
                                        <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
                                        <span className="[font-size:12px] [font-weight:600] [color:#9ca3af]">
                                            atau
                                        </span>
                                        <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
                                    </div>
                                    <TrackedCTA
                                        zone="pricing"
                                        action="whatsapp"
                                        label="Self-Study LMS - Tanya via WhatsApp"
                                        href={waUrl(WA_MESSAGES.selfStudy)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="[box-sizing:border-box] [display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:12px_20px] [font-size:14px] [font-weight:700] [color:#16a34a] [background:transparent] [border:1.5px_solid_#25D366] [text-decoration:none]"
                                    >
                                        <img
                                            src="/assets/admin-avatar.jpg"
                                            alt="Admin Full Bright"
                                            className="[height:26px] [width:26px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366]"
                                        />
                                        💬 Tanya via WhatsApp
                                    </TrackedCTA>
                                    <p className="[margin:14px_0_0] [text-align:center] [font-size:13px] [line-height:1.5] [color:#9ca3af]">
                                        Mau intip materinya dulu?{' '}
                                        <TrackedCTA
                                            zone="pricing"
                                            action="link"
                                            label="Self-Study LMS - Coba Gratis 1 Modul"
                                            href="https://class.fullbrightindonesia.com/register"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="[font-weight:800] [color:#6b7280] [text-underline-offset:3px] [text-decoration:underline]"
                                        >
                                            Coba gratis 1 modul di LMS
                                        </TrackedCTA>
                                    </p>
                                </div>
                            </div>

                            <div className="[margin:0_auto_32px] [max-width:520px]">
                                <p className="[margin:0_0_16px] [text-align:center] [font-size:13px] [font-weight:800] [letter-spacing:0.06em] [color:#6b7280] [text-transform:uppercase]">
                                    Kata Mereka yang Belajar Mandiri
                                </p>
                                <div className="[display:grid] [grid-template-columns:1fr] [gap:12px]">
                                    <div className="[border-radius:16px] [padding:22px] [background:#F9F9F9] [border:1px_solid_#ececec]">
                                        <p className="[margin:0_0_8px] [font-size:16px] [letter-spacing:0.08em] [color:#FBBF24]">
                                            ★★★★★
                                        </p>
                                        <p className="[margin:0_0_18px] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                                            "Trm kasih Full Bright Indonesia yg
                                            sudah memberikan kesempatan belajar
                                            Bhs Inggris, belajar di sini bisa
                                            menjadi alternatif bagi individu yg
                                            ingin belajar sambil bekerja, LMS
                                            bisa diakses kapan pun"
                                        </p>
                                        <div className="[display:flex] [align-items:center] [gap:14px]">
                                            <img
                                                src="/assets/nina.png"
                                                alt="Nina Hernawati"
                                                className="[height:60px] [width:60px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover] [box-shadow:0_3px_12px_rgba(0,0,0,0.12)] [border:2px_solid_#fff]"
                                            />
                                            <div>
                                                <p className="[margin:0_0_2px] [font-family:Nunito,sans-serif] [font-size:17px] [font-weight:900] [color:#151515]">
                                                    Nina Hernawati
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : null}

            {/* Pricing: Dibimbing Tutor (default mode) */}
            {mode === 'tutor' ? (
                <>
                    <section
                        id="pricing"
                        className="[padding:80px_24px_48px] [background:#fff]"
                    >
                        <div className="[margin:0_auto] [max-width:1152px]">
                            <div className="[margin-bottom:32px] [text-align:center]">
                                <div className="[margin-bottom:20px] [display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                                    ⏳ Mulai dari Sekarang, Bukan Nanti
                                </div>
                                <h2 className="[margin:0_0_20px] [font-family:Nunito,sans-serif] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [color:#151515]">
                                    Persiapkan Sekarang,{' '}
                                    <span className="[color:rgb(215,_8,_8)]">
                                        Jangan Ditunda
                                    </span>
                                </h2>
                                <p className="[margin:0] [margin-right:auto] [margin-left:auto] [max-width:512px] [font-size:16px] [line-height:1.6] [color:#3d3d3d]">
                                    <b>
                                        Semakin cepat kamu mulai, semakin besar
                                        peluang kamu diterima beasiswa
                                    </b>{' '}
                                    karena skor 500+ tercapai sebelum deadline
                                    submission.
                                </p>
                            </div>

                            <div className="[margin-bottom:44px] [text-align:center]">
                                <p className="[margin:0_0_6px] [font-size:13px] [font-weight:800] [letter-spacing:0.08em] [color:#3D4349] [text-transform:uppercase]">
                                    👇 Pilih Cara Belajarmu
                                </p>

                                <div className="[display:inline-flex] [gap:4px] [border-radius:9999px] [padding:5px] [box-shadow:0_2px_12px_rgba(215,8,8,0.08)] [background:#fff] [border:1px_solid_#ffb3b3]">
                                    <button
                                        onClick={() => setMode('self')}
                                        style={css(toggleBtnStyle(false))}
                                    >
                                        Belajar Sendiri
                                    </button>
                                    <button
                                        onClick={() => setMode('tutor')}
                                        style={css(toggleBtnStyle(true))}
                                    >
                                        Dibimbing Tutor
                                        <span className="[position:absolute] [top:-9px] [right:-6px] [display:flex] [height:34px] [width:34px] [align-items:center] [justify-content:center] [border-radius:9999px] [background-color:#F9A316] [font-size:11px] [font-weight:900] [color:#151515] [box-shadow:0_2px_8px_rgba(249,115,22,0.4)] [border:2px_solid_#fff]">
                                            -80%
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="[margin-bottom:56px] [display:grid] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] [gap:24px]">
                                {/* Starter */}
                                <div className="[display:flex] [flex-direction:column] [border-radius:24px] [padding:28px] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)] [border:2px_solid_#e5e7eb]">
                                    <div className="[margin-bottom:4px] [display:flex] [align-items:flex-start] [justify-content:space-between]">
                                        <div>
                                            <p className="[margin:0_0_4px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                                                Paket
                                            </p>
                                            <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:24px] [font-weight:900] [color:#151515]">
                                                Starter
                                            </h3>
                                        </div>
                                        <span className="[display:flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#16a34a] [background:#F0FDF4]">
                                            ★★★★★
                                            <span className="[margin-left:4px]">
                                                5.0
                                            </span>
                                        </span>
                                    </div>
                                    <p className="[margin:0_0_16px] [font-size:15px] [font-weight:700] [color:#4b5563]">
                                        Target Skor:{' '}
                                        <span className="[font-size:20px] [font-weight:900] [color:#16a34a]">
                                            450+
                                        </span>{' '}
                                        ·{' '}
                                        <span className="[font-weight:900] [color:#151515]">
                                            10 Hari (2 Minggu)
                                        </span>
                                    </p>
                                    <div className="[margin-bottom:20px] [border-radius:16px] [padding:16px] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <div className="[margin-bottom:4px] [display:flex] [align-items:center] [gap:8px]">
                                            <span className="[font-size:14px] [font-weight:600] [color:#4b5563] [text-decoration:line-through]">
                                                Rp 1.000.000
                                            </span>
                                            <span className="[border-radius:9999px] [padding:2px_8px] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                                HEMAT 80%
                                            </span>
                                        </div>
                                        <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:30px] [font-weight:900] [color:#D70808]">
                                            Rp 200.000
                                        </p>
                                    </div>
                                    <ul className="[margin:0_0_8px] [display:flex] [flex:1] [flex-direction:column] [gap:8px] [padding:0] [list-style:none]">
                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            LIVE ZOOM 10 Hari
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Akses Latihan Soal di LMS (Total
                                            370+ Soal)
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Post Test (Full Test) 1x
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Evaluasi Progress Mingguan
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Strategi Submit Sesuai Jurusan &amp;
                                            Rencana Kontribusi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Rekaman ZOOM jika tidak hadir
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            30+ Video Materi Pembelajaran
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            E-Book Structure
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            E-Book Listening dan Reading
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Grup WA Diskusi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Placement Test / Pre-Test
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            10+ Link Soal Tambahan saat LIVE
                                            ZOOM
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Tutor Tanya AI 24 Jam di setiap
                                            materi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Pembahasan setiap soal di LMS
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#3b82f6]">
                                                🌐
                                            </span>
                                            Webinar Beasiswa Luar Negeri
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#3b82f6]">
                                                🌐
                                            </span>
                                            Konsultasi Kampus Luar Negeri, urus
                                            LoA, Visa, dll.
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#D70808]"></span>
                                            Bonus Spesial
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Sertifikat TOEFL
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#d1d5db]">
                                                ✕
                                            </span>
                                            Tidak termasuk garansi mengulang 1
                                            bulan
                                        </li>
                                    </ul>
                                    <div className="[display:flex] [flex-direction:column] [gap:6px]">
                                        <TrackedCTA
                                            zone="pricing"
                                            action="external_checkout"
                                            label="Starter - Apply Sekarang"
                                            href="https://member.fullbrightindonesia.com/paket-premium-toefl-level-starter-live-zoom-intensif-flash-sale"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={markCheckoutClicked}
                                            className="[box-sizing:border-box] [display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:16px_20px] [font-size:16px] [font-weight:900] [color:#fff] [box-shadow:0_6px_24px_rgba(215,8,8,0.4)] [background:#D70808] [text-decoration:none]"
                                        >
                                            Apply Sekarang →
                                        </TrackedCTA>
                                        <p className="[margin:0] [display:flex] [align-items:center] [justify-content:center] [gap:4px] [text-align:center] [font-size:12px] [color:#9ca3af]">
                                            🔒 Pembayaran aman &amp; terenkripsi
                                        </p>
                                    </div>
                                    <div className="[margin:12px_0] [display:flex] [align-items:center] [gap:12px]">
                                        <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
                                        <span className="[font-size:12px] [font-weight:600] [color:#9ca3af]">
                                            atau
                                        </span>
                                        <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
                                    </div>
                                    <TrackedCTA
                                        zone="pricing"
                                        action="whatsapp"
                                        label="Starter - Tanya via WhatsApp"
                                        href={waUrl(WA_MESSAGES.starter)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="[box-sizing:border-box] [display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:12px_20px] [font-size:14px] [font-weight:700] [color:#16a34a] [background:transparent] [border:1.5px_solid_#25D366] [text-decoration:none]"
                                    >
                                        <img
                                            src="/assets/admin-avatar.jpg"
                                            alt="Admin Full Bright"
                                            className="[height:26px] [width:26px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366]"
                                        />
                                        💬 Tanya via WhatsApp
                                    </TrackedCTA>
                                    <div className="[margin-top:14px] [display:flex] [flex-wrap:wrap] [align-items:center] [justify-content:center] [gap:6px]">
                                        <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#B45309] [background:#FEF3C7]">
                                            ★ 4.9/5
                                        </span>
                                        <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#15803d] [background:#F0FDF4]">
                                            45.000+
                                        </span>
                                        <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#1d4ed8] [background:#EFF6FF]">
                                            🛡 Garansi 100%
                                        </span>
                                    </div>
                                </div>

                                {/* Bundling */}
                                <div className="[position:relative] [display:flex] [flex-direction:column] [overflow:hidden] [border-radius:24px] [padding:28px] [box-shadow:0_16px_56px_rgba(22,163,74,0.2),0_0_0_1px_rgba(22,163,74,0.08)] [background:linear-gradient(165deg,#ffffff_0%,#f0fdf4_100%)] [border:2px_solid_#16a34a]">
                                    <div className="[position:absolute] [top:0] [right:0] [border-bottom-left-radius:16px] [padding:8px_16px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#fff] [background:#16a34a]">
                                        ⭐ PALING HEMAT
                                    </div>
                                    <div className="[margin-top:20px] [margin-bottom:4px] [display:flex] [align-items:flex-start] [justify-content:space-between]">
                                        <div>
                                            <p className="[margin:0_0_4px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase]">
                                                Paket
                                            </p>
                                            <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:24px] [font-weight:900] [color:#151515]">
                                                Bundling
                                            </h3>
                                            <p className="[margin:2px_0_0] [font-size:12px] [font-weight:600] [color:#D70808]">
                                                Starter + Intermediate
                                            </p>
                                        </div>
                                        <span className="[display:flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#D70808] [background:#FFF0F0]">
                                            ★★★★★
                                            <span className="[margin-left:4px]">
                                                5.0
                                            </span>
                                        </span>
                                    </div>
                                    <p className="[margin:0_0_16px] [font-size:15px] [font-weight:700] [color:#4b5563]">
                                        Target Skor:{' '}
                                        <span className="[font-size:20px] [font-weight:900] [color:#D70808]">
                                            500+
                                        </span>{' '}
                                        ·{' '}
                                        <span className="[font-weight:900] [color:#151515]">
                                            25 Hari Total
                                        </span>
                                    </p>
                                    <div className="[margin-bottom:20px] [border-radius:16px] [padding:16px] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <div className="[margin-bottom:4px] [display:flex] [align-items:center] [gap:8px]">
                                            <span className="[font-size:14px] [font-weight:600] [color:#4b5563] [text-decoration:line-through]">
                                                Rp 1.875.000
                                            </span>
                                            <span className="[border-radius:9999px] [padding:2px_8px] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                                DISKON 80% + Rp50rb
                                            </span>
                                        </div>
                                        <p className="[margin:0_0_4px] [font-family:Nunito,sans-serif] [font-size:30px] [font-weight:900] [color:#D70808]">
                                            Rp 325.000
                                        </p>
                                        <p className="[margin:0] [font-size:12px] [font-weight:600] [color:#D70808]">
                                            Hemat Rp 1.550.000 dari harga
                                            normal!
                                        </p>
                                    </div>
                                    <ul className="[margin:0_0_8px] [display:flex] [flex:1] [flex-direction:column] [gap:8px] [padding:0] [list-style:none]">
                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            LIVE ZOOM 25 Hari
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Akses Latihan Soal di LMS (Total
                                            1.370+ Soal)
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Progress Test &amp; Post Test (Full
                                            Test) 3x
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Evaluasi Progress Mingguan
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Strategi Submit Sesuai Jurusan &amp;
                                            Rencana Kontribusi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Rekaman ZOOM jika tidak hadir
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            90+ Video Materi Pembelajaran
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            E-Book Structure (500+ Soal)
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            E-Book Listening dan Reading
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Grup WA Diskusi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Placement Test / Pre-Test
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            25 Link Soal Tambahan saat LIVE ZOOM
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Free mengulang 1 bulan jika belum
                                            capai skor 500+
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Tutor Tanya AI 24 Jam di setiap
                                            materi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Pembahasan setiap soal di LMS
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#3b82f6]">
                                                🌐
                                            </span>
                                            Webinar Beasiswa Luar Negeri
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#3b82f6]">
                                                🌐
                                            </span>
                                            Konsultasi Kampus Luar Negeri, urus
                                            LoA, Visa, dll.
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#D70808]"></span>
                                            Bonus Spesial
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Sertifikat TOEFL
                                        </li>
                                    </ul>
                                    <div className="[margin-bottom:20px] [display:grid] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] [gap:12px]">
                                        <div className="[border-radius:16px] [padding:16px] [background:#F3F3F3]">
                                            <div className="[margin-bottom:8px] [display:flex] [align-items:center] [gap:10px]">
                                                <div className="[display:flex] [height:32px] [width:32px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:10px] [background:#FEF3C7]">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="#F59E0B"
                                                        stroke="#F59E0B"
                                                    >
                                                        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"></path>
                                                    </svg>
                                                </div>
                                                <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:13px] [line-height:1.3] [font-weight:900] [color:#151515]">
                                                    Garansi Sampai Skor Tercapai
                                                </p>
                                            </div>
                                            <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">
                                                Ikut program secara penuh dan
                                                konsisten, tapi skor belum
                                                tercapai, gratis ulang kelas di
                                                batch berikutnya.
                                            </p>
                                        </div>
                                        <div className="[border-radius:16px] [padding:16px] [background:#F3F3F3]">
                                            <div className="[margin-bottom:8px] [display:flex] [align-items:center] [gap:10px]">
                                                <div className="[display:flex] [height:32px] [width:32px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:10px] [background:#FEF3C7]">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="#F59E0B"
                                                        stroke="#F59E0B"
                                                    >
                                                        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"></path>
                                                    </svg>
                                                </div>
                                                <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:13px] [line-height:1.3] [font-weight:900] [color:#151515]">
                                                    Post Test Ulang 3× Gratis
                                                </p>
                                            </div>
                                            <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">
                                                Belum puas hasilnya? Ulang ujian
                                                akhir hingga 3 kali, gratis.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="[display:flex] [flex-direction:column] [gap:6px]">
                                        <TrackedCTA
                                            zone="pricing"
                                            action="external_checkout"
                                            label="Bundling - Apply Sekarang"
                                            href="https://member.fullbrightindonesia.com/paket-premium-toefl-level-starter-live-zoom-intensif-flash-sale"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={markCheckoutClicked}
                                            className="[box-sizing:border-box] [display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:16px_20px] [font-size:16px] [font-weight:900] [color:#fff] [box-shadow:0_6px_24px_rgba(22,163,74,0.4)] [background:#16a34a] [text-decoration:none]"
                                        >
                                            Apply Sekarang →
                                        </TrackedCTA>
                                        <p className="[margin:0] [display:flex] [align-items:center] [justify-content:center] [gap:4px] [text-align:center] [font-size:12px] [color:#9ca3af]">
                                            🔒 Pembayaran aman &amp; terenkripsi
                                        </p>
                                    </div>
                                    <p className="[margin:6px_0_0] [text-align:center] [font-size:12px] [font-weight:600] [color:#D70808]">
                                        * Centang opsi Bundle saat checkout
                                    </p>
                                    <div className="[margin:12px_0] [display:flex] [align-items:center] [gap:12px]">
                                        <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
                                        <span className="[font-size:12px] [font-weight:600] [color:#9ca3af]">
                                            atau
                                        </span>
                                        <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
                                    </div>
                                    <TrackedCTA
                                        zone="pricing"
                                        action="whatsapp"
                                        label="Bundling - Tanya via WhatsApp"
                                        href={waUrl(WA_MESSAGES.bundling)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="[box-sizing:border-box] [display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:12px_20px] [font-size:14px] [font-weight:700] [color:#16a34a] [background:transparent] [border:1.5px_solid_#25D366] [text-decoration:none]"
                                    >
                                        <img
                                            src="/assets/admin-avatar.jpg"
                                            alt="Admin Full Bright"
                                            className="[height:26px] [width:26px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366]"
                                        />
                                        💬 Tanya via WhatsApp
                                    </TrackedCTA>
                                    <div className="[margin-top:14px] [display:flex] [flex-wrap:wrap] [align-items:center] [justify-content:center] [gap:6px]">
                                        <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#B45309] [background:#FEF3C7]">
                                            ★ 4.9/5
                                        </span>
                                        <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#15803d] [background:#F0FDF4]">
                                            45.000+
                                        </span>
                                        <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#1d4ed8] [background:#EFF6FF]">
                                            🛡 Garansi 100%
                                        </span>
                                    </div>
                                </div>

                                {/* Intermediate */}
                                <div className="[display:flex] [flex-direction:column] [border-radius:24px] [padding:28px] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)] [border:2px_solid_#e5e7eb]">
                                    <div className="[margin-bottom:4px] [display:flex] [align-items:flex-start] [justify-content:space-between]">
                                        <div>
                                            <p className="[margin:0_0_4px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                                                Paket
                                            </p>
                                            <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:24px] [font-weight:900] [color:#151515]">
                                                Intermediate
                                            </h3>
                                        </div>
                                        <span className="[display:flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#16a34a] [background:#F0FDF4]">
                                            ★★★★★
                                            <span className="[margin-left:4px]">
                                                5.0
                                            </span>
                                        </span>
                                    </div>
                                    <p className="[margin:0_0_16px] [font-size:15px] [font-weight:700] [color:#4b5563]">
                                        Target Skor:{' '}
                                        <span className="[font-size:20px] [font-weight:900] [color:#16a34a]">
                                            500+
                                        </span>{' '}
                                        ·{' '}
                                        <span className="[font-weight:900] [color:#151515]">
                                            15 Hari
                                        </span>{' '}
                                        · Min. 430
                                    </p>
                                    <div className="[margin-bottom:20px] [border-radius:16px] [padding:16px] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <div className="[margin-bottom:4px] [display:flex] [align-items:center] [gap:8px]">
                                            <span className="[font-size:14px] [font-weight:600] [color:#4b5563] [text-decoration:line-through]">
                                                Rp 1.400.000
                                            </span>
                                            <span className="[border-radius:9999px] [padding:2px_8px] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                                DISKON 80%
                                            </span>
                                        </div>
                                        <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:30px] [font-weight:900] [color:#D70808]">
                                            Rp 280.000
                                        </p>
                                    </div>
                                    <ul className="[margin:0_0_8px] [display:flex] [flex:1] [flex-direction:column] [gap:8px] [padding:0] [list-style:none]">
                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            LIVE ZOOM 15 Hari
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Akses Latihan Soal di LMS (Total
                                            1000+ Soal)
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:800] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Progress Test &amp; Post Test (Full
                                            Test) 2x
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Evaluasi Progress Mingguan
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Strategi Submit Sesuai Jurusan &amp;
                                            Rencana Kontribusi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Rekaman ZOOM jika tidak hadir
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            60+ Video Materi Pembelajaran
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            E-Book Structure
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            E-Book Listening dan Reading
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Grup WA Diskusi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Placement Test / Pre-Test
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            15 Link Soal Tambahan saat LIVE ZOOM
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Tutor Tanya AI 24 Jam di setiap
                                            materi
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Pembahasan setiap soal di LMS
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#3b82f6]">
                                                🌐
                                            </span>
                                            Webinar Beasiswa Luar Negeri
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#3b82f6]">
                                                🌐
                                            </span>
                                            Konsultasi Kampus Luar Negeri, urus
                                            LoA, Visa, dll.
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#D70808]"></span>
                                            Bonus Spesial
                                        </li>

                                        <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [font-weight:500] [color:#3d3d3d]">
                                            <span className="[margin-top:1px] [flex-shrink:0] [color:#16a34a]">
                                                ✓
                                            </span>
                                            Sertifikat TOEFL
                                        </li>
                                    </ul>
                                    <div className="[display:flex] [flex-direction:column] [gap:6px]">
                                        <TrackedCTA
                                            zone="pricing"
                                            action="external_checkout"
                                            label="Intermediate - Apply Sekarang"
                                            href="https://member.fullbrightindonesia.com/paket-premium-toefl-level-intermediate-live-zoom-intensif-flash-sale"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={markCheckoutClicked}
                                            className="[box-sizing:border-box] [display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:16px_20px] [font-size:16px] [font-weight:900] [color:#fff] [box-shadow:0_6px_24px_rgba(215,8,8,0.4)] [background:#D70808] [text-decoration:none]"
                                        >
                                            Apply Sekarang →
                                        </TrackedCTA>
                                        <p className="[margin:0] [display:flex] [align-items:center] [justify-content:center] [gap:4px] [text-align:center] [font-size:12px] [color:#9ca3af]">
                                            🔒 Pembayaran aman &amp; terenkripsi
                                        </p>
                                    </div>
                                    <div className="[margin:12px_0] [display:flex] [align-items:center] [gap:12px]">
                                        <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
                                        <span className="[font-size:12px] [font-weight:600] [color:#9ca3af]">
                                            atau
                                        </span>
                                        <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
                                    </div>
                                    <TrackedCTA
                                        zone="pricing"
                                        action="whatsapp"
                                        label="Intermediate - Tanya via WhatsApp"
                                        href={waUrl(WA_MESSAGES.intermediate)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="[box-sizing:border-box] [display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:12px_20px] [font-size:14px] [font-weight:700] [color:#16a34a] [background:transparent] [border:1.5px_solid_#25D366] [text-decoration:none]"
                                    >
                                        <img
                                            src="/assets/admin-avatar.jpg"
                                            alt="Admin Full Bright"
                                            className="[height:26px] [width:26px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366]"
                                        />
                                        💬 Tanya via WhatsApp
                                    </TrackedCTA>
                                    <div className="[margin-top:14px] [display:flex] [flex-wrap:wrap] [align-items:center] [justify-content:center] [gap:6px]">
                                        <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#B45309] [background:#FEF3C7]">
                                            ★ 4.9/5
                                        </span>
                                        <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#15803d] [background:#F0FDF4]">
                                            45.000+
                                        </span>
                                        <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#1d4ed8] [background:#EFF6FF]">
                                            🛡 Garansi 100%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="[margin:0_auto_32px] [max-width:672px] [border-radius:16px] [padding:24px] [background:#F3F3F3] [border:1px_solid_#e5e7eb]">
                                <p className="[margin:0_0_12px] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                                    Legalitas Resmi
                                </p>
                                <div className="[display:flex] [flex-direction:column] [gap:6px]">
                                    <span className="[font-size:12px] [font-weight:600] [color:#151515]">
                                        ✓ SK Kemenkumham RI Nomor
                                        AHU-0055720-AH.0114 Tahun 2020
                                    </span>
                                    <span className="[font-size:12px] [font-weight:600] [color:#151515]">
                                        ✓ SK Izin Operasional LKP
                                        503/20177/LKP/DPM-PTSP/8/2024
                                    </span>
                                    <span className="[font-size:12px] [font-weight:600] [color:#151515]">
                                        ✓ NPSN Nomor K9998700
                                    </span>
                                    <span className="[font-size:12px] [font-weight:600] [color:#151515]">
                                        ✓ Bekerja sama dengan IIEF Jakarta
                                    </span>
                                </div>
                                <TrackedCTA
                                    zone="pricing"
                                    action="link"
                                    label="Info Detail Legalitas"
                                    href="https://referensi.data.kemendikdasmen.go.id/pendidikan/npsn/K9998700"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="[margin-top:12px] [display:inline-block] [font-size:12px] [font-weight:600] [color:#D70808] [text-decoration:none]"
                                >
                                    Info Detail Legalitas →
                                </TrackedCTA>
                            </div>
                        </div>
                    </section>
                </>
            ) : null}
        </>
    );
}
