import type { Metadata } from "next";
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";

export const metadata: Metadata = { title: "Bookkeeping & Accounting Support Specialist | Virtual Value Bridge", description: "Clean books only happen when someone keeps up with them every week. Get a dedicated bookkeeping specialist who records your transactions, reconciles your accounts, chases your invoices, and closes your books on a fixed monthly schedule — so your numbers are always ready." };

export default function Page() { return <ServiceDetail service={services["bookkeeping-accounting"]} />; }
