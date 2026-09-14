import { Head } from '@inertiajs/react';
import { LandingPage } from '@/components/landing/landing-page';

const DESCRIPTION =
    'Persiapkan TOEFL 500+ dalam 15 hari dengan metode belajar terstruktur dari Full Bright Indonesia. Sudah membantu 45.000+ alumni meraih beasiswa & CPNS. Mulai dari Rp99rb.';

type Props = {
    whatsappNumber: string;
};

export default function CtwaLanding({ whatsappNumber }: Props) {
    return (
        <>
            <Head title="Raih TOEFL 500+ Cukup 15 Hari. (LMS + Tutor AI)">
                <meta
                    name="description"
                    content={DESCRIPTION}
                    head-key="description"
                />
            </Head>
            <LandingPage whatsappNumber={whatsappNumber} />
        </>
    );
}
