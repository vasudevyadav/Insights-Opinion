"use client";

import Image from "next/image";

export default function WhoUsesHealthcareResearch() {
    const items = [
        "Pharmaceutical companies",
        "Medical device companies",
        "Healthcare startups",
        "Hospitals and health systems",
        "Healthtech companies",
        "Healthcare consulting firms",
    ];

    return (
        <section className="relative overflow-hidden bg-[#f4f7fa] py-10 lg:py-14">
            <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10">
                {/* Hexagon Pattern */}
                <div className="pointer-events-none absolute -top-11 right-[-250px] hidden w-[46%] lg:block opacity-50">
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 320 520"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <defs>
                            <linearGradient id="hexGradient" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#35c7c8" />
                                <stop offset="50%" stopColor="#56c4d8" />
                                <stop offset="100%" stopColor="#79a8ff" />
                            </linearGradient>
                        </defs>

                        {[
                            [20, 20], [70, 20], [120, 20], [170, 20],
                            [45, 62], [95, 62], [145, 62], [195, 62],
                            [20, 104], [70, 104], [120, 104], [170, 104],
                            [45, 146], [95, 146], [145, 146], [195, 146],
                            [20, 188], [70, 188], [120, 188], [170, 188],
                            [45, 230], [95, 230], [145, 230], [195, 230],
                            [20, 272], [70, 272], [120, 272], [170, 272],
                            [45, 314], [95, 314], [145, 314], [195, 314],
                            [20, 356], [70, 356], [120, 356], [170, 356],
                            [45, 398], [95, 398], [145, 398], [195, 398],
                            [20, 440], [70, 440], [120, 440], [170, 440],

                        ].map(([x, y], i) => (
                            <polygon
                                key={i}
                                points={`${x + 12},${y} ${x + 24},${y + 7} ${x + 24},${y + 21} ${x + 12},${y + 28} ${x},${y + 21} ${x},${y + 7}`}
                                stroke="url(#hexGradient)"
                                strokeWidth="1"
                                fill="none"
                                opacity="0.35"
                            />
                        ))}
                    </svg>
                </div>

                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center lg:gap-14">
                    {/* Left Content */}
                    <div className="w-full max-w-[430px]">
                        <h2 className="leading-[1.05] tracking-[-0.02em] space-y-1.5">
                            <span className="block text-[22px] text-[#3a4654] sm:text-[24px] font-normal">
                                Who Uses
                            </span>

                            <span className="block py-1 text-2xl sm:text-5xl font-semibold bg-gradient-to-r from-[#35c7c8] via-[#56c4d8] to-[#79a8ff] bg-clip-text text-transparent">
                                Healthcare
                            </span>

                            <span className="block text-2xl sm:text-5xl font-semibold bg-gradient-to-r from-[#35c7c8] via-[#56c4d8] to-[#79a8ff] bg-clip-text text-transparent mb-1">
                                Market Research
                            </span>

                            <span className=" mt-3 block text-[22px] text-[#3a4654] sm:text-[24px] font-normal">
                                Services?
                            </span>
                        </h2>

                        <ul className="mt-6 space-y-3">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#9ed8e6] text-lg font-medium text-[#62c5db]">
                                        ✓
                                    </span>
                                    <a
                                        href="#"
                                        className={`text-[15px] leading-[1.45] text-[#5f6b78] transition hover:text-[#2b84e0] hover:underline hover:underline-offset-2 ${idx === 0 ? "font-medium text-[#4b95d9]" : ""
                                            }`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full max-w-[550px]">
                        <div className="overflow-hidden rounded-[26px]">
                            <Image
                                src="/market-research/uses-image.png"
                                alt="Healthcare market research"
                                width={540}
                                height={320}
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}