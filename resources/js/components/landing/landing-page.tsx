import { useCallback, useEffect, useRef, useState } from 'react';
import { EVENT_TYPES, useAnalytics } from '@/hooks/use-analytics';
import { AgitationSection } from './agitation-section';
import { AlumniMarquee } from './alumni-marquee';
import {
    KEYFRAMES,
    NAVBAR_HEIGHT,
    RETURN_OPTIONS,
    SURVEY_OPTIONS,
} from './constants';
import { FaqSection } from './faq-section';
import { useFlashSaleVisible } from './flash-sale';
import { FloatingWhatsapp } from './floating-whatsapp';
import { HeroSection } from './hero-section';
import { LmsSection } from './lms-section';
import { PricingSection } from './pricing-section';
import { ProofSection } from './proof-section';
import { ReturnPopup } from './return-popup';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';
import { SurveySection } from './survey-section';
import { TestimonialsSection } from './testimonials-section';
import { ValueSection } from './value-section';
import { WhySection } from './why-section';

/* ============================================================
   Full Bright Indonesia — TOEFL ITP landing page
   Styling: Tailwind CSS v4 utility classes (arbitrary properties
   keep the design 1:1 with the approved reference).
   Assets live in public/assets/ and are referenced as /assets/*
   ============================================================ */

type LandingPageProps = {
    /** Digits-only WhatsApp number resolved from WHATSAPP_NUMBER. */
    whatsappNumber: string;
};

export function LandingPage({ whatsappNumber }: LandingPageProps) {
    const { track } = useAnalytics();
    const flashVisible = useFlashSaleVisible();

    const bannerRef = useRef<HTMLDivElement | null>(null);
    const [bannerH, setBannerH] = useState<number>(38);
    const [surveySelected, setSurveySelected] = useState<number | null>(null);

    /* The header is fixed, so the page needs a spacer of the same height and the
       sticky comparison-table header needs the same offset. */
    useEffect(() => {
        const measure = (): void =>
            setBannerH(
                bannerRef.current
                    ? Math.round(
                          bannerRef.current.getBoundingClientRect().height,
                      )
                    : 0,
            );
        measure();
        window.addEventListener('resize', measure);

        return () => window.removeEventListener('resize', measure);
    }, [flashVisible]);

    const waUrl = useCallback(
        (text: string): string =>
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
        [whatsappNumber],
    );

    /* Micro-surveys are interest signals, so they report as `intent`
       once per distinct answer. */
    const selectSurveyAnswer = useCallback(
        (index: number): void => {
            if (surveySelected === index) {
                return;
            }

            setSurveySelected(index);
            void track(EVENT_TYPES.intent, {
                zone: 'midpage',
                action: 'link',
                cta_label: `Survey Kesulitan: ${SURVEY_OPTIONS[index]}`,
            });
        },
        [surveySelected, track],
    );

    const trackReturnReason = useCallback(
        (index: number): void => {
            void track(EVENT_TYPES.intent, {
                zone: 'floating',
                action: 'link',
                cta_label: `Alasan Ragu: ${RETURN_OPTIONS[index]}`,
            });
        },
        [track],
    );

    return (
        <>
            <style>{KEYFRAMES}</style>

            <div className="[min-height:100vh] [font-family:Nunito,system-ui,sans-serif] [background:#fff]">
                <SiteHeader bannerRef={bannerRef} flashVisible={flashVisible} />
                {/* Spacer matching the fixed banner + navbar */}
                <div style={{ height: bannerH + NAVBAR_HEIGHT }}></div>

                <HeroSection />
                <AlumniMarquee />
                <AgitationSection />
            </div>

            <ValueSection headerOffset={bannerH + NAVBAR_HEIGHT} />
            <ProofSection />
            <LmsSection />
            <WhySection />
            <TestimonialsSection />
            <PricingSection waUrl={waUrl} />
            <FaqSection waUrl={waUrl} />
            <SurveySection
                selected={surveySelected}
                onSelect={selectSurveyAnswer}
            />
            <SiteFooter whatsappNumber={whatsappNumber} />
            <ReturnPopup waUrl={waUrl} onSelectReason={trackReturnReason} />
            <FloatingWhatsapp waUrl={waUrl} />
        </>
    );
}
