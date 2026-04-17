"use client";

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
// @ts-ignore - no type declarations for 'aos'
import AOS from "aos";

type CaseStudy = {
  title: string;
  desc: string;
  image: string;
  accent: string;
  large?: boolean;
};

type CaseStudiesData = {
  headingTop?: string;
  headingBottom?: string;
  caseStudies?: readonly CaseStudy[];
};

type CaseCardProps = {
  title: string;
  desc: string;
  image: string;
  accent: string;
  large?: boolean;
  aos?: string;
  delay?: number;
};

type CaseStudiesProps = {
  data?: CaseStudiesData;
};

function CaseCard({
  title,
  desc,
  image,
  accent,
  large = false,
  aos = "fade-up",
  delay = 0,
}: CaseCardProps) {
  return (
    <div
      data-aos={aos}
      data-aos-delay={delay}
      data-aos-duration="950"
      data-aos-anchor-placement="top-bottom"
      className={`group relative h-[330px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20 hover:shadow-[0_12px_40px_rgba(0,200,255,0.08)] sm:h-[380px] md:h-[420px] ${
        large ? "lg:h-[430px]" : "lg:h-[495px]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-35 mix-blend-screen`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07102b]/95 via-[#07102b]/45 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-4 sm:p-5">
        <h3 className="line-clamp-2 whitespace-pre-line text-center text-[18px] font-semibold leading-snug tracking-wide text-[#16af9f] group-hover:text-white sm:text-[20px] lg:text-[22px]">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-center text-sm leading-[1.6] text-white/75 sm:text-[15px]">
          {desc}
        </p>

        <div className="mt-2 flex justify-end">
          <button className="text-white transition-colors duration-300 group-hover:text-cyan-300">
            <ArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies({ data }: CaseStudiesProps) {
  const caseStudies = data?.caseStudies || [];
  const leftCards = caseStudies.filter((_, i) => i % 2 === 0);
  const rightCards = caseStudies.filter((_, i) => i % 2 !== 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 250);

    return () => clearTimeout(timer);
  }, [caseStudies.length]);

  return (
    <div>
      <section className="relative overflow-hidden bg-[#edf6ff] py-8 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[130px]" />
        </div>

        <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
        <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 md:px-6">
          <div
            className="mb-8 lg:-mb-12"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h2 className="bg-[linear-gradient(120deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] bg-clip-text text-2xl font-normal text-transparent lg:text-3xl">
              {data?.headingTop || "Healthcare Market Research"}
            </h2>

            <h2 className="text-2xl font-normal text-black lg:text-[45px]">
              {data?.headingBottom || "Case Studies"}
            </h2>
          </div>

          <div className="lg:hidden">
            <div className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth">
              {caseStudies.map((item, i) => (
                <div
                  key={i}
                  className="min-w-full snap-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  data-aos-duration="900"
                >
                  <CaseCard {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden grid-cols-1 gap-10 md:grid-cols-2 lg:grid">
            <div className="flex flex-col gap-10 md:mt-28">
              {leftCards.map((item, i) => (
                <CaseCard
                  key={i}
                  {...item}
                  large={item.large ?? i === 0}
                  aos="fade-right"
                  delay={i * 140}
                />
              ))}
            </div>

            <div className="flex flex-col gap-10">
              {rightCards.map((item, i) => (
                <CaseCard
                  key={i}
                  {...item}
                  aos="fade-left"
                  delay={i * 140}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}