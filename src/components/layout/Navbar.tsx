"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Mail, Phone, MessageSquare, Menu, X } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";

function QuickContactIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 sm:gap-2 ${className}`}>
      {/* Email Button */}
      <a 
        href="mailto:info@vvbridge.net" 
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[10px] border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm shrink-0"
        aria-label="Email Us"
      >
        <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
      </a>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const contactHref = pathname === "/services/estimating-support" ? "#estimating-inquiry" : "/#contact";
  const { openCalendly } = useCalendly();

  return (
    <nav className="w-full bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      {/* Top Phone & SMS Ribbon */}
      <div className="w-full bg-[#47b0d8] text-white py-2 sm:py-2.5 shadow-xs">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-center gap-x-6 gap-y-1 flex-wrap">
          <a
            href="tel:+17186506786"
            className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-white hover:text-white/85 transition-opacity tracking-wide"
            aria-label="Call +1 (718) 650-6786"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-white" />
            <span>+1 (718) 650-6786</span>
          </a>
          <span className="hidden sm:inline text-white/40">|</span>
          <a
            href="sms:+17186506786"
            className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-white hover:text-white/85 transition-opacity tracking-wide"
            aria-label="Text +1 (718) 650-6786"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Click here to text: +1 (718) 650-6786</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-44 h-12">
            <Image
              src="/Logo-vv.png"
              alt="Virtual Value Bridge Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/how-it-works" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/services" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/comparison" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Compare
            </Link>
            <Link href="/team" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="/careers" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/calculator" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Calculator
            </Link>
            <Link href={contactHref} className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <QuickContactIcons className="mr-2 lg:mr-4 shrink-0" />
            <button
              type="button"
              onClick={openCalendly}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Book a call
            </button>
          </div>
        </div>

        {/* Mobile controls (Quick Contact Icons + Hamburger Menu) */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
          <QuickContactIcons />
          <button
            className="text-secondary p-2 -mr-1"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-secondary">
            Home
          </Link>
          <Link href="/how-it-works" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            How It Works
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Services
          </Link>
          <Link href="/comparison" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Compare
          </Link>
          <Link href="/team" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Team
          </Link>
          <Link href="/careers" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Careers
          </Link>
          <Link href="/calculator" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Calculator
          </Link>
          <Link href={contactHref} onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Contact
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openCalendly();
              }}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 mt-2 shadow-sm cursor-pointer"
            >
              Book a call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
