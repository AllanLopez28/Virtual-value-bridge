"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

const feedback = ["Thanks for reaching out!", "Your message has been sent successfully. Our team will get back to you shortly.", "Send another message", "We couldn’t send your message. Please try again or email info@vvbridge.net."];

export default function LeadForm({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const payload = new FormData(event.currentTarget);
    payload.set("countryCode", String(payload.get("country") || "US +1"));
    payload.set("phone", `${payload.get("country") || "US +1"} ${payload.get("phone") || ""}`.trim());
    payload.set("supportType", String(payload.get("support") || ""));
    payload.set("processDetails", String(payload.get("process") || ""));
    setStatus("sending");
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mdaqdywp", { method: "POST", body: payload, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      sendGTMEvent({ event: "generate_lead", lead_type: "general_contact" });
      setStatus("success");
    } catch { setStatus("error"); }
  }
  if (status === "success") return <div className={`${className} lead-success`} role="status"><CheckCircle2 /><h3>{feedback[0]}</h3><p>{feedback[1]}</p><button onClick={() => setStatus("idle")}>{feedback[2]}</button></div>;
  return <form id={id} className={className} onSubmit={submit} aria-busy={status === "sending"}>
    {status === "error" && <p role="alert" className="lead-feedback error">{feedback[3]}</p>}
    <fieldset disabled={status === "sending"} className="contents">{children}</fieldset>
    {status === "sending" && <p className="consent" role="status">Sending your message…</p>}
  </form>;
}
