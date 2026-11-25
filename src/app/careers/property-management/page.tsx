import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/careers/property-management");
import CareerPageClient from "@/app/careers/property-management/CareerPageClient";
export default function Page() { return <><PageStructuredData path="/careers/property-management" />{<CareerPageClient />}</>; }
