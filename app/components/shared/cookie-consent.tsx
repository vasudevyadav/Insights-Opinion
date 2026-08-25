"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "insights-opinion-cookie-consent";
type Consent = "accepted" | "rejected";

function applyConsent(consent: Consent) {
  document.documentElement.dataset.cookieConsent = consent;
  window.dispatchEvent(
    new CustomEvent("cookie-consent-change", { detail: { consent } })
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY) as Consent | null;
    if (saved === "accepted" || saved === "rejected") {
      applyConsent(saved);
    } else {
      setVisible(true);
    }
  }, []);

  const choose = (consent: Consent) => {
    window.localStorage.setItem(CONSENT_KEY, consent);
    applyConsent(consent);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Cookie preferences"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-4xl rounded-xl border border-white/15 bg-[#151b4a] p-5 text-white shadow-2xl sm:p-6"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-white/85">
          We use essential cookies for website functionality. Optional analytics
          and marketing scripts remain blocked unless you accept them. See our{" "}
          <Link href="/cookies-policy" className="underline underline-offset-2">
            Cookies Policy
          </Link>.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-full border border-white/60 px-5 py-2 text-sm font-semibold"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-[#15c9a8] px-5 py-2 text-sm font-semibold text-[#07233f]"
          >
            Accept optional cookies
          </button>
        </div>
      </div>
    </aside>
  );
}
