"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MonitorCheck,
  RefreshCw,
  Ruler,
  FileSpreadsheet,
  Scale,
  ClipboardList,
  Calendar,
  Loader2,
  ShieldCheck,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { motion } from "framer-motion";

const leadFields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
] as const;

const supportOptions = [
  { title: "Dedicated Remote Estimator", description: "A full-time bilingual specialist working in your software and U.S. business hours." },
  { title: "Project-Based Takeoff Support", description: "Takeoff and estimating support scoped to the plans and bids you need help with." },
];

export default function EstimatingSupportClient() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      company: "",
      email: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      countryCode: "",
      phone: "",
      supportType: "Estimating support inquiry",
      processDetails: "",
    };

    try {
      const res = await fetch("/api/intro-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Redundant backup via Formspree
      try {
        const formDataPayload = new FormData();
        formDataPayload.append("name", payload.name);
        formDataPayload.append("company", payload.company);
        formDataPayload.append("email", payload.email);
        formDataPayload.append("countryCode", payload.countryCode);
        formDataPayload.append("phone", payload.phone);
        formDataPayload.append("supportType", payload.supportType);
        formDataPayload.append("processDetails", payload.processDetails);
        fetch("https://formspree.io/f/mdaqdywp", {
          method: "POST",
          body: formDataPayload,
          headers: { Accept: "application/json" },
        }).catch(() => {});
      } catch {}

      if (res.ok) {
        sendGTMEvent({ event: "generate_lead", lead_type: "estimating_support" });
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const inputBaseStyle =
    "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none text-slate-800 placeholder:text-slate-400 bg-white transition-all";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1d4ed8] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pb-28 pt-6 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Columna Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 lg:pt-14"
          >
            {/* Avatar */}
            <div className="relative hidden lg:inline-block mb-8">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white border-4 border-white/80 overflow-hidden shadow-xl relative">
                <Image
                  src="/constructpng.png"
                  alt="Construction Estimator"
                  fill
                  className="object-contain scale-[1.15] translate-y-1.5"
                />
              </div>
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#84cc16] text-[#0B132B] text-xs sm:text-sm font-extrabold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                Available Now
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-2xl min-[375px]:text-3xl lg:text-[54px] font-extrabold tracking-tight leading-tight mb-3 lg:mb-6 text-white">
              <span className="text-accent">Roofing &amp; Construction</span>{" "}
              Estimating Support
              <span className="block text-lg lg:text-3xl mt-2">for U.S. Contractors</span>
            </h1>
            <p className="text-blue-100 text-sm lg:text-lg max-w-xl lg:mb-8 leading-relaxed">
              Dedicated remote estimators or project-based takeoffs, in your software and time zone.
            </p>

            {/* Tagline Inferior */}
            <div className="hidden lg:flex items-center">
              <span className="text-white font-bold tracking-widest text-xs">VIRTUAL VALUE BRIDGE</span>
              <span className="text-white/50 mx-2">|</span>
              <span className="text-[#84cc16] font-bold tracking-widest text-xs">WHERE VIRTUAL MEETS VALUE</span>
            </div>
          </motion.div>

          {/* Columna Derecha (Formulario) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            id="estimating-inquiry"
            className="lg:col-span-5 flex flex-col gap-4 scroll-mt-24"
          >
            <div className="bg-white rounded-3xl p-5 lg:p-8 shadow-2xl border border-slate-100 max-w-md mx-auto lg:ml-auto w-full">
              {status === "success" ? (
                <div role="status" className="flex flex-col items-center justify-center py-10 text-center gap-4 animate-in fade-in zoom-in duration-300">
                  <CheckCircle className="w-16 h-16 text-[#84cc16] mb-2" />
                  <h3 className="text-2xl font-extrabold text-[#0B132B]">Thanks for reaching out!</h3>
                  <p className="text-slate-600 max-w-sm text-sm leading-relaxed">
                    Your message has been sent successfully. A founder will follow up with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-full border border-slate-300 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-2.5 lg:gap-3" onSubmit={handleSubmit} aria-labelledby="estimating-form-title">
                  <h2 id="estimating-form-title" className="text-xl font-extrabold text-secondary">Get estimating support</h2>
                  {leadFields.map(({ name, label, type, autoComplete }) => (
                    <div key={name}>
                      <label htmlFor={`estimating-${name}`} className="block text-xs font-semibold text-slate-700 mb-1">{label}</label>
                      <input
                        id={`estimating-${name}`}
                        type={type}
                        name={name}
                        autoComplete={autoComplete}
                        required
                        maxLength={254}
                        value={formData[name]}
                        onChange={handleChange}
                        className={inputBaseStyle}
                      />
                    </div>
                  ))}

                  {/* Disclaimer */}
                  <p className="text-xs text-slate-500 leading-relaxed">
                    By submitting this form, I agree to be contacted by Virtual Value Bridge via any of
                    the methods shared above.
                  </p>

                  {/* Botón Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-primary text-white font-bold w-full py-3.5 rounded-full flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer shadow-md"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        Request estimating support <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>

                  {/* Sello de Seguridad */}
                  <div className="flex items-center justify-center gap-2 mt-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#84cc16] shrink-0" />
                    <span>Your information is secure and will not be shared.</span>
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-xs text-red-600 font-semibold text-center mt-2">
                      Something went wrong. Please try again or email us directly at info@vvbridge.net.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Pequeña sección de contacto directo */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-md mx-auto lg:ml-auto w-full flex flex-col gap-4">
              <a
                href="mailto:info@vvbridge.net"
                className="flex items-center gap-3.5 group hover:opacity-90 transition-opacity"
              >
                <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                  <Mail className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium">Email</span>
                  <span className="text-sm sm:text-base font-bold text-[#0B132B] group-hover:text-blue-600 transition-colors">
                    info@vvbridge.net
                  </span>
                </div>
              </a>

              <a
                href="tel:+17186506786"
                className="flex items-center gap-3.5 group hover:opacity-90 transition-opacity"
              >
                <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                  <Phone className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium">Phone</span>
                  <span className="text-sm sm:text-base font-bold text-[#0B132B] group-hover:text-blue-600 transition-colors">
                    +1 (718) 650-6786
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/virtual-value-bridge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group hover:opacity-90 transition-opacity"
              >
                <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium">LinkedIn</span>
                  <span className="text-sm sm:text-base font-bold text-[#0B132B] group-hover:text-blue-600 transition-colors">
                    Virtual Value Bridge
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tarjetas Flotantes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-lime-100/80 text-lime-700 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#0B132B] text-base mb-1">CST Time Zone Alignment</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Working side-by-side with your project managers.</p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-lime-100/80 text-lime-700 flex items-center justify-center flex-shrink-0">
              <MonitorCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#0B132B] text-base mb-1">Software Ready</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Trained on Xactimate, Bluebeam, PlanSwift, and Excel.</p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-lime-100/80 text-lime-700 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#0B132B] text-base mb-1">Zero Lock-In</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Flexible month-to-month agreement with free specialist replacement.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Barra Inferior de Software */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 bg-white">
        <h3 className="text-sm font-extrabold text-[#0B132B] mb-4">Trained on the Software You Already Use</h3>
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {["Xactimate", "Bluebeam Revu", "PlanSwift", "Procore", "AccuLynx", "Microsoft Excel"].map(
            (software) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                key={software}
                className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-bold text-[#0B132B] flex items-center gap-2 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-sm bg-blue-600"></span>
                {software}
              </motion.div>
            )
          )}
        </motion.div>
      </section>

      {/* Sección 1: Testimonio */}
      <section className="bg-[#1d4ed8] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pt-16 pb-36">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-white">Real Results for</span>
            <span className="bg-[#84cc16] text-[#0B132B] px-3 py-1 rounded-md inline-block sm:ml-2 mt-2 sm:mt-0">
              Construction & Trade Businesses
            </span>
          </h2>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#0B132B] rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12"
        >
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-7">
            <span className="text-[#84cc16] text-5xl sm:text-6xl font-serif leading-none select-none flex-shrink-0 mt-1">
              &ldquo;
            </span>
            <div className="flex-1 w-full">
              <p className="text-white text-lg sm:text-xl font-bold leading-relaxed">
                Bringing on support for our administrative and project needs has made a big difference in
                how we operate. Moving takeoffs and estimates out of the daily workload of our project
                team has been one of the best decisions we&apos;ve made. It allows our team to stay focused
                on active projects, while estimates are completed faster and details stay organized.
              </p>

              <hr className="border-slate-700/50 my-8 w-full" />

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="w-48 sm:w-64 h-16 sm:h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 p-2.5 sm:p-3 shadow-md relative overflow-hidden">
                  <Image
                    src="/artistictile-logo.PNG"
                    alt="Artistic Tile Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xl sm:text-2xl font-extrabold tracking-tight mb-1">
                    Moses G.
                  </span>
                  <div className="text-xs sm:text-sm font-semibold flex items-center flex-wrap">
                    <span className="text-[#84cc16]">Project Manager</span>
                    <span className="text-slate-500 mx-1.5">•</span>
                    <span className="text-slate-300">Artistic Tile & Installation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sección 2: Alcance del Rol */}
      <section className="bg-white py-20">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 relative w-full min-h-[420px] lg:h-full rounded-2xl overflow-hidden border-2 border-dashed border-[#84cc16]/60 bg-[#0B132B] shadow-md"
            >
              <Image
                src="/const-ej1.png"
                alt="Construction Estimator Scope"
                fill
                className="object-cover object-center"
              />
            </motion.div>

            {/* Columna Derecha - Tarjetas */}
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-between space-y-4"
            >
              {[
                {
                  icon: Ruler,
                  title: "Full Material Takeoffs & Line-Item Pricing",
                  desc: "Accurate scope breakdowns from blueprints, aerial roof measurement reports, and field notes.",
                },
                {
                  icon: FileSpreadsheet,
                  title: "Software-Driven Bid Preparation",
                  desc: "Drafting estimates directly in Xactimate, Bluebeam, or your custom pricing spreadsheets.",
                },
                {
                  icon: Scale,
                  title: "Vendor & Material Cost Comparisons",
                  desc: "Reconciling supplier quotes to protect profit margins before bids are sent to clients.",
                },
                {
                  icon: ClipboardList,
                  title: "CRM & Proposal Management",
                  desc: "Keeping your CRM (AccuLynx, Jobber, Buildertrend) updated with estimate statuses and follow-ups.",
                },
              ].map((task, idx) => {
                const IconComponent = task.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0B132B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#0B132B] text-base mb-1">{task.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{task.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary mb-6">Flexible Support for Your Bid Volume</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {supportOptions.map(({ title, description }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-background p-6">
              <h3 className="font-bold text-secondary mb-2">{title}</h3>
              <p className="text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
        <a href="#estimating-inquiry" className="inline-flex mt-6 rounded-full bg-primary text-white px-6 py-3 text-sm font-bold">Discuss your estimating needs</a>
      </section>

      {/* Sección 3: The ROI Angle */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <span className="flex items-center text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#84cc16] inline-block mr-2"></span>
              THE ROI ANGLE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] leading-[1.15] max-w-lg">
              Why Top Contractors Outsource Takeoffs
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {/* Vista Móvil (Tarjetas Apiladas) */}
            <div className="md:hidden flex flex-col gap-4 mb-8">
              {[
                { factor: "Annual Salary & Overhead", us: "$75,000 – $95,000+ USD / year", vvb: "Up to 60% Savings" },
                { factor: "Time Zone & Availability", us: "Standard local hours", vvb: "100% CST (Same Business Hours)" },
                { factor: "Language & Communication", us: "Native English", vvb: "100% Fluent English & Spanish" },
                { factor: "Onboarding & Risk", us: "Weeks of hiring + payroll tax", vvb: "Hand-picked, pre-vetted + Free Replacement" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-slate-50/70 py-3 px-5 border-b border-slate-200/80">
                    <h4 className="text-sm font-extrabold text-[#0B132B]">{item.factor}</h4>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        U.S. In-House Estimator
                      </span>
                      <span className="text-sm font-medium text-slate-600">{item.us}</span>
                    </div>
                    <div className="bg-[#f4fce8] p-5 border-t border-[#84cc16]/30 relative">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#84cc16]"></div>
                      <span className="text-[11px] font-extrabold text-[#65a30d] uppercase tracking-wider block mb-1">
                        Virtual Value Bridge
                      </span>
                      <span className={`font-extrabold text-[#0B132B] ${idx === 0 ? "text-xl" : "text-base"}`}>
                        {item.vvb}
                      </span>
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
                    <th className="w-[28%] bg-slate-50/70 py-5 px-6 sm:px-8 text-xs font-extrabold text-[#0B132B]">
                      Factor
                    </th>
                    <th className="w-[32%] bg-slate-50/70 py-5 px-6 sm:px-8 text-xs font-extrabold text-[#0B132B]">
                      U.S. In-House Estimator
                    </th>
                    <th className="w-[40%] bg-[#84cc16] py-5 px-6 sm:px-8 text-xs font-extrabold text-[#0B132B]">
                      Virtual Value Bridge Estimator
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70">
                  <tr>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">
                      Annual Salary & Overhead
                    </td>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-medium text-slate-500">
                      $75,000 – $95,000+ USD / year
                    </td>
                    <td className="bg-[#f4fce8] py-6 px-6 sm:px-8 text-lg sm:text-xl font-extrabold text-[#0B132B]">
                      Up to 60% Savings
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">
                      Time Zone & Availability
                    </td>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-medium text-slate-500">
                      Standard local hours
                    </td>
                    <td className="bg-[#f4fce8] py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">
                      100% CST (Same Business Hours)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">
                      Language & Communication
                    </td>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-medium text-slate-500">
                      Native English
                    </td>
                    <td className="bg-[#f4fce8] py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">
                      100% Fluent English & Spanish
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">
                      Onboarding & Risk
                    </td>
                    <td className="bg-white py-6 px-6 sm:px-8 text-sm font-medium text-slate-500">
                      Weeks of hiring + payroll tax
                    </td>
                    <td className="bg-[#f4fce8] py-6 px-6 sm:px-8 text-sm font-extrabold text-[#0B132B]">
                      Hand-picked, pre-vetted + Free Replacement
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-sm text-slate-500 font-medium">
                See your exact numbers before you commit.
              </span>
              <Link
                href="/calculator"
                className="bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-colors shadow-sm"
              >
                Calculate your savings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección 4: Guarantee & Final CTA */}
      <section className="w-full bg-[#84cc16] py-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <span className="text-xl sm:text-2xl font-extrabold text-[#0B132B]">Not the right fit?</span>
            <span className="underline decoration-2 underline-offset-4 font-extrabold text-[#0B132B] ml-1.5 text-xl sm:text-2xl">
              We replace your specialist — free.
            </span>
            <span className="text-xs sm:text-sm text-[#0B132B]/80 font-medium mt-1.5 block">
              No long-term contracts. No reason to overthink it.
            </span>
          </div>
          <a
            href="#estimating-inquiry"
            className="bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-colors flex-shrink-0 shadow-sm cursor-pointer"
          >
            Talk to a founder
          </a>
        </motion.div>
      </section>

      <section className="w-full bg-[#070C1A] py-20 sm:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight block mb-2">
            Stop Turning Down Bids Due to
          </span>
          <span className="bg-[#84cc16] text-[#0B132B] text-3xl sm:text-4xl lg:text-5xl font-extrabold px-4 py-1 rounded-md inline-block tracking-tight">
            Lack of Capacity
          </span>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mt-6 mb-10 font-normal">
            Every Virtual Value Bridge specialist is hand-picked and onboarded directly into your SOPs.
            No seat-fillers, no long-term commitments, and direct access to our founders whenever you
            need it.
          </p>
          <button
            onClick={() => window.open("https://calendly.com/allan-escalante3/30min", "_blank")}
            className="bg-[#84cc16] hover:bg-lime-500 text-[#0B132B] font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center gap-2.5 shadow-lg hover:scale-[1.02] cursor-pointer"
          >
            <Calendar className="w-4 h-4" strokeWidth={2.5} />
            Book Your Free Discovery Call
          </button>
        </motion.div>
      </section>
    </main>
  );
}
