import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/services/virtual-assistant");
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";


export default function Page() { return <><PageStructuredData path="/services/virtual-assistant" />{<ServiceDetail service={services["virtual-assistant"]} />}</>; }
