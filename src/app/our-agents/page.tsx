import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/our-agents");
import { AgentsDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";


export default function Page() {
  return <><PageStructuredData path="/our-agents" />{<main className=""><ReferenceSurface><AgentsDesign /></ReferenceSurface></main>}</>;
}
