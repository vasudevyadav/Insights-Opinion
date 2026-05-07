"use client";

import { useState } from "react";

function generateCaptcha() {
    const chars = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export function LocalBoostYour() {
    const [captcha] = useState(generateCaptcha);

    return (
        <section className="relative overflow-hidden bg-[#0d1f4e] px-4 py-10 sm:px-8">
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
                viewBox="0 0 1200 200"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="600" cy="100" r="130" fill="none" stroke="#74b9ff" strokeWidth="2" />
                <circle cx="600" cy="100" r="80" fill="none" stroke="#74b9ff" strokeWidth="1.5" />
                <polyline
                    points="200,160 320,80 440,120 560,40 680,90 800,50 920,110 1040,60"
                    fill="none"
                    stroke="#17afa1"
                    strokeWidth="1.5"
                />
                <rect x="900" y="60" width="80" height="110" rx="3" fill="none" stroke="#74b9ff" strokeWidth="1" />
                <rect x="1000" y="80" width="60" height="90" rx="3" fill="none" stroke="#74b9ff" strokeWidth="1" />
                <rect x="1080" y="50" width="50" height="120" rx="3" fill="none" stroke="#74b9ff" strokeWidth="1" />
            </svg>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1a3e] via-[#0e2257]/80 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-5">
                    <p className="text-[20px] font-semibold leading-tight lg:text-3xl">
                        <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text text-transparent">
                            Boost Your Decisions with
                        </span>
                    </p>
                    <p className="text-[20px] font-medium text-white sm:text-3xl">
                        Reliable Market Insights!
                    </p>
                </div>

                <div className="mb-4 flex flex-wrap items-center gap-2.5">
                    <input
                        type="text"
                        placeholder="Name"
                        className="h-[42px] flex-1 basis-[140px] rounded-md border border-white/25 bg-white/90 px-3.5 text-[13px] text-[#1e2a4e] placeholder-gray-500 outline-none focus:border-[#17afa1] focus:bg-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="h-[42px] flex-1 basis-[140px] rounded-md border border-white/25 bg-white/90 px-3.5 text-[13px] text-[#1e2a4e] placeholder-gray-500 outline-none focus:border-[#17afa1] focus:bg-white"
                    />
                    <select className="h-[42px] flex-1 basis-[140px] appearance-none rounded-md border border-white/25 bg-white/90 px-3.5 text-[13px] text-gray-500 outline-none focus:border-[#17afa1] focus:bg-white focus:text-[#1e2a4e]">
                        <option value="" disabled selected>Please Select</option>
                        <option>Market Research</option>
                        <option>Brand Research</option>
                        <option>Customer Insights</option>
                    </select>

                    {/* Captcha */}
                    <div className="flex h-[42px] flex-1 basis-[180px] overflow-hidden rounded-md border border-white">
                        <input
                            type="text"
                            placeholder="Captcha"
                            className="h-full flex-1 bg-white/90 px-3.5 text-[13px] text-[#1e2a4e] placeholder-gray-500 outline-none focus:bg-white"
                        />
                        <div className="flex items-center border border-white bg-transparent px-3.5 font-mono text-[13px] font-bold tracking-wider text-white select-none">
                            {captcha}
                        </div>
                    </div>
                </div>

                <button className=" py-2.5 px-10 rounded-md bg-gradient-to-r from-[#14b3a1] to-[#5ba8fb] px-7 text-[14px] font-semibold text-white transition-opacity hover:opacity-85">
                    Submit
                </button>
            </div>
        </section>
    );
}