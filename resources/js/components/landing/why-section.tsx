import { TrackedCTA } from '@/components/tracking/TrackedCTA';

export function WhySection() {
    return (
        <>
            <section
                id="why-fullbright"
                className="[padding:80px_24px] [background:#F3F3F3]"
            >
                <div className="[margin:0_auto] [max-width:1152px]">
                    <div className="[margin-bottom:48px] [text-align:center]">
                        <div className="[margin-bottom:20px] [display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                            🏅 Mengapa Full Bright?
                        </div>
                        <h2 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [color:#151515]">
                            Mengapa{' '}
                            <span className="[color:#D70808]">45.000+</span>{' '}
                            Orang Memilih Full Bright?
                        </h2>
                    </div>
                    <div className="[margin:0_auto_40px] [display:grid] [max-width:768px] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] [gap:16px]">
                        <div className="[display:flex] [align-items:flex-start] [gap:16px] [border-radius:16px] [padding:16px] [box-shadow:0_1px_8px_rgba(0,0,0,0.04)] [background:#fff]">
                            <div className="[margin-top:2px] [display:flex] [height:36px] [width:36px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:12px] [color:#fff] [background:#D70808]">
                                📖
                            </div>
                            <div className="[display:flex] [flex-direction:column] [gap:4px]">
                                <p className="[margin:0] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                    Lembaga Resmi ITP &amp; IIEF Jakarta
                                </p>
                                <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">
                                    Sertifikat terjamin sah dan diakui langsung
                                    sebagai syarat submission beasiswa luar
                                    negeri.
                                </p>
                            </div>
                        </div>

                        <div className="[display:flex] [align-items:flex-start] [gap:16px] [border-radius:16px] [padding:16px] [box-shadow:0_1px_8px_rgba(0,0,0,0.04)] [background:#fff]">
                            <div className="[margin-top:2px] [display:flex] [height:36px] [width:36px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:12px] [color:#fff] [background:#D70808]">
                                📈
                            </div>
                            <div className="[display:flex] [flex-direction:column] [gap:4px]">
                                <p className="[margin:0] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                    Alumni Lulus Beasiswa ke Luar Negeri
                                </p>
                                <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">
                                    UK, Jerman, Australia: bukti nyata metode
                                    belajar bertahap ini bekerja, bukan sekadar
                                    janji.
                                </p>
                            </div>
                        </div>

                        <div className="[display:flex] [align-items:flex-start] [gap:16px] [border-radius:16px] [padding:16px] [box-shadow:0_1px_8px_rgba(0,0,0,0.04)] [background:#fff]">
                            <div className="[margin-top:2px] [display:flex] [height:36px] [width:36px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:12px] [color:#fff] [background:#D70808]">
                                👥
                            </div>
                            <div className="[display:flex] [flex-direction:column] [gap:4px]">
                                <p className="[margin:0] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                    Pengajar Praktisi Skor 600+
                                </p>
                                <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">
                                    Belajar dari yang sudah membuktikan sendiri
                                    skornya, bukan yang cuma tahu teori.
                                </p>
                            </div>
                        </div>

                        <div className="[display:flex] [align-items:flex-start] [gap:16px] [border-radius:16px] [padding:16px] [box-shadow:0_1px_8px_rgba(0,0,0,0.04)] [background:#fff]">
                            <div className="[margin-top:2px] [display:flex] [height:36px] [width:36px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:12px] [color:#fff] [background:#D70808]">
                                ⏱
                            </div>
                            <div className="[display:flex] [flex-direction:column] [gap:4px]">
                                <p className="[margin:0] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                    Cukup 1 Jam Sehari, Mulai dari Sekarang
                                </p>
                                <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">
                                    Tidak perlu menunggu waktu luang besar. 1
                                    jam sehari dari sekarang jauh lebih ringan
                                    daripada belajar maraton menjelang deadline.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="[margin:0_auto_36px] [max-width:440px] [overflow:hidden] [border-radius:18px] [box-shadow:0_3px_16px_rgba(0,0,0,0.05)] [background:#fff] [border:1px_solid_#ececec]">
                        <div className="[line-height:0]">
                            <img
                                src="/assets/Foto Bareng.png"
                                alt="Tim instruktur Full Bright Indonesia"
                                className="[display:block] [height:auto] [width:100%]"
                            />
                        </div>
                        <p className="[margin:0] [padding:14px_18px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:13px] [font-weight:800] [color:#151515]">
                            Tim instruktur Full Bright, pengalaman 10+ tahun
                            mengajar TOEFL ITP
                        </p>
                    </div>

                    <div className="[text-align:center]">
                        <div className="[display:flex] [flex-wrap:wrap] [justify-content:center] [gap:12px]">
                            <TrackedCTA
                                zone="midpage"
                                action="scroll"
                                label="Why Full Bright - Gabung Sekarang"
                                href="#pricing"
                                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:14px_28px] [font-size:16px] [font-weight:700] [color:#fff] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [background:#D70808] [text-decoration:none]"
                            >
                                Gabung Sekarang →
                            </TrackedCTA>
                            <TrackedCTA
                                zone="midpage"
                                action="scroll"
                                label="Why Full Bright - Lihat Bukti Alumni"
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
