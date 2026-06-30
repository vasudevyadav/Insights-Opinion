"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        label: "GDPR, CCPA, and International Data Protection:",
        desc: "In a world where data is a critical asset, we treat its protection as a top priority. We have stringent policies and protocols in place to ensure full compliance with international data protection laws.",
    },
    {
        label: "Regulatory Compliance:",
        desc: "We stay ahead of evolving regulatory requirements, maintaining full compliance with the latest data protection laws across all jurisdictions in which we operate globally.",
    },
    {
        label: "Transparency and Control:",
        desc: "We provide participants with complete transparency about how their data will be used. Our informed consent processes and data access controls empower individuals with full rights.",
    },
    {
        label: "Respondent Privacy:",
        desc: "We rigorously protect the confidentiality of respondents' data through strict anonymisation protocols, access controls, and robust data governance policies.",
    },
];

export default function QualityCompliance() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
    const next = () => setCurrent((c) => (c + 1) % slides.length);

    return (
        <section className="quality-hex-bg relative overflow-hidden py-12 lg:py-18">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

                    <div className="flex flex-col justify-between lg:pl-10">
                        <div>
                            <h2 className="text-[24px] font-light leading-tight text-[#2f3a52] lg:text-[30px]">
                                Compliance with
                            </h2>
                            <h3 className="quality-gradient-text mb-8 text-[25px] font-semibold leading-tight lg:text-[30px]">
                                Global Data Protection Laws
                            </h3>

                            <div className="mb-0 flex max-w-[440px] items-center rounded-r-full border-l-[10px] border-[#27bdb2] bg-white px-6 py-3 shadow-sm">
                                <p className="text-sm font-semibold text-[#27bdb2] lg:text-[15px]">
                                    {slides[current].label}
                                </p>
                            </div>
                            <div
                                className="ml-8 max-w-[390px] px-7 py-7"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #1bb0a4 0%, #4fa3c7 100%)",
                                }}
                            >
                                <p className="text-sm leading-7 text-white lg:text-base">
                                    {slides[current].desc}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center gap-3 pl-8">
                            <button
                                onClick={prev}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#101538] text-white transition hover:bg-[#27bdb2]"
                                aria-label="Previous"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#27bdb2] text-white transition hover:bg-[#101538]"
                                aria-label="Next"
                            >
                                <ChevronRight size={18} />
                            </button>
                            <div className="ml-2 hidden gap-2">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-[#3dd6c8]" : "w-2 bg-white/30"}`}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative flex min-h-[430px] justify-center lg:justify-end">
                        <div className="relative h-[430px] w-full max-w-[680px]">
                            <Image
                                src="/quality-standard/global-deta.png"
                                alt="Data Protection Compliance"
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
