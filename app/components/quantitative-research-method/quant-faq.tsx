"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/app/lib/method-data";
import { submitLeadForm } from "@/app/lib/lead-form-api";

const DISPLAYED_CAPTCHA = "990940";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
  captchaInput: "",
};

export default function QuantDetailsFaq({ data }: { data: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.captchaInput !== DISPLAYED_CAPTCHA) {
      setStatus("Invalid captcha. Please try again.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await submitLeadForm({
        formName: "quant_method_callback",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        enquiryType: formData.enquiryType,
        message: formData.message,
      });

      setStatus("Submitted successfully.");
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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/faq-area-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a143c]/75" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-312.5 flex-col items-center gap-10 px-4 py-14 md:px-8 lg:flex-row lg:gap-12 lg:px-10 lg:py-20">

        {/* Left — Request a Callback form */}
        <div className="w-full md:w-130">
          <div className="rounded-[20px] bg-white p-6 shadow-xl md:p-8">
            <div className="mb-6 text-center">
              <h2 className="text-[28px] font-medium leading-tight text-[#3b3b3b] md:text-[38px]">
                Request a{" "}
                <span className="bg-linear-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-2xl font-semibold leading-tight text-transparent lg:text-[42px]">
                  Callback
                </span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="Name"
                  className="h-11.5 rounded-sm border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6]"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="Email"
                  className="h-11.5 rounded-sm border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6]"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  required
                  placeholder="Mobile"
                  className="h-11.5 rounded-sm border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6]"
                />
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="h-11.5 rounded-sm border border-[#d7d7d7] bg-white px-4 text-sm text-[#8a8a8a] outline-none focus:border-[#20b7a6]"
                >
                  <option value="" disabled>Please Select</option>
                  <option>CATI</option>
                  <option>CAPI</option>
                  <option>CLT</option>
                  <option>Online Surveys</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full rounded-sm border border-[#d7d7d7] px-4 py-3 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6] resize-none"
              />

              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  name="captchaInput"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="Captcha"
                  className="h-11.5 w-full rounded-sm border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6] sm:w-37.5"
                />
                <div className="absolute right-0 lg:left-36 flex h-11.5 w-27.5 items-center justify-center rounded-sm bg-[#171f4d] text-sm font-medium tracking-wide text-white">
                  {DISPLAYED_CAPTCHA}
                </div>
              </div>

              {status && (
                <p className="text-sm font-semibold text-[#0f766e]">{status}</p>
              )}

              <div className="pt-6 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-w-42.5 items-center justify-center rounded-md bg-linear-to-r from-[#48b99b] to-[#5bc4a9] px-18 py-3 text-sm font-semibold text-white transition hover:opacity-90 hover:shadow-lg lg:text-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right — FAQ */}
        <div className="w-full md:flex-1">
          <div className="mb-8">
            <h2 className="text-[26px] font-light leading-tight text-white md:text-[42px]">
              Frequently Asked
            </h2>
            <h2 className="bg-linear-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-2xl font-semibold leading-tight text-transparent lg:text-[42px]">
              Questions
            </h2>
          </div>

          <div className="space-y-3">
            {data.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-white/20">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between rounded-t-2xl px-5 py-4 text-left transition ${isOpen ? "bg-white" : "bg-transparent"}`}
                  >
                    <span className={`text-sm font-medium transition lg:text-base ${isOpen ? "text-[#18aea1]" : "text-white"}`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#18aea1]" : "rotate-0 text-white"}`}
                    />
                  </button>

                  <div className={`grid transition-all duration-500 ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] rounded-b-2xl bg-white opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5">
                        <p className="text-xs leading-6 text-[#6b7280] lg:text-sm">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
