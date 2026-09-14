import { useCallback, useEffect, useRef, useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { REVIEW_COUNT, reviewSrc, SCORE_MARQUEE } from './constants';
import { css, gSideStyle, rvImgStyle } from './styles';

export function TestimonialsSection() {
    const [reviewIdx, setReviewIdx] = useState<number | null>(null);
    const [gIdx, setGIdx] = useState<number>(0);
    const [showOverlay, setShowOverlay] = useState<boolean>(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    /* Google review carousel autoplay */
    useEffect(() => {
        const id = window.setInterval(
            () => setGIdx((i) => (i + 1) % REVIEW_COUNT),
            3000,
        );

        return () => window.clearInterval(id);
    }, [gIdx]);

    const closeReview = useCallback((): void => setReviewIdx(null), []);
    const prevReview = useCallback(
        (): void =>
            setReviewIdx((i) => ((i ?? 0) - 1 + REVIEW_COUNT) % REVIEW_COUNT),
        [],
    );
    const nextReview = useCallback(
        (): void => setReviewIdx((i) => ((i ?? 0) + 1) % REVIEW_COUNT),
        [],
    );
    const prevGoogle = useCallback(
        (): void => setGIdx((i) => (i - 1 + REVIEW_COUNT) % REVIEW_COUNT),
        [],
    );
    const nextGoogle = useCallback(
        (): void => setGIdx((i) => (i + 1) % REVIEW_COUNT),
        [],
    );
    const playVideo = useCallback((): void => {
        if (videoRef.current?.paused) {
            void videoRef.current.play();
        }
    }, []);

    useEffect(() => {
        if (reviewIdx === null) {
            return;
        }

        const onKey = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                closeReview();
            } else if (e.key === 'ArrowLeft') {
                prevReview();
            } else if (e.key === 'ArrowRight') {
                nextReview();
            }
        };
        window.addEventListener('keydown', onKey);

        return () => window.removeEventListener('keydown', onKey);
    }, [reviewIdx, closeReview, prevReview, nextReview]);

    return (
        <>
            <section id="testimonials">
                <div className="[padding:40px_24px] [background:#151515]">
                    <div className="[margin:0_auto] [display:grid] [max-width:1152px] [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] [gap:32px] [text-align:center] [color:#fff]">
                        <div>
                            <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(32px,4vw,48px)] [font-weight:900] [letter-spacing:-0.02em]">
                                45.000+
                            </p>
                            <p className="[margin:6px_0_0] [font-size:12px] [font-weight:500] [letter-spacing:0.02em] [opacity:0.75]">
                                Alumni Sukses
                            </p>
                        </div>

                        <div>
                            <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(32px,4vw,48px)] [font-weight:900] [letter-spacing:-0.02em]">
                                4.9/5
                            </p>
                            <p className="[margin:6px_0_0] [font-size:12px] [font-weight:500] [letter-spacing:0.02em] [opacity:0.75]">
                                Rating Rata-rata
                            </p>
                        </div>

                        <div>
                            <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(32px,4vw,48px)] [font-weight:900] [letter-spacing:-0.02em]">
                                13+
                            </p>
                            <p className="[margin:6px_0_0] [font-size:12px] [font-weight:500] [letter-spacing:0.02em] [opacity:0.75]">
                                Tahun Pengalaman
                            </p>
                        </div>

                        <div>
                            <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(32px,4vw,48px)] [font-weight:900] [letter-spacing:-0.02em]">
                                95%
                            </p>
                            <p className="[margin:6px_0_0] [font-size:12px] [font-weight:500] [letter-spacing:0.02em] [opacity:0.75]">
                                Skor Naik Signifikan
                            </p>
                        </div>
                    </div>
                </div>
                <div className="[padding:80px_24px] [background:#fff]">
                    <div className="[margin:0_auto] [max-width:1152px]">
                        <div className="[margin-bottom:48px] [text-align:center]">
                            <div className="[margin-bottom:20px] [display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                                💬 Testimoni Alumni Kami
                            </div>
                            <h2 className="[margin:0_0_16px] [font-family:Nunito,sans-serif] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [color:#151515]">
                                Lihat Bagaimana Strategi Kami Membantu Alumni
                                <br />
                                <span className="[color:rgb(215,_8,_8)]">
                                    Meraih Target Skor Untuk Beasiswa &amp; CPNS
                                </span>
                            </h2>
                            <p className="[margin:0] [font-size:14px] [color:#6b7280]">
                                Klik foto untuk memperbesar
                            </p>
                        </div>

                        <div className="[margin-bottom:56px] [overflow:hidden] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                            <div className="[display:flex] [width:max-content] [animation:infiniteScroll_35s_linear_infinite]">
                                {SCORE_MARQUEE.map((shot, i) => (
                                    <div
                                        key={`${shot.src}-${i}`}
                                        className="[margin:0_8px] [display:flex] [flex-shrink:0] [flex-direction:column] [align-items:center] [gap:8px]"
                                    >
                                        <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:16px] [font-weight:800] [color:#151515]">
                                            Skor{' '}
                                            <span className="[color:#D70808]">
                                                {shot.score}
                                            </span>
                                        </p>
                                        <img
                                            src={shot.src}
                                            alt={`Bukti skor TOEFL ${shot.score}`}
                                            loading="lazy"
                                            width={415}
                                            height={547}
                                            className="[display:block] [aspect-ratio:9/16] [width:130px] [border-radius:12px] [object-fit:cover] [box-shadow:0_4px_16px_rgba(0,0,0,0.15)]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="[margin:0_auto_56px] [width:100%] [max-width:896px]">
                            <p className="[margin:0_0_24px] [text-align:center] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                Testimoni Alumni yang Sukses Masuk Universitas
                                Luar Negeri
                            </p>
                            <div className="[display:grid] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] [gap:16px]">
                                <div className="[display:flex] [min-width:0] [flex-direction:column] [gap:12px] [border-radius:16px] [padding:20px] [box-shadow:0_2px_16px_rgba(0,0,0,0.05)] [background:#F9F9F9] [border:1px_solid_#f3f4f6]">
                                    <span className="[align-self:flex-start] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#D70808] [background:#FFF0F0]">
                                        University of Nottingham, UK
                                    </span>
                                    <p className="[margin:0] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase]">
                                        Sangat Terjangkau Untuk Mahasiswa
                                    </p>
                                    <p className="[margin:0] [flex:1] [font-size:14px] [line-height:1.6] [color:#3d3d3d]">
                                        "Full Bright ini tempat yang paling
                                        "pas" buat teman-teman Mahasiswa
                                        menaklukkan Tes TOEFL &amp; IELTS"
                                    </p>
                                    <div className="[display:flex] [align-items:center] [gap:12px] [padding-top:8px] [border-top:1px_solid_#f3f4f6]">
                                        <div
                                            role="img"
                                            aria-label="Andi Manggala Putra"
                                            className="[height:40px] [width:40px] [flex-shrink:0] [border-radius:9999px] [background-image:url(/assets/People%201.webp)] [background-size:cover] [background-position:center]"
                                        ></div>
                                        <div className="[min-width:0] [flex:1]">
                                            <p className="[margin:0] [overflow:hidden] [font-family:Nunito,sans-serif] [font-size:14px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                                Andi Manggala Putra
                                            </p>
                                            <p className="[margin:0] [overflow:hidden] [font-size:12px] [text-overflow:ellipsis] [white-space:nowrap] [color:#6b7280]">
                                                Accounting and Finance
                                            </p>
                                        </div>
                                        <span className="[flex-shrink:0] [font-size:12px] [color:#F59E0B]">
                                            ★★★★★
                                        </span>
                                    </div>
                                </div>

                                <div className="[display:flex] [min-width:0] [flex-direction:column] [gap:12px] [border-radius:16px] [padding:20px] [box-shadow:0_2px_16px_rgba(0,0,0,0.05)] [background:#F9F9F9] [border:1px_solid_#f3f4f6]">
                                    <span className="[align-self:flex-start] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#D70808] [background:#FFF0F0]">
                                        Stuttgart University, Germany
                                    </span>
                                    <p className="[margin:0] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase]">
                                        A Good Place to Learn TOEFL &amp; IELTS
                                    </p>
                                    <p className="[margin:0] [flex:1] [font-size:14px] [line-height:1.6] [color:#3d3d3d]">
                                        "Fullbright growing together with their
                                        students. This place is good place to
                                        learn TOEFL &amp; IELTS. Thank you for
                                        the teacher and friendly staff. Now I
                                        can see the world"
                                    </p>
                                    <div className="[display:flex] [align-items:center] [gap:12px] [padding-top:8px] [border-top:1px_solid_#f3f4f6]">
                                        <div
                                            role="img"
                                            aria-label="Hajrah"
                                            className="[height:40px] [width:40px] [flex-shrink:0] [border-radius:9999px] [background-image:url(/assets/People%202.webp)] [background-size:cover] [background-position:center]"
                                        ></div>
                                        <div className="[min-width:0] [flex:1]">
                                            <p className="[margin:0] [overflow:hidden] [font-family:Nunito,sans-serif] [font-size:14px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                                Hajrah
                                            </p>
                                            <p className="[margin:0] [overflow:hidden] [font-size:12px] [text-overflow:ellipsis] [white-space:nowrap] [color:#6b7280]">
                                                Student Water Resources
                                                Engineering and Management
                                            </p>
                                        </div>
                                        <span className="[flex-shrink:0] [font-size:12px] [color:#F59E0B]">
                                            ★★★★★
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="[margin-top:40px] [overflow:hidden] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                            <div className="[display:flex] [width:max-content] [animation:infiniteScroll_40s_linear_infinite]">
                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/rani.webp"
                                        alt="Kak Rani"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Rani
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        547
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/ayu.webp"
                                        alt="Kak Ayu"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Ayu
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        543
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/widya.webp"
                                        alt="Mbak Widya"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Mbak Widya
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        563
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/yohanes.webp"
                                        alt="Pak Yohanes"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Pak Yohanes
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        560
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/uly.webp"
                                        alt="Kak Uly Sinaga"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Uly Sinaga
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        507
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/nadia.webp"
                                        alt="Kak Nadia Ayu"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Nadia Ayu
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        513
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/rani.webp"
                                        alt="Kak Rani"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Rani
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        547
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/ayu.webp"
                                        alt="Kak Ayu"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Ayu
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        543
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/widya.webp"
                                        alt="Mbak Widya"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Mbak Widya
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        563
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/yohanes.webp"
                                        alt="Pak Yohanes"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Pak Yohanes
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        560
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/uly.webp"
                                        alt="Kak Uly Sinaga"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Uly Sinaga
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        507
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/nadia.webp"
                                        alt="Kak Nadia Ayu"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Nadia Ayu
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        513
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/rani.webp"
                                        alt="Kak Rani"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Rani
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        547
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/ayu.webp"
                                        alt="Kak Ayu"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Ayu
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        543
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/widya.webp"
                                        alt="Mbak Widya"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Mbak Widya
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        563
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/yohanes.webp"
                                        alt="Pak Yohanes"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Pak Yohanes
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        560
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/uly.webp"
                                        alt="Kak Uly Sinaga"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Uly Sinaga
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        507
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/nadia.webp"
                                        alt="Kak Nadia Ayu"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Nadia Ayu
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        513
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/rani.webp"
                                        alt="Kak Rani"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Rani
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        547
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/ayu.webp"
                                        alt="Kak Ayu"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Ayu
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        543
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/widya.webp"
                                        alt="Mbak Widya"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Mbak Widya
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        563
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/yohanes.webp"
                                        alt="Pak Yohanes"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Pak Yohanes
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        560
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/uly.webp"
                                        alt="Kak Uly Sinaga"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Uly Sinaga
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        507
                                    </p>
                                </div>

                                <div className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]">
                                    <img
                                        src="/assets/reviews/nadia.webp"
                                        alt="Kak Nadia Ayu"
                                        className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                                    />
                                    <div className="[min-width:0] [flex:1]">
                                        <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                            Kak Nadia Ayu
                                        </p>
                                    </div>
                                    <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                                        513
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="[margin-top:48px]">
                            <div className="[margin-bottom:24px] [display:flex] [align-items:center] [justify-content:center] [gap:8px]">
                                <svg width="20" height="20" viewBox="0 0 48 48">
                                    <path
                                        fill="#FFC107"
                                        d="M43.6 20.5H42V20.4H24v7.2h11.3C33.7 32 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.9 6.1 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
                                    ></path>
                                    <path
                                        fill="#FF3D00"
                                        d="M6.3 14.7l5.8 4.3C13.9 15.4 18.6 12 24 12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.9 6.1 29.2 4 24 4 16.4 4 9.8 8.5 6.3 14.7z"
                                    ></path>
                                    <path
                                        fill="#4CAF50"
                                        d="M24 44c5.2 0 9.9-2 13.4-5.3l-6.2-5.2C29.2 35.2 26.7 36 24 36c-5.3 0-9.6-3.4-11.3-8l-6 4.6C9.6 39.5 16.2 44 24 44z"
                                    ></path>
                                    <path
                                        fill="#1976D2"
                                        d="M43.6 20.5H42V20.4H24v7.2h11.3c-1 3-3.1 5.5-5.9 7.1l6.2 5.2C39.4 37 44 31 44 24c0-1.3-.1-2.7-.4-3.5z"
                                    ></path>
                                </svg>
                                <span className="[font-size:14px] [font-weight:800] [color:#151515]">
                                    4.9
                                </span>
                                <span className="[font-size:16px] [color:#FBBF24]">
                                    ★★★★★
                                </span>
                                <span className="[font-size:14px] [font-weight:400] [color:#6b7280]">
                                    <b>3.620</b> Google Reviews
                                </span>
                            </div>
                            <div className="[position:relative] [display:flex] [height:220px] [align-items:center] [justify-content:center] [overflow:hidden]">
                                <button
                                    onClick={prevGoogle}
                                    aria-label="Sebelumnya"
                                    className="[position:absolute] [left:0] [z-index:3] [display:flex] [height:36px] [width:36px] [cursor:pointer] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:16px] [color:#151515] [box-shadow:0_4px_12px_rgba(0,0,0,0.12)] [background:#fff] [border:1px_solid_#e5e7eb]"
                                >
                                    ‹
                                </button>
                                <div
                                    style={css(gSideStyle('prev', gIdx))}
                                    onClick={() =>
                                        setReviewIdx(
                                            (gIdx - 1 + REVIEW_COUNT) %
                                                REVIEW_COUNT,
                                        )
                                    }
                                ></div>
                                <img
                                    src={reviewSrc(gIdx)}
                                    alt="Bukti skor TOEFL alumni Full Bright"
                                    loading="lazy"
                                    onClick={() => setReviewIdx(gIdx)}
                                    className="[position:absolute] [left:50%] [z-index:2] [height:210px] [width:auto] [max-width:340px] [transform:translateX(-50%)] [cursor:pointer] [border-radius:16px] [object-fit:contain] [box-shadow:0_8px_28px_rgba(0,0,0,0.18)] [transition:all_0.3s_ease]"
                                />
                                <div
                                    style={css(gSideStyle('next', gIdx))}
                                    onClick={() =>
                                        setReviewIdx((gIdx + 1) % REVIEW_COUNT)
                                    }
                                ></div>
                                <button
                                    onClick={nextGoogle}
                                    aria-label="Selanjutnya"
                                    className="[position:absolute] [right:0] [z-index:3] [display:flex] [height:36px] [width:36px] [cursor:pointer] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:16px] [color:#151515] [box-shadow:0_4px_12px_rgba(0,0,0,0.12)] [background:#fff] [border:1px_solid_#e5e7eb]"
                                >
                                    ›
                                </button>
                            </div>
                        </div>

                        <div className="[margin-top:48px] [margin-right:auto] [margin-left:auto] [max-width:520px]">
                            <p className="[margin:0_0_6px] [text-align:center] [font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                Cerita Alumni
                            </p>
                            <h3 className="[margin:0_0_16px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.4vw,24px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                                Dengar Langsung dari{' '}
                                <span className="[color:#D70808]">
                                    Alumni Kami
                                </span>
                            </h3>
                            <div
                                className="[position:relative] [cursor:pointer] [overflow:hidden] [border-radius:18px] [line-height:0] [box-shadow:0_8px_28px_rgba(0,0,0,0.18)] [background:#151515]"
                                onClick={playVideo}
                            >
                                <video
                                    ref={videoRef}
                                    src="/assets/testimoni iyha.mp4#t=1.5"
                                    controls
                                    playsInline
                                    preload="metadata"
                                    onPlay={() => setShowOverlay(false)}
                                    className="[display:block] [aspect-ratio:9/16] [max-height:560px] [width:100%] [object-fit:cover] [background:#151515]"
                                ></video>
                                {showOverlay ? (
                                    <>
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
                                                Putar video testimoni
                                            </span>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>

                        <div className="[margin-top:40px] [text-align:center]">
                            <p className="[margin:0_0_20px] [margin-right:auto] [margin-left:auto] [max-width:520px] [font-family:Nunito,sans-serif] [font-size:18px] [line-height:1.5] [font-weight:700] [color:#151515]">
                                Keberhasilan alumni selama ini bukan karena
                                mereka pintar, tapi karena mereka{' '}
                                <span className="[color:#D70808]">
                                    gunakan metode yang tepat
                                </span>
                                .
                            </p>
                            <TrackedCTA
                                zone="midpage"
                                action="scroll"
                                label="Testimoni - Gabung Sekarang"
                                href="#pricing"
                                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [border-radius:16px] [padding:14px_28px] [font-size:16px] [font-weight:700] [color:#fff] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [background:#D70808] [text-decoration:none]"
                            >
                                Gabung Sekarang →
                            </TrackedCTA>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Lightbox */}
            {reviewIdx !== null ? (
                <>
                    <div
                        className="[position:fixed] [inset:0] [z-index:50] [display:flex] [align-items:center] [justify-content:center] [background:rgba(0,0,0,0.92)]"
                        onClick={closeReview}
                    >
                        <button
                            onClick={closeReview}
                            className="[position:absolute] [top:16px] [right:16px] [cursor:pointer] [font-size:28px] [color:rgba(255,255,255,0.7)] [background:none] [border:none]"
                        >
                            ✕
                        </button>
                        <button
                            onClick={prevReview}
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
                                aria-label="Review"
                                style={css(rvImgStyle(reviewIdx))}
                            ></div>
                            <p className="[margin:0] [font-size:12px] [color:rgba(255,255,255,0.4)]">
                                {(reviewIdx ?? 0) + 1} / {REVIEW_COUNT}
                            </p>
                        </div>
                        <button
                            onClick={nextReview}
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
