import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function BryanRivasProfile() {
  const handles = [
    {
      title: "Daily operations",
      desc: "Keeps the department running smoothly, day to day."
    },
    {
      title: "Goal & deadline delivery",
      desc: "Makes sure targets and timelines are consistently met."
    },
    {
      title: "Cross-team coordination",
      desc: "Builds strong connections across areas to stay aligned."
    },
    {
      title: "Team mentoring",
      desc: "Guides newer specialists toward their own success."
    }
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
                src="/carlos.png" 
                alt="Bryan Alexander Rivas" 
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
              Bryan Alexander Rivas
            </h1>
            <p className="text-xl md:text-2xl font-bold text-blue-600 mb-10">
              Back-Office Operations Lead
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-600 rounded-xl p-5 text-white flex flex-col justify-center">
                <span className="text-2xl font-extrabold mb-1">~3 yrs</span>
                <span className="text-xs text-blue-100 font-medium">with VVBridge</span>
              </div>
              <div className="bg-blue-600 rounded-xl p-5 text-white flex flex-col justify-center">
                <span className="text-2xl font-extrabold mb-1">Lead</span>
                <span className="text-xs text-blue-100 font-medium">Department</span>
              </div>
              <div className="bg-blue-600 rounded-xl p-5 text-white flex flex-col justify-center">
                <span className="text-2xl font-extrabold mb-1">CST</span>
                <span className="text-xs text-blue-100 font-medium">Time zone</span>
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
              Bryan has spent nearly three years with Virtual Value Bridge, starting as a back-office agent on one of our accounts and growing into department lead. He takes ownership of daily operations — keeping things running smoothly and making sure targets and deadlines are consistently met. Reliable and results-driven, he builds strong connections across teams while mentoring newer specialists toward their own success.
            </p>
          </div>

          {/* 5. What He Handles */}
          <div>
            <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">
              WHAT HE HANDLES
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
              JOURNEY AT VVBRIDGE
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full max-w-3xl">
              <div className="bg-slate-50 rounded-xl p-6 flex-1 w-full flex flex-col justify-center text-center">
                <h4 className="font-bold text-slate-900 mb-1">Back-office agent</h4>
                <p className="text-sm text-slate-400">Start &middot; one account</p>
              </div>
              
              <div className="text-blue-500 hidden md:block">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="text-blue-500 block md:hidden rotate-90 my-2">
                <ArrowRight className="w-5 h-5" />
              </div>

              <div className="bg-slate-50 rounded-xl p-6 flex-1 w-full flex flex-col justify-center text-center">
                <h4 className="font-bold text-slate-900 mb-1">Department lead</h4>
                <p className="text-sm text-slate-400">Today</p>
              </div>
            </div>
          </div>

          {/* 7. Pending Info Grid */}
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              POR COMPLETAR (DATOS QUE ME FALTAN)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-6">
                <h4 className="font-bold text-slate-800 mb-1 text-sm md:text-base">Tools & platforms</h4>
                <p className="text-sm text-slate-400">Ej. software / CRMs que maneja</p>
              </div>
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-6">
                <h4 className="font-bold text-slate-800 mb-1 text-sm md:text-base">Languages</h4>
                <p className="text-sm text-slate-400">Ej. English / Spanish — nivel</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="w-full bg-slate-50 py-20 mt-12 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight max-w-2xl">
          Want Bryan's team on your <span className="text-blue-600 italic">back office?</span>
        </h2>
        <Link 
          href="/#contact"
          className="bg-[#84cc16] hover:bg-[#65a30d] text-white px-8 py-4 rounded-full font-bold text-base transition-colors shadow-md inline-flex items-center gap-2"
        >
          Book a call
        </Link>
      </section>

    </main>
  );
}
