"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Search, User } from "lucide-react";
import MegaMenu from "./MegaMenu";

type NavLinkItem = {
    type: "link";
    name: string;
    href: string;
};

type NavDropdownItem = {
    type: "dropdown";
    name: string;
    key: "services";
    href?: string;
};

type NavItem = NavLinkItem | NavDropdownItem;

const mobileServiceItems = [
    { name: "Market Research", href: "/services/market-research" },
    { name: "Survey Programming", href: "/services/survey-programming" },
    { name: "Data Collection", href: "/services/data-collection" },
    { name: "Healthcare Research", href: "/services/healthcare-research" },
    { name: "B2B Research", href: "/services/b2b-research" },
    { name: "Global Panels", href: "/services/global-panels" },
];

export default function Navbar() {
    const pathname = usePathname();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const navItems: NavItem[] = useMemo(
        () => [
            { type: "link", name: "ABOUT", href: "/about-us" },
            { type: "dropdown", name: "SERVICES", key: "services", href: "/services" },
            { type: "link", name: "INDUSTRIES", href: "/industries" },
            { type: "link", name: "PLATFORM", href: "/platform" },
            { type: "link", name: "RESOURCES", href: "/resources" },
            { type: "link", name: "CONTACT US", href: "/contact-us" },
        ],
        []
    );

    const mobileNavLinks = useMemo(
        () =>
            navItems.filter((item): item is NavLinkItem => item.type === "link"),
        [navItems]
    );

    const isActive = (path: string) => pathname === path;
    const isServicesActive = pathname.startsWith("/services");

    return (
        <>
            <header className="fixed top-0 z-50 w-full">
                <div className="header-image">
                    <div className="mx-auto flex h-18 max-w-[1380px] items-center justify-between px-6 lg:h-24 lg:px-8">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={180}
                                height={48}
                                className="h-auto w-44 lg:w-60"
                                priority
                            />
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className="text-white lg:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-7 w-7" />}
                        </button>

                        <nav className="hidden items-center gap-8 lg:flex">
                            {navItems.map((item) => {
                                if (item.type === "link") {
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`text-[17px] font-semibold transition-colors ${isActive(item.href)
                                                ? "text-[#14d8d0]"
                                                : "text-white hover:text-[#14d8d0]"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                }

                                return (
                                    <div
                                        key={item.key}
                                        className="relative"
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        <Link
                                            href={item.href || "/services"}
                                            className={`flex items-center gap-1 text-[17px] font-semibold transition-colors ${isServicesActive
                                                ? "text-[#14d8d0]"
                                                : "text-white hover:text-[#14d8d0]"
                                                }`}
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </Link>

                                        <MegaMenu open={servicesOpen} />
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
                                <Search className="h-7 w-7" />
                            </button>

                            <button
                                type="button"
                                aria-label="Account"
                                className="text-white transition hover:text-[#14d8d0]"
                            >
                                <User className="h-7 w-7" />
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
                        <div className="mb-6 flex items-center justify-between">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={150}
                                height={40}
                                className="h-auto w-[140px]"
                                priority
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
                            {mobileNavLinks.slice(0, 1).map((item) => (
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

                            <div className="rounded-lg">
                                <div className="flex items-center gap-2">
                                    <Link
                                        href="/services"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium ${isServicesActive
                                            ? "bg-white/10 text-[#14d8d0]"
                                            : "text-white hover:bg-white/10"
                                            }`}
                                    >
                                        SERVICES
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                                        className="rounded-lg p-3 text-white hover:bg-white/10"
                                        aria-label="Toggle services"
                                    >
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                </div>

                                {mobileServicesOpen && (
                                    <div className="ml-3 mt-2 space-y-1">
                                        {mobileServiceItems.map((service) => (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`block rounded-lg px-4 py-2 text-sm ${isActive(service.href)
                                                    ? "bg-white/10 text-[#14d8d0]"
                                                    : "text-white/90 hover:bg-white/10"
                                                    }`}
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {mobileNavLinks.slice(1).map((item) => (
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