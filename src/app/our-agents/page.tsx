import type { Metadata } from "next";
import { AgentsDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";

export const metadata: Metadata = { title: "Our Agents | Virtual Value Bridge", description: "Meet bilingual nearshore specialists, explore their tools and experience, and find the profile that fits your role." };

export default function Page() {
  return <main className=""><ReferenceSurface><AgentsDesign /></ReferenceSurface></main>;
}
