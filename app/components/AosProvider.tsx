"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";

let aosInitialized = false;
type AosApi = {
  init: (options: Record<string, unknown>) => void;
  refresh: () => void;
  refreshHard: () => void;
};
let aosApi: AosApi | null = null;

export default function AosProvider() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (aosInitialized) return;

    const initializeAos = async () => {
      if (aosInitialized) return;

      // @ts-expect-error - aos does not ship TypeScript declarations
      const aosLibrary = await import("aos");
      aosApi = aosLibrary.default as AosApi;
      aosInitialized = true;
      aosApi.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        mirror: false,
        offset: 60,
        anchorPlacement: "top-bottom",
        debounceDelay: 120,
        throttleDelay: 150,
        disableMutationObserver: true,
        disable: () =>
          window.innerWidth < 768 ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    };

    // Animations are decorative, so load their JavaScript after critical
    // content has painted instead of competing with hydration and LCP.
    const timer = window.setTimeout(initializeAos, 900);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("aos-animate");
    };
  }, []);

  useEffect(() => {
    if (!aosInitialized || !aosApi) return;

    const frame = requestAnimationFrame(() => {
      if (previousPathname.current === pathname) {
        aosApi?.refresh();
      } else {
        previousPathname.current = pathname;
        aosApi?.refreshHard();
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
