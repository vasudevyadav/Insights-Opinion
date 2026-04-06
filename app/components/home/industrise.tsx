"use client";

import { useState } from "react";

const industries = [
    {
        id: 1,
        title: "Chemical",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/camikal-ind.png",
    },
    {
        id: 2,
        title: "Education",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image: "/education-ind.png",
    },
    {
        id: 3,
        title: "Telecom",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image: "/automotive-ind.png",
    },
    {
        id: 4,
        title: "IT",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image: "/camikal-ind.png",
    },
    {
        id: 5,
        title: "Agriculture",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image: "/education-ind.png",
    },
    {
        id: 6,
        title: "Automotive",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/automotive-ind.png",
    },
    {
        id: 7,
        title: "Construction",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image: "/automotive-ind.png",
    },
    {
        id: 8,
        title: "Education",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/education-ind.png",
    },
    {
        id: 9,
        title: "Healthcare",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image: "/camikal-ind.png",
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
};

function IndustryCard({
    title,
    description,
    image,
    isExpanded,
    onMouseEnter,
    onMouseLeave,
}: IndustryCardProps) {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="relative h-[220px] min-w-0 cursor-pointer overflow-hidden bg-white"
            style={{
                flex: isExpanded ? 2.4 : 1,
                transition: "flex 0.55s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s",
                boxShadow: isExpanded ? "0 12px 40px rgba(0,0,0,0.22)" : "none",
            }}
        >
            {/* ── Default (not hovered) state ── */}
            <div
                className="absolute inset-0 flex flex-col justify-center px-5"
                style={{
                    opacity: isExpanded ? 0 : 1,
                    pointerEvents: isExpanded ? "none" : "auto",
                    transition: "opacity 0.25s",
                }}
            >
                <p className="mb-2 lg:text-xl text-lg font-semibold text-[#1a2340]">{title}</p>
                <p className="line-clamp-3 text-xs leading-[1.65] max-w-48 text-[#6b7280] ">
                    {description}
                </p>
                <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#00b4a6] no-underline"
                >
                    Learn More <ArrowIcon />
                </a>
            </div>

            {/* ── Expanded (hovered) state ── */}
            <div
                className="absolute inset-0 flex flex-col"
                style={{
                    opacity: isExpanded ? 1 : 0,
                    pointerEvents: isExpanded ? "auto" : "none",
                    transition: "opacity 0.3s 0.15s",
                }}
            >
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                        transform: isExpanded ? "scale(1)" : "scale(1.08)",
                        transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
                    }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,18,50,0.93)_25%,rgba(8,18,50,0.45)_100%)]" />

                {/* Content — horizontally & vertically centered */}
                <div className="relative z-10 flex h-full flex-col items-left justify-center px-5 text-left">
                    <p className="mb-2 text-base lg:text-xl font-bold text-white">{title}</p>
                    <p className="line-clamp-3 text-xs lg:text-sm leading-[1.65] max-w-60 text-white/80">
                        {description}
                    </p>
                    <a
                        href="#"
                        className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold text-white no-underline"
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

    const rows = [
        industries.slice(0, 3),
        industries.slice(3, 6),
        industries.slice(6, 9),
    ];

    return (
        <section className="px-6 py-5">

            <div className="mb-10 text-center">
                <h2 className="text-2xl font-normal leading-tight text-black text-[#1a2340] lg:text-[38px]">
                    Industries
                    <span className="text-2xl ml-2 font-semibold leading-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] lg:text-[38px]">We serve</span>
                </h2>
            </div>

            <div className="mx-auto flex max-w-5xl flex-col gap-[14px]">
                {rows.map((row, rowIdx) => (
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
        </section>
    );
}