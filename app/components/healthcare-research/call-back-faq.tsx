"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import { SERVICE_SELECT_OPTIONS } from "@/app/lib/service-options";
import { useRouter } from "next/navigation";
import type { ResearchFaqSection } from "@/lib/getResearchPage";
import CountryCodeSelect from "@/app/components/shared/country-code-select";
import PrivacyConsent from "@/app/components/shared/privacy-consent";

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    enquiryType: "",
    message: "",
};

export default function CallbackFaqHealth({
    data,
}: {
    data: ResearchFaqSection;
}) {
    const [openIndex, setOpenIndex] = useState(0);
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const router = useRouter();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            await submitLeadForm({
                formName: "health_callback",
                name: formData.name,
                email: formData.email,
                phone: `${formData.countryCode} ${formData.phone}`,
                countryCode: formData.countryCode,
                enquiryType: formData.enquiryType,
                message: formData.message,
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

            <div className="relative z-10 mx-auto flex max-w-[1250px] flex-col items-center gap-10 px-4 py-14 md:px-8 lg:flex-row lg:gap-12 lg:px-10 lg:py-20">
                {/* Left Form */}
                <div className="w-full md:w-[520px]">
                    <div className="rounded-[20px] bg-white p-6 shadow-xl md:p-8">
                        <div className="mb-6 text-center">
                            <h2 className="text-[28px] font-medium leading-tight text-[#3b3b3b] md:text-[38px]">
                                Request a{" "}
                                <span className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-2xl font-semibold leading-tight text-transparent lg:text-[42px]">Callback</span>
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
                                    className="h-[46px] rounded-[4px] border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6]"
                                />
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    required
                                    placeholder="Email"
                                    className="h-[46px] rounded-[4px] border border-[#d7d7d7] px-4 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6]"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex h-[46px] overflow-visible rounded-[4px] border border-[#d7d7d7] bg-white focus-within:border-[#20b7a6]">
                                    <CountryCodeSelect value={formData.countryCode} onChange={(countryCode) => setFormData((current) => ({ ...current, countryCode }))} className="w-[88px] border-r border-[#d7d7d7]" buttonClassName="px-2 text-sm text-[#343954]" />
                                    <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required placeholder="Mobile" className="min-w-0 flex-1 px-3 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a]" />
                                </div>

                                <select
                                    name="enquiryType"
                                    value={formData.enquiryType}
                                    onChange={handleChange}
                                    required
                                    className="h-[46px] rounded-[4px] border border-[#d7d7d7] bg-white px-4 text-sm text-[#8a8a8a] outline-none focus:border-[#20b7a6]"
                                >
                                    <option value="" disabled>Please Select</option>
                                    {SERVICE_SELECT_OPTIONS.map((option) => (
                                        <option key={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows={4}
                                className="w-full rounded-[4px] border border-[#d7d7d7] px-4 py-3 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6] resize-none"
                            />

                            {status && (
                                <p className="text-sm font-semibold text-[#0f766e]">{status}</p>
                            )}

                            <div className="pt-6 text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex min-w-[170px] items-center justify-center rounded-[6px] bg-gradient-to-r from-[#48b99b] to-[#5bc4a9] px-18 py-3 lg:text-lg text-sm font-semibold text-white transition hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                                <PrivacyConsent />
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right FAQ */}
                <div className="w-full md:flex-1">
                    <div className="mb-8">
                        <h2 className="text-[26px] font-light leading-tight text-white md:text-[42px]">
                            {data.heading || "Frequently Asked"}
                        </h2>
                        <h2
                            className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-2xl font-semibold leading-tight text-transparent lg:text-[42px]"
                        >
                            {data.subHeading || "Questions"}
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {data.faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index} className="border-b border-white/20">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className={`flex w-full items-center justify-between rounded-t-[16px] px-5 py-4 text-left transition ${isOpen ? "bg-white" : "bg-transparent"
                                            }`}
                                    >
                                        <span
                                            className={`lg:text-base text-sm font-medium transition ${isOpen ? "text-[#18aea1]" : "text-white"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            className={`h-5 w-5 transition-transform duration-300 ${isOpen
                                                ? "rotate-180 text-[#18aea1]"
                                                : "rotate-0 text-white"
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-all duration-500 ease-in-out motion-reduce:transition-none ${isOpen
                                            ? "grid-rows-[1fr] rounded-b-[16px] bg-white opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 pb-5">
                                                <p className="lg:text-sm text-xs leading-6 text-[#6b7280]">
                                                    {faq.answer}
                                                </p>
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
