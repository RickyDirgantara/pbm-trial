import { useCallback, useEffect, useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { WA_MESSAGES } from './constants';

export function FloatingWhatsapp({
    waUrl,
}: {
    waUrl: (text: string) => string;
}) {
    const [waBubbleOpen, setWaBubbleOpen] = useState<boolean>(false);

    /* Proactive bubble: after 7s or 25% scroll, once per session. */
    useEffect(() => {
        let dismissed = false;

        try {
            dismissed = sessionStorage.getItem('fb_wa_bubble_v2') === '1';
        } catch {
            /* storage disabled */
        }

        if (dismissed) {
            return;
        }

        const open = (): void => setWaBubbleOpen(true);
        const timer = window.setTimeout(open, 7000);
        const onScroll = (): void => {
            const pct =
                (window.scrollY + window.innerHeight) /
                Math.max(document.documentElement.scrollHeight, 1);

            if (pct > 0.25) {
                open();
                window.removeEventListener('scroll', onScroll);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const dismissWaBubble = useCallback((): void => {
        setWaBubbleOpen(false);

        try {
            sessionStorage.setItem('fb_wa_bubble_v2', '1');
        } catch {
            /* storage disabled */
        }
    }, []);

    return (
        <>
            <div className="[position:fixed] [right:48px] [bottom:20px] [z-index:52] [display:flex] [flex-direction:column] [align-items:flex-end] [gap:10px] max-[559px]:[right:28px]">
                {waBubbleOpen ? (
                    <>
                        <div className="[position:relative] [max-width:270px] [border-radius:18px_18px_6px_18px] [padding:14px_16px_14px_14px] [box-shadow:0_10px_34px_rgba(0,0,0,0.18)] [background:#fff] [border:1px_solid_#e5e7eb] max-[559px]:[max-width:208px] max-[559px]:[border-radius:14px_14px_5px_14px] max-[559px]:[padding:10px_12px_10px_11px]">
                            <button
                                onClick={dismissWaBubble}
                                aria-label="Tutup"
                                className="[position:absolute] [top:-9px] [right:-9px] [display:flex] [height:24px] [width:24px] [cursor:pointer] [align-items:center] [justify-content:center] [border-radius:9999px] [padding:0] [font-size:12px] [line-height:1] [font-weight:900] [color:#fff] [background:#151515] [border:2px_solid_#fff]"
                            >
                                ✕
                            </button>
                            <TrackedCTA
                                zone="floating"
                                action="whatsapp"
                                label="WhatsApp Bubble"
                                href={waUrl(WA_MESSAGES.floating)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[display:flex] [align-items:flex-start] [gap:11px] [text-decoration:none]"
                            >
                                <img
                                    src="/assets/admin-avatar.jpg"
                                    alt="Admin Full Bright"
                                    className="[height:38px] [width:38px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366] max-[559px]:[height:28px] max-[559px]:[width:28px]"
                                />
                                <span className="[display:block]">
                                    <span className="[margin-bottom:3px] [display:block] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#151515] max-[559px]:[margin-bottom:2px] max-[559px]:[font-size:10px]">
                                        Ms. Fini - Admin Full Bright
                                    </span>
                                    <span className="[display:block] [font-size:13px] [line-height:1.5] [font-weight:600] [color:#3d3d3d]">
                                        Masih bingung atau ragu? Tanya langsung
                                        ke saya di WA ☕
                                    </span>
                                    <span className="[margin-top:8px] [display:inline-block] [font-size:12px] [font-weight:900] [color:#15803d]">
                                        Balas sekarang →
                                    </span>
                                </span>
                            </TrackedCTA>
                        </div>
                    </>
                ) : null}
                <TrackedCTA
                    zone="floating"
                    action="whatsapp"
                    label="Floating WhatsApp"
                    href={waUrl(WA_MESSAGES.floating)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat WhatsApp"
                    className="[position:relative] [display:flex] [height:58px] [width:58px] [align-items:center] [justify-content:center] [overflow:visible] [border-radius:9999px] [box-shadow:0_6px_22px_rgba(37,211,102,0.5)] [background:#25D366]"
                >
                    <span className="[display:flex] [align-items:center] [justify-content:center]">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="white"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.833L0 24l6.302-1.499A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.887 0-3.656-.494-5.192-1.358l-.373-.213-3.741.89.934-3.629-.243-.384A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
                        </svg>
                    </span>
                </TrackedCTA>
            </div>
        </>
    );
}
