import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/services/property-management");
import { PropertyManagementDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";


export default function Page() {
  return <><PageStructuredData path="/services/property-management" />{<main className=""><ReferenceSurface><PropertyManagementDesign /></ReferenceSurface></main>}</>;
}
