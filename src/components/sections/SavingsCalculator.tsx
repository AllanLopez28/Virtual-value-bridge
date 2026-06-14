"use client";

import { useState } from "react";

export default function SavingsCalculator() {
  const [savings, setSavings] = useState(0);

  return (
    <section id="calculator" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-white">
      <div className="container px-4 md:px-6">
        <h2>Savings Calculator</h2>
      </div>
    </section>
  );
}
