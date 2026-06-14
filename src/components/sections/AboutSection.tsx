import Image from "next/image";
import Link from "next/link";
import { MapPin, Check, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full pt-8 pb-16 md:pt-12 md:pb-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Visuals */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group cursor-default">
              <Image
                src="/meeting.png"
                alt="VVBridge team meeting in San Salvador"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                // Fallback to a placeholder if /meeting.png is missing or misnamed
                // But the user assured us it's in the public folder.
              />
              
              {/* Floating Location Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-secondary">San Salvador, El Salvador</span>
              </div>
            </div>

            {/* Mini Metrics Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 cursor-default">
                <span className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</span>
                <span className="text-[10px] md:text-xs font-semibold text-slate-400 tracking-wider">SPECIALISTS</span>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 cursor-default">
                <span className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</span>
                <span className="text-[10px] md:text-xs font-semibold text-slate-400 tracking-wider">BILINGUAL</span>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 cursor-default">
                <span className="text-2xl md:text-3xl font-bold text-primary mb-1">CST</span>
                <span className="text-[10px] md:text-xs font-semibold text-slate-400 tracking-wider">TIME ZONE</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col items-start">
            <span className="text-sm font-bold text-secondary mb-4 tracking-wide">About VVBridge</span>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight leading-[1.1] mb-6">
              A boutique team,<br />
              <span className="relative inline-block z-10">
                founder-led
                <span className="absolute bottom-1 left-0 w-full h-4 md:h-5 bg-accent -z-10"></span>
              </span>{" "}
              from day<br />
              one.
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              We started VVBridge to do what big BPOs can&apos;t: stay small enough to care. 
              Every specialist is hand-picked, trained on your stack, and supported by 
              founders who answer your messages — not a ticket queue.
            </p>
            
            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium">Hand-picked specialists, not seat-fillers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium">Real onboarding into your tools and SOPs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium">Direct line to founders — always</span>
              </li>
            </ul>
            
            <Link 
              href="#team"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-white hover:bg-secondary/90 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg"
            >
              Meet the team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
