"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

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

function Accordion({ accordionData }: { accordionData: { title: string; content: string }[] }) {
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
                                    className={`text-[15px] font-semibold ${isOpen ? "text-[#3fd1e6]" : "text-[#384250]"
                                        }`}
                                >
                                    {item.title}
                                </h3>

                                {isOpen && (
                                    <p className="mt-2 max-w-[300px] text-[12.5px] leading-[1.55] text-[#d6dbef]">
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
                                    <ChevronDown
                                        size={18}
                                        className="text-[#4b5563]"
                                    />
                                )}
                            </span>
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default function WhyChoose() {
    return (
        <section className="relative">
            <div className="absolute inset-0 z-0">
                <div className="h-full w-full" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 lg:px-0 lg:py-16">
                <div className="space-y-20">
                    {sectionsData.map((section, sectionIndex) => {
                        const isEven = sectionIndex % 2 === 0;

                        return (
                            <div
                                key={sectionIndex}
                                className="grid items-center gap-10 lg:grid-cols-[1.02fr_1fr]"
                            >

                                <div className={`${isEven ? "lg:order-1" : "lg:order-2"} max-w-[500px]`}>
                                    <p className="text-2xl leading-[0.95] font-light tracking-[-0.02em] text-[#4a5565] lg:text-5xl">
                                        {section.headingLight}
                                    </p>

                                    <h2 className="mt-1 text-2xl leading-[0.95] font-medium tracking-[-0.03em] text-[#59c8dd] lg:text-5xl">
                                        {section.headingBold}
                                    </h2>

                                    <p className="mt-5 text-xs leading-[1.6] text-[#5a6472] lg:text-base">
                                        {section.description}
                                    </p>

                                    <Accordion accordionData={section.accordionData} />
                                </div>

                                {/* Image Block */}
                                <div
                                    className={`relative flex min-h-[420px] items-center justify-center lg:min-h-[520px] ${isEven ? "lg:order-2" : "lg:order-1"
                                        }`}
                                >
                                    <div className="relative flex w-full items-center justify-center overflow-hidden bg-transparent">
                                        <img
                                            src={section.image}
                                            alt="Person"
                                            className="relative z-10 object-contain"
                                        />
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