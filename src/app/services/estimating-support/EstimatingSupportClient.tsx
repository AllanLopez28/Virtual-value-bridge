"use client";

import Image from "next/image";
import { ArrowRight, Calendar, Check, CheckCircle, ClipboardList, FileSpreadsheet, Loader2, Phone, Quote, Ruler, Scale, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import styles from "@/app/services/estimating-support/estimating.module.css";

const leadFields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", placeholder: "Your full name" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email", placeholder: "you@company.com" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization", placeholder: "Your roofing or construction company" },
] as const;
const benefits = ["Free specialist replacement", "Month-to-month, no long-term contract", "Fluent English & Spanish, CST hours"];
const software = ["Xactimate", "Bluebeam Revu", "PlanSwift", "Procore", "AccuLynx", "Microsoft Excel"];
const supportOptions = [
  { title: "Dedicated Remote Estimator", description: "A full-time bilingual specialist working in your software and U.S. business hours." },
  { title: "Project-Based Takeoff Support", description: "Takeoff and estimating support scoped to the plans and bids you need help with." },
];
const services = [
  { icon: Ruler, title: "Full Material Takeoffs & Line-Item Pricing", description: "Accurate scope breakdowns from blueprints, aerial roof measurement reports, and field notes, so every bid starts from real quantities.", tags: ["Blueprints", "Aerial roof reports", "Field notes"] },
  { icon: FileSpreadsheet, title: "Software-Driven Bid Preparation", description: "Drafting estimates directly in Xactimate, Bluebeam, or your custom pricing spreadsheets." },
  { icon: Scale, title: "Vendor & Material Cost Comparisons", description: "Reconciling supplier quotes to protect profit margins before bids are sent to clients." },
  { icon: ClipboardList, title: "CRM & Proposal Management", description: "Keeping your CRM (AccuLynx, Jobber, Buildertrend) updated with estimate statuses and follow-ups." },
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

  const proofRef = useRef<HTMLElement>(null);
  const [nearProof, setNearProof] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setNearProof(entry.isIntersecting), { rootMargin: "0px 0px 120px 0px" });
    if (proofRef.current) observer.observe(proofRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <div className="bg-secondary px-5 py-3 text-center text-xs font-bold leading-snug text-white md:text-sm"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent" />Not the right fit? We replace your specialist free. Ask about it on your Discovery Call.</div>
      <section className={`${styles.hero} ${styles.lightGrid}`} aria-labelledby="estimating-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span />Roofing &amp; construction estimating</p>
          <h1 id="estimating-title">Stop turning<br className="lg:hidden" /> down bids.<br /><span className={styles.highlight}>Add capacity.</span></h1>
          <p className={styles.intro}>Dedicated remote estimators or project-based takeoffs for U.S. contractors, working in your software and your time zone.</p>
          <button type="button" className={styles.cta} onClick={(e) => e.preventDefault()}><Calendar size={19} />Book Your Free Discovery Call</button>
          <p className={styles.finePrint}>30 minutes · Founder-led · No sales pitch</p>
          <a className={styles.callLink} href="tel:+17186506786"><Phone size={17} />Call: +1 (718) 650-6786</a>
          <ul className={styles.benefits}>{benefits.map(benefit => <li key={benefit}><span><Check size={13} /></span>{benefit}</li>)}</ul>
        </div>
        <div className={styles.profile}>
          <span className={styles.available}><span />Available Now</span>
          <div className={styles.profileCircle} />
          <Image src="/constructpng.png" alt="Bilingual remote estimating specialist" fill sizes="(min-width: 1024px) 400px, (min-width: 768px) 360px, 100vw" className={styles.profileImage} preload />
          <div className={styles.profileCaption}><h2>{supportOptions[0].title}</h2><p>{supportOptions[0].description}</p></div>
        </div>
      </section>

      <section className={`${styles.trust} ${styles.panel}`} aria-labelledby="trust-title">
        <div className={styles.trustProof}>
          <h2 id="trust-title">Trusted by U.S. construction &amp; trade businesses</h2>
          <Image src="/artistictile-logo.PNG" alt="Artistic Tile" width={190} height={85} className={styles.clientLogo} />
          <div className={styles.rating}><span aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}</span><p>5.0 average across 50+ U.S. clients</p></div>
        </div>
        <div className={styles.software}><h3>Trained on the software you already use</h3><ul>{software.map(tool => <li key={tool}>{tool}</li>)}</ul></div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <h2 id="services-title" className={styles.sectionTitle}>Four Ways to Speed<br className="md:hidden" /> Up <span className={styles.highlight}>Your Bids</span></h2>
        <div className={styles.serviceGrid}>
          {services.map(({ icon: Icon, title, description, tags }) => (
            <article key={title} className={`${styles.serviceCard} ${styles.panel}`}>
              <span className={styles.iconBox}><Icon size={26} strokeWidth={1.8} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              {tags && (
                <ul className={styles.tags}>
                  {tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
        <div className={styles.workPhoto}>
          <Image
            src="/const-ej1.jpg"
            alt="Construction estimator comparing roof plans and material costs on two monitors"
            fill
            sizes="(min-width: 1024px) 1220px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className={`${styles.support} ${styles.blueGrid}`} aria-labelledby="support-title">
        <div className={styles.supportIntro}><p className={styles.greenEyebrow}><span />Our services</p><h2 id="support-title">Flexible Support<br />for Your Bid Volume</h2><p>Your estimator takes the takeoffs and pricing off your project team’s plate, so they stay focused on active jobs while bids go out faster.</p></div>
        <div className={styles.ways}><h2>Two ways to work with us</h2><div className={styles.optionGrid}>{supportOptions.map(({ title, description }, index) => <article key={title} className={styles.option}><span className={styles.optionNumber}>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div>
        <div className={styles.roi}><h2>The ROI angle</h2><div className={styles.roiGrid}><div><h3>U.S. in-house estimator</h3><strong>$75K – $95K+ / year</strong><p>Plus weeks of hiring and payroll tax</p></div><div><h3>Virtual Value Bridge</h3><strong>Up to 60% savings</strong><p>Hand-picked, pre-vetted, free replacement</p></div></div></div>
      </section>

      <section ref={proofRef} className={styles.proof} aria-label="Client testimonial and estimating inquiry">
        <figure className={styles.testimonial}><Quote className="text-accent" size={30} fill="currentColor" strokeWidth={0} /><blockquote>“Moving takeoffs and estimates out of the daily workload of our project team has been one of the best decisions we’ve made.”</blockquote><figcaption><span className={styles.avatar}>M</span><div><strong>Moses G.</strong><p>Project Manager, Artistic Tile &amp; Installation</p></div></figcaption></figure>
        <div id="estimating-inquiry" className={`${styles.formCard} ${styles.panel}`}>
          {status === "success" ? <div role="status" className={styles.success}><CheckCircle size={48} className="text-accent" /><h2>Thanks for reaching out!</h2><p>Your message has been sent successfully. A founder will follow up with you shortly.</p><button type="button" className={styles.cta} onClick={handleReset}>Send another message</button></div> : <form onSubmit={handleSubmit} aria-labelledby="estimating-form-title">
            <h2 id="estimating-form-title">Get estimating support</h2><p className={styles.formIntro}>Just 3 details. Founder-led follow-up, no sales pitch.</p>
            {leadFields.map(({ name, label, type, autoComplete, placeholder }) => <div className={styles.field} key={name}><label htmlFor={`estimating-${name}`}>{label}</label><input id={`estimating-${name}`} name={name} type={type} autoComplete={autoComplete} placeholder={placeholder} required maxLength={254} value={formData[name]} onChange={handleChange} /></div>)}
            <button type="submit" className={styles.cta} disabled={status === "loading"}>{status === "loading" ? <><Loader2 size={18} className="animate-spin" />Submitting...</> : <>Get estimating support <ArrowRight size={18} /></>}</button>
            {status === "error" && <p role="alert" className="mt-3 text-sm text-red-700">Something went wrong. Please try again or email us at <a href="mailto:info@vvbridge.net" className="underline">info@vvbridge.net</a>.</p>}
          </form>}
        </div>
      </section>
      <a className={`${styles.floatingCall} ${nearProof ? styles.floatingCallGreen : ""}`} href="tel:+17186506786" aria-label="Call Virtual Value Bridge"><Phone size={25} /></a>
    </main>
  );
}
