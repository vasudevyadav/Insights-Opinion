"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
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

        <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[75%_25%] lg:items-start lg:gap-16 lg:px-8">
          <article className="min-w-0 text-[#172446]">
            <div className="space-y-3 text-[13px] font-normal leading-[1.8] sm:text-sm lg:text-base lg:leading-[1.85]">
              {detail.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-5 text-[22px] font-medium leading-tight text-[#182349] sm:text-2xl lg:text-2xl">
              Insights Opinion&apos;s Survey Audits Help You To:
            </h2>

            <section className="mt-7 rounded-[18px] bg-[#d9f1fb]/75 px-4 py-5 sm:px-7 sm:py-6 lg:px-9">
              <h2 className="text-[22px] font-medium leading-tight text-[#182349] sm:text-[24px]">
                Methodology
              </h2>
              <ul className="mt-4 space-y-3 text-[13px] font-medium leading-[1.75] sm:text-sm lg:text-base lg:leading-[1.7]">
                {detail.methodology.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#172446]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="relative my-6 h-[160px] w-full overflow-hidden sm:h-[215px] lg:max-w-[505px]">
                <Image
                  src={detail.methodologyImage}
                  alt={`${caseStudy.title} methodology`}
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  className="object-cover"
                />
              </div>

              <ul className="space-y-3 text-[13px] font-medium leading-[1.75] sm:text-sm lg:text-base lg:leading-[1.7]">
                {detail.methodology.slice(3).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#172446]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-[22px] font-medium leading-tight text-[#182349] sm:text-[24px]">
                Basic Inputs/Delivery
              </h2>
              <ul className="mt-4 space-y-3 text-[13px] font-semibold leading-[1.75] sm:text-sm lg:text-base lg:leading-[1.7]">
                {detail.delivery.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#172446]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-[22px] font-medium leading-tight text-[#182349] sm:text-[24px]">
                Results
              </h2>
              <p className="mt-2 text-[13px] font-semibold leading-[1.75] sm:text-sm lg:leading-[1.7]">
                {detail.results}
              </p>
            </section>
          </article>

          <aside className="lg:pt-2">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="mb-6 hidden justify-center lg:flex">
                <button
                  aria-label="Previous case studies"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22bbb1] text-white shadow-sm"
                >
                  <ChevronUp className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:block lg:space-y-8">
                {relatedCaseStudies.map((item) => (
                  <SidebarCard key={item.slug} item={item} />
                ))}
              </div>

              <div className="my-6 hidden justify-center lg:flex">
                <button
                  aria-label="More case studies"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22bbb1] text-white shadow-sm"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>

              <CallbackForm />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
