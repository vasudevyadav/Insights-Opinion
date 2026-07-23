"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ArrowUpRight, RefreshCw } from "lucide-react";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import CareerShape from "./career-shape";

const jobs = [
    { id: 1, title: "Senor Inventory Specialist", type: "Full Time", salary: "$100 - $500", location: "New York" },
    { id: 2, title: "Senor Developer", type: "Full Time", salary: "$100 - $500", location: "New York" },
    { id: 3, title: "Senor Designer", type: "Full Time", salary: "$100 - $500", location: "New York" },
    { id: 4, title: "Quality Analyst", type: "Full Time", salary: "$100 - $500", location: "New York" },
    { id: 5, title: "QC Manager", type: "Full Time", salary: "$100 - $500", location: "New York" },
];

const jobTitles = ["Senor Inventory Specialist", "Senor Developer", "Senor Designer", "Quality Analyst", "QC Manager"];

const inputCls = "w-full rounded-md border border-[#d1d5db] bg-white px-3 py-2 text-[12px] text-[#253047] placeholder:text-[#5f6570] outline-none focus:border-[#1dc3b3]";

const createCaptcha = () => Math.random().toString(36).slice(2, 8).toUpperCase();

export default function CareerPositions() {
    const [expandedJob, setExpandedJob] = useState<number | null>(null);
    const [captcha, setCaptcha] = useState("IO2026");
    const formRef = useRef<HTMLDivElement>(null);
    const [resumeName, setResumeName] = useState("");
    const [formData, setFormData] = useState({
        name: "", email: "", mobile: "", jobTitle: "", about: "", captchaInput: "",
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: { target: { name: string; value: string } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFile = (e: { target: { files: FileList | null } }) => {
        if (e.target.files?.[0]) setResumeName(e.target.files[0].name);
    };

    const applyForJob = (jobTitle: string) => {
        setFormData((current) => ({ ...current, jobTitle }));
        setStatus("");
        requestAnimationFrame(() => {
            formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    };

    const refreshCaptcha = () => {
        setCaptcha(createCaptcha());
        setFormData((current) => ({ ...current, captchaInput: "" }));
        setStatus("");
    };

    const handleSubmit = async (e: { preventDefault(): void }) => {
        e.preventDefault();
        if (formData.captchaInput !== captcha) {
            setStatus("Invalid captcha. Please try again.");
            return;
        }
        setLoading(true);
        setStatus("");

        try {
            await submitLeadForm({
                formName: "career_application",
                name: formData.name,
                email: formData.email,
                phone: formData.mobile,
                enquiryType: formData.jobTitle,
                message: resumeName
                    ? `${formData.about}\n\nResume attached: ${resumeName}`
                    : formData.about,
            });

            setStatus("Application submitted successfully!");
            setFormData({ name: "", email: "", mobile: "", jobTitle: "", about: "", captchaInput: "" });
            setResumeName("");
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
        <section className="relative overflow-hidden bg-[#edf6ff] py-12 [font-family:var(--font-poppins)] lg:pt-16 pt-0 lg:py-16">
            <CareerShape variant={2} className="-left-24 bottom-[-85px] w-[330px] opacity-25 sm:w-[420px] lg:-left-2 lg:bottom-[-45px] lg:w-[510px]" />
            <CareerShape variant={1} className="-right-24 bottom-[-345px] w-[330px] opacity-25 sm:w-[410px] lg:-right-4 lg:bottom-[-365px] lg:w-[490px]" />

            <div className="relative z-10 mx-auto max-w-[1120px] px-5 sm:px-6">
                {/* Heading */}
                <h2 className="mb-8 text-center text-[26px] font-semibold text-[#1bb6ae] lg:text-[30px]">
                    Open Positions
                </h2>

                {/* 2-col layout */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px] lg:items-start xl:grid-cols-[1fr_380px] xl:gap-16">

                    <div>
                        {/* Filters */}
                        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                            {[
                                { label: "Profession", placeholder: "Select what you do" },
                                { label: "Team", placeholder: "e.g. Design" },
                                { label: "Location", placeholder: "e.g. in - Office" },
                            ].map((f) => (
                                <div key={f.label} className="flex flex-col gap-2">
                                    <label className="text-[13px] font-medium text-[#23b9bd]">{f.label}</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none rounded border border-[#53627a] bg-transparent py-1.5 pl-3 pr-8 text-[12px] font-medium text-[#253047] outline-none focus:border-[#1dc3b3]">
                                            <option value="">{f.placeholder}</option>
                                        </select>
                                        <ChevronDown size={14} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6b7280]" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sort */}
                        <div className="mb-5 relative inline-flex items-center">
                            <select className="appearance-none rounded border border-[#53627a] bg-transparent py-1.5 pl-3 pr-7 text-[12px] font-medium text-[#253047] outline-none focus:border-[#1dc3b3]">
                                <option>Latest</option>
                                <option>Oldest</option>
                            </select>
                            <ChevronDown size={13} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#6b7280]" />
                        </div>

                        {/* Job listings */}
                        <div className="divide-y divide-[#d1e8f5]">
                            {jobs.map((job) => (
                                <div key={job.id} className="py-3.5">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                                        <div className="min-w-0">
                                            <h3 className="text-base font-normal text-[#27b9c0] sm:text-lg lg:text-[20px]">{job.title}</h3>
                                            <div className="mt-1 flex flex-wrap items-center gap-3 text-[11px] font-medium text-[#253047] sm:text-[12px]">
                                                <span>{job.type}</span>
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#1dc3b3]" />
                                                <span>{job.salary}</span>
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#1dc3b3]" />
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex shrink-0 items-center justify-between lg:justify-none gap-2 sm:gap-3">
                                            <button
                                                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                                                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c0cdd8] bg-white transition hover:border-[#1dc3b3]"
                                            >
                                                <ChevronDown
                                                    size={15}
                                                    className={`text-[#6b7280] transition-transform duration-200 ${expandedJob === job.id ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                            <button type="button" onClick={() => applyForJob(job.title)} className="flex items-center gap-1.5 whitespace-nowrap rounded bg-gradient-to-b from-[#64b9ff] to-[#13bbaa] px-3 py-1.5 text-[11px] font-medium text-white transition hover:opacity-90 sm:px-4 sm:text-[12px]">
                                                Submit Application <ArrowUpRight size={13} />
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className={`grid transition-all duration-500 ease-in-out motion-reduce:transition-none ${expandedJob === job.id
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="mt-3 rounded bg-white px-4 py-3 text-sm text-[#4b5563]">
                                                <p>We are looking for a talented <strong>{job.title}</strong> to join our growing team.</p>
                                                <ul className="mt-2 list-disc space-y-1 pl-5">
                                                    <li>2+ years of relevant experience</li>
                                                    <li>Strong communication and collaboration skills</li>
                                                    <li>Ability to work in a fast-paced environment</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Application Form */}
                    <div ref={formRef} className="scroll-mt-24 rounded-[30px] bg-gradient-to-r from-[#9a9a9a] to-[#666] px-4 py-5 text-white shadow-[12px_10px_24px_rgba(40,48,65,0.2)] sm:px-6 sm:py-7 lg:sticky lg:top-24 lg:mt-[112px]">
                        <h3 className="mb-6 text-[15px] font-medium text-white sm:text-[16px]">Careers Application Form</h3>

                        <form onSubmit={handleSubmit} className="lg:space-y-6 space-y-3">
                            {/* Name + Email */}
                            <div className="grid grid-cols-1 gap-3 lg:gap-6 sm:grid-cols-2">
                                <input name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className={inputCls} />
                                <input name="email" value={formData.email} onChange={handleChange} type="email" required placeholder="Email" className={inputCls} />
                            </div>

                            {/* Mobile + Job Title */}
                            <div className="grid grid-cols-1 gap-3 lg:gap-6 sm:grid-cols-2">
                                <input name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Mobile" className={inputCls} />
                                <div className="relative">
                                    <select
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        required
                                        className="w-full appearance-none rounded border border-[#d1d5db] bg-white px-3 py-2.5 text-sm text-[#374151] outline-none focus:border-[#1dc3b3]"
                                    >
                                        <option value="">Job Title</option>
                                        {jobTitles.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={13} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6b7280]" />
                                </div>
                            </div>

                            {/* About */}
                            <textarea
                                name="about"
                                value={formData.about}
                                onChange={handleChange}
                                rows={3}
                                placeholder="About yourself"
                                className="w-full resize-none rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9ca3af] outline-none focus:border-[#1dc3b3]"
                            />

                            {/* File upload */}
                            <div>
                                <label className="inline-flex cursor-pointer items-center gap-2">
                                    <span className="rounded border border-[#d1d5db] bg-white px-3 py-1.5 text-sm text-[#374151] hover:bg-[#f3f4f6] transition">
                                        Choose file
                                    </span>
                                    <input type="file" accept=".doc,.pdf,.docx" onChange={handleFile} className="hidden" />
                                </label>
                                <p className="mt-3 lg:text-sm text-xs text-white/70">
                                    {resumeName || "Upload your Resume (doc, pdf, docx)"}
                                </p>
                            </div>

                            {/* Captcha */}
                            <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                                <input
                                    name="captchaInput"
                                    value={formData.captchaInput}
                                    onChange={handleChange}
                                    placeholder="Captcha"
                                    required
                                    className="flex-1 rounded border border-[#d1d5db] bg-[#7a7d8a] px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/40"
                                />
                                <div className="flex-shrink-0 rounded bg-white px-3 py-2 text-sm font-mono font-bold tracking-wider text-[#374151] select-none">
                                    {captcha}
                                </div>
                                <button type="button" onClick={refreshCaptcha} className="text-white/70 hover:text-white transition" title="Refresh captcha">
                                    <RefreshCw size={15} />
                                </button>
                            </div>

                            {status && (
                                <p className={`text-xs font-medium ${status.includes("success") ? "text-green-300" : "text-red-300"}`}>
                                    {status}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-1 w-full rounded bg-[#4a4d5a] py-2.5 text-sm font-semibold text-white transition hover:bg-[#3d404d] disabled:opacity-60"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
