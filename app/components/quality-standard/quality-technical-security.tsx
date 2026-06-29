"use client";

import Image from "next/image";
import { ShieldCheck, Database, HardDrive, ClipboardCheck } from "lucide-react";

const securityPoints = [
    {
        icon: ShieldCheck,
        title: "Data Security and Technology Infrastructure",
        desc: "Our technology infrastructure meets ISO 27001 certification standards. Our commitment to technology security is our commitment to your data.",
    },
    {
        icon: Database,
        title: "Data Protection",
        desc: "We use advanced security protocols to safeguard data against breaches, unauthorised access, and other cyber threats at every level.",
    },
    {
        icon: HardDrive,
        title: "Backup Technologies",
        desc: "We invest in the latest security technologies for data collection, storage, and transfer — ensuring reliability and data integrity throughout.",
    },
    {
        icon: ClipboardCheck,
        title: "Audit and Compliance",
        desc: "Regular security audits and reviews allow us to continuously improve our compliance with security standards and data protection laws.",
    },
];

export default function QualityTechnicalSecurity() {
    return (
        <section className="relative overflow-hidden bg-[#0b1435] py-12 lg:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
                <svg viewBox="0 0 300 300" className="h-full w-full" fill="none">
                    <defs>
                        <pattern id="hexSecurity" x="0" y="0" width="51" height="42" patternUnits="userSpaceOnUse">
                            <path d="M13 1H39L52 22.5L39 44H13L0 22.5L13 1Z" stroke="#9EDFF2" strokeWidth="1.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexSecurity)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                    {/* Left - Image */}
                    <div
                       
                       
                        className="flex justify-center"
                    >
                        <div className="w-full max-w-[540px] overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src="/market-research/reacher-bg.png"
                                alt="Technical and Operational Security"
                                width={640}
                                height={440}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="text-white">
                        <p className="text-[18px] font-light text-white/70 lg:text-[24px]">
                            Technical and
                        </p>
                        <h2
                            className="text-[22px] font-bold lg:text-[36px] mb-6"
                            style={{
                                background: "linear-gradient(90deg, #3dd6c8 0%, #74b9ff 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Operational Security
                        </h2>

                        <div className="space-y-5">
                            {securityPoints.map((pt, i) => {
                                const Icon = pt.icon;
                                return (
                                    <div
                                        key={i}
                                       
                                       
                                        className="flex gap-3"
                                    >
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1bb0a4]/20 border border-[#1bb0a4]/30">
                                            <Icon size={15} className="text-[#3dd6c8]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#e2f0fb] lg:text-[15px]">
                                                {pt.title}
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-white/55 lg:text-[13px] lg:leading-6">
                                                {pt.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
