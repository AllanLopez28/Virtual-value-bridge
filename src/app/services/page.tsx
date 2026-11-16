import type { Metadata } from "next";
import { ServicesDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";

export const metadata: Metadata = { title: "Services | Virtual Value Bridge", description: "Explore bilingual nearshore support for construction, property, finance, marketing and business operations." };

export default function Page() {
  return <main className="standalone-services"><h1 className="sr-only">Our services</h1><ReferenceSurface><ServicesDesign /></ReferenceSurface></main>;
}
