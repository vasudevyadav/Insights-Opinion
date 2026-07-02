"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { SiteRoute } from "@/app/lib/site-routes";

type SiteMapAccordionProps = {
  routes: SiteRoute[];
};

const groupOrder: SiteRoute["group"][] = [
  "Main",
  "Company",
  "Services",
  "Research",
  "Resources",
  "Legal",
];

export default function SiteMapAccordion({
  routes,
}: SiteMapAccordionProps) {
  const [openGroups, setOpenGroups] = useState<string[]>(["Main", "Company"]);

  const toggleGroup = (group: string) => {
    setOpenGroups((current) =>
      current.includes(group)
        ? current.filter((item) => item !== group)
        : [...current, group]
    );
  };

  return (
    <div className="space-y-4">
      {groupOrder.map((group) => {
        const groupRoutes = routes.filter((route) => route.group === group);
        const isOpen = openGroups.includes(group);

        if (groupRoutes.length === 0) return null;

        return (
          <section
            key={group}
            className="overflow-hidden rounded-xl border border-[#cfe0ec] bg-white/90 shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggleGroup(group)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="site-subsection-title font-semibold text-[#18213f]">
                {group}
              </span>
              <span className="flex items-center gap-3">
                <span className="rounded-full bg-[#e9f7f7] px-3 py-1 text-xs font-semibold text-[#159f98]">
                  {groupRoutes.length} pages
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[#18213f] transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-3 border-t border-[#dce8f0] p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
                  {groupRoutes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className="rounded-lg border border-[#e1ebf2] bg-[#f8fbfe] p-4 transition hover:-translate-y-0.5 hover:border-[#20b7a6] hover:shadow-md"
                    >
                      <h2 className="text-base font-semibold text-[#18213f]">
                        {route.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#687086]">
                        {route.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
