import SMicons from "@/components/FAQsPage/SMicons"
import Form from "@/components/PricingFormPage/PricingForm"
import PricingHero from "@/components/PricingFormPage/PricingHero"


function PricingForm() {
    return (
        <div>
            <PricingHero />
            <Form/>
            <SMicons />
        </div>
    )
}

export default PricingForm