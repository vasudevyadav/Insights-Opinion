"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialNews() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const vlines = [
        { left: "14%", delay: "0s" },
        { left: "28%", delay: "0.8s" },
        { left: "42%", delay: "1.6s" },
        { left: "56%", delay: "0.4s" },
        { left: "70%", delay: "1.2s" },
        { left: "84%", delay: "2s" },
    ];

    const testimonials = [
        {
            quote:
                "Their detailed surveys gave us clearer understanding of our guest preferences, leading to more personalised service and higher customer satisfaction. We saw a clear shift in guest feedback after implementation.",
            link: "Read Full Customer Story",
            company: "TAJMG",
            author: "Director, Clifton",
            logo: "/testimonial-logo.png",
        },
        {
            quote:
                "Their detailed surveys gave us clearer understanding of our guest preferences, leading to more personalised service and higher customer satisfaction. We saw a clear shift in guest feedback after implementation.",
            link: "Read Full Customer Story",
            company: "TAJMG",
            author: "Director, Clifton",
            logo: "/testimonial-logo.png",
        },
        {
            quote:
                "Their detailed surveys gave us clearer understanding of our guest preferences, leading to more personalised service and higher customer satisfaction. We saw a clear shift in guest feedback after implementation.",
            link: "Read Full Customer Story",
            company: "TAJMG",
            author: "Director, Clifton",
            logo: "/testimonial-logo.png",
        },
        {
            quote:
                "Their detailed surveys gave us clearer understanding of our guest preferences, leading to more personalised service and higher customer satisfaction. We saw a clear shift in guest feedback after implementation.",
            link: "Read Full Customer Story",
            company: "TAJMG",
            author: "Director, Clifton",
            logo: "/testimonial-logo.png",
        },
    ];

    const news = [
        {
            title: "Why Market Research Is a Must for the Healthcare Industry?",
            shortDesc:
                "Healthcare moves fast, new therapies, digital health tools, changing...",
            fullDesc:
                "Healthcare moves fast — new therapies, digital health tools, shifting patient demographics, and evolving regulations all demand that companies stay ahead. Market research helps healthcare firms understand patient needs, map competitor landscapes, and make informed product decisions that truly matter.",
            image: "/news-articles-img-1.png",
        },
        {
            title: "How to Maximize the Value of Telephone Interviews in B2B Research?",
            shortDesc:
                "Best practices to extract richer insights from CATI-based fieldwork.",
            fullDesc:
                "Telephone interviews remain one of the most reliable methods for B2B research. Discover how skilled interviewers, targeted screeners, and structured discussion guides combine to deliver high-quality qualitative data at scale — even in the digital age.",
            image: "/news-articles-img-2.png",
        },
        {
            title: "CATI: The Quality Reset for Businesses Tired of Noisy Online Data",
            shortDesc:
                "Why companies are returning to telephone interviewing for cleaner data.",
            fullDesc:
                "As online panels face mounting quality concerns, CATI (Computer-Assisted Telephone Interviewing) is making a strong comeback. Learn why businesses prioritizing data integrity are rediscovering telephone research as their go-to method for reliable results.",
            image: "/news-articles-img-3.png",
        },
        {
            title: "Optimizing Product Development Through Qualitative Market Research",
            shortDesc:
                "Great products fail when teams build on assumptions instead of people...",
            fullDesc:
                "Qualitative research reveals the 'why' behind consumer behavior. From focus groups to in-depth interviews, this article explores how product teams can use rich qualitative insights to build features that genuinely solve user problems and delight customers.",
            image: "/news-articles-img-4.png",
        },
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const NewsCard = ({
        item,
        index,
    }: {
        item: (typeof news)[0];
        index: number;
    }) => {
        const isOpen = openIndex === index;

        return (
            <div
                className={`group/news overflow-hidden rounded-[16px] border border-[#d7e3ef] bg-white transition-all duration-500 ease-in-out hover:border-[#1a1f52] hover:bg-[#1a1f52] ${isOpen
                    ? "w-full md:flex-[1.5]"
                    : "w-full md:flex-1 md:hover:flex-[1.5]"
                    }`}
            >
                <div className="relative h-[260px] w-full overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover/news:scale-105"
                    />
                </div>

                <div
                    className={`border-t px-5 py-4 transition-all duration-500 ${isOpen
                        ? "border-white/10 bg-[#1a1f52]"
                        : "border-[#d7e3ef] bg-white group-hover/news:border-white/10 group-hover/news:bg-[#1a1f52]"
                        }`}
                >
                    <h4
                        className={`text-lg  lg:text-xl mb-2 font-semibold transition-colors duration-500 line-clamp-2 ${isOpen
                            ? "text-white"
                            : "text-[#1f2937] group-hover/news:text-white"
                            }`}
                    >
                        {item.title}
                    </h4>

                    <p
                        className={`mt-2 text-xs lg:text-sm leading-5 transition-colors duration-500 line-clamp-2 ${isOpen
                            ? "text-white/75"
                            : "text-[#667085] group-hover/news:text-white/75"
                            }`}
                    >
                        {item.shortDesc}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${isOpen
                                ? "text-[#7ddbd1]"
                                : "text-[#1b224f] group-hover/news:text-white"
                                }`}
                        >
                            {isOpen ? "Read Less" : "Read More"}
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <ArrowRight
                            className={`transition-colors duration-500 ${isOpen
                                ? "text-white"
                                : "text-[#1a1f52] group-hover/news:text-white"
                                }`}
                            size={18}
                        />
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateRows: isOpen ? "1fr" : "0fr",
                            transition: "grid-template-rows 0.4s ease",
                        }}
                    >
                        <div className="overflow-hidden">
                            <p className="mt-4 border-t border-white/20 pt-4 text-[13px] leading-6 text-white/80">
                                {item.fullDesc}
                            </p>
                            <a
                                href="#"
                                className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#7ddbd1] transition hover:text-white"
                            >
                                Read Full Article <ArrowRight size={13} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="relative overflow-hidden bg-[#eef5fb] py-14 lg:py-16">
            <style>{`
        @keyframes moveLineGlow {
          0% { top: -140px; }
          100% { top: 110%; }
        }

        .industry-v-line {
          position: absolute;
          top: 0;
          height: 100%;
          width: 1px;
          background: #d5e1ec;
          pointer-events: none;
          z-index: 0;
        }

        .industry-v-line::after {
          content: "";
          position: absolute;
          top: -140px;
          left: 0;
          width: 100%;
          height: 140px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(72, 214, 168, 0.15) 20%,
            rgba(72, 214, 168, 0.9) 50%,
            rgba(255,255,255,0.95) 65%,
            rgba(72, 214, 168, 0.6) 80%,
            transparent 100%
          );
          animation: moveLineGlow 3.6s linear infinite;
          animation-delay: var(--line-delay);
        }

        .testimonial-swiper .swiper-button-disabled {
          opacity: 0.35;
          pointer-events: none;
        }
      `}</style>

            {vlines.map((line, i) => (
                <div
                    key={i}
                    className="industry-v-line"
                    style={
                        {
                            left: line.left,
                            ["--line-delay" as any]: line.delay,
                        } as React.CSSProperties
                    }
                />
            ))}

            <div className="relative z-10 mx-auto">
                {/* TESTIMONIALS */}
                <div className="mb-16 pl-6 pr-6 lg:pl-[12.6rem] lg:pr-0 relative">
                    <div className="mb-6 flex pl-54 mb-12 gap-4 ">
                        <div>
                            <h2 className="text-2xl font-light leading-tight text-[#2f3643] sm:text-[45px]">
                                A word from our
                            </h2>
                            <h3
                                className="text-[28px] font-semibold leading-tight text-transparent sm:text-[45px]"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #20b7a6 0%, #5da6f6 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                customers
                            </h3>
                            <p className="mt-2 max-w-[520px] text-xs leading-6 text-black sm:text-lg">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>

                        <div className="absolute -bottom-16 right-0">

                            <div className="mr-10 hidden items-center gap-3 md:flex lg:mr-20">
                                <button className="testimonial-prev flex h-10 w-10 items-center justify-center rounded-full border border-[#1b224f] text-[#1b224f] transition hover:bg-[#1b224f] hover:text-white">
                                    <ArrowLeft size={18} />
                                </button>
                                <button className="testimonial-next flex h-10 w-10 items-center justify-center rounded-full border border-[#1b224f] text-[#1b224f] transition hover:bg-[#1b224f] hover:text-white">
                                    <ArrowRight size={18} />
                                </button>
                            </div>

                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: ".testimonial-prev",
                            nextEl: ".testimonial-next",
                        }}
                        autoplay={{ delay: 2800, disableOnInteraction: false }}
                        speed={900}
                        loop
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
                                <div className="group rounded-none border border-[#c7d2e2] bg-white p-4 transition-all duration-500 hover:border-[#1a1f52] hover:bg-[#1a1f52]">
                                    <p className="min-h-[98px] text-xs lg:text-sm line-clamp-4 leading-5 text-[#344054] transition-colors duration-500 group-hover:text-white/85">
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
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1f52] transition-all duration-500 overflow-hidden">
                                                <Image
                                                    src="/book-demo.png"
                                                    alt="testimonial logo"
                                                    width={1000}
                                                    height={1000}
                                                    className="w-14 object-contain transition-all duration-500"
                                                />
                                            </div>

                                            <div>
                                                <p className="text-xs lg:text-sm font-semibold text-[#1a1f52] transition-colors duration-500 group-hover:text-white mb-1">
                                                    {item.company}
                                                </p>
                                                <p className="text-xs text-[#667085] transition-colors duration-500 group-hover:text-white/70">
                                                    {item.author}
                                                </p>
                                            </div>
                                        </div>

                                        <Image
                                            src="/inshite-sing.png"
                                            alt="testimonial logo"
                                            width={1000}
                                            height={1000}
                                            className="w-28 object-contain transition-all duration-500 group-hover:invert"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* NEWS & ARTICLES */}
                <div className="mx-auto max-w-5xl px-6 lg:px-0">
                    <div className="mb-8">
                        <h2 className="text-[24px] font-light leading-tight text-[#2f3643] lg:text-[42px]">
                            Latest
                        </h2>
                        <h3
                            className="text-[28px] font-semibold leading-tight sm:text-[38px]"
                            style={{
                                background: "linear-gradient(90deg, #20b7a6 0%, #5da6f6 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            News &amp; Articles
                        </h3>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-col gap-5 md:flex-row">
                            <NewsCard item={news[0]} index={0} />
                            <NewsCard item={news[1]} index={1} />
                        </div>

                        <div className="flex flex-col gap-5 md:flex-row">
                            <NewsCard item={news[2]} index={2} />
                            <NewsCard item={news[3]} index={3} />
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-lg font-semibold text-[#1b224f] transition hover:text-[#20b7a6]"
                        >
                            See More
                            <ArrowRight size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}