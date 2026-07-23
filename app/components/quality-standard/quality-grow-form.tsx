"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import { SERVICE_SELECT_OPTIONS } from "@/app/lib/service-options";
import { useRouter } from "next/navigation";

const selectClass =
    "h-12 w-full appearance-none rounded-[6px] bg-[#101538] px-6 pr-10 text-left text-sm text-white outline-none";

const initialFormData = {
    name: "",
    email: "",
    country: "",
    phone: "",
    enquiryType: "",
};

export default function QualityGrowForm() {
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
                formName: "quality_standard",
                name: formData.name,
                email: formData.email,
                country: formData.country,
                phone: formData.phone,
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
        <section id="quality-grow-form" className="quality-hex-bg relative overflow-hidden pb-10 pt-8 lg:pb-12 lg:pt-10">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                <div className="grid items-center gap-4 sm:grid-cols-[0.8fr_1fr] lg:pl-20">
                    <div>
                        <p className="text-[25px] font-light leading-tight text-[#18213d] lg:text-[29px]">Grow Better with</p>
                        <h2 className="quality-gradient-text mt-2 text-[39px] font-light leading-tight lg:text-[44px]">
                            Insight<br />Opinion
                        </h2>
                    </div>
                    <div className="relative h-[280px] sm:h-[350px]">
                        <Image
                            src="/grow-better.png"
                            alt="Grow Better with Insight Opinion"
                            fill
                            sizes="(min-width: 1024px) 280px, 100vw"
                            className="object-contain object-center"
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2 lg:pr-20">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        required
                        className="h-12 rounded-[6px] bg-[#101538] px-6 text-sm text-white outline-none placeholder:text-white"
                        placeholder="Name"
                    />
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        required
                        className="h-12 rounded-[6px] bg-[#101538] px-6 text-sm text-white outline-none placeholder:text-white"
                        placeholder="Email"
                    />

                    <div className="relative">
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className={selectClass}
                        >
                            <option value="" disabled>Country</option>
                            <option>India</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>UAE</option>
                        </select>
                        <ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white" />
                    </div>

                    <div className="relative">
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            required
                            className="h-12 w-full rounded-[6px] bg-[#101538] px-6 text-sm text-white outline-none placeholder:text-white"
                            placeholder="Mobile"
                        />
                    </div>

                    <div className="relative">
                        <select
                            name="enquiryType"
                            value={formData.enquiryType}
                            onChange={handleChange}
                            required
                            className={selectClass}
                        >
                            <option value="" disabled>Please Select</option>
                            {SERVICE_SELECT_OPTIONS.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>
                        <ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white" />
                    </div>

                    <div className="hidden lg:block" />
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="h-11 w-full rounded-[6px] bg-gradient-to-r from-[#18b9aa] to-[#65adff] text-base text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:max-w-[190px]"
                        >
                            {loading ? "Submitting..." : "Submit Now"}
                        </button>
                        {status && (
                            <p className="mt-2 text-sm font-semibold text-[#0f766e]">{status}</p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
