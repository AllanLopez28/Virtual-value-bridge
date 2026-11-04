"use client";

import { useEffect, useState } from "react";
import { Calendar, Loader2, X } from "lucide-react";
import { CALENDLY_URL } from "@/config/constants";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const [isLoading, setIsLoading] = useState(true);

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
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-3 sm:p-6 transition-all duration-300 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-modal-title"
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full h-[90vh] max-h-[820px] shadow-2xl border border-slate-100 relative flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex justify-between items-center px-5 sm:px-8 py-3.5 sm:py-4 bg-white border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#47b0d8]/10 text-[#47b0d8] flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 id="calendly-modal-title" className="text-sm sm:text-base font-extrabold text-[#0B132B]">
                Schedule a Discovery Call
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                Virtual Value Bridge · 30 min meeting
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#0B132B] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#47b0d8] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Calendly Frame */}
        <div className="relative flex-1 w-full h-full bg-slate-50">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 gap-3">
              <Loader2 className="w-8 h-8 text-[#47b0d8] animate-spin" />
              <p className="text-sm font-medium text-slate-500">Loading booking calendar...</p>
            </div>
          )}
          <iframe
            src={CALENDLY_URL}
            width="100%"
            height="100%"
            title="Schedule a Call with Virtual Value Bridge"
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
