import Link from "next/link";
import BookingButton from "@/components/redesign/BookingButton";
import ServiceDetail from "@/components/redesign/ServiceDetail";
import PageStructuredData from "@/components/seo/PageStructuredData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/services/remote-estimators");
const service = {
  title: "Remote Construction Estimator", name: "Example estimator profile", experience: "Construction support", image: "/estimating/681ca71001b1.jpg",
  description: "Keep estimates moving while your team focuses on active jobs. Virtual Value Bridge provides dedicated remote estimators and project-based takeoff support for U.S. contractors, working in your estimating software and business hours.",
  responsibilities: ["Material takeoffs from blueprints, aerial roof reports and field notes", "Organized line-item pricing using your pricing references and review process", "Bid preparation in your estimating software", "Vendor and material quote comparisons before you set the final price", "Plan markups, estimate documentation and proposal coordination", "CRM updates and follow-up on bid and proposal status"],
  tools: ["Xactimate", "Bluebeam Revu", "PlanSwift", "Procore", "AccuLynx", "Buildertrend", "Jobber", "Microsoft Excel"],
};
const models = [
  { title: "Dedicated remote estimator", description: "A specialist who learns your trade, tools, pricing references and workflow, supporting your ongoing estimating workload." },
  { title: "Project-based takeoff support", description: "Support for the plans and quantity takeoffs you need help with, scoped to your projects rather than an ongoing full-time role." },
];
const questions = [
  { title: "Who approves the final bid?", description: "You review the work and set final pricing and margins. The support covers takeoffs, plan markups, bid preparation and coordination within your process." },
  { title: "Which contractors can use this service?", description: "The estimating support is designed for U.S. contractors, including roofing, general construction, remodeling and specialty trades. Tell us about your projects so we can discuss the fit." },
  { title: "How do I request estimator profiles?", description: "Share your contact information, support model, contractor type and estimating software using the estimator matching form, or schedule a call with our team." },
];

export default function RemoteEstimatorsPage() {
  return <><PageStructuredData path="/services/remote-estimators" /><ServiceDetail service={service} /><section className="seo-content"><p className="eyebrow">TWO WAYS TO WORK TOGETHER</p><h2>Choose the support model that fits your workload.</h2><div className="seo-service-grid">{models.map(model => <article key={model.title}><h3>{model.title}</h3><p>{model.description}</p></article>)}</div><h2>What to prepare before your first conversation.</h2><p>Tell us your trade, estimating software, typical project types and the tasks you want help with. Describe the plans, roof reports or field notes you use and how your team reviews estimates. This helps us discuss the appropriate support model without assuming a scope or price before reviewing your needs.</p><p><Link href="/industries/construction">Explore construction back-office support</Link> if you also need help with project coordination, customer communication or billing.</p><h2>Questions about remote estimating support.</h2>{questions.map(question => <details key={question.title}><summary>{question.title}</summary><p>{question.description}</p></details>)}<div className="ag-cta"><Link className="ag-btn" href="/services/estimating-support">Request estimator profiles</Link><BookingButton className="ag-btn-o">Discuss your estimating workflow</BookingButton></div></section></>;
}
