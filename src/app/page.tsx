import type { Metadata } from "next";
import { HomeDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";

export const metadata: Metadata = { title: "Virtual Value Bridge | Where Virtual Meets Value", description: "Bilingual specialists who work U.S. hours and become part of your day-to-day team. Hand-picked for your industry, trained on your tools and backed by our on-site team in San Salvador." };

export default function Page() {
  return <main className=""><ReferenceSurface><HomeDesign /></ReferenceSurface></main>;
}
