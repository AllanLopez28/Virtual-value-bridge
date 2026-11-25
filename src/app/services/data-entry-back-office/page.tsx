import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/services/data-entry-back-office");
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";


export default function Page() { return <><PageStructuredData path="/services/data-entry-back-office" />{<ServiceDetail service={services["data-entry-back-office"]} />}</>; }
