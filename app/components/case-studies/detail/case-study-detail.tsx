"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { CaseStudy } from "@/app/lib/case-studies-api";
import { submitLeadForm } from "@/app/lib/lead-form-api";

type CaseStudyDetailProps = {
  caseStudy: CaseStudy;
  relatedCaseStudies: CaseStudy[];
};

function SidebarCard({ item }: { item: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${item.slug}`}
      className="group block overflow-hidden rounded-t-[18px] rounded-bl-[4px] rounded-br-[38px] border border-[#1d315d] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative h-[160px] overflow-hidden rounded-t-[18px] rounded-br-[26px] sm:h-[185px] lg:h-[200px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="relative px-3.5 pb-4 pt-7">
        <span className="absolute -top-4 left-0 max-w-[90%] rounded-r-[5px] bg-gradient-to-r from-[#111a2f] to-[#101827] px-3 py-1.5 text-[11px] font-semibold leading-none text-white sm:text-[12px] lg:text-[13px]">
          {item.title}
        </span>
        <p className="line-clamp-4 text-[12px] font-medium leading-[1.65] text-[#172446] lg:text-[13px] lg:leading-6">
          {item.description}
        </p>
        <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest text-[#13b3ad] lg:text-xs">
          Readmore &gt;
        </span>
      </div>
    </Link>
  );
}

const CALLBACK_SELECT_OPTIONS: Record<string, string[]> = {
  Country: ["India", "USA", "UK", "UAE"],
  Mobile: ["+91", "+1", "+44", "+971"],
  "Please Select": ["General Enquiry", "Business Query", "Support"],
};

const initialCallbackFormData = {
  name: "",
  email: "",
  country: "",
  countryCode: "",
  enquiryType: "",
};

function CallbackForm() {
  const inputClass =
    "w-full rounded-[5px] border border-[#1e315e] bg-transparent px-4 py-2.5 text-[13px] font-medium text-[#142044] outline-none placeholder:text-[#142044] sm:py-3 sm:text-sm";

  const [formData, setFormData] = useState(initialCallbackFormData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await submitLeadForm({
        formName: "case_study_callback",
        name: formData.name,
        email: formData.email,
        country: formData.country,
        countryCode: formData.countryCode,
        enquiryType: formData.enquiryType,
      });

      setStatus("Submitted successfully.");
      setFormData(initialCallbackFormData);
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[420px] rounded-[14px] border border-[#22bbb1] bg-[#eef7ff]/70 px-5 py-5 lg:max-w-none"
    >
      <h3 className="mb-5 text-xl font-semibold text-[#19bfb1] sm:text-2xl">
        Request a <span className="text-[#59a8fb]">Callback</span>
      </h3>
      <div className="space-y-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="Name"
          type="text"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="Email"
          type="email"
          required
        />
        {[
          { label: "Country", name: "country" },
          { label: "Mobile", name: "countryCode" },
          { label: "Please Select", name: "enquiryType" },
        ].map(({ label, name }) => (
          <label key={label} className="relative block">
            <select
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              required
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="" disabled>{label}</option>
              {CALLBACK_SELECT_OPTIONS[label].map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#142044]" />
          </label>
        ))}
        <button
          type="submit"
          disabled={loading}
          className="mt-1 w-full rounded-[4px] bg-gradient-to-r from-[#18b7a4] to-[#5ba8fb] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit sm:py-3 sm:text-base"
        >
          {loading ? "Submitting..." : "Submit Now"}
        </button>
        {status && (
          <p className="text-sm font-semibold text-[#0f766e]">{status}</p>
        )}
      </div>
    </form>
  );
}

export default function CaseStudyDetail({
  caseStudy,
  relatedCaseStudies,
}: CaseStudyDetailProps) {
  const { detail } = caseStudy;
  const heading = detail.heading || caseStudy.title;
  const headingAccent = heading.match(/^Insights Opinion(?:['’]s)?/i)?.[0];
  const headingRemainder = headingAccent
    ? heading.slice(headingAccent.length)
    : heading;

  return (
    <>
      <section className="bg-[#edf6fe]">
        <div className="relative mt-8 w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white lg:mt-20">
          <div className="relative z-10 mx-auto flex min-h-[220px] w-full max-w-7xl items-center justify-center px-5 py-10 sm:min-h-[300px] lg:min-h-[420px]">
            <div className="text-center">
              <h1 className="quality-gradient-text text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Case Studies
              </h1>
              <p className="mx-auto mt-4 max-w-[90vw] text-sm font-medium text-white/85 sm:mt-6 sm:text-base">
                Case Studies &gt; {caseStudy.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-hex-bg relative overflow-hidden py-8 sm:py-10 lg:py-16">
        <button className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-[18px] bg-gradient-to-b from-[#19beb0] to-[#57aaf4] px-3 py-5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg [writing-mode:vertical-rl] lg:block">
          Request Callback
        </button>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <article className="min-w-0 text-[#151b27]">
            <header className="px-1 sm:px-4 lg:px-8">
              <h2 className="text-xl font-bold leading-[1.14] lg:text-4xl">
                {headingAccent && (
                  <span className="text-[#19b3a8]">{headingAccent}</span>
                )}
                <span className="text-[#171c26]">{headingRemainder}</span>
              </h2>

              <div className="mt-8 sm:mt-10">
                <h3 className="text-sm font-bold text-black lg:text-2xl">
                  {detail.clientLabel}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-black sm:text-xl">
                  {detail.client}
                </p>
              </div>

              <div className="mt-7 sm:mt-8">
                <h3 className="text-sm font-bold text-black lg:text-2xl">
                  {detail.mandateLabel}
                </h3>
                <div className="mt-2 space-y-3 text-base leading-[1.65] text-black sm:text-xl sm:leading-[1.7]">
                  {(detail.mandate.length
                    ? detail.mandate
                    : detail.overview
                  ).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </header>

            <section className="mt-10 rounded-[12px] bg-[#ddf6fc] px-5 py-8 sm:mt-14 sm:px-10 sm:py-11 lg:px-16 lg:py-14">
              <h2 className="text-base font-bold leading-tight text-[#171c26] lg:text-2xl">
                {detail.methodologyHeading}
              </h2>
              <ul className="mt-6 space-y-5 text-sm font-medium leading-[1.65] text-[#626870] sm:mt-8 sm:text-lg lg:space-y-6 lg:text-lg">
                {detail.methodology.map((item) => (
                  <li key={item} className="flex gap-4 sm:gap-5">
                    <span className="mt-[10px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#18b4aa] sm:mt-[12px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 px-1 sm:mt-14 sm:px-4 lg:px-0">
              <h2 className="text-base font-bold leading-tight text-[#171c26] lg:text-2xl">
                Basic Inputs/{detail.deliveryHeading}
              </h2>
              <ul className="mt-6 space-y-5 text-sm font-medium leading-[1.65] text-[#626870] sm:mt-8 sm:text-lg lg:space-y-6 lg:text-lg">
                {detail.delivery.map((item) => (
                  <li key={item} className="flex gap-4 sm:gap-5">
                    <span className="mt-[10px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#18b4aa] sm:mt-[12px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="relative mt-12 overflow-hidden rounded-[32px] border border-[#eef1f3] bg-white px-5 py-10 text-center shadow-[0_12px_28px_rgba(23,28,38,0.14)] sm:mt-16 sm:px-14 sm:py-14 lg:px-24">
              <span className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[#f7f9fa]" />
              <span className="pointer-events-none absolute -right-40 -top-28 h-96 w-96 rounded-full bg-[#fafbfc]" />
              <h2 className="relative text-[34px] font-bold leading-tight text-[#18b4aa] sm:text-[46px] lg:text-[52px]">
                {detail.resultsHeading}
              </h2>
              <p className="relative mx-auto mt-7 max-w-[1080px] text-sm font-medium leading-[1.7] text-black lg:text-lg">
                {detail.results}
              </p>
            </section>  
          </article>



          <aside className="mt-16 border-t border-[#dce9f2] pt-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-[#172446]">
                  More Case Studies
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {relatedCaseStudies.map((item) => (
                    <SidebarCard key={item.slug} item={item} />
                  ))}
                </div>
              </div>
              <CallbackForm />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
