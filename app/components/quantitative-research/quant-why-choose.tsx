"use client";

import Image from "next/image";
import type { WhyChooseSection } from "@/data/service-page-content";

function distributeFirstSectionItems(
  sections: readonly WhyChooseSection[]
): readonly WhyChooseSection[] {
  const firstSection = sections[0];
  if (!firstSection) return [];

  const items = firstSection.items;
  const firstSectionCount =
    items.length > 12 ? Math.ceil(items.length / 2) : Math.min(4, items.length);
  const firstItems = items.slice(0, firstSectionCount);
  const remainingItems = items.slice(firstSectionCount);

  if (!remainingItems.length) {
    return [{ ...firstSection, items: firstItems }];
  }

  const secondSection = sections[1] ?? {
    ...firstSection,
    layout: firstSection.layout === "left" ? "right" : "left",
  };

  return [
    { ...firstSection, items: firstItems },
    { ...secondSection, items: remainingItems },
  ];
}

export default function QuantWhyChoose({
  content,
  sections,
}: {
  content?: {
    description: string;
    items: readonly { title: string; content: string }[];
  };
  sections?: readonly WhyChooseSection[];
}) {
  const renderedSections: readonly WhyChooseSection[] = sections?.length
    ? distributeFirstSectionItems(sections)
    : content
      ? [
        {
          layout: "right",
          title: "Why Choose",
          highlight: "Insight Opinion",
          description: content.description,
          image: "/why-men.png",
          items: content.items,
        },
      ]
      : [];

  if (!renderedSections.length) return null;

  return (
    <div className="bg-[#edf6ff]">
      {renderedSections.map((section, sectionIndex) => {
        const imageOnLeft = section.layout === "left";
        const hideHeadingAndDescription = sectionIndex === 1;

        return (
          <section
            key={`${section.highlight}-${sectionIndex}`}
            className="relative overflow-hidden pt-4 lg:pt-8"
          >
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:mb-12 ">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                  {!hideHeadingAndDescription && (
                    <>
                      <p className="text-lg font-light leading-tight tracking-[-0.02em] text-[#4a5565] lg:text-4xl">
                        {section.title}
                      </p>
                      <h2 className="bg-[linear-gradient(130deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] bg-clip-text text-lg font-semibold text-transparent lg:text-4xl lg:leading-tight">
                        {section.highlight}
                      </h2>
                      <p className="mt-4 text-base font-medium leading-relaxed text-gray-700 lg:text-lg">
                        {section.description}
                      </p>
                    </>
                  )}

                  <ul
                    className={hideHeadingAndDescription ? "space-y-3" : "mt-5 space-y-3"}
                  >
                    {section.items.map((item) => (
                      <li
                        key={item.title}
                        className="group flex gap-3 rounded-xl bg-white/55 px-4 py-3 font-medium text-[#1e2746] transition duration-300 hover:translate-x-1 hover:bg-white hover:text-[#159f95] hover:shadow-sm"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1dc3b3] transition-transform group-hover:scale-125" />
                        <span>
                          {item.title}
                          {item.content && (
                            <span className="mt-1 block text-sm font-normal leading-relaxed text-[#566176]">
                              {item.content}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`relative flex min-h-[420px] ${imageOnLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <div className="absolute h-64 w-64 rounded-full bg-linear-to-br from-[#70c8f3]/35 to-[#1dc3b3]/30 blur-2xl sm:h-80 sm:w-80" />
                  <div className="relative h-[320px] w-full lg:h-[500px]">
                    <Image
                      src={section.image}
                      alt={`${section.title} ${section.highlight}`}
                      fill
                      unoptimized
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = "/quality/cati-online.png";
                      }}
                      className="object-contain drop-shadow-[0_18px_30px_rgba(25,70,105,0.16)] h-full "
                    />
                  </div>
                </div>
              </div>


            </div>
          </section>
        );
      })}
    </div>
  );
}
