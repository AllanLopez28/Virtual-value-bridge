import type { Metadata } from "next";
import { ConstructionDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";

export const metadata: Metadata = { title: "Construction & Trades | Virtual Value Bridge", description: "Bilingual specialists who handle your estimates, calls, paperwork and billing, so your team can stay on the job site." };

export default function Page() {
  return <main className=""><ReferenceSurface><ConstructionDesign /></ReferenceSurface></main>;
}
