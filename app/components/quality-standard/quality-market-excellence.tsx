"use client";

import Image from "next/image";
import { ArrowRight, BarChart2 } from "lucide-react";

const cards = [
    {
        title: "Quantitative and Qualitative Research Standards:",
        description:
            "We maintain strict methodological standards across both quantitative and qualitative research. Our rigorous approach ensures accurate data collection, validated instruments, and reliable results that give you the confidence to act on your findings.",
        image: "/quality-standard/market-research-1.png",

    },
    {
        title: "Data Collection and Integrity:",
        description:
            "We use a multi-layered approach to guarantee the accuracy and integrity of our data. Our online panels are carefully managed, our CATI and CAPI systems are latest and cutting-edge, and our mystery shopping exercises are meticulously planned.",
        image: "/quality-standard/market-research-1.png",

    },
    {
        title: "Participant Selection:",
        description:
            "Our participant selection process is built on precision and integrity. We use representative sampling techniques and thorough screening protocols to ensure your research reaches the right people and produces results you can trust.",
        image: "/quality-standard/market-research-1.png",

    },
    {
        title: "Researcher Training and Expertise:",
        description:
            "Every researcher on our team undergoes comprehensive training and ongoing professional development. We invest in continuous education to ensure our team stays ahead of industry trends, ethical standards, and evolving methodologies.",
        image: "/quality-standard/market-research-1.png",

    },
];

export default function QualityMarketExcellence() {
    return (
        <section className="quality-hex-bg relative overflow-hidden py-8 lg:py-14">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h2 className="text-[26px] font-light text-[#1a2340] lg:text-[36px]">
                        <span className="quality-gradient-text font-semibold">Market Research</span>{" "}
                        Excellence
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                    {cards.map((card, i) => (
                            <div
                                key={i}
                                className="group relative flex min-h-[294px] flex-col overflow-hidden rounded-[5px] bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative h-full w-full bg-white">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-1.5 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                                        <h3 className="px-2 py-1 text-[14px] font-bold leading-snug text-[#101538] lg:text-[15px]">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>
                                <button className="inline-flex h-11 w-full items-center gap-4 bg-gradient-to-r from-[#18b9aa] to-[#4bb7d9] px-6 text-xs font-semibold text-white transition-opacity duration-300 group-hover:opacity-0">
                                    READ MORE <ArrowRight size={14} />
                                </button>

                                <div className="absolute inset-0 flex flex-col bg-[#101538] p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="mb-4 flex items-start justify-between">
                                        <h3 className="max-w-[76%] text-[14px] font-semibold leading-snug text-white lg:text-[15px]">
                                            {card.title}
                                        </h3>
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-[#24bfb7]">
                                            <BarChart2 size={18} className="text-white" />
                                        </div>
                                    </div>
                                    <p className="flex-1 text-xs leading-6 text-white/80 lg:text-[13px] line-clamp-6">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
