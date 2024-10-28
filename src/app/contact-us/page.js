import ContactForm from "@/components/ContactusPage/ContactForm";
import ContactHero from "@/components/ContactusPage/ContactHero";
import LocationSection from "@/components/ContactusPage/LocationSection";

export const metadata = {
    title: "ContactUs",
    description: "Takhleeq excels in digital marketing with data-driven strategies, crafts intuitive high-performance websites in web development, and specializes in creating visually captivating UI/UX designs for enhanced user satisfaction. Our branding solutions deliver visually striking graphics that effectively communicate brand stories and leave a lasting impression on audiences.",
};
export default function ContactUs() {
    return (
        <div>
            <ContactHero/>
            <ContactForm/>
            <LocationSection/>
        </div>
    );
}
