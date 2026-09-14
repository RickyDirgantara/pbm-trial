import { useCallback, useRef, useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';

export function LmsSection() {
    const lmsVideoRef = useRef<HTMLVideoElement | null>(null);
    const [lmsPosterVisible, setLmsPosterVisible] = useState<boolean>(true);

    /* The showcase has no poster image: park it on a representative frame instead. */
    const seekLmsPoster = useCallback((): void => {
        const video = lmsVideoRef.current;

        if (!video || !Number.isFinite(video.duration)) {
            return;
        }

        video.currentTime = Math.min(4, Math.max(0, video.duration - 0.1));
    }, []);
    const hideLmsPoster = useCallback(
        (): void => setLmsPosterVisible(false),
        [],
    );
    const playLmsVideo = useCallback((): void => {
        const video = lmsVideoRef.current;

        if (!video) {
            return;
        }

        video.currentTime = 0;
        void video.play();
    }, []);

    return (
        <>
            <section id="lms" className="[padding:80px_24px] [background:#fff]">
                <div className="[margin:0_auto] [max-width:1152px]">
                    <div className="[margin-bottom:48px] [text-align:center]">
                        <div className="[margin-bottom:20px] [display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                            💻 Tampilan LMS
                        </div>
                        <h2 className="[margin:0_0_16px] [font-family:Nunito,sans-serif] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [color:#151515]">
                            Intip Langsung{' '}
                            <span className="[color:#D70808]">
                                Platform Belajarnya
                            </span>
                        </h2>
                        <p className="[margin:0] [margin-right:auto] [margin-left:auto] [max-width:560px] [font-size:16px] [line-height:1.6] [color:#3d3d3d]">
                            Semua yang kamu butuhkan untuk mengetahui kelemahan,
                            belajar, berlatih, dan menghadapi ujian.
                        </p>
                    </div>

                    <div className="[position:relative] [margin:0_auto_40px] [max-width:1040px] [overflow:hidden] [border-radius:18px] [line-height:0] [box-shadow:0_8px_28px_rgba(0,0,0,0.18)] [background:#151515]">
                        <video
                            ref={lmsVideoRef}
                            controls
                            preload="metadata"
                            playsInline
                            onLoadedMetadata={seekLmsPoster}
                            onPlay={hideLmsPoster}
                            className="[display:block] [aspect-ratio:16/9] [width:100%] [object-fit:cover] [background:#151515]"
                        >
                            <source
                                src="/assets/lms-showcase.mp4#t=4"
                                type="video/mp4"
                            />
                            Browser kamu tidak mendukung pemutaran video.
                        </video>
                        {lmsPosterVisible ? (
                            <button
                                type="button"
                                onClick={playLmsVideo}
                                aria-label="Putar video tampilan LMS"
                                className="[position:absolute] [inset:0] [display:flex] [cursor:pointer] [align-items:center] [justify-content:center] [background:rgba(21,21,21,0.22)] [border:0] [transition:background_0.2s_ease] hover:[background:rgba(21,21,21,0.32)]"
                            >
                                <div className="[position:absolute] [inset:0] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [gap:14px] [background:rgba(21,21,21,0.35)]">
                                    <span className="[display:flex] [height:76px] [width:76px] [align-items:center] [justify-content:center] [border-radius:9999px] [box-shadow:0_8px_28px_rgba(215,8,8,0.5)] [background:#D70808]">
                                        <svg
                                            width="30"
                                            height="30"
                                            viewBox="0 0 24 24"
                                            fill="#fff"
                                        >
                                            <path d="M8 5.5v13l11-6.5z"></path>
                                        </svg>
                                    </span>
                                    <span className="[font-family:Nunito,sans-serif] [font-size:13px] [font-weight:800] [color:#fff] [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
                                        Putar showcase LMS
                                    </span>
                                </div>
                            </button>
                        ) : null}
                    </div>

                    <div className="[margin:0_auto_40px] [display:flex] [max-width:1040px] [flex-direction:column] [gap:20px]">
                        <div className="[display:grid] [grid-template-columns:1.35fr_1fr] [align-items:stretch] [overflow:hidden] [border-radius:22px] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#ececec] max-[899px]:[grid-template-columns:1fr]">
                            <div className="[display:flex] [flex-direction:column] [justify-content:center] [padding:22px] [background:#FAFAFA]">
                                <div className="[overflow:hidden] [border-radius:12px] [line-height:0] [box-shadow:0_4px_18px_rgba(0,0,0,0.09)] [background:#fff] [border:1px_solid_#e5e7eb]">
                                    <img
                                        src="/lms/lms-1.webp"
                                        width={1920}
                                        height={1200}
                                        loading="lazy"
                                        alt="Tidak Lagi Bingung Harus Mulai dari Mana"
                                        className="[display:block] [height:auto] [width:100%]"
                                    />
                                </div>
                            </div>
                            <div className="[display:flex] [flex-direction:column] [justify-content:center] [gap:11px] [padding:24px_26px]">
                                <div className="[display:flex] [flex-wrap:wrap] [align-items:center] [gap:10px]">
                                    <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                        01
                                    </span>
                                    <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                        Diagnostic Test
                                    </span>
                                    <span className="[display:inline-flex] [align-items:baseline] [gap:5px] [border-radius:9999px] [padding:6px_13px] [font-family:Nunito,sans-serif] [font-size:15px] [font-weight:900] [white-space:nowrap] [color:#D70808] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <span className="[font-size:10px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                                            Senilai
                                        </span>
                                        Rp 120.000
                                    </span>
                                </div>
                                <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.2vw,22px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                                    Tidak Lagi Bingung Harus Mulai dari Mana
                                </h3>
                                <p className="[margin:0] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                                    Kerjakan Diagnostic Test lebih dulu untuk
                                    mengetahui baseline skor TOEFL ITP kamu.
                                    Hasilnya menentukan materi mana yang perlu
                                    diprioritaskan.
                                </p>
                                <div className="[margin-top:2px] [display:flex] [flex-wrap:wrap] [gap:7px]">
                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Baseline skor per section
                                    </span>

                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Materi prioritas otomatis
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1fr_1.35fr] [align-items:stretch] [overflow:hidden] [border-radius:22px] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#ececec] max-[899px]:[grid-template-columns:1fr]">
                            <div className="[order:2] [display:flex] [flex-direction:column] [justify-content:center] [padding:22px] [background:#FAFAFA] max-[899px]:[order:initial]">
                                <div className="[overflow:hidden] [border-radius:12px] [line-height:0] [box-shadow:0_4px_18px_rgba(0,0,0,0.09)] [background:#fff] [border:1px_solid_#e5e7eb]">
                                    <img
                                        src="/lms/lms-2.webp"
                                        width={1920}
                                        height={1200}
                                        loading="lazy"
                                        alt="Materi Sudah Urut, Kamu Tinggal Mengikuti"
                                        className="[display:block] [height:auto] [width:100%]"
                                    />
                                </div>
                            </div>
                            <div className="[order:1] [display:flex] [flex-direction:column] [justify-content:center] [gap:11px] [padding:24px_26px] max-[899px]:[order:initial]">
                                <div className="[display:flex] [flex-wrap:wrap] [align-items:center] [gap:10px]">
                                    <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                        02
                                    </span>
                                    <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                        Materi &amp; Roadmap
                                    </span>
                                    <span className="[display:inline-flex] [align-items:baseline] [gap:5px] [border-radius:9999px] [padding:6px_13px] [font-family:Nunito,sans-serif] [font-size:15px] [font-weight:900] [white-space:nowrap] [color:#D70808] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <span className="[font-size:10px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                                            Senilai
                                        </span>
                                        Rp 300.000
                                    </span>
                                </div>
                                <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.2vw,22px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                                    Materi Sudah Urut, Kamu Tinggal Mengikuti
                                </h3>
                                <p className="[margin:0] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                                    Materi Structure, Listening, dan Reading
                                    tersusun rapi dari Hari 1 sampai Hari 15,
                                    jadi kamu tidak perlu menyusun sendiri
                                    urutan belajarnya.
                                </p>
                                <div className="[margin-top:2px] [display:flex] [flex-wrap:wrap] [gap:7px]">
                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        60 video full skills
                                    </span>

                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Urut Hari 1–15
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.35fr_1fr] [align-items:stretch] [overflow:hidden] [border-radius:22px] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#ececec] max-[899px]:[grid-template-columns:1fr]">
                            <div className="[display:flex] [flex-direction:column] [justify-content:center] [padding:22px] [background:#FAFAFA]">
                                <div className="[overflow:hidden] [border-radius:12px] [line-height:0] [box-shadow:0_4px_18px_rgba(0,0,0,0.09)] [background:#fff] [border:1px_solid_#e5e7eb]">
                                    <img
                                        src="/lms/lms-3.webp"
                                        width={1474}
                                        height={924}
                                        loading="lazy"
                                        alt="Kalau Bingung, Ada yang Langsung Menjawab"
                                        className="[display:block] [height:auto] [width:100%]"
                                    />
                                </div>
                            </div>
                            <div className="[display:flex] [flex-direction:column] [justify-content:center] [gap:11px] [padding:24px_26px]">
                                <div className="[display:flex] [flex-wrap:wrap] [align-items:center] [gap:10px]">
                                    <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                        03
                                    </span>
                                    <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                        AI Assistant
                                    </span>
                                    <span className="[display:inline-flex] [align-items:baseline] [gap:5px] [border-radius:9999px] [padding:6px_13px] [font-family:Nunito,sans-serif] [font-size:15px] [font-weight:900] [white-space:nowrap] [color:#D70808] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <span className="[font-size:10px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                                            Senilai
                                        </span>
                                        Rp 100.000
                                    </span>
                                </div>
                                <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.2vw,22px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                                    Kalau Bingung, Ada yang Langsung Menjawab
                                </h3>
                                <p className="[margin:0] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                                    Setiap video dilengkapi rangkuman materi dan
                                    AI Assistant yang siap menjelaskan ulang
                                    topik yang belum kamu pahami, tanpa perlu
                                    menunggu jadwal.
                                </p>
                                <div className="[margin-top:2px] [display:flex] [flex-wrap:wrap] [gap:7px]">
                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Rangkuman tiap video
                                    </span>

                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Tanya AI 24/7
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1fr_1.35fr] [align-items:stretch] [overflow:hidden] [border-radius:22px] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#ececec] max-[899px]:[grid-template-columns:1fr]">
                            <div className="[order:2] [display:flex] [flex-direction:column] [justify-content:center] [padding:22px] [background:#FAFAFA] max-[899px]:[order:initial]">
                                <div className="[overflow:hidden] [border-radius:12px] [line-height:0] [box-shadow:0_4px_18px_rgba(0,0,0,0.09)] [background:#fff] [border:1px_solid_#e5e7eb]">
                                    <img
                                        src="/lms/lms-4.webp"
                                        width={1920}
                                        height={1200}
                                        loading="lazy"
                                        alt="Tahu Persis Bagian yang Belum Kamu Kuasai"
                                        className="[display:block] [height:auto] [width:100%]"
                                    />
                                </div>
                            </div>
                            <div className="[order:1] [display:flex] [flex-direction:column] [justify-content:center] [gap:11px] [padding:24px_26px] max-[899px]:[order:initial]">
                                <div className="[display:flex] [flex-wrap:wrap] [align-items:center] [gap:10px]">
                                    <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                        04
                                    </span>
                                    <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                        Latihan Soal
                                    </span>
                                    <span className="[display:inline-flex] [align-items:baseline] [gap:5px] [border-radius:9999px] [padding:6px_13px] [font-family:Nunito,sans-serif] [font-size:15px] [font-weight:900] [white-space:nowrap] [color:#D70808] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <span className="[font-size:10px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                                            Senilai
                                        </span>
                                        Rp 150.000
                                    </span>
                                </div>
                                <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.2vw,22px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                                    Tahu Persis Bagian yang Belum Kamu Kuasai
                                </h3>
                                <p className="[margin:0] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                                    Setiap topik punya latihan soal dengan
                                    navigasi antar nomor dan progress tracker,
                                    jadi kamu tahu persis bagian mana yang belum
                                    dikuasai.
                                </p>
                                <div className="[margin-top:2px] [display:flex] [flex-wrap:wrap] [gap:7px]">
                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Latihan per topik
                                    </span>

                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Progress tracker
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.35fr_1fr] [align-items:stretch] [overflow:hidden] [border-radius:22px] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#ececec] max-[899px]:[grid-template-columns:1fr]">
                            <div className="[display:flex] [flex-direction:column] [justify-content:center] [padding:22px] [background:#FAFAFA]">
                                <div className="[overflow:hidden] [border-radius:12px] [line-height:0] [box-shadow:0_4px_18px_rgba(0,0,0,0.09)] [background:#fff] [border:1px_solid_#e5e7eb]">
                                    <img
                                        src="/lms/lms-5.webp"
                                        width={1920}
                                        height={1200}
                                        loading="lazy"
                                        alt="Kesalahan yang Sama Tidak Terulang Lagi"
                                        className="[display:block] [height:auto] [width:100%]"
                                    />
                                </div>
                            </div>
                            <div className="[display:flex] [flex-direction:column] [justify-content:center] [gap:11px] [padding:24px_26px]">
                                <div className="[display:flex] [flex-wrap:wrap] [align-items:center] [gap:10px]">
                                    <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                        05
                                    </span>
                                    <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                        Drill Soal
                                    </span>
                                    <span className="[display:inline-flex] [align-items:baseline] [gap:5px] [border-radius:9999px] [padding:6px_13px] [font-family:Nunito,sans-serif] [font-size:15px] [font-weight:900] [white-space:nowrap] [color:#D70808] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <span className="[font-size:10px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                                            Senilai
                                        </span>
                                        Rp 100.000
                                    </span>
                                </div>
                                <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.2vw,22px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                                    Kesalahan yang Sama Tidak Terulang Lagi
                                </h3>
                                <p className="[margin:0] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                                    Asah kemampuan spesifik lewat drill per
                                    skill — Listening, Structure, dan Reading —
                                    dengan paket soal yang bisa diulang sampai
                                    benar-benar paham.
                                </p>
                                <div className="[margin-top:2px] [display:flex] [flex-wrap:wrap] [gap:7px]">
                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        84 paket drill
                                    </span>

                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Bisa diulang tanpa batas
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1fr_1.35fr] [align-items:stretch] [overflow:hidden] [border-radius:22px] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#ececec] max-[899px]:[grid-template-columns:1fr]">
                            <div className="[order:2] [display:flex] [flex-direction:column] [justify-content:center] [padding:22px] [background:#FAFAFA] max-[899px]:[order:initial]">
                                <div className="[overflow:hidden] [border-radius:12px] [line-height:0] [box-shadow:0_4px_18px_rgba(0,0,0,0.09)] [background:#fff] [border:1px_solid_#e5e7eb]">
                                    <img
                                        src="/lms/lms-6.webp"
                                        width={1920}
                                        height={1200}
                                        loading="lazy"
                                        alt="Supaya Nanti Saat Tes TOEFL Asli Tidak Kaget"
                                        className="[display:block] [height:auto] [width:100%]"
                                    />
                                </div>
                            </div>
                            <div className="[order:1] [display:flex] [flex-direction:column] [justify-content:center] [gap:11px] [padding:24px_26px] max-[899px]:[order:initial]">
                                <div className="[display:flex] [flex-wrap:wrap] [align-items:center] [gap:10px]">
                                    <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                        06
                                    </span>
                                    <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                        Simulasi &amp; Ujian
                                    </span>
                                    <span className="[display:inline-flex] [align-items:baseline] [gap:5px] [border-radius:9999px] [padding:6px_13px] [font-family:Nunito,sans-serif] [font-size:15px] [font-weight:900] [white-space:nowrap] [color:#D70808] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <span className="[font-size:10px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                                            Senilai
                                        </span>
                                        Rp 150.000
                                    </span>

                                    <span className="[border-radius:9999px] [padding:4px_9px] [font-size:10px] [font-weight:800] [color:#D70808] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                                        Khusus Dibimbing Tutor
                                    </span>
                                </div>
                                <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.2vw,22px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                                    Supaya Nanti Saat Tes TOEFL Asli Tidak Kaget
                                </h3>
                                <p className="[margin:0] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                                    Mode Simulasi tanpa timer dengan feedback
                                    instan untuk latihan, dan Mode Final dengan
                                    timer serta kondisi seperti ujian TOEFL ITP
                                    sebenarnya.
                                </p>
                                <div className="[margin-top:2px] [display:flex] [flex-wrap:wrap] [gap:7px]">
                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Mode latihan + feedback
                                    </span>

                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Mode Final bertimer
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="[display:grid] [grid-template-columns:1.35fr_1fr] [align-items:stretch] [overflow:hidden] [border-radius:22px] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#ececec] max-[899px]:[grid-template-columns:1fr]">
                            <div className="[display:flex] [flex-direction:column] [justify-content:center] [padding:22px] [background:#FAFAFA]">
                                <div className="[overflow:hidden] [border-radius:12px] [line-height:0] [box-shadow:0_4px_18px_rgba(0,0,0,0.09)] [background:#fff] [border:1px_solid_#e5e7eb]">
                                    <img
                                        src="/lms/lms-7.webp"
                                        width={1920}
                                        height={1200}
                                        loading="lazy"
                                        alt="Progresmu Terlihat, Bukan Cuma Terasa Sibuk"
                                        className="[display:block] [height:auto] [width:100%]"
                                    />
                                </div>
                            </div>
                            <div className="[display:flex] [flex-direction:column] [justify-content:center] [gap:11px] [padding:24px_26px]">
                                <div className="[display:flex] [flex-wrap:wrap] [align-items:center] [gap:10px]">
                                    <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                                        07
                                    </span>
                                    <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                        Dashboard Progress
                                    </span>
                                    <span className="[display:inline-flex] [align-items:baseline] [gap:5px] [border-radius:9999px] [padding:6px_13px] [font-family:Nunito,sans-serif] [font-size:15px] [font-weight:900] [white-space:nowrap] [color:#D70808] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                                        <span className="[font-size:10px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                                            Senilai
                                        </span>
                                        Rp 85.000
                                    </span>
                                </div>
                                <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.2vw,22px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                                    Progresmu Terlihat, Bukan Cuma Terasa Sibuk
                                </h3>
                                <p className="[margin:0] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                                    Soal dikerjakan, akurasi, waktu belajar,
                                    streak harian, hingga tren skor per section
                                    terekam otomatis, jadi progresmu selalu
                                    terlihat jelas.
                                </p>
                                <div className="[margin-top:2px] [display:flex] [flex-wrap:wrap] [gap:7px]">
                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Akurasi &amp; streak harian
                                    </span>

                                    <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]">
                                        <span className="[font-weight:900] [color:#D70808]">
                                            ✓
                                        </span>
                                        Tren skor per section
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="[margin:0_auto_44px] [max-width:560px] [border-radius:22px] [padding:26px_24px] [text-align:center] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1.5px_solid_#ffd6d6]">
                        <p className="[margin:0_0_8px] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                            Total nilai semua fitur di atas
                        </p>
                        <p className="[margin:0_0_12px] [font-family:Nunito,sans-serif] [font-size:clamp(30px,5vw,40px)] [line-height:1] [font-weight:900] [color:#6b7280] [text-decoration-color:#D70808] [text-decoration-thickness:3px] [text-decoration:line-through]">
                            Rp 1.005.000
                        </p>
                        <p className="[margin:0_0_6px] [font-size:12px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                            MULAI DARI HANYA
                        </p>
                        <p className="[margin:0_0_8px] [font-family:Nunito,sans-serif] [font-size:clamp(32px,5.4vw,44px)] [line-height:1] [font-weight:900] [color:#D70808]">
                            Rp 99.000
                        </p>
                    </div>

                    <div className="[text-align:center]">
                        <p className="[margin:0_0_20px] [margin-right:auto] [margin-left:auto] [max-width:520px] [font-family:Nunito,sans-serif] [font-size:18px] [line-height:1.5] [font-weight:700] [color:#151515]">
                            Semua fitur ini bisa kamu akses{' '}
                            <span className="[color:#D70808]">
                                begitu kamu bergabung
                            </span>
                            .
                        </p>
                        <div className="[display:flex] [flex-wrap:wrap] [justify-content:center] [gap:12px]">
                            <TrackedCTA
                                zone="midpage"
                                action="scroll"
                                label="LMS - Gabung Sekarang"
                                href="#pricing"
                                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:14px_28px] [font-size:16px] [font-weight:700] [color:#fff] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [background:#D70808] [text-decoration:none]"
                            >
                                Gabung Sekarang →
                            </TrackedCTA>
                            <TrackedCTA
                                zone="midpage"
                                action="scroll"
                                label="LMS - Lihat Bukti Alumni"
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
                                🛡️ Garansi 100%
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
