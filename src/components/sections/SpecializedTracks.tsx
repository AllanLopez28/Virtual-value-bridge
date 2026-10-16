"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const constructionChecks = [
  "Quantity takeoffs",
  "Bid & proposal preparation",
  "Subcontractor quote follow-up",
  "Material & cost documentation",
];

const propertyManagementChecks = [
  "Work order coordination",
  "Schedule & SLA management",
  "Vendor & subcontractor coordination",
  "Permits, invoicing & project admin",
];

export default function SpecializedTracks() {
  return (
    <section className="bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 py-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative items-stretch">

          {/* Badge Central ("OR") */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 items-center justify-center"
          >
            <span className="text-[#0B132B] text-xs font-extrabold tracking-wider">OR</span>
          </motion.div>

          {/* Tarjeta 1 - Construcción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/services/estimating-support"
              className="group block h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-100"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 h-full">
                {/* Columna Izquierda */}
                <div className="relative w-40 h-48 sm:w-44 sm:h-56 flex-shrink-0 flex items-end justify-center">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full absolute bottom-2 z-0 transition-transform duration-300 group-hover:scale-105 bg-blue-600"></div>
                  <Image
                    src="/construct.png"
                    alt="Construction Specialist"
                    fill
                    className="z-10 object-contain object-bottom drop-shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>

                {/* Columna Derecha */}
                <div className="flex flex-col flex-grow h-full">
                  <div className="mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#84cc16] inline-block mr-2"></span>
                    <span className="text-[#84cc16] text-xs font-bold tracking-wider uppercase">FOR CONSTRUCTION</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] leading-tight mb-3">
                    Estimating & Bid Support
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    Dedicated support to help contractors win more bids, save time, and streamline project flow.
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {constructionChecks.map((check, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="bg-[#84cc16] text-[#0B132B] rounded-full p-0.5 mt-0.5 shrink-0">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm font-medium text-slate-800">{check}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-blue-700 font-bold text-sm inline-flex items-center gap-1.5 mt-auto">
                    Explore Estimating Support
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Tarjeta 2 - Property Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div
              className="group block h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-100 cursor-default"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 h-full">
                {/* Columna Izquierda */}
                <div className="relative w-40 h-48 sm:w-44 sm:h-56 flex-shrink-0 flex items-end justify-center">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full absolute bottom-2 z-0 transition-transform duration-300 group-hover:scale-105 bg-[#0ea5e9]"></div>
                  <Image
                    src="/backof.png"
                    alt="Property Management Specialist"
                    fill
                    className="z-10 object-contain object-bottom drop-shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>

                {/* Columna Derecha */}
                <div className="flex flex-col flex-grow h-full">
                  <div className="mb-2">
                    <span className="text-[#0ea5e9] text-xs font-bold tracking-wider uppercase">FOR PROPERTY MANAGEMENT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] leading-tight mb-3">
                    Project Coordination & Back-Office Support
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    Proactive coordination, tenant support, financial workflows and admin assistance to keep your operations running smoothly.
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {propertyManagementChecks.map((check, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="bg-[#0ea5e9] text-white rounded-full p-0.5 mt-0.5 shrink-0">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm font-medium text-slate-800">{check}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-blue-700 font-bold text-sm inline-flex items-center gap-1.5 mt-auto">
                    Explore Project Support
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
