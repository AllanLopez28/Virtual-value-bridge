import { ServicesDesign } from "@/components/redesign/ReferenceDesign";
import ReferenceSurface from "@/components/redesign/ReferenceSurface";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
import ServiceCatalog from "@/components/seo/ServiceCatalog";

export const metadata = pageMetadata("/services");
export default function Page() { return <><PageStructuredData path="/services" /><main><div className="simple-page-title"><p className="eyebrow">VIRTUAL VALUE BRIDGE SERVICES</p><h1>Bilingual nearshore staffing and outsourcing services.</h1><p>Find support for your business operations, from construction estimating and property management to customer service and administration.</p></div><ReferenceSurface><ServicesDesign /></ReferenceSurface><ServiceCatalog /></main></>; }
