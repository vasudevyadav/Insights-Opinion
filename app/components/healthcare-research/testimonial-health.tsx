"use client";

import React, { useEffect } from "react";
import Image from "next/image";
// @ts-ignore
import AOS from "aos";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialHealth() {
    const testimonials = [
        {
            quote:
                "Their detailed surveys gave us clearer understanding of our guest preferences, leading to more personalised service and higher customer satisfaction. We saw a clear shift in guest feedback after implementation.",
            link: "Read Full Customer Story",
            company: "TAJMG",
            author: "Director, Clifton",
            logo: "/Testimonial-Icon.png",
        },
        {
            quote:
                "Their detailed surveys gave us clearer understanding of our guest preferences, leading to more personalised service and higher customer satisfaction. We saw a clear shift in guest feedback after implementation.",
            link: "Read Full Customer Story",
            company: "TAJMG",
            author: "Director, Clifton",
            logo: "/Testimonial-Icon.png",
        },
        {
            quote:
                "Their detailed surveys gave us clearer understanding of our guest preferences, leading to more personalised service and higher customer satisfaction. We saw a clear shift in guest feedback after implementation.",
            link: "Read Full Customer Story",
            company: "TAJMG",
            author: "Director, Clifton",
            logo: "/Testimonial-Icon.png",
        },
        {
            quote:
                "Their detailed surveys gave us clearer understanding of our guest preferences, leading to more personalised service and higher customer satisfaction. We saw a clear shift in guest feedback after implementation.",
            link: "Read Full Customer Story",
            company: "TAJMG",
            author: "Director, Clifton",
            logo: "/Testimonial-Icon.png",
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            AOS.refreshHard();
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#eef5fb] py-4">

            <div className="relative z-10 mx-auto">
                <div className="relative mb-8 pl-6 pr-6 lg:mb-16 lg:pl-32 lg:pr-0">
                    <div
                        className="relative mb-6 flex items-end justify-between gap-4"
                        data-aos="fade-up"
                        data-aos-duration="900"
                    >
                        <div className="max-w-[600px] mt-2">
                            <h2 className="mb-2 text-2xl font-light leading-tight text-[#2f3643] sm:text-4xl">
                                What Healthcare Clients Say
                            </h2>

                            <h3
                                className="mb-2 text-[28px] font-medium leading-tight text-transparent sm:text-[41px]"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #20b7a6 0%, #5da6f6 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                About Us
                            </h3>

                            <p className="my-2 text-xs leading-6 text-black sm:text-base">
                                Feedback from clients who partner with Insights Opinion for practical insights and dependable market research services.
                            </p>
                        </div>

                        <div
                            className="hidden items-center gap-3 md:flex lg:mr-20 mb-4"
                            data-aos="fade-left"
                            data-aos-delay="180"
                            data-aos-duration="900"
                        >
                            <button className="testimonial-prev flex h-10 w-10 items-center justify-center rounded-full border border-[#1b224f] text-[#1b224f] transition hover:bg-[#1b224f] hover:text-white">
                                <ArrowLeft size={18} />
                            </button>

                            <button className="testimonial-next flex h-10 w-10 items-center justify-center rounded-full border border-[#1b224f] text-[#1b224f] transition hover:bg-[#1b224f] hover:text-white">
                                <ArrowRight size={18} />
                            </button>
                        </div>

                    </div>

                    <div data-aos="fade-up" data-aos-delay="120" data-aos-duration="950">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: ".testimonial-prev",
                                nextEl: ".testimonial-next",
                            }}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                            }}
                            speed={900}
                            loop={true}
                            spaceBetween={16}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                },
                            }}
                            className="testimonial-swiper"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="group rounded-none border border-[#c7d2e2] bg-white p-4 transition-all duration-500 hover:border-[#1a1f52] hover:bg-[#1a1f52]"
                                        data-aos="zoom-in-up"
                                        data-aos-delay={index * 80}
                                        data-aos-duration="850"
                                    >
                                        <p className="min-h-[98px] line-clamp-4 text-xs leading-5 text-[#344054] transition-colors duration-500 group-hover:text-white/85 lg:text-sm">
                                            "{item.quote}"
                                        </p>

                                        <div className="mt-3 flex items-center justify-between gap-3">
                                            <a
                                                href="#"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1f52] transition duration-500 hover:text-[#7ddbd1] group-hover:text-white"
                                            >
                                                {item.link}
                                                <ArrowRight size={18} />
                                            </a>
                                        </div>

                                        <div className="mt-5 flex items-end justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
                                                    <Image
                                                        src={item.logo}
                                                        alt={item.company}
                                                        width={56}
                                                        height={56}
                                                        className="w-14 object-contain"
                                                    />
                                                </div>

                                                <div>
                                                    <p className="mb-1 text-xs font-semibold text-[#1a1f52] transition-colors duration-500 group-hover:text-white lg:text-sm">
                                                        {item.company}
                                                    </p>
                                                    <p className="text-xs text-[#667085] transition-colors duration-500 group-hover:text-white/70">
                                                        {item.author}
                                                    </p>
                                                </div>
                                            </div>

                                            <Image
                                                src="/inshite-sing.png"
                                                alt="Insights Opinion"
                                                width={112}
                                                height={40}
                                                className="w-28 object-contain transition-all duration-500 group-hover:invert"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}