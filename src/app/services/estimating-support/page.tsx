import type { Metadata } from "next";
import EstimatingLanding from "@/app/services/estimating-support/EstimatingLanding";

export const metadata: Metadata = {
  title: "Hire a Remote Construction Estimator | Virtual Value Bridge",
  description: "Dedicated remote estimators and project-based takeoff support for U.S. contractors, working in your software and your time zone. Free replacement, no long-term contract.",
  robots: { index: false, follow: true },
};

export default function EstimatingSupportPage() {
  return <EstimatingLanding />;
}
