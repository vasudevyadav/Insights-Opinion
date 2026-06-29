"use client";

import Image from "next/image";

const transferPoints = [
    {
        title: "Cross-Border Data Flow Compliance",
        desc: "We navigate the complexities of international data transfers and ensure compliance with GDPR Standard Contractual Clauses, Privacy Shield frameworks, and other cross-border data transfer mechanisms.",
    },
    {
        title: "International Standards",
        desc: "Our data management standards are aligned with top international security and privacy standards, ensuring lawful and secure data transfers across all markets.",
    },
    {
        title: "Data Localization",
        desc: "We process data in accordance with the legal requirements of specific jurisdictions, ensuring lawful and secure data transfers remain compliant at all times.",
    },
    {
        title: "Continuous Monitoring",
        desc: "Our legal team monitors global data protection legislation to proactively adapt our policies to new laws and regulations as they emerge.",
    },
];

export default function QualityGlobalTransfer() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-16">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[40%] opacity-20">
                <svg viewBox="0 0 300 300" className="h-full w-full" fill="none">
                    <defs>
                        <pattern id="hexGlobal" x="0" y="0" width="51" height="42" patternUnits="userSpaceOnUse">
                            <path d="M13 1H39L52 22.5L39 44H13L0 22.5L13 1Z" stroke="#9EDFF2" strokeWidth="1.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexGlobal)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                    {/* Left - Content */}
                    <div>
                        <p className="text-[18px] font-light text-[#4b5563] lg:text-[24px]">
                            Global Data Transfer
                        </p>
                        <h2
                            className="text-[22px] font-bold lg:text-[36px] mb-6"
                            style={{
                                background: "linear-gradient(90deg, #1bb0a4 0%, #74b9ff 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            and Management
                        </h2>

                        <div className="space-y-5">
                            {transferPoints.map((pt, i) => (
                                <div
                                    key={i}
                                   
                                   
                                    className="flex gap-3"
                                >
                                    <div className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#1bb0a4]" />
                                    <div>
                                        <p className="text-sm font-semibold text-[#1bb0a4] lg:text-[15px]">
                                            {pt.title}
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-[#6b7280] lg:text-[13px] lg:leading-6">
                                            {pt.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div
                       
                       
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-[540px] overflow-hidden rounded-2xl shadow-md">
                            <Image
                                src="/globe-image.png"
                                alt="Global Data Transfer Management"
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
