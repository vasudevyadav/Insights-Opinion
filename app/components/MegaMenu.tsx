"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, FileText } from "lucide-react";
import type { MainService } from "@/app/lib/service-catalog";
import {
  getServiceCategoryLabel,
  getServiceChildLabel,
} from "@/app/lib/service-menu-labels";

type MegaMenuProps = {
  open: boolean;
  services: MainService[];
};

export default function MegaMenu({ open, services }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState<string | null>(
    services[0]?.id ?? null
  );
  const activeService =
    services.find((service) => service.id === activeTab) ?? services[0];
  const activeMenuItems = activeService?.children ?? [];

  return (
    <div
      className={`absolute left-48 top-[6px] z-50 mt-2 w-[1100px] -translate-x-1/2 transform transition-all duration-300 ease-out ${open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
        }`}
    >
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-[300px_1fr_240px] gap-8">
          <div className="space-y-3">
            {services.map((item) => (
              <div key={item.id}>
                <Link
                  href={item.href}
                  onMouseEnter={() => setActiveTab(item.id)}
                  onFocus={() => setActiveTab(item.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold transition ${activeService?.id === item.id
                      ? "bg-[#eef2ff] text-[#4f46e5]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                >
                  <span>{getServiceCategoryLabel(item)}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {activeMenuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl px-2 transition hover:bg-gray-50"
              >
                <FileText className="mt-0.5 h-7 w-7 text-gray-500 group-hover:text-[#4f46e5]" />
                <div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-[#4f46e5]">
                    {getServiceChildLabel(item)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl border border-dashed border-[#a5b4fc] bg-[#f8faff] p-5">
            <div className="space-y-4">
              <div>
                <p className="text-[18px] font-semibold text-gray-900">
                  Insights Solutions
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Fast, flexible, and scalable research support for brands,
                  agencies, and healthcare teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
