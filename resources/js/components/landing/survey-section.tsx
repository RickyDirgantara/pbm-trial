import { css, surveyMsgStyle, surveyOptStyle } from './styles';

export function SurveySection({
    selected,
    onSelect,
}: {
    selected: number | null;
    onSelect: (index: number) => void;
}) {
    return (
        <>
            <section
                id="survey"
                className="[padding:28px_24px] [background:#fff]"
            >
                <div className="[margin:0_auto] [max-width:460px] [border-radius:16px] [padding:20px_20px_16px] [background:#FAFAFA] [border:1px_solid_#ececec]">
                    <div className="[margin-bottom:16px]">
                        <p className="[margin:0_0_6px] [font-size:11px] [font-weight:700] [letter-spacing:0.06em] [color:#6b6b6b] [text-transform:uppercase]">
                            BOLEH TAHU KESULITANMU?
                        </p>
                        <h2 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(20px,3.6vw,23px)] [line-height:1.25] [font-weight:800] [color:#151515]">
                            Apa Tantangan Terbesarmu{' '}
                            <span className="[color:#D70808]">
                                Soal TOEFL Sekarang?
                            </span>
                        </h2>
                    </div>

                    <div className="[display:flex] [flex-direction:column] [gap:6px]">
                        <button
                            onClick={() => onSelect(0)}
                            style={css(surveyOptStyle(selected === 0))}
                        >
                            <span className="[flex:1] [text-align:left] [font-size:13px] [font-weight:500] [color:#151515]">
                                Bingung mulai belajar dari mana
                            </span>
                            {selected === 0 ? (
                                <>
                                    <span className="flex [height:16px] [width:16px] shrink-0 items-center justify-center [border-radius:9999px] [font-size:9px] [font-weight:800] [color:#fff] [background:#D70808]">
                                        ✓
                                    </span>
                                </>
                            ) : null}
                        </button>

                        <button
                            onClick={() => onSelect(1)}
                            style={css(surveyOptStyle(selected === 1))}
                        >
                            <span className="[flex:1] [text-align:left] [font-size:13px] [font-weight:500] [color:#151515]">
                                Sudah belajar tapi skor masih stuck
                            </span>
                            {selected === 1 ? (
                                <>
                                    <span className="flex [height:16px] [width:16px] shrink-0 items-center justify-center [border-radius:9999px] [font-size:9px] [font-weight:800] [color:#fff] [background:#D70808]">
                                        ✓
                                    </span>
                                </>
                            ) : null}
                        </button>

                        <button
                            onClick={() => onSelect(2)}
                            style={css(surveyOptStyle(selected === 2))}
                        >
                            <span className="[flex:1] [text-align:left] [font-size:13px] [font-weight:500] [color:#151515]">
                                Masih ragu apakah perlu ikut kursus
                            </span>
                            {selected === 2 ? (
                                <>
                                    <span className="flex [height:16px] [width:16px] shrink-0 items-center justify-center [border-radius:9999px] [font-size:9px] [font-weight:800] [color:#fff] [background:#D70808]">
                                        ✓
                                    </span>
                                </>
                            ) : null}
                        </button>

                        <button
                            onClick={() => onSelect(3)}
                            style={css(surveyOptStyle(selected === 3))}
                        >
                            <span className="[flex:1] [text-align:left] [font-size:13px] [font-weight:500] [color:#151515]">
                                Lainnya
                            </span>
                            {selected === 3 ? (
                                <>
                                    <span className="flex [height:16px] [width:16px] shrink-0 items-center justify-center [border-radius:9999px] [font-size:9px] [font-weight:800] [color:#fff] [background:#D70808]">
                                        ✓
                                    </span>
                                </>
                            ) : null}
                        </button>
                    </div>

                    <p style={css(surveyMsgStyle(selected !== null))}>
                        ✓ Makasih! Jawabanmu sudah tercatat.
                    </p>
                </div>
            </section>
        </>
    );
}
