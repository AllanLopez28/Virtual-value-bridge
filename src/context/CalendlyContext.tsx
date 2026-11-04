"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import CalendlyModal from "@/components/modals/CalendlyModal";

interface CalendlyContextType {
  isOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = useCallback(() => setIsOpen(true), []);
  const closeCalendly = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-calendly", handleOpen);
    window.addEventListener("close-calendly", handleClose);

    return () => {
      window.removeEventListener("open-calendly", handleOpen);
      window.removeEventListener("close-calendly", handleClose);
    };
  }, []);

  return (
    <CalendlyContext.Provider value={{ isOpen, openCalendly, closeCalendly }}>
      {children}
      <CalendlyModal isOpen={isOpen} onClose={closeCalendly} />
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
}

export function openCalendlyModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-calendly"));
  }
}

