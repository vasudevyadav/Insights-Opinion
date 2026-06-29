"use client";

import Image from "next/image";

const industries = [
    { title: "IT", image: "/IT.jpg" },
    { title: "Agriculture", image: "/Agriculter.jpg" },
    { title: "Automotive", image: "/Automotive.jpg" },
    { title: "Construction", image: "/Construction-.jpg" },
    { title: "Healthcare", image: "/healthcare.jpg" },
    { title: "Chemical", image: "/Chemical.jpg" },
    { title: "Education", image: "/Education.jpg" },
    { title: "Telecom", image: "/Telecom.jpg" },
];

export default function QualityIndustryBanner() {
    return (
        <section className="relative overflow-hidden bg-[#0b1435] py-12 lg:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <svg viewBox="0 0 300 300" className="h-full w-full" fill="none">
                    <defs>
                        <pattern id="hexIndBanner" x="0" y="0" width="51" height="42" patternUnits="userSpaceOnUse">
                            <path d="M13 1H39L52 22.5L39 44H13L0 22.5L13 1Z" stroke="#9EDFF2" strokeWidth="1.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexIndBanner)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className="text-center mb-10"
                   
                   
                >
                    <h2 className="text-[22px] font-light text-white lg:text-[34px]">
                        Your Industry Knowledge Partner
                    </h2>
                    <h3
                        className="text-[22px] font-bold lg:text-[34px]"
                        style={{
                            background: "linear-gradient(90deg, #3dd6c8 0%, #74b9ff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Across the Globe
                    </h3>
                    <p className="mt-2 text-sm text-white/55 lg:text-base">
                        Delivering Specialised Insights Across Diverse Sectors
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-6 sm:grid-cols-4 lg:grid-cols-8">
                    {industries.map((ind, i) => (
                        <div
                            key={i}
                           
                           
                            className="group flex flex-col items-center gap-3"
                        >
                            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/20 transition-all duration-300 group-hover:border-[#3dd6c8] group-hover:shadow-lg lg:h-[60px] lg:w-[60px]">
                                <Image
                                    src={ind.image}
                                    alt={ind.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-center text-[10px] font-medium text-white/70 transition-colors group-hover:text-[#3dd6c8] lg:text-xs">
                                {ind.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
