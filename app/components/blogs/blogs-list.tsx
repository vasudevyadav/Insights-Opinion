"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { type Blog } from "@/data/blogData";

const filters = ["All Blogs", "Blog"];

const tags = ["All"];

export default function BlogList({ blogs }: { blogs: Blog[] }) {
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
    let filtered = [...blogs];

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
          blog.tags.some((tag) => tag.toLowerCase().includes(q))
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
  }, [blogs, activeFilter, activeTag, searchTerm, sortBy]);

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
          <h2 className="mb-4 bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-[24px] font-semibold leading-tight tracking-[-0.02em] text-transparent sm:text-[28px] lg:text-[38px]">
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
                        ? "bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text font-semibold text-transparent"
                        : "text-[#6f7f93]"
                    }`}
                  >
                    {tag}
                  </button>

                  {index !== tags.length - 1 && (
                    <span className="text-[#b1bfd0]">|</span>
                  )}
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
                  className={`rounded-[4px] border px-4 py-[7px] text-[12px] font-medium transition ${
                    isActive
                      ? "border-[#5ec8d5] bg-[linear-gradient(90deg,#89dce3_0%,#57c8d2_48%,#35b2c3_100%)] text-white"
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
              <span>
                Filter: {activeTag !== "All" ? activeTag : activeFilter}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition ${
                  mobileFilterOpen ? "rotate-180" : ""
                }`}
              />
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
                    className={`block w-full rounded-md px-3 py-2 text-left text-sm transition ${
                      activeFilter === item && activeTag === "All"
                        ? "bg-[linear-gradient(90deg,#89dce3_0%,#57c8d2_48%,#35b2c3_100%)] text-white"
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

            <div className="hidden items-center self-start sm:self-auto lg:flex">
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
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group block overflow-hidden rounded-[19px] border border-[#9eafc4] bg-white shadow-none transition hover:-translate-y-1"
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
                    <span>{blog.date}</span>
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
              </Link>
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