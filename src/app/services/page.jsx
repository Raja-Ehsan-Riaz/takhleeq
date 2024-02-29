import ServicesHero from "@/components/ServicesPage/ServicesHero";
import ServicesList from "@/components/ServicesPage/ServicesList";
import Solutions from "@/components/ServicesPage/Solutions";
import SolutionsVideo from "@/components/ServicesPage/SolutionsVideo";
import ContactStrip from "@/components/ServicesPage/ContactStrip";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesList upper/>
      <Solutions />
      <ServicesList />
      <SolutionsVideo />
      <ContactStrip />
    </div>
  );
};

export default Services;
