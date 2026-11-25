import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/careers/administrative-assistant");
import CareerPageClient from "@/app/careers/administrative-assistant/CareerPageClient";
export default function Page() { return <><PageStructuredData path="/careers/administrative-assistant" />{<CareerPageClient />}</>; }
