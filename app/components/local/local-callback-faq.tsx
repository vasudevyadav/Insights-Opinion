"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import { SERVICE_SELECT_OPTIONS } from "@/app/lib/service-options";
import { useRouter } from "next/navigation";
import CountryCodeSelect from "@/app/components/shared/country-code-select";

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    enquiryType: "",
    message: "",
};

const faqs = [
    {
        question: "Do you support B2B and industry-specific research in Chicago?",
        answer:
            "Yes. Many Chicago projects involve B2B audiences, specialized buyers, and industry-specific respondent groups. As a Market Research Company in Chicago, we structure screening and study design around the exact audience criteria.",
    },
    {
        question: "Can Market Research Services in Chicago include both local and national audiences?",
        answer:
            "Yes. Many Chicago market research projects involve both local respondents and broader national samples. We can scope the study to include Chicago-specific audiences, regional segments, or nationwide panels based on your research objectives.",
    },
    {
        question: "What should we look for when comparing Market Research Firms in Chicago?",
        answer:
            "When evaluating market research firms in Chicago, look for clear methodology, strong data quality controls, experience across relevant sectors, transparent timelines, and the ability to handle both qualitative and quantitative studies. Insights Opinion meets all these criteria.",
    },
    {
        question: "Can a Market Research Agency in Chicago support both qualitative and quantitative research?",
        answer:
            "Yes. A full-service market research agency in Chicago should support both quantitative methods such as CATI, CAPI, and online panels, and qualitative approaches such as focus groups, in-depth interviews, and ethnographic studies. Insights Opinion provides both.",
    },
];

const HexCluster = () => (
    <svg
        width="305"
        height="360"
        viewBox="0 0 305 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none"
    >
        <polygon points="0,0 38.1,22 38.1,66 0,88 -38.1,66 -38.1,22" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="76.2,0 114.3,22 114.3,66 76.2,88 38.1,66 38.1,22" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="152.4,0 190.5,22 190.5,66 152.4,88 114.3,66 114.3,22" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="228.6,0 266.7,22 266.7,66 228.6,88 190.5,66 190.5,22" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="38.1,66 76.2,88 76.2,132 38.1,154 0,132 0,88" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="114.3,66 152.4,88 152.4,132 114.3,154 76.2,132 76.2,88" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="190.5,66 228.6,88 228.6,132 190.5,154 152.4,132 152.4,88" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="266.7,66 304.8,88 304.8,132 266.7,154 228.6,132 228.6,88" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="0,132 38.1,154 38.1,198 0,220 -38.1,198 -38.1,154" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="76.2,132 114.3,154 114.3,198 76.2,220 38.1,198 38.1,154" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="152.4,132 190.5,154 190.5,198 152.4,220 114.3,198 114.3,154" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="228.6,132 266.7,154 266.7,198 228.6,220 190.5,198 190.5,154" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="38.1,198 76.2,220 76.2,264 38.1,286 0,264 0,220" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="114.3,198 152.4,220 152.4,264 114.3,286 76.2,264 76.2,220" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="190.5,198 228.6,220 228.6,264 190.5,286 152.4,264 152.4,220" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="266.7,198 304.8,220 304.8,264 266.7,286 228.6,264 228.6,220" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="0,264 38.1,286 38.1,330 0,352 -38.1,330 -38.1,286" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="76.2,264 114.3,286 114.3,330 76.2,352 38.1,330 38.1,286" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="152.4,264 190.5,286 190.5,330 152.4,352 114.3,330 114.3,286" stroke="#7fd3e8" strokeWidth="1.2" />
        <polygon points="228.6,264 266.7,286 266.7,330 228.6,352 190.5,330 190.5,286" stroke="#7fd3e8" strokeWidth="1.2" />
    </svg>
);

export default function LocalCallbackFaq() {
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
                formName: "local_callback",
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
        <section className="relative overflow-hidden bg-[#edf6ff] py-14 lg:py-20">
            {/* Hex decoration right */}
            <div className="pointer-events-none absolute right-0 top-0 hidden opacity-40 lg:block">
                <HexCluster />
            </div>
            <div className="pointer-events-none absolute right-0 bottom-0 hidden opacity-30 lg:block" style={{ transform: "scaleY(-1)" }}>
                <HexCluster />
            </div>

            <div className="relative z-10 mx-auto flex max-w-[1250px] flex-col items-start gap-10 px-4 md:px-8 lg:flex-row lg:gap-14 lg:px-10">
                {/* Left: callback form */}
                <div className="w-full shrink-0 md:w-[460px]">
                    <div className="rounded-[20px] bg-white p-6 shadow-[0_8px_40px_rgba(22,34,80,0.10)] md:p-8">
                        <div className="mb-6 text-center">
                            <h2 className="text-[28px] font-medium leading-tight text-[#3b3b3b] md:text-[36px]">
                                Request a{" "}
                                <span className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text font-semibold text-transparent">
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
                                className="w-full resize-none rounded-[4px] border border-[#d7d7d7] px-4 py-3 text-sm text-[#343954] outline-none placeholder:text-[#8a8a8a] focus:border-[#20b7a6]"
                            />

                            {status && (
                                <p className="text-sm font-semibold text-[#0f766e]">{status}</p>
                            )}

                            <div className="pt-2 text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex min-w-[160px] items-center justify-center rounded-[6px] bg-[#17aa8d] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90 hover:shadow-lg lg:text-base disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right: FAQ */}
                <div className="w-full flex-1">
                    <div className="mb-8">
                        <h2 className="text-[26px] font-light leading-tight text-[#1e2a4e] md:text-[40px]">
                            Frequently Asked
                            <span className="ml-2 bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text font-semibold text-transparent">
                                Questions
                            </span>
                        </h2>

                    </div>

                    <div className="space-y-0">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="border-b border-[#d0dff0]">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className={`flex w-full items-start justify-between rounded-t-[16px] px-5 py-4 text-left transition ${isOpen ? "bg-white" : "bg-transparent"
                                            }`}
                                    >
                                        <span
                                            className={`text-sm font-semibold leading-snug transition lg:text-base ${isOpen ? "bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text font-semibold text-transparent" : "text-[#1e2a4e]"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>
                                        {isOpen ? (
                                            <ChevronUp className="ml-3 mt-0.5 h-5 w-5 shrink-0 text-[#18aea1]" />
                                        ) : (
                                            <ChevronDown className="ml-3 mt-0.5 h-5 w-5 shrink-0 text-[#1e2a4e]" />
                                        )}
                                    </button>
                                    <div
                                        className={`grid transition-all duration-500 ease-in-out motion-reduce:transition-none ${isOpen
                                            ? "grid-rows-[1fr] rounded-b-[16px] bg-white opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-5 pb-5 pt-1 text-sm leading-6 text-[#4b5563] lg:text-[15px]">
                                                {faq.answer}
                                            </p>
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
