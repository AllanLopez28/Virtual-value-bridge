"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { enhanceReference } from "@/components/redesign/reference-interactions";

/** Scope the reference choreography to this route and dispose it on navigation. */
export default function ReferenceSurface({ children }: { children: ReactNode }) {
  const surface = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!surface.current) return;
    const cleanup = enhanceReference(surface.current);
    const specialty = new URLSearchParams(window.location.search).get("specialty");
    if (specialty && /^[a-z]+$/.test(specialty)) surface.current.querySelector<HTMLButtonElement>(`.dir-filters button[data-filter="${specialty}"]`)?.click();
    return cleanup;
  }, []);
  return <div className="reference-surface" ref={surface}>{children}</div>;
}
