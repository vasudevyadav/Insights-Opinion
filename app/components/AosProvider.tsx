"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
// @ts-ignore - no type declarations for 'aos'
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number;
    let timer: ReturnType<typeof setTimeout>;

    rafId = requestAnimationFrame(() => {
      AOS.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: true,
        mirror: false,
        offset: 80,
        anchorPlacement: "top-bottom",
        startEvent: "load",
        disable: "mobile",
      });
      timer = setTimeout(() => AOS.refreshHard(), 400);
    });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}