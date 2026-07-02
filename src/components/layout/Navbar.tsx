"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-40 h-12">
            <Image 
              src="/VVB-logo.jpeg" 
              alt="Virtual Value Bridge" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link href="/" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/how-it-works" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/#services" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#compare" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Compare
            </Link>
            <Link href="/#team" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="/#calculator" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Calculator
            </Link>
            <Link href="/#contact" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300"
            >
              Book a call
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-secondary">
            Home
          </Link>
          <Link href="/how-it-works" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            How It Works
          </Link>
          <Link href="/#services" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Services
          </Link>
          <Link href="/#compare" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Compare
          </Link>
          <Link href="/#team" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Team
          </Link>
          <Link href="/#calculator" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Calculator
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-600">
            Contact
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 mt-2 shadow-sm"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
