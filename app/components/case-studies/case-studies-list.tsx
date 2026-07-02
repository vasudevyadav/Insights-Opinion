"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import type { CaseStudy } from "@/app/lib/case-studies-data";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

type CaseStudiesListProps = {
    caseStudies: CaseStudy[];
};

export default function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
    const [selectedCategory, setSelectedCategory] = useState("Any");
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const categories = useMemo(() => {
        return ["Any", ...Array.from(new Set(caseStudies.map((item) => item.category)))];
    }, [caseStudies]);

    const filteredCaseStudies = useMemo(() => {
        return caseStudies.filter((item) => {
            const matchesCategory =
                selectedCategory === "Any" || item.category === selectedCategory;
            const matchesSearch =
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [caseStudies, selectedCategory, search]);

    const visibleItems = filteredCaseStudies.slice(0, visibleCount);
    const hasMore = visibleCount < filteredCaseStudies.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
    };

    return (
        <section className="relative overflow-hidden bg-[#eef7ff] py-10 md:py-14 lg:py-16">
            <div className="relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

                {/* Filter + Search Row */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:mb-10">
                    {/* Category Dropdown */}
                    <div className="flex  gap-2 items-center sm:gap-3">
                        <label className="whitespace-nowrap text-sm font-medium text-[#19b5b4] sm:text-base">
                            Select Category
                        </label>
                        <div className="relative">
                            <select
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value);
                                    setVisibleCount(INITIAL_COUNT);
                                }}
                                className="h-[36px] w-full appearance-none rounded-[5px] border border-[#1e315e] bg-white px-3 pr-8 text-[13px] font-medium text-[#1f2d53] outline-none sm:w-[160px]"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1f2d53]" />
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setVisibleCount(INITIAL_COUNT);
                            }}
                            placeholder="Search"
                            className="h-[36px] w-full rounded-[5px] border border-[#1e315e] bg-white px-3 pr-10 text-[13px] text-[#1f2d53] outline-none placeholder:text-[#9aa4b5] sm:w-[200px]"
                        />
                        <Search className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#1f2d53]" />
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
                    {visibleItems.map((item) => (
                        <article
                            key={item.id}
                            className="group relative overflow-hidden rounded-t-[16px] rounded-bl-[4px] rounded-br-[36px] border border-[#1d315d] bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            {/* Card Image */}
                            <div className="relative h-[180px] w-full overflow-hidden rounded-t-[16px] rounded-br-[24px] sm:h-[190px] lg:h-[200px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Category Label — overlaps image bottom */}
                            <div className="absolute left-0 top-[156px] z-10 max-w-[80%] rounded-r-[5px] bg-gradient-to-r from-[#14b3a1] to-[#66b3ff] px-4 py-[6px] sm:top-[166px] lg:top-[176px]">
                                <h3 className="truncate text-[13px] font-semibold leading-tight text-white">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="px-4 pb-5 pt-9 sm:px-5">
                                <p className="min-h-[90px] text-[12px] leading-[1.6] text-[#1e2a4e] line-clamp-6 sm:text-[11px] lg:text-[12px]">
                                    {item.description}
                                </p>
                                <Link
                                    href={`/case-studies/${item.slug}`}
                                    className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest text-[#13b3ad] transition-opacity hover:opacity-70"
                                >
                                    Read More &gt;
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* No results */}
                {visibleItems.length === 0 && (
                    <div className="py-16 text-center text-sm text-[#1e2a4e]/60">
                        No case studies found.
                    </div>
                )}

                {/* Load More */}
                {hasMore && (
                    <div className="mt-10 flex justify-center md:mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="w-full rounded-[6px] bg-gradient-to-r from-[#18b7a4] to-[#5ba8fb] px-10 py-3 text-[15px] font-medium text-white shadow-md transition hover:opacity-90 active:scale-95 sm:w-auto sm:text-[16px]"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
