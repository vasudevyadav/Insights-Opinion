"use client";

import { useState } from "react";

const industries = [
    {
        id: 1,
        title: "Chemical",
        description:
            "Studies on industrial demand, product usage, buyer behavior, and sector-specific market opportunities.",
        image: "/Chemical.jpg",
    },
    {
        id: 2,
        title: "Education",
        description:
            "Research on student behavior, course demand, learning platforms, and institutional decision-making.",
        image: "/Education.jpg",
    },
    {
        id: 3,
        title: "Telecom",
        description:
            "Insights into customer expectations, network experience, service usage, and digital adoption.",
        image: "/Telecom.jpg",
    },
    {
        id: 4,
        title: "IT",
        description:
            "Research for software, SaaS, digital products, and enterprise technology buying decisions.",
        image: "/IT.jpg",
    },
    {
        id: 5,
        title: "Agriculture",
        description:
            "Studies on farmer behavior, product adoption, rural demand, and agri-market preferences.",
        image: "/Agriculter.jpg",
    },
    {
        id: 6,
        title: "Automotive",
        description:
            "Research covering buyer preferences, vehicle demand, EV interest, and aftermarket behavior.",
        image: "/Automotive.jpg",
    },
    {
        id: 7,
        title: "Construction",
        description:
            "Insights into buyer needs, material demand, project trends, and industry purchasing behavior.",
        image: "/Construction-.jpg",
    },
    {
        id: 8,
        title: "Education",
        description:
            "Research on student behavior, course demand, learning platforms, and institutional decision-making.",
        image: "/Education.jpg",
    },
    {
        id: 9,
        title: "Healthcare",
        description:
            "Research across patients, providers, treatment experience, and healthcare market behavior.",
        image: "/healthcare.jpg",
    },
];

const ArrowIcon = ({ color = "currentColor" }: { color?: string }) => (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

type IndustryCardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    isExpanded: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    mobileExpanded?: boolean;
};

function IndustryCard({
    title,
    description,
    image,
    isExpanded,
    onMouseEnter,
    onMouseLeave,
    mobileExpanded = false,
}: IndustryCardProps) {
    const showExpanded = mobileExpanded || isExpanded;

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="relative h-[250px] min-w-0 cursor-pointer overflow-hidden bg-white md:h-[240px] lg:h-[250px]"
            style={{
                flex: mobileExpanded ? 1 : isExpanded ? 2.4 : 1,
                transition: mobileExpanded
                    ? "none"
                    : "flex 0.55s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s",
                boxShadow: showExpanded ? "0 12px 40px rgba(0,0,0,0.22)" : "none",
            }}
        >
            <div
                className="absolute inset-0 flex flex-col justify-center px-5"
                style={{
                    opacity: showExpanded ? 0 : 1,
                    pointerEvents: showExpanded ? "none" : "auto",
                    transition: mobileExpanded ? "none" : "opacity 0.25s",
                }}
            >
                <p className="mb-2 text-xl font-semibold text-[#1a2340] lg:text-xl">
                    {title}
                </p>
                <p className="line-clamp-3 max-w-48 text-base leading-[1.65] text-[#6b7280]">
                    {description}
                </p>
                <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#00b4a6] no-underline"
                >
                    Learn More <ArrowIcon />
                </a>
            </div>

            <div
                className="absolute inset-0 flex flex-col"
                style={{
                    opacity: showExpanded ? 1 : 0,
                    pointerEvents: showExpanded ? "auto" : "none",
                    transition: mobileExpanded ? "none" : "opacity 0.3s 0.15s",
                }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                        transform: showExpanded ? "scale(1)" : "scale(1.08)",
                        transition: mobileExpanded
                            ? "none"
                            : "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
                    }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,18,50,0.93)_25%,rgba(8,18,50,0.45)_100%)]" />

                <div className="relative z-10 flex h-full flex-col items-start justify-center px-5 text-left">
                    <p className="mb-2 text-base font-bold text-white lg:text-2xl">
                        {title}
                    </p>
                    <p className="line-clamp-3 max-w-60 text-xs leading-[1.65] text-white/80 lg:text-lg">
                        {description}
                    </p>
                    <a
                        href="#"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white no-underline"
                    >
                        Learn More <ArrowIcon color="white" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Industries() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const tabletRows = [
        industries.slice(0, 2),
        industries.slice(2, 4),
        industries.slice(4, 6),
        industries.slice(6, 8),
        industries.slice(8, 9),
    ];

    const desktopRows = [
        industries.slice(0, 3),
        industries.slice(3, 6),
        industries.slice(6, 9),
    ];

    return (
        <section className="px-4 py-5 sm:px-6">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-normal leading-tight text-[#1a2340] lg:text-[45px]">
                    Industries
                    <span className="ml-2 bg-[linear-gradient(90deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] bg-clip-text text-3xl font-semibold leading-tight text-transparent lg:text-[45px]">
                        We Serve
                    </span>
                </h2>
            </div>

            <div className="mx-auto max-w-6xl">
                {/* Mobile Slider */}
                <div className="md:hidden">
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
                        {industries.map((ind) => (
                            <div
                                key={ind.id}
                                className="min-w-full snap-center"
                            >
                                <IndustryCard
                                    {...ind}
                                    isExpanded={true}
                                    mobileExpanded={true}
                                    onMouseEnter={() => { }}
                                    onMouseLeave={() => { }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden flex-col gap-[14px] md:flex lg:hidden">
                    {tabletRows.map((row, rowIdx) => (
                        <div key={rowIdx} className="flex gap-[14px]">
                            {row.map((ind) => (
                                <IndustryCard
                                    key={ind.id}
                                    {...ind}
                                    isExpanded={hoveredId === ind.id}
                                    onMouseEnter={() => setHoveredId(ind.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Desktop Layout */}
                <div className="hidden flex-col gap-[14px] lg:flex">
                    {desktopRows.map((row, rowIdx) => (
                        <div key={rowIdx} className="flex gap-[14px]">
                            {row.map((ind) => (
                                <IndustryCard
                                    key={ind.id}
                                    {...ind}
                                    isExpanded={hoveredId === ind.id}
                                    onMouseEnter={() => setHoveredId(ind.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}