import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full flex flex-col">
      {/* Top Banner (Guarantee) */}
      <div className="w-full bg-accent text-secondary py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
              Not the right fit? <span className="underline decoration-2 underline-offset-4">We replace your specialist — free.</span>
            </h3>
            <p className="text-secondary/80 text-sm md:text-base font-medium">
              No long-term contracts. No reason to overthink it.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-bold text-white hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap shadow-md"
          >
            Talk to a founder
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main CTA */}
      <div className="w-full bg-[#0B132B] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl flex flex-col items-center text-center">
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.2] mb-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            Ready to free up
            <span className="inline-block bg-accent text-secondary px-6 py-1 md:py-2 rounded-3xl -rotate-2 hover:rotate-0 transition-transform duration-300">
              your
            </span>
            <span className="inline-block bg-accent text-secondary px-6 py-1 md:py-2 rounded-3xl rotate-2 hover:rotate-0 transition-transform duration-300">
              team?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 font-medium">
            See exactly how much you&apos;d save with a dedicated VVBridge specialist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] active:scale-95 transition-all duration-300"
            >
              Calculate your savings
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#book-call"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent border border-white/20 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Book a free call
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
