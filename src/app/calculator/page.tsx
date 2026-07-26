import SavingsCalculator from "@/components/sections/SavingsCalculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#0B132B] mb-12">
          Calculate Your Monthly Savings
        </h1>
        <SavingsCalculator />
      </div>
    </main>
  );
}
