"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Search, User } from "lucide-react";
import type { ResearchNavItem } from "@/lib/getResearchPage";
import type { MainService } from "@/app/lib/service-catalog";
import MegaMenu from "./MegaMenu";

type NavLinkItem = {
  type: "link";
  name: string;
  href: string;
};

type NavDropdownKey = "about" | "services" | "research" | "resources";

type NavDropdownItem = {
  type: "dropdown";
  name: string;
  key: NavDropdownKey;
  href?: string;
};

type NavItem = NavLinkItem | NavDropdownItem;

const mobileDropdownItems: Record<
  Exclude<NavDropdownKey, "services" | "research">,
  { name: string; href: string }[]
> = {
  about: [
    { name: "Our Story", href: "/about-us" },
    { name: "Our Team", href: "/our-team" },
    { name: "Testimonials", href: "/testimonials" },
  ],
  resources: [
    { name: "Client Success Stories", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
  ],
};

export default function Navbar({
  researchItems,
  serviceItems,
}: {
  researchItems: ResearchNavItem[];
  serviceItems: MainService[];
}) {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<NavDropdownKey | null>(null);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<
    Partial<Record<NavDropdownKey, boolean>>
  >({});
  const [mobileServiceGroup, setMobileServiceGroup] = useState<string | null>(
    null
  );
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = useMemo(
    () => [
      { type: "dropdown", name: "ABOUT", key: "about", href: "/about-us" },
      {
        type: "dropdown",
        name: "SERVICES",
        key: "services",
        href: "/services",
      },
      { type: "link", name: "INDUSTRIES", href: "/industries" },
      { type: "link", name: "QUALITY STANDARD", href: "/quality-standard" },
      { type: "dropdown", name: "RESEARCH", key: "research", href: "#" },
      { type: "dropdown", name: "RESOURCES", key: "resources", href: "/resources" },
      { type: "link", name: "CONTACT US", href: "/contact-us" },
    ],
    []
  );

  const isActive = (path: string) => pathname === path;
  const isPathActive = (path?: string) => !!path && pathname.startsWith(path);

  const toggleMobileDropdown = (key: NavDropdownKey) => {
    setMobileOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getDropdownItems = (key: NavDropdownKey) => {
    if (key === "research") return researchItems;

    if (key === "about" || key === "resources") {
      return mobileDropdownItems[key];
    }

    return [];
  };

  return (
    <>
      <header className="fixed top-0 z-80 w-full">
        <div className="header-image">
          <div className="mx-auto flex h-18 max-w-[1500px] items-center justify-between px-5 lg:h-24 lg:px-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={180}
                height={48}
                className="h-auto w-36 lg:w-44"
                priority
                unoptimized
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>

            <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
              {navItems.map((item) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-[12px] font-medium tracking-[0.04em] transition-colors lg:text-base ${isActive(item.href)
                        ? "text-[#14d8d0]"
                        : "text-white hover:text-[#14d8d0]"
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                }

                const dropdownItems = getDropdownItems(item.key);

                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {(["services", "research", "resources"] as NavDropdownKey[]).includes(item.key) ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown((current) =>
                            current === item.key ? null : item.key
                          )
                        }
                        className={`flex items-center gap-1 text-[12px] font-medium tracking-[0.04em] transition-colors lg:text-base ${isPathActive(item.href)
                          ? "text-[#14d8d0]"
                          : "text-white hover:text-[#14d8d0]"
                          }`}
                        aria-expanded={openDropdown === item.key}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.key ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className={`flex items-center gap-1 text-[12px] font-medium tracking-[0.04em] transition-colors lg:text-base ${isPathActive(item.href)
                          ? "text-[#14d8d0]"
                          : "text-white hover:text-[#14d8d0]"
                          }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.key ? "rotate-180" : ""
                            }`}
                        />
                      </Link>
                    )}

                    {item.key === "services" ? (
                      <MegaMenu
                        open={openDropdown === "services"}
                        services={serviceItems}
                      />
                    ) : (
                      dropdownItems.length > 0 && (
                        <div
                          className={`absolute left-0 top-3 z-50 mt-4 w-64 rounded-lg border border-gray-200 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 ${openDropdown === item.key
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-3 opacity-0"
                            }`}
                        >
                          <div className="space-y-1">
                            {dropdownItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-[#4f46e5]"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <button
                type="button"
                aria-label="Search"
                className="text-white transition hover:text-[#14d8d0]"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                type="button"
                aria-label="Account"
                className="text-white transition hover:text-[#14d8d0]"
              >
                <User className="h-5 w-5" />
              </button>

              <Link
                href="/contact-us"
                className="rounded-full bg-[#15c9a8] px-4 py-1.5 text-sm font-medium text-[#07233f] transition hover:bg-[#0fd2b0]"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/70 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] overflow-y-auto bg-[#0b2343] p-5 shadow-2xl lg:hidden">
            <div className="mb-6 flex items-center justify-between mt-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={40}
                className="h-auto w-[140px]"
                priority
                unoptimized
              />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-lg px-4 py-3 text-sm font-medium ${isActive(item.href)
                        ? "bg-white/10 text-[#14d8d0]"
                        : "text-white hover:bg-white/10"
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                }

                const dropdownItems = getDropdownItems(item.key);

                return (
                  <div key={item.key} className="rounded-lg">
                    <div className="flex items-center gap-2">
                      {(["services", "research", "resources"] as NavDropdownKey[]).includes(item.key) ? (
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.key)}
                          className={`flex-1 rounded-lg px-4 py-3 text-left text-sm font-medium ${isPathActive(item.href)
                            ? "bg-white/10 text-[#14d8d0]"
                            : "text-white hover:bg-white/10"
                            }`}
                          aria-expanded={!!mobileOpenDropdowns[item.key]}
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium ${isPathActive(item.href)
                            ? "bg-white/10 text-[#14d8d0]"
                            : "text-white hover:bg-white/10"
                            }`}
                        >
                          {item.name}
                        </Link>
                      )}

                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.key)}
                        className="rounded-lg p-3 text-white hover:bg-white/10"
                        aria-label={`Toggle ${item.name}`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${mobileOpenDropdowns[item.key] ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    </div>

                    {mobileOpenDropdowns[item.key] && (
                      <div className="ml-3 mt-2 space-y-2">
                        {item.key === "services" ? (
                          serviceItems.map((group) => (
                            <div
                              key={group.id}
                              className="overflow-hidden rounded-lg bg-white/5"
                            >
                              <div className="flex items-center">
                                <Link
                                  href={group.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex-1 p-3 text-left text-xs font-semibold uppercase leading-5 tracking-wide text-[#14d8d0]"
                                >
                                  {group.title}
                                </Link>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setMobileServiceGroup((current) =>
                                      current === group.id ? null : group.id
                                    )
                                  }
                                  className="p-3 text-[#14d8d0]"
                                  aria-label={`Toggle ${group.title} child services`}
                                >
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform ${mobileServiceGroup === group.id
                                      ? "rotate-180"
                                      : ""
                                      }`}
                                  />
                                </button>
                              </div>

                              {mobileServiceGroup === group.id && (
                                <div className="space-y-1 border-t border-white/10 p-2">
                                  {group.children.map((subItem) =>
                                    subItem.href ? (
                                      <Link
                                        key={subItem.id}
                                        href={subItem.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block rounded-lg px-3 py-2 text-sm ${isActive(subItem.href)
                                          ? "bg-white/10 text-[#14d8d0]"
                                          : "text-white/90 hover:bg-white/10"
                                          }`}
                                      >
                                        {subItem.title}
                                      </Link>
                                    ) : (
                                      <span
                                        key={subItem.id}
                                        className="block cursor-not-allowed rounded-lg px-3 py-2 text-sm text-white/40"
                                      >
                                        {subItem.title}
                                      </span>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          ))
                        ) : (
                          dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block rounded-lg px-4 py-2 text-sm ${isActive(subItem.href)
                                ? "bg-white/10 text-[#14d8d0]"
                                : "text-white/90 hover:bg-white/10"
                                }`}
                            >
                              {subItem.name}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="my-2 border-t border-white/10" />

              {[
                { name: "CAREER", href: "/career" },
                { name: "LOCAL PAGE", href: "/local" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${isActive(item.href)
                    ? "bg-white/10 text-[#14d8d0]"
                    : "text-white hover:bg-white/10"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 rounded-full bg-[#15c9a8] px-4 py-3 text-center text-sm font-semibold text-[#07233f]"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
