"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Blog, getRelatedBlogs } from "@/data/blogData";

const SOCIAL_ICONS = [
    {
        label: "Facebook",
        href: "#",
        bg: "#1877f2",
        svg: (
            <svg viewBox="0 0 24 24" fill="white" className="h-[15px] w-[15px]">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "#",
        bg: "#ff0000",
        svg: (
            <svg viewBox="0 0 24 24" fill="white" className="h-[15px] w-[15px]">
                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.896 0-7.605-.476c-.941-.262-1.684-1.037-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.104 4 12 4 12 4s5.896 0 7.605.476c.941.262 1.684 1.037 1.938 2.022zM10 15.5l5.5-3.5L10 8.5v7z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        bg: "#000000",
        svg: (
            <svg viewBox="0 0 24 24" fill="white" className="h-[15px] w-[15px]">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
        svg: (
            <svg viewBox="0 0 24 24" fill="white" className="h-[15px] w-[15px]">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
];

interface BlogDetailProps {
    blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
    const relatedBlogs = getRelatedBlogs(blog.id, 6);
    const [carouselStart, setCarouselStart] = useState(0);
    const visibleRelated = relatedBlogs.slice(carouselStart, carouselStart + 3);

    const tocSections = blog.sections?.filter((s) => !s.isImage) ?? [];

    const handlePrev = () => setCarouselStart((prev) => Math.max(0, prev - 1));
    const handleNext = () =>
        setCarouselStart((prev) => Math.min(relatedBlogs.length - 3, prev + 1));

    return (
        <>
            {/* ─── Hero Banner ─── */}

            <section className="bg-[#edf6fe]">
                <div className="relative overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white lg:mt-20 mt-8 w-full">
                    <div className="relative z-10 mx-auto flex lg:min-h-[500px] min-h-[400px] w-full max-w-7xl lg:pt-0 pt-16 lg:items-center px-5 sm:px-4">
                        <div className="max-w-4xl mx-auto mb-10">
                            <h1 className="text-[28px] text-center font-semibold lg:text-[46px] leading-tight mb-4">
                                {blog.title}
                            </h1>
                            <p className="mt-3 text-base text-center text-white/70">
                                Home &gt;{" "}
                                <Link href="/blogs" className="hover:text-white transition-colors">
                                    Blog
                                </Link>{" "}
                                &gt; {blog.title}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Page Body ─── */}
            <section className="relative overflow-hidden bg-[#eef5fb] py-10 sm:py-12 lg:py-14">
                {/* grid background */}
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-60"
                        style={{
                            backgroundImage: `
                                linear-gradient(30deg,  rgba(150,185,211,.18) 1px, transparent 1px),
                                linear-gradient(150deg, rgba(150,185,211,.18) 1px, transparent 1px),
                                linear-gradient(90deg,  rgba(150,185,211,.12) 1px, transparent 1px)
                            `,
                            backgroundSize: "74px 42px,74px 42px,74px 42px",
                            backgroundPosition: "0 0,0 0,37px 21px",
                        }}
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

                    {/* ── Blog Header Card ── */}
                    <div className="rounded-[18px] border border-[#c2d3e4] bg-white p-5 sm:p-7 shadow-sm">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                            {/* Thumbnail */}
                            <div className="relative h-[190px] w-full flex-shrink-0 overflow-hidden rounded-[10px] sm:h-[190px] sm:w-[265px]">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    sizes="(max-width:640px) 100vw, 265px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Meta */}
                            <div className="flex flex-1 flex-col gap-4">
                                <h2 className="text-[19px] font-semibold leading-[1.3] text-[#111] sm:text-[23px] lg:text-[27px]">
                                    {blog.title}
                                </h2>

                                {/* Date badge */}
                                <div className="inline-flex w-fit items-center gap-2 rounded-[5px] bg-[linear-gradient(90deg,#7fd8df_0%,#48c0cd_50%,#2eacbf_100%)] px-4 py-[7px] text-[11px] font-semibold uppercase tracking-[0.07em] text-white">
                                    <span>{blog.type}</span>
                                    <span className="opacity-60">|</span>
                                    <span>{blog.date}</span>
                                    <span className="opacity-60">|</span>
                                    <span>{blog.time}</span>
                                </div>

                                {/* Social icons — colored filled circles */}
                                <div className="flex items-center gap-2.5">
                                    {SOCIAL_ICONS.map((icon) => (
                                        <a
                                            key={icon.label}
                                            href={icon.href}
                                            aria-label={icon.label}
                                            style={{ background: icon.bg }}
                                            className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full transition hover:opacity-80"
                                        >
                                            {icon.svg}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Content + Sticky TOC ── */}
                    <div className="mt-7 flex flex-col gap-6 lg:flex-row lg:items-start">

                        {/* Article — no card border, just white bg */}
                        <article className="flex-1 min-w-0 bg-white px-6 py-7 sm:px-9 rounded-[14px]">

                            {blog.intro && (
                                <p className="mb-7 text-[13px] leading-[1.8] text-[#3a4a5a]">
                                    {blog.intro}
                                </p>
                            )}

                            {blog.sections?.map((section) => (
                                <div key={section.id} id={section.id} className="mb-8 scroll-mt-28">

                                    {section.isImage ? (
                                        /* ── Info Graphic ── */
                                        <>
                                            <div className="relative h-[230px] w-full overflow-hidden rounded-[10px] sm:h-[290px]">
                                                <Image
                                                    src={section.imageUrl ?? blog.image}
                                                    alt={section.imageLabel ?? section.heading}
                                                    fill
                                                    sizes="100vw"
                                                    className="object-cover brightness-75"
                                                />
                                                <div className="absolute inset-0 bg-[#0a1640]/30" />
                                                {section.imageLabel && (
                                                    <span className="absolute left-4 top-4 text-[15px] font-semibold text-white">
                                                        {section.imageLabel}
                                                    </span>
                                                )}
                                            </div>
                                        </>
                                    ) : (
                                        /* ── Text section ── */
                                        <>
                                            <h2 className="mb-2 text-[18px] font-bold text-[#111] sm:text-[21px]">
                                                {section.heading}
                                            </h2>

                                            {section.content && (
                                                <p className="mb-2 whitespace-pre-line text-[13px] leading-[1.75] text-[#3a4a5a]">
                                                    {section.content}
                                                </p>
                                            )}

                                            {section.bullets && (
                                                <ul className="mt-2 space-y-[6px]">
                                                    {section.bullets.map((b, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex gap-2 text-[13px] leading-[1.7] text-[#3a4a5a]"
                                                        >
                                                            <span className="mt-[7px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#3a4a5a]" />
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {section.subItems && (
                                                <ul className="mt-2 space-y-[5px]">
                                                    {section.subItems.map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="text-[13px] leading-[1.7] text-[#3a4a5a]"
                                                        >
                                                            <span className="font-bold text-[#111]">
                                                                {item.label}
                                                            </span>{" "}
                                                            {item.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </article>

                        {/* ── Sticky TOC — teal box with white button items ── */}
                        <aside className="w-full lg:w-[262px] xl:w-[280px] flex-shrink-0">
                            <div className="sticky top-24 overflow-hidden rounded-[14px] shadow-md"
                                style={{
                                    background: "linear-gradient(145deg,#6dd4db 0%,#3cb8c9 40%,#28a8bc 100%)",
                                }}>
                                {/* Header */}
                                <div className="px-5 py-4">
                                    <h3 className="text-[15px] font-bold tracking-wide text-white">
                                        Table of Content
                                    </h3>
                                </div>

                                {/* Items */}
                                <div className="flex flex-col gap-[7px] px-3 pb-4">
                                    {tocSections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="block rounded-[7px] bg-white px-3 py-2.5 text-[11.5px] font-medium leading-[1.4] text-[#1e3a4a] transition hover:bg-[#e8f8fa] hover:text-[#17afa1]"
                                        >
                                            {section.heading}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* ── Load More — centered below content ── */}
                    <div className="mt-8 flex justify-center">
                        <button className="rounded-[6px] bg-[linear-gradient(90deg,#49c3b0_0%,#43bccb_50%,#5ca8ff_100%)] px-12 py-[10px] text-[13px] font-semibold text-white shadow-sm transition hover:opacity-90">
                            Load More
                        </button>
                    </div>

                    {/* ── Related Blogs Carousel ── */}
                    <div className="mt-10">
                        <div className="relative px-8">
                            {/* Prev */}
                            <button
                                onClick={handlePrev}
                                disabled={carouselStart === 0}
                                aria-label="Previous"
                                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-[#b0c4d8] bg-white shadow-sm transition hover:border-[#48c0cd] hover:text-[#48c0cd] disabled:opacity-30"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                                {visibleRelated.map((related) => (
                                    <Link
                                        key={related.id}
                                        href={`/blogs/${related.slug}`}
                                        className="group block overflow-hidden rounded-[16px] border border-[#b8cce0] bg-white shadow-sm transition hover:-translate-y-1"
                                    >
                                        <div className="relative h-[190px] overflow-hidden">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                sizes="(max-width:640px) 100vw,(max-width:1280px) 50vw,33vw"
                                                className="object-cover transition duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute bottom-0 left-0 flex items-center gap-1.5 bg-[linear-gradient(90deg,#7fd8df_0%,#48c0cd_50%,#2eacbf_100%)] px-3 py-[6px] text-[10px] font-semibold uppercase tracking-[0.06em] text-white">
                                                <span>{related.type}</span>
                                                <span className="opacity-70">|</span>
                                                <span>{related.date}</span>
                                                <span className="opacity-70">|</span>
                                                <span>{related.time}</span>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4 pt-3">
                                            <h3 className="line-clamp-2 text-[14px] font-semibold leading-[1.35] text-[#111]">
                                                {related.title}
                                            </h3>
                                            <p className="mt-1.5 line-clamp-3 text-[12px] leading-[1.6] text-[#555]">
                                                {related.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Next */}
                            <button
                                onClick={handleNext}
                                disabled={carouselStart >= relatedBlogs.length - 3}
                                aria-label="Next"
                                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-[#b0c4d8] bg-white shadow-sm transition hover:border-[#48c0cd] hover:text-[#48c0cd] disabled:opacity-30"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
