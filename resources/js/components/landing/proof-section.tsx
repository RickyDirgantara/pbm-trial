import { useCallback, useEffect, useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { WA_SCREENSHOTS } from './constants';
import { css, lbImgStyle } from './styles';

export function ProofSection() {
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

    const closeLightbox = useCallback((): void => setLightboxIdx(null), []);
    const prevPhoto = useCallback(
        (): void =>
            setLightboxIdx(
                (i) =>
                    ((i ?? 0) - 1 + WA_SCREENSHOTS.length) %
                    WA_SCREENSHOTS.length,
            ),
        [],
    );
    const nextPhoto = useCallback(
        (): void =>
            setLightboxIdx((i) => ((i ?? 0) + 1) % WA_SCREENSHOTS.length),
        [],
    );

    useEffect(() => {
        if (lightboxIdx === null) {
            return;
        }

        const onKey = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                prevPhoto();
            } else if (e.key === 'ArrowRight') {
                nextPhoto();
            }
        };
        window.addEventListener('keydown', onKey);

        return () => window.removeEventListener('keydown', onKey);
    }, [lightboxIdx, closeLightbox, prevPhoto, nextPhoto]);

    return (
        <>
            <section
                id="proof"
                className="[padding:72px_24px] [background:#fff]"
            >
                <div className="[margin:0_auto] [max-width:672px]">
                    <div className="[margin-bottom:36px] [text-align:center]">
                        <div className="[margin-bottom:20px] [display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                            📱 Bukti Nyata dari Alumni
                        </div>
                        <h2 className="[margin:0_0_14px] [font-family:Nunito,sans-serif] [font-size:clamp(24px,3vw,36px)] [line-height:1.25] [font-weight:900] [color:#151515]">
                            Metode Kami Berhasil Membuat
                            <br />
                            <span className="[font-size:26.46px] [color:#d70808]">
                                Ribuan Alumni Kami Capai TOEFL 500+&nbsp;
                            </span>
                        </h2>

                        <p className="[margin:0] [font-size:14px] [color:#6b7280]">
                            Klik foto untuk memperbesar
                        </p>
                    </div>

                    <div className="[margin:0_auto_32px] [display:flex] [max-width:420px] [flex-direction:column]">
                        <div
                            className="[display:flex] [cursor:pointer] [flex-direction:column] [align-items:center] [gap:10px] [padding:20px_0] [border-bottom:1px_solid_#e5e7eb]"
                            onClick={() => setLightboxIdx(0)}
                        >
                            <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:18px] [font-weight:800] [color:#151515]">
                                Skor{' '}
                                <span className="[color:#D70808]">547</span>
                            </p>
                            <div className="[aspect-ratio:1/1] [width:100%] [overflow:hidden] [border-radius:14px] [background-image:url(/assets/toefl1.webp)] [background-size:cover] [background-position:center] [box-shadow:0_6px_24px_rgba(0,0,0,0.18)]"></div>
                        </div>

                        <div
                            className="[display:flex] [cursor:pointer] [flex-direction:column] [align-items:center] [gap:10px] [padding:20px_0] [border-bottom:1px_solid_#e5e7eb]"
                            onClick={() => setLightboxIdx(1)}
                        >
                            <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:18px] [font-weight:800] [color:#151515]">
                                Skor{' '}
                                <span className="[color:#D70808]">543</span>
                            </p>
                            <div className="[aspect-ratio:1/1] [width:100%] [overflow:hidden] [border-radius:14px] [background-image:url(/assets/toefl2.webp)] [background-size:cover] [background-position:center] [box-shadow:0_6px_24px_rgba(0,0,0,0.18)]"></div>
                        </div>

                        <div
                            className="[display:flex] [cursor:pointer] [flex-direction:column] [align-items:center] [gap:10px] [padding:20px_0] [border-bottom:1px_solid_#e5e7eb]"
                            onClick={() => setLightboxIdx(2)}
                        >
                            <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:18px] [font-weight:800] [color:#151515]">
                                Skor{' '}
                                <span className="[color:#D70808]">563</span>
                            </p>
                            <div className="[aspect-ratio:1/1] [width:100%] [overflow:hidden] [border-radius:14px] [background-image:url(/assets/toefl3.webp)] [background-size:cover] [background-position:center] [box-shadow:0_6px_24px_rgba(0,0,0,0.18)]"></div>
                        </div>
                    </div>

                    <div className="[text-align:center]">
                        <div className="[display:flex] [flex-wrap:wrap] [justify-content:center] [gap:12px]">
                            <TrackedCTA
                                zone="midpage"
                                action="scroll"
                                label="Proof - Gabung Sekarang"
                                href="#pricing"
                                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:14px_28px] [font-size:16px] [font-weight:700] [color:#fff] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [background:#D70808] [text-decoration:none]"
                            >
                                Gabung Sekarang →
                            </TrackedCTA>
                            <TrackedCTA
                                zone="midpage"
                                action="scroll"
                                label="Proof - Lihat Lebih Banyak Bukti"
                                href="#testimonials"
                                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:14px_28px] [font-size:16px] [font-weight:700] [color:#151515] [border:2px_solid_#D70808] [text-decoration:none]"
                            >
                                Lihat Lebih Banyak Bukti →
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

            {/* Photo Lightbox */}
            {lightboxIdx !== null ? (
                <>
                    <div
                        className="[position:fixed] [inset:0] [z-index:50] [display:flex] [align-items:center] [justify-content:center] [background:rgba(0,0,0,0.92)]"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="[position:absolute] [top:16px] [right:16px] [cursor:pointer] [font-size:28px] [color:rgba(255,255,255,0.7)] [background:none] [border:none]"
                        >
                            ✕
                        </button>
                        <button
                            onClick={prevPhoto}
                            className="[position:absolute] [left:16px] [cursor:pointer] [padding:8px] [font-size:36px] [color:rgba(255,255,255,0.7)] [background:none] [border:none]"
                        >
                            ‹
                        </button>
                        <div
                            className="[display:flex] [flex-direction:column] [align-items:center] [gap:16px] [padding:0_64px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                role="img"
                                aria-label="Score"
                                style={css(lbImgStyle(lightboxIdx))}
                            ></div>
                            <p className="[margin:0] [font-size:14px] [color:rgba(255,255,255,0.6)]">
                                Skor {WA_SCREENSHOTS[lightboxIdx ?? 0].score}
                            </p>
                            <p className="[margin:0] [font-size:12px] [color:rgba(255,255,255,0.4)]">
                                {(lightboxIdx ?? 0) + 1} /{' '}
                                {WA_SCREENSHOTS.length}
                            </p>
                        </div>
                        <button
                            onClick={nextPhoto}
                            className="[position:absolute] [right:16px] [cursor:pointer] [padding:8px] [font-size:36px] [color:rgba(255,255,255,0.7)] [background:none] [border:none]"
                        >
                            ›
                        </button>
                    </div>
                </>
            ) : null}
        </>
    );
}
