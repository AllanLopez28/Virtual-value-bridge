import type { Metadata } from "next";
import TeamProfiles from "@/components/sections/TeamProfiles";
export const metadata: Metadata = { title: "Our Team | Virtual Value Bridge", description: "Meet Dora Belloso, Bryan Rivas and Ana Rodríguez — the people behind Virtual Value Bridge." };
export default function TeamPage() { return <main><TeamProfiles /></main>; }
