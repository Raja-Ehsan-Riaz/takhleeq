import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import BrandingRevolution from "@/components/AboutUs/BrandingRevolution";
import OurTeamContainer from "@/components/AboutUs/OurTeam/OurTeamContainer";
import SupportingClients from "@/components/AboutUs/SupportingClients";
import TopSection from "@/components/AboutUs/TopSection";
import TestimonialContainer from "@/components/LandingPage/TestimonialContainer";
import ContactStrip from "@/components/ServicesPage/ContactStrip";

export default function Aboutus() {
    return (
        <div>
            <AboutUsHero />
            <TopSection />
            <SupportingClients />
            <BrandingRevolution />
            <OurTeamContainer first coreTeam />
            <OurTeamContainer />
            <TestimonialContainer/>
            <ContactStrip />
        </div>
    );
}
