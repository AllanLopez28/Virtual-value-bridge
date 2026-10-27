import { Metadata } from "next";
import EstimatingSupportClient from "./EstimatingSupportClient";

export const metadata: Metadata = {
  title: "Estimating & Bid Support | Virtual Value Bridge",
  description: "Dedicated remote estimators and project-based takeoff support for U.S. roofing and construction contractors, working in your software and time zone.",
};

export default function EstimatingSupportPage() {
  return <EstimatingSupportClient />;
}
