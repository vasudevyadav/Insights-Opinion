"use client";

import { useState } from "react";

const industries = [
    {
        id: 1,
        title: "Chemical",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image:
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    },
    {
        id: 2,
        title: "Education",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    },
    {
        id: 3,
        title: "Telecom",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
        id: 4,
        title: "IT",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
    {
        id: 5,
        title: "Agriculture",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    },
    {
        id: 6,
        title: "Automotive",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
        id: 7,
        title: "Construction",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    },
    {
        id: 8,
        title: "Healthcare",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
        id: 9,
        title: "Aerospace",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        image:
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    },
];

export default function Industries() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const rows = [
        industries.slice(0, 3),
        industries.slice(3, 6),
        industries.slice(6, 9),
    ];

    return (
        <section className="bg-[#eef3fa] px-6 py-16 ">
            <div className="mb-10 text-center">
                <h2 className="m-0 text-[30px] font-semibold text-[#1a2340]">
                    Industries <span className="text-[#00b4a6]">We serve</span>
                </h2>
            </div>

            {rows.map((row, rowIdx) => (
                <div
                    key={rowIdx}
                    className="mx-auto mb-4 flex max-w-[960px] gap-4 last:mb-0"
                >
                    {row.map((ind) => {
                        const isHovered = hoveredId === ind.id;

                        return (
                            <div
                                key={ind.id}
                                onMouseEnter={() => setHoveredId(ind.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`relative h-[180px] min-w-0 cursor-pointer overflow-hidden rounded-[14px] bg-white transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] ${isHovered ? "shadow-[0_12px_40px_rgba(0,0,0,0.20)]" : ""
                                    }`}
                                style={{
                                    flex: isHovered ? 2.4 : 1,
                                }}
                            >
                                <div
                                    className={`absolute inset-0 px-5 pt-[22px] pb-[18px] transition-opacity duration-800 ${isHovered ? "pointer-events-none opacity-0" : "opacity-100"
                                        }`}
                                >
                                    <div className="flex h-full flex-col">
                                        <p className="mb-2 text-[14px] font-bold text-[#1a2340]">
                                            {ind.title}
                                        </p>

                                        <p className="w-full max-w-[200px] text-[11.5px] leading-[1.65] text-[#6b7280]">
                                            {ind.description}
                                        </p>

                                        <a
                                            className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#00b4a6] no-underline"
                                            href="#"
                                        >
                                            Learn More
                                            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M3 8h10M9 4l4 4-4 4"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Hover state */}
                                <div
                                    className={`absolute inset-0 p-[22px] transition-opacity duration-300 ${isHovered
                                        ? "pointer-events-auto opacity-100"
                                        : "pointer-events-none opacity-0"
                                        }`}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                                        style={{
                                            backgroundImage: `url(${ind.image})`,
                                            transform: isHovered ? "scale(1)" : "scale(1.08)",
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,18,50,0.93)_25%,rgba(8,18,50,0.40)_100%)]" />

                                    <div className="relative z-[2] flex h-full flex-col">
                                        <p className="mb-[7px] text-[16px] font-bold text-white">
                                            {ind.title}
                                        </p>

                                        <p className="w-full  text-[11.5px] leading-[1.65] text-white/80 line-clamp-3">
                                            {ind.description}
                                        </p>

                                        <a
                                            className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold text-white no-underline"
                                            href="#"
                                        >
                                            Learn More
                                            <svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <path
                                                    d="M3 8h10M9 4l4 4-4 4"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </section>
    );
}