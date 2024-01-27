import ContactForm from "@/components/ContactusPage/ContactForm";
import ContactHero from "@/components/ContactusPage/ContactHero";
import LocationSection from "@/components/ContactusPage/LocationSection";


export default function ContactUs() {
    return (
        <div>
            <ContactHero/>
            <ContactForm/>
            <LocationSection/>
        </div>
    );
}
