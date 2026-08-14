"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Calculator, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[600px] flex flex-col lg:flex-row items-center">

      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/Banner.png"
          alt="Nearshore professional background"
          fill
          priority
          className="object-cover object-left"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column (Text Content) */}
          <div className="max-w-3xl relative z-10">
            {/* Badge */}


            {/* Headlines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
              <span className="block mb-2 whitespace-nowrap">A Virtual Team That</span>
              <span className="inline-block bg-[#84cc16] text-[#0B132B] px-3 py-1 rounded-md mr-3 mb-2">
                Powers Your
              </span>
              <span className="inline-block">Business.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
              From customer support to back-office and administrative operations, we help US businesses build dedicated teams, fully aligned with your processes, working in your time zone, delivering quality work at a lower cost.
            </p>

            <p className="text-sm md:text-base font-bold tracking-widest uppercase flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-8">
              <span className="text-white">Virtual Value Bridge</span>
              <span className="hidden sm:inline text-white/60">|</span>
              <span className="text-[#84cc16]">Where Virtual Meets Value</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#84cc16] px-8 py-3.5 text-sm font-bold text-[#0B132B] border-0 outline-none hover:bg-[#84cc16]/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] active:scale-95 transition-all duration-300"
              >
                Book a free call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent border border-white/30 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
              >
                <Calculator className="w-4 h-4" />
                Calculate your savings
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84cc16]" />
                <span>Same U.S. time zone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84cc16]" />
                <span>Native English</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84cc16]" />
                <span>Free replacement</span>
              </div>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}
