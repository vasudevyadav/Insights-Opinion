"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const practices = [
    {
        title: "Ethical Standards and Participant Welfare:",
        desc: "We believe that ethical practice is the foundation of good research. Our approach to participant welfare ensures dignity, respect, and wellbeing are prioritised at every stage of the research process.",
    },
    {
        title: "Informed Consent:",
        desc: "Participants are fully informed about the research scope and their rights before agreeing to take part. Consent is always freely given, documented, and never coerced.",
    },
    {
        title: "Confidentiality:",
        desc: "We rigorously protect the confidentiality of participant data, a commitment enshrined in our standard operating procedures and data governance policies across all projects.",
    },
    {
        title: "Non-Discrimination:",
        desc: "Our non-discrimination policy ensures all participants are treated with equal respect, fairness, and dignity regardless of background or demographic.",
    },
];

export default function QualityEthical() {
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggle = (i: number) => setExpanded(expanded === i ? null : i);

    return (
        <section className="quality-hex-bg relative overflow-hidden py-10 lg:py-16">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

                    <div className="lg:pl-10">
                        <h2 className="mb-8 text-[25px] font-light leading-tight text-[#18213d] lg:text-[32px]">
                            <span className="quality-gradient-text font-semibold">Ethical Research</span>{" "}
                            Practices
                        </h2>

                        <div className="space-y-4">
                            {practices.map((item, i) => {
                                const isOpen = expanded === i;
                                return (
                                    <div
                                        key={i}
                                       
                                       
                                    >
                                        <p className="mb-1.5 text-sm font-bold text-[#101538] lg:text-[14px]">
                                            {item.title}
                                        </p>
                                        <div className="relative max-w-[370px] border border-[#101538]/70 bg-transparent px-3 py-2">
                                            <p
                                                className={`pr-6 text-sm leading-5 text-[#18213d] transition-all duration-300 ${isOpen ? "" : "line-clamp-2"}`}
                                            >
                                                {item.desc}
                                            </p>
                                            <button
                                                onClick={() => toggle(i)}
                                                aria-label={isOpen ? "Collapse" : "Expand"}
                                                className="absolute -bottom-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#27bdb2] text-[#101538] transition hover:bg-[#101538] hover:text-white"
                                            >
                                                {isOpen ? (
                                                    <ChevronUp size={13} />
                                                ) : (
                                                    <ChevronDown size={13} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-[560px] overflow-hidden rounded-[28px] shadow-md">
                            <Image
                                src="/quality-standard/ethical-research.png"
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
