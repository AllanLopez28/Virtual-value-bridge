"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Calendar, Mail, Phone, ShieldCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "US +1",
    phone: "",
    supportType: "",
    processDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          styles: { branding: { brandColor: "#1e3a8a" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error("Cal.com initialization error:", err);
      }
    })();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("company", formData.company);
    submitData.append("email", formData.email);
    submitData.append("countryCode", formData.countryCode);
    submitData.append("phone", `${formData.countryCode} ${formData.phone}`.trim());
    submitData.append("supportType", formData.supportType);
    submitData.append("processDetails", formData.processDetails);

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mdaqdywp";

      const response = await fetch(endpoint, {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        sendGTMEvent({ event: "generate_lead", lead_type: "general_contact" });
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          "Something went wrong while submitting. Please try again or reach out directly to info@vvbridge.net."
        );
        console.error("Form submission failed");
      }
    } catch (error) {
      setErrorMessage(
        "Could not connect to the server. Please check your network or email info@vvbridge.net."
      );
      console.error("Form submission error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      countryCode: "US +1",
      phone: "",
      supportType: "",
      processDetails: "",
    });
    setErrorMessage(null);
  };

  const inputBaseStyle =
    "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none text-slate-800 placeholder:text-slate-400 bg-white transition-all";

  return (
    <section id="contact" className="w-full bg-[#f8fafc] py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda (Información y Calendly) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Encabezados */}
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3 block">
              CONTACT
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B132B] mb-4 tracking-tight">
              Let&apos;s connect.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Interested in outsourcing support, improving operations, or scaling your team with
              Virtual Value Bridge? Share a few details and our team will reach out to explore how
              we can help.
            </p>
            <p className="text-sm text-slate-600 mb-6">
              Looking for career opportunities?{" "}
              <Link className="text-blue-600 font-bold underline hover:text-blue-700 transition-colors" href="/careers">
                Click here.
              </Link>
            </p>

            {/* Datos de Contacto */}
            <div className="flex flex-col gap-4 mb-8">
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

            {/* Tarjeta de Calendly (Fondo Azul) */}
            <div className="bg-[#1e3a8a] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <Calendar className="w-8 h-8 text-[#84cc16] mb-4" strokeWidth={1.75} />
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Prefer to book directly?
              </h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed mb-6 max-w-sm">
                Pick a 30-minute slot that works for you. Founder-led, no sales pitch.
              </p>
              <div>
                <button
                  type="button"
                  data-cal-link="virtualvaluebridge/intro-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="bg-[#84cc16] text-[#0B132B] font-bold px-6 py-3 rounded-full hover:bg-lime-500 transition-colors inline-flex items-center gap-2 text-sm shadow-sm cursor-pointer"
                >
                  Open calendar <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha (Formulario y Estado) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full gap-4 animate-in fade-in zoom-in duration-300">
                <CheckCircle className="w-16 h-16 text-[#84cc16] mb-2" />
                <h3 className="text-2xl font-extrabold text-[#0B132B]">Thanks for reaching out!</h3>
                <p className="text-slate-600 max-w-sm text-sm leading-relaxed">
                  Your message has been sent successfully. Our team will get back to you shortly.
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {errorMessage && (
                  <div className="p-3.5 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl">
                    {errorMessage}
                  </div>
                )}

                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputBaseStyle}
                  />
                </div>

                {/* Company */}
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company *"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className={inputBaseStyle}
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputBaseStyle}
                  />
                </div>

                {/* Fila de Teléfono (Grid de 2 columnas) */}
                <div className="grid grid-cols-[115px_1fr] sm:grid-cols-[130px_1fr] gap-3">
                  <div className="relative">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-3 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white text-slate-700 cursor-pointer appearance-none"
                    >
                      <option value="US +1">US +1</option>
                      <option value="CA +1">CA +1</option>
                      <option value="MX +52">MX +52</option>
                      <option value="GB +44">GB +44</option>
                      <option value="ES +34">ES +34</option>
                      <option value="CO +57">CO +57</option>
                      <option value="SV +503">SV +503</option>
                      <option value="GT +502">GT +502</option>
                      <option value="HN +504">HN +504</option>
                      <option value="CR +506">CR +506</option>
                      <option value="PA +507">PA +507</option>
                      <option value="AR +54">AR +54</option>
                      <option value="CL +56">CL +56</option>
                      <option value="PE +51">PE +51</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputBaseStyle}
                    />
                  </div>
                </div>

                {/* Support Type */}
                <div>
                  <input
                    type="text"
                    name="supportType"
                    placeholder="What kind of support are you looking for? *"
                    required
                    value={formData.supportType}
                    onChange={handleChange}
                    className={inputBaseStyle}
                  />
                </div>

                {/* Process Details */}
                <div>
                  <textarea
                    rows={4}
                    name="processDetails"
                    placeholder="What process would you like to outsource? *"
                    required
                    value={formData.processDetails}
                    onChange={handleChange}
                    className={`${inputBaseStyle} resize-none`}
                  />
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-slate-500 mt-2 mb-2 leading-relaxed">
                  By submitting this form, I agree to be contacted by Virtual Value Bridge via any of
                  the methods shared above.
                </p>

                {/* Botón Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#1e3a8a] text-white font-bold w-full py-3.5 rounded-full flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer shadow-md"
                >
                  {isLoading ? "Submitting..." : (
                    <>
                      Submit <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>

                {/* Sello de Seguridad */}
                <div className="flex items-center justify-center gap-2 mt-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#84cc16] shrink-0" />
                  <span>Your information is secure and will not be shared.</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
