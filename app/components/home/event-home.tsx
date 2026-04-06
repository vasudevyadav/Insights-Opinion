"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function EventHome() {
    const events = [
        {
            title: "Lorem ipsum Lorem ipsum Lorem ipsum...",
            image: "/core-slide-1.png",
            colored: true,
        },
        {
            title: "Lorem ipsum Lorem ipsum Lorem ipsum...",
            image: "/core-slide-1.png",
            colored: false,
        },
        {
            title: "Lorem ipsum Lorem ipsum Lorem ipsum...",
            image: "/core-slide-1.png",
            colored: false,
        },
        {
            title: "Lorem ipsum Lorem ipsum Lorem ipsum...",
            image: "/core-slide-1.png",
            colored: false,
        },
        {
            title: "Lorem ipsum Lorem ipsum Lorem ipsum...",
            image: "/core-slide-1.png",
            colored: false,
        },
        {
            title: "Lorem ipsum Lorem ipsum Lorem ipsum...",
            image: "/core-slide-1.png",
            colored: false,
        },
    ];

    return (
        <section className="overflow-hidden bg-[#151b4a] py-8 lg:py-12">
            <div className="mx-auto w-full pl-4 sm:pl-6 lg:pl-8">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-5 flex flex-col lg:gap-10 gap-2 pr-4 lg:mb-12 lg:flex-row lg:items-center lg:justify-between lg:pr-8">
                        <h2 className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-3xl font-medium leading-tight text-transparent lg:text-[45px]">
                            Events and highlights
                        </h2>

                        <p className="max-w-[450px] text-xs leading-6 text-white/90 lg:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since the 1500s.
                        </p>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    loop={true}
                    speed={900}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 12,
                        },
                        480: {
                            slidesPerView: 2.2,
                            spaceBetween: 12,
                        },
                        640: {
                            slidesPerView: 2.8,
                            spaceBetween: 14,
                        },
                        768: {
                            slidesPerView: 3.5,
                            spaceBetween: 14,
                        },
                        1024: {
                            slidesPerView: 4.5,
                            spaceBetween: 16,
                        },
                        1280: {
                            slidesPerView: 4.5,
                            spaceBetween: 18,
                        },
                    }}
                    className="event-swiper"
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative h-[400px] overflow-hidden rounded-[10px] bg-white p-2">
                                <div className="relative z-20 flex h-[35px] items-center transition-all duration-500 group-hover:opacity-0">
                                    <h3 className="line-clamp-2 text-[11px] font-semibold leading-4 text-[#2a2f4f] lg:text-[12px]">
                                        {event.title}
                                    </h3>
                                </div>

                                <div className="absolute bottom-2 left-2 right-2 top-[54px] z-10 overflow-hidden rounded-[8px] transition-all duration-500 group-hover:bottom-0 group-hover:left-0 group-hover:right-0 group-hover:top-0 group-hover:rounded-[10px]">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className={`object-cover transition-all duration-500 ${event.colored ? "" : "grayscale"
                                            } group-hover:scale-105 group-hover:grayscale-0`}
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