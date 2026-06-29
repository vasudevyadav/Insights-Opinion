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
        <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-16">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[40%] opacity-20">
                <svg viewBox="0 0 300 300" className="h-full w-full" fill="none">
                    <defs>
                        <pattern id="hexEthical" x="0" y="0" width="51" height="42" patternUnits="userSpaceOnUse">
                            <path d="M13 1H39L52 22.5L39 44H13L0 22.5L13 1Z" stroke="#9EDFF2" strokeWidth="1.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexEthical)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                    {/* Left – accordion items */}
                    <div>
                        <p className="text-[18px] font-light text-[#4b5563] lg:text-[24px]">
                            Ethical Research
                        </p>
                        <h2 className="text-[22px] font-bold lg:text-[36px] bg-linear-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent mb-8">
                            Practices
                        </h2>

                        <div className="space-y-4">
                            {practices.map((item, i) => {
                                const isOpen = expanded === i;
                                return (
                                    <div
                                        key={i}
                                       
                                       
                                    >
                                        <p className="text-sm font-bold text-[#1a2340] mb-1.5 lg:text-[14px]">
                                            {item.title}
                                        </p>
                                        <div className="relative rounded-xl border border-[#c9dcea] bg-white p-4 shadow-sm">
                                            <p
                                                className={`text-xs leading-5 text-[#6b7280] lg:text-[13px] lg:leading-6 pr-6 transition-all duration-300 ${isOpen ? "" : "line-clamp-2"}`}
                                            >
                                                {item.desc}
                                            </p>
                                            <button
                                                onClick={() => toggle(i)}
                                                aria-label={isOpen ? "Collapse" : "Expand"}
                                                className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#1bb0a4] text-white transition hover:bg-[#0d8a7e]"
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

                    {/* Right – image */}
                    <div
                       
                       
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-135 overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src="/market-research/methodologies-image.png"
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
