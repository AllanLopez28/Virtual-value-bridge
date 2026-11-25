import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/careers");
import CareerPageClient from "@/app/careers/CareerPageClient";
export default function Page() { return <><PageStructuredData path="/careers" />{<CareerPageClient />}</>; }
