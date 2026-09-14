import { TrackedCTA } from '@/components/tracking/TrackedCTA';

export function SiteFooter({ whatsappNumber }: { whatsappNumber: string }) {
    return (
        <>
            <footer className="[padding:56px_16px_32px] [background:#151515]">
                <div className="[margin:0_auto] [max-width:1152px]">
                    <div className="[margin-bottom:40px] [display:grid] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] [gap:40px]">
                        <div>
                            <div className="[margin-bottom:16px]">
                                <img
                                    src="/logo/Logo-Fullbright.webp"
                                    alt="Full Bright Indonesia"
                                    className="[height:auto] [width:160px] [object-fit:contain] [filter:brightness(0)_invert(1)]"
                                />
                            </div>
                            <p className="[margin:0_0_16px] [font-size:12px] [line-height:1.6] [color:#9ca3af]">
                                SK Kemenkumham RI No. AHU-0055720-AH.0114 Tahun
                                2020
                                <br />
                                SK LKP No. 503/20177/LKP/DPM-PTSP/8/2024
                                <br />
                                NPSN K9998700 · Kerjasama dengan IIEF Jakarta
                            </p>
                            <div className="[display:flex] [gap:12px]">
                                <TrackedCTA
                                    zone="footer"
                                    action="link"
                                    label="Instagram"
                                    href="https://www.instagram.com/fulbrightindonesia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="[display:flex] [height:36px] [width:36px] [align-items:center] [justify-content:center] [border-radius:12px] [color:#9ca3af] [background:rgba(255,255,255,0.08)] [text-decoration:none]"
                                >
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                    </svg>
                                </TrackedCTA>
                            </div>
                        </div>

                        <div>
                            <p className="[margin:0_0_20px] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                                Navigasi
                            </p>
                            <ul className="[margin:0] [display:flex] [flex-direction:column] [gap:12px] [padding:0] [list-style:none]">
                                <li>
                                    <TrackedCTA
                                        zone="footer"
                                        action="scroll"
                                        label="Footer - Keunggulan"
                                        href="#value"
                                        className="[font-size:14px] [color:#9ca3af] [text-decoration:none]"
                                    >
                                        Keunggulan
                                    </TrackedCTA>
                                </li>
                                <li>
                                    <TrackedCTA
                                        zone="footer"
                                        action="scroll"
                                        label="Footer - Testimoni"
                                        href="#testimonials"
                                        className="[font-size:14px] [color:#9ca3af] [text-decoration:none]"
                                    >
                                        Testimoni
                                    </TrackedCTA>
                                </li>
                                <li>
                                    <TrackedCTA
                                        zone="footer"
                                        action="scroll"
                                        label="Footer - Harga"
                                        href="#pricing"
                                        className="[font-size:14px] [color:#9ca3af] [text-decoration:none]"
                                    >
                                        Harga
                                    </TrackedCTA>
                                </li>
                                <li>
                                    <TrackedCTA
                                        zone="footer"
                                        action="scroll"
                                        label="Footer - FAQ"
                                        href="#faq"
                                        className="[font-size:14px] [color:#9ca3af] [text-decoration:none]"
                                    >
                                        FAQ
                                    </TrackedCTA>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="[margin:0_0_20px] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                                Hubungi Kami
                            </p>
                            <ul className="[margin:0] [display:flex] [flex-direction:column] [gap:16px] [padding:0] [list-style:none]">
                                <li className="[display:flex] [align-items:flex-start] [gap:12px]">
                                    <div className="[margin-top:2px] [display:flex] [height:32px] [width:32px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:8px] [color:#9ca3af] [background:rgba(255,255,255,0.08)]">
                                        💬
                                    </div>
                                    <div>
                                        <p className="[margin:0_0_2px] [font-size:12px] [font-weight:600] [color:#fff]">
                                            Ms. Aini
                                        </p>
                                        <TrackedCTA
                                            zone="footer"
                                            action="whatsapp"
                                            label="Footer - WhatsApp Aini"
                                            href="https://wa.me/6281959486507"
                                            className="[font-size:12px] [color:#9ca3af] [text-decoration:none]"
                                        >
                                            +62 819-5948-6507
                                        </TrackedCTA>
                                    </div>
                                </li>

                                <li className="[display:flex] [align-items:flex-start] [gap:12px]">
                                    <div className="[margin-top:2px] [display:flex] [height:32px] [width:32px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:8px] [color:#9ca3af] [background:rgba(255,255,255,0.08)]">
                                        💬
                                    </div>
                                    <div>
                                        <p className="[margin:0_0_2px] [font-size:12px] [font-weight:600] [color:#fff]">
                                            Mr. Choiri
                                        </p>
                                        <TrackedCTA
                                            zone="footer"
                                            action="whatsapp"
                                            label="Footer - WhatsApp Choiri"
                                            href="https://wa.me/6288744875322"
                                            className="[font-size:12px] [color:#9ca3af] [text-decoration:none]"
                                        >
                                            +62 887-4487-5322
                                        </TrackedCTA>
                                    </div>
                                </li>

                                <li className="[display:flex] [align-items:flex-start] [gap:12px]">
                                    <div className="[margin-top:2px] [display:flex] [height:32px] [width:32px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:8px] [color:#9ca3af] [background:rgba(255,255,255,0.08)]">
                                        💬
                                    </div>
                                    <div>
                                        <p className="[margin:0_0_2px] [font-size:12px] [font-weight:600] [color:#fff]">
                                            Ms. Fini
                                        </p>
                                        <TrackedCTA
                                            zone="footer"
                                            action="whatsapp"
                                            label="Footer - WhatsApp Fini"
                                            href={`https://wa.me/${whatsappNumber}`}
                                            className="[font-size:12px] [color:#9ca3af] [text-decoration:none]"
                                        >
                                            +62 852-5549-9299
                                        </TrackedCTA>
                                    </div>
                                </li>

                                <li className="[display:flex] [align-items:flex-start] [gap:12px]">
                                    <div className="[margin-top:2px] [display:flex] [height:32px] [width:32px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:8px] [color:#9ca3af] [background:rgba(255,255,255,0.08)]">
                                        ✉
                                    </div>
                                    <div>
                                        <p className="[margin:0_0_2px] [font-size:12px] [font-weight:600] [color:#fff]">
                                            Email
                                        </p>
                                        <TrackedCTA
                                            zone="footer"
                                            action="link"
                                            label="Footer - Email"
                                            href="mailto:info@fullbrightindonesia.org"
                                            className="[font-size:12px] [color:#9ca3af] [text-decoration:none]"
                                        >
                                            info@fullbrightindonesia.org
                                        </TrackedCTA>
                                    </div>
                                </li>
                                <li className="[display:flex] [align-items:flex-start] [gap:12px]">
                                    <div className="[margin-top:2px] [display:flex] [height:32px] [width:32px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:8px] [color:#9ca3af] [background:rgba(255,255,255,0.08)]">
                                        📍
                                    </div>
                                    <div>
                                        <p className="[margin:0_0_2px] [font-size:12px] [font-weight:600] [color:#fff]">
                                            Alamat
                                        </p>
                                        <p className="[margin:0] [font-size:12px] [color:#9ca3af]">
                                            Gedung Yotta Signature Perintis, Jl.
                                            Perintis Kemerdekaan No.97 Lantai 3,
                                            Tamalanrea Jaya, Kec. Tamalanrea,
                                            Kota Makassar, Sulawesi Selatan
                                            90245
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="[display:flex] [justify-content:center] [padding-top:24px] [font-size:12px] [color:#9ca3af] [border-top:1px_solid_rgba(255,255,255,0.08)]">
                        <p className="[margin:0]">
                            © 2026 Full Bright Indonesia. Lembaga Resmi TOEFL
                            ITP bekerjasama dengan IIEF Jakarta.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
