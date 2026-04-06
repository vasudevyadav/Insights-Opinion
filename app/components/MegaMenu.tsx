"use client";

import Link from "next/link";
import {
    ChevronRight,
    FileText,
    BarChart3,
    Users,
    Briefcase,
    Target,
    Globe,
} from "lucide-react";

const leftItems = [
    { title: "Use Cases", active: true },
    { title: "Industries", active: false },
];

const menuItems = [
    { title: "Market Research", href: "/services/market-research", icon: BarChart3 },
    { title: "Survey Programming", href: "/services/survey-programming", icon: FileText },
    { title: "Data Collection", href: "/services/data-collection", icon: Users },
    { title: "Healthcare Research", href: "/services/healthcare-research", icon: Briefcase },
    { title: "B2B Research", href: "/services/b2b-research", icon: Target },
    { title: "Global Panels", href: "/services/global-panels", icon: Globe },
];

type MegaMenuProps = {
    open: boolean;
};

export default function MegaMenu({ open }: MegaMenuProps) {
    return (
        <div
            className={`absolute left-48 top-1.5 z-50 mt-4 w-[1100px] -translate-x-1/2 transform transition-all duration-300 ease-out ${open
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
                }`}
        >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <div className="grid grid-cols-[180px_1fr_320px] gap-8">
                    <div className="space-y-3">
                        {leftItems.map((item) => (
                            <button
                                key={item.title}
                                type="button"
                                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium transition ${item.active
                                    ? "bg-[#eef2ff] text-[#4f46e5]"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                                    }`}
                            >
                                <span>{item.title}</span>
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-gray-50"
                                >
                                    <Icon className="mt-0.5 h-5 w-5 text-gray-500 group-hover:text-[#4f46e5]" />
                                    <div>
                                        <p className="text-[16px] font-semibold text-gray-900">{item.title}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="rounded-2xl border border-dashed border-[#a5b4fc] bg-[#f8faff] p-5">
                        <div className="mb-3 inline-block rounded-full border border-[#a5b4fc] px-3 py-1 text-xs font-medium text-[#4f46e5]">
                            Featured
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-[18px] font-semibold text-gray-900">Insights Solutions</p>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Fast, flexible, and scalable research support for brands, agencies, and healthcare teams.
                                </p>
                            </div>

                            <div className="space-y-2 text-sm text-gray-700">
                                <p>• Quantitative research.</p>
                                <p>• Qualitative research.</p>
                                <p>• CATI and online surveys.</p>
                                <p>• Global respondent access.</p>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <Link
                                    href="/contact-us"
                                    className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
                                >
                                    Book Demo
                                </Link>
                                <Link
                                    href="/services"
                                    className="rounded-xl bg-[#6d4aff] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5b3df0]"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}