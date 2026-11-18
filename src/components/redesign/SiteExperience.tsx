"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import SpecialistFinder, { type FinderPreset } from "@/components/redesign/SpecialistFinder";
import { useCalendly } from "@/context/CalendlyContext";

const referencePaths = ["/", "/our-agents", "/industries/construction", "/services/property-management", "/services/bookkeeping-accounting", "/services", "/how-it-works"];

export default function SiteExperience({ children, footer }: { children: ReactNode; footer: ReactNode }) {
  const pathname = usePathname();
  const isEstimatingLanding = pathname === "/services/estimating-support";
  const { openCalendly } = useCalendly();
  const [finder, setFinder] = useState<FinderPreset | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const close = () => setFinder(null);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);
  function intercept(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof Element)) return;
    const trigger = event.target.closest<HTMLElement>("[data-open-fs], [data-book-call], [data-cal]");
    if (!trigger) return;
    event.preventDefault();
    if (trigger.hasAttribute("data-book-call") || trigger.hasAttribute("data-cal")) { openCalendly(); return; }
    returnFocus.current = trigger;
    setFinder({ need: trigger.dataset.fsNeed, industry: trigger.dataset.fsIndustry });
  }
  function closeFinder() { setFinder(null); window.requestAnimationFrame(() => returnFocus.current?.focus()); }
  return <>
    <div onClick={intercept} inert={finder !== null}>
      {!isEstimatingLanding && <Navbar key={pathname} />}
      <div id="main-content" tabIndex={-1} className={isEstimatingLanding || referencePaths.includes(pathname) ? "" : "legacy-surface"}>{children}</div>
      {!isEstimatingLanding && footer}
    </div>
    {finder && <SpecialistFinder preset={finder} onClose={closeFinder} />}
  </>;
}
