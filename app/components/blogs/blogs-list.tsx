"use client";

import React, { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const blogData = [
    {
        id: 1,
        category: "Productivity",
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
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "What Modern Market Research Looks Like In 2026",
        description:
            "From qualitative interviews to AI-supported analysis, modern market research is becoming faster, sharper, and more action-focused.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
];

const filters = ["All Blogs", "Productivity", "Collaboration", "AI", "News"];

const tags = [
    "AI",
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
    const [activeFilter, setActiveFilter] = useState("Productivity");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("Newest");
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const filteredBlogs = useMemo(() => {
        let filtered = [...blogData];

        if (activeFilter !== "All Blogs") {
            filtered = filtered.filter((blog) => blog.category === activeFilter);
        }

        if (searchTerm.trim()) {
            const q = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (blog) =>
                    blog.title.toLowerCase().includes(q) ||
                    blog.description.toLowerCase().includes(q) ||
                    blog.category.toLowerCase().includes(q)
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
    }, [activeFilter, searchTerm, sortBy]);

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
                        {tags.map((tag, index) => (
                            <React.Fragment key={tag}>
                                <span className={tag === "B2B Research" ? "bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-transparent" : ""}>{tag}</span>
                                {index !== tags.length - 1 && <span className="text-[#b1bfd0]">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div className="hidden flex-wrap items-center gap-2 lg:flex">
                        {filters.map((item) => {
                            const isActive = activeFilter === item;
                            return (
                                <button
                                    key={item}
                                    onClick={() => setActiveFilter(item)}
                                    className={`rounded-[4px] border px-4 py-[7px] text-[12px] font-medium transition ${isActive
                                        ? "border-[#58c4d2] border-[#5ec8d5] bg-[linear-gradient(90deg,#89dce3_0%,#57c8d2_48%,#35b2c3_100%)] text-white"
                                        : "border-[#b9c7d7] bg-white text-black hover:border-[#58c4d2] hover:bg-[linear-gradient(90deg,#7dd6df_0%,#43bccb_45%,#27a9bc_100%)] bg-clip-text text-black"
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
                            <span>Filter: {activeFilter}</span>
                            <ChevronDown className={`h-4 w-4 transition ${mobileFilterOpen ? "rotate-180" : ""}`} />
                        </button>

                        {mobileFilterOpen && (
                            <div className="mt-2 space-y-2 rounded-md border border-[#dbe5f0] bg-white p-3 shadow-sm">
                                {filters.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            setActiveFilter(item);
                                            setMobileFilterOpen(false);
                                        }}
                                        className={`block w-full rounded-md px-3 py-2 text-left text-sm transition ${activeFilter === item
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

                        <div className="flex items-center gap-2 self-start sm:self-auto lg:block hidden">
                            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8c9bae]">
                                Sort
                            </span>
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="h-[40px] appearance-none rounded-[4px] border border-[#b9c7d7] bg-white px-3 pr-9 text-[13px] text-[#6d7d92] focus:border-[#58c4d2] focus:outline-none"
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
                        filteredBlogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="group overflow-hidden rounded-[19px] border border-[#9eafc4] bg-white shadow-none transition hover:-translate-y-1"
                            >
                                <div className="relative h-[220px] overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
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


            </div>
        </section>
    );
}
