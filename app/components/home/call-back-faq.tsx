"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Why should businesses work with a global market research company?",
        answer:
            "A global market research company allows businesses to run studies across multiple countries with consistent research methods and coordinated fieldwork. This helps organizations compare market behavior across regions, understand cultural differences, and make more informed global business decisions.",
    },
    {
        question: "What types of market research services do companies usually provide?",
        answer:
            "Professional market research services typically include quantitative surveys, qualitative interviews, focus groups, data collection, and analysis. These services help organizations measure customer behavior, test new ideas, evaluate brand perception, and identify opportunities in competitive markets.",
    },
    {
        question: "What is commercial market research and how is it used?",
        answer:
            "Commercial market research focuses on understanding market demand, competitive positioning, and customer preferences to support business growth. Companies use it to evaluate new products, improve marketing strategies, and make data-backed decisions in competitive industries.",
    },
    {
        question: "How can businesses identify the best market research company for their needs?",
        answer:
            "The best market research company is typically one that demonstrates research expertise, strong data quality standards, and the ability to manage studies across industries and markets. Businesses should evaluate experience, methodology, and the reliability of data collection processes.",
    },


];

export default function CallbackFaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="relative overflow-hidden">

            <div className="absolute inset-0 z-0">
                <Image
                    src="/faq-area-bg.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0a143c]/75" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-[1250px] flex-col items-center gap-10 px-4 py-14 md:px-8 lg:flex-row lg:gap-12 lg:px-10 lg:py-20">
                {/* Left Form */}
                <div className="w-full md:w-[520px]">
                    <div className="rounded-[20px] bg-white p-6 shadow-xl md:p-8">
                        <div className="mb-6 text-center">
                            <h2 className="text-[28px] font-medium leading-tight text-[#3b3b3b] md:text-[38px]">
                                Request a{" "}
                                <span className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-2xl font-semibold leading-tight text-transparent lg:text-[42px]">Callback</span>
                            </h2>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="h-[46px] rounded-[4px] border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-[46px] rounded-[4px] border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6]"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <input
                                    type="tel"
                                    placeholder="Mobile"
                                    className="h-[46px] rounded-[4px] border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6]"
                                />

                                <select className="h-[46px] rounded-[4px] border border-[#d7d7d7] bg-white px-4 text-sm text-[#8a8a8a] outline-none focus:border-[#20b7a6]">
                                    <option>Please Select</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>

                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full rounded-[4px] border border-[#d7d7d7] px-4 py-3 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6] resize-none"
                            />

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center relative">
                                <input
                                    type="text"
                                    placeholder="Captcha"
                                    className="h-[46px] w-full rounded-[4px] border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6] sm:w-[150px]"
                                />

                                <div className="absolute left-36 flex h-[46px] w-[110px] items-center justify-center rounded-[4px] bg-[#171f4d] text-sm font-medium tracking-wide text-white">
                                    990940
                                </div>
                            </div>

                            <div className="pt-6 text-center">
                                <button
                                    type="submit"
                                    className="inline-flex min-w-[170px] items-center justify-center rounded-[6px] bg-gradient-to-r from-[#48b99b] to-[#5bc4a9] px-18 py-3 text-lg font-semibold text-white transition hover:opacity-90 hover:shadow-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right FAQ */}
                <div className="w-full md:flex-1">
                    <div className="mb-8">
                        <h2 className="text-[26px] font-light leading-tight text-white md:text-[42px]">
                            Frequently Asked
                        </h2>
                        <h2
                            className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-2xl font-semibold leading-tight text-transparent lg:text-[42px]"
                        >
                            Questions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index} className="border-b border-white/20">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className={`flex w-full items-center justify-between rounded-t-[16px] px-5 py-4 text-left transition ${isOpen ? "bg-white" : "bg-transparent"
                                            }`}
                                    >
                                        <span
                                            className={`lg:text-base text-sm font-medium transition ${isOpen ? "text-[#18aea1]" : "text-white"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            className={`h-5 w-5 transition-transform duration-300 ${isOpen
                                                ? "rotate-180 text-[#18aea1]"
                                                : "rotate-0 text-white"
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr] bg-white rounded-b-[16px]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 pb-5">
                                                <p className="lg:text-sm text-xs leading-6 text-[#6b7280]">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}