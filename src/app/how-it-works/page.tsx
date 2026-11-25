import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/how-it-works");
import { ProcessDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";


export default function Page() {
  return <><PageStructuredData path="/how-it-works" />{<main className="standalone-process"><h1 className="sr-only">How it works</h1><ReferenceSurface><ProcessDesign /></ReferenceSurface></main>}</>;
}
