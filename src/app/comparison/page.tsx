import Comparison from "@/components/sections/Comparison";

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#0B132B] mb-12">
          Local Hires vs. VVBridge Specialists
        </h1>
        <Comparison />
      </div>
    </main>
  );
}
