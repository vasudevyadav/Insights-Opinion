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
    { label: "About Us", href: "https://insightsopinion.com/our-story" },
    { label: "Case Studies", href: "https://insightsopinion.com/case-study" },
    { label: "Career", href: "https://insightsopinion.com/career" },
    { label: "Contact Us", href: "https://insightsopinion.com/contact-us" },
    { label: "Blog", href: "https://insightsopinion.com/blog" },
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
            <div className="mx-auto max-w-[1400px] px-6 pb-0 pt-10 sm:px-8 lg:px-14 lg:pt-12">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.95fr_1fr]">
                    {/* Left section */}
                    <div className="max-w-[250px]">
                        <div className="mb-10">
                            <Image
                                src="/logo.png"
                                alt="Insights Opinion"
                                width={170}
                                height={34}
                                className="h-auto w-auto"
                            />
                        </div>

                        <h3 className="text-xl font-light uppercase leading-[1.55] tracking-[2.8px] text-white/80">
                            We listen
                            <br />
                            you prosper
                        </h3>

                        <p className="mt-3 text-[13px] leading-6 text-white/60">
                            Stay Up-to-date with latest News
                        </p>

                        <div className="mt-5 max-w-[140px]">
                            <div className="flex items-center justify-between border-b border-white/80 pb-2">
                                <input
                                    type="email"
                                    placeholder="email address"
                                    className="w-full bg-transparent text-[13px] text-white placeholder:text-white/60 focus:outline-none"
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
                        <h4 className="mb-6 text-2xl font-light text-[#29c7c3]">
                            Company
                        </h4>

                        <ul className="space-y-2">
                            {companyLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-base leading-6 text-white/75 transition hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service */}
                    <div>
                        <h4 className="mb-6 text-2xl font-light text-[#29c7c3]">
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
                        <h4 className="mb-6 text-2xl font-light text-[#29c7c3]">
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

                        <div className="mt-8 flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/MRInsightsopinion/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#151b4a] transition hover:scale-105"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/insightsopinion/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#151b4a] transition hover:scale-105"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCjGQ2nhfxBTAszLnmJCfM0w"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#151b4a] transition hover:scale-105"
                            >
                                <Youtube size={18} />
                            </a>
                            <a
                                href="https://x.com/insightsopn"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#151b4a] transition hover:scale-105"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/insightsopinion"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#151b4a] transition hover:scale-105"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom bar */}
            <div className="mt-10 bg-[#60d4d0]">
                <div className="mx-auto flex flex-col gap-2 px-6 py-4 text-base font-medium text-white/90 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-14">
                    <p>Copyright © Insight Opinion. All rights received 2026</p>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://insightsopinion.com/cookies-policy/"
                            className="transition hover:text-[#151b4a]"
                        >
                            Cookies Policy
                        </a>
                        <span>|</span>
                        <a
                            href="https://insightsopinion.com/privacy-policy/"
                            className="transition hover:text-[#151b4a]"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}