"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
// @ts-ignore - no type declarations for 'aos'
import AOS from 'aos';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const featureCards = [
    {
        title: "Global Reach",
        icon: "/cost-1.png",
        alt: "Quick TAT icon",
    },
    {
        title: "Data Quality",
        icon: "/speed-1.png",
        alt: "Accuracy Speed and Security icon",
    },
    {
        title: "Fast Turnaround",
        icon: "/globle-marketing-1.png",
        alt: "Domain Expertise icon",
    },
    {
        title: "Industry Expertise",
        icon: "/profound-1.png",
        alt: "Profound Research Capabilities icon",
    },
    {
        title: "Panel Access",
        icon: "/intergrity-1.png",
        alt: "Integrity and Transparency icon",
    },
    {
        title: "Multilingual Research",
        icon: "/cost-1.png",
        alt: "Cost Effectiveness icon",
    },
    {
        title: "Project Management",
        icon: "/globle-marketing-1.png",
        alt: "Domain Expertise icon",
    },
    {
        title: "Data Security",
        icon: "/profound-1.png",
        alt: "Profound Research Capabilities icon",
    },
];

export default function HomeIndustry() {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
            mirror: false,
            offset: 80,
            delay: 0,
            anchorPlacement: "top-bottom",
        });

        const timer = setTimeout(() => {
            AOS.refreshHard();
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            AOS.refreshHard();
        }, 250);

        return () => clearTimeout(timer);
    }, [pathname]);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                AOS.refreshHard();
            }, 200);
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <div className="bg-[#edf6ff] lg:-mt-32 -mt-32">
            <section className="py-10 lg:py-14 bg-[#edf6ff] relative overflow-hidden min-h-[550px] lg:h-[580px]">
                <Image
                    src="/about-bg.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center hidden md:block"
                />
                <Image
                    src="/mob-about.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center md:hidden"
                />
                <div className="mx-auto max-w-7xl px-4 lg:px-4">
                    <div className="relative overflow-hidden rounded-[20px] lg:rounded-[28px]">
                        <div className="relative z-10 grid min-h-[420px] grid-cols-1 lg:grid-cols-2">

                            <div
                                className="relative flex items-end justify-center px-4 pt-10 lg:px-6 min-h-[0px] lg:min-h-full"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >

                            </div>

                            <div className="flex items-center px-5 pb-16 py-8 lg:px-10 lg:pb-24 lg:py-8">
                                <div className="max-w-[550px] lg:mt-6">
                                    <p
                                        className="mb-2 text-[24px] font-light leading-none text-white/80 sm:text-[40px]"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        About
                                    </p>

                                    <h2
                                        className="mb-5 text-2xl font-medium leading-tight text-transparent bg-clip-text bg-[linear-gradient(110deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] lg:text-[40px]"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        Insights Opinion
                                    </h2>

                                    <p
                                        className="lg:max-w-[550px] max-w-[400px] font-normal text-sm leading-6 text-white/80 sm:text-[15px] line-clamp-5"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        A global market research company that helps businesses collect reliable data, understand market behavior, and make informed decisions. We provide market research services across industries, combining data collection, fieldwork execution, and research support to help clients run studies more efficiently and act on stronger evidence.

                                    </p>

                                    <button
                                        className="mt-2 inline-flex items-center gap-2 lg:text-lg text-base font-normal text-white/90 transition hover:text-[#28c7d8]"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        Learn More
                                        <span className="text-xl" aria-hidden="true">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute inset-x-0 lg:bottom-10 bottom-10 z-30 px-2 sm:px-4 lg:px-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={12}
                        loop={true}
                        speed={700}
                        autoplay={{
                            delay: 2200,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        onInit={() => {
                            setTimeout(() => {
                                AOS.refreshHard();
                            }, 200);
                        }}
                        onSlideChange={() => {
                            setTimeout(() => {
                                AOS.refresh();
                            }, 100);
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
                                <div
                                    className="relative flex min-h-[69px] lg:min-h-[85px] items-center rounded-2xl bg-white pl-14 pr-4 py-4 shadow-[0_10px_25px_rgba(15,23,42,0.12)] transition-transform"
                                    data-aos="zoom-in-up"
                                    data-aos-delay={index * 80}
                                >
                                    <div className="absolute left-0 top-0 lg:h-14 lg:w-14 h-12 w-12">
                                        <Image
                                            src={item.icon}
                                            alt={item.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <p className="lg:max-w-[180px] pl-1 text-sm font-semibold text-[#2f3850] lg:text-base">
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