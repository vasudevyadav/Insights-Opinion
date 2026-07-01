"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = Array.from({ length: 4 }, () => ({
  quote:
    "Their detailed surveys gave us a clear understanding of our guests' preferences, leading to more personalized services and higher customer satisfaction. We were able to adjust our approach with confidence.",
  author: "THOMAS",
  role: "Director, Clifton",
}));

export default function TeamTestimonials() {
  return (
    <section className="quality-hex-bg overflow-hidden px-4 pb-12 sm:px-6 lg:px-5 lg:pb-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 flex items-end justify-between gap-5 sm:mb-7">
          <div>
            <h2 className="site-subsection-title font-light text-[#222b49]">
              What Healthcare Clients Say
            </h2>
            <h3 className="site-section-title quality-gradient-text mt-1 font-semibold">
              About Us
            </h3>
            <p className="mt-2 text-xs leading-5 text-[#2f3547] sm:text-sm">
              Feedback from clients who partner with Insights Opinion.
            </p>
          </div>
        </div>

        <Swiper 
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".team-testimonial-prev",
            nextEl: ".team-testimonial-next",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          rewind
          speed={700}
          spaceBetween={12}
          breakpoints={{
            0: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            1100: { slidesPerView: 2.45 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <article className="group min-h-[260px] border border-[#1a214d] bg-white/40 p-4 text-[#202845] transition duration-300 hover:bg-[#151a45] hover:text-white sm:min-h-[245px] sm:p-6">
                <p className="text-xs leading-5 sm:text-sm sm:leading-6">
                  <span className="mr-2 text-xl font-semibold">“</span>
                  {item.quote}
                  <span className="ml-2 text-xl font-semibold">”</span>
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-3 text-xs sm:mt-6 sm:gap-8 sm:text-sm"
                >
                  Read Full Customer Story <ArrowRight size={20} />
                </a>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 sm:mt-6 sm:flex-nowrap sm:gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-12 w-12 shrink-0 rounded-full bg-[#151a45] group-hover:bg-white sm:h-14 sm:w-14" />
                    <div className="text-xs">
                      <p>{item.author}</p>
                      <p className="opacity-75">{item.role}</p>
                    </div>
                  </div>
                  <Image
                    src="/inshite-sing.png"
                    alt="Clifton"
                    width={105}
                    height={38}
                    className="w-20 object-contain group-hover:invert sm:w-24"
                  />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-5 flex justify-center gap-3 sm:absolute sm:right-0 sm:top-0 sm:mt-0">
          <button
            className="team-testimonial-prev flex h-10 w-10 items-center justify-center rounded-full border border-[#151b48] text-[#151b48] transition hover:bg-[#151b48] hover:text-white sm:h-11 sm:w-11"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            className="team-testimonial-next flex h-10 w-10 items-center justify-center rounded-full border border-[#151b48] text-[#151b48] transition hover:bg-[#151b48] hover:text-white sm:h-11 sm:w-11"
            aria-label="Next testimonial"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
