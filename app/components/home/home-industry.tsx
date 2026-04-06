"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const featureCards = [
    {
        title: "Quick TAT",
        icon: "/cost-1.png",
        alt: "Quick TAT icon",
    },
    {
        title: "Accuracy, Speed, and Security",
        icon: "/speed-1.png",
        alt: "Accuracy Speed and Security icon",
    },
    {
        title: "Domain Expertise with Global Reach",
        icon: "/globle-marketing-1.png",
        alt: "Domain Expertise icon",
    },
    {
        title: "Profound Research Capabilities",
        icon: "/profound-1.png",
        alt: "Profound Research Capabilities icon",
    },
    {
        title: "Integrity & Transparency",
        icon: "/intergrity-1.png",
        alt: "Integrity and Transparency icon",
    },
    {
        title: "Cost Effectiveness",
        icon: "/cost-1.png",
        alt: "Cost Effectiveness icon",
    },
];

export default function HomeIndustry() {
    return (
        <div className="bg-[#edf6ff] lg:-mt-32">

            <section className="py-10 lg:py-14 bg-[#edf6ff] indstrybg relative ">
                <div className="mx-auto max-w-7xl px-4 lg:px-4">
                    <div className="relative overflow-hidden rounded-[20px] lg:rounded-[28px]">
                        <div className="relative z-10 grid min-h-[420px] grid-cols-1 lg:grid-cols-2">
                            <div className="relative flex items-end justify-center px-4 pt-10 lg:px-6">

                            </div>

                            <div className="flex items-center px-5 pb-12 py-8 sm:px-8 lg:px-10 lg:pb-10 lg:py-16">
                                <div className="max-w-[550px]">
                                    <p className="mb-2 text-[28px] font-light leading-none text-white/80 sm:text-[34px]">
                                        About
                                    </p>
                                    <h2 className="mb-5 text-2xl font-medium leading-tight text-transparent bg-clip-text bg-[linear-gradient(110deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] lg:text-[38px]">
                                        Insights Opinion
                                    </h2>
                                    <p className="max-w-[550px] text-base leading-6 text-white/80 sm:text-[15px]">
                                        Insights Opinion is one of the leading global market research
                                        companies, specializes in research outsourcing and data
                                        processing services. Our highly skilled, multilingual team
                                        operates in 100 countries, offering services in over 60
                                        languages.
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
                <div className="absolute inset-x-0 bottom-20 z-50 px-2 sm:px-4 lg:px-6">
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
                            0: { slidesPerView: 1.2 },
                            480: { slidesPerView: 2.1 },
                            768: { slidesPerView: 3.1 },
                            1024: { slidesPerView: 4.2 },
                            1280: { slidesPerView: 5.2 },
                        }}
                        className="industry-feature-slider"
                    >
                        {featureCards.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative flex min-h-[85px] items-center rounded-2xl bg-white px-14 py-4 shadow-[0_10px_25px_rgba(15,23,42,0.12)]">
                                    <div className="absolute left-0 top-0 h-14 w-14">
                                        <Image
                                            src={item.icon}
                                            alt={item.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <p className="max-w-[150px] pl-1 text-[11px] font-semibold text-[#2f3850] lg:text-sm">
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
