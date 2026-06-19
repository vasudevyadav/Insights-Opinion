"use client";

import Image from "next/image";
import Link from "next/link";

const badges = [
  { label: "Online Surveys", posClass: "left-[4%] top-[34%]" },
  { label: "CAPI", posClass: "right-[4%] top-[18%]" },
  { label: "CLT", posClass: "right-[2%] top-[54%]" },
  { label: "CATI", posClass: "left-[8%] bottom-[20%]" },
];

export default function QuantDetailsHero() {
  return (
    <section className="relative h-125 bg-[#edf6ff] sm:h-145 lg:h-175">

      <div className="absolute inset-0">
        <Image
          src="/quantity-details/quantity-details-hero.png"
          alt=""
          fill
          priority
          className="object-cover lg:object-bottom object-left"
        />
      </div>



      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-12 lg:px-1 lg:pt-0">

        <div className="grid min-h-[420px] grid-cols-1 items-center gap-6 lg:grid-cols-2">

          {/* LEFT TEXT */}
          <div className="py-8 lg:py-16 lg:pt-32">
            <h1 className="text-4xl font-extrabold leading-[1.05] lg:text-5xl bg-linear-to-r from-[#1dc3b3] via-[#1dc3b3] to-[#3c8df6] bg-clip-text text-transparent">
              CATI Market
              Research Services
            </h1>


            <p className="mt-5 max-w-[470px] text-sm leading-10 text-white lg:text-3xl">
              Accurate Human-Led
              Data Collection
            </p>

            <p className="mt-5 max-w-[470px] text-sm leading-8 text-white lg:text-lg">
              Conduct smarter phone surveys with real-time,
              reliable insights powered by expert interviewers
              and advanced CATI technology.
            </p>


            <div className="mt-5 space-y-2">


            </div>

            <div className="mt-8">
              <Link
                href="#"
                className="inline-block rounded-full bg-[#1dc3b3] px-10 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(29,195,179,0.4)] transition hover:scale-[1.02] hover:opacity-90 sm:text-base"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
