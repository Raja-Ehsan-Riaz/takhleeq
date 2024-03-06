import ClientsContainer from "@/components/ClientsPage/ClientSection/ClientsContainer";
import ClientsHero from "@/components/ClientsPage/ClientsHero";
import Offer from "@/components/ClientsPage/Offer";


export default function Clients() {
    return (
        <div>
            <ClientsHero/>
            <Offer/>
            <ClientsContainer/>
        </div>
    );
}
