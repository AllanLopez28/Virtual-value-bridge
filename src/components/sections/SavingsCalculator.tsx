"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SavingsCalculator() {
  const roles = [
    "Admin / tenant support",
    "Bookkeeping (AP/AR)",
    "Leasing support",
    "Collections",
  ];

  const [role, setRole] = useState(roles[0]);
  const [hours, setHours] = useState(21);
  const [localRate, setLocalRate] = useState(25);

  // Constants
  const WEEKS_PER_MONTH = 4.33;
  const VVBRIDGE_HOURLY_RATE = 12;
  const LOCAL_OVERHEAD_MULTIPLIER = 1.25;

  // Math Logic
  const localWeeklyCost = hours * localRate * LOCAL_OVERHEAD_MULTIPLIER;
  const localMonthlyCost = Math.round(localWeeklyCost * WEEKS_PER_MONTH);
  const vvbridgeMonthlyCost = Math.round(hours * VVBRIDGE_HOURLY_RATE * WEEKS_PER_MONTH);
  const monthlySavings = localMonthlyCost - vvbridgeMonthlyCost;
  const annualSavings = monthlySavings * 12;

  return (
    <section id="calculator" className="w-full relative flex flex-col items-center bg-slate-50">
      
      {/* Header Block (Blue Background) */}
      <div className="w-full bg-primary pt-24 pb-32 px-4 flex justify-center text-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            See your{" "}
            <span className="inline-block bg-accent text-secondary px-4 py-1 md:py-2 rounded-2xl -rotate-2">
              savings
            </span>{" "}
            in<br className="hidden md:block" /> seconds.
          </h2>
          <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Estimate what you'd save by replacing a local hire with a dedicated VVBridge specialist — fully loaded with benefits and overhead.
          </p>
        </div>
      </div>

      {/* Main Container (Cards) */}
      <div className="w-full container mx-auto px-4 md:px-6 max-w-5xl relative z-20 -mt-16 mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
          {/* Left Card: Inputs */}
          <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-200 flex flex-col">
            <h3 className="text-2xl font-extrabold text-secondary mb-6">Your situation</h3>
            
            {/* Roles Grid */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-3">Role</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roles.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRole(r)}
                    className={`px-4 py-3 rounded-full text-sm font-semibold border transition-colors text-left ${
                      role === r
                        ? "border-primary text-primary bg-primary/5"
                        : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Hours Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label className="block text-sm font-bold text-slate-700">Hours per week</label>
                <span className="text-primary font-bold">{hours} hrs</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #2563eb ${(hours / 40) * 100}%, #e2e8f0 ${(hours / 40) * 100}%, #e2e8f0 100%)`
                }}
              />
            </div>

            {/* Local Rate Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label className="block text-sm font-bold text-slate-700">Local hourly rate (USD)</label>
                <span className="text-primary font-bold">${localRate}/hr</span>
              </div>
              <input
                type="range"
                min="15"
                max="100"
                value={localRate}
                onChange={(e) => setLocalRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((localRate - 15) / 85) * 100}%, #e2e8f0 ${((localRate - 15) / 85) * 100}%, #e2e8f0 100%)`
                }}
              />
            </div>

            <p className="text-[10px] text-slate-500 font-medium mt-auto">
              We add 25% for benefits, payroll tax, and equipment overhead.
            </p>
          </div>

          {/* Right Card: Results */}
          <div className="w-full lg:w-1/2 bg-[#0B132B] rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Subtle glow decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                ESTIMATED MONTHLY SAVINGS
              </span>
              <div className="text-6xl md:text-7xl font-extrabold text-accent mb-2 tracking-tight">
                ${monthlySavings.toLocaleString()}
              </div>
              <div className="text-sm font-bold text-white/80 mb-10">
                ≈ ${annualSavings.toLocaleString()} per year
              </div>

              {/* Breakdown Table */}
              <div className="space-y-4 mb-10 border-t border-white/10 pt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Local hire (loaded)</span>
                  <span className="text-white font-bold">${localMonthlyCost.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">VVBridge specialist</span>
                  <span className="text-accent font-bold">${vvbridgeMonthlyCost.toLocaleString()}/mo</span>
                </div>
              </div>
            </div>

            {/* Lead Gen Form */}
            <div className="mt-auto">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                GET THE FULL BREAKDOWN
              </span>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="you@company.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                />
                <button className="w-full bg-accent text-secondary font-bold text-sm px-4 py-3.5 rounded-xl hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
                  Email me the report <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-4">
                <Link href="#contact" className="text-xs text-slate-400 hover:text-white transition-colors">
                  or book a call instead
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
