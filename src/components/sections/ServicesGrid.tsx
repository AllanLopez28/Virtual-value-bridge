"use client";

import { Calendar, Headphones, Calculator, Megaphone, Target, Database, ClipboardList, Home, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Property Management Support",
      description: "Tenant comms, leasing, maintenance, owner reports.",
      icon: Home,
      link: "/services/property-management",
    },
    {
      title: "Administrative Support",
      description: "Calendars, inboxes, scheduling, and document prep.",
      icon: Calendar,
      link: "/services/administrative-support",
    },
    {
      title: "Customer Service & Support",
      description: "Calls, chat, tickets, and white-glove follow-ups.",
      icon: Headphones,
      link: "/services/customer-service",
    },
    {
      title: "Bookkeeping & Accounting",
      description: "AP/AR, invoicing, reconciliations, and reporting.",
      icon: Calculator,
      link: "/services/bookkeeping-accounting",
    },
    {
      title: "Marketing Support",
      description: "Social, email, content, design assist, and CRM.",
      icon: Megaphone,
      link: "/services/marketing-support",
    },
    {
      title: "Sales & Lead Generation",
      description: "Prospecting, outreach, CRM, and appointment setting.",
      icon: Target,
      link: "/services/sales-lead-generation",
    },
    {
      title: "Data Entry & Back-Office",
      description: "Processing, research, reporting, order ops.",
      icon: Database,
      link: "/services/data-entry-back-office",
    },
    {
      title: "Project Coordination",
      description: "Task tracking, vendor coordination, documentation.",
      icon: ClipboardList,
      link: "/services/project-coordination",
    },
  ];

  return (
    <section id="services" className="w-full py-20 md:py-32 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">What we do</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            <span className="inline-block bg-accent text-[#0B132B] px-2 mt-2 md:mt-0">
              + Eight
            </span>{" "}
            ways we unblock your team.
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            One dedicated specialist or a small back-office squad  trained on your stack and
            embedded in your day-to-day.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            const content = (
              <div className={`flex flex-col bg-[#1e2a4a] border border-[#2a3b63] rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group h-full ${service.link ? 'cursor-pointer' : 'cursor-default'}`}>
                <div className="mb-6">
                  <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{service.description}</p>
              </div>
            );

            return service.link ? (
              <Link key={index} href={service.link} className="block outline-none">
                {content}
              </Link>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>

        {/* Footer Links */}


      </div>
    </section>
  );
}
