import BookingButton from "@/components/redesign/BookingButton";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const people = [
  { name: "Dora Belloso", role: "Auditor", image: "/dora.png", href: "/team/dora-belloso", experience: "~3 yrs experience", tags: ["AUDITING", "QA", "CX"], description: "Dora Elizabeth Belloso is an Auditor at Virtual Value Bridge, where she’s spent close to three years working across every area of her account with a detail-oriented eye." },
  { name: "Bryan Rivas", role: "Back-Office Operations Lead", image: "/carlos.png", href: "/team/bryan-rivas", experience: "Nearly three years with Virtual Value Bridge", tags: ["OPERATIONS", "LEADERSHIP"], description: "Bryan has spent nearly three years with Virtual Value Bridge, growing into department lead. He takes ownership of daily operations — keeping things running smoothly and mentoring newer specialists." },
  { name: "Ana Rodríguez", role: "New Physician Trainer", image: "/ana.png", href: "/team/ana-rodriguez", experience: "Training · Clinical · QA", tags: ["TRAINING", "CLINICAL", "QA"], description: "Ana is a dedicated medical professional who ensures the highest standards of patient care. She mentors incoming professionals, helping them build skills, confidence, and deliver quality service." },
];
const copy = ["MEET THE TEAM", "The people who", "run your back office.", "Hand-picked specialists, trained on your stack and supported by founders. Same time zone. Native English. Real ownership.", "Three profiles. One mission.", "Specialized in Property Management ops", "View full profile", "Ready to meet your future specialist?", "We don’t just provide staff; we provide peace of mind. Let us match you with the right talent in 48 hours.", "Talk to a founder", "View pricing"];

export default function TeamProfiles() {
  return <>
    <section className="team-intro simple-page-title"><p className="eyebrow">{copy[0]}</p><h1>{copy[1]}<br /><em>{copy[2]}</em></h1><p>{copy[3]}</p></section>
    <section className="real-team"><div className="section-head"><h2>{copy[4]}</h2><p>{copy[5]}</p></div><div className="real-team-grid">{people.map(person => <article className="spec-card" key={person.href}>
      <div className="agent-photo spec-photo"><Image src={person.image} alt={person.name} width={700} height={800} sizes="(max-width: 680px) 100vw, 33vw" /><span className="spec-exp">{person.experience}</span></div>
      <div className="spec-head"><h3>{person.name}</h3><p>{person.role}</p></div>
      <div className="real-team-body"><p>{person.description}</p><div className="ag-chips">{person.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link className="ag-btn" href={person.href}>{copy[6]}<ArrowRight size={15} /></Link></div>
    </article>)}</div></section>
    <section className="ag-final"><div><h2>{copy[7]}</h2><p>{copy[8]}</p></div><div className="ag-cta"><BookingButton className="ag-btn big">{copy[9]}<ArrowRight size={16} /></BookingButton><Link className="ag-btn-o big" href="/calculator">{copy[10]}</Link></div></section>
  </>;
}
