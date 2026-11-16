import type { Metadata } from "next";
import SavingsCalculator from "@/components/sections/SavingsCalculator";
export const metadata: Metadata = { title: "Savings Calculator | Virtual Value Bridge", description: "Estimate monthly and annual savings with a dedicated bilingual Virtual Value Bridge specialist." };
export default function CalculatorPage() { return <main><SavingsCalculator /></main>; }
