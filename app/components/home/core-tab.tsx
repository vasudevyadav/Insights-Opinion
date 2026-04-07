"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CoreTab() {
    const tabs = [
        {
            id: "quantitative",
            label: "Quantitative Research",
            heroTitle: "Quantitative Research",
            heroImage: "/core-1.png",
            description:
                "Measure demand, track customer behavior, and evaluate opportunities through structured methods built for reliable, data-backed decisions.",
            cardsTitle: "RESEARCH METHODS",
            services: [
                {
                    title: "Global Panel",
                    image: "/core-slide-1.png",
                },
                {
                    title: "CATI (Computer-Assisted Telephone Interviewing)",
                    image: "/core-slide.png",
                },
                {
                    title: "CAPI (Computer-Assisted Personal Interviewing)",
                    image: "/core-slide-1.png",
                },
                {
                    title: "CLT (Central Location Testing)",
                    image: "/core-slide-1.png",
                },
            ],
        },
        {
            id: "qualitative",
            label: "Qualitative Research",
            heroTitle: "Qualitative Research",
            heroImage: "/core-1.png",
            description:
                "Understand customer motivations, perceptions, and unmet needs through deeper, discussion-led research that reveals the reasons behind decisions and behavior.",
            cardsTitle: "RESEARCH METHODS",
            services: [
                {
                    title: "Focus Group Discussions",
                    image: "/core-slide.png",
                },
                {
                    title: "In-Depth Interviews",
                    image: "/core-slide-1.png",
                },
                {
                    title: "In-Home Usage Testings",
                    image: "/core-slide-1.png",
                },
                {
                    title: "Mystery Shopping",
                    image: "/core-slide-1.png",
                },
            ],
        },
        {
            id: "support",
            label: "Support Services",
            heroTitle: "Support Services",
            heroImage: "/core-1.png",
            description:
                "Keep studies accurate, efficient, and easier to manage with the technical and operational support needed from setup through final delivery.",
            cardsTitle: "RESEARCH METHODS",
            services: [
                {
                    title: "Survey Programming",
                    image: "/core-slide.png",
                },
                {
                    title: "Translation",
                    image: "/core-slide-1.png",
                },
                {
                    title: "Data Insights",
                    image: "/core-slide-1.png",
                },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [cardIndex, setCardIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const activeData = tabs[activeTab];

    useEffect(() => {
        setCardIndex(0);
    }, [activeTab]);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const cardsPerView = isMobile ? 1 : 2;
    const visibleCards = activeData.services.slice(cardIndex, cardIndex + cardsPerView);

    const handlePrevCard = () => {
        if (cardIndex > 0) {
            setCardIndex((prev) => prev - 1);
        }
    };

    const handleNextCard = () => {
        if (cardIndex < activeData.services.length - cardsPerView) {
            setCardIndex((prev) => prev + 1);
        }
    };

    return (
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex shrink-0 items-center gap-2 lg:block">
                    <p className="text-3xl font-normal leading-none text-black lg:text-[45px]">
                        Core
                    </p>
                    <h2 className="bg-[linear-gradient(90deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] bg-clip-text text-3xl font-semibold leading-tight text-transparent lg:text-[45px]">
                        Solutions
                    </h2>
                </div>

                <div className="w-full max-w-[750px]">
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex min-w-max gap-2 sm:grid sm:min-w-0 sm:grid-cols-3 sm:gap-0">
                            {tabs.map((tab, index) => {
                                const isActive = activeTab === index;

                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(index)}
                                        className={`h-16 whitespace-nowrap px-4 text-center text-sm font-semibold transition-all md:text-base ${isActive
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
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
                <div>
                    <div className="relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[440px] lg:w-11/12">
                        <Image
                            src={activeData.heroImage}
                            alt={activeData.label}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,25,52,0.12)_0%,rgba(10,20,48,0.72)_100%)]" />
                        <div className="absolute bottom-7 left-5 max-w-[78%]">
                            <h3 className="whitespace-pre-line text-[24px] font-medium leading-[1.25] text-white md:text-[34px]">
                                {activeData.heroTitle}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="flex h-full flex-col justify-between bg-transparent px-0 py-5 md:px-7 md:py-6">
                    <div>
                        <p className="max-w-[460px] text-[13.5px] leading-7 text-gray-700 md:text-[15px]">
                            {activeData.description}
                        </p>

                        <h3 className="my-5 max-w-[430px] line-clamp-2 text-[26px] font-semibold leading-[1.25] text-[#2e3540] lg:text-[27px]">
                            {activeData.cardsTitle}
                        </h3>
                    </div>

                    <div className="mt-4">
                        <div className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
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
                                        <p className="line-clamp-3 text-sm font-semibold leading-5 text-[#2f3743]">
                                            {service.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex items-center justify-center lg:justify-start">
                            <button
                                onClick={handlePrevCard}
                                className="flex h-10 w-10 items-center justify-center rounded-full text-[#111827] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                                aria-label="Previous card"
                                disabled={cardIndex === 0}
                            >
                                <ArrowLeft className="h-7 w-7 stroke-[2.4]" />
                            </button>

                            <button
                                onClick={handleNextCard}
                                className="flex h-10 w-10 items-center justify-center rounded-full text-[#111827] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                                aria-label="Next card"
                                disabled={cardIndex >= activeData.services.length - cardsPerView}
                            >
                                <ArrowRight className="h-7 w-7 stroke-[2.4]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}