"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "aos/dist/aos.css";

type FeatureCard = {
  title: string;
  icon: string;
  alt: string;
};

type StatItem = {
  value: string;
  label: string;
  valueColor?: string;
};

type HealthPanelData = {
  topLabel?: string;
  titleLine1?: string;
  titleLine2?: string;
  ctaText?: string;
  stats?: readonly StatItem[];
  bottomHighlight?: string;
  bottomText?: string;
  featureCards?: readonly FeatureCard[];
};

type HealthPanelProps = {
  data?: HealthPanelData;
};

export default function HealthPanel({ data }: HealthPanelProps) {
  const featureCards = data?.featureCards || [];
  const stats = data?.stats || [];

  return (
    <div className="bg-[#edf6ff]">
      <section className="relative overflow-hidden bg-[#edf6ff] py-14 pt-1 lg:py-10 lg:pt-10 min-h-[500px] lg:h-[650px]">
        <Image
          src="/market-research/healthcare-panel.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom lg:object-center"
        />
        <div className="relative z-10 mx-auto px-2 lg:px-0">
          <div className="relative rounded-[28px]">
            <div className="relative min-h-[570px] w-full lg:min-h-[670px]">
              <div className="relative z-20 flex min-h-[550px] items-center px-5 py-8 sm:px-8 lg:min-h-[570px] lg:px-14">
                <div className="ml-auto -mt-20 max-w-[360px] text-white lg:mr-14 lg:max-w-[600px]">
                  <p className="text-xl font-medium leading-none text-[#d8efff] lg:text-2xl">
                    {data?.topLabel || "Global"}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold leading-[1.08] sm:text-[45px]">
                    <span className="block text-[#58dff0]">
                      {data?.titleLine1 || "Healthcare Panels"}
                    </span>
                    <span className="block text-2xl font-medium text-[#eef8ff]">
                      {data?.titleLine2 || "for Research"}
                    </span>
                  </h3>

                  <p className="mt-4 inline-flex rounded-md bg-gradient-to-b from-[#2f8ed8] via-[#3fb6ff] to-[#3fb6ff] px-6 py-2 text-base font-medium text-white shadow-md backdrop-blur-sm">
                    {data?.ctaText || "Explain your access to"}
                  </p>

                  <div className="mt-7 flex w-10/12 items-center justify-between gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex items-center gap-6">
                        <div>
                          <p
                            className="text-4xl font-normal leading-none"
                            style={{ color: stat.valueColor || "#6fb0f3" }}
                          >
                            {stat.value}
                          </p>
                          <p className="mt-3 text-base leading-4 text-[#dcecff]">
                            {stat.label}
                          </p>
                        </div>

                        {index !== stats.length - 1 && (
                          <div>
                            <p className="h-12 w-[1px] bg-[#4fe3f1]" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-base font-medium leading-5">
                    <span className="text-[#05cdb8]">
                      {data?.bottomHighlight || "Healthcare specialists"}
                    </span>
                    <span className="ml-1 text-[#dcecff]">
                      {data?.bottomText || "across major therapeutic areas"}
                    </span>
                  </p>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-24 z-30 w-full">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={12}
                  loop={true}
                  speed={700}
                  autoplay={{
                    delay: 2200,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 2 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 2.8 },
                    1024: { slidesPerView: 4.2 },
                    1280: { slidesPerView: 5.2 },
                  }}
                  className="industry-feature-slider w-full"
                >
                  {featureCards.map((item, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                      <div className="relative mx-1 flex min-h-[70px] w-full items-center rounded-xl bg-white py-4 pl-16 pr-4 shadow-[0_10px_25px_rgba(15,23,42,0.12)] lg:min-h-[86px]">
                        <div className="absolute left-0 top-0 h-12 w-12 lg:h-14 lg:w-14">
                          <Image
                            src={item.icon}
                            alt={item.alt}
                            fill
                            className="object-contain"
                          />
                        </div>

                        <p className="line-clamp-2 pl-1 text-sm font-semibold leading-5 text-[#2f3850] lg:max-w-[180px] lg:line-clamp-3 lg:text-base">
                          {item.title}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute left-0 top-0 h-0 w-full lg:h-[110px]"
          style={{
            clipPath: "polygon(0 82%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </section>
    </div>
  );
}