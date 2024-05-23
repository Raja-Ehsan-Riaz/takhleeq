import ClientHero from "@/components/ClientPage/ClientHero";
import Goals from "@/components/ClientPage/Goals";
import Outcomes from "@/components/ClientPage/Outcomes";
import OverView from "@/components/ClientPage/OverView";
import ServicesProvided from "@/components/ClientPage/ServicesProvided";
import clients from "../../../utils/clientsdetails.json";
import Portfolio from "@/components/ClientPage/Portfolio";

function findClientByTitle(title) {
    return clients.find(client => client.name === title);
}


export default function Client({ params }) {
    const client = decodeURIComponent(params.slug) ? findClientByTitle(decodeURIComponent(params.slug.replace(/#/g, "/"))) : null;
    return (
        <div>
            <ClientHero title={client.name} images={client.cover} />
            <OverView description={client.description} image={client.icon} link={client.link} />
            {/* <ServicesProvided /> */}
            <Goals goals={client.goals} />
            <Outcomes outcomes={client.outcomes} />
            {client.portfolio.length != 0 ?
                <Portfolio title={client.name} portfolio={client.portfolio} bg={client.bg} /> : <></>}
        </div>
    );
}
