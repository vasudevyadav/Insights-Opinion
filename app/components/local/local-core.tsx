"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HexCluster = () => (
    <svg
        width="305"
        height="360"
        viewBox="0 0 305 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none"
    >
        {/* Row 0 */}
        <polygon points="0,0 38.1,22 38.1,66 0,88 -38.1,66 -38.1,22" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="76.2,0 114.3,22 114.3,66 76.2,88 38.1,66 38.1,22" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="152.4,0 190.5,22 190.5,66 152.4,88 114.3,66 114.3,22" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="228.6,0 266.7,22 266.7,66 228.6,88 190.5,66 190.5,22" stroke="#7fd3e8" strokeWidth="1.2" />
        {/* Row 1 */}
        <polygon points="38.1,66 76.2,88 76.2,132 38.1,154 0,132 0,88" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="114.3,66 152.4,88 152.4,132 114.3,154 76.2,132 76.2,88" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="190.5,66 228.6,88 228.6,132 190.5,154 152.4,132 152.4,88" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="266.7,66 304.8,88 304.8,132 266.7,154 228.6,132 228.6,88" stroke="#7fd3e8" strokeWidth="1.2" />
        {/* Row 2 */}
        <polygon points="0,132 38.1,154 38.1,198 0,220 -38.1,198 -38.1,154" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="76.2,132 114.3,154 114.3,198 76.2,220 38.1,198 38.1,154" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="152.4,132 190.5,154 190.5,198 152.4,220 114.3,198 114.3,154" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="228.6,132 266.7,154 266.7,198 228.6,220 190.5,198 190.5,154" stroke="#7fd3e8" strokeWidth="1.2" />
        {/* Row 3 */}
        <polygon points="38.1,198 76.2,220 76.2,264 38.1,286 0,264 0,220" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="114.3,198 152.4,220 152.4,264 114.3,286 76.2,264 76.2,220" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="190.5,198 228.6,220 228.6,264 190.5,286 152.4,264 152.4,220" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="266.7,198 304.8,220 304.8,264 266.7,286 228.6,264 228.6,220" stroke="#7fd3e8" strokeWidth="1.2" />
        {/* Row 4 */}
        <polygon points="0,264 38.1,286 38.1,330 0,352 -38.1,330 -38.1,286" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="76.2,264 114.3,286 114.3,330 76.2,352 38.1,330 38.1,286" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="152.4,264 190.5,286 190.5,330 152.4,352 114.3,330 114.3,286" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="228.6,264 266.7,286 266.7,330 228.6,352 190.5,330 190.5,286" stroke="#7fd3e8" strokeWidth="1.2" />
    </svg>
);

