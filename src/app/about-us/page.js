import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import BrandingRevolution from "@/components/AboutUs/BrandingRevolution";
import OurTeamContainer from "@/components/AboutUs/OurTeam/OurTeamContainer";
import SupportingClients from "@/components/AboutUs/SupportingClients";
import TopSection from "@/components/AboutUs/TopSection";
import TestimonialContainer from "@/components/LandingPage/TestimonialContainer";
import ContactStrip from "@/components/ServicesPage/ContactStrip";

export const metadata = {
    title: "AboutUs",
    description: "takhleeq.io, a multinational branding company, is spearheading a tech-driven branding revolution. With a focus on neuromarketing, the company is developing innovative solutions to elevate businesses' marketing efforts and boost revenue. This project offers clients access to cutting-edge technology and expertise in neuromarketing research, enabling deeper connections with target audiences and the creation of highly effective campaigns.",
};

export default function Aboutus() {
    return (
        <div>
            <AboutUsHero />
            <TopSection />
            <SupportingClients />
            <BrandingRevolution />
            <OurTeamContainer first coreTeam />
            <OurTeamContainer />
            <TestimonialContainer />
            <ContactStrip />
        </div>
    );
}
