"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Linkedin,
    ChevronRight,
    ChevronDown,
} from "lucide-react";

const companyLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Our Team", href: "/our-team" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact-us" },
];

const serviceLinks = [
    { label: "Quantitative Research", href: "/quantitative-research" },
    { label: "CATI Services", href: "/quantitative-research/methods/cati" },
    { label: "CAPI Services", href: "/quantitative-research/methods/capi" },
    { label: "CLT Services", href: "/quantitative-research/methods/clt" },
    { label: "Consumer Research", href: "/research/consumer-research" },
    { label: "Healthcare Research", href: "/research/healthcare-research" },
];

const quickLinks = [
    { label: "Quality Standard", href: "/quality-standard" },
    { label: "Industries", href: "/industries" },
    { label: "Client Success Stories", href: "/case-studies" },
    { label: "Blogs", href: "/blogs" },
    { label: "Local Page", href: "/local" },
];

export default function Footer() {
    const [openMobileSection, setOpenMobileSection] = React.useState<string | null>("Company");
    const footerGroups = [
        { title: "Company", links: companyLinks },
        { title: "Service", links: serviceLinks },
        { title: "Quick Links", links: quickLinks },
    ];

    return (
        <footer className="relative overflow-hidden bg-[#151b4a] text-white">
            <div className="mx-auto max-w-[1400px] px-5 pb-0 pt-10 sm:px-8 lg:px-14 lg:pt-12">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.95fr_1fr]">

                    {/* Left section */}
                    <div className="max-w-full md:max-w-[250px]">
                        <div className="mb-4 sm:mb-10">
                            <Image
                                src="/logo.png"
                                alt="Insights Opinion"
                                width={170}
                                height={34}
                                className="h-auto lg:w-auto w-48"
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

                    {/* Desktop Company */}
                    <div className="hidden md:block">
                        <h4 className="mb-5 text-[24px] font-light text-[#29c7c3] sm:mb-6 sm:text-2xl">
                            Company
                        </h4>

                        <ul className="space-y-2">
                            {companyLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-[15px] leading-6 text-white/75 transition hover:text-white sm:text-base"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop Service */}
                    <div className="hidden md:block">
                        <h4 className="mb-5 text-[24px] font-light text-[#29c7c3] sm:mb-6 sm:text-2xl">
                            Service
                        </h4>

                        <ul className="space-y-3">
                            {serviceLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-[15px] leading-6 text-white/75 transition hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop Quick Links */}
                    <div className="hidden md:block">
                        <h4 className="mb-5 text-[24px] font-light text-[#29c7c3] sm:mb-6 sm:text-2xl">
                            Quick Links
                        </h4>

                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-[15px] leading-6 text-white/75 transition hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
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

                    {/* Mobile accordion */}
                    <div className="space-y-2 md:hidden">
                        {footerGroups.map((group) => {
                            const isOpen = openMobileSection === group.title;

                            return (
                                <div
                                    key={group.title}
                                    className="overflow-hidden border-b border-white/15"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenMobileSection(isOpen ? null : group.title)
                                        }
                                        className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-[#29c7c3]"
                                        aria-expanded={isOpen}
                                    >
                                        {group.title}
                                        <ChevronDown
                                            size={19}
                                            className={`transition-transform duration-300 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ${
                                            isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <ul className="space-y-2">
                                                {group.links.map((item) => (
                                                    <li key={item.label}>
                                                        <Link
                                                            href={item.href}
                                                            className="block py-1 text-sm text-white/75 transition hover:text-white"
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="flex flex-wrap items-center gap-3 pt-5">
                            {[Facebook, Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={`Social link ${i + 1}`}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#151b4a] transition hover:scale-105"
                                >
                                    <Icon size={16} />
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
