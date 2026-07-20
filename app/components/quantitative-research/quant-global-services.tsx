"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

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
    <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#5abff8] via-[#1dc3b3] to-[#71b8fc] p-px shadow-[0_18px_42px_rgba(4,12,45,0.28)]">
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
        <div className="flex flex-wrap gap-x-5 gap-y-2 px-7 py-4">
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

function getOffices(content: GlobalContent): Office[] {
  if (content.offices?.length) {
    return content.offices.filter((office) => office.description);
  }

  return content.officeDescriptions
    .filter(Boolean)
    .map((description) => ({ description }));
}

export default function QuantGlobalServices({
  content,
}: {
  content?: GlobalContent;
}) {
  const [activeOffice, setActiveOffice] = useState<number | null>(null);

  if (!content) return null;

  const offices = getOffices(content);
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
            <h2 className="text-[28px] font-semibold leading-tight lg:text-4xl">
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
