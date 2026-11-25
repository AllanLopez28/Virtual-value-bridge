import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/team");
import TeamProfiles from "@/components/sections/TeamProfiles";
export default function TeamPage() { return <><PageStructuredData path="/team" />{<main><TeamProfiles /></main>}</>; }
