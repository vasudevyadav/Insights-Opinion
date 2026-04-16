"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "aos/dist/aos.css";

type FeatureCard = {
    title: string;
    icon: string;
    alt: string;
};

export default function HealthPanel() {
    const featureCards: FeatureCard[] = [
        {
            title: "Physicians",
            icon: "/market-research/globle-marketing-1.png",
            alt: "Physicians",
        },
        {
            title: "Specialists",
            icon: "/market-research/globle-marketing-1.png",
            alt: "Specialists",
        },
        {
            title: "Nurses",
            icon: "/market-research/globle-marketing-1.png",
            alt: "Nurses",
        },
        {
            title: "Pharmacists",
            icon: "/market-research/globle-marketing-1.png",
            alt: "Pharmacists",
        },
        {
            title: "Hospital administrators",
            icon: "/market-research/globle-marketing-1.png",
            alt: "Hospital administrators",
        },
        {
            title: "Patients with chronic conditions",
            icon: "/market-research/globle-marketing-1.png",
            alt: "Patients with chronic conditions",
        },
    ];

    return (
        <div className="bg-[#edf6ff]">
            <section className="relative overflow-hidden bg-[#edf6ff] py-14 pt-1 lg:pt-10 lg:py-10 health-bg">

                <div className="relative z-10 mx-auto px-2 lg:px-0">
                    <div className="relative rounded-[28px]">
                        <div className="relative min-h-[570px] w-full lg:min-h-[670px]">
                            <div className="relative z-20 flex min-h-[550px] items-center px-5 py-8 sm:px-8 lg:min-h-[570px] lg:px-14">
                                <div className="ml-auto lg:mr-14 -mt-20 max-w-[360px] text-white lg:max-w-[600px]">
                                    <p className="text-xl lg:text-2xl font-medium leading-none text-[#d8efff]">
                                        Global
                                    </p>

                                    <h3 className="mt-2 text-xl font-semibold leading-[1.08] sm:text-[45px]">
                                        <span className="block text-[#58dff0]">Healthcare Panels</span>
                                        <span className="block text-2xl font-medium text-[#eef8ff]">
                                            for Research
                                        </span>
                                    </h3>

                                    <p className="mt-4 inline-flex rounded-md bg-gradient-to-b from-[#2f8ed8] via-[#3fb6ff] to-[#3fb6ff] px-6 py-2 text-base font-medium text-white shadow-md backdrop-blur-sm">
                                        Explain your access to
                                    </p>

                                    <div className="mt-7 flex w-10/12 items-center justify-between gap-6">
                                        <div>
                                            <p className="text-4xl font-normal leading-none text-[#6fb0f3]">
                                                8M+
                                            </p>
                                            <p className="mt-3 text-base leading-4 text-[#dcecff]">
                                                Verified Respondents
                                            </p>
                                        </div>

                                        <div>
                                            <p className="h-12 w-[1px] bg-[#4fe3f1]" />
                                        </div>

                                        <div>
                                            <p className="text-4xl font-normal leading-none text-[#039ba3]">
                                                40+
                                            </p>
                                            <p className="mt-3 text-base leading-4 text-[#dcecff]">
                                                Countries
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-base font-medium leading-5">
                                        <span className="text-[#05cdb8]">Healthcare specialists</span>
                                        <span className="ml-1 text-[#dcecff]">
                                            across major therapeutic areas
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Slider Full Width */}
                            <div className="absolute inset-x-0 bottom-24 z-30 w-full">
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
                                    breakpoints={{
                                        0: { slidesPerView: 2 },
                                        480: { slidesPerView: 2 },
                                        768: { slidesPerView: 2.8 },
                                        1024: { slidesPerView: 4.2 },
                                        1280: { slidesPerView: 5.2 },
                                    }}
                                    className="w-full industry-feature-slider"
                                >
                                    {featureCards.map((item, index) => (
                                        <SwiperSlide key={index} className="!h-auto">
                                            <div className="relative mx-1 flex min-h-[70px] w-full items-center rounded-xl bg-white py-4 pl-16 pr-4 shadow-[0_10px_25px_rgba(15,23,42,0.12)] lg:min-h-[86px]">
                                                <div className="absolute left-0 top-0 h-12 w-12 lg:h-14 lg:w-14">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.alt}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>

                                                <p className="pl-1 text-sm font-semibold leading-5 text-[#2f3850] lg:max-w-[180px] lg:text-base lg:line-clamp-3 line-clamp-2">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute left-0 top-0 lg:h-[110px] h-0 w-full"
                    style={{
                        clipPath: "polygon(0 82%, 100% 0, 100% 100%, 0 100%)",
                    }}
                />
            </section>
        </div>
    );
}