"use client";

import React, { useEffect } from "react";
import Image from "next/image";
// @ts-ignore
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function EventHome() {
    const events = [
        { title: "Event 1", image: "/highlight1.webp", colored: true },
        { title: "Event 2", image: "/highlight-2.webp", colored: false },
        { title: "Event 3", image: "/highlight3.webp", colored: false },
        { title: "Event 1", image: "/highlight1.webp", colored: true },
        { title: "Event 2", image: "/highlight-2.webp", colored: false },
        { title: "Event 3", image: "/highlight3.webp", colored: false },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            AOS.refreshHard();
        }, 250);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="overflow-hidden bg-[#151b4a] py-8 lg:py-12">
            <div className="mx-auto w-full px-4 sm:px-6 lg:pl-8 lg:pr-0">

                {/* Heading (unchanged) */}
                <div className="mx-auto max-w-5xl">
                    <div className="mb-5 flex flex-col gap-2 lg:mb-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                        <h2 className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-3xl font-medium leading-tight text-transparent lg:text-[45px]">
                            Events & Highlights
                        </h2>

                        <p className="max-w-[450px] text-xs leading-6 text-white/90 lg:text-base">
                            Explore how Insights Opinion stays connected through industry events and highlights.
                        </p>
                    </div>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    loop
                    speed={900}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 1.15 },
                        640: { slidesPerView: 2.2 },
                        768: { slidesPerView: 3.1 },
                        1024: { slidesPerView: 4.5 },
                    }}
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative h-[400px] w-full overflow-hidden rounded-[10px] bg-white p-2">

                                {/* ❌ TITLE REMOVED */}

                                <div className="absolute inset-2 overflow-hidden rounded-[8px] transition-all duration-500 group-hover:inset-0">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className={`
                                            object-cover object-top transition-all duration-500
                                            
                                            /* 📱 Mobile → always colored */
                                            grayscale-0
                                            
                                            /* 🖥️ Desktop → grayscale */
                                            md:grayscale
                                            md:group-hover:grayscale-0
                                            md:group-hover:scale-105
                                        `}
                                        onLoadingComplete={() => {
                                            setTimeout(() => {
                                                AOS.refresh();
                                            }, 100);
                                        }}
                                    />
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}