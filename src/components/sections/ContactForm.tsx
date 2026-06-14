"use client";

import { useState } from "react";

import Link from "next/link";
import { Calendar, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="w-full bg-slate-50 pt-8 md:pt-12 pb-24 md:pb-32 flex justify-center">
      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-200/60 flex flex-col group hover:shadow-md transition-shadow">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-10 tracking-tight">
              Send us a quick note
            </h2>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-bold text-slate-700">Full name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Alex Rivera" 
                    className="w-full rounded-full border border-slate-300 px-5 py-3.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-bold text-slate-700">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Acme Property Mgmt" 
                    className="w-full rounded-full border border-slate-300 px-5 py-3.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">Work email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="you@company.com" 
                  className="w-full rounded-full border border-slate-300 px-5 py-3.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              {/* Row 3: Textarea */}
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">What do you need help with?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="e.g. 1 bilingual VA, 30 hrs/wk, tenant support + AP in AppFolio." 
                  className="w-full rounded-[1.5rem] border border-slate-300 px-5 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  Send message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Stacked Cards */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Top Card: Direct Booking */}
            <div className="bg-primary rounded-[2rem] p-8 md:p-10 shadow-lg flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <Calendar className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Prefer to book directly?
              </h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed mb-8">
                Pick a 30-minute slot that works for you. Founder-led, no sales pitch.
              </p>
              
              <div className="mb-8">
                <Link
                  href="#calendar"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  Open calendar
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="mt-auto">
                <span className="text-[10px] text-white/40 font-medium">Calendar embed placeholder</span>
              </div>
            </div>

            {/* Bottom Card: Direct Contact Info */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col group hover:border-slate-300 transition-colors">
              <h3 className="text-xl font-extrabold text-secondary mb-6">
                Reach us directly
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4 group/item cursor-default">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">info@vvbridge.net</span>
                </div>
                <div className="flex items-center gap-4 group/item cursor-default">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">U.S. line available on request</span>
                </div>
                <div className="flex items-center gap-4 group/item cursor-default">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">San Salvador, El Salvador</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
