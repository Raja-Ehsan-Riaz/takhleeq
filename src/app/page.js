import LandingPagehero from "@/components/LandingPage/LandingPageHero";
import ITservices from "@/components/LandingPage/ITservices";
import BusinessStartupPitch from "@/components/LandingPage/BusinessStartupPitch";

export default function Home() {
  return (
    <div>
      <LandingPagehero />
      <ITservices />
      <BusinessStartupPitch />
    </div>
  );
}
