import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function TeamProfiles() {
  return (
    <section className="w-full relative flex flex-col items-center bg-slate-50">
      
      {/* Block 1: Header (Blue Background) */}
      <div className="w-full bg-primary pt-24 pb-32 px-4 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full bg-transparent px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white mb-6 border border-white/30">
          Meet the team
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight flex flex-col items-center">
          The people who
          <span className="inline-block bg-accent text-secondary px-4 py-1 md:py-2 mt-2 rounded-lg -rotate-1">
            run your back office
          </span>
        </h2>
        <p className="max-w-2xl text-white/90 text-sm md:text-base leading-relaxed font-medium">
          Hand-picked specialists, trained on your stack and supported by founders. Same time zone. Native English. Real ownership.
        </p>
      </div>

      {/* Block 2: Overlapping Stats Banner */}
      <div className="w-full max-w-4xl px-4 relative z-20 -mt-16 flex justify-center">
        <div className="w-full bg-secondary text-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 p-6 md:p-8">
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl md:text-4xl font-bold text-accent mb-1">50+</span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">SPECIALISTS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl md:text-4xl font-bold text-accent mb-1">100%</span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">BILINGUAL</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl md:text-4xl font-bold text-accent mb-1">CST</span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">TIME ZONE</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-accent">4.9</span>
                <Star className="w-6 h-6 text-accent fill-accent" />
              </div>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">RATING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Block 3 & 4: Profiles Title and Grid */}
      <div className="w-full container mx-auto px-4 md:px-6 max-w-6xl pt-16 md:pt-24 pb-20">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
            Three profiles. <span className="underline decoration-primary decoration-4 underline-offset-4">One mission.</span>
          </h3>
          <span className="text-xs md:text-sm font-semibold text-slate-500">
            Specialized in Property Management ops
          </span>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sofía - Left, Large, White */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
            <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto">
              {/* Note: Fallback styling applied in case images are missing */}
              <div className="absolute inset-0 bg-slate-200"></div>
              <Image 
                src="/sofia.png" 
                alt="Sofía Hernández" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute top-4 left-4 bg-accent text-secondary text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                5+ years experience
              </div>
            </div>
            <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="text-2xl font-extrabold text-secondary mb-1">Sofía Hernández</h4>
              <span className="text-primary font-bold text-sm mb-6">Lead Property Specialist</span>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium">
                Bilingual operations specialist with over five years managing multifamily portfolios across Texas and Florida. Expert in AppFolio, Buildium, and tenant ledger reconciliation.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-md tracking-wider">APPFOLIO</span>
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-md tracking-wider">TENANT RELATIONS</span>
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-md tracking-wider">COMPLIANCE</span>
              </div>
              <div>
                <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-2.5 text-sm font-bold text-white hover:bg-secondary/90 transition-colors shadow-sm">
                  View full profile <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Carlos - Right, Vertical, Dark */}
          <div className="lg:col-span-4 bg-secondary rounded-3xl shadow-sm overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6 pb-0">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-800">
                <Image 
                  src="/carlos.png" 
                  alt="Carlos Martínez" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-extrabold text-white mb-1">Carlos Martínez</h4>
              <span className="text-accent font-bold text-xs mb-4">Senior Operations Manager</span>
              <p className="text-sm text-slate-300 leading-relaxed">
                Carlos oversees daily operations and SOP design for VVBridge. With a background in BPO leadership, he built our quality framework guaranteeing same-day responses across every U.S. time zone.
              </p>
            </div>
          </div>

          {/* Ana - Bottom, Full Width, Green */}
          <div className="lg:col-span-12 bg-accent rounded-3xl shadow-sm overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 group hover:shadow-md transition-shadow">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-white/20 bg-emerald-400">
              <Image 
                src="/ana.png" 
                alt="Ana Rodríguez" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex-grow flex flex-col">
              <h4 className="text-2xl font-extrabold text-secondary mb-1">Ana Rodríguez</h4>
              <span className="text-secondary/80 font-bold text-[10px] tracking-widest uppercase mb-4">CLIENT SUCCESS LEAD • 6+ YEARS</span>
              <p className="text-sm text-secondary/90 leading-relaxed font-medium mb-6 max-w-3xl">
                Ana is the direct line between founders and clients. She trained at top single-family operators and coordinates support, compliance reviews, and monthly performance reports.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-extrabold text-secondary tracking-wider">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> YARDI</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> ONBOARDING</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> REPORTING</span>
              </div>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0">
              <Link href="#contact" className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Block 5: Final CTA */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
             <div className="absolute top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10">
            Ready to meet your future specialist?
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl font-medium mb-10 relative z-10">
            We don't just provide staff; we provide peace of mind. Let us match you with the right talent in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
            >
              Talk to a founder
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent border border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
