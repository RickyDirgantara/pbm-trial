import { useEffect, useState } from 'react';

/** Each visitor gets their own 12-hour flash-sale window, kept in localStorage. */
const FLASH_WINDOW_MS = 12 * 60 * 60 * 1000;

function flashDeadline(): number {
    let start = Number(localStorage.getItem('fb_flash_start') || 0);

    if (!start) {
        start = Date.now();

        try {
            localStorage.setItem('fb_flash_start', String(start));
        } catch {
            /* storage disabled */
        }
    }

    return start + FLASH_WINDOW_MS;
}

export function flashRemainingMs(): number {
    if (typeof window === 'undefined') {
        return FLASH_WINDOW_MS;
    }

    return Math.max(0, flashDeadline() - Date.now());
}

export function formatCountdown(ms: number): string {
    const t = Math.floor(ms / 1000);
    const h = String(Math.floor(t / 3600)).padStart(2, '0');
    const m = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
    const s = String(t % 60).padStart(2, '0');

    return `${h}:${m}:${s}`;
}

/**
 * Whether the urgency banner should still be shown. Polls once a second but
 * only ever flips one boolean, so it does not re-render the page every tick.
 */
export function useFlashSaleVisible(): boolean {
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        const tick = (): void => setVisible(flashRemainingMs() > 0);
        tick();
        const id = window.setInterval(tick, 1000);

        return () => window.clearInterval(id);
    }, []);

    return visible;
}
