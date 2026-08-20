"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Mail, Check } from "lucide-react";
import JobApplicationModal from "@/components/forms/JobApplicationModal";

export default function AdministrativeAssistantPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 w-full flex flex-col items-center">
      {/* Section 1: Header */}
      <section className="w-full bg-gradient-to-b from-sky-50 to-white pt-24 pb-32 px-4 md:px-6 flex flex-col items-center text-center">
        <p className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-6">
          ADMIN &bull; SAN SALVADOR, EL SALVADOR &bull; HYBRID
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#0B132B] mb-6 max-w-4xl tracking-tight">
          Administrative Assistant
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-10">
          Are you a highly organized problem-solver ready to keep operations running smoothly for US-based clients from a hybrid environment? This opportunity is for you!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#84cc16] text-[#0B132B] font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-[#84cc16]/90 transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
        >
          Apply Now <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Section 2: Summary Card */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-6 relative z-10 -mt-16 mb-12">
        <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <p className="text-xs text-slate-500 font-semibold mb-1">Area</p>
              <p className="text-sm md:text-base font-bold text-[#0B132B]">Admin</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold mb-1">Location</p>
              <p className="text-sm md:text-base font-bold text-[#0B132B]">San Salvador, El Salvador (Hybrid)</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold mb-1">Employment Type</p>
              <p className="text-sm md:text-base font-bold text-[#0B132B]">Full-time</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold mb-1">Salary Range</p>
              <p className="text-sm md:text-base font-bold text-[#0B132B]">Competitive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Bottom Layout */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
          
          {/* Left Column (Job Description) */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold text-[#0B132B] mb-6">This opportunity is for you if:</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "You have proven experience in administrative support, office management, or a similar organizational role.",
                  "You are fully bilingual (English/Spanish) with excellent written and verbal communication skills.",
                  "You are highly proficient in essential office tools like Google Workspace, Microsoft Office, and document management systems.",
                  "You are highly organized, detail-oriented, and capable of prioritizing tasks effectively without micro-management.",
                  "You thrive in a hybrid work environment, balancing remote independence with in-person team collaboration.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B132B] mb-6">Key Responsibilities:</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Provide comprehensive administrative support to the local operations team and US-based management.",
                  "Manage physical and digital documents, data entry, and filing systems, ensuring absolute data accuracy and confidentiality.",
                  "Coordinate internal schedules, meeting logistics, and on-site office activities for the days the team is at the hub.",
                  "Assist with local procurement, basic vendor coordination, and general office operations to ensure a smooth workflow.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <ArrowRight className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="flex flex-col gap-8">
            
            <div className="flex flex-col gap-6 p-2">
              {/* Working Hours Card */}
              <div>
                <h3 className="font-bold text-[#0B132B] mb-3">Working Hours</h3>
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <Clock className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>Monday to Friday (US Business Hours)</span>
                </div>
              </div>

              {/* Benefits Card */}
              <div>
                <h3 className="font-bold text-[#0B132B] mb-3">Benefits</h3>
                <div className="flex items-start gap-3 text-slate-600 text-sm">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">All legal benefits, US Holidays off, and continuous training.</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <p className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-5">Contact</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#0B132B] rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <span className="text-white font-extrabold text-sm tracking-widest">VVB</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B132B] text-sm">Talent Acquisition Team</h3>
                  <p className="text-xs text-slate-500 mb-2">Human Resources</p>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#0B132B] transition-colors border border-slate-100">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#0B132B] transition-colors border border-slate-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modal Form */}
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle="Administrative Assistant"
      />
    </main>
  );
}
