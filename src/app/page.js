import LandingPagehero from "@/components/LandingPage/LandingPageHero";
import ITservices from "@/components/LandingPage/ITservices";
import BusinessStartupPitch from "@/components/LandingPage/BusinessStartupPitch";
import Clients from "@/components/LandingPage/clients";
import WorkShowcase from "@/components/LandingPage/WorkShowcase";
import Quote from "@/components/LandingPage/Quote";
import NewsAndUpdates from "@/components/LandingPage/NewsAndUpdates";
import Testimonials from "@/components/LandingPage/Testimonials";
import NeedConsultation from "@/components/LandingPage/NeedConsultation";

export default function Home() {
  return (
    <div>
      <LandingPagehero />
      <ITservices />
      <BusinessStartupPitch />
      <Clients />
      <WorkShowcase />
      <Quote />
      <NewsAndUpdates />
      <Testimonials />
      <NeedConsultation />
    </div>
  );
}
