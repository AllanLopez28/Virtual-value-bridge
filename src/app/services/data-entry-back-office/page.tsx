import type { Metadata } from "next";
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";

export const metadata: Metadata = { title: "Data Entry & Back- Office Specialist | Virtual Value Bridge", description: "Back-office work piles up fast when no one owns it. Get a dedicated data & back-office specialist who keeps your records clean, processes your orders, runs the research, and turns raw data into reports you can actually use — accurately and on a schedule you can count on." };

export default function Page() { return <ServiceDetail service={services["data-entry-back-office"]} />; }
