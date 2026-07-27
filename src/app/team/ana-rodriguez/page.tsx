import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AnaRodriguezProfile() {
  const handles = [
    {
      title: "New physician training",
      desc: "Onboards and mentors medical professionals joining the team."
    },
    {
      title: "Clinical support & guidance",
      desc: "Provides medical support and guidance to the team."
    },
    {
      title: "Quality & accuracy",
      desc: "Safeguards accuracy across patient care processes."
    },
    {
      title: "Coaching & confidence",
      desc: "Helps others build skills, confidence, and high-quality service."
    }
  ];

  const tools = [
    "Epic (EHR)", "athenahealth", "eClinicalWorks",
    "Doxy.me", "Zoom for Healthcare", "Microsoft Teams",
    "Slack", "Google Workspace", "RingCentral"
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white font-sans">
      
      {/* 2. Top Bar */}
      <div className="w-full flex justify-between items-center py-6 px-4 md:px-12 max-w-7xl mx-auto">
        <Link href="/team" className="text-slate-500 hover:text-slate-700 transition-colors font-medium text-sm flex items-center gap-2">
          &larr; Back to team
        </Link>
        <Link href="/#contact" className="bg-[#84cc16] hover:bg-[#65a30d] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-sm">
          Book a call
        </Link>
      </div>

      {/* 3. Header & Stats */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Photo) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-50 border-2 border-dashed border-slate-200 overflow-hidden flex-shrink-0">
              <Image 
                src="/ana.png" 
                alt="Ana Rodríguez" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column (Info) */}
          <div className="lg:col-span-8 flex flex-col">
            <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
              MEET THE TEAM
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-2 tracking-tight">
              Ana Rodríguez
            </h1>
            <p className="text-xl md:text-2xl font-bold text-blue-600 mb-10">
              New Physician Trainer
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-600 rounded-xl p-5 text-white flex flex-col justify-center">
                <span className="text-2xl font-extrabold mb-1">2024</span>
                <span className="text-xs text-blue-100 font-medium">Joined Virtual Value</span>
              </div>
              <div className="bg-blue-600 rounded-xl p-5 text-white flex flex-col justify-center">
                <span className="text-2xl font-extrabold mb-1">Trainer</span>
                <span className="text-xs text-blue-100 font-medium">New physicians</span>
              </div>
              <div className="bg-blue-600 rounded-xl p-5 text-white flex flex-col justify-center">
                <span className="text-2xl font-extrabold mb-1">Quality</span>
                <span className="text-xs text-blue-100 font-medium">Patient care</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Main Content Areas */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="flex flex-col gap-16">

          {/* 4. About */}
          <div>
            <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
              ABOUT
            </p>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl">
              She joined Virtual Value Bridge in August 2024 as a Medical Professional, delivering clinical support and guidance while safeguarding the quality and accuracy of every patient care process. In January 2026 she stepped into the role of New Physician Trainer, onboarding and mentoring incoming medical professionals across the team. A natural teacher, she's passionate about helping others sharpen their skills, build confidence, and deliver high-quality care. Her time at Virtual Value Bridge has let her grow professionally — combining a solid medical background with a genuine drive for leadership, teamwork, and education.
            </p>
          </div>

          {/* 5. What She Handles */}
          <div>
            <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">
              WHAT SHE HANDLES
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {handles.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 flex items-start gap-4">
                  <div className="bg-blue-600 rounded-full shrink-0 flex items-center justify-center w-6 h-6 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Journey at VVB */}
          <div>
            <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">
              JOURNEY AT VIRTUAL VALUE BRIDGE
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full max-w-3xl">
              <div className="bg-slate-50 rounded-xl p-6 flex-1 w-full flex flex-col justify-center text-center">
                <h4 className="font-bold text-slate-900 mb-1">Medical Professional</h4>
                <p className="text-sm text-slate-400">Aug 2024</p>
              </div>
              
              <div className="text-blue-500 hidden md:block">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="text-blue-500 block md:hidden rotate-90 my-2">
                <ArrowRight className="w-5 h-5" />
              </div>

              <div className="bg-slate-50 rounded-xl p-6 flex-1 w-full flex flex-col justify-center text-center">
                <h4 className="font-bold text-slate-900 mb-1">New Physician Trainer</h4>
                <p className="text-sm text-slate-400">Jan 2026</p>
              </div>
            </div>
          </div>

          {/* 7. Tools & Platforms */}
          <div>
            <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">
              TOOLS & PLATFORMS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {tools.map((tool, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-lg p-4 text-center">
                  <span className="font-semibold text-slate-800 text-sm">{tool}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[10px] md:text-xs text-slate-400">
              Por confirmar / ajustar: nombre, foto e idiomas — y reemplazar estas herramientas por las que ella realmente usa.
            </p>
          </div>

        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="w-full bg-slate-50 py-20 mt-12 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight max-w-2xl">
          Want this <span className="text-blue-600 italic">standard of care</span> on your team?
        </h2>
        <Link 
          href="/#contact"
          className="bg-[#84cc16] hover:bg-[#65a30d] text-white px-8 py-4 rounded-full font-bold text-base transition-colors shadow-md inline-flex items-center gap-2"
        >
          Book a call <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </main>
  );
}
