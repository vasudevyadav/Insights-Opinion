"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import { SERVICE_SELECT_OPTIONS } from "@/app/lib/service-options";

export function LocalBoostYour() {
    const [captcha] = useState("IO2026");
    const [formData, setFormData] = useState({ name: "", email: "", enquiryType: "", captchaInput: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.captchaInput !== captcha) {
            setStatus("Invalid captcha. Please try again.");
            return;
        }
        setLoading(true);
        setStatus("");
        try {
            await submitLeadForm({ formName: "local_boost", name: formData.name, email: formData.email, enquiryType: formData.enquiryType });
            setStatus("Submitted successfully.");
            setFormData({ name: "", email: "", enquiryType: "", captchaInput: "" });
            router.push("/thank-you");
        } catch (error) {
            setStatus(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative overflow-hidden px-4 py-10 sm:px-8"
            style={{
                backgroundImage: "url('/local/boost-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
            }}
        >

            {/* <Image src="/local/boost-bg.png" alt="Hexagon Background" layout="fill" objectFit="cover" objectPosition="" /> */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1a3e] via-[#0e2257]/80 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-5">
                    <p className="text-[20px] font-semibold leading-tight lg:text-3xl">
                        <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text text-transparent">
                            Boost Your Decisions with
                        </span>
                    </p>
                    <p className="text-[20px] font-medium text-white sm:text-3xl">
                        Reliable Market Insights!
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-wrap items-center gap-2.5">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Name"
                        className="h-[42px] flex-1 basis-[140px] rounded-md border border-white/25 bg-white/90 px-3.5 text-[13px] text-[#1e2a4e] placeholder-gray-500 outline-none focus:border-[#17afa1] focus:bg-white"
                    />

                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                        placeholder="Email"
                        className="h-[42px] flex-1 basis-[140px] rounded-md border border-white/25 bg-white/90 px-3.5 text-[13px] text-[#1e2a4e] placeholder-gray-500 outline-none focus:border-[#17afa1] focus:bg-white"
                    />
                    <select name="enquiryType" value={formData.enquiryType} onChange={handleChange} required className="h-[42px] flex-1 basis-[140px] appearance-none rounded-md border border-white/25 bg-white/90 px-3.5 text-[13px] text-gray-500 outline-none focus:border-[#17afa1] focus:bg-white focus:text-[#1e2a4e]">
                        <option value="" disabled>Please Select</option>
                        {SERVICE_SELECT_OPTIONS.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>

                    <div className="flex h-[42px] flex-1 basis-[180px] overflow-hidden rounded-md border border-white">
                        <input
                            name="captchaInput"
                            value={formData.captchaInput}
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder="Captcha"
                            className="h-full flex-1 bg-white/90 px-3.5 text-[13px] text-[#1e2a4e] placeholder-gray-500 outline-none focus:bg-white"
                        />
                        <div className="flex items-center border border-white bg-transparent lg:px-3.5 px-[1px] font-mono lg:text-[13px] text-[11px] font-bold tracking-wider text-white select-none">
                            {captcha}
                        </div>
                    </div>
                </div>

                <button type="submit" disabled={loading} className=" py-2.5 px-10 rounded-md bg-gradient-to-r from-[#14b3a1] to-[#5ba8fb] px-7 text-[14px] font-semibold text-white transition-opacity hover:opacity-85">
                    {loading ? "Submitting..." : "Submit"}
                </button>
                {status && <p className="mt-2 text-xs font-medium text-white">{status}</p>}
                </form>
            </div>
        </section>
    );
}
