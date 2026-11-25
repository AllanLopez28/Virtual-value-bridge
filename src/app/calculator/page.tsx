import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/calculator");
import SavingsCalculator from "@/components/sections/SavingsCalculator";
export default function CalculatorPage() { return <><PageStructuredData path="/calculator" />{<main><SavingsCalculator /></main>}</>; }
