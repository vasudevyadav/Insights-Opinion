"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { MainService } from "@/app/lib/service-catalog";

type ServicesAccordionProps = {
  services: MainService[];
};

export default function ServicesAccordion({
  services,
}: ServicesAccordionProps) {
  const [openService, setOpenService] = useState<string | null>(
    services[0]?.id ?? null
  );

  if (!services.length) {
    return (
      <section className="bg-[#edf6ff] px-4 py-16 text-center">
        <p className="text-[#4a5568]">No services are available right now.</p>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#edf6ff] py-14 lg:py-20">
      <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-[#1dc3b3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#3c8df6]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#159f96]">
            Complete service catalogue
          </p>
          <h2 className="mt-2 text-[#1e2746]">
            Main and Child Services
          </h2>
          <p className="mt-4 text-[#5c667b]">
            Open a main service to explore its specialist research methods and
            support solutions.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const isOpen = openService === service.id;
            const panelId = `${service.id}-panel`;

            return (
              <article
                key={service.id}
                className="overflow-hidden rounded-2xl border border-[#c9dfed] bg-white shadow-[0_8px_28px_rgba(30,54,93,0.07)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenService((current) =>
                      current === service.id ? null : service.id
                    )
                  }
                  className="flex w-full items-center gap-4 px-5 py-5 text-left transition hover:bg-[#f7fbff] sm:px-7 sm:py-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#172b57] text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold text-[#1e2746] sm:text-xl">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-xs text-[#6b7280] sm:text-sm">
                      {service.children.length} child services
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`shrink-0 text-[#159f96] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    className="accordion-content-enter border-t border-[#dce9f2] bg-[#f8fcff] p-4 sm:p-6"
                  >
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {service.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className="group overflow-hidden rounded-2xl border border-[#d9e7f0] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#67d3c9] hover:shadow-lg"
                        >
                          <div className="relative h-44 overflow-hidden">
                            <Image
                              src={child.image}
                              alt={child.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#172b57]/60 to-transparent" />
                          </div>
                          <div className="flex items-center justify-between gap-3 p-4">
                            <h3 className="text-base font-semibold text-[#1e2746]">
                              {child.title}
                            </h3>
                            <ArrowRight
                              size={18}
                              className="shrink-0 text-[#159f96] transition-transform group-hover:translate-x-1"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-5 text-right">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#159f96] hover:underline"
                      >
                        View {service.title}
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
