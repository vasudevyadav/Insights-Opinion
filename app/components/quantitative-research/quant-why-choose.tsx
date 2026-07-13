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
            <p className="my-2 text-base leading-[1.6] text-gray-700 lg:mt-5 lg:text-lg">
              {content.description}
            </p>

            <div className=" w-full">
              {content.items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.title}>
                    <ul className="list-disc pl-4 my-4">
                      <li className="list-item text-black font-medium hover:text-[#59b0ae] hover:font-semibold">
                        <div className="flex w-full items-center justify-between">
                          {item.title}
                        </div>
                      </li>
                    </ul>
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
