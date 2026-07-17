"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const practices = [
    {
        title: "Participant Welfare",
        desc: "Ethical practice is the foundation of our research. Every stage of participant engagement reflects our commitment to dignity, respect, and individual wellbeing. ",
    },
    {
        title: "Informed Consent",
        desc: "Participants are fully informed about research scope and their rights before taking part, with consent freely given, clearly documented, and never obtained through pressure.",
    },
    {
        title: "Confidentiality",
        desc: "We rigorously protect participant confidentiality, a commitment written into our standard operating procedures and data governance policies across every research project we run.",
    },
    {
        title: "Non-Discrimination",
        desc: "Our non-discrimination policy ensures every participant receives equal respect and fairness, regardless of background, demographic profile, or personal characteristics throughout the study.",
    },
];

export default function QualityEthical() {
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggle = (i: number) => setExpanded(expanded === i ? null : i);

    return (
        <section className="quality-hex-bg relative overflow-hidden py-10 lg:py-8">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

                    <div className="lg:pl-10">
                        <h2 className="mb-8 text-2xl font-light leading-tight text-[#18213d] lg:text-4xl">
                            <span className="quality-gradient-text font-semibold">Ethical Research </span>{" "}
                            Practices
                        </h2>

                        <div className="space-y-4">
                            {practices.map((item, i) => {
                                const isOpen = expanded === i;
                                return (
                                    <div
                                        key={i}

                                    >
                                        <p className="mb-4 text-sm font-bold text-[#101538] lg:text-base">
                                            {item.title}
                                        </p>
                                        <div className="relative border border-[#101538]/70 bg-transparent px-3 py-2">
                                            <div
                                                className={`overflow-hidden pr-6 transition-[max-height] duration-500 ease-in-out motion-reduce:transition-none ${isOpen ? "max-h-40" : "max-h-10"
                                                    }`}
                                            >
                                                <p className="text-[15px] leading-5 text-[#18213d]">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => toggle(i)}
                                                aria-label={isOpen ? "Collapse" : "Expand"}
                                                className="absolute -bottom-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#27bdb2] text-[#101538] transition hover:bg-[#101538] hover:text-white"
                                            >
                                                <ChevronDown
                                                    size={13}
                                                    className={`transition-transform duration-500 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="mx-auto w-full overflow-hidden rounded-[20px] shadow-md sm:max-w-[80%] sm:rounded-[28px] lg:max-w-[80%]">
                            <Image
                                src="/market-research-quality-standards/Ethical-Research-Practices.jpg"
                                alt="Ethical Research Practices"
                                width={640}
                                height={440}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
