"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { submitLeadForm } from "@/app/lib/lead-form-api";
import { SERVICE_SELECT_OPTIONS } from "@/app/lib/service-options";

const SCROLL_THRESHOLD_PERCENT = 40;
const SESSION_STORAGE_KEY = "io_scroll_popup_shown";

const fieldClass =
    "h-11 w-full rounded-md border border-transparent bg-[#f4f7fb] px-4 text-sm text-[#18213f] outline-none placeholder:text-[#8a93a6] focus:border-[#20b7a6]";

const initialFormData = {
    name: "",
    email: "",
    country: "",
    phone: "",
    enquiryType: "",
};

export default function ScrollLeadPopup() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (sessionStorage.getItem(SESSION_STORAGE_KEY)) {
            return;
        }

        const handleScroll = () => {
            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (scrollableHeight <= 0) {
                return;
            }

            const scrolledPercent = (window.scrollY / scrollableHeight) * 100;

            if (scrolledPercent >= SCROLL_THRESHOLD_PERCENT) {
                setOpen(true);
                sessionStorage.setItem(SESSION_STORAGE_KEY, "1");
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open]);

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
                formName: "scroll_popup",
                name: formData.name,
                email: formData.email,
                country: formData.country,
                phone: formData.phone,
                enquiryType: formData.enquiryType,
            });

            setFormData(initialFormData);
            setOpen(false);
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
        <>
            {!open && (
                <button
                    type="button"
                    onClick={() => {
                        setStatus("");
                        setOpen(true);
                    }}
                    aria-label="Request callback"
                    className="fixed right-0 top-1/2 z-[190] hidden -translate-y-1/2 items-center rounded-l-[30px] bg-gradient-to-b from-[#16b9a7] to-[#63acf2] px-4 py-8 text-xs font-semibold uppercase tracking-[0.06em] text-white shadow-lg transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20b7a6] focus-visible:ring-offset-2 lg:flex"
                >
                    <span className="rotate-180 [writing-mode:vertical-rl]">
                        Request Callback
                    </span>
                </button>
            )}

            {open && (
                <div
            role="dialog"
            aria-modal="true"
            aria-label="Get in touch with Insights Opinion"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
            onClick={() => setOpen(false)}
        >
            <div
                className="relative w-full max-w-[480px] rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f5f9] text-[#151b48] transition hover:bg-[#e2e8f0]"
                >
                    <X size={18} />
                </button>

                <h2 className="pr-8 text-xl font-semibold leading-tight text-[#151b48] sm:text-2xl">
                    Grow Better with{" "}
                    <span className="quality-gradient-text">Insight Opinion</span>
                </h2>
                <p className="mt-2 text-sm text-[#4b5563]">
                    Share your details and our team will reach out with the right research solution for you.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        required
                        placeholder="Name"
                        className={fieldClass}
                    />
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        required
                        placeholder="Email"
                        className={fieldClass}
                    />
                    <div className="grid grid-cols-2 gap-3">
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
                            <option>UAE</option>
                        </select>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            required
                            placeholder="Mobile"
                            className={fieldClass}
                        />
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

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-md bg-gradient-to-r from-[#14b8a6] to-[#59a9ee] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Submitting..." : "Submit Now"}
                    </button>

                    {status && (
                        <p className="text-sm font-semibold text-[#0f766e]">{status}</p>
                    )}
                </form>
            </div>
                </div>
            )}
        </>
    );
}
