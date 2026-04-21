"use client";

import {
    Headphones,
    MessageSquareText,
    Mail,
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Linkedin,
} from "lucide-react";

export default function ContactForm() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-10 lg:py-12">

            {/* ── Hex Pattern Background ── */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
                <svg
                    viewBox="0 0 1440 700"
                    className="h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <pattern
                            id="hexPattern"
                            x="0"
                            y="0"
                            width="52"
                            height="45"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M13 1H39L52 22.5L39 44H13L0 22.5L13 1Z"
                                stroke="#9EDFF2"
                                strokeWidth="1.1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexPattern)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* ── Heading ── */}
                <div className="text-center">
                    <h2 className="bg-gradient-to-r from-[#29c3b1] to-[#5aaeff] bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl lg:text-[40px]">
                        Contact Us
                    </h2>
                </div>

                {/* ── Main Grid ── */}
                <div className="mt-6 grid grid-cols-1 gap-8 lg:mt-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-12">

                    {/* ────────────────────────────
                        LEFT — Form
                    ──────────────────────────── */}
                    <div className="w-full">
                        <h3 className="text-center text-lg font-semibold text-[#42c2c8] sm:text-xl lg:text-left">
                            Drop us a message for{" "}
                            <span className="text-[#5aaeff]">any query</span>
                        </h3>

                        <form className="mt-5 space-y-4">

                            {/* Row 1: First Name + Last Name */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium text-[#4b5563] sm:text-sm">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Firstname"
                                        className="h-10 w-full rounded-md border border-transparent bg-white px-4 text-sm text-[#334155] outline-none placeholder:text-[#b0b8c5] focus:border-[#67c7df] sm:h-11"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium text-[#4b5563] sm:text-sm">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Lastname"
                                        className="h-10 w-full rounded-md border border-transparent bg-white px-4 text-sm text-[#334155] outline-none placeholder:text-[#b0b8c5] focus:border-[#67c7df] sm:h-11"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email + Contact */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium text-[#4b5563] sm:text-sm">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your mail"
                                        className="h-10 w-full rounded-md border border-transparent bg-white px-4 text-sm text-[#334155] outline-none placeholder:text-[#b0b8c5] focus:border-[#67c7df] sm:h-11"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium text-[#4b5563] sm:text-sm">
                                        Contact
                                    </label>
                                    <div className="flex overflow-hidden rounded-md border border-transparent bg-white focus-within:border-[#67c7df]">
                                        <select className="h-10 min-w-[68px] cursor-pointer border-r border-[#d9e4ee] bg-white px-2 text-sm text-[#334155] outline-none sm:h-11 sm:min-w-[74px]">
                                            <option>+91</option>
                                            <option>+1</option>
                                            <option>+44</option>
                                            <option>+61</option>
                                            <option>+971</option>
                                        </select>
                                        <input
                                            type="text"
                                            placeholder="Enter your contact number"
                                            className="h-10 w-full bg-white px-3 text-sm text-[#334155] outline-none placeholder:text-[#b0b8c5] sm:h-11 sm:px-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-[#4b5563] sm:text-sm">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter your message"
                                    className="w-full resize-none rounded-md border border-transparent bg-white px-4 py-3 text-sm text-[#334155] outline-none placeholder:text-[#b0b8c5] focus:border-[#67c7df]"
                                />
                            </div>

                            {/* Submit */}
                            <div>
                                <button
                                    type="submit"
                                    className="rounded-md bg-gradient-to-r from-[#43d1c5] to-[#58a9ff] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:scale-[0.98] sm:px-6 sm:py-3"
                                >
                                    Send a message
                                </button>
                            </div>
                        </form>

                        {/* ── Newsletter ── */}
                        <div className="mt-7 w-full max-w-full sm:max-w-[420px]">
                            <p className="mb-2.5 text-xs font-medium text-[#4b5563] sm:text-[13px]">
                                Subscribe to Newsletter
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="enter your mail ID"
                                    className="h-10 w-full flex-1 rounded-md border border-[#7ad0e7] bg-transparent px-4 text-sm text-[#334155] outline-none placeholder:text-[#9aa7b6] focus:border-[#43d1c5] sm:h-11"
                                />
                                <button
                                    type="button"
                                    className="h-10 shrink-0 rounded-md bg-gradient-to-r from-[#43d1c5] to-[#58a9ff] px-6 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.98] sm:h-11"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ────────────────────────────
                        RIGHT — Contact Info Card
                    ──────────────────────────── */}
                    <div className="mx-auto w-full max-w-[400px] sm:max-w-[420px] lg:mx-0 lg:max-w-full">
                        <div className="rounded-[24px] bg-gradient-to-br from-[#5ea8ff] via-[#47c6ca] to-[#4dbd8e] px-5 py-8 text-white shadow-[0_18px_45px_rgba(72,162,210,0.28)] sm:rounded-[28px] sm:px-6 sm:py-10">

                            <p className="max-w-[220px] text-lg font-semibold leading-7">
                                Hi! We are always here to help you.
                            </p>

                            {/* Contact Items */}
                            <div className="mt-6 space-y-3 sm:space-y-4">

                                {/* Hotline */}
                                <div className="flex items-center gap-3 rounded-2xl bg-[rgba(59,122,168,0.28)] px-4 py-3.5 backdrop-blur-sm sm:gap-4 sm:py-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-11 sm:w-11">
                                        <Headphones className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Hotline:</p>
                                        <p className="text-xs text-white/90 sm:text-sm">+91 0987654321</p>
                                    </div>
                                </div>

                                {/* SMS / Whatsapp */}
                                <div className="flex items-center gap-3 rounded-2xl bg-[rgba(59,122,168,0.28)] px-4 py-3.5 backdrop-blur-sm sm:gap-4 sm:py-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-11 sm:w-11">
                                        <MessageSquareText className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">SMS / Whatsapp:</p>
                                        <p className="text-xs text-white/90 sm:text-sm">+91 0987654321</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-3 rounded-2xl bg-[rgba(59,122,168,0.28)] px-4 py-3.5 backdrop-blur-sm sm:gap-4 sm:py-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-11 sm:w-11">
                                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Email:</p>
                                        <p className="text-xs text-white/90 sm:text-sm">abc@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="mt-7 sm:mt-8">
                                <p className="text-sm font-medium sm:text-base">Contact with us</p>
                                <div className="mt-3 flex flex-wrap items-center gap-2.5 sm:mt-4 sm:gap-3">
                                    {[
                                        { icon: Facebook, label: "Facebook" },
                                        { icon: Instagram, label: "Instagram" },
                                        { icon: Youtube, label: "YouTube" },
                                        { icon: Twitter, label: "Twitter" },
                                        { icon: Linkedin, label: "LinkedIn" },
                                    ].map(({ icon: Icon, label }) => (
                                        <a
                                            key={label}
                                            href="#"
                                            aria-label={label}
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-black transition hover:bg-white/25 hover:text-white sm:h-11 sm:w-11"
                                        >
                                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}