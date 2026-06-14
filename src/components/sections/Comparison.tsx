"use client";

import { Check, X } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      factor: "Time zone",
      vvb: "Same as U.S. (CST)",
      offshore: "10-13 hour offset",
    },
    {
      factor: "English fluency",
      vvb: "Native / near-native, neutral accent",
      offshore: "Variable, often heavy accent",
    },
    {
      factor: "Founder oversight",
      vvb: "Founders on every account",
      offshore: "Account managers, high turnover",
    },
    {
      factor: "Replacement guarantee",
      vvb: "Free replacement, no long-term contract",
      offshore: "Long contracts, fees to switch",
    },
    {
      factor: "Software training",
      vvb: "AppFolio, Buildium, RentManager",
      offshore: "Generalist, learns on your time",
    },
    {
      factor: "Cultural alignment",
      vvb: "U.S.-centric work style",
      offshore: "Often misaligned expectations",
    },
    {
      factor: "Onboarding speed",
      vvb: "Curated profiles in ~5 days",
      offshore: "Weeks of screening",
    },
  ];

  return (
    <section className="w-full relative flex flex-col items-center">
      {/* Dark Top Half */}
      <div className="w-full bg-secondary pt-24 pb-40 px-4 text-center flex flex-col items-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-300 mb-8 border border-white/10">
          Buyer's guide
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Nearshore vs Offshore<br />
          <span className="inline-block bg-accent text-secondary px-3 py-1 mt-3 rounded-lg -rotate-1 hover:rotate-0 transition-transform duration-300">
            VAs.
          </span>
        </h2>
        <p className="max-w-2xl text-slate-300 text-lg leading-relaxed">
          The honest comparison. If you've been burned by offshore agencies or generic VA platforms, 
          here's what changes with a nearshore partner.
        </p>
      </div>

      {/* Light Bottom Half with Overlapping Table */}
      <div className="w-full bg-slate-50 pb-24 px-4 flex justify-center">
        <div className="w-full max-w-5xl -mt-20 relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-secondary text-white p-6 border-b border-white/10">
              <div className="flex items-center text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">
                Factor
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="font-extrabold text-lg md:text-xl">VVBridge</span>
                <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">
                  Nearshore · El Salvador
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-slate-400">
                <span className="font-extrabold text-lg md:text-xl text-white">Typical Offshore VAs</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">
                  India / Philippines agencies
                </span>
              </div>
            </div>

            {/* Table Body */}
            <div className="flex flex-col divide-y divide-slate-100">
              {comparisonData.map((item, i) => (
                <div key={i} className="grid grid-cols-3 p-5 md:p-6 items-center hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-slate-800 text-xs md:text-sm pr-4">
                    {item.factor}
                  </div>
                  <div className="flex items-center gap-3 justify-start md:pl-8">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={3} />
                    <span className="font-semibold text-slate-800 text-xs md:text-sm leading-tight">
                      {item.vvb}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-start md:pl-8 opacity-80">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0" strokeWidth={3} />
                    <span className="font-medium text-slate-500 text-xs md:text-sm leading-tight">
                      {item.offshore}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