export default function LocalCore() {
    const tabs = [
        {
            id: "quantitative",
            label: "Quantitative Research",
            heroTitle: "Enhance Your Growth\nwith Quantitative Research",
            heroImage: "/_Qualitative-Research.jpg",
            description:
                "As the trusted best market research company, we provide quantitative research services including CATI, CAPI, CLT, and Global Panel studies to deliver reliable, data-backed insights at scale.",
            cardsTitle: "Choose the Right Quantitative Research that Suits Your Business",
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
                    title: "CLT (Central Location Testing)",
                    image: "/CLT-(Central-Location-Testing).jpg",
                },
                {
                    title: "Global Panel",
                    image: "/core-slide-1.png",
                },
            ],
        },
        {
            id: "qualitative",
            label: "Qualitative Research",
            heroTitle: "Understand Your Customers\nwith Qualitative Research",
            heroImage: "/managing-Research.jpg",
            description:
                "As the trusted best market research company, we provide qualitative research services including Focus Group Discussions (FGDs), In-Depth Interviews (IDIs), In-Home Usage Tests (IHUTs), and Mystery Shopping to uncover deep consumer insights.",
            cardsTitle: "Choose the Right Qualitative Research that Suits Your Business",
            services: [
                {
                    title: "Focus Group Discussions",
                    image: "/core-slide.png",
                },
                {
                    title: "In-Depth Interviews",
                    image: "/In-Depth-Interviews.jpg",
                },
                {
                    title: "In-Home Usage Testings",
                    image: "/In-Home-Usage-Testings.jpg",
                },
                {
                    title: "Mystery Shopping",
                    image: "/Mystery-Shopping.jpg",
                },
            ],
        },
        {
            id: "support",
            label: "Support Services",
            heroTitle: "Power Your Research\nwith Support Services",
            heroImage: "/_Support-Services.jpg",
            description:
                "Support research delivery with the technical setup, language adaptation, and reporting inputs needed to run studies smoothly across every market and methodology.",
            cardsTitle: "Choose the Right Support Service that Suits Your Business",
            services: [
                {
                    title: "Survey Programming",
                    image: "/Survey-Programming.jpg",
                },
                {
                    title: "Translation",
                    image: "/Translation.jpg",
                },
                {
                    title: "Data Insights",
                    image: "/Data-Insights.jpg",
                },
            ],
        },
    ];

    const complianceBadges = [
        { label: "ISO 27001 and ISO 20252 certified practices", position: "top-[10%] left-[8%]" },
        { label: "GDPR and CCPA-aligned data handling", position: "top-[10%] right-[4%]" },
        { label: "Review checkpoints across collection and reporting", position: "top-[52%] right-[2%]" },
        { label: "Validation and quality controls for respondent data", position: "bottom-[8%] left-[10%]" },
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
        if (cardIndex > 0) setCardIndex((prev) => prev - 1);
    };

    const handleNextCard = () => {
        if (cardIndex < activeData.services.length - cardsPerView)
            setCardIndex((prev) => prev + 1);
    };

    return (
        <section className="relative overflow-hidden bg-white">
            {/* Hexagon decorations */}
            <div className="pointer-events-none absolute left-0 top-0 hidden opacity-40 lg:block">
                <HexCluster />
            </div>
            <div className="pointer-events-none absolute right-0 top-0 hidden opacity-40 lg:block" style={{ transform: "scaleX(-1)" }}>
                <HexCluster />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-16 lg:py-16">

                {/* Header: title + tabs */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex shrink-0 items-center gap-2 lg:block">
                        <p className="text-2xl font-normal leading-none text-black lg:text-[42px]">
                            Core
                        </p>
                        <h2 className="bg-[linear-gradient(90deg,#17aea0_0%,#17aea0_50%,#36a4c2_100%)] bg-clip-text text-2xl font-semibold leading-tight text-transparent lg:text-[42px]">
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

                {/* Tab content */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
                    {/* Hero image */}
                    <div key={`hero-${activeTab}`}>
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

                    {/* Right panel: description + cards */}
                    <div className="flex h-full flex-col justify-between bg-transparent px-0 py-5 md:px-7 md:py-6">
                        <div>
                            <p
                                key={`desc-${activeTab}`}
                                className="max-w-[460px] text-[13.5px] leading-7 text-gray-700 md:text-[15px]"
                            >
                                {activeData.description}
                            </p>

                            <h3
                                key={`title-${activeTab}`}
                                className="my-2 max-w-[430px] text-lg font-bold leading-[1.3] text-[#2e3540] lg:my-5 lg:text-[22px]"
                            >
                                {activeData.cardsTitle}
                            </h3>
                        </div>

                        <div className="mt-4">
                            <div
                                className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
                                    }`}
                            >
                                {visibleCards.map((service, idx) => (
                                    <div
                                        key={`${activeTab}-${service.title}-${cardIndex}-${idx}`}
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

                            <div className="mt-6 flex items-center justify-center gap-1 lg:justify-start">
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

                <div className="mt-14 grid grid-cols-1 lg:lg:grid-cols-[1.3fr_2fr] items-center gap-10 lg:grid-cols-2">
                    <div className="max-w-[480px]">
                        <h3 className="mb-4 text-2xl font-semibold leading-tight lg:text-[30px]">
                            <span className="bg-[linear-gradient(90deg,#17aea0_0%,#36a4c2_100%)] bg-clip-text text-transparent">
                                Data Quality, Compliance,
                            </span>
                            <br />
                            <span className="text-[#2e3540]">and Security</span>
                        </h3>
                        <p className="text-[14px] leading-7 text-gray-600 md:text-[15px]">
                            Our processes at a market research company in Chicago are built to
                            protect research integrity and support client trust. We follow
                            structured standards across collection, validation, and reporting.
                        </p>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="relative h-[500px] w-full max-w-[540px]">
                            <Image
                                src="/local/local-core.png"
                                alt="Data compliance"
                                fill
                                className="object-cover object-top rounded-2xl"
                                unoptimized
                            />
                            {complianceBadges.map((badge, i) => (
                                <div
                                    key={i}
                                    className={`absolute ${badge.position} flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-sm max-w-[200px]`}
                                >
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#14b3a1] to-[#5ba8fb]">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="text-[10px] font-medium leading-tight text-[#1e2a4e]">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
