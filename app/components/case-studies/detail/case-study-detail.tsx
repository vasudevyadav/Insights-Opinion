"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import type { CaseStudy } from "@/app/lib/case-studies-api";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import { SERVICE_SELECT_OPTIONS } from "@/app/lib/service-options";
import BackgroundShape from "../../about-us/background-shape";
import CountryCodeSelect from "@/app/components/shared/country-code-select";

type CaseStudyDetailProps = {
  caseStudy: CaseStudy;
  relatedCaseStudies: CaseStudy[];
};

function SidebarCard({ item }: { item: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${item.slug}`}
      className="group block overflow-hidden rounded-t-[18px] rounded-bl-[4px] rounded-br-[32px] border border-[#1d315d] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative h-[125px] overflow-hidden rounded-t-[18px] rounded-br-[24px] lg:h-[200px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="relative px-3 pb-3 pt-6">
        <span className="absolute -top-4 left-0 max-w-[90%] rounded-r-[5px] bg-gradient-to-r from-[#111a2f] to-[#101827] px-3 py-1.5 text-[11px] font-semibold leading-none text-white sm:text-[12px] lg:text-[13px]">
          {item.title}
        </span>
        <p className="line-clamp-4 text-sm font-medium text-[#172446] mb-2">
          {item.description}
        </p>
        <span className="mt-2 inline-block text-xs font-bold uppercase tracking-widest text-[#13b3ad]">
          Readmore &gt;
        </span>
      </div>
    </Link>
  );
}

const CALLBACK_SELECT_OPTIONS: Record<string, string[]> = {
  "Please Select": SERVICE_SELECT_OPTIONS,
};

const initialCallbackFormData = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  enquiryType: "",
};

function CallbackForm() {
  const inputClass =
    "w-full rounded-[5px] border border-[#1e315e] bg-transparent px-4 py-2.5 text-[13px] font-medium text-[#142044] outline-none placeholder:text-[#142044] sm:py-3 sm:text-sm";

  const [formData, setFormData] = useState(initialCallbackFormData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const router = useRouter();

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
        countryCode: formData.countryCode,
        phone: `${formData.countryCode} ${formData.phone}`,
        enquiryType: formData.enquiryType,
      });

      setStatus("Submitted successfully.");
      setFormData(initialCallbackFormData);
      router.push("/thank-you");
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
      className="mx-auto w-full max-w-[420px] rounded-[14px] border border-[#22bbb1] bg-[#eef7ff]/70 px-4 py-5 lg:max-w-none"
    >
      <h3 className="mb-5 text-lg font-semibold text-[#19bfb1]">
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
        {[{ label: "Please Select", name: "enquiryType" }].map(
          ({ label, name }) => (
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
          )
        )}
        <div className={`${inputClass} flex p-0`}>
          <CountryCodeSelect
            value={formData.countryCode}
            onChange={(countryCode) =>
              setFormData((current) => ({ ...current, countryCode }))
            }
            required
            className="w-[92px] shrink-0 border-r border-[#1e315e]"
            buttonClassName="px-3 py-2.5 sm:py-3"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            inputMode="tel"
            required
            placeholder="Mobile number"
            className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-[13px] font-medium text-[#142044] outline-none placeholder:text-[#142044] sm:py-3 sm:text-sm"
          />
        </div>
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
        <div className="relative w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white">
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

      <section className="relative overflow-hidden bg-[#eef7ff] py-10 sm:py-12 lg:py-16">
        <BackgroundShape variant={1} className="-right-28 top-0 w-[350px] opacity-45 sm:w-[440px] lg:-right-2 lg:w-[530px]" />
        <BackgroundShape variant={3} side="left" className="-left-24 top-[34%] w-[320px] opacity-45 sm:w-[400px] lg:-left-2 lg:w-[480px]" />
        <BackgroundShape variant={5} className="-right-24 bottom-[8%] w-[330px] opacity-40 sm:w-[410px] lg:-right-2 lg:w-[500px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start xl:gap-14">
            <article className="min-w-0 text-[#172446]">
              <header>
                {detail.results && (
                  <p className="mb-6 text-sm font-medium leading-6 text-[#172446] lg:text-base">
                    {detail.results}
                  </p>
                )}
                <h2 className="text-[22px] font-medium leading-tight text-[#172446] sm:text-[25px]">
                  {headingAccent}{headingRemainder}
                </h2>

                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-[#172446]">
                    {detail.clientLabel}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#172446] lg:text-base">
                    {detail.client}
                  </p>
                </div>

                <div className="mt-3">
                  <h3 className="text-sm font-semibold text-[#172446]">
                    {detail.mandateLabel}
                  </h3>
                  <div className="mt-1 space-y-2 text-sm leading-6 text-[#172446] lg:text-base">
                    {(detail.mandate.length
                      ? detail.mandate
                      : detail.overview
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </header>

              <section className="mt-6 rounded-[22px] bg-[#dceffb]/80 px-4 py-6 sm:px-5 sm:py-7">
                <h2 className="text-[22px] font-medium leading-tight text-[#172446]">
                  {detail.methodologyHeading}
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-[#172446] lg:text-base">
                  {detail.methodology.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {detail.methodologyImage && (
                  <div className="relative mx-auto mt-5 aspect-[2.55/1] w-full max-w-[520px] overflow-hidden">
                    <Image src={detail.methodologyImage} alt="Methodology" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 520px" />
                  </div>
                )}
              </section>

              <section className="mt-6">
                <h2 className="text-[22px] font-medium leading-tight text-[#172446]">
                  Basic Inputs/{detail.deliveryHeading}
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-[#172446] lg:text-base">
                  {detail.delivery.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-6">
                <h2 className="text-[22px] font-medium leading-tight text-[#172446]">
                  {detail.resultsHeading}
                </h2>
                <p className="mt-3 text-sm font-medium leading-6 text-[#172446] sm:text-base">
                  {detail.results}
                </p>
              </section>
            </article>


            <aside className="space-y-8 lg:sticky lg:top-28">
              <div className="space-y-6">
                {relatedCaseStudies.map((item) => (
                  <SidebarCard key={item.slug} item={item} />
                ))}
              </div>
              <CallbackForm />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
