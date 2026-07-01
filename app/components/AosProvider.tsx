"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
// @ts-expect-error - aos does not ship TypeScript declarations
import AOS from "aos";
import "aos/dist/aos.css";

let aosInitialized = false;

export default function AosProvider() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (aosInitialized) return;

    aosInitialized = true;
    AOS.init({
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

    return () => {
      document.documentElement.classList.remove("aos-animate");
    };
  }, []);

  useEffect(() => {
    if (!aosInitialized) return;

    const frame = requestAnimationFrame(() => {
      if (previousPathname.current === pathname) {
        AOS.refresh();
      } else {
        previousPathname.current = pathname;
        AOS.refreshHard();
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
