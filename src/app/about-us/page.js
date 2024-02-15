import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import BrandingRevolution from "@/components/AboutUs/BrandingRevolution";
import OurTeamContainer from "@/components/AboutUs/OurTeam/OurTeamContainer";
import SupportingClients from "@/components/AboutUs/SupportingClients";
import TopSection from "@/components/AboutUs/TopSection";
import Testimonials from "@/components/LandingPage/Testimonials";
import ContactStrip from "@/components/ServicesPage/ContactStrip";

export default function Aboutus() {
    return (
        <div>
            <AboutUsHero />
            <TopSection />
            <SupportingClients />
            <BrandingRevolution />
            <OurTeamContainer first team="Core Team" />
            <OurTeamContainer team="Project Managers" />
            <OurTeamContainer team="Web Developers" />
            <OurTeamContainer team="Industrial Designers" />
            <OurTeamContainer team="Media Team" />
            <OurTeamContainer team="Social Media Marketing Managers" />
            <OurTeamContainer team="Content Writers" />
            <OurTeamContainer team="UI/UX Designers" />
            <Testimonials />
            <ContactStrip />
        </div>
    );
}
