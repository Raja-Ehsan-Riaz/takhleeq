
import ServiceContainer from "@/components/ServicePage/ServiceContainer";
import ServiceHero from "@/components/ServicePage/ServiceHero";
import services from "../../../utils/services.json";

function findServiceByTitle(title) {
    return services.find(service => service.title === title);
}

export default function Service({ params }) {
    const service = decodeURIComponent(params.slug) ? findServiceByTitle(decodeURIComponent(params.slug).replace(/&/g, "/")) : null;
    return (
        <div>
            <ServiceHero service={service.title} />
            <ServiceContainer service={service} />
        </div>
    );
}
