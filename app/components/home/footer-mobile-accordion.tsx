"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FooterContact from "./footer-contact";

type FooterGroup = {
    title: string;
    links: readonly {
        label: string;
        href: string;
    }[];
};

export default function FooterMobileAccordion({
    groups,
}: {
    groups: readonly FooterGroup[];
}) {
    const [openSection, setOpenSection] = useState<string | null>("Company");

    return (
        <div className="space-y-2 md:hidden">
            {groups.map((group) => {
                const isOpen = openSection === group.title;

                return (
                    <div
                        key={group.title}
                        className="overflow-hidden border-b border-white/15"
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setOpenSection(isOpen ? null : group.title)
                            }
                            className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-[#29c7c3]"
                            aria-expanded={isOpen}
                        >
                            {group.title}
                            <ChevronDown
                                size={19}
                                className={`transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        <div
                            className={`grid transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                                isOpen
                                    ? "grid-rows-[1fr] pb-4 opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <ul className="space-y-2">
                                    {group.links.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="block py-1 text-sm text-white/75 transition hover:text-white"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}

            <FooterContact mobile />
        </div>
    );
}
