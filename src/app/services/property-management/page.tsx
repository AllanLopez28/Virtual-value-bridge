import type { Metadata } from "next";
import { PropertyManagementDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";

export const metadata: Metadata = {
  title: "Property Management | Virtual Value Bridge",
  description: "Bilingual specialists who handle your tenant calls, maintenance tickets, rent follow-ups and owner reports, so your team can focus on growing the portfolio.",
};

export default function Page() {
  return <main className=""><ReferenceSurface><PropertyManagementDesign /></ReferenceSurface></main>;
}
