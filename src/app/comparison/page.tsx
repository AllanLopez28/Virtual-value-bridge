import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/comparison");
import Comparison from "@/components/sections/Comparison";
export default function ComparisonPage() { return <><PageStructuredData path="/comparison" />{<main><Comparison /></main>}</>; }
