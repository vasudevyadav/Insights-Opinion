"use client";

export default function HealthWhat() {
    const cards = [
        {
            title: "What is",
            highlight: "Healthcare Market Research?",
            desc: "Healthcare market research is the systematic study of healthcare markets, patient behaviour, physician decision-making, and industry trends. Companies use healthcare research to understand treatment adoption, evaluate product demand, and make data-driven strategic decisions in pharmaceutical, medical device, and healthcare technology sectors.",
        },
        {
            title: "What is",
            highlight: "Healthcare Qualitative Market Research?",
            desc: "Healthcare qualitative market research focuses on understanding attitudes, motivations, and experiences of healthcare professionals and patients through interviews, focus groups, and observational studies.",
        },
        {
            title: "What are",
            highlight: "Healthcare Panels?",
            desc: "Healthcare panels are curated groups of verified healthcare professionals, patients, and medical stakeholders who participate in surveys, interviews, and research studies to provide expert insights for healthcare companies.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#eef1f4] py-10 lg:py-14">
            <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
                {/* Hexagon Pattern */}
                <div className="pointer-events-none absolute right-[-10px] top-[8px] hidden lg:block">
                    <svg
                        width="250"
                        height="180"
                        viewBox="0 0 250 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-95"
                    >
                        {[
                            [0, 0],
                            [42, 0],
                            [84, 0],
                            [126, 0],
                            [168, 0],
                            [210, 0],

                            [21, 34],
                            [63, 34],
                            [105, 34],
                            [147, 34],
                            [189, 34],
                            [231, 34],

                            [0, 68],
                            [42, 68],
                            [84, 68],
                            [126, 68],
                            [168, 68],
                            [210, 68],

                            [21, 102],
                            [63, 102],
                            [105, 102],
                            [147, 102],
                            [189, 102],
                            [231, 102],

                            [0, 136],
                            [42, 136],
                            [84, 136],
                            [126, 136],
                            [168, 136],
                            [210, 136],
                        ].map(([x, y], i) => (
                            <polygon
                                key={i}
                                points={`${x + 12},${y} ${x + 24},${y + 7} ${x + 24},${y + 21} ${x + 12},${y + 28} ${x},${y + 21} ${x},${y + 7}`}
                                stroke="#d3edf4"
                                strokeWidth="1.1"
                            />
                        ))}
                    </svg>
                </div>

                <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-0">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="relative flex w-full max-w-[290px] justify-center lg:max-w-[244px]"
                        >
                            {/* connector */}
                            {i !== cards.length - 1 && (
                                <>
                                    <div className="absolute left-[100%] top-1/2 z-0 hidden h-[3px] w-[60px] -translate-y-1/2 bg-[#57c7cb] lg:block" />
                                    <div className="absolute left-[calc(100%+30px)] top-1/2 z-10 hidden h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#57c7cb] lg:flex">
                                        <div className="h-[8px] w-[8px] rounded-full bg-white" />
                                    </div>
                                </>
                            )}

                            {/* blue offset shadow layer */}
                            <div className="absolute left-[8px] top-[6px] h-full w-full rounded-[14px] bg-[#8dbdff]" />

                            {/* main card */}
                            <div className="relative z-20 h-[276px] w-full rounded-[14px] border border-[#d8dde4] bg-white px-5 pt-7 shadow-[0_8px_18px_rgba(0,0,0,0.06)] lg:h-[276px] lg:w-[244px]">
                                {/* border accents */}
                                <span className="absolute left-[8px] right-[12px] top-0 h-[3px] rounded-t-[14px] bg-[#55cac1]" />
                                <span className="absolute left-0 top-[74px] bottom-[26px] w-[3px] rounded-l-[14px] bg-[#55cac1]" />
                                <span className="absolute right-0 top-[7px] bottom-[14px] w-[3px] rounded-r-[14px] bg-[#67a9ff]" />

                                <div className="text-center">
                                    <h3 className="mx-auto max-w-[165px] text-[13px] font-semibold leading-[1.2] text-[#76849a]">
                                        {card.title}{" "}
                                        <span className="text-[#47c0c9]">{card.highlight}</span>
                                    </h3>

                                    <p className="mx-auto mt-4 max-w-[180px] text-[11px] leading-[1.62] text-[#28384c]">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}