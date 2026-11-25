import BookingButton from "@/components/redesign/BookingButton";
import Image from "next/image";
import Link from "next/link";
import { organicServicePaths } from "@/components/seo/ServiceCatalog";
import { seoPages } from "@/lib/seo";
import { ArrowRight, Check, Layers3 } from "lucide-react";

type Service = { title: string; description: string; image: string; name: string; experience: string; responsibilities: string[]; tools: string[] };
const copy = ["Home", "Services", "DEDICATED BILINGUAL SUPPORT", "Meet your", "Get matched", "See how it works", "Free replacement if not a fit. No long-term contracts.", "DAY-TO-DAY RESPONSIBILITIES", "What your specialist handles.", "MEET YOUR SPECIALIST", "TOOLS THEY KNOW", "READY WHEN YOU ARE", "A specialist who fits the way you work.", "Book a call"];

export default function ServiceDetail({ service }: { service: Service }) {
  return <main className="service-detail">
    <section className="intro service-intro">
      <div className="intro-copy">
        <p className="eyebrow">{copy[2]}</p>
        <h1>{copy[3]}<br /><em>{service.title}.</em></h1>
        <p className="intro-text">{service.description}</p>
        <div className="ag-cta"><a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog">{copy[4]}<ArrowRight size={16} /></a><Link className="ag-btn-o" href="/how-it-works">{copy[5]}</Link></div>
        <p className="service-note">{copy[6]}</p>
      </div>
      <div className="intro-visual"><Image src={service.image} alt={service.title} width={800} height={900} sizes="(max-width: 680px) 100vw, 50vw" preload /><div className="lime-shape" /><div className="visual-caption"><b>{service.name}</b><span>{service.experience} · English + Spanish</span></div></div>
    </section>
    <section className="service-work">
      <div><p className="eyebrow">{copy[7]}</p><h2>{copy[8]}</h2><ul className="service-responsibilities">{service.responsibilities.map(item => <li key={item}><span><Check size={16} /></span>{item}</li>)}</ul></div>
      <aside><div className="service-profile"><p className="eyebrow">{copy[9]}</p><div><Image src={service.image} alt={service.name} width={72} height={72} /><div><h3>{service.name}</h3><p>{service.title}</p><span>{service.experience}</span></div></div></div><p className="eyebrow">{copy[10]}</p><div className="service-tools">{service.tools.map(tool => <span key={tool}><Layers3 size={15} />{tool}</span>)}</div></aside>
    </section>
    <section className="seo-content"><h2>Explore related nearshore support.</h2><p>Build support around your workflow. Explore other specialist roles and compare staffing options before discussing your needs with our team.</p><nav className="seo-related" aria-label="Related services">{organicServicePaths.map(path => <Link key={path} href={path}>{seoPages[path].label}</Link>)}<Link href="/comparison">Compare nearshore and offshore support</Link><Link href="/calculator">Estimate staffing savings</Link></nav></section>
    <section className="bottom-cta"><div><p className="eyebrow">{copy[11]}</p><h2>{copy[12]}</h2></div><BookingButton className="primary-btn">{copy[13]}<ArrowRight size={16} /></BookingButton></section>
  </main>;
}
