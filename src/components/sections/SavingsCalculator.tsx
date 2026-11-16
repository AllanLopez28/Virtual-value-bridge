"use client";

import { useState } from "react";
import { ArrowRight, Check, Download } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";

const roles = ["Admin / tenant support", "Bookkeeping (AP/AR)", "Leasing support", "Collections"];
const copy = ["THE SAVINGS CALCULATOR", "See your", "savings", "in seconds.", "Estimate what you’d save by replacing a local hire with a dedicated Virtual Value Bridge specialist — fully loaded with benefits and overhead.", "Choose a role", "Hours per week", "Local hourly rate", "We add 25% for benefits, payroll tax, and equipment overhead.", "ESTIMATED MONTHLY SAVINGS", "Local hire (loaded)", "Virtual Value Bridge specialist", "Download breakdown", "Discuss your savings", "Same U.S. time zone", "Free replacement", "No long-term contract"];
const money = (value: number) => value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function SavingsCalculator() {
  const [role, setRole] = useState(roles[0]);
  const [hours, setHours] = useState(21);
  const [localRate, setLocalRate] = useState(25);
  const { openCalendly } = useCalendly();

  // Sales-facing pricing commitments: unchanged from the existing calculator.
  const WEEKS_PER_MONTH = 4.33;
  const VVBRIDGE_HOURLY_RATE = 12;
  const LOCAL_OVERHEAD_MULTIPLIER = 1.25;
  const localWeeklyCost = hours * localRate * LOCAL_OVERHEAD_MULTIPLIER;
  const localMonthlyCost = Math.round(localWeeklyCost * WEEKS_PER_MONTH);
  const vvbridgeMonthlyCost = Math.round(hours * VVBRIDGE_HOURLY_RATE * WEEKS_PER_MONTH);
  const monthlySavings = localMonthlyCost - vvbridgeMonthlyCost;
  const annualSavings = monthlySavings * 12;

  function download() {
    const report = ["Virtual Value Bridge — Savings estimate", `Role: ${role}`, `Hours per week: ${hours}`, `Local hourly rate: ${money(localRate)}`, "Local overhead: 25%", "Weeks per month: 4.33", `Local hire (loaded): ${money(localMonthlyCost)}/month`, `Virtual Value Bridge: ${money(vvbridgeMonthlyCost)}/month`, `Monthly savings: ${money(monthlySavings)}`, `Annual savings: ${money(annualSavings)}`, "Estimate only. Contact info@vvbridge.net to discuss your needs."].join("\n");
    const url = URL.createObjectURL(new Blob([report], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = "vvbridge-savings-estimate.txt"; link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <section className="savings-page" id="calculator">
    <div className="simple-page-title"><p className="eyebrow">{copy[0]}</p><h1>{copy[1]} <em>{copy[2]}</em> {copy[3]}</h1><p>{copy[4]}</p></div>
    <div className="savings-grid">
      <div className="savings-controls">
        <fieldset><legend>{copy[5]}</legend><div className="savings-roles">{roles.map(item => <button type="button" className={item === role ? "active" : ""} aria-pressed={item === role} key={item} onClick={() => setRole(item)}>{item}</button>)}</div></fieldset>
        <div className="savings-slider"><label htmlFor="hours">{copy[6]}<output htmlFor="hours">{hours} hrs</output></label><input id="hours" type="range" min="1" max="40" value={hours} onChange={event => setHours(Number(event.target.value))} style={{ background: `linear-gradient(to right,var(--primary) ${((hours - 1) / 39) * 100}%,var(--line) ${((hours - 1) / 39) * 100}%)` }} /><div><span>1 hr</span><span>40 hrs</span></div></div>
        <div className="savings-slider"><label htmlFor="local-rate">{copy[7]}<output htmlFor="local-rate">${localRate}/hr</output></label><input id="local-rate" type="range" min="15" max="100" value={localRate} onChange={event => setLocalRate(Number(event.target.value))} style={{ background: `linear-gradient(to right,var(--primary) ${((localRate - 15) / 85) * 100}%,var(--line) ${((localRate - 15) / 85) * 100}%)` }} /><div><span>$15/hr</span><span>$100/hr</span></div></div>
        <p className="savings-disclosure">{copy[8]}</p><ul className="savings-checks">{copy.slice(14).map(item => <li key={item}><Check size={15} />{item}</li>)}</ul>
      </div>
      <div className="savings-result"><div aria-live="polite" aria-atomic="true"><p className="eyebrow">{copy[9]}</p><h2>{money(monthlySavings)}</h2><p className="savings-annual">≈ {money(annualSavings)} per year</p><dl><div><dt>{copy[10]}</dt><dd>{money(localMonthlyCost)}/mo</dd></div><div><dt>{copy[11]}</dt><dd>{money(vvbridgeMonthlyCost)}/mo</dd></div></dl></div><div className="savings-actions"><button type="button" onClick={openCalendly}>{copy[13]}<ArrowRight size={16} /></button><button type="button" className="download" onClick={download}><Download size={15} />{copy[12]}</button></div></div>
    </div>
  </section>;
}
