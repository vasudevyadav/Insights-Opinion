"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

export const OPEN_LEAD_MODAL_EVENT = "insights-opinion:open-lead-modal";

type LeadModalTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function LeadModalTrigger({ children, type = "button", onClick, ...props }: LeadModalTriggerProps) {
  return (
    <button
      {...props}
      type={type}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          window.dispatchEvent(new Event(OPEN_LEAD_MODAL_EVENT));
        }
      }}
    >
      {children}
    </button>
  );
}
