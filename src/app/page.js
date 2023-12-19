import LandingPagehero from "@/components/LandingPage/LandingPageHero";
import ITservices from "@/components/LandingPage/ITservices";
import BusinessStartupPitch from "@/components/LandingPage/BusinessStartupPitch";
import WorkShowcase from "@/components/LandingPage/WorkShowcase";
import Quote from "@/components/LandingPage/Quote";
import NewsAndUpdates from "@/components/LandingPage/NewsAndUpdates";

export default function Home() {
  return (
    <div>
      <LandingPagehero />
      <ITservices />
      <BusinessStartupPitch />
      <WorkShowcase />
      <Quote />
      <NewsAndUpdates />
    </div>
  );
}
