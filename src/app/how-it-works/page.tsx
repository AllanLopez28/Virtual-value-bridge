import type { Metadata } from "next";
import { ProcessDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";

export const metadata: Metadata = { title: "How It Works | Virtual Value Bridge", description: "Tell us what you need, meet your specialist, and watch your business run smoother with Virtual Value Bridge." };

export default function Page() {
  return <main className="standalone-process"><h1 className="sr-only">How it works</h1><ReferenceSurface><ProcessDesign /></ReferenceSurface></main>;
}
