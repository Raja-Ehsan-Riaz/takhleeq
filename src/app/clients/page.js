import ClientsContainer from "@/components/ClientsPage/ClientSection/ClientsContainer";
import ClientsHero from "@/components/ClientsPage/ClientsHero";
import Offer from "@/components/ClientsPage/Offer";
import OtherClients from "@/components/ClientsPage/OtherClients";
import ContactStrip from "@/components/ServicesPage/ContactStrip";

export const metadata = {
    title: "Clients",
    description: "Takhleeq excels in digital marketing with data-driven strategies, crafts intuitive high-performance websites in web development, and specializes in creating visually captivating UI/UX designs for enhanced user satisfaction. Our branding solutions deliver visually striking graphics that effectively communicate brand stories and leave a lasting impression on audiences.",
  };

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
