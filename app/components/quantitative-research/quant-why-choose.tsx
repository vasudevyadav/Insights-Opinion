"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

const accordionData = [
  {
    title: "Fast Panel Delivery & Sample Access",
    content:
      "Tap into 8M+ verified respondents across 100+ countries. We deliver qualified samples fast — whether for online CAWI, telephone CATI, or in-person CLT studies.",
  },
  {
    title: "Custom Quantitative Research Design",
    content:
      "Every study is designed from scratch. We develop questionnaires tailored to your research objectives, screening criteria, and market — with skip logic, quota management, and pilot testing built in.",
  },
  {
    title: "Experienced Quantitative Analysts",
    content:
      "Our in-house analysts are trained in advanced statistical methods — regression, factor analysis, conjoint, and predictive modelling — delivering findings you can present to stakeholders with confidence.",
  },
  {
    title: "HIPAA & GDPR Compliant Research Practices",
    content:
      "Data privacy is non-negotiable. We operate to HIPAA and GDPR standards across all quantitative research projects — with secure data transfer, anonymisation protocols, and transparent audit trails.",
  },
];

export default function QuantWhyChoose() {
  const [openIndex, setOpenIndex] = useState(0);

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
              Insights Opinion is trusted for research quality, international reach, and dependable project execution. Businesses choose our quantitative market research services for accurate data, multilingual capabilities, and strong operational support.
            </p>

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
                          className={`text-sm font-semibold lg:text-[15px] ${
                            isOpen ? "text-[#16af9f]" : "text-[#384250]"
                          }`}
                        >
                          {item.title}
                        </h3>
                        {isOpen && item.content && (
                          <p className="mt-2 max-w-[320px] text-xs leading-[1.55] text-[#d6dbef] lg:text-sm">
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
          </div>

          <div className="relative flex min-h-[320px] items-center justify-center overflow-visible lg:min-h-[520px]">
            <div className="relative inline-flex w-fit items-end justify-center overflow-visible bg-transparent">
              <Image
                src="/globe-image.png"
                alt="Global Research"
                width={420}
                height={420}
                className="globe-spin"
              />
              <Image
                src="/why-men.png"
                alt="Research Professional"
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
