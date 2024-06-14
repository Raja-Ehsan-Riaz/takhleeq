import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/Navbar";
import Quote from "@/components/LandingPage/Quote";
import ContactStrip from "@/components/ServicesPage/ContactStrip";
import Branding from "@/components/TDBRPage/Branding";
import NeuroMarketing from "@/components/TDBRPage/NeuroMarketing";
import TDBRHero from "@/components/TDBRPage/TDBRHero";


export default function TDBR() {
    return (
        <div>
            <TDBRHero/>
            <Branding/>
            <Quote/>
            <NeuroMarketing/>
            <ContactStrip/>
        </div>
    );
}
