"use client";

import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

import Link from "next/link";
import { Calendar, ArrowRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      // Replace with the real endpont later
      const response = await fetch("https://formspree.io/f/mdaqdywp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-slate-50 pt-8 md:pt-12 pb-24 md:pb-32 flex justify-center">
      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-200/60 flex flex-col group hover:shadow-md transition-shadow">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-10 tracking-tight">
              Send us a quick note
            </h2>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full gap-4 animate-in fade-in zoom-in duration-300">
                <CheckCircle className="w-16 h-16 text-green-500 mb-2" />
                <h3 className="text-2xl font-extrabold text-secondary">Thanks for reaching out!</h3>
                <p className="text-gray-500 max-w-sm">
                  Your message has been sent successfully. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-slate-300 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Row 1: Name and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-sm font-bold text-slate-700">Full name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Alex Rivera"
                      required
                      className="w-full rounded-full border border-slate-300 px-5 py-3.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-bold text-slate-700">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
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
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="w-full rounded-full border border-slate-300 px-5 py-3.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                {/* Row 3: Textarea */}
                <div className="flex flex-col gap-2 mb-4">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">What do you need help with?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="e.g. 1 bilingual VA, 30 hrs/wk, tenant support + AP in AppFolio."
                    className="w-full rounded-[1.5rem] border border-slate-300 px-5 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isLoading ? "Sending..." : "Send message"}
                    {!isLoading && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </form>
            )}
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
                <button
                  //data-cal-link="REPLACE WITH CALCOM LINK HERE"
                  //data-cal-config='{"layout":"month_view"}'
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  Open calendar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-auto">
                <span className="text-[10px] text-white/40 font-medium"></span>
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
                <a href="tel:+17186506786" className="flex items-center gap-4 group/item cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 group-hover/item:text-primary transition-colors">+1 (718) 650-6786</span>
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
