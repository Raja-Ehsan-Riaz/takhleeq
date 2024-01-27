import ApplicationForm from "@/components/CareerApplicationPage/ApplicationForm";
import CareerHero from "@/components/CareersPage/CareerHero";
import SMicons from "@/components/FAQsPage/SMicons";


export default function CareerApplication() {
    return (
        <div>
            <CareerHero/>
            <ApplicationForm/>
            <SMicons/>
        </div>
    );
}
