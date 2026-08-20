"use client";

import { useState, useEffect, useRef } from "react";
import { X, UploadCloud, FileText, ArrowRight, CheckCircle2, Check } from "lucide-react";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  jobTitle = "Specialist Position",
}: JobApplicationModalProps) {
  const [englishLevel, setEnglishLevel] = useState(50);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [additionalFiles, setAdditionalFiles] = useState<FileList | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Close on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setIsSubmitted(false);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalContentRef}
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 relative flex flex-col transition-all duration-300 animate-in zoom-in-95 slide-in-from-bottom-4"
      >
        {/* Sticky Header / Close Button */}
        <div className="sticky top-0 right-0 z-20 flex justify-between items-center px-6 sm:px-8 py-5 bg-white/95 backdrop-blur border-b border-slate-100">
          <div>
            <span className="inline-block text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider mb-1">
              Job Application
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0B132B] truncate max-w-md sm:max-w-lg">
              {jobTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#0B132B] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-16 px-4 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0B132B] mb-3">Application Submitted!</h2>
              <p className="text-slate-500 max-w-md leading-relaxed mb-8">
                Thank you for applying for <span className="font-semibold text-slate-700">{jobTitle}</span>. Our Talent Acquisition Team will review your application and get in touch with you shortly.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="bg-[#0B132B] hover:bg-[#1e3a8a] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              {/* SECTION 1: Personal Information */}
              <div>
                <h3 className="text-xl font-extrabold text-[#0B132B] mb-5 tracking-tight">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* First Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="e.g. John"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="e.g. Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john.doe@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex rounded-xl bg-slate-50 border border-slate-200 focus-within:ring-2 focus-within:ring-sky-500 focus-within:bg-white transition-all overflow-hidden">
                      <select
                        name="phonePrefix"
                        defaultValue="+1"
                        className="bg-transparent border-r border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 focus:outline-none cursor-pointer"
                      >
                        <option value="+1">+1 (US/CA)</option>
                        <option value="+503">+503 (SV)</option>
                        <option value="+502">+502 (GT)</option>
                        <option value="+504">+504 (HN)</option>
                        <option value="+52">+52 (MX)</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="718-650-6786"
                        className="w-full bg-transparent px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Upload Zones (2 Cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Upload Resume */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 block">
                      Upload Resume <span className="text-rose-500">*</span>
                    </label>
                    <label
                      htmlFor="resume"
                      className="border-2 border-dashed border-sky-300 hover:border-sky-500 bg-sky-50/40 hover:bg-sky-50/80 rounded-2xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all group min-h-[120px]"
                    >
                      <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">
                        Drag and drop or <span className="text-sky-600 font-bold underline">browse files</span>
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {resumeFile ? resumeFile.name : "PDF, DOC, DOCX up to 5MB"}
                      </p>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Additional Files */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 block">
                      Additional Files
                    </label>
                    <label
                      htmlFor="additionalFiles"
                      className="border-2 border-dashed border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100/80 rounded-2xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all group min-h-[120px]"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <FileText className="w-5 h-5" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">
                        Drag and drop or <span className="text-slate-700 font-bold underline">browse files</span>
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {additionalFiles && additionalFiles.length > 0
                          ? `${additionalFiles.length} file(s) selected`
                          : "Portfolio, references, etc."}
                      </p>
                      <input
                        type="file"
                        id="additionalFiles"
                        name="additionalFiles"
                        multiple
                        onChange={(e) => setAdditionalFiles(e.target.files)}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Work Details */}
              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-xl font-extrabold text-[#0B132B] mb-5 tracking-tight">
                  Work Details
                </h3>

                <div className="flex flex-col gap-5">
                  {/* Availability */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="availability" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      What is your availability to join the company? <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="availability"
                      name="availability"
                      required
                      placeholder="Immediate, 1 week, 15 days, or 30 days"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>



                  {/* Experience in the position */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="experience" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Briefly detail your experience in the position: <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={4}
                      required
                      placeholder="Summary of relevant roles, tools used, and daily responsibilities..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* Locations (Checkboxes) */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Locations <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-1">
                      <label className="flex items-center gap-2.5 cursor-pointer text-sm font-medium text-slate-700">
                        <input
                          type="checkbox"
                          name="location"
                          value="San Salvador"
                          defaultChecked
                          className="w-4 h-4 rounded text-sky-600 accent-sky-600 focus:ring-sky-500"
                        />
                        <span>San Salvador</span>
                      </label>
                      <label className="flex items-center gap-2.5 cursor-pointer text-sm font-medium text-slate-700">
                        <input
                          type="checkbox"
                          name="location"
                          value="El Salvador, Central Zone"
                          className="w-4 h-4 rounded text-sky-600 accent-sky-600 focus:ring-sky-500"
                        />
                        <span>El Salvador, Central Zone</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Financial & Language */}
              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-xl font-extrabold text-[#0B132B] mb-5 tracking-tight">
                  Financial & Language
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  {/* Current / Last salary */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastSalary" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Detail your current or last earned salary and benefits package: <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="lastSalary"
                      name="lastSalary"
                      rows={3}
                      required
                      placeholder="e.g. $800/mo + law benefits"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Salary Expectation */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="salaryExpectation" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Salary Expectation: <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="salaryExpectation"
                      name="salaryExpectation"
                      rows={3}
                      required
                      placeholder="e.g. $1,000 - $1,200/mo"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* English Proficiency Slider */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    English Proficiency <span className="text-rose-500">*</span>
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-700">
                        Language Proficiency Percentage
                      </span>
                      <span className="text-sm font-extrabold text-[#0B132B] bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                        {englishLevel}%
                      </span>
                    </div>
                    <div className="py-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={englishLevel}
                        onChange={(e) => setEnglishLevel(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 font-semibold px-1">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer / Submit Button */}
              <div className="pt-4 border-t border-slate-100 flex justify-end items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#00a6f4] hover:bg-[#0284c7] text-white font-extrabold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-sky-400/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-70 disabled:pointer-events-none"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
