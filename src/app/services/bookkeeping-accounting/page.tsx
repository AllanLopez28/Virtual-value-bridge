import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/services/bookkeeping-accounting");
import { AccountingDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";


export default function Page() {
  return <><PageStructuredData path="/services/bookkeeping-accounting" />{<main className=""><ReferenceSurface><AccountingDesign /></ReferenceSurface></main>}</>;
}
