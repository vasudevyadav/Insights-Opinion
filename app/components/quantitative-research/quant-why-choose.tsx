"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function QuantWhyChoose({
  content,
}: {
  content?: {
    description: string;
    items: readonly { title: string; content: string }[];
  };
}) {
  const [openIndex, setOpenIndex] = useState(0);
  if (!content) return null;

  return (
    <section className="relative bg-[#edf6ff] py-10 lg:py-16">
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-0">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="max-w-[500px]">
            <p className="text-xl font-light leading-[0.95] tracking-[-0.02em] text-[#4a5565] lg:text-[45px]">
              Why Choose
            </p>
            <h2 className="bg-[linear-gradient(130deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] bg-clip-text text-2xl font-medium text-transparent lg:text-[45px] lg:leading-tight">
              Insight Opinion
            </h2>
            <p className="mt-2 text-sm leading-[1.6] text-[#5a6472] lg:mt-5 lg:text-base">
              {content.description}
            </p>

            <div className="mt-8 w-full">
              {content.items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.title} className="border-b border-black">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className={`flex w-full items-center justify-between px-5 py-5 text-left transition-all duration-200 ${isOpen
                        ? "bg-[#111b54] text-white"
                        : "bg-transparent text-[#374151] hover:bg-[#e8eef5]"
                        }`}
                    >
                      <div>
                        <h3
                          className={`text-sm font-semibold lg:text-[15px] ${isOpen ? "text-[#16af9f]" : "text-[#384250]"
                            }`}
                        >
                          {item.title}
                        </h3>
                        <div
                          className={`grid transition-all duration-500 ease-in-out motion-reduce:transition-none ${isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                          <div className="overflow-hidden">
                            <p className="mt-2 max-w-full text-xs leading-[1.55] text-[#d6dbef] lg:max-w-[320px] lg:text-sm">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </div>
                      <span className="ml-4 shrink-0">
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-500 motion-reduce:transition-none ${isOpen
                            ? "rotate-180 text-white"
                            : "text-[#4b5563]"
                            }`}
                        />
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden lg:min-h-130 lg:overflow-visible">
            <div className="relative inline-flex w-fit items-end justify-center overflow-hidden bg-transparent lg:overflow-visible">
              <Image
                src="/globe-image.png"
                alt=""
                width={420}
                height={420}
                className="globe-spin"
              />
              <Image
                src="/why-men.png"
                alt=""
                width={352}
                height={420}
                className="absolute -bottom-16 left-5 w-60 object-cover lg:-left-10 lg:-bottom-14 lg:w-[22rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
