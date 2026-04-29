"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";

const blogData = [
    {
        id: 1,
        category: "Productivity",
        tags: ["B2B Research", "Market Research", "Global Panel"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "From Local To Global: Using Research To Identify High-Growth Regions",
        description:
            "Expanding into new countries is exciting and risky. The fastest way to spot where you should read signals correctly and scale only where it will travel.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 2,
        category: "Collaboration",
        tags: ["B2B Research", "FGDs", "Qualitative Research"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "How Research Helps Teams Build Smarter Market Entry Plans",
        description:
            "Good decisions need more than assumptions. Research helps teams compare regions, test demand, and move forward with sharper confidence.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        category: "News",
        tags: ["Data Processing & Analytics", "CATI", "Online Surveys"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "Using Data Processing To Support Better Global Expansion",
        description:
            "Data-backed planning reduces guesswork. With the right signals, brands can identify patterns, validate demand, and avoid costly expansion mistakes.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 4,
        category: "AI",
        tags: ["Insight", "Market Research", "Quantitative Research"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "How AI Speeds Up Research Analysis For Business Decisions",
        description:
            "AI can support faster research interpretation, uncovering patterns and helping teams move from insight to action with better speed.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 5,
        category: "Productivity",
        tags: ["Online Surveys", "CAPI", "Survey Audit", "Programming & Hosting"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "Survey Design Tips For Better Response Quality",
        description:
            "A better survey creates better answers. Small changes in wording, structure, and flow can significantly improve your research quality.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 6,
        category: "News",
        tags: ["Mystery Shopping", "IDIs", "Translation", "CATI Survey"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "What Modern Market Research Looks Like In 2026",
        description:
            "From qualitative interviews to AI-supported analysis, modern market research is becoming faster, sharper, and more action-focused.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 7,
        category: "Collaboration",
        tags: ["Online Community Building", "Qualitative Research", "FGDs"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "Building Online Communities For Richer Consumer Insights",
        description:
            "Online communities give brands a continuous feedback loop. They allow deeper engagement, real-time reactions, and stronger qualitative insights.",
        image:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 8,
        category: "News",
        tags: ["CATI Survey", "CAPI", "Data Processing & Analytics"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "CATI Surveys Still Work — Here Is Why They Remain Effective",
        description:
            "Phone-based interviews remain one of the most reliable methods for reaching specific demographics and collecting structured data at scale.",
        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 9,
        category: "Productivity",
        tags: ["Programming & Hosting", "Survey Audit", "Online Surveys"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "How Proper Survey Programming Reduces Drop-Off Rates",
        description:
            "Survey logic, routing, and mobile-first design all play a role in keeping respondents engaged from the first question to the last.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
];

const filters = ["All Blogs", "Productivity", "Collaboration", "AI", "News"];

const tags = [
    "All",
    "B2B Research",
    "CAPI",
    "CATI",
    "CATI Survey",
    "Data Processing & Analytics",
    "FGDs",
    "Global Panel",
    "IDIs",
    "Insight",
    "Market Research",
    "Mystery Shopping",
    "Online Community Building",
    "Online Surveys",
    "Programming & Hosting",
    "Qualitative Research",
    "Quantitative Research",
    "Survey Audit",
    "Translation",
];

export default function BlogList() {
    const [activeFilter, setActiveFilter] = useState("All Blogs");
    const [activeTag, setActiveTag] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("Newest");
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(9);

    const handleFilterClick = (item: string) => {
        setActiveFilter(item);
        setActiveTag("All");
        setVisibleCount(9);
    };

    const handleTagClick = (tag: string) => {
        setActiveTag(tag);
        setActiveFilter("All Blogs");
        setVisibleCount(9);
    };

    const filteredBlogs = useMemo(() => {
        let filtered = [...blogData];

        if (activeTag !== "All") {
            filtered = filtered.filter((blog) => blog.tags.includes(activeTag));
        } else if (activeFilter !== "All Blogs") {
            filtered = filtered.filter((blog) => blog.category === activeFilter);
        }

        if (searchTerm.trim()) {
            const q = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (blog) =>
                    blog.title.toLowerCase().includes(q) ||
                    blog.description.toLowerCase().includes(q) ||
                    blog.category.toLowerCase().includes(q) ||
                    blog.tags.some((t) => t.toLowerCase().includes(q))
            );
        }

        if (sortBy === "Newest") {
            filtered.sort((a, b) => b.id - a.id);
        } else if (sortBy === "Oldest") {
            filtered.sort((a, b) => a.id - b.id);
        } else if (sortBy === "A-Z") {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        return filtered;
    }, [activeFilter, activeTag, searchTerm, sortBy]);

    return (
        <section className="relative overflow-hidden bg-[#eef5fb] py-10 sm:py-12 lg:py-14">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-70"
                    style={{
                        backgroundImage: `
              linear-gradient(30deg, rgba(150,185,211,0.18) 1px, transparent 1px),
              linear-gradient(150deg, rgba(150,185,211,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(150,185,211,0.12) 1px, transparent 1px)
            `,
                        backgroundSize: "74px 42px, 74px 42px, 74px 42px",
                        backgroundPosition: "0 0, 0 0, 37px 21px",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[980px] text-center">
                    <h2 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-transparent bg-clip-text text-transparent sm:text-[28px] lg:text-[38px] mb-4">
                        Explore Our Market Research Industry Guide
                    </h2>

                    <div className="mx-auto mt-3 flex max-w-5xl flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[11px] font-medium leading-5 text-[#6f7f93] sm:text-sm">
                        {tags.map((tag, index) => {
                            const isActiveTag = activeTag === tag;
                            return (
                                <React.Fragment key={tag}>
                                    <button
                                        onClick={() => handleTagClick(tag)}
                                        className={`transition-colors hover:text-[#17afa1] ${
                                            isActiveTag
                                                ? "bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-transparent font-semibold"
                                                : "text-[#6f7f93]"
                                        }`}
                                    >
                                        {tag}
                                    </button>
                                    {index !== tags.length - 1 && <span className="text-[#b1bfd0]">|</span>}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div className="hidden flex-wrap items-center gap-2 lg:flex">
                        {filters.map((item) => {
                            const isActive = activeFilter === item && activeTag === "All";
                            return (
                                <button
                                    key={item}
                                    onClick={() => handleFilterClick(item)}
                                    className={`rounded-[4px] border px-4 py-[7px] text-[12px] font-medium transition ${isActive
                                        ? "border-[#58c4d2] border-[#5ec8d5] bg-[linear-gradient(90deg,#89dce3_0%,#57c8d2_48%,#35b2c3_100%)] text-white"
                                        : "border-[#b9c7d7] bg-white text-black hover:border-[#58c4d2]"
                                        }`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileFilterOpen((prev) => !prev)}
                            className="flex w-full items-center justify-between rounded-md border border-[#b9c7d7] bg-white px-4 py-3 text-sm font-medium text-[#66778d]"
                        >
                            <span>Filter: {activeTag !== "All" ? activeTag : activeFilter}</span>
                            <ChevronDown className={`h-4 w-4 transition ${mobileFilterOpen ? "rotate-180" : ""}`} />
                        </button>

                        {mobileFilterOpen && (
                            <div className="mt-2 space-y-2 rounded-md border border-[#dbe5f0] bg-white p-3 shadow-sm">
                                {filters.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            handleFilterClick(item);
                                            setMobileFilterOpen(false);
                                        }}
                                        className={`block w-full rounded-md px-3 py-2 text-left text-sm transition ${activeFilter === item && activeTag === "All"
                                            ? "border-[#5ec8d5] bg-[linear-gradient(90deg,#89dce3_0%,#57c8d2_48%,#35b2c3_100%)] text-white"
                                            : "bg-[#f5f9fd] text-[#66778d] hover:bg-[#eaf4fb]"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row xl:items-center">
                        <div className="relative w-full sm:w-[300px]">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#78879a]" />
                            <input
                                type="text"
                                placeholder="Search blog posts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="h-[40px] w-full rounded-[4px] border border-[#b9c7d7] bg-white pl-10 pr-4 text-[13px] text-[#6d7d92] placeholder:text-[#8fa0b3] focus:border-[#58c4d2] focus:outline-none"
                            />
                        </div>

                        <div className="hidden lg:flex items-center self-start sm:self-auto">
                            <div className="relative">
                                <span className="absolute -top-2 left-2 z-10 bg-white px-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#58c4d2]">
                                    Sort
                                </span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="h-[40px] appearance-none rounded-[4px] border border-[#b9c7d7] bg-white pl-3 pr-9 text-[13px] text-[#6d7d92] focus:border-[#58c4d2] focus:outline-none"
                                >
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                    <option>A-Z</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7c8da3]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.slice(0, visibleCount).map((blog) => (
                            <article
                                key={blog.id}
                                className="group overflow-hidden rounded-[19px] border border-[#9eafc4] bg-white shadow-none transition hover:-translate-y-1"
                            >
                                <div className="relative h-[220px] overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute bottom-0 left-0 flex items-center gap-2 bg-[linear-gradient(90deg,#7fd8df_0%,#48c0cd_50%,#2eacbf_100%)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                                        <span>{blog.type}</span>
                                        <span className="opacity-80">|</span>
                                        <span>
                                            {blog.date} {blog.time}
                                        </span>
                                    </div>
                                </div>

                                <div className="px-4 pb-4 pt-3">

                                    <h3 className="mt-1.5 line-clamp-2 text-[18px] font-semibold leading-[1.35] text-black">
                                        {blog.title}
                                    </h3>

                                    <p className="mt-2 line-clamp-3 text-xs leading-[1.55] text-black">
                                        {blog.description}
                                    </p>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-full rounded-xl border border-dashed border-[#b8c6d8] bg-white/70 px-6 py-12 text-center text-[#5f6f85]">
                            No blogs found for your current filter or search.
                        </div>
                    )}
                </div>

                {filteredBlogs.length > visibleCount && (
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 9)}
                            className="rounded-[6px] bg-[linear-gradient(90deg,#49c3b0_0%,#43bccb_50%,#5ca8ff_100%)] px-10 py-3 text-[14px] font-semibold text-white shadow-sm transition hover:opacity-90"
                        >
                            Load More
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}
