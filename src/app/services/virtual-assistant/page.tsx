import type { Metadata } from "next";
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";

export const metadata: Metadata = {
  title: "Hire a Virtual Assistant | VVBridge",
  description: "Hire a dedicated Virtual Assistant to handle your administrative tasks, inboxes, scheduling, and document prep.",
};

export default function Page() { return <ServiceDetail service={services["virtual-assistant"]} />; }
