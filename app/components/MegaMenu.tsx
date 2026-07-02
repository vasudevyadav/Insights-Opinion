"use client";

import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    FileText,
    BarChart3,
    Users,
    Briefcase,
    HeartPulse,
    Landmark,
    ShoppingBag,
    GraduationCap,
} from "lucide-react";

const leftItems = [
    {
        title: "Quantitative Research",
        key: "quantitative-research",
        href: "/quantitative-research",
    },
    { title: "Qualitative Research", key: "QualitativeResearch", href: "/qualitative-research" },
    { title: "Support Services", key: "SupportServices", href: "/support-services" },
] as const;

const menuData = {
    "quantitative-research": [
        {
            title: "Global Panel",
            href: "/quantitative-research/methods/global-panel",
            icon: BarChart3,
        },
        {
            title: "CATI",
            href: "/quantitative-research/methods/cati",
            icon: FileText,
        },
        {
            title: "CAPI",
            href: "/quantitative-research/methods/capi",
            icon: Users,
        },
        {
            title: "CLT",
            href: "/quantitative-research/methods/clt",
            icon: Briefcase,
        },
    ],
    QualitativeResearch: [
        {
            title: "Focus Group Discussions",
            href: "/quantitative-research/methods/focus-group-discussions",
            icon: HeartPulse,
        },
        {
            title: "In-Depth Reviews",
            href: "/quantitative-research/methods/in-depth-reviews",
            icon: Landmark,
        },
        {
            title: "In-Home Usage Testings",
            href: "/quantitative-research/methods/in-home-usage-testings",
            icon: ShoppingBag,
        },
        {
            title: "Mystery Shopping",
            href: "/quantitative-research/methods/mystery-shopping",
            icon: GraduationCap,
        },
    ],
    SupportServices: [
        {
            title: "Survey Programming",
            href: "/quantitative-research/methods/survey-programming",
            icon: Landmark,
        },
        {
            title: "Translation",
            href: "/quantitative-research/methods/translation",
            icon: ShoppingBag,
        },
        {
            title: "Data Insights",
            href: "/quantitative-research/methods/data-insights",
            icon: GraduationCap,
        },
    ],
} as const;

type MegaMenuTab = keyof typeof menuData;

type MegaMenuProps = {
    open: boolean;
};

export default function MegaMenu({ open }: MegaMenuProps) {
    const [activeTab, setActiveTab] = useState<MegaMenuTab>("quantitative-research");

    const activeMenuItems = menuData[activeTab];

    return (
        <div
            className={`absolute left-48 top-3 z-50 mt-4 w-[1100px] -translate-x-1/2 transform transition-all duration-300 ease-out ${open
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
                }`}
        >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <div className="grid grid-cols-[300px_1fr_300px] gap-8">
                    <div className="space-y-3">
                        {leftItems.map((item) => (
                            <div key={item.title}>
                                <Link
                                    href={item.href}
                                    onMouseEnter={() => setActiveTab(item.key)}
                                    onFocus={() => setActiveTab(item.key)}
                                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold transition ${activeTab === item.key
                                        ? "bg-[#eef2ff] text-[#4f46e5]"
                                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                                        }`}
                                >
                                    <span>{item.title}</span>
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                        {activeMenuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group flex items-center gap-3 rounded-xl px-2 transition hover:bg-gray-50"
                                >
                                    <Icon className="mt-0.5 h-7 w-7 text-gray-500 group-hover:text-[#4f46e5]" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 group-hover:text-[#4f46e5]">{item.title}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="rounded-2xl border border-dashed border-[#a5b4fc] bg-[#f8faff] p-5">

                        <div className="space-y-4">
                            <div>
                                <p className="text-[18px] font-semibold text-gray-900">Insights Solutions</p>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Fast, flexible, and scalable research support for brands, agencies, and healthcare teams.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
