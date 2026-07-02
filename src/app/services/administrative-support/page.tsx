import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Menu } from "lucide-react";

export default function AdministrativeSupportPage() {
  const responsibilities = [
    "Calendar management and scheduling coordination",
    "Inbox management and email triage",
    "Meeting prep, agendas, and follow-up notes",
    "Document creation, formatting, and organization",
    "Travel arrangements and itinerary planning",
    "Data entry and file management across your systems",
  ];

  const tools = [
    "Google Workspace",
    "Microsoft Office",
    "Calendly",
    "Notion",
    "Asana",
    "DocuSign",
    "Slack",
    "Zoom"
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column (Text Content) */}
            <div className="flex flex-col">
              {/* Breadcrumbs */}
              <div className="text-sm font-medium mb-6">
                <Link href="/" className="text-slate-400 hover:text-slate-600 transition-colors">Home</Link>
                <span className="mx-2 text-slate-400">&gt;</span>
                <span className="text-slate-900">Administrative Support</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Meet Your <br className="hidden sm:block" />
                <span className="text-blue-600 italic">Administrative Support Specialist</span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg text-slate-700 max-w-xl leading-relaxed mb-8">
                Stop drowning in email, calendar conflicts, and paperwork. 
                Get a dedicated administrative support specialist who manages your calendars, inboxes, and document prep — so you can focus on running your business.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Get Matched &rarr;
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-slate-300 px-8 py-3.5 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  See How It Works
                </Link>
              </div>

              {/* Footer text */}
              <p className="text-xs text-slate-500">
                Free replacement if not a fit. No long-term contracts.
              </p>
            </div>

            {/* Right Column (Image) */}
            <div className="flex justify-center lg:justify-end relative mt-8 lg:mt-0">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-white shadow-xl flex items-center justify-center p-2">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-blue-50/50">
                  <Image
                    src="/diego.png"
                    alt="Administrative Support Specialist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                  Available Now
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16">
            
            {/* Left Column (Responsibilities) */}
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                DAY-TO-DAY RESPONSIBILITIES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                What Your Administrative Support Specialist Handles
              </h2>
              
              <ul className="space-y-5">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-white fill-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-[17px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column (Profile & Tools) */}
            <div className="flex flex-col">
              
              {/* Meet Your Specialist */}
              <div className="mb-12">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                  MEET YOUR SPECIALIST
                </p>
                <div className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  {/* Avatar */}
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-blue-50">
                    <Image
                      src="/diego.png"
                      alt="Diego"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-slate-900 truncate">Diego</h3>
                    <p className="text-sm text-slate-500 truncate">
                      Administrative Support, Calendars, Inbox Management
                    </p>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                    4+ yrs
                  </div>
                </div>
              </div>

              {/* Tools They Know */}
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                  TOOLS THEY KNOW
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-blue-200 transition-colors"
                    >
                      <Menu className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="text-sm font-semibold text-slate-700 truncate">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
