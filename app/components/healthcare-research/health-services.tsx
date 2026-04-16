"use client";

import Image from "next/image";

type Service = {
    title: string;
    image: string;
    points: string[];
};

export default function HealthServices() {
    const services: Service[] = [
        {
            title: "Healthcare\nMarket Research",
            image: "/market-research/Healthcare-3.jpg",
            points: [
                "Market sizing",
                "Market opportunity analysis",
                "Competitive landscape research",
                "Healthcare consumer insights",
            ],
        },
        {
            title: "Healthcare Qualitative\nMarket Research",
            image: "/market-research/Healthcare-2.jpg",
            points: [
                "Focus groups",
                "Patient interviews",
                "Physician interviews",
                "Stakeholder interviews",
            ],
        },
        {
            title: "Healthcare Panels &\nRespondent Recruitment",
            image: "/market-research/Healthcare-1.jpg",
            points: [
                "Patient panels",
                "Caregiver panels",
                "Physician panels",
                "Healthcare professional panels",
            ],
        },
    ];

    return (
        <section
            data-aos="fade-up"
            className="relative overflow-hidden bg-[#edf6ff] py-8 lg:py-12"
        >
            {/* Added New Hexagon Pattern On Left */}
            <div className="pointer-events-none absolute -top-10 left-[-220px] hidden w-[42%] opacity-80 lg:block z-10">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 320 520"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient
                            id="hexGradientExtra"
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
                                    stroke="url(#hexGradientExtra)"
                                    strokeWidth="1.2"
                                    fill="none"
                                />
                            );
                        })
                    )}
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-8 text-center sm:mb-10 lg:mb-12">
                    <p className="text-[16px] font-semibold text-[#1f2a44] sm:text-[18px]">
                        Services
                    </p>

                    <h2 className="mt-1 text-[28px] font-semibold sm:text-[38px] lg:text-[46px]">
                        <span className="bg-gradient-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
                            Healthcare Market Research
                        </span>
                    </h2>
                </div>

                {/* Mobile: horizontal scroll | md+: grid */}
                <div className="md:hidden">
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="min-w-[88%] snap-center"
                            >
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: Service }) {
    return (
        <div className="group mx-auto flex w-full max-w-[330px] flex-col overflow-hidden rounded-[24px] border border-[#2f86d6] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] will-change-transform transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:bg-gradient-to-b hover:from-[#1687c9] hover:to-[#39c5c7] hover:shadow-[0_16px_36px_rgba(22,135,201,0.22)]">
            <div className="relative h-[140px] w-full overflow-hidden rounded-b-[22px] transition-all duration-500 group-hover:h-[165px]">
                <Image
                    src={service.image}
                    alt={service.title.replace("\n", " ")}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
            </div>

            <div className="px-6 pb-6 pt-5 text-center">
                <h3 className="whitespace-pre-line text-[18px] font-semibold text-[#1e2746] transition-colors duration-500 ease-out group-hover:text-white sm:text-[20px]">
                    {service.title}
                </h3>

                <ul className="mt-5 space-y-1 text-[13px] text-[#2f3850] transition-colors duration-500 ease-out group-hover:text-white/95 sm:text-[14px]">
                    {service.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}