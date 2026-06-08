"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Blog } from "@/data/blogData";

interface BlogDetailProps {
  blog: Blog;
  relatedBlogs: Blog[];
}

export default function BlogDetail({ blog, relatedBlogs }: BlogDetailProps) {
  const [carouselStart, setCarouselStart] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const tocSections = useMemo(() => {
    if (!blog.htmlContent) {
      return blog.sections?.filter((s) => !s.isImage) ?? [];
    }

    const matches = [...blog.htmlContent.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];

    return matches.map((match, index) => ({
      id: `heading-${index}`,
      heading: match[1].replace(/<[^>]*>/g, ""),
    }));
  }, [blog.htmlContent, blog.sections]);

  const htmlWithIds = useMemo(() => {
    if (!blog.htmlContent) return "";

    let index = 0;

    return blog.htmlContent.replace(/<h2([^>]*)>/gi, () => {
      const id = `heading-${index}`;
      index++;
      return `<h2 id="${id}">`;
    });
  }, [blog.htmlContent]);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const maxStart = Math.max(0, relatedBlogs.length - itemsPerView);

  const handlePrev = () => {
    setCarouselStart((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCarouselStart((prev) => Math.min(maxStart, prev + 1));
  };

  return (
    <>
      <section className="bg-[#edf6fe]">
        <div className="relative mt-8 w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white lg:mt-20">
          <div className="relative z-10 mx-auto flex min-h-[350px] w-full max-w-7xl items-center px-5 pt-16 sm:px-4 lg:min-h-[500px] lg:pt-0">
            <div className="mx-auto mb-10 max-w-4xl">
              <h1 className="mb-4 line-clamp-3 text-center text-[28px] font-semibold leading-tight lg:text-[46px]">
                {blog.title}
              </h1>

              <p className="mt-3 line-clamp-2 text-center text-base text-white/70">
                Home &gt;{" "}
                <Link href="/blogs" className="transition-colors hover:text-white">
                  Blog
                </Link>{" "}
                &gt; {blog.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef5fb] py-10 sm:py-12 lg:py-14">
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
          <div className="rounded-[18px] border border-[#c2d3e4] bg-white px-4 py-5 shadow-sm lg:px-16 lg:py-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative h-[190px] w-full flex-shrink-0 overflow-hidden rounded-[10px] sm:w-[265px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width:640px) 100vw, 265px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <h2 className="text-[19px] font-semibold leading-[1.3] text-[#111] sm:text-[23px] lg:text-[27px]">
                  {blog.title}
                </h2>

                <div className="inline-flex w-fit items-center gap-2 rounded-[5px] bg-[linear-gradient(120deg,#16af9f_0%,#16af9f_50%,#74b9ff_100%)] px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.07em] text-white">
                  <span>{blog.type}</span>
                  <span className="opacity-60">|</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-6 lg:flex-row lg:items-start">
            <article className="min-w-0 flex-1 rounded-[14px] bg-white px-6 py-7 sm:px-9">
              {blog.htmlContent ? (
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: htmlWithIds }}
                />
              ) : (
                <>
                  {blog.intro && (
                    <p className="mb-7 text-base leading-[1.8] text-[#3a4a5a]">
                      {blog.intro}
                    </p>
                  )}

                  {blog.sections?.map((section) => (
                    <div key={section.id} id={section.id} className="mb-8 scroll-mt-28">
                      {section.isImage ? (
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
                      ) : (
                        <>
                          <h2 className="mb-2 text-[18px] font-semibold text-[#111] lg:text-2xl">
                            {section.heading}
                          </h2>

                          {section.content && (
                            <p className="mb-2 whitespace-pre-line text-base leading-[1.75] text-[#3a4a5a]">
                              {section.content}
                            </p>
                          )}

                          {section.bullets && (
                            <ul className="mt-2 space-y-[6px]">
                              {section.bullets.map((bullet, index) => (
                                <li
                                  key={index}
                                  className="flex gap-2 text-base leading-[1.7] text-[#3a4a5a]"
                                >
                                  <span className="mt-[7px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#3a4a5a]" />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          )}

                          {section.subItems && (
                            <ul className="mt-2 space-y-[5px]">
                              {section.subItems.map((item, index) => (
                                <li
                                  key={index}
                                  className="text-base leading-[1.7] text-[#3a4a5a]"
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
                </>
              )}
            </article>

            <aside className="w-full flex-shrink-0 lg:w-[262px] xl:w-[350px]">
              <div
                className="sticky top-24 overflow-hidden rounded-[14px] shadow-md"
                style={{
                  background:
                    "linear-gradient(145deg,#16af9f 0%,#16af9f 40%,#4f9bdd 100%)",
                }}
              >
                <div className="px-5 py-4">
                  <h3 className="text-xl font-semibold tracking-wide text-white">
                    Table of Content
                  </h3>
                </div>

                <div className="flex flex-col gap-[7px] px-3 pb-4">
                  {tocSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-[7px] border border-white bg-transparent px-4 py-3 text-sm font-medium leading-[1.4] text-white transition hover:bg-white hover:font-semibold hover:text-black"
                    >
                      {section.heading}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {relatedBlogs.length > 0 && (
            <div className="mt-10">
              <div className="relative px-9">
                <button
                  onClick={handlePrev}
                  disabled={carouselStart === 0}
                  aria-label="Previous"
                  className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#b0c4d8] bg-white shadow-sm transition hover:border-[#48c0cd] hover:text-[#48c0cd] disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${
                        carouselStart * (100 / itemsPerView)
                      }%)`,
                    }}
                  >
                    {relatedBlogs.map((related) => (
                      <div
                        key={related.id}
                        className="flex-shrink-0 px-2.5"
                        style={{ width: `${100 / itemsPerView}%` }}
                      >
                        <Link
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
                            </div>
                          </div>

                          <div className="px-4 pb-4 pt-3">
                            <h3 className="my-1 line-clamp-2 text-lg font-semibold leading-[1.35] text-black">
                              {related.title}
                            </h3>

                            <p className="mt-1.5 line-clamp-3 text-sm leading-[1.6] text-[#555]">
                              {related.description}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  disabled={carouselStart >= maxStart}
                  aria-label="Next"
                  className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#b0c4d8] bg-white shadow-sm transition hover:border-[#48c0cd] hover:text-[#48c0cd] disabled:opacity-30"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}