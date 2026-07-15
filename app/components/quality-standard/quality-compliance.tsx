"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        label: "GDPR and CCPA Alignment",
        desc: "We maintain policies and protocols designed to align our data handling with GDPR, CCPA, and other applicable international data protection frameworks and regulations. ",
    },
    {
        label: "Regulatory Oversight",
        desc: "Dedicated compliance officers oversee our adherence to data protection frameworks, supported by regular legal audits that confirm continuous, verifiable compliance across every project. ",
    },
    {
        label: "Respondent Privacy",
        desc: "Respondent data is anonymized and access controlled under strict data governance policies, protecting personal information and individual rights at every stage of research. ",
    },
    {
        label: "Transparency and Control",
        desc: "We provide clear, understandable privacy notices and give respondents meaningful control over their personal data throughout the research process, from consent to closure. ",
    },
];

export default function QualityCompliance() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
    const next = () => setCurrent((c) => (c + 1) % slides.length);

    return (
        <section className="quality-hex-bg relative overflow-hidden py-12 lg:py-8">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[0.80fr_1.20fr] lg:gap-4">

                    <div className="flex flex-col justify-between lg:pl-10">
                        <div>
                            <h2 className="text-2xl font-light leading-tight text-[#2f3a52] lg:text-4xl">
                                Compliance with
                            </h2>
                            <h3 className="quality-gradient-text mb-8 text-2xl font-semibold leading-tight lg:text-4xl">
                                Global Data Protection Laws
                            </h3>

                            <div className="mb-0 flex w-full max-w-[440px] items-center rounded-r-full border-l-[8px] border-[#27bdb2] bg-white px-4 py-4 shadow-sm sm:border-l-[10px] sm:px-6">
                                <p className="text-sm font-semibold text-[#27bdb2] lg:text-base">
                                    {slides[current].label}
                                </p>
                            </div>
                            <div
                                className="max-w-[390px] px-5 py-6 sm:ml-8 sm:px-7 sm:py-7"
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

                        <div className="mt-5 flex items-center gap-3 sm:pl-8">
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

                    <div className="relative flex justify-center">
                        <div className="relative h-[280px] w-full sm:h-[430px] lg:h-[650px]">
                            <Image
                                src="/quality-standard/global-deta.png"
                                alt="Data Protection Compliance"
                                fill
                                sizes="(min-width: 1024px) 60vw, 100vw"
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
