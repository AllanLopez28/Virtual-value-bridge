import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/seo/PageStructuredData";
export const metadata = pageMetadata("/services/project-coordination");
import ServiceDetail from "@/components/redesign/ServiceDetail";
import services from "@/components/redesign/services.json";


export default function Page() { return <><PageStructuredData path="/services/project-coordination" />{<ServiceDetail service={services["project-coordination"]} />}</>; }
