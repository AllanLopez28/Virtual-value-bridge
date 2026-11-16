import type { Metadata } from "next";
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";

export const metadata: Metadata = {
  title: "Hire a Property Manager | VVBridge",
  description: "Hire a dedicated Property Manager to handle tenant comms, leasing, maintenance, and owner reports.",
};

export default function Page() { return <ServiceDetail service={services["property-management"]} />; }
