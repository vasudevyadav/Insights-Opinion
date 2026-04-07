"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const featureCards = [
    {
        title: "Global Reach ",
        icon: "/cost-1.png",
        alt: "Quick TAT icon",
    },
    {
        title: "Data Quality ",
        icon: "/speed-1.png",
        alt: "Accuracy Speed and Security icon",
    },
    {
        title: " Fast Turnaround ",
        icon: "/globle-marketing-1.png",
        alt: "Domain Expertise icon",
    },
    {
        title: "Industry Expertise ",
        icon: "/profound-1.png",
        alt: "Profound Research Capabilities icon",
    },
    {
        title: " Panel Access ",
        icon: "/intergrity-1.png",
        alt: "Integrity and Transparency icon",
    },
    {
        title: "Multilingual Research",
        icon: "/cost-1.png",
        alt: "Cost Effectiveness icon",
    },
    {
        title: "Project Management  ",
        icon: "/globle-marketing-1.png",
        alt: "Domain Expertise icon",
    },
    {
        title: "Data Security  ",
        icon: "/profound-1.png",
        alt: "Profound Research Capabilities icon",
    },
];

export default function HomeIndustry() {
    return (
        <div className="bg-[#edf6ff] lg:-mt-32 -mt-32">

            <section className="py-10 lg:py-14 bg-[#edf6ff] indstrybg relative ">
                <div className="mx-auto max-w-7xl px-4 lg:px-4">
                    <div className="relative overflow-hidden rounded-[20px] lg:rounded-[28px]">
                        <div className="relative z-10 grid min-h-[420px] grid-cols-1 lg:grid-cols-2">
                            <div className="relative flex items-end justify-center px-4 pt-10 lg:px-6">

                            </div>

                            <div className="flex items-center px-5 pb-12 py-8 sm:px-8 lg:px-10 lg:pb-10 lg:py-16">
                                <div className="max-w-[550px]">
                                    <p className="mb-2 text-[28px] font-light leading-none text-white/80 sm:text-[40px]">
                                        About
                                    </p>
                                    <h2 className="mb-5 text-2xl font-medium leading-tight text-transparent bg-clip-text bg-[linear-gradient(110deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] lg:text-[40px]">
                                        Insights Opinion
                                    </h2>
                                    <p className="lg:max-w-[550px] max-w-[400px] lg:font-normal font-semibold  text-base leading-6 text-white/80 sm:text-[15px]">
                                        A global market research company that helps businesses collect reliable data, understand market behavior, and make informed decisions. We provide market research services across industries, combining data collection, fieldwork execution, and research support to help clients run studies more efficiently and act on stronger evidence.
                                    </p>
                                    <button className="mt-6 inline-flex items-center gap-2 text-lg font-normal text-white/90 transition hover:text-[#28c7d8]">
                                        Learn More
                                        <span className="text-xl" aria-hidden="true">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="absolute inset-x-0 lg:bottom-10 bottom-6 z-30 px-2 sm:px-4 lg:px-6">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={12}
                        loop={true}
                        speed={700}
                        autoplay={{
                            delay: 2200,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4.2 },
                            1280: { slidesPerView: 5.2 },
                        }}
                        className="industry-feature-slider"
                    >
                        {featureCards.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative flex min-h-[85px] items-center rounded-2xl bg-white pl-14 pr-4 py-4 shadow-[0_10px_25px_rgba(15,23,42,0.12)]">
                                    <div className="absolute left-0 top-0 h-14 w-14">
                                        <Image
                                            src={item.icon}
                                            alt={item.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <p className="lg:max-w-[180px]  pl-1 text-sm font-semibold text-[#2f3850] lg:text-base">
                                        {item.title}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
}
