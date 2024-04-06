import Quote from "@/components/LandingPage/Quote";
import TestimonialContainer from "@/components/LandingPage/TestimonialContainer";
import PricingHero from "@/components/PricingFormPage/PricingHero";
import HireUs from "@/components/PricingPage/HireUs";
import ContactStrip from "@/components/ServicesPage/ContactStrip";


export default function Pricing() {
    return (
        <div>
            <PricingHero />
            <HireUs />
            <Quote/>
            <TestimonialContainer/>
            <ContactStrip/>
        </div>
    );
}
