import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/industries/construction");
import { ConstructionDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";


export default function Page() {
  return <><PageStructuredData path="/industries/construction" />{<main className=""><ReferenceSurface><ConstructionDesign /></ReferenceSurface></main>}</>;
}
