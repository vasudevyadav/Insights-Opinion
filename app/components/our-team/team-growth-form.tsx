"use client";

import { useState } from "react";
import Image from "next/image";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import { SERVICE_SELECT_OPTIONS } from "@/app/lib/service-options";
import { useRouter } from "next/navigation";
import CountryCodeSelect from "@/app/components/shared/country-code-select";
import PrivacyConsent from "@/app/components/shared/privacy-consent";

const fieldClass =
  "h-12 w-full rounded-md border border-transparent bg-[#151a45] px-5 text-sm text-white outline-none placeholder:text-white/90 focus:border-[#4bc4c7]";

const initialFormData = {
  name: "",
  email: "",
  country: "",
  phone: "",
  countryCode: "+91",
  enquiryType: "",
};

export default function TeamGrowthForm() {
  const [formData, setFormData] = useState(initialFormData);
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
        formName: "team_growth",
        name: formData.name,
        email: formData.email,
        country: formData.country,
        phone: `${formData.countryCode} ${formData.phone}`,
        countryCode: formData.countryCode,
        enquiryType: formData.enquiryType,
      });

      setStatus("Submitted successfully.");

      router.push("/thank-you");
      setFormData(initialFormData);
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
    <section className="relative px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-4 lg:px-5 lg:pb-24 lg:pt-8">
      <div className="mx-auto grid max-w-[1280px] gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div className="grid grid-cols-1 items-center sm:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-center text-xl font-light leading-tight text-[#2f3643] sm:text-left lg:text-[31px]">
            Grow Better with
            <span className="quality-gradient-text mt-2 block text-3xl font-light lg:leading-[1.05] lg:text-[47px] lg:mb-0 mb-8">
              Insights
              <br className="lg:block hidden" />
              Opinion
            </span>
          </h2>
          <div className="relative mx-auto h-[260px] w-full max-w-[300px] sm:max-w-none lg:h-[370px]">
            <Image
              src="/grow-better.png"
              alt="Grow better with Insights Opinion"
              fill
              sizes="(max-width: 1024px) 55vw, 320px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={fieldClass}
            type="text"
            required
            placeholder="Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={fieldClass}
            type="email"
            required
            placeholder="Email"
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className={fieldClass}
          >
            <option value="" disabled>
              Country
            </option>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
          <div className="flex h-12 overflow-visible rounded-md bg-[#151a45] focus-within:ring-1 focus-within:ring-[#4bc4c7]">
            <CountryCodeSelect value={formData.countryCode} onChange={(countryCode) => setFormData((current) => ({ ...current, countryCode }))} className="w-[92px] border-r border-white/20" buttonClassName="px-3 text-sm text-white" />
            <input name="phone" value={formData.phone} onChange={handleChange} className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/90" type="tel" required placeholder="Mobile" />
          </div>
          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            required
            className={fieldClass}
          >
            <option value="" disabled>
              Please Select
            </option>
            {SERVICE_SELECT_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-gradient-to-r from-[#15b9a6] to-[#5aa8ee] px-9 py-3 text-sm text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {loading ? "Submitting..." : "Submit Now"}
            </button>
            <PrivacyConsent />
            {status && (
              <p className="mt-2 text-sm font-semibold text-[#0f766e]">{status}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
