"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { sliderTestimonials as testimonials } from "@/data/testimonials";

import "swiper/css";
import "swiper/css/navigation";

export default function QualityNewsTestimonials() {
    const articles = [
        "From Local to Global: Using Research To Identify High-Growth Regions",
        "How Global Research Reveals New Market Opportunities",
        "Using Research to Build Confident International Strategies",
    ];
    return (
        <section className="relative overflow-hidden bg-[#eef5fb]  lg:py-4 py-4 lg:pt-12 pt-8">
            <div className="relative z-10 mx-auto">
                <div className="mx-auto mb-12 max-w-6xl px-4 sm:px-6 lg:mb-16">
                    <p className="text-lg font-light text-[#2f3643]">Latest</p>
                    <h2 className="quality-gradient-text text-2xl font-semibold sm:text-3xl">News &amp; Articles</h2>
                    <div className="scrollbar-hide mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
                        {articles.map((title) => (
                            <article key={title} className="min-w-[82%] snap-center overflow-hidden rounded-[18px] border border-[#17214b] bg-white sm:min-w-[48%] md:min-w-0">
                                <div className="relative h-[165px] overflow-hidden">
                                    <Image src="/quality-standard/news-image.png" alt={title} fill className="object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-[#17214b]">{title}</h3>
                                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#667085]">Explore practical market research insights for stronger decisions and sustainable growth.</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="relative mb-8 px-4 sm:px-6 lg:mb-16 lg:pl-32 lg:pr-0">
                    <div className="relative mb-6 flex items-end justify-between gap-4">
                        <div className="max-w-[600px] mt-2">
                            <h2 className="mb-2 text-2xl font-light leading-tight text-[#2f3643] sm:text-4xl">
                                What Our
                            </h2>
                            <h3
                                className="mb-2 text-[28px] font-medium leading-tight text-transparent sm:text-[41px]"
                                style={{
                                    background: "linear-gradient(90deg, #20b7a6 0%, #5da6f6 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Clients Say
                            </h3>
                            <p className="my-2 text-xs leading-6 text-black sm:text-base">
                                Feedback from clients who partner with Insights Opinion for practical insights and dependable market research services.
                            </p>
                        </div>

                        <div className="hidden items-center gap-3 md:flex lg:mr-20 mb-4">
                            <button className="testimonial-prev flex h-10 w-10 items-center justify-center rounded-full border border-[#1b224f] text-[#1b224f] transition hover:bg-[#1b224f] hover:text-white">
                                <ArrowLeft size={18} />
                            </button>
                            <button className="testimonial-next flex h-10 w-10 items-center justify-center rounded-full border border-[#1b224f] text-[#1b224f] transition hover:bg-[#1b224f] hover:text-white">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

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
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.5 },
                        }}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="group rounded-none border border-[#c7d2e2] bg-white p-4 transition-all duration-500 hover:border-[#1a1f52] hover:bg-[#1a1f52]">
                                    <p className="min-h-[98px] line-clamp-4 text-xs leading-5 text-[#344054] transition-colors duration-500 group-hover:text-white/85 lg:text-sm">
                                        &quot;{item.quote}&quot;
                                    </p>

                                    <div className="mt-5 flex flex-wrap items-end justify-between gap-3 sm:flex-nowrap">
                                        <div>
                                            <p className="mb-1 text-xs font-semibold text-[#1a1f52] transition-colors duration-500 group-hover:text-white lg:text-sm">
                                                {item.company}
                                            </p>
                                            <p className="text-xs text-[#667085] transition-colors duration-500 group-hover:text-white/70">
                                                {item.author}
                                            </p>
                                        </div>
                                        {/* <Image
                                            src="/inshite-sing.png"
                                            alt="Insights Opinion"
                                            width={112}
                                            height={40}
                                            className="h-auto w-24 object-contain transition-all duration-500 group-hover:invert sm:w-28"
                                        /> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
