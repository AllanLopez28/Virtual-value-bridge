import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/careers/accounting-specialist");
import CareerPageClient from "@/app/careers/accounting-specialist/CareerPageClient";
export default function Page() { return <><PageStructuredData path="/careers/accounting-specialist" />{<CareerPageClient />}</>; }
