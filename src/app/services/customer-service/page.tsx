import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Headphones,
  Ticket,
  MessageSquare,
  Share2,
  MessageCircle,
  Cloud,
  PhoneCall,
  Hash,
  LayoutGrid,
  Grid
} from "lucide-react";

export default function CustomerServicePage() {
  const responsibilities = [
    "Answering customer calls, emails, live chat, and text messages",
    "Creating, updating, and closing support tickets in your help desk",
    "Following up until every open issue is resolved",
    "Escalating complex cases to your team using your own process",
    "Order status, scheduling, and service request coordination",
    "Responding to reviews, comments, and direct messages",
    "Keeping customer records and notes accurate in your CRM",
    "Reporting on response times, ticket volume, and recurring issues"
  ];

  const tools = [
    { name: "Zendesk", icon: Headphones },
    { name: "Freshdesk", icon: Ticket },
    { name: "Intercom", icon: MessageSquare },
    { name: "HubSpot", icon: Share2 },
    { name: "Gorgias", icon: MessageCircle },
    { name: "Salesforce", icon: Cloud },
    { name: "RingCentral", icon: PhoneCall },
    { name: "Slack", icon: Hash },
    { name: "Google Workspace", icon: LayoutGrid },
    { name: "Microsoft Office", icon: Grid }
  ];

  return (
    <main className="w-full flex flex-col items-center">

      {/* Top Block: Dedicated Hero Section */}
      <section className="w-full bg-slate-50 py-20 md:py-32 flex justify-center border-b border-slate-200/50">
        <div className="container px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

            {/* Left Column: Text & Buttons */}
            <div className="flex flex-col max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold text-secondary tracking-tight mb-2 leading-[1.1]">
                Meet Your <br />
                <span className="text-primary italic">Customer Service Specialist</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 mt-6 max-w-lg">
                Stop letting calls, emails, and chats pile up. Get a dedicated customer service specialist who answers your customers, resolves issues, and keeps every request moving — so nothing gets dropped.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  Get Matched &rarr;
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-slate-300 px-8 py-3.5 text-sm font-bold text-secondary hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-sm"
                >
                  See How It Works
                </Link>
              </div>
              <p className="text-xs font-semibold text-slate-500">
                Free replacement if not a fit. No long-term contracts.
              </p>
            </div>

            {/* Right Column: Image and Badge */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full shadow-xl overflow-hidden border-[12px] border-white bg-slate-200">
                <Image
                  src="/valeria.png"
                  alt="Customer Service Specialist Valeria"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-5 left-1/2 lg:left-auto lg:right-24 -translate-x-1/2 lg:translate-x-0 bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg border-[3px] border-white whitespace-nowrap">
                Available Now
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Block: Service Details */}
      <section className="w-full bg-white py-24 flex justify-center">
        <div className="container px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

            {/* Left Column (Wider): Responsibilities */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-3">
                DAY-TO-DAY RESPONSIBILITIES
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-10 tracking-tight leading-tight">
                What Your Customer Service<br />Specialist Handles
              </h2>

              <ul className="flex flex-col gap-6">
                {responsibilities.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-0.5 shrink-0">
                      <CheckCircle className="w-6 h-6 text-white fill-accent group-hover:scale-110 transition-transform shadow-sm rounded-full" />
                    </div>
                    <span className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column (Narrower): Profile & Tools */}
            <div className="lg:col-span-5 flex flex-col gap-12 lg:pl-8">

              {/* Section 1: Meet Your Specialist */}
              <div>
                <span className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  MEET YOUR SPECIALIST
                </span>
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-200 shrink-0">
                      <Image
                        src="/valeria.png"
                        alt="Valeria"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-extrabold text-secondary">Valeria</span>
                      <span className="text-[11px] font-semibold text-slate-500 max-w-[170px] leading-snug mt-0.5">
                        Customer Service, Ticketing, Client Communication
                      </span>
                    </div>
                  </div>
                  <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full shrink-0">
                    5+ yrs
                  </div>
                </div>
              </div>

              {/* Section 2: Tools They Know */}
              <div>
                <span className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  TOOLS THEY KNOW
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, idx) => {
                    const Icon = tool.icon;
                    return (
                      <div key={idx} className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-colors">
                        <div className="w-6 h-6 rounded border border-slate-200 bg-slate-50 shrink-0 flex items-center justify-center text-slate-500">
                          <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </div>
                        <span className="text-[13px] font-bold text-slate-700 truncate">{tool.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
