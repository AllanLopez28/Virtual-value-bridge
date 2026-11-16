"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";

const keywords: Record<string, string> = { roofing: "roofing", construction: "construction", electrical: "electrical", plumbing: "plumbing", hvac: "HVAC", remodeling: "remodeling", tile: "tile", flooring: "flooring", commercial: "commercial", residential: "residential" };

export default function LandingInteractions({ children, className }: { children: ReactNode; className: string }) {
  const page = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = page.current;
    if (!root) return;
    const query = new URLSearchParams(window.location.search);
    const terms = (query.get("kw") || query.get("utm_term") || "").toLowerCase().trim().split(/[\s+_-]+/);
    const keyword = Object.keys(keywords).find(key => terms.includes(key));
    const label = root.querySelector("#kw");
    if (keyword && label) label.textContent = keywords[keyword];
    const form = root.querySelector(".hero-form"), sticky = root.querySelector(".sticky");
    if (!form || !sticky || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => sticky.classList.toggle("off", entry.isIntersecting), { threshold: .2 });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);
  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>('a[href="#top"]');
    if (!link) return;
    event.preventDefault();
    if (link.dataset.pick) window.dispatchEvent(new CustomEvent("estimator-model-pick", { detail: link.dataset.pick }));
    const form = page.current?.querySelector<HTMLElement>(".hero-form");
    if (!form) return;
    form.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "center" });
    form.classList.remove("flash");
    void form.offsetWidth;
    form.classList.add("flash");
    form.querySelector<HTMLElement>(".step:not([hidden])")?.focus({ preventScroll: true });
  }
  return <div className={className} ref={page} onClick={handleClick}>{children}</div>;
}
