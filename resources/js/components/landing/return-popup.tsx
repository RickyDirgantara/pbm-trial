import { useCallback, useEffect, useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { RETURN_OPTIONS, RETURN_SUBTEXTS, RETURN_WA_MSGS } from './constants';
import { css, rpOptStyle } from './styles';

type Props = {
    waUrl: (text: string) => string;
    onSelectReason: (index: number) => void;
};

/** Bottom sheet shown when a visitor returns to the tab after opening checkout. */
export function ReturnPopup({ waUrl, onSelectReason }: Props) {
    const [rpOpen, setRpOpen] = useState<boolean>(false);
    const [rpSelected, setRpSelected] = useState<number | null>(null);

    useEffect(() => {
        const onVisible = (): void => {
            if (document.visibilityState !== 'visible') {
                return;
            }

            try {
                const clickedAt = Number(
                    localStorage.getItem('fb_checkout_clicked_at') || 0,
                );
                const shown = localStorage.getItem('fb_return_popup_shown');

                if (clickedAt && !shown && Date.now() - clickedAt < 86400000) {
                    setRpOpen(true);
                    localStorage.setItem('fb_return_popup_shown', '1');
                }
            } catch {
                /* storage disabled */
            }
        };
        document.addEventListener('visibilitychange', onVisible);

        return () =>
            document.removeEventListener('visibilitychange', onVisible);
    }, []);

    const closeReturnPopup = useCallback((): void => setRpOpen(false), []);

    const selectReturnReason = useCallback(
        (index: number): void => {
            if (rpSelected === index) {
                return;
            }

            setRpSelected(index);
            onSelectReason(index);
        },
        [rpSelected, onSelectReason],
    );

    useEffect(() => {
        if (!rpOpen) {
            return;
        }

        const onKey = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                closeReturnPopup();
            }
        };
        window.addEventListener('keydown', onKey);

        return () => window.removeEventListener('keydown', onKey);
    }, [rpOpen, closeReturnPopup]);

    return (
        <>
            {rpOpen ? (
                <>
                    <div
                        className="[position:fixed] [inset:0] [z-index:100] [display:flex] [animation:fbFadeInUp_0.2s_ease] [align-items:flex-end] [justify-content:center] [background:rgba(21,21,21,0.45)]"
                        onClick={closeReturnPopup}
                    >
                        <div
                            className="[position:relative] [max-height:60vh] [width:100%] [max-width:480px] [animation:fbSheetUp_0.25s_ease] [overflow-y:auto] [border-radius:24px_24px_0_0] [padding:22px_22px_28px] [box-shadow:0_-12px_40px_rgba(0,0,0,0.18)] [background:#fff]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeReturnPopup}
                                aria-label="Tutup"
                                className="[position:absolute] [top:16px] [right:16px] [display:flex] [height:30px] [width:30px] [cursor:pointer] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:16px] [color:#6b7280] [background:#F3F4F6] [border:none]"
                            >
                                ✕
                            </button>
                            <p className="[margin:0_0_6px] [font-size:11px] [font-weight:700] [letter-spacing:0.06em] [color:#6b6b6b] [text-transform:uppercase]">
                                Sebelum Kamu Pergi
                            </p>
                            <h3 className="[margin:0_0_18px] [padding-right:30px] [font-family:Nunito,sans-serif] [font-size:clamp(22px,5vw,26px)] [line-height:1.25] [font-weight:800] [color:#151515]">
                                Apa yang{' '}
                                <span className="[color:#D70808]">
                                    Masih Bikin Kamu Ragu Daftar?
                                </span>
                            </h3>
                            {rpSelected !== null ? (
                                <>
                                    <TrackedCTA
                                        zone="floating"
                                        action="whatsapp"
                                        label="Return Popup - Konsultasi"
                                        href={waUrl(
                                            RETURN_WA_MSGS[rpSelected ?? 0],
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="[margin-bottom:14px] [box-sizing:border-box] [display:flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:12px] [padding:13px_16px] [font-size:14px] [font-weight:700] [color:#fff] [background:#16a34a] [text-decoration:none]"
                                    >
                                        💬 Konsultasi via WhatsApp →
                                    </TrackedCTA>
                                    <p className="[margin:0_0_2px] [font-size:13px] [font-weight:700] [color:#151515]">
                                        {RETURN_SUBTEXTS[rpSelected ?? 0]}
                                    </p>
                                    <p className="[margin:0_0_12px] [font-size:12px] [font-weight:500] [color:#6b7280]">
                                        Tim kami siap bantu jawab langsung lewat
                                        WhatsApp.
                                    </p>
                                    <div className="[box-sizing:border-box] [display:flex] [min-height:54px] [width:100%] [align-items:center] [gap:10px] [border-radius:12px] [padding:12px_14px] [background:rgba(215,8,8,0.05)] [border:1px_solid_#D70808]">
                                        <span className="[display:flex] [height:18px] [width:18px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:10px] [font-weight:800] [color:#fff] [background:#D70808]">
                                            ✓
                                        </span>
                                        <span className="[flex:1] [text-align:left] [font-size:14px] [font-weight:500] [color:#151515]">
                                            {RETURN_OPTIONS[rpSelected ?? 0]}
                                        </span>
                                    </div>
                                </>
                            ) : null}
                            {rpSelected === null ? (
                                <>
                                    <div className="[display:flex] [flex-direction:column] [gap:8px]">
                                        <button
                                            onClick={() =>
                                                selectReturnReason(0)
                                            }
                                            style={css(rpOptStyle())}
                                        >
                                            <span className="[flex:1] [text-align:left] [font-size:14px] [font-weight:500] [color:#151515]">
                                                Harganya masih terlalu mahal
                                                buatku
                                            </span>
                                        </button>

                                        <button
                                            onClick={() =>
                                                selectReturnReason(1)
                                            }
                                            style={css(rpOptStyle())}
                                        >
                                            <span className="[flex:1] [text-align:left] [font-size:14px] [font-weight:500] [color:#151515]">
                                                Belum yakin bisa mencapai target
                                                TOEFL-ku
                                            </span>
                                        </button>

                                        <button
                                            onClick={() =>
                                                selectReturnReason(2)
                                            }
                                            style={css(rpOptStyle())}
                                        >
                                            <span className="[flex:1] [text-align:left] [font-size:14px] [font-weight:500] [color:#151515]">
                                                Belum yakin program ini cocok
                                                untuk kebutuhanku
                                            </span>
                                        </button>

                                        <button
                                            onClick={() =>
                                                selectReturnReason(3)
                                            }
                                            style={css(rpOptStyle())}
                                        >
                                            <span className="[flex:1] [text-align:left] [font-size:14px] [font-weight:500] [color:#151515]">
                                                Masih membandingkan dengan
                                                program lain
                                            </span>
                                        </button>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
