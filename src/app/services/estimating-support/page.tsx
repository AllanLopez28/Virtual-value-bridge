import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/services/estimating-support");
import EstimatingLanding from "@/app/services/estimating-support/EstimatingLanding";


export default function EstimatingSupportPage() {
  return <><PageStructuredData path="/services/estimating-support" />{<EstimatingLanding />}</>;
}
