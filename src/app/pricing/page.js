import Quote from "@/components/LandingPage/Quote";
import TestimonialContainer from "@/components/LandingPage/TestimonialContainer";
import HireUs from "@/components/PricingPage/HireUs";
import PricingPageHero from "@/components/PricingPage/PricingPageHero";
import ContactStrip from "@/components/ServicesPage/ContactStrip";


export default function Pricing() {
    return (
        <div>
            <PricingPageHero />
            <HireUs />
            <Quote/>
            <TestimonialContainer/>
            <ContactStrip/>
        </div>
    );
}
