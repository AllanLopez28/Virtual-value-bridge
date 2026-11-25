import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/services/customer-service");
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";


export default function Page() { return <><PageStructuredData path="/services/customer-service" />{<ServiceDetail service={services["customer-service"]} />}</>; }
