import type { Metadata } from "next";
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";

export const metadata: Metadata = { title: "Marketing Support Specialist | Virtual Value Bridge", description: "Your marketing plan only works if someone executes it every week. Get a dedicated marketing support specialist who builds your posts, sends your campaigns, updates your site, and reports on what worked." };

export default function Page() { return <ServiceDetail service={services["marketing-support"]} />; }
