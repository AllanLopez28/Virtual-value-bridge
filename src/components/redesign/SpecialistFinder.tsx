"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, CalendarDays, ChartNoAxesCombined, Check, CircleHelp, Clock, House, Megaphone, MessageSquare, Ruler, Search, ShoppingBag, UserRound, Users, X, Zap, BriefcaseBusiness, ReceiptText, type LucideIcon } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useCalendly } from "@/context/CalendlyContext";

export type FinderPreset = { need?: string; industry?: string };
const questions: { title: string; help: string; options: { label: string; icon: LucideIcon; filter?: string }[] }[] = [
  { title: "What do you need help with?", help: "Pick the one that matters most right now.", options: [
    { label: "Estimating & bids", icon: Ruler, filter: "construction" }, { label: "Customer support", icon: MessageSquare, filter: "cx" }, { label: "Admin & scheduling", icon: CalendarDays, filter: "operations" }, { label: "Bookkeeping & billing", icon: ReceiptText, filter: "finance" }, { label: "Property management", icon: House, filter: "property" }, { label: "Sales & marketing", icon: Megaphone, filter: "growth" }, { label: "Not sure yet", icon: CircleHelp, filter: "all" },
  ] },
  { title: "What industry are you in?", help: "We match you with someone who knows your field.", options: [
    { label: "Construction & trades", icon: House }, { label: "Property management", icon: Building2 }, { label: "Accounting & finance", icon: ChartNoAxesCombined }, { label: "E-commerce & retail", icon: ShoppingBag }, { label: "Professional services", icon: BriefcaseBusiness }, { label: "Other", icon: CircleHelp },
  ] },
  { title: "How many specialists do you need?", help: "You can always add more later.", options: [
    { label: "1 specialist", icon: UserRound }, { label: "2 to 5", icon: Users }, { label: "6 or more", icon: Users }, { label: "Not sure yet", icon: CircleHelp },
  ] },
  { title: "When would you like to start?", help: "No commitment. This just helps us plan.", options: [
    { label: "As soon as possible", icon: Zap }, { label: "Within 30 days", icon: Clock }, { label: "In 1 to 3 months", icon: CalendarDays }, { label: "Just exploring", icon: Search },
  ] },
];
const lastStep = ["Where should we send your matches?", "Just your email. We’ll reply with specialist profiles that fit what you need.", "No spam. Your information is secure and will not be shared."];

export default function SpecialistFinder({ preset, onClose }: { preset: FinderPreset; onClose: () => void }) {
  const { openCalendly } = useCalendly();
  const [answers, setAnswers] = useState<(string | undefined)[]>([preset.need, preset.industry]);
  const [step, setStep] = useState(preset.need ? (preset.industry ? 2 : 1) : 0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "success">("idle");
  const modal = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLElement>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [backwards, setBackwards] = useState(false);
  useEffect(() => () => { if (advanceTimer.current !== null) clearTimeout(advanceTimer.current); }, []);
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("fs-open");
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const focusable = [...(modal.current?.querySelectorAll<HTMLElement>("button, input, a[href]") || [])].filter(el => !el.hasAttribute("disabled") && el.offsetParent !== null);
      const first = focusable[0], last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = previous; document.body.classList.remove("fs-open"); document.removeEventListener("keydown", handleKey); };
  }, [onClose]);
  useEffect(() => { content.current?.focus(); }, [step, status]);
  function choose(label: string) {
    if (advanceTimer.current !== null) return;
    const next = [...answers]; next[step] = label; setAnswers(next);
    let index = step + 1;
    while (index < 4 && next[index]) index++;
    setBackwards(false);
    advanceTimer.current = setTimeout(() => { setStep(index); advanceTimer.current = null; }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 220);
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const payload = new FormData();
    payload.set("email", email);
    payload.set("supportType", answers[0] || "Not sure yet");
    payload.set("processDetails", ["Needs help with", "Industry", "Specialists needed", "Start"].map((label, i) => `${label}: ${answers[i] || "—"}`).join("\n"));
    payload.set("_subject", "Find my specialist");
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mdaqdywp", { method: "POST", body: payload, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      sendGTMEvent({ event: "generate_lead", lead_type: "general_contact" });
      setStatus("success");
    } catch { setStatus("error"); }
  }
  const filter = questions[0].options.find(option => option.label === answers[0])?.filter || "all";
  return <div className="fs" id="fs">
    <div className="fs-backdrop" onClick={onClose} />
    <div className="fs-box" ref={modal} role="dialog" aria-modal="true" aria-labelledby="fs-title">
      <div className="fs-top"><button className="fs-back" type="button" aria-label="Previous question" hidden={step === 0 || status === "success"} onClick={() => { if (advanceTimer.current !== null) { clearTimeout(advanceTimer.current); advanceTimer.current = null; } setBackwards(true); setStep(Math.max(0, step - 1)); }}><ArrowLeft /></button><p className="fs-title" id="fs-title">Find your specialist</p><button className="fs-x" type="button" aria-label="Close" onClick={onClose}><X size={20} /></button></div>
      <div className="fs-bar" aria-hidden="true"><i style={{ width: `${status === "success" ? 100 : (step + 1) * 20}%` }} /></div>
      <div className="fs-body"><section className={`fs-step ${backwards ? "back" : ""} ${status === "success" ? "fs-done" : ""}`} key={`${step}-${status === "success"}`} tabIndex={-1} ref={content}>
        {status === "success" ? <>
          <span className="fs-done-ic"><Check /></span><h3>You’re all set.</h3><p className="fs-help">We’ve received your answers. Our team will reply with matching profiles.</p>
          <div className="fs-done-cta"><Link className="fs-browse" href={`/our-agents?specialty=${filter}#directory`} onClick={onClose}>Browse similar agents</Link><button className="fs-cal" onClick={() => { onClose(); openCalendly(); }}>Book a call</button><button className="fs-close-btn" onClick={onClose}>Close</button></div>
        </> : step < 4 ? <>
          <p className="fs-count">Question {step + 1} of 4</p><h3 id="fs-question">{questions[step].title}</h3><p className="fs-help">{questions[step].help}</p>
          <div className={`fs-opts ${step > 1 ? "two" : ""}`} role="group" aria-labelledby="fs-question">{questions[step].options.map(({ label, icon: Icon }) => <button key={label} className={`fs-opt ${answers[step] === label ? "sel" : ""}`} type="button" aria-pressed={answers[step] === label} onClick={() => choose(label)}><span className="fs-oic"><Icon /></span><span>{label}</span><i className="fs-tick" aria-hidden="true" /></button>)}</div>
        </> : <>
          <p className="fs-count">Last step</p><h3>{lastStep[0]}</h3><p className="fs-help">{lastStep[1]}</p>
          <div className="fs-summary" aria-label="Your answers">{answers.map((answer, i) => <button type="button" key={i} aria-label={`Change: ${answer}`} onClick={() => { setBackwards(true); setStep(i); }}>{answer} ✎</button>)}</div>
          <form className="fs-email" onSubmit={submit}><label className="fs-sr" htmlFor="fs-email-in">Work email</label><input id="fs-email-in" type="email" autoComplete="email" placeholder="you@company.com" required value={email} onChange={event => setEmail(event.target.value)} disabled={status === "sending"} /><button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Find my specialist"}<ArrowRight /></button></form>
          {status === "error" && <p className="fs-err" role="alert">Couldn’t send your request. Please try again or email info@vvbridge.net.</p>}<p className="fs-note">{lastStep[2]}</p>
        </>}
      </section></div>
    </div>
  </div>;
}
