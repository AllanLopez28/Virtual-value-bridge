import HowItWorksSection from "@/components/sections/HowItWorksSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Virtual Value Bridge",
  description: "A simple, direct process for bringing a Virtual Value Bridge specialist into your business.",
};

export default function HowItWorksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HowItWorksSection />
    </main>
  );
}
