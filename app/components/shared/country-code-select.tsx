"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import {
  getCountries,
  getCountryCallingCode,
  type CountryCode,
} from "libphonenumber-js";

type CountryCodeSelectProps = {
  value: string;
  onChange: (dialCode: string) => void;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  required?: boolean;
  ariaLabel?: string;
};

const countryNames = new Intl.DisplayNames(["en"], { type: "region" });
const priorityCountries: CountryCode[] = ["IN", "US", "GB"];

const countries = getCountries()
  .map((country) => ({
    country,
    name: countryNames.of(country) ?? country,
    dialCode: `+${getCountryCallingCode(country)}`,
  }))
  .sort((a, b) => {
    const aPriority = priorityCountries.indexOf(a.country);
    const bPriority = priorityCountries.indexOf(b.country);
    if (aPriority !== -1 || bPriority !== -1) {
      if (aPriority === -1) return 1;
      if (bPriority === -1) return -1;
      return aPriority - bPriority;
    }
    return a.name.localeCompare(b.name);
  });

export default function CountryCodeSelect({
  value,
  onChange,
  className = "",
  buttonClassName = "",
  dropdownClassName = "",
  required = false,
  ariaLabel = "Country calling code",
}: CountryCodeSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredCountries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return countries;

    return countries.filter(
      ({ name, dialCode, country }) =>
        name.toLowerCase().includes(normalizedQuery) ||
        dialCode.includes(normalizedQuery) ||
        country.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    requestAnimationFrame(() => searchRef.current?.focus());

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <input type="hidden" value={value} required={required} readOnly />
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex h-full w-full items-center justify-between gap-1 whitespace-nowrap outline-none ${buttonClassName}`}
      >
        <span>{value || "Code"}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className={`absolute left-0 top-[calc(100%+6px)] z-[120] w-[min(320px,calc(100vw-32px))] overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-800 shadow-2xl ${dropdownClassName}`}
        >
          <div className="sticky top-0 z-10 border-b border-slate-200 bg-white p-2">
            <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3">
              <Search className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                ref={searchRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search country or code"
                className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <div role="listbox" className="max-h-64 overflow-y-auto overscroll-contain py-1 sm:max-h-72">
            {filteredCountries.map(({ country, name, dialCode }) => (
              <button
                key={country}
                type="button"
                role="option"
                aria-selected={value === dialCode}
                onClick={() => {
                  onChange(dialCode);
                  setOpen(false);
                  setQuery("");
                }}
                className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm hover:bg-sky-50 focus:bg-sky-50 focus:outline-none"
              >
                <span className="min-w-0 truncate">{name}</span>
                <span className="flex shrink-0 items-center gap-2 font-medium">
                  {dialCode}
                  {value === dialCode && <Check className="h-4 w-4 text-teal-600" />}
                </span>
              </button>
            ))}
            {filteredCountries.length === 0 && (
              <p className="px-3 py-5 text-center text-sm text-slate-500">No country found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
