"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import type { ServicePageKey } from "@/data/service-page-content";

type Office = {
  title?: string;
  description: string;
  phone?: string;
  email?: string;
  address?: string;
};

type GlobalContent = {
  heading?: string;
  subheading?: string;
  description: string;
  officeDescriptions: readonly string[];
  offices?: readonly Office[];
};

const staticOfficeContent: Record<
  ServicePageKey,
  readonly Pick<Office, "title" | "description">[]
> = {
  quantitative: [
    {
      title: "Quantitative Research Services in the USA",
      description:
        "Our New York office serves US-based clients across consumer research, B2B research, and healthcare research. We are among the quantitative market research companies US businesses can engage directly for domestic and multi-country studies.\nGlobal panel access, including US consumer and professional respondents\nCATI fieldwork with trained interviewers for US-specific study requirements\nEnd-to-end quantitative market research services across the USA and 100+ countries",
    },
    {
      title: "Quantitative Research Services in the UK",
      description:
        "Our London office supports UK and European clients across FMCG, financial services, technology, healthcare, and public sector programmes.\nFull-service quantitative market research services for UK domestic and pan-European studies\nCATI and CAPI fieldwork across the UK and continental Europe\n60+ language delivery for European market research\nISO 27001 certified with full UK GDPR compliance",
    },
    {
      title: "Quantitative Research Services in India",
      description:
        "Our Noida office supports Indian and Asia Pacific clients and serves as a delivery hub for multilingual fieldwork, survey programming, data processing, and CATI operations at scale.\nQuantitative market research services across India, South Asia, and Asia Pacific\nCATI fieldwork in multiple Indian languages and regional dialects\nSurvey programming and data insights delivery from our Noida operations team\nEnd-to-end quantitative data analysis services for global markets",
    },
  ],
  qualitative: [
    {
      title: "Healthcare Qualitative Market Research",
      description:
        "Healthcare qualitative market research carries higher stakes than any other research vertical. Patient experiences, clinician perceptions, and treatment attitudes demand careful moderation, strict ethics, and deep sector knowledge at every stage.\nIn-Depth Interviews with patients, caregivers, and healthcare professionals\nFocus Group Discussions across therapeutic areas and care settings\nOnline qualitative formats for dispersed healthcare audiences\nMultilingual fieldwork across 60+ languages",
    },
    {
      title: "CPG Qualitative Market Research",
      description:
        "US CPG brands use qualitative research to move beyond sales data and understand the real motivations and emotional drivers behind consumer choice.\nFocus Group Discussions for concept, packaging, and messaging evaluation\nIn-Home Use Tests capturing real-world product usage and feedback\nIn-Depth Interviews for deeper category attitude exploration\nMultilingual fieldwork for US multicultural consumer segments",
    },
    {
      title: "Financial Services Qualitative Market Research",
      description:
        "In banking, insurance, wealth management, and fintech, buying decisions are driven by trust and risk perception as much as product features. Qualitative research tells you why customers hesitate, switch, or stay loyal.\nIn-Depth Interviews with retail banking customers and financial advisors\nFocus Group Discussions for product messaging and brand perception\nOnline qualitative formats for time-constrained respondents\nB2B qualitative research with corporate and institutional decision-makers",
    },
  ],
  support: [
    {
      title: "Support Services in the USA",
      description:
        "Our New York office serves US-based clients who need survey programming services, translation, and data processing support for domestic and multi-country studies. We are a survey programming company US research teams can engage directly for fast, compliant, end-to-end support.\nMultilingual survey programming for US consumer, B2B, and healthcare studies\nData insights delivery aligned with US reporting standards and timelines\nEnd-to-end research support services across the USA and 100+ countries",
    },
    {
      title: "Support Services in the UK",
      description:
        "Our London office supports UK and European clients across FMCG, financial services, healthcare, and public sector research programs that require technical delivery alongside fieldwork.\nSurvey programming and hosting for UK domestic and pan-European studies\nTranslation and localization services across European languages\nData processing and dashboard delivery with full UK GDPR compliance\nISO 27001 certified across all support service delivery",
    },
    {
      title: "Support Services in India",
      description:
        "Our Noida office serves as the primary delivery hub for multilingual survey programming, translation, data processing, and analytics operations at scale across India, South Asia, and Asia Pacific.\nSurvey programming and hosting in multiple Indian languages and regional dialects\nTranslation and localization for Asia Pacific multi-country research programs\nQuantitative data analysis services and dashboard delivery for global clients\nEnd-to-end data processing services from our Noida operations team",
    },
  ],
};

function getDescriptionParts(value: string) {
  const lines = value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    intro: lines[0] || "",
    listItems: lines.slice(1),
  };
}

function OfficeCard({
  office,
  isExpanded,
  onToggle,
}: {
  office: Office;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [canExpand, setCanExpand] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState(0);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const contactItems = [
    { icon: Phone, value: office.phone },
    { icon: Mail, value: office.email },
    { icon: MapPin, value: office.address },
  ].filter((item) => item.value);
  const { intro, listItems } = getDescriptionParts(office.description);
  const hasListDescription = listItems.length > 0;

  useEffect(() => {
    const updateDescriptionHeight = () => {
      if (!descriptionRef.current) return;

      const description = descriptionRef.current;
      const fontSize = Number.parseFloat(getComputedStyle(description).fontSize);
      const collapsedHeight = fontSize * 7;

      setExpandedHeight(description.scrollHeight);
      setCanExpand(description.scrollHeight > collapsedHeight + 1);
    };

    updateDescriptionHeight();
    window.addEventListener("resize", updateDescriptionHeight);

    return () => window.removeEventListener("resize", updateDescriptionHeight);
  }, [office.description]);

  return (
    <div
      className="group overflow-hidden rounded-[28px] bg-gradient-to-br from-[#5abff8] via-[#1dc3b3] to-[#71b8fc] p-px shadow-[0_18px_42px_rgba(4,12,45,0.28)] outline-none"
      tabIndex={0}
    >
      <div className="relative rounded-[27px] bg-[#172153]/92 px-7 pb-14 pt-8 backdrop-blur-sm">
        {office.title && (
          <h3
            className="text-base font-medium leading-snug lg:text-2xl"
            style={{
              background: "linear-gradient(90deg, #00f2fe 0%, #4facfe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {office.title}
          </h3>
        )}
        <div
          ref={descriptionRef}
          className="mt-4 overflow-hidden text-sm leading-[1.75] text-slate-300/80 transition-[max-height] duration-500 ease-in-out lg:text-base"
          style={{
            maxHeight: canExpand
              ? isExpanded
                ? `${expandedHeight}px`
                : "7em"
              : undefined,
          }}
        >
          {hasListDescription ? (
            <>
              {intro && <p>{intro}</p>}
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {listItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>{office.description}</p>
          )}
        </div>

        {canExpand && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute bottom-5 left-7 inline-flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#5abff8]"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Show less content" : "Show more content"}
          >
            <ChevronDown
              size={30}
              strokeWidth={3}
              className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {contactItems.length > 0 && (
        <div className="flex max-h-40 flex-wrap gap-x-5 gap-y-2 overflow-hidden px-7 py-4 opacity-100 transition-[max-height,opacity,padding] duration-500 ease-out lg:max-h-0 lg:py-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:py-4 lg:group-hover:opacity-100 lg:group-focus-within:max-h-40 lg:group-focus-within:py-4 lg:group-focus-within:opacity-100">
          {contactItems.map(({ icon: Icon, value }) => (
            <div key={value} className="flex items-center gap-2 text-sm text-white">
              <Icon size={14} className="shrink-0" />
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getOffices(content: GlobalContent, category: ServicePageKey): Office[] {
  const originalOffices = content.offices?.length
    ? content.offices
    : content.officeDescriptions
        .filter(Boolean)
        .map((description) => ({ description }));

  return staticOfficeContent[category].map((staticContent, index) => ({
    ...originalOffices[index],
    ...staticContent,
  }));
}

export default function QuantGlobalServices({
  content,
  category,
}: {
  content?: GlobalContent;
  category: ServicePageKey;
}) {
  const [activeOffice, setActiveOffice] = useState<number | null>(null);

  if (!content) return null;

  const offices = getOffices(content, category);
  if (offices.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#071540] py-5 lg:py-12">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/quality/research-services.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#071540]/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-9 text-center lg:mb-16">
          {content.heading && (
            <h2 className="text-[28px] lg:mt-0 mt-6 font-semibold leading-tight lg:text-4xl">
              <span
                style={{
                  background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {content.heading}
              </span>
            </h2>
          )}
          {content.subheading && (
            <p className="mt-1 text-lg font-normal text-white lg:text-2xl">
              {content.subheading}
            </p>
          )}
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-[1.75] text-white lg:text-base">
            {content.description}
          </p>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory items-end gap-5 overflow-x-auto pb-10 lg:hidden">
          {offices.map((office, index) => (
            <div key={`${office.title || "office"}-${index}`} className="min-w-[85vw] snap-center">
              <OfficeCard
                office={office}
                isExpanded={activeOffice === index}
                onToggle={() =>
                  setActiveOffice((current) => (current === index ? null : index))
                }
              />
            </div>
          ))}
        </div>

        <div className="relative mx-auto hidden max-w-6xl lg:block">
          {offices[0] && (
            <div style={{ marginLeft: "3%", maxWidth: 520 }}>
              <OfficeCard
                office={offices[0]}
                isExpanded={activeOffice === 0}
                onToggle={() =>
                  setActiveOffice((current) => (current === 0 ? null : 0))
                }
              />
            </div>
          )}
          {offices[1] && (
            <div style={{ marginLeft: "auto", marginRight: 0, maxWidth: 520, marginTop: -180 }}>
              <OfficeCard
                office={offices[1]}
                isExpanded={activeOffice === 1}
                onToggle={() =>
                  setActiveOffice((current) => (current === 1 ? null : 1))
                }
              />
            </div>
          )}
          {offices[2] && (
            <div style={{ marginLeft: "10%", maxWidth: 520, marginTop: 45 }}>
              <OfficeCard
                office={offices[2]}
                isExpanded={activeOffice === 2}
                onToggle={() =>
                  setActiveOffice((current) => (current === 2 ? null : 2))
                }
              />
            </div>
          )}
          {offices.slice(3).map((office, index) => (
            <div
              key={`${office.title || "office"}-${index + 3}`}
              style={{
                marginLeft: index % 2 ? "auto" : "6%",
                maxWidth: 520,
                marginTop: 45,
              }}
            >
              <OfficeCard
                office={office}
                isExpanded={activeOffice === index + 3}
                onToggle={() =>
                  setActiveOffice((current) =>
                    current === index + 3 ? null : index + 3
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
