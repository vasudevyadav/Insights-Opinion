"use client";

import Link from "next/link";

export default function QuantMethodCta() {
  return (
    <section className="relative overflow-hidden bg-[#edf6ff] pt-10 lg:pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#35d0c7]/10 blur-3xl" />
        <div className="absolute -right-24 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#5abff8]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6">
        <h2 className="text-2xl font-semibold leading-[1.25] lg:text-4xl">
          <span className="bg-gradient-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
            Not sure which method fits your study?
          </span>
        </h2>
        <p className="mt-2 text-sm leading-[1.7] text-[#4a5568] lg:text-lg">
          Speak with our team and we will advise on the right approach for your audience and objectives.
        </p>
        <div className="mt-4">
          <Link
            href="#"
            className="inline-block rounded-full bg-gradient-to-r from-[#35d0c7] to-[#5abff8] px-12 py-3 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(53,208,199,0.3)] transition hover:opacity-90 hover:scale-[1.02] sm:text-base"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
