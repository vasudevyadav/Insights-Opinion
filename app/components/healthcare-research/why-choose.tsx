"use client";

import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

type AccordionItem = {
  title: string;
  content: string;
  image?: string;
};

type WhyChooseSection = {
  headingLight: string;
  headingBold: string;
  description: string;
  image: string;
  accordionData: readonly AccordionItem[];
  useAnimatedFigure?: boolean;
};

type WhyChooseHealthData = {
  sections?: readonly WhyChooseSection[];
};

type WhyChooseHealthProps = {
  data?: WhyChooseHealthData;
};

function Accordion({
  accordionData,
  openIndex,
  setOpenIndex,
}: {
  accordionData: readonly AccordionItem[];
  openIndex: number;
  setOpenIndex: (index: number) => void;
}) {
  return (
    <div className="mt-8 w-full">
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.title} className="border-b border-black">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className={`flex w-full items-center justify-between px-5 py-5 text-left transition-all duration-200 ${
                isOpen
                  ? "bg-[#111b54] text-white"
                  : "bg-transparent text-[#374151] hover:bg-[#e8eef5]"
              }`}
            >
              <div>
                <h3
                  className={`text-sm font-semibold lg:text-lg ${
                    isOpen ? "text-[#16af9f]" : "text-[#384250]"
                  }`}
                >
                  {item.title}
                </h3>

                {isOpen && (
                  <p className="mt-2 max-w-[300px] text-xs leading-[1.55] text-[#d6dbef] lg:text-sm">
                    {item.content}
                  </p>
                )}
              </div>

              <span className="ml-4 shrink-0">
                {isOpen ? (
                  <ChevronUp size={18} className="text-white" />
                ) : (
                  <ChevronDown size={18} className="text-[#4b5563]" />
                )}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

function AnimatedWhyChooseFigure() {
  return (
    <div className="relative inline-flex w-fit items-end justify-center overflow-visible bg-transparent">
      <Image
        src="/globe-image.png"
        alt="Animated figure"
        width={420}
        height={420}
        className="globe-spin"
      />
      <Image
        src="/why-men.png"
        alt="Animated figure"
        width={352}
        height={420}
        className="absolute -bottom-16 left-5 w-60 object-cover lg:-left-10 lg:-bottom-14 lg:w-[22rem]"
      />
    </div>
  );
}

export default function WhyChooseHealth({ data }: WhyChooseHealthProps) {
  const sectionsData = data?.sections || [];
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  useEffect(() => {
    setOpenIndexes(sectionsData.map(() => 0));
  }, [sectionsData]);

  const handleSetOpenIndex = (sectionIndex: number, index: number) => {
    setOpenIndexes((prev) => {
      const updated = [...prev];
      updated[sectionIndex] = index;
      return updated;
    });
  };

  return (
    <section className="relative bg-[#edf6ff]">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 lg:px-0 lg:py-16">
        <div className="space-y-24 lg:space-y-20">
          {sectionsData.map((section, sectionIndex) => {
            const isEven = sectionIndex % 2 === 0;
            const activeIndex = openIndexes[sectionIndex] ?? 0;

            return (
              <div
                key={sectionIndex}
                className="grid items-center gap-10 lg:grid-cols-[1.02fr_1fr]"
              >
                <div
                  className={`${isEven ? "lg:order-1" : "lg:order-2"} max-w-[500px]`}
                >
                  <p className="text-2xl font-light leading-[0.95] tracking-[-0.02em] text-[#4a5565] lg:text-[45px]">
                    {section.headingLight}
                  </p>

                  <h2 className="bg-[linear-gradient(130deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] bg-clip-text text-2xl font-medium text-transparent lg:text-[45px] lg:leading-tight">
                    {section.headingBold}
                  </h2>

                  <p className="mt-2 text-sm leading-[1.6] text-[#5a6472] lg:mt-5 lg:text-base lg:text-lg">
                    {section.description}
                  </p>

                  <Accordion
                    accordionData={section.accordionData}
                    openIndex={activeIndex}
                    setOpenIndex={(index) =>
                      handleSetOpenIndex(sectionIndex, index)
                    }
                  />
                </div>

                <div
                  className={`relative flex min-h-[320px] items-center justify-center lg:min-h-[520px] ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative flex w-full items-center justify-center overflow-visible bg-transparent px-6 lg:px-0">
                    {section.useAnimatedFigure ? (
                      <AnimatedWhyChooseFigure />
                    ) : (
                      <Image
                        src={section.accordionData[activeIndex]?.image || section.image}
                        alt="Section visual"
                        width={520}
                        height={520}
                        className="relative z-10 h-auto w-full p-8 object-contain transition-all duration-300"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}