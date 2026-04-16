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
        <section className="relative lg:overflow-hidden bg-[#f0f7ff] py-10 lg:py-14">
            <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
                {/* Desktop */}
                <div className="relative mx-auto hidden h-[300px] w-full max-w-[1200px] overflow-hidden lg:block z-50">
                    <div
                        className="absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/market-research/health-about.png')",
                        }}
                    />

                    <div className="relative z-10 grid h-full grid-cols-3 gap-14">
                        {cards.map((card, i) => (
                            <div key={i} className="flex items-center justify-center">
                                <div className="flex w-full flex-col items-center px-7 text-center">
                                    <h3 className="max-w-[95%] text-xl font-medium leading-[1.2] text-[#66758b] line-clamp-3">
                                        {card.title}{" "}
                                        <span className="font-semibold text-[#37c0c9]">
                                            {card.highlight}
                                        </span>
                                    </h3>
                                    <p className="mt-4 text-sm leading-[1.55] text-[#26384b] line-clamp-6">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile */}
                <div className="lg:hidden">
                    <div className="overflow-hidden">
                        <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {cards.map((card, i) => (
                                <div
                                    key={i}
                                    className="w-full shrink-0 snap-center"
                                >
                                    <div className="rounded-[18px] bg-[#eaf0f5] px-5 py-6 text-center shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                                        <h3 className="mx-auto max-w-[210px] text-[15px] font-medium leading-[1.2] text-[#66758b]">
                                            {card.title}{" "}
                                            <span className="font-semibold text-[#37c0c9]">
                                                {card.highlight}
                                            </span>
                                        </h3>

                                        <p className="mt-4 text-[11px] leading-[1.6] text-[#26384b]">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative hexagon pattern - desktop only */}
                <div className="pointer-events-none absolute -top-10 right-[-220px] hidden w-[42%] opacity-50 lg:block z-10">
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 320 520"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <defs>
                            <linearGradient
                                id="hexGradient"
                                x1="0"
                                y1="0"
                                x2="320"
                                y2="0"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#CFEAF7" />
                                <stop offset="1" stopColor="#EAF6FB" />
                            </linearGradient>
                        </defs>

                        {Array.from({ length: 9 }).map((_, row) =>
                            Array.from({ length: 5 }).map((_, col) => {
                                const x = col * 62 + (row % 2 ? 31 : 0);
                                const y = row * 54;
                                return (
                                    <polygon
                                        key={`${row}-${col}`}
                                        points={`${x + 15},${y} ${x + 45},${y} ${x + 60},${y + 26} ${x + 45},${y + 52} ${x + 15},${y + 52} ${x},${y + 26}`}
                                        stroke="url(#hexGradient)"
                                        strokeWidth="1.2"
                                        fill="none"
                                    />
                                );
                            })
                        )}
                    </svg>
                </div>
            </div>
        </section>
    );
}