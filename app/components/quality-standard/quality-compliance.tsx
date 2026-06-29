"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

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

const floatingBadges = [
    { label: "GDPR, CCPA, and International Data Protection", style: { top: "12%", left: "2%" }, dark: false },
    { label: "Regulatory Compliance:", style: { top: "18%", right: "2%" }, dark: true },
    { label: "Transparency and Control", style: { bottom: "28%", right: "2%" }, dark: false },
    { label: "Respondent Privacy", style: { bottom: "10%", left: "8%" }, dark: true },
];

export default function QualityCompliance() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
    const next = () => setCurrent((c) => (c + 1) % slides.length);

    return (
        <section className="relative overflow-hidden bg-white py-10 lg:py-14">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">

                    {/* Left – slider card */}
                    <div
                       
                       
                        className="flex flex-col justify-between rounded-2xl p-7 lg:p-10"
                        style={{
                            background:
                                "linear-gradient(135deg, #0a2347 0%, #0e3a6e 50%, #0d5471 100%)",
                        }}
                    >
                        <div>
                            <h2 className="text-[20px] font-light text-white/80 leading-snug lg:text-[28px]">
                                Compliance with
                            </h2>
                            <h3 className="text-[20px] font-bold text-white leading-snug lg:text-[28px] mb-8">
                                Global Data Protection Laws
                            </h3>

                            {/* Active slide */}
                            <div className="border-l-4 border-[#3dd6c8] pl-4 mb-4">
                                <p className="text-sm font-semibold text-[#7ee8de] lg:text-[15px]">
                                    {slides[current].label}
                                </p>
                            </div>
                            <div
                                className="rounded-xl p-5"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #1bb0a4 0%, #4fa3c7 100%)",
                                }}
                            >
                                <p className="text-xs leading-5 text-white lg:text-sm lg:leading-6">
                                    {slides[current].desc}
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="mt-8 flex items-center gap-4">
                            <button
                                onClick={prev}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-[#3dd6c8] hover:text-[#0a2347]"
                                aria-label="Previous"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3dd6c8] text-[#0a2347] transition hover:bg-white"
                                aria-label="Next"
                            >
                                <ChevronRight size={18} />
                            </button>
                            <div className="flex gap-2 ml-2">
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

                    {/* Right – image with floating badges */}
                    <div
                       
                       
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ minHeight: "380px" }}>
                            <Image
                                src="/how-professionals-ace-healthcare-market-research.jpg"
                                alt="Data Protection Compliance"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-[#0a2347]/20 via-transparent to-[#0a2347]/50" />

                            {/* Floating badges */}
                            {floatingBadges.map((badge, i) => (
                                <div
                                    key={i}
                                    className="absolute flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg backdrop-blur-sm"
                                    style={{
                                        ...badge.style,
                                        background: badge.dark
                                            ? "rgba(10,35,71,0.88)"
                                            : "rgba(255,255,255,0.90)",
                                        border: badge.dark
                                            ? "1px solid rgba(61,214,200,0.35)"
                                            : "1px solid rgba(209,230,245,0.8)",
                                    }}
                                >
                                    <CheckCircle2
                                        size={14}
                                        className={badge.dark ? "text-[#3dd6c8] shrink-0" : "text-[#1bb0a4] shrink-0"}
                                    />
                                    <p
                                        className={`text-[11px] font-semibold leading-tight ${badge.dark ? "text-white" : "text-[#1a2340]"}`}
                                    >
                                        {badge.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
