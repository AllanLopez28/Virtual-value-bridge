import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/careers/bilingual-virtual-assistant");
import CareerPageClient from "@/app/careers/bilingual-virtual-assistant/CareerPageClient";
export default function Page() { return <><PageStructuredData path="/careers/bilingual-virtual-assistant" />{<CareerPageClient />}</>; }
