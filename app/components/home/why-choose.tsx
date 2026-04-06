"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

const sectionsData = [
    {
        headingLight: "Why",
        headingBold: "Choose us",
        description:
            "Our expertise makes us a trusted leader in market research. Insights Opinion is capable of serving in 60 foreign languages, covering more than 100 countries.",
        image: "/why-choose-img.png",
        accordionData: [
            {
                title: "Global Expertise",
                content:
                    "Our research capabilities help brands run studies across markets with consistency, speed, and dependable delivery.",
            },
            {
                title: "Enterprise Reliability",
                content:
                    "We follow reliable processes, secure workflows, and structured project execution for enterprise-grade research delivery.",
            },
            {
                title: "Multi-Language Capabilities",
                content:
                    "We support multilingual research execution to help brands engage audiences across regions with local relevance.",
            },
            {
                title: "Faster Time-to-Insight",
                content:
                    "Our workflows are built to reduce delays and help teams move from data collection to actionable insights faster.",
            },
        ],
    },
    {
        headingLight: "What’s New at ",
        headingBold: " Insights Opinion ",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        image: "/why-choose-img-1.png",
        accordionData: [
            {
                title: "Real-time dashboards",
                content:
                    "We run projects through structured workflows that help reduce delays and improve delivery quality.",
            },
            {
                title: "Multi-country project management",
                content:
                    "Our team supports enterprise research needs with consistency and dependable communication.",
            },
            {
                title: "AI-assisted data cleaning",
                content:
                    "We help brands connect with audiences across markets through well-managed multilingual execution.",
            },
            {
                title: " End-to-end research lifecycle ",
                content:
                    "Our approach helps businesses move faster from raw data to useful market understanding.",
            },
        ],
    },
];

function Accordion({
    accordionData,
}: {
    accordionData: { title: string; content: string }[];
}) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="mt-8 w-full">
            {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div key={item.title} className="border-b border-black">
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                            className={`flex w-full items-center justify-between px-5 py-5 text-left transition-all duration-200 ${isOpen
                                ? "bg-[#111b54] text-white"
                                : "bg-transparent text-[#374151] hover:bg-[#e8eef5]"
                                }`}
                        >
                            <div>
                                <h3
                                    className={`lg:text-lg text-sm font-semibold ${isOpen ? "text-[#16af9f]" : "text-[#384250]"
                                        }`}
                                >
                                    {item.title}
                                </h3>

                                {isOpen && (
                                    <p className="mt-2 max-w-[300px] text-xs lg:text-sm leading-[1.55] text-[#d6dbef]">
                                        {item.content}
                                    </p>
                                )}
                            </div>

                            <span className="ml-4 shrink-0">
                                {isOpen ? (
                                    <ChevronUp
                                        size={18}
                                        className={isOpen ? "text-white" : "text-[#4b5563]"}
                                    />
                                ) : (
                                    <ChevronDown size={18} className="text-[#4b5563]" />
                                )}
                            </span>
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

function AnimatedWhyChooseFigure() {
    return (
        <div className="relative inline-flex w-fit items-end justify-center overflow-visible bg-transparent">
            <img
                src="/globe-image.png"
                alt="Animated figure"
                className="globe-spin"
            />
            <img
                src="/why-men.png"
                alt="Animated figure"
                className="absolute lg:-left-10 left-0 -bottom-32 lg:-bottom-14 w-[22rem] object-cover"
            />
        </div>
    );
}

export default function WhyChoose() {
    return (
        <section className="relative">
            <div className="absolute inset-0 z-0">
                <div className="h-full w-full" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 py-2 lg:px-0 lg:py-16">
                <div className="lg:space-y-20 space-y-44">
                    {sectionsData.map((section, sectionIndex) => {
                        const isEven = sectionIndex % 2 === 0;

                        return (
                            <div
                                key={sectionIndex}
                                className="grid items-center gap-10 lg:grid-cols-[1.02fr_1fr]"
                            >
                                <div
                                    className={`${isEven ? "lg:order-1" : "lg:order-2"} max-w-[500px]`}
                                >
                                    <p className="text-3xl font-light leading-[0.95] tracking-[-0.02em] text-[#4a5565] lg:text-[45px]">
                                        {section.headingLight}
                                    </p>

                                    <h2 className="text-3xl font-medium leading-tight text-transparent bg-clip-text bg-[linear-gradient(130deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] lg:text-[45px]">

                                        {section.headingBold}
                                    </h2>

                                    <p className="mt-5 text-base leading-[1.6] text-[#5a6472] lg:text-lg">
                                        {section.description}
                                    </p>

                                    <Accordion accordionData={section.accordionData} />
                                </div>

                                <div
                                    className={`relative flex min-h-[420px] items-center justify-center lg:min-h-[520px] ${isEven ? "lg:order-2" : "lg:order-1"
                                        }`}
                                >
                                    <div className="relative flex w-full items-center justify-center overflow-visible bg-transparent">
                                        {sectionIndex === 0 ? (
                                            <AnimatedWhyChooseFigure />
                                        ) : (
                                            <Image
                                                src={section.image}
                                                alt="Section visual"
                                                width={520}
                                                height={520}
                                                className="relative z-10 h-auto w-full max-w-[420px] object-contain"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}