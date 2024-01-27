import Quote from "@/components/LandingPage/Quote";
import Testimonials from "@/components/LandingPage/Testimonials";
import PricingHero from "@/components/PricingFormPage/PricingHero";
import HireUs from "@/components/PricingPage/HireUs";
import ContactStrip from "@/components/ServicesPage/ContactStrip";


export default function Pricing() {
    return (
        <div>
            <PricingHero />
            <HireUs />
            <Quote/>
            <Testimonials/>
            <ContactStrip/>
        </div>
    );
}
