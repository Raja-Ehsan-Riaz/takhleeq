import ClientsContainer from "@/components/ClientsPage/ClientSection/ClientsContainer";
import ClientsHero from "@/components/ClientsPage/ClientsHero";
import Offer from "@/components/ClientsPage/Offer";
import OtherClients from "@/components/ClientsPage/OtherClients";
import ContactStrip from "@/components/ServicesPage/ContactStrip";


export default function Clients() {
    return (
        <div>
            <ClientsHero/>
            <Offer/>
            <ClientsContainer/>
            <OtherClients/>
            <ContactStrip/>
        </div>
    );
}
