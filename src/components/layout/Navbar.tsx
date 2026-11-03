"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Mail, Phone, Menu, X } from "lucide-react";

function Linkedin({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number | string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M7.5 11v5" />
      <path d="M7.5 8v.01" />
      <path d="M12 16v-5" />
      <path d="M12 13a2.5 2.5 0 0 1 5 0V16" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const contactHref = pathname === "/services/estimating-support" ? "#estimating-inquiry" : "/#contact";

  return (
    <nav className="w-full bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-40 h-12">
            <Image
              src="/Logo-vv.png"
              alt="Virtual Value Bridge"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <div className="flex gap-4 lg:gap-6">
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
            {/* Quick Contact Icons */}
            <div className="hidden sm:flex items-center gap-2 mr-2 lg:mr-4 shrink-0">
              {/* Email Button */}
              <a 
                href="mailto:info@vvbridge.net" 
                className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
                aria-label="Email Us"
              >
                <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>

              {/* Phone Button */}
              <a 
                href="tel:+17186506786" 
                className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
                aria-label="Call Us"
              >
                <Phone className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>

              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/company/virtual-value-bridge" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            </div>

            <Link
              href={contactHref}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              Book a call
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4">
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
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-3 py-1">
              {/* Email Button */}
              <a 
                href="mailto:info@vvbridge.net" 
                className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
                aria-label="Email Us"
              >
                <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>

              {/* Phone Button */}
              <a 
                href="tel:+17186506786" 
                className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
                aria-label="Call Us"
              >
                <Phone className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>

              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/company/virtual-value-bridge" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            </div>
            <Link
              href={contactHref}
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
