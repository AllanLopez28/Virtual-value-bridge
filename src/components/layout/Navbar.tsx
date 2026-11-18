"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Building2, Calculator, ChevronDown, BriefcaseBusiness, House, Info, Mail, Menu, MessageSquare, Phone, ReceiptText, X } from "lucide-react";

const industries = [
  { href: "/industries/construction", title: "Construction & Trades", description: "Roofing and construction contractors", icon: House },
  { href: "/services/property-management", title: "Property Management", description: "Tenant comms, leasing and owner reports", icon: Building2 },
  { href: "/services/bookkeeping-accounting", title: "Accounting & Bookkeeping", description: "Books, reconciliations and month-end close", icon: ReceiptText },
];
const company = [
  { href: "/#about", title: "About", description: "Who we are", icon: Info },
  { href: "/careers", title: "Careers", description: "Join our team", icon: BriefcaseBusiness },
  { href: "/calculator", title: "Calculator", description: "Calculate your savings", icon: Calculator },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const header = useRef<HTMLElement>(null);
  const contactHref = pathname === "/services/estimating-support" ? "#estimating-inquiry" : "/#contact";
  useEffect(() => {
    function outside(event: PointerEvent) { if (!header.current?.contains(event.target as Node)) { setDropdown(null); setMenuOpen(false); } }
    function escape(event: KeyboardEvent) { if (event.key === "Escape") { header.current?.querySelector<HTMLButtonElement>(`[aria-controls="dd-${dropdown}"]`)?.focus(); setDropdown(null); setMenuOpen(false); } }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [dropdown]);
  function close() { setMenuOpen(false); setDropdown(null); }
  function dropdownMenu(name: string, label: string, entries: typeof industries) {
    return <div className={`nav-dd ${dropdown === name ? "open" : ""}`}
      onMouseEnter={() => { if (window.matchMedia("(hover: hover) and (min-width: 681px)").matches) setDropdown(name); }}
      onMouseLeave={event => { if (!event.currentTarget.contains(document.activeElement)) setDropdown(null); }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setDropdown(null); }}>
      <button type="button" className={`nav-dd-btn ${name === "industries" && (pathname.startsWith("/industries") || pathname === "/services/property-management") ? "current" : ""}`} aria-expanded={dropdown === name} aria-controls={`dd-${name}`} onClick={() => setDropdown(dropdown === name ? null : name)}>{label}<ChevronDown className="chev" /></button>
      <div className="nav-dd-menu" id={`dd-${name}`} inert={dropdown !== name}>
        {entries.map(({ href, title, description, icon: Icon }) => <Link href={href} key={href} onClick={close}><span className="dd-ic"><Icon /></span><span><b>{title}</b><small>{description}</small></span></Link>)}
      </div>
    </div>;
  }
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="topbar">
      <a href="tel:+17186506786" aria-label="Call +1 (718) 650-6786"><Phone />+1 (718) 650-6786</a><span className="sep">|</span>
      <a href="sms:+17186506786" aria-label="Text +1 (718) 650-6786"><MessageSquare />Click here to text: +1 (718) 650-6786</a><span className="sep">|</span>
      <a href="mailto:info@vvbridge.net" aria-label="Email info@vvbridge.net"><Mail />info@vvbridge.net</a>
    </div>
    <header className={`header ${menuOpen ? "menu-open" : ""}`} ref={header}>
      <Link href="/" className="brand" aria-label="Virtual Value Bridge home" onClick={close}><Image className="brand-logo" src="/redesign/brand.png" width={450} height={120} sizes="180px" alt="Virtual Value Bridge logo" preload /></Link>
      <button className="menu" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav id="main-navigation" aria-label="Main navigation">
        <Link className={pathname === "/" ? "current" : ""} href="/" onClick={close}>Home</Link>
        <Link className={pathname.startsWith("/services") && pathname !== "/services/property-management" ? "current" : ""} href="/services" onClick={close}>Services</Link>
        {dropdownMenu("industries", "Industries", industries)}
        <Link className={pathname === "/our-agents" ? "current" : ""} href="/our-agents" onClick={close}>Our Agents</Link>
        <Link className={pathname === "/how-it-works" ? "current" : ""} href="/how-it-works" onClick={close}>How It Works</Link>
        {dropdownMenu("company", "Company", company)}
        <Link href={contactHref} onClick={close}>Contact</Link>
        <a className="nav-fs-m" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" onClick={close}>Find your specialist</a>
      </nav>
      <a className="nav-cta" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog">Find your specialist <ArrowUpRight size={17} /></a>
    </header>
  </>;
}
