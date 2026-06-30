"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const securityPoints = [
    {
        title: "Data Security and Technology Infrastructure",
        desc: "Our technology infrastructure meets ISO 27001 certification standards. Our commitment to technology security is our commitment to your data.",
    },
    {
        title: "Data Protection",
        desc: "We use advanced security protocols to safeguard data against breaches, unauthorised access, and other cyber threats at every level.",
    },
    {
        title: "Secure Technologies",
        desc: "We invest in the latest security technologies for data collection, storage, and transfer — ensuring reliability and data integrity throughout.",
    },
    {
        title: "Audit and Compliance",
        desc: "Regular security audits and reviews allow us to continuously improve our compliance with security standards and data protection laws.",
    },
];

export default function QualityTechnicalSecurity() {
    return (
        <section className="quality-hex-bg relative overflow-hidden pt-8 lg:pt-12">
            <div className="relative min-h-[575px] overflow-hidden [clip-path:polygon(0_13%,100%_0,100%_100%,0_100%)]">
                <Image
                    src="/quality-standard/technical-security.png"
                    alt="Technical and Operational Security"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#101010]/30" />

                <div className="relative z-10 mx-auto grid min-h-[575px] max-w-7xl items-center px-4 pt-12 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:pt-4">
                    <div />

                    <div className="py-12 text-white lg:py-16">
                        <h2 className="mb-7 text-[25px] font-semibold leading-tight lg:text-[31px]">
                            <span className="quality-gradient-text">Technical and</span><br />
                            <span className="quality-gradient-text">Operational Security</span>
                        </h2>

                        <div className="space-y-5">
                            {securityPoints.map((pt, i) => (
                                    <div key={i} className="flex gap-3">
                                        <CheckCircle2 className="mt-0.5 shrink-0 text-[#33c6d7]" size={22} />
                                        <div>
                                            <p className="text-sm font-semibold text-[#e2f0fb] lg:text-[15px]">
                                                {pt.title}:
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-white/80 lg:text-[13px] lg:leading-6">
                                                {pt.desc}
                                            </p>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
