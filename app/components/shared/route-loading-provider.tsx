"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LoadingOverlay from "./loading-overlay";

export default function RouteLoadingProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLoading(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    document.body.style.overflow = "";
  }, [pathname, searchParams]);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
      document.body.style.overflow = "hidden";
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "";
      }, 15000);
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        (destination.pathname === window.location.pathname &&
          destination.search === window.location.search) ||
        anchor.getAttribute("href")?.startsWith("#")
      ) {
        return;
      }

      startLoading();
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", startLoading);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", startLoading);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  return loading ? <LoadingOverlay /> : null;
}

