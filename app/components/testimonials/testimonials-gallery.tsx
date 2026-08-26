"use client";

import Image from "next/image";
import { Play, Quote, X } from "lucide-react";
import { useState } from "react";
import type { Testimonial, VideoTestimonial } from "@/app/lib/testimonial-api";

type Filter = "text" | "video";

type TestimonialsGalleryProps = {
  testimonials: Testimonial[];
};

function isEmbedUrl(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be") || url.includes("vimeo.com");
}

export default function TestimonialsGallery({
  testimonials,
}: TestimonialsGalleryProps) {
  const [filter, setFilter] = useState<Filter>("text");
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const visibleTestimonials = testimonials.filter(
    (item) => item.type === filter
  );
  const availableFilters = (["text", "video"] as Filter[]).filter((type) =>
    testimonials.some((item) => item.type === type)
  );

  return (
    <section className="quality-hex-bg px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="site-section-title font-light text-[#2f3643]">
            What Our Clients Say
          </h2>
          <h3 className="site-section-title quality-gradient-text mt-1 font-semibold">
            Stories of Partnership and Impact
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#4a5268] sm:text-base">
            Hear directly from clients who rely on Insights Opinion for
            dependable research, responsive teams, and practical insights.
          </p>
        </div>

        {availableFilters.length > 1 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
          {availableFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => { setFilter(item); setShowAllMobile(false); }}
              className={`rounded-full px-6 py-2 text-sm font-medium capitalize transition ${
                filter === item
                  ? "bg-gradient-to-r from-[#14b8a6] to-[#59a9ee] text-white shadow-md"
                  : "border border-[#b9d5e7] bg-white/70 text-[#18213f] hover:border-[#20b7a6]"
              }`}
            >
              {`${item} Stories`}
            </button>
          ))}
          </div>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((item, index) =>
            item.type === "video" ? (
              <article
                key={item.id}
                className={`${index >= 3 && !showAllMobile ? "hidden md:block" : "block"} group overflow-hidden rounded-xl border border-[#c9dcec] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
              >
                <button
                  type="button"
                  onClick={() => item.videoUrl && setActiveVideo(item)}
                  disabled={!item.videoUrl}
                  className="relative block h-[230px] w-full overflow-hidden text-left"
                  aria-label={
                    item.videoUrl
                      ? `Play testimonial from ${item.name}`
                      : `Video placeholder for ${item.name}`
                  }
                >
                  <Image
                    src={item.poster}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#11183f]/85 via-[#11183f]/20 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#18b7a7] shadow-lg">
                    <Play size={27} fill="currentColor" />
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#18b7a7] px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                    Video Story
                  </span>
                </button>

                <div className="p-5">
                  <h4 className="text-lg font-semibold leading-7 text-[#171e43]">
                    {item.title}
                  </h4>
                  <div className="mt-4 flex items-center gap-3 border-t border-[#e2ebf2] pt-4">
                    <div>
                      <p className="font-semibold text-[#151b48]">{item.name}</p>
                      <p className="mt-1 text-xs leading-5 text-[#667085]">
                        {item.role}{item.company ? `, ${item.company}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ) : (
              <article
                key={item.id}
                className={`${index >= 3 && !showAllMobile ? "hidden md:flex" : "flex"} group min-h-[360px] flex-col rounded-xl border border-[#c9dcec] bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#151b48] hover:bg-[#151b48] hover:text-white hover:shadow-xl`}
              >
                <Quote
                  size={42}
                  className="text-[#20b7a6]"
                  fill="currentColor"
                />
                <p className="mt-6 flex-1 text-sm leading-7 text-[#344054] transition group-hover:text-white/90 sm:text-base">
                  “{item.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#dce6ef] pt-5 group-hover:border-white/20">
                  <div>
                    <p className="font-semibold text-[#151b48] transition group-hover:text-white">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#667085] transition group-hover:text-white/70">
                      {item.role}{item.company ? `, ${item.company}` : ""}
                    </p>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
        {visibleTestimonials.length > 3 && !showAllMobile && (
          <div className="mt-8 text-center md:hidden">
            <button type="button" onClick={() => setShowAllMobile(true)} className="rounded-full bg-gradient-to-r from-[#14b8a6] to-[#59a9ee] px-7 py-2.5 text-sm font-semibold text-white shadow-md">
              View More
            </button>
          </div>
        )}
      </div>

      {activeVideo?.videoUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-[#11183f] p-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#151b48]"
              aria-label="Close video"
            >
              <X size={22} />
            </button>

            <div className="aspect-video overflow-hidden rounded-lg">
              {isEmbedUrl(activeVideo.videoUrl) ? (
                <iframe
                  src={activeVideo.videoUrl}
                  title={activeVideo.title}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeVideo.videoUrl}
                  poster={activeVideo.poster}
                  controls
                  autoPlay
                  className="h-full w-full bg-black object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
