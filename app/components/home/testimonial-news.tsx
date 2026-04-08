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

    const news = [
        {
            title: "Global vs. Local: How Regional Industry Market Research Shapes Business Expansion",
            shortDesc:
                "Expansion fails when teams copy what worked locally and assume it will work everywhere. The fix is simple. Use global vs. local research to separate what should stay consistent from what must change by region. Global expansion market research helps you validate demand, price tolerance, channel fit, and compliance risk before you spend. It also prevents launches in regions that look attractive on paper but do not convert in reality.",
            fullDesc:
                "Healthcare moves fast — new therapies, digital health tools, shifting patient demographics, and evolving regulations all demand that companies stay ahead. Market research helps healthcare firms understand patient needs, map competitor landscapes, and make informed product decisions that truly matter.",
            image: "/global-vs-local-regional-market-researches.jpg",
        },
        {
            title: "Sharing the Secrets of How Professionals Ace Healthcare Market Research",
            shortDesc:
                "Professional healthcare market research works when it answers the decision clearly, reaches the right stakeholders, stays compliant, and delivers actions teams can execute. One weak sample or a vague question can push the wrong product, message, or access plan.",
            fullDesc:
                "Professional healthcare market research works when it answers the decision clearly, reaches the right stakeholders, stays compliant, and delivers actions teams can execute. One weak sample or a vague question can push the wrong product, message, or access plan.",
            image: "/how-professionals-ace-healthcare-market-research.jpg",
        },
        {
            title: "Strengthen Decision-Making With Qualitative Research Methods",
            shortDesc:
                "When a decision is expensive, uncertain, or sensitive, you need more than dashboards. You need to understand what people meant, what they felt, and what stopped them. Qualitative research methods capture those details through direct conversations and observation, so you can design better products, services, and messages.",
            fullDesc:
                "When a decision is expensive, uncertain, or sensitive, you need more than dashboards. You need to understand what people meant, what they felt, and what stopped them. Qualitative research methods capture those details through direct conversations and observation, so you can design better products, services, and messages.",
            image: "/strengthen-decision-making-with-qualitative-research-methods.jpg",
        },
        {
            title: "From Local To Global: Using Research To Identify High-Growth Regions",
            shortDesc:
                "Expanding to new countries is exciting and risky. The fastest wins happen when you read local signals correctly and scale only what will travel. Quick answer: Study growth patterns in global regions, build a comparable score for each country or city cluster, and localize the offer before you spend.",
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
                        className="object-fill transition-transform duration-500 group-hover/news:scale-105"
                    />
                </div>

                <div
                    className={`border-t px-5 py-4 transition-all duration-500 ${isOpen
                        ? "border-white/10 bg-[#1a1f52]"
                        : "border-[#d7e3ef] bg-white group-hover/news:border-white/10 group-hover/news:bg-[#1a1f52]"
                        }`}
                >
                    <h4
                        className={`mb-2 line-clamp-2 text-lg font-semibold transition-colors duration-500 lg:text-xl ${isOpen
                            ? "text-white"
                            : "text-[#1f2937] group-hover/news:text-white"
                            }`}
                    >
                        {item.title}
                    </h4>

                    <p
                        className={`mt-2 line-clamp-3 text-xs leading-5 transition-colors duration-500 lg:text-sm ${isOpen
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

                    {/* <div
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
                    </div> */}
                </div>
            </div>
        );
    };

    return (
        <section className="relative overflow-hidden bg-[#eef5fb] py-8 lg:py-16">
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

                .news-swiper .swiper-slide {
                  height: auto;
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
                <div className="relative mb-8 pl-6 pr-6 lg:mb-16 lg:pl-[12.6rem] lg:pr-0">
                    <div className="mb-6 flex gap-4 pl-4 lg:pl-54">
                        <div>
                            <h2 className="text-2xl font-light leading-tight text-[#2f3643] sm:text-[45px]">
                                What Our
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
                                Clients Say
                            </h3>
                            <p className="mt-2 max-w-[520px] text-xs leading-6 text-black sm:text-lg">
                                Feedback from clients who partner with Insights Opinion for practical insights and dependable market research services.
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
                                            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full transition-all duration-500">
                                                <Image
                                                    src="/Testimonial-Icon.png"
                                                    alt="testimonial logo"
                                                    width={1000}
                                                    height={1000}
                                                    className="w-14 object-contain transition-all duration-500"
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
                                background:
                                    "linear-gradient(90deg, #20b7a6 0%, #5da6f6 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            News &amp; Articles
                        </h3>
                    </div>

                    {/* Mobile slider */}
                    <div className="md:hidden">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={800}
                            loop
                            spaceBetween={16}
                            slidesPerView={1}
                            className="news-swiper"
                        >
                            {news.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <NewsCard item={item} index={index} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Desktop unchanged */}
                    <div className="hidden space-y-5 md:block">
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