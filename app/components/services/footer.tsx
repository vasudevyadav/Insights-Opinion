"use client";

import React from "react";
import Image from "next/image";
import {
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Linkedin,
    ChevronRight,
} from "lucide-react";

const companyLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Case Studies", href: "/case-study" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Blog", href: "/blogs" },
];

const serviceLinks = [
    {
        label: "Quantitative Research Services",
        href: "https://insightsopinion.com/service/quantitative-research",
    },
    {
        label: "Qualitative Market Research",
        href: "https://insightsopinion.com/service/qualitative-research",
    },
    {
        label: "Consumer Research",
        href: "https://insightsopinion.com/research-expertise/consumer-research",
    },
    {
        label: "B2B Research",
        href: "https://insightsopinion.com/research-expertise/b2b-research",
    },
    {
        label: "Healthcare Research",
        href: "https://insightsopinion.com/research-expertise/healthcare-research",
    },
];

const quickLinks = [
    {
        label: "Data Protection / GDPR Compliance",
        href: "https://insightsopinion.com/data-protection-gdpr-compliance",
    },
    {
        label: "Privacy Policy",
        href: "https://insightsopinion.com/privacy-policy",
    },
    {
        label: "Global Panel",
        href: "https://insightsopinion.com/global-panel",
    },
    {
        label: "CATI Services",
        href: "https://insightsopinion.com/service/cati-market-research",
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#151b4a] text-white">
            <div className="mx-auto max-w-[1400px] px-5 pb-0 pt-10 sm:px-8 lg:px-14 lg:pt-12">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.95fr_1fr]">

                    {/* Left section */}
                    <div className="max-w-full md:max-w-[250px]">
                        <div className="mb-8 sm:mb-10">
                            <Image
                                src="/logo.png"
                                alt="Insights Opinion"
                                width={170}
                                height={34}
                                className="h-auto w-auto"
                            />
                        </div>

                        <h3 className="text-lg font-light uppercase leading-[1.55] tracking-[2px] text-white/80 sm:text-xl sm:tracking-[2.8px]">
                            We listen
                            <br />
                            you prosper
                        </h3>

                        <p className="mt-3 text-[13px] leading-6 text-white/60">
                            Stay Up-to-date with latest News
                        </p>

                        <div className="mt-5 w-full lg:max-w-[220px] sm:max-w-[180px] md:max-w-[140px]">
                            <div className="flex items-center justify-between border-b border-white/80 pb-2">
                                <input
                                    type="email"
                                    placeholder="email address"
                                    className="w-full min-w-0 bg-transparent text-[13px] text-white placeholder:text-white/60 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="ml-3 shrink-0 text-white/80"
                                >
                                    <ChevronRight size={16} strokeWidth={1.75} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="mb-5 text-[24px] font-light text-[#29c7c3] sm:mb-6 sm:text-2xl">
                            Company
                        </h4>

                        <ul className="space-y-2">
                            {companyLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-[15px] leading-6 text-white/75 transition hover:text-white sm:text-base"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ✅ Service (HIDDEN ON MOBILE) */}
                    <div className="hidden md:block">
                        <h4 className="mb-5 text-[24px] font-light text-[#29c7c3] sm:mb-6 sm:text-2xl">
                            Service
                        </h4>

                        <ul className="space-y-3">
                            {serviceLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-[14px] leading-6 text-white/75 transition hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-5 text-[24px] font-light text-[#29c7c3] sm:mb-6 sm:text-2xl">
                            Quick Links
                        </h4>

                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-[14px] leading-6 text-white/75 transition hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            {[Facebook, Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#151b4a] transition hover:scale-105"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom bar */}
            <div className="mt-10 bg-[#60d4d0]">
                <div className="mx-auto flex flex-col gap-3 px-5 py-4 text-sm font-medium text-white/90 sm:px-8 sm:text-base lg:flex-row lg:items-center lg:justify-between lg:px-14">
                    <p className="text-left lg:w-6/12 ">
                        Copyright © Insight Opinion. All rights received 2026
                    </p>

                    <div className="flex lg:flex-row lg:w-6/12 flex-wrap items-center gap-2 lg:text-left text-center justify-center lg:justify-end">
                        <a href="#" className="transition hover:text-[#151b4a]">
                            Cookies Policy
                        </a>
                        <span>|</span>
                        <a href="#" className="transition hover:text-[#151b4a]">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}