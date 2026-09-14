import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { CMP_HEADER_CLASS } from './styles';

export function ValueSection({ headerOffset }: { headerOffset: number }) {
    return (
        <>
            <div className="[margin-top:-1px] [line-height:0] [background:#F3F3F3]">
                <svg
                    viewBox="0 0 1440 56"
                    preserveAspectRatio="none"
                    className="[display:block] [height:56px] [width:100%]"
                >
                    <path
                        d="M0,28 C240,0 480,56 720,28 C960,0 1200,56 1440,28 L1440,0 L0,0 Z"
                        fill="#ffffff"
                    ></path>
                </svg>
            </div>

            <section
                id="value"
                className="[padding:80px_24px] [background:#fff]"
            >
                <div className="[margin:0_auto] [max-width:1152px]">
                    <div className="[margin-bottom:56px] [text-align:center]">
                        <div className="[margin-bottom:20px] [display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                            💡 Metode Eksklusif Full Bright
                        </div>
                        <h2 className="[margin:0_0_20px] [font-family:Nunito,sans-serif] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [color:#151515]">
                            Ini{' '}
                            <span className="[color:rgb(215,_8,_8)]">
                                Strategi Belajar TOEFL
                            </span>{' '}
                            Yang Tepat Untuk Kamu
                        </h2>
                        <p className="[margin:0] [margin:0_auto] [max-width:576px] [font-size:16px] [line-height:1.6] [color:#3d3d3d]">
                            Ini cara Full Bright membantu{' '}
                            <strong className="[color:rgb(21,_21,_21)]">
                                45.000+ orang
                            </strong>{' '}
                            mengubah submission yang tadinya ditolak jadi
                            diterima di kampus &amp; perusahaan impian mereka.
                        </p>
                    </div>

                    <div className="[margin:0_auto_56px] [max-width:760px] [border-radius:20px] [box-shadow:0_4px_24px_rgba(0,0,0,0.05)] [background:#fff] [border:1px_solid_#ececec]">
                        <div
                            className={CMP_HEADER_CLASS}
                            style={{ top: headerOffset }}
                        >
                            <div className="[padding:16px] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                Kriteria
                            </div>
                            <div className="[padding:16px_8px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:13px] [line-height:1.25] [font-weight:800] [color:#6b7280]">
                                Belajar Otodidak
                            </div>
                            <div className="[padding:16px_8px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:13px] [line-height:1.25] [font-weight:800] [color:#6b7280]">
                                Kursus Lain
                            </div>
                            <div className="[padding:16px_8px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:13px] [line-height:1.25] [font-weight:900] [color:#fff] [background:#D70808]">
                                Full Bright
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.5fr_0.85fr_0.85fr_0.9fr] [align-items:center] [border-bottom:1px_solid_#f4f4f4]">
                            <div className="[padding:16px] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                Biaya tetap terjangkau
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#9ca3af]">
                                    ✓
                                </span>
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#b4b4b4] [background:#efefef]">
                                    ✕
                                </span>
                            </div>
                            <div className="[display:flex] [align-items:center] [justify-content:center] [align-self:stretch] [padding:16px_8px] [background:#FFF7F7]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#D70808]">
                                    ✓
                                </span>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.5fr_0.85fr_0.85fr_0.9fr] [align-items:center] [border-bottom:1px_solid_#f4f4f4]">
                            <div className="[padding:16px] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                Jadwal bisa kamu atur sendiri
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#9ca3af]">
                                    ✓
                                </span>
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#b4b4b4] [background:#efefef]">
                                    ✕
                                </span>
                            </div>
                            <div className="[display:flex] [align-items:center] [justify-content:center] [align-self:stretch] [padding:16px_8px] [background:#FFF7F7]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#D70808]">
                                    ✓
                                </span>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.5fr_0.85fr_0.85fr_0.9fr] [align-items:center] [border-bottom:1px_solid_#f4f4f4]">
                            <div className="[padding:16px] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                Materi tersusun urut, tidak bingung
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#b4b4b4] [background:#efefef]">
                                    ✕
                                </span>
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#9ca3af]">
                                    ✓
                                </span>
                            </div>
                            <div className="[display:flex] [align-items:center] [justify-content:center] [align-self:stretch] [padding:16px_8px] [background:#FFF7F7]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#D70808]">
                                    ✓
                                </span>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.5fr_0.85fr_0.85fr_0.9fr] [align-items:center] [border-bottom:1px_solid_#f4f4f4]">
                            <div className="[padding:16px] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                Materi khusus pola soal TOEFL
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#b4b4b4] [background:#efefef]">
                                    ✕
                                </span>
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#b4b4b4] [background:#efefef]">
                                    ✕
                                </span>
                            </div>
                            <div className="[display:flex] [align-items:center] [justify-content:center] [align-self:stretch] [padding:16px_8px] [background:#FFF7F7]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#D70808]">
                                    ✓
                                </span>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.5fr_0.85fr_0.85fr_0.9fr] [align-items:center] [border-bottom:1px_solid_#f4f4f4]">
                            <div className="[padding:16px] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                Ada yang bisa ditanya kalau bingung
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#b4b4b4] [background:#efefef]">
                                    ✕
                                </span>
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#9ca3af]">
                                    ✓
                                </span>
                            </div>
                            <div className="[display:flex] [align-items:center] [justify-content:center] [align-self:stretch] [padding:16px_8px] [background:#FFF7F7]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#D70808]">
                                    ✓
                                </span>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.5fr_0.85fr_0.85fr_0.9fr] [align-items:center] [border-bottom:1px_solid_#f4f4f4]">
                            <div className="[padding:16px] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                Materi bisa diulang kapan pun
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#9ca3af]">
                                    ✓
                                </span>
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#b4b4b4] [background:#efefef]">
                                    ✕
                                </span>
                            </div>
                            <div className="[display:flex] [align-items:center] [justify-content:center] [align-self:stretch] [padding:16px_8px] [background:#FFF7F7]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#D70808]">
                                    ✓
                                </span>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.5fr_0.85fr_0.85fr_0.9fr] [align-items:center] [border-bottom:1px_solid_#f4f4f4]">
                            <div className="[padding:16px] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                Skor naik signifikan dalam 15 hari
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#b4b4b4] [background:#efefef]">
                                    ✕
                                </span>
                            </div>
                            <div className="[display:flex] [justify-content:center] [padding:16px_8px]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#b4b4b4] [background:#efefef]">
                                    ✕
                                </span>
                            </div>
                            <div className="[display:flex] [align-items:center] [justify-content:center] [align-self:stretch] [padding:16px_8px] [background:#FFF7F7]">
                                <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:13px] [font-weight:900] [color:#fff] [background:#D70808]">
                                    ✓
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="[margin:0_auto_18px] [max-width:560px]">
                        <div className="[overflow:hidden] [border-radius:16px] [line-height:0] [box-shadow:0_3px_16px_rgba(0,0,0,0.05)] [background:#fff] [border:1px_solid_#ececec]">
                            <img
                                src="/assets/pasted-1788585564773-0.png"
                                alt="Instruktur Full Bright menjelaskan pola soal TOEFL di kelas"
                                className="[display:block] [height:auto] [width:100%]"
                            />
                        </div>
                    </div>
                    <p className="[margin:0_auto_28px] [max-width:820px] [text-align:center] [font-size:19px] [line-height:1.6] [font-weight:800] [color:#151515]">
                        3 Metode Belajar yang Membuat Alumni Full Bright Naik
                        Skor dalam 15 Hari:
                    </p>

                    <div className="[margin-bottom:40px] [display:grid] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] [gap:16px]">
                        <div className="[display:flex] [flex-direction:column] [gap:16px] [border-radius:16px] [padding:28px] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)] [background:#fff] [border-left:4px_solid_#D70808] [border:1px_solid_#f3f4f6]">
                            <div className="[display:flex] [height:48px] [width:48px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:16px] [font-size:22px] [background:#FFF0F0]">
                                🎯
                            </div>
                            <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:16px] [line-height:1.3] [font-weight:900] [color:#151515]">
                                TOEFL Pattern Recognition Method™
                            </h3>
                            <p className="[margin:0] [font-size:14px] [line-height:1.7] [color:#3d3d3d]">
                                Belajar pola soal yang paling sering muncul agar
                                target skor lebih cepat tercapai, tanpa
                                menghabiskan waktu mempelajari semua materi.
                            </p>
                        </div>

                        <div className="[display:flex] [flex-direction:column] [gap:16px] [border-radius:16px] [padding:28px] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)] [background:#fff] [border-left:4px_solid_#151515] [border:1px_solid_#f3f4f6]">
                            <div className="[display:flex] [height:48px] [width:48px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:16px] [font-size:22px] [background:#F3F3F3]">
                                ⚡
                            </div>
                            <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:16px] [line-height:1.3] [font-weight:900] [color:#151515]">
                                Shortcut Structure Framework™
                            </h3>
                            <p className="[margin:0] [font-size:14px] [line-height:1.7] [color:#3d3d3d]">
                                Roadmap belajar disesuaikan dengan target skor,
                                sehingga kamu fokus pada materi yang paling
                                berdampak untuk mencapai skor.
                            </p>
                        </div>

                        <div className="[display:flex] [flex-direction:column] [gap:16px] [border-radius:16px] [padding:28px] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)] [background:#fff] [border-left:4px_solid_#D70808] [border:1px_solid_#f3f4f6]">
                            <div className="[display:flex] [height:48px] [width:48px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:16px] [font-size:22px] [background:#FFF0F0]">
                                📈
                            </div>
                            <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:16px] [line-height:1.3] [font-weight:900] [color:#151515]">
                                Score-Focused Learning System™
                            </h3>
                            <p className="[margin:0] [font-size:14px] [line-height:1.7] [color:#3d3d3d]">
                                Setiap sesi belajar difokuskan pada target skor
                                yang dibutuhkan, sehingga progresmu selalu
                                mengarah ke tujuan yang jelas.
                            </p>
                        </div>
                    </div>

                    <div className="[text-align:center]">
                        <div className="[display:flex] [flex-wrap:wrap] [justify-content:center] [gap:12px]">
                            <TrackedCTA
                                zone="midpage"
                                action="scroll"
                                label="Value - Gabung Sekarang"
                                href="#pricing"
                                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:14px_28px] [font-size:16px] [font-weight:700] [color:#fff] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [background:#D70808] [text-decoration:none]"
                            >
                                Gabung Sekarang →
                            </TrackedCTA>
                            <TrackedCTA
                                zone="midpage"
                                action="scroll"
                                label="Value - Lihat Bukti Alumni"
                                href="#testimonials"
                                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:14px_28px] [font-size:16px] [font-weight:700] [color:#151515] [border:2px_solid_#D70808] [text-decoration:none]"
                            >
                                Lihat Bukti Alumni →
                            </TrackedCTA>
                        </div>
                        <div className="[margin-top:12px] [display:flex] [flex-wrap:wrap] [align-items:center] [justify-content:center] [gap:8px_12px]">
                            <span className="[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [color:#6b7280]">
                                ★★★★★
                                <span className="[margin-left:4px]">
                                    4.9/5 Google Review
                                </span>
                            </span>
                            <span className="[font-size:12px] [color:#6b7280]">
                                •
                            </span>
                            <span className="[font-size:12px] [font-weight:600] [color:#6b7280]">
                                45.000+ Alumni Sukses
                            </span>
                            <span className="[font-size:12px] [color:#6b7280]">
                                •
                            </span>
                            <span className="[font-size:12px] [font-weight:600] [color:#6b7280]">
                                🛡 Garansi 100%
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
