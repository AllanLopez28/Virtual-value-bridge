import type { Metadata } from "next";
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";

export const metadata: Metadata = { title: "Sales & Lead Generation Specialist | Virtual Value Bridge", description: "Pipeline doesn't fill itself — it takes steady outreach every single day. Get a dedicated sales development specialist who builds your prospect lists, runs your outreach, qualifies leads, and books discovery calls straight into your team's calendar." };

export default function Page() { return <ServiceDetail service={services["sales-lead-generation"]} />; }
