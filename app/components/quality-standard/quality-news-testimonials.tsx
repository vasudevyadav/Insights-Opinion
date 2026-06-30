"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const news = [
    {
        title: "From Local To Global: Using Research To Identify High-Growth regions",
        image: "/quality-standard/news-image.png",
    },
    {
        title: "From Local To Global: Using Research To Identify High-Growth regions",
        image: "/quality-standard/news-image.png",
    },
    {
        title: "From Local To Global: Using Research To Identify High-Growth regions",
        image: "/quality-standard/news-image.png",
    },
];

const testimonials = [
    {
        dark: true,
        quote:
            "Their detailed surveys gave us a clear understanding of our guests' preferences, leading to more personalized services and higher customer satisfaction. We were able to adjust our ...",
    },
    {
        dark: false,
        quote:
            "Their detailed surveys gave us a clear understanding of our guests' preferences, leading to more personalized services and higher customer satisfaction. We were able to adjust our ...",
    },
    {
        dark: false,
        quote:
            "Their detailed surveys gave us a clear understanding of our guests' preferences, leading to more personalized services and higher customer satisfaction. We were able to adjust our ...",
    },
];

export default function QualityNewsTestimonials() {
    return (
        <section className="quality-hex-bg relative overflow-hidden py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 lg:pl-24">
                    <p className="text-[23px] font-light leading-tight text-[#18213d] lg:text-[28px]">Latest</p>
                    <h2 className="quality-gradient-text text-[29px] font-semibold leading-tight lg:text-[36px]">
                        News & Articles
                    </h2>
                </div>

                <div className="relative">
                    <button className="absolute -left-2 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#28b7b0] text-white lg:flex">
                        <ArrowLeft size={18} />
                    </button>
                    <button className="absolute -right-2 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#28b7b0] text-white lg:flex">
                        <ArrowRight size={18} />
                    </button>

                    <div className="grid gap-8 lg:grid-cols-3 lg:px-16">
                        {news.map((item, index) => (
                            <article key={index} className="overflow-hidden rounded-[18px] border-2 border-[#728096] bg-white">
                                <div className="relative h-[170px]">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    <div className="absolute bottom-[-14px] left-0 rounded-r-[5px] bg-gradient-to-r from-[#18b9aa] to-[#65adff] px-5 py-2 text-[10px] font-semibold uppercase text-white">
                                        Admin | March 29, 2026 06:20PM
                                    </div>
                                </div>
                                <div className="px-5 pb-6 pt-8">
                                    <h3 className="text-[15px] font-bold leading-6 text-[#101538]">{item.title}</h3>
                                    <p className="mt-3 text-xs leading-5 text-[#18213d]">
                                        Expanding to new countries is exciting and risky. The fastest wins happen when you read local signals correctly and scale only what will travel.
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-14 lg:pl-24">
                    <p className="text-[24px] font-light leading-tight text-[#18213d] lg:text-[30px]">
                        What Healthcare Clients Say
                    </p>
                    <h2 className="quality-gradient-text text-[31px] font-semibold leading-tight lg:text-[38px]">
                        About Us
                    </h2>
                    <p className="mt-3 max-w-xl text-sm text-[#18213d] lg:text-base">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </p>
                </div>

                <div className="relative mt-8">
                    <button className="absolute -left-2 top-1/2 hidden -translate-y-1/2 text-[#050505] lg:block">
                        <ArrowLeft size={58} strokeWidth={1.8} />
                    </button>
                    <div className="grid gap-3 overflow-hidden lg:ml-24 lg:grid-cols-[1fr_1fr_0.36fr]">
                        {testimonials.map((item, index) => (
                            <article
                                key={index}
                                className={`min-h-[240px] border border-[#101538] p-7 ${item.dark ? "bg-[#101538] text-white" : "bg-transparent text-[#101538]"}`}
                            >
                                <p className="text-3xl leading-none">“</p>
                                <p className="mt-1 max-w-[500px] text-sm leading-7">{item.quote}</p>
                                <div className="mt-7 flex items-center gap-10 text-sm">
                                    <span>Read Full Customer Story</span>
                                    <ArrowRight size={28} />
                                </div>
                                <div className="mt-6 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`h-16 w-16 rounded-full ${item.dark ? "bg-white" : "bg-[#101538]"}`} />
                                        <div className="text-sm leading-tight">
                                            <p>THOMAS</p>
                                            <p>Director, Clifton</p>
                                        </div>
                                    </div>
                                    <Image
                                        src="/inshite-sing.png"
                                        alt="Clifton"
                                        width={112}
                                        height={48}
                                        className={item.dark ? "invert" : ""}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
