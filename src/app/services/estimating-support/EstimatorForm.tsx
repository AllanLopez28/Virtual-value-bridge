"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, Phone, ShieldCheck } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

const questions = [
  { key: "model", title: "What kind of estimating help do you need?", options: ["A dedicated full-time estimator", "Project-based takeoffs", "Not sure yet"] },
  { key: "trade", title: "What type of contractor are you?", options: ["Roofing", "General contractor", "Remodeling", "Tile & flooring", "HVAC", "Plumbing", "Electrical", "Other"] },
  { key: "software", title: "Which estimating software do you use?", options: ["Xactimate", "Bluebeam Revu", "PlanSwift", "Procore", "AccuLynx", "Excel / other"] },
];
const copy = ["Get matched in 48 hours", "← Back", "Where should we send your estimator profiles?", "Name", "Email", "Phone", "(optional)", "Please add your name and a valid email.", "Please enter a 10-digit U.S. phone number, or leave it blank.", "Get matched with an estimator", "Your information is secure and will not be shared. No spam.", "Thanks, we’ve got it.", "Our team will reply with estimator profiles that match your trade and software.", "Prefer to talk now? +1 (718) 650-6786", "We couldn’t send your request. Please try again or contact info@vvbridge.net.", "Continue"];
const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];

export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
  if (digits.length < 4) return digits.length ? `(${digits}` : "";
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function EstimatorForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "success">("idle");
  const [invalid, setInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [phone, setPhone] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const submitting = useRef(false);
  const currentStep = useRef(0);
  const advance = useCallback((index: number) => { currentStep.current = index; setStep(index); }, []);

  const choose = useCallback((index: number, value: string) => {
    if (timer.current !== null) return;
    setAnswers(previous => { const next = [...previous]; next[index] = value; return next; });
    if (index === questions.length - 1) return;
    timer.current = setTimeout(() => { timer.current = null; advance(index + 2); }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180);
  }, [advance]);
  useEffect(() => {
    const pick = (event: Event) => {
      const value = (event as CustomEvent<string>).detail;
      if (!questions[0].options.includes(value)) return;
      if (currentStep.current === 0) setAnswers(previous => { const next = [...previous]; next[0] = value; return next; });
      else if (currentStep.current === 1) choose(0, value);
    };
    window.addEventListener("estimator-model-pick", pick);
    return () => { window.removeEventListener("estimator-model-pick", pick); if (timer.current !== null) clearTimeout(timer.current); };
  }, [choose]);
  useEffect(() => {
    if (form.current?.contains(document.activeElement)) form.current.querySelector<HTMLElement>(".step:not([hidden])")?.focus({ preventScroll: true });
  }, [step, status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") || "").trim();
    const email = String(fields.get("email") || "").trim();
    const digits = phone.replace(/\D/g, "");
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setInvalid(true);
      if (step !== 0) advance(0);
      form.current?.querySelector<HTMLInputElement>(`input[name="${name ? "email" : "name"}"]`)?.focus();
      return;
    }
    setInvalid(false);
    if (digits.length && digits.length !== 10) { if (step !== 0) advance(0); setPhoneInvalid(true); form.current?.querySelector<HTMLInputElement>('input[name="phone"]')?.focus(); return; }
    setPhoneInvalid(false);
    if (step === 0) { advance(1); return; }
    if (step !== 3) return;
    const missing = questions.findIndex((question, index) => !question.options.includes(answers[index]));
    if (missing !== -1) { advance(missing + 1); return; }
    const query = new URLSearchParams(window.location.search);
    const attribution = attributionKeys.map(key => query.get(key) ? `${key}: ${query.get(key)}` : "").filter(Boolean);
    const payload = { name, email, company: "", countryCode: digits ? "+1" : "", phone: digits, supportType: answers[0], processDetails: [`Estimating help: ${answers[0]}`, `Contractor type: ${answers[1]}`, `Software: ${answers[2]}`, ...attribution, `Landing page: ${window.location.href.split("#")[0]}`].join("\n") };
    submitting.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/intro-call", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      // Retain the existing redundant inbox delivery. Conversion still requires API success.
      const backup = new FormData();
      Object.entries(payload).forEach(([key, value]) => backup.append(key, value));
      void fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mdaqdywp", { method: "POST", body: backup, headers: { Accept: "application/json" } }).catch(() => {});
      if (!response.ok) throw new Error("Lead submission failed");
      sendGTMEvent({ event: "generate_lead", lead_type: "estimating_support" });
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#thank-you`);
      setStatus("success");
      advance(4);
    } catch { setStatus("error"); } finally { submitting.current = false; }
  }
  return <form className="lead" id="lead" ref={form} noValidate aria-labelledby="lead-title" onSubmit={submit} aria-busy={status === "sending"}>
    <div className="lead-top"><p className="lead-title" id="lead-title">{copy[0]}</p><span className="lead-step" hidden={step === 4}><b>{Math.min(step + 1, 4)}</b> of 4</span></div>
    <div className="bar" aria-hidden="true"><i style={{ width: `${Math.min(100, (step + 1) * 25)}%` }} /></div>
    <button type="button" className="back" hidden={step === 0 || step === 4} disabled={status === "sending"} onClick={() => { if (timer.current !== null) { clearTimeout(timer.current); timer.current = null; } advance(Math.max(0, step - 1)); }}>{copy[1]}</button>
    <fieldset className="step" data-i="0" hidden={step !== 0} tabIndex={-1} disabled={status === "sending"}>
      <legend>{copy[2]}</legend><div className="fields">
        <label><span>{copy[3]}</span><input name="name" autoComplete="name" required /></label>
        <label><span>{copy[4]}</span><input name="email" type="email" autoComplete="email" required /></label>
        <label><span>{copy[5]} <em>{copy[6]}</em></span><input name="phone" type="tel" autoComplete="tel-national" inputMode="numeric" placeholder="(555) 555-5555" maxLength={14} aria-describedby="phone-err" value={phone} onChange={event => { setPhone(formatPhone(event.target.value)); setPhoneInvalid(false); }} /></label>
      </div>
      <p className="err" role="alert" hidden={!invalid}>{copy[7]}</p><p className="err" id="phone-err" role="alert" hidden={!phoneInvalid}>{copy[8]}</p>
      {status === "error" && <p className="err" role="alert">{copy[14]}</p>}
      <button className="submit" type="submit" disabled={status === "sending"}>{copy[15]}<ArrowRight className="ar" /></button>
      <p className="priv"><ShieldCheck />{copy[10]}</p>
    </fieldset>
    {questions.map((question, index) => <fieldset className="step" data-i={index + 1} key={question.key} hidden={step !== index + 1} tabIndex={-1} disabled={status === "sending"}>
      <legend>{question.title}</legend><div className={`opts ${index ? "grid" : ""}`}>{question.options.map(option => <button className={`opt ${answers[index] === option ? "sel" : ""}`} key={option} type="button" aria-pressed={answers[index] === option} onClick={() => choose(index, option)}>{option}</button>)}</div>
      {index === questions.length - 1 && <>
        {status === "error" && <p className="err" role="alert">{copy[14]}</p>}
        <button className="submit" type="submit" disabled={!answers[2] || status === "sending"}>{status === "sending" ? "Sending…" : copy[9]}<ArrowRight className="ar" /></button>
      </>}
    </fieldset>)}
    <div className="step done" data-i="4" hidden={step !== 4} tabIndex={-1} role="status"><span className="done-ic"><Check /></span><h3>{copy[11]}</h3><p>{copy[12]}</p><a className="call-now" href="tel:+17186506786"><Phone />{copy[13]}</a></div>
  </form>;
}
