"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import BackgroundShape from "../about-us/background-shape";

const initialFormData = {
    name: "",
    email: "",
    country: "",
    countryCode: "",
    enquiryType: "",
};

export default function CaseStudiesForm() {
    const [formData, setFormData] = useState(initialFormData);
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
                formName: "case_studies_enquiry",
                name: formData.name,
                email: formData.email,
                country: formData.country,
                countryCode: formData.countryCode,
                enquiryType: formData.enquiryType,
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
        <section className="relative overflow-hidden bg-[#eef7ff] pt-4 lg:pt-14 py-10 lg:py-14">
            <BackgroundShape variant={5} className="-right-24 -bottom-48 w-[330px] opacity-40 lg:-right-3 lg:w-[490px]" />
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">

                    {/* Left Side — Heading + Image */}
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8 lg:items-start">
                        <div className="text-center sm:text-left">
                            <p className="text-[18px] leading-tight text-black sm:text-[22px] lg:text-[28px]">
                                Grow Better with
                            </p>
                            <h2 className="mt-1 bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-[36px] font-semibold leading-[1.05] text-transparent sm:text-[44px] lg:text-[52px]">
                                Insight
                                <br />
                                Opinion
                            </h2>
                        </div>

                        <div className="w-full max-w-[200px] lg:max-w-[260px]">
                            <Image
                                src="/grow-better.png"
                                alt="Grow Better"
                                width={1000}
                                height={1000}
                                className="h-[200px] w-full rounded-lg object-contain lg:h-[300px]"
                            />
                        </div>
                    </div>

                    {/* Right Side — Form */}
                    <div className="mx-auto w-full max-w-[560px]">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                required
                                placeholder="Name"
                                className="h-[44px] rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 text-sm text-white outline-none placeholder:text-white/75"
                            />

                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                required
                                placeholder="Email"
                                className="h-[44px] rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 text-sm text-white outline-none placeholder:text-white/75"
                            />

                            <div className="relative">
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white/75 outline-none"
                                >
                                    <option value="" disabled>Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>UAE</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="relative">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    required
                                    className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white/75 outline-none"
                                >
                                    <option value="" disabled>Mobile</option>
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                    <option>+971</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="relative sm:col-span-1">
                                <select
                                    name="enquiryType"
                                    value={formData.enquiryType}
                                    onChange={handleChange}
                                    required
                                    className="h-[44px] w-full appearance-none rounded-[6px] border border-[#202c63] bg-[#18235a] px-4 pr-10 text-sm text-white/75 outline-none"
                                >
                                    <option value="" disabled>Please Select</option>
                                    <option>General Enquiry</option>
                                    <option>Business Query</option>
                                    <option>Support</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="h-[42px] w-full rounded-[6px] bg-gradient-to-r from-[#49c3b0] to-[#5ca8ff] px-6 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[140px]"
                                >
                                    {loading ? "Submitting..." : "Submit Now"}
                                </button>
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
