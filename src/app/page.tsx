import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/");
import { HomeDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";


export default function Page() {
  return <><PageStructuredData path="/" />{<main className=""><ReferenceSurface><HomeDesign /></ReferenceSurface></main>}</>;
}
