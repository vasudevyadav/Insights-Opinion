"use client";

import Image from "next/image";
import { ArrowRight, BarChart2 } from "lucide-react";

const cards = [
    {
        title: "Quantitative and Qualitative Research Standards:",
        description:
            "We maintain strict methodological standards across both quantitative and qualitative research. Our rigorous approach ensures accurate data collection, validated instruments, and reliable results that give you the confidence to act on your findings.",
        image: "/market-research/Healthcare-1.jpg",
        dark: false,
    },
    {
        title: "Data Collection and Integrity:",
        description:
            "We use a multi-layered approach to guarantee the accuracy and integrity of our data. Our online panels are carefully managed, our CATI and CAPI systems are latest and cutting-edge, and our mystery shopping exercises are meticulously planned.",
        image: null,
        dark: true,
    },
    {
        title: "Participant Selection:",
        description:
            "Our participant selection process is built on precision and integrity. We use representative sampling techniques and thorough screening protocols to ensure your research reaches the right people and produces results you can trust.",
        image: "/market-research/Healthcare-2.jpg",
        dark: false,
    },
    {
        title: "Researcher Training and Expertise:",
        description:
            "Every researcher on our team undergoes comprehensive training and ongoing professional development. We invest in continuous education to ensure our team stays ahead of industry trends, ethical standards, and evolving methodologies.",
        image: "/market-research/Healthcare-3.jpg",
        dark: false,
    },
];

export default function QualityMarketExcellence() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-16">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[42%] opacity-20">
                <svg viewBox="0 0 300 300" className="h-full w-full" fill="none">
                    <defs>
                        <pattern id="hexQuality1" x="0" y="0" width="51" height="42" patternUnits="userSpaceOnUse">
                            <path d="M13 1H39L52 22.5L39 44H13L0 22.5L13 1Z" stroke="#9EDFF2" strokeWidth="1.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexQuality1)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className="text-center mb-10"
                   
                   
                >
                    <h2 className="text-[26px] font-light text-[#1a2340] lg:text-[42px]">
                        Market Research{" "}
                        <span className="font-semibold bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent">
                            Excellence
                        </span>
                    </h2>
                    <p className="mt-3 text-sm text-[#4b5563] max-w-2xl mx-auto lg:text-base">
                        Our commitment to quality spans every stage of the research process — from design and data collection to analysis and delivery.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, i) =>
                        card.dark ? (
                            <div
                                key={i}
                               
                               
                                className="flex flex-col overflow-hidden rounded-2xl shadow-xl"
                                style={{
                                    background:
                                        "linear-gradient(145deg, #0a1f44 0%, #0d2f5c 50%, #0b3d6b 100%)",
                                }}
                            >
                                <div className="flex flex-1 flex-col p-5">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-[14px] font-semibold text-white leading-snug max-w-[76%] lg:text-[15px]">
                                            {card.title}
                                        </h3>
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1bb0a4]/25 border border-[#1bb0a4]/40">
                                            <BarChart2 size={18} className="text-[#3dd6c8]" />
                                        </div>
                                    </div>
                                    <p className="flex-1 text-xs text-white/65 leading-5 lg:text-[13px] lg:leading-6">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={i}
                               
                               
                                className="group flex flex-col overflow-hidden rounded-2xl border border-[#d7e3ef] bg-white shadow-sm transition-all duration-500 hover:border-[#1a1f52] hover:shadow-xl"
                            >
                                <div className="relative h-[200px] w-full overflow-hidden">
                                    <Image
                                        src={card.image!}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>
                                <div className="flex flex-1 flex-col p-5">
                                    <h3 className="text-[14px] font-semibold text-[#1a2340] mb-2 lg:text-[15px] leading-snug">
                                        {card.title}
                                    </h3>
                                    <p className="flex-1 text-xs text-[#6b7280] leading-5 lg:text-[13px] lg:leading-6">
                                        {card.description}
                                    </p>
                                    <button className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#1bb0a4] transition hover:text-[#0d8a7e] lg:text-sm">
                                        READ MORE <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
