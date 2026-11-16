"use client";

import type { ReactNode } from "react";
import { useCalendly } from "@/context/CalendlyContext";

export default function BookingButton({ className, children }: { className?: string; children: ReactNode }) {
  const { openCalendly } = useCalendly();
  return <button type="button" className={className} onClick={openCalendly} aria-haspopup="dialog">{children}</button>;
}
