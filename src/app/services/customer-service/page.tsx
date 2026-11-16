import type { Metadata } from "next";
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";

export const metadata: Metadata = { title: "Customer Service Specialist | Virtual Value Bridge", description: "Stop letting calls, emails, and chats pile up. Get a dedicated customer service specialist who answers your customers, resolves issues, and keeps every request moving — so nothing gets dropped." };

export default function Page() { return <ServiceDetail service={services["customer-service"]} />; }
