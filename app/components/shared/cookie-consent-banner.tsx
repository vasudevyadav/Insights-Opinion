"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_STORAGE_KEY = "cookie-consent";

export type CookieConsentValue = "accepted" | "rejected";

export function getStoredCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getStoredCookieConsent() === null) {
      setVisible(true);
    }
  }, []);

  const setConsent = (value: CookieConsentValue) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
      window.dispatchEvent(
        new CustomEvent("cookie-consent-change", { detail: value })
      );
    } catch {
      // localStorage unavailable — banner still dismisses for this session
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#c7d2e2] bg-white px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-xs leading-5 text-[#344054] sm:text-sm">
          We use cookies to improve your experience and analyze site usage.
          Non-essential cookies are only set after you accept. Read our{" "}
          <Link href="/privacy-policy" className="font-medium text-[#1a1f52] underline hover:text-[#1dc3b3]">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="rounded-md border border-[#c7d2e2] px-4 py-2 text-xs font-medium text-[#344054] transition hover:border-[#1a1f52] sm:text-sm"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-md bg-[#1a1f52] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#1dc3b3] sm:text-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
