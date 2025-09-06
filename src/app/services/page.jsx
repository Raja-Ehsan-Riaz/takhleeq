import ServicesHero from "@/components/ServicesPage/ServicesHero";
import ServicesList from "@/components/ServicesPage/ServicesList";
import Solutions from "@/components/ServicesPage/Solutions";
import SolutionsVideo from "@/components/ServicesPage/SolutionsVideo";
import ContactStrip from "@/components/ServicesPage/ContactStrip";

export const metadata = {
  title: "Services",
  description: "Takhleeq excels in digital marketing with data-driven strategies, crafts intuitive high-performance websites in web development, and specializes in creating visually captivating UI/UX designs for enhanced user satisfaction. Our branding solutions deliver visually striking graphics that effectively communicate brand stories and leave a lasting impression on audiences.",
};

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesList upper/>
      <Solutions />
      <ServicesList />
      <ContactStrip />
    </div>
  );
};

export default Services;
