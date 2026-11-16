import type { Metadata } from "next";
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";

export const metadata: Metadata = { title: "Project Coordination Specialist | Virtual Value Bridge", description: "Projects stall when no one is chasing the details. Get a dedicated project coordinator who keeps your boards up to date, follows up on every deliverable, coordinates your vendors, and flags blockers before they turn into missed deadlines." };

export default function Page() { return <ServiceDetail service={services["project-coordination"]} />; }
