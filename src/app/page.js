import LandingPagehero from "@/components/LandingPage/LandingPageHero";
import ITservices from "@/components/LandingPage/ITservices";
import BusinessStartupPitch from "@/components/LandingPage/BusinessStartupPitch";
import WorkShowcase from "@/components/LandingPage/WorkShowcase";
import Testimonial from "@/components/LandingPage/Testimonial";

export default function Home() {
  return (
    <div>
      <LandingPagehero />
      <ITservices />
      <BusinessStartupPitch />
      <WorkShowcase />
      <Testimonial />
    </div>
  );
}
