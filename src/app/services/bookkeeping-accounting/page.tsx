import type { Metadata } from "next";
import { AccountingDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping | Virtual Value Bridge",
  description: "Bilingual bookkeeping specialists who record transactions, reconcile accounts, chase invoices and close your books on a fixed monthly schedule.",
};

export default function Page() {
  return <main className=""><ReferenceSurface><AccountingDesign /></ReferenceSurface></main>;
}
