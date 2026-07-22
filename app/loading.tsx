"use client";

import { useEffect } from "react";
import LoadingOverlay from "@/app/components/shared/loading-overlay";

export default function Loading() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return <LoadingOverlay />;
}
