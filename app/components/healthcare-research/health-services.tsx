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
        <section className="relative overflow-hidden bg-[#edf6ff] py-8 lg:py-12">
            {/* Hexagon Pattern */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[34%] opacity-30">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 420 700"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="hexGradient" x1="0" y1="0" x2="420" y2="0">
                            <stop offset="0%" stopColor="#9be7ff" />
                            <stop offset="50%" stopColor="#7fd6f6" />
                            <stop offset="100%" stopColor="#7bc9ff" />
                        </linearGradient>
                    </defs>

                    {Array.from({ length: 45 }).map((_, i) => {
                        const x = (i % 5) * 70;
                        const y = Math.floor(i / 5) * 60;

                        return (
                            <polygon
                                key={i}
                                points={`${x + 25},${y} ${x + 50},${y + 14} ${x + 50},${y + 42} ${x + 25},${y + 56} ${x},${y + 42} ${x},${y + 14}`}
                                stroke="url(#hexGradient)"
                                strokeWidth="1.2"
                                fill="none"
                                opacity="0.6"
                            />
                        );
                    })}
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <p className="text-[18px] font-semibold text-[#1f2a44]">Services</p>
                    <h2 className="mt-1 text-[30px] font-semibold sm:text-[46px]">
                        <span className="bg-gradient-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
                            Healthcare Market Research
                        </span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            {/* Image */}
            <div className="relative h-[140px] hover:h-[165px] w-full overflow-hidden rounded-b-[22px]">
                <Image
                    src={service.image}
                    alt={service.title.replace("\n", " ")}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
            </div>

            {/* Content */}
            <div className="px-6 pb-6 pt-5 text-center">
                <h3 className="whitespace-pre-line text-[20px] font-semibold text-[#1e2746] transition-colors duration-500 ease-out group-hover:text-white">
                    {service.title}
                </h3>

                <ul className="mt-5 space-y-1 text-[14px] text-[#2f3850] transition-colors duration-500 group-hover:text-base  ease-out group-hover:text-white/95">
                    {service.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}