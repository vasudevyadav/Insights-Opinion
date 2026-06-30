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
        <section className="quality-hex-bg relative overflow-hidden py-12 lg:py-18">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                    <div className="lg:pl-16">
                        <h2 className="mb-6 text-[26px] font-light leading-tight text-[#18213d] lg:text-[31px]">
                            <span className="quality-gradient-text font-semibold">Global Data Transfer</span><br />
                            and Management
                        </h2>

                        <div className="space-y-5">
                            {transferPoints.map((pt, i) => (
                                <div key={i}>
                                    <div>
                                        <p className="text-sm font-bold text-[#24b8ae] lg:text-[15px]">
                                            {pt.title}:
                                        </p>
                                        <p className="mt-1 max-w-[510px] text-xs font-medium leading-5 text-[#101538] lg:text-[13px] lg:leading-6">
                                            {pt.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end lg:pr-10">
                        <div className="relative h-[290px] w-full max-w-[560px] overflow-hidden rounded-[24px] shadow-md lg:h-[370px]">
                            <Image
                                src="/quality-standard/global-deta.png"
                                alt="Global Data Transfer Management"
                                fill
                                className="object-cover object-right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
