"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type ServiceCategory = "quantitative" | "qualitative" | "support";

const CATEGORY_CONTENT_IMAGES: Record<ServiceCategory, string> = {
  quantitative: "/home/quantitative-market.png",
  qualitative: "/home/Qualitative-service.png",
  support: "/home/support-services.png",
};

const CATEGORY_MOBILE_CONTENT_IMAGES: Record<ServiceCategory, string> = {
  quantitative: "/home/quantitative-market-mob.webp",
  qualitative: "/home/Qualitative-service-mob.webp",
  support: "/home/support-services-mob.webp",
};

const CATEGORY_ICON_POSITIONS: Record<
  ServiceCategory,
  readonly {
    left: string;
    top: string;
    mobileLeft: string;
    mobileTop: string;
  }[]
> = {
  quantitative: [
    { left: "20%", top: "12%", mobileLeft: "15%", mobileTop: "6%" },
    { left: "69%", top: "8%", mobileLeft: "64%", mobileTop: "2.5%" },
    { left: "39%", top: "38.5%", mobileLeft: "35%", mobileTop: "38%" },
    { left: "72%", top: "54%", mobileLeft: "66.5%", mobileTop: "55%" },
    { left: "12%", top: "61%", mobileLeft: "7%", mobileTop: "65%" },
    { left: "55%", top: "79%", mobileLeft: "50%", mobileTop: "85.5%" },
  ],
  qualitative: [
    { left: "11.5%", top: "22%", mobileLeft: "3%", mobileTop: "11%" },
    { left: "61%", top: "21%", mobileLeft: "56%", mobileTop: "11%" },
    { left: "11%", top: "62%", mobileLeft: "3%", mobileTop: "66%" },
    { left: "63%", top: "63.5%", mobileLeft: "58%", mobileTop: "67%" },
  ],
  support: [
    { left: "20%", top: "13%", mobileLeft: "15.5%", mobileTop: "6%" },
    { left: "69%", top: "9%", mobileLeft: "64%", mobileTop: "2%" },
    { left: "39%", top: "39%", mobileLeft: "35%", mobileTop: "38%" },
    { left: "12%", top: "61%", mobileLeft: "7%", mobileTop: "64%" },
    { left: "69%", top: "63%", mobileLeft: "64%", mobileTop: "67%" },
  ],
};

export default function QuantDataAnalysis({
  content,
  category,
}: {
  content?: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
  category: ServiceCategory;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (!content) return null;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#151b3c] lg:bg-[#edf6ff] lg:h-187.5"
    >
      <div className="absolute inset-0">
        <Image
          src="/home/services-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col px-4 py-10 sm:px-6 sm:py-14 lg:flex-row lg:items-center lg:px-8 lg:py-12 lg:pt-44">

        <div className="w-full lg:w-[60%] lg:max-w-[550px]">
          <h2 className="mb-5 text-[28px] font-light leading-tight text-white sm:text-[34px] lg:text-[40px]">

            <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text font-semibold text-transparent">
              {content.heading.split(" ").slice(0, 2).join(" ")}
            </span>
            {" "}
            {content.heading.split(" ").slice(2).join(" ")}

          </h2>

          <p className="mb-7 text-sm leading-7 text-white/80 sm:text-base sm:leading-8 lg:mb-12 lg:line-clamp-6">
            {content.paragraph1}
          </p>

          <p className="text-sm leading-7 text-white/80 sm:text-base sm:leading-8 lg:text-lg lg:line-clamp-6">
            {content.paragraph2}
          </p>
        </div>

        <div className="no-scrollbar relative mt-8 h-[320px] w-full overflow-x-auto overflow-y-hidden rounded-2xl sm:mt-10 sm:h-[520px] sm:overflow-hidden lg:mt-0 lg:h-full lg:w-[70%] lg:overflow-visible lg:rounded-none">
          <div className="relative h-full min-w-[500px] sm:min-w-0 sm:w-full">
            <Image
              src="/home/services-bg.png"
              alt=""
              fill
              sizes="(max-width: 639px) 680px, (max-width: 1023px) 100vw, 1px"
              className="hidden object-cover object-[62%_center]"
              unoptimized
            />
            <div className="absolute inset-0 bg-[#151b3c]/10 lg:hidden" />

            <Image
              src={CATEGORY_MOBILE_CONTENT_IMAGES[category]}
              alt=""
              fill
              sizes="500px"
              className="object-contain object-center sm:hidden"
              unoptimized
            />

            <Image
              src={CATEGORY_CONTENT_IMAGES[category]}
              alt=""
              fill
              sizes="(max-width: 1023px) 90vw, 40vw"
              className="hidden object-contain object-center sm:block lg:pl-20"
              unoptimized
            />

            {CATEGORY_ICON_POSITIONS[category].map((position, index) => (
              <Image
                key={`${category}-done-${index}`}
                src="/home/Group 3.png"
                alt=""
                width={38}
                height={38}
                aria-hidden="true"
                className={`service-done-position absolute hidden lg:block lg:h-8 lg:w-8 xl:h-9 xl:w-9 ${isVisible ? "service-done-icon" : "opacity-0"
                  }`}
                style={{
                  "--icon-left": position.left,
                  "--icon-top": position.top,
                  "--icon-mobile-left": position.mobileLeft,
                  "--icon-mobile-top": position.mobileTop,
                  animationDelay: `${index * 220}ms`,
                } as CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
