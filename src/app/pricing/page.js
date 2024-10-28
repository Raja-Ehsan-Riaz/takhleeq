import Quote from "@/components/LandingPage/Quote";
import TestimonialContainer from "@/components/LandingPage/TestimonialContainer";
import HireUs from "@/components/PricingPage/HireUs";
import PricingPageHero from "@/components/PricingPage/PricingPageHero";
import ContactStrip from "@/components/ServicesPage/ContactStrip";

export const metadata = {
    title: "Pricing",
    description: "Hire the team at takhleeq.io, to elevate your brand with cutting-edge design, strategic branding, and unparalleled creative solutions.",
};

export default function Pricing() {
    return (
        <div>
            <PricingPageHero />
            <HireUs />
            <Quote />
            <TestimonialContainer />
            <ContactStrip />
        </div>
    );
}
