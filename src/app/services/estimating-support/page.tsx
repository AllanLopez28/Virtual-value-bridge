import { Metadata } from "next";
import EstimatingSupportClient from "./EstimatingSupportClient";

export const metadata: Metadata = {
  title: "Estimating & Bid Support | Virtual Value Bridge",
  description: "Scale your bid volume without inflating payroll. Get full-time, bilingual estimators who deliver accurate material takeoffs in your software and time zone.",
};

export default function EstimatingSupportPage() {
  return <EstimatingSupportClient />;
}
