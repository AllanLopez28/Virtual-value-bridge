"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, MonitorCheck, RefreshCw, ArrowRight, Ruler, FileSpreadsheet, Scale, ClipboardList, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function EstimatingSupportClient() {
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
  const [isScopeVisible, setIsScopeVisible] = useState(false);
  const [isRoiVisible, setIsRoiVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const testimonialRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<HTMLElement>(null);
  const roiRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === testimonialRef.current) setIsTestimonialVisible(true);
            if (entry.target === scopeRef.current) setIsScopeVisible(true);
            if (entry.target === roiRef.current) setIsRoiVisible(true);
            if (entry.target === ctaRef.current) setIsCtaVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (testimonialRef.current) observer.observe(testimonialRef.current);
    if (scopeRef.current) observer.observe(scopeRef.current);
    if (roiRef.current) observer.observe(roiRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1d4ed8] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pb-28 pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Columna Izquierda */}
          <div className="lg:col-span-7">
            {/* Avatar */}
            <div className="relative inline-block mb-6">
              <div className="w-36 h-36 rounded-full bg-white border-4 border-white/80 overflow-hidden shadow-lg relative">
                <Image
                  src="/constructpng.png"
                  alt="Construction Estimator"
                  fill
                  className="object-contain scale-[1.15] translate-y-1"
                />
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#84cc16] text-[#0B132B] text-xs font-extrabold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                Available Now
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.15] mb-6">
              <span className="text-white block">Dedicated</span>
              <span className="bg-[#84cc16] text-[#0B132B] px-2.5 py-0.5 inline-block my-1 rounded-sm">Roofing & Construction</span>
              <br className="hidden sm:block" />
              <span className="bg-[#84cc16] text-[#0B132B] px-2.5 py-0.5 inline-block mr-3 rounded-sm mt-1 sm:mt-0">Estimators</span>
              <span className="text-white">for</span>
              <span className="text-white block mt-1">U.S. Contractors</span>
            </h1>

            {/* Párrafo Descriptivo */}
            <p className="text-blue-100 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-normal">
              Scale your bid volume without inflating payroll. Get full-time, bilingual estimators who deliver accurate material takeoffs in your software and time zone.
            </p>

            {/* Tagline Inferior */}
            <div className="flex items-center">
              <span className="text-white font-bold tracking-widest text-xs">VIRTUAL VALUE BRIDGE</span>
              <span className="text-white/50 mx-2">|</span>
              <span className="text-[#84cc16] font-bold tracking-widest text-xs">WHERE VIRTUAL MEETS VALUE</span>
            </div>
          </div>

          {/* Columna Derecha (Formulario) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-w-md mx-auto lg:ml-auto w-full">
              <h2 className="text-xl font-extrabold text-[#0B132B] mb-1">Schedule a 20-Min Intro Call</h2>
              <p className="text-xs text-slate-500 mb-6">Tell us about your bid volume. A founder will follow up.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Business Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Monthly Bid Volume</label>
                  <select defaultValue="" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option value="" disabled>Select a range</option>
                    <option value="1-10">1-10 bids/month</option>
                    <option value="11-25">11-25 bids/month</option>
                    <option value="25+">25+ bids/month</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-[#84cc16] hover:bg-lime-500 text-[#0B132B] font-extrabold text-sm py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm">
                  Schedule a 20-Min Intro Call <ArrowRight className="w-4 h-4" strokeWidth={3} />
                </button>
              </form>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                No long-term contracts. Free specialist replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarjetas Flotantes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-lime-100/80 text-lime-700 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#0B132B] text-base mb-1">CST Time Zone Alignment</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Working side-by-side with your project managers.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-lime-100/80 text-lime-700 flex items-center justify-center flex-shrink-0">
              <MonitorCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#0B132B] text-base mb-1">Software Ready</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Trained on Xactimate, Bluebeam, PlanSwift, and Excel.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-lime-100/80 text-lime-700 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#0B132B] text-base mb-1">Zero Lock-In</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Flexible month-to-month agreement with free specialist replacement.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Barra Inferior de Software */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 bg-white">
        <h3 className="text-sm font-extrabold text-[#0B132B] mb-4">Trained on the Software You Already Use</h3>
        <div className="flex flex-wrap gap-3">
          {["Xactimate", "Bluebeam Revu", "PlanSwift", "Procore", "AccuLynx", "Microsoft Excel"].map((software) => (
            <div key={software} className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-bold text-[#0B132B] flex items-center gap-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-sm bg-blue-600"></span>
              {software}
            </div>
          ))}
        </div>
      </section>

      {/* Sección 1: Testimonio */}
      <section className="bg-[#1d4ed8] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pt-16 pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-white">Real Results for</span>
            <span className="bg-[#84cc16] text-[#0B132B] px-3 py-1 rounded-md inline-block sm:ml-2 mt-2 sm:mt-0">Construction & Trade Businesses</span>
          </h2>
        </div>
      </section>

      <section ref={testimonialRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div
          className={`bg-[#070C1A] rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-14 transition-all duration-700 ease-out transform ${isTestimonialVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <span className="text-[#84cc16] text-6xl font-serif leading-none select-none flex-shrink-0">"</span>
            <div>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed mb-6">
                Bringing on support for our administrative and project needs has made a big difference in how we operate. Moving takeoffs and estimates out of the daily workload of our project team has been one of the best decisions we've made. It allows our team to stay focused on active projects, while estimates are completed faster and details stay organized.
              </p>
              <span className="text-white font-extrabold text-sm block">Moses G.</span>
              <span className="text-[#84cc16] text-xs font-semibold block mt-0.5">Project Manager, Artistic Tile & Installation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Alcance del Rol */}
      <section ref={scopeRef} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="flex items-center text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#84cc16] inline-block mr-2"></span>
              WHAT YOUR ESTIMATOR HANDLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] leading-tight max-w-xl">
              Take the Heavy Lifting Out of Your Bidding Process
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Columna Izquierda - Imagen */}
            <div className="lg:col-span-5 relative w-full min-h-[420px] lg:h-full rounded-2xl overflow-hidden border-2 border-dashed border-[#84cc16]/60 bg-[#0B132B] shadow-md">
              <Image
                src="/const-ej1.png"
                alt="Construction Estimator Scope"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Columna Derecha - Tarjetas */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">

              <div className={`bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-500 flex items-start gap-4 transform ${isScopeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="w-11 h-11 rounded-xl bg-[#0B132B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0B132B] text-base mb-1">Full Material Takeoffs & Line-Item Pricing</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Accurate scope breakdowns from blueprints, aerial roof measurement reports, and field notes.</p>
                </div>
              </div>

              <div className={`bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-500 delay-100 flex items-start gap-4 transform ${isScopeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="w-11 h-11 rounded-xl bg-[#0B132B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0B132B] text-base mb-1">Software-Driven Bid Preparation</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Drafting estimates directly in Xactimate, Bluebeam, or your custom pricing spreadsheets.</p>
                </div>
              </div>

              <div className={`bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-500 delay-200 flex items-start gap-4 transform ${isScopeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="w-11 h-11 rounded-xl bg-[#0B132B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0B132B] text-base mb-1">Vendor & Material Cost Comparisons</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Reconciling supplier quotes to protect profit margins before bids are sent to clients.</p>
                </div>
              </div>

              <div className={`bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-500 delay-300 flex items-start gap-4 transform ${isScopeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="w-11 h-11 rounded-xl bg-[#0B132B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0B132B] text-base mb-1">CRM & Proposal Management</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Keeping your CRM (AccuLynx, Jobber, Buildertrend) updated with estimate statuses and follow-ups.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: The ROI Angle */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="flex items-center text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#84cc16] inline-block mr-2"></span>
              THE ROI ANGLE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] leading-[1.15] max-w-lg">
              Why Top Contractors Outsource Takeoffs
            </h2>
          </div>

          <div
            ref={roiRef}
            className={`transition-all duration-700 ease-out transform ${isRoiVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {/* Vista Móvil (Tarjetas Apiladas) */}
            <div className="md:hidden flex flex-col gap-4 mb-8">
              {[
                { factor: "Annual Salary & Overhead", us: "$75,000 – $95,000+ USD / year", vvb: "Up to 60% Savings" },
                { factor: "Time Zone & Availability", us: "Standard local hours", vvb: "100% CST (Same Business Hours)" },
                { factor: "Language & Communication", us: "Native English", vvb: "100% Fluent English & Spanish" },
                { factor: "Onboarding & Risk", us: "Weeks of hiring + payroll tax", vvb: "Hand-picked, pre-vetted + Free Replacement" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-slate-50/70 py-3 px-5 border-b border-slate-200/80">
                    <h4 className="text-sm font-extrabold text-[#0B132B]">{item.factor}</h4>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">U.S. In-House Estimator</span>
                      <span className="text-sm font-medium text-slate-600">{item.us}</span>
                    </div>
                    <div className="bg-[#f4fce8] p-5 border-t border-[#84cc16]/30 relative">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#84cc16]"></div>
                      <span className="text-[11px] font-extrabold text-[#65a30d] uppercase tracking-wider block mb-1">Virtual Value Bridge</span>
                      <span className={`font-extrabold text-[#0B132B] ${idx === 0 ? 'text-xl' : 'text-base'}`}>{item.vvb}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Vista Escritorio (Tabla) */}
            <div className="hidden md:block w-full overflow-x-auto rounded-2xl border border-slate-200/80 shadow-sm bg-white mb-8">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-200/80">
                    <th className="w-[28%] bg-slate-50/70 py-5 px-6 sm:px-8 text-xs font-extrabold text-[#0B132B]">Factor</th>
                    <th className="w-[32%] bg-slate-50/70 py-5 px-6 sm:px-8 text-xs font-extrabold text-[#0B132B]">U.S. In-House Estimator</th>
                    <th className="w-[40%] bg-[#84cc16] py-5 px-6 sm:px-8 text-xs font-extrabold text-[#0B132B]">Virtual Value Bridge Estimator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70">
                  <tr>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">Annual Salary & Overhead</td>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-medium text-slate-500">$75,000 – $95,000+ USD / year</td>
                    <td className="bg-[#f4fce8] py-6 px-6 sm:px-8 text-lg sm:text-xl font-extrabold text-[#0B132B]">Up to 60% Savings</td>
                  </tr>
                  <tr>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">Time Zone & Availability</td>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-medium text-slate-500">Standard local hours</td>
                    <td className="bg-[#f4fce8] py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">100% CST (Same Business Hours)</td>
                  </tr>
                  <tr>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">Language & Communication</td>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-medium text-slate-500">Native English</td>
                    <td className="bg-[#f4fce8] py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">100% Fluent English & Spanish</td>
                  </tr>
                  <tr>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">Onboarding & Risk</td>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-medium text-slate-500">Weeks of hiring + payroll tax</td>
                    <td className="bg-[#f4fce8] py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">Hand-picked, pre-vetted + Free Replacement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-sm text-slate-500 font-medium">See your exact numbers before you commit.</span>
              <Link href="/calculator" className="bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-colors shadow-sm">
                Calculate your savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Guarantee & Final CTA */}
      <section className="w-full bg-[#84cc16] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xl sm:text-2xl font-extrabold text-[#0B132B]">Not the right fit?</span>
            <span className="underline decoration-2 underline-offset-4 font-extrabold text-[#0B132B] ml-1.5 text-xl sm:text-2xl">
              We replace your specialist — free.
            </span>
            <span className="text-xs sm:text-sm text-[#0B132B]/80 font-medium mt-1.5 block">
              No long-term contracts. No reason to overthink it.
            </span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-colors flex-shrink-0 shadow-sm cursor-pointer"
          >
            Talk to a founder
          </button>
        </div>
      </section>

      <section className="w-full bg-[#070C1A] py-20 sm:py-28 text-center">
        <div
          ref={ctaRef}
          className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-all duration-700 ease-out transform ${isCtaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight block mb-2">
            Stop Turning Down Bids Due to
          </span>
          <span className="bg-[#84cc16] text-[#0B132B] text-3xl sm:text-4xl lg:text-5xl font-extrabold px-4 py-1 rounded-md inline-block tracking-tight">
            Lack of Capacity
          </span>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mt-6 mb-10 font-normal">
            Every Virtual Value Bridge specialist is hand-picked and onboarded directly into your SOPs. No seat-fillers, no long-term commitments, and direct access to our founders whenever you need it.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/allan-escalante3/30min', '_blank')}
            className="bg-[#84cc16] hover:bg-lime-500 text-[#0B132B] font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center gap-2.5 shadow-lg hover:scale-[1.02] cursor-pointer"
          >
            <Calendar className="w-4 h-4" strokeWidth={2.5} />
            Book Your Free Discovery Call
          </button>
        </div>
      </section>
    </main>
  );
}
