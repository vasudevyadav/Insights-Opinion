"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function CaseStudiesForm() {
    return (
        <section className="relative overflow-hidden bg-[#edf4fb] py-6 lg:py-8">
            <div className="relative z-10 mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start lg:gap-8">
                        <div className="text-center lg:mb-10 lg:text-left">
                            <p className="text-[20px] leading-tight text-black sm:text-[28px]">
                                Grow Better with
                            </p>
                            <h2 className="mt-1 text-[34px] font-semibold leading-[1.05] bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-transparent bg-clip-text text-transparent sm:text-[52px]">
                                Insight
                                <br />
                                Opinion
                            </h2>
                        </div>

                        <div className="w-[45%] mx-auto  text-center">
                            <Image
                                src="/grow-better.png"
                                alt="Blog Image"
                                width={1000}
                                height={1000}
                                className="rounded-lg w-full h-[300px]"
                            />
                        </div>

                    </div>

                    {/* Right Side Form */}
                    <div className="mx-auto w-full max-w-[560px]">
                        <form className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Name"
                                className="h-[44px] rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 text-sm text-white outline-none placeholder:text-white/85"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="h-[44px] rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 text-sm text-white outline-none placeholder:text-white/85"
                            />

                            <div className="relative">
                                <select className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white outline-none">
                                    <option>Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>UAE</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="relative">
                                <select className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white outline-none">
                                    <option>Mobile</option>
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                    <option>+971</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="relative sm:col-span-1">
                                <select className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white outline-none">
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
                                    className="h-[42px] min-w-[130px] rounded-[6px] bg-gradient-to-r from-[#49c3b0] to-[#5ca8ff] px-6 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
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