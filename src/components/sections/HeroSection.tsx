"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Calculator, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-primary overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-right md:object-center"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Nearshore from El Salvador</span>
          </div>

          {/* Headlines */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            High impact <br /> operations. <br />
            <span className="inline-block bg-accent text-secondary px-2 mt-2">
              Smartly staffed.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
            We deploy specialized nearshore talent to handle your admin work, 
            property management tickets, and compliance — flawlessly.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="#book-call"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] active:scale-95 transition-all duration-300"
            >
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent border border-white/30 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
            >
              <Calculator className="w-4 h-4" />
              Calculate your savings
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Same U.S. time zone</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Native English</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Free replacement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
