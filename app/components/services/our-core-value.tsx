"use client";

import React from "react";
import { Eye, Fingerprint, Gem, Users, Trophy } from "lucide-react";

const coreValues = [
    {
        title: "Integrity",
        icon: Eye,
        description:
            "We operate with the highest standards of honesty and ethics, ensuring transparency and trust in all our relationship.",
    },
    {
        title: "Innovation",
        icon: Fingerprint,
        description:
            "We operate with the highest standards of honesty and ethics, ensuring transparency and trust in all our relationship.",
    },
    {
        title: "Quality",
        icon: Gem,
        description:
            "We operate with the highest standards of honesty and ethics, ensuring transparency and trust in all our relationship.",
    },
    {
        title: "Client-Centricity",
        icon: Users,
        description:
            "We operate with the highest standards of honesty and ethics, ensuring transparency and trust in all our relationship.",
    },
    {
        title: "Excellence",
        icon: Trophy,
        description:
            "We operate with the highest standards of honesty and ethics, ensuring transparency and trust in all our relationship.",
    },
];

function ArcCircle({ Icon }: { Icon: React.ElementType }) {
    return (
        <div className="relative h-[110px] w-[110px]">
            <svg
                viewBox="0 0 86 86"
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="43"
                    cy="46"
                    r="34"
                    fill="#f8f8f8"
                    stroke="#bfc3c7"
                    strokeWidth="1.8"
                />
                <path
                    d="M11 46 A32 32 0 0 1 75 46"
                    fill="none"
                    stroke="#4ca9de"
                    strokeWidth="6"
                    strokeLinecap="butt"
                />
            </svg>

            <div className="absolute inset-0  flex items-center justify-center">
                <Icon
                    size={36}
                    color="#38b9cb"
                    strokeWidth={1.6}
                    className="translate-y-[6px]"
                />
            </div>
        </div>
    );
}

export default function OurCoreValues() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-0 lg:py-10">

            <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="text-[28px] font-semibold leading-none text-[#34b8c9] lg:text-4xl mb-2">
                        Our Core Values
                    </h2>
                    <p className="mt-1 text-xs leading-tight text-[#374151] lg:text-base">
                        Our core values shape every decision and interaction at Insights Opinion:
                    </p>
                </div>

                {/* Value Cards */}
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-5 lg:gap-x-6">
                    {coreValues.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div key={i} className="flex flex-col items-start">
                                <div className="relative lg:min-h-[130px] min-h-[40px]  lg:pl-4 pl-28">
                                    <div className="absolute lg:left-0 left-10 top-[7px] h-[7px] w-[7px] rounded-full bg-[#3fb8c9]" />
                                    <div className="absolute lg:left-[3px] left-[42px] lg:top-[15px] top-[13px] lg:h-[130px] h-[80px] w-[1.5px] bg-[#56bfd0]" />

                                    <h3 className="text-sm font-semibold leading-none text-[#37b9ca] lg:text-lg mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1.5 max-w-[190px] text-xs leading-[1.45] text-[#1f2937] font-medium lg:text-[13px]">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="-mt-1 lg:ml-[-50px] lg:-mt-1 -mt-8 -ml-3">
                                    <ArcCircle Icon={Icon} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Banner */}
                <div className="mx-auto mt-10 w-fit border border-[#8a97a3] bg-[#f7fbff] px-6 py-2.5 text-center text-xs leading-tight text-[#374151] lg:text-[15px]">
                    At Insights Opinion, we are more than just a service provider, we are your
                    partner in turning data into strategic success.
                </div>
            </div>
        </section>
    );
}