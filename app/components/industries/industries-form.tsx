"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import { SERVICE_SELECT_OPTIONS } from "@/app/lib/service-options";
import CountryCodeSelect from "@/app/components/shared/country-code-select";
import { useRouter } from "next/navigation";
import BackgroundShape from "../about-us/background-shape";
import PrivacyConsent from "@/app/components/shared/privacy-consent";

const initialFormData = {
    name: "",
    email: "",
    country: "",
    countryCode: "+91",
    phone: "",
    enquiryType: "",
};

export default function IndustriesForm() {
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
                formName: "industries_enquiry",
                name: formData.name,
                email: formData.email,
                country: formData.country,
                countryCode: formData.countryCode,
                phone: `${formData.countryCode} ${formData.phone}`,
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
        <section className="relative overflow-hidden bg-[#edf6ff] pb-10 lg:pb-14">
            <BackgroundShape variant={7} side="left" className="-left-24 bottom-[-180px] w-[320px] opacity-45 sm:w-[400px] lg:-left-2 lg:bottom-[-120px] lg:w-[470px]" />
            <BackgroundShape variant={1} className="-right-24 bottom-[-250px] w-[330px] opacity-35 lg:-right-2 lg:w-[500px]" />
            <div className="relative z-10 mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
                    
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start lg:gap-8">
                        <div className="text-center lg:mb-10 lg:text-left">
                            <p className="text-[20px] leading-tight text-black lg:text-[34px]">
                                Grow Better with
                            </p>
                            <h2 className="my-1 text-[34px] font-semibold leading-[1.05] bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-transparent sm:text-4xl">
                                Insights<br />Opinion
                            </h2>
                        </div>

                        <div className="w-[45%] mx-auto  text-center">
                            <Image
                                src="/grow-better.png"
                                alt="Blog Image"
                                width={1000}
                                height={1000}
                                className="h-auto w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="mx-auto w-full max-w-[560px]">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                required
                                placeholder="Name"
                                className="h-[44px] rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 text-sm text-white outline-none placeholder:text-white/85"
                            />

                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                required
                                placeholder="Email"
                                className="h-[44px] rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 text-sm text-white outline-none placeholder:text-white/85"
                            />

                            <div className="relative">
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white outline-none"
                                >
                                    <option value="" disabled>Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>UAE</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="relative flex h-[44px] rounded-[6px] border border-[#202c63] bg-[#18235a]">
                                <CountryCodeSelect
                                    value={formData.countryCode}
                                    onChange={(countryCode) => setFormData((current) => ({ ...current, countryCode }))}
                                    required
                                    className="w-[88px] shrink-0 border-r border-white/20"
                                    buttonClassName="px-3 text-sm text-white"
                                />
                                <input name="phone" value={formData.phone} onChange={handleChange} type="tel" inputMode="tel" required placeholder="Mobile number" className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/85" />
                            </div>

                            <div className="relative sm:col-span-1">
                                <select
                                    name="enquiryType"
                                    value={formData.enquiryType}
                                    onChange={handleChange}
                                    required
                                    className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white outline-none"
                                >
                                    <option value="" disabled>Please Select</option>
                                    {SERVICE_SELECT_OPTIONS.map((option) => (
                                        <option key={option}>{option}</option>
                                    ))}
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="h-[42px] min-w-[130px] rounded-[6px] bg-gradient-to-r from-[#49c3b0] to-[#5ca8ff] px-6 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
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
                </div>
            </div>
        </section>
    );
}
