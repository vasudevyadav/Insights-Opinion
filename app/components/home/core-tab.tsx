"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CoreTab() {
    const tabs = [
        {
            id: "quantitative",
            label: "Quantitative Research",
            heroTitle: "Enhance Your Growth\nwith Quantitative Research",
            heroImage: "/core-1.png",
            description:
                "As the trusted best market research company, we provide quantitative research services to help brands measure demand, track market shifts, understand buyer behaviour, and make data-backed business decisions with clarity.",
            cardsTitle: "Choose The Right Quantitative Research That Suits Your Business",
            services: [
                {
                    title: "CATI (Computer-Assisted Telephone Interviewing)",
                    image: "/core-slide.png",
                },
                {
                    title: "CAPI (Computer-Assisted Personal Interviewing)",
                    image: "/core-slide-1.png",
                },
                {
                    title: "CAWI (Computer-Assisted Web Interviewing)",
                    image: "/core-slide-1.png",
                },
                {
                    title: "CLT (Central Location Test)",
                    image: "/core-slide-1.png",
                },
            ],
        },
        {
            id: "qualitative",
            label: "Quantitative Research",
            heroTitle: "Enhance Your Growth\nwith Quantitative Research",
            heroImage: "/core-1.png",
            description:
                "As the trusted best market research company, we provide quantitative research services to help brands measure demand, track market shifts, understand buyer behaviour, and make data-backed business decisions with clarity.",
            cardsTitle: "Choose The Right Quantitative Research That Suits Your Business",
            services: [
                {
                    title: "CATI (Computer-Assisted Telephone Interviewing)",
                    image: "/core-slide.png",
                },
                {
                    title: "CAPI (Computer-Assisted Personal Interviewing)",
                    image: "/core-slide-1.png",
                },
                {
                    title: "CAWI (Computer-Assisted Web Interviewing)",
                    image: "/core-slide-1.png",
                },
                {
                    title: "CLT (Central Location Test)",
                    image: "/core-slide-1.png",
                },
            ],
        },

        {
            id: "support",
            label: "Quantitative Research",
            heroTitle: "Enhance Your Growth\nwith Quantitative Research",
            heroImage: "/core-1.png",
            description:
                "As the trusted best market research company, we provide quantitative research services to help brands measure demand, track market shifts, understand buyer behaviour, and make data-backed business decisions with clarity.",
            cardsTitle: "Choose The Right Quantitative Research That Suits Your Business",
            services: [
                {
                    title: "CATI (Computer-Assisted Telephone Interviewing)",
                    image: "/core-slide.png",
                },
                {
                    title: "CAPI (Computer-Assisted Personal Interviewing)",
                    image: "/core-slide-1.png",
                },
                {
                    title: "CAWI (Computer-Assisted Web Interviewing)",
                    image: "/core-slide-1.png",
                },
                {
                    title: "CLT (Central Location Test)",
                    image: "/core-slide-1.png",
                },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [cardIndex, setCardIndex] = useState(0);


    const activeData = tabs[activeTab];

    useEffect(() => {
        setCardIndex(0);
    }, [activeTab]);

    const visibleCards = activeData.services.slice(cardIndex, cardIndex + 2);

    const handlePrevCard = () => {
        if (cardIndex > 0) {
            setCardIndex((prev) => prev - 1);
        }
    };

    const handleNextCard = () => {
        if (cardIndex < activeData.services.length - 2) {
            setCardIndex((prev) => prev + 1);
        }
    };

    return (


        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 py-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="shrink-0">
                    <p className="text-xl font-normal leading-none text-[#5b6472] lg:text-4xl">
                        Core
                    </p>
                    <h2 className="mt-1 text-xl font-medium leading-none text-[#53c6dd] lg:text-4xl">
                        Solutions
                    </h2>
                </div>

                <div className="w-full max-w-[760px]">
                    <div className="grid grid-cols-3 gap-0">
                        {tabs.map((tab, index) => {
                            const isActive = activeTab === index;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`h-14 px-3 text-center text-[12px] font-semibold transition-all md:text-sm ${isActive
                                        ? "rounded-[8px] bg-gradient-to-r from-[#37c9c7] to-[#4a8fe8] text-white shadow-[0_8px_24px_rgba(74,143,232,0.22)]"
                                        : "bg-transparent text-[#2f3743]"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
                <div>
                    <div className="relative h-[440px] w-11/12 overflow-hidden">
                        <Image
                            src={activeData.heroImage}
                            alt={activeData.label}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,25,52,0.12)_0%,rgba(10,20,48,0.72)_100%)]" />
                        <div className="absolute bottom-7 left-5 max-w-[78%]">
                            <h3 className="whitespace-pre-line text-[26px] font-semibold leading-[1.25] text-white md:text-[34px]">
                                {activeData.heroTitle}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="flex h-full flex-col justify-between bg-transparent px-5 py-5 md:px-7 md:py-6">
                    <div>
                        <p className="max-w-[460px] text-[13.5px] leading-7 text-gray-700 md:text-[15px]">
                            {activeData.description}
                        </p>

                        <h3 className="my-5 max-w-[430px] text-[28px] font-semibold leading-[1.25] line-clamp-2 text-[#2e3540] md:text-2xl">
                            {activeData.cardsTitle}
                        </h3>
                    </div>

                    <div className="mt-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {visibleCards.map((service, idx) => (
                                <div
                                    key={`${service.title}-${idx}`}
                                    className="flex min-h-[100px] overflow-hidden rounded-[14px] bg-white shadow-[0_10px_30px_rgba(22,34,56,0.08)]"
                                >
                                    <div className="relative h-auto w-[42%] min-w-[100px]">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>

                                    <div className="flex flex-1 items-center px-4 py-3">
                                        <p className="text-[13px] font-semibold leading-5 text-[#2f3743]">
                                            {service.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex items-center gap-5">
                            <button
                                onClick={handlePrevCard}
                                className="flex h-10 w-10 items-center justify-center rounded-full text-[#111827] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                                aria-label="Previous card"
                                disabled={cardIndex === 0}
                            >
                                <ArrowLeft className="h-6 w-6 stroke-[2.4]" />
                            </button>

                            <button
                                onClick={handleNextCard}
                                className="flex h-10 w-10 items-center justify-center rounded-full text-[#111827] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                                aria-label="Next card"
                                disabled={cardIndex >= activeData.services.length - 2}
                            >
                                <ArrowRight className="h-6 w-6 stroke-[2.4]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}