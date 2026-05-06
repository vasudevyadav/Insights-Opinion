"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function CaseStudiesForm() {
    return (
        <section className="relative overflow-hidden bg-[#edf4fb] py-8 lg:py-12">
            <div className="relative z-10 mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">

                    {/* Left Side — Heading + Image */}
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8 lg:items-start">
                        <div className="text-center sm:text-left">
                            <p className="text-[18px] leading-tight text-black sm:text-[22px] lg:text-[28px]">
                                Grow Better with
                            </p>
                            <h2 className="mt-1 bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-[36px] font-semibold leading-[1.05] text-transparent sm:text-[44px] lg:text-[52px]">
                                Insight
                                <br />
                                Opinion
                            </h2>
                        </div>

                        <div className="w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[260px]">
                            <Image
                                src="/grow-better.png"
                                alt="Grow Better"
                                width={1000}
                                height={1000}
                                className="h-[180px] w-full rounded-lg object-cover sm:h-[220px] lg:h-[280px]"
                            />
                        </div>
                    </div>

                    {/* Right Side — Form */}
                    <div className="mx-auto w-full max-w-[560px]">
                        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                            <input
                                type="text"
                                placeholder="Name"
                                className="h-[44px] rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 text-sm text-white outline-none placeholder:text-white/75"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="h-[44px] rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 text-sm text-white outline-none placeholder:text-white/75"
                            />

                            <div className="relative">
                                <select className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white/75 outline-none">
                                    <option>Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>UAE</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="relative">
                                <select className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white/75 outline-none">
                                    <option>Mobile</option>
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                    <option>+971</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="relative sm:col-span-1">
                                <select className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white/75 outline-none">
                                    <option>Please Select</option>
                                    <option>General Enquiry</option>
                                    <option>Business Query</option>
                                    <option>Support</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="h-[42px] w-full rounded-[6px] bg-gradient-to-r from-[#49c3b0] to-[#5ca8ff] px-6 text-sm font-semibold text-white shadow-md transition hover:opacity-90 sm:w-auto sm:min-w-[140px]"
                                >
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}