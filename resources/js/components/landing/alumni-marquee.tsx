import { ALUMNI_UNIVERSITIES } from './constants';

export function AlumniMarquee() {
    return (
        <>
            <div className="[overflow:hidden] [padding:32px_0] [background:#F3F3F3]">
                <p className="[margin:0_0_18px] [text-align:center] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#4b5563] [text-transform:uppercase]">
                    Alumni Kami Sekarang Kuliah Di
                </p>
                <div className="[overflow:hidden] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                    <div className="[display:flex] [width:max-content] [animation:infiniteScroll_30s_linear_infinite]">
                        {ALUMNI_UNIVERSITIES.map((u, i) => (
                            <img
                                key={`${u.src}-${i}`}
                                src={u.src}
                                alt={u.name}
                                loading="lazy"
                                width={110}
                                height={64}
                                className="[margin:0_20px] [height:64px] [width:110px] [flex-shrink:0] [object-fit:contain]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
