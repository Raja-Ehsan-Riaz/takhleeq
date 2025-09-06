import LandingPagehero from "@/components/LandingPage/LandingPageHero"
import ITservices from "@/components/LandingPage/ITservices"
import BusinessStartupPitch from "@/components/LandingPage/BusinessStartupPitch"
import Clients from "@/components/LandingPage/clients"
import WorkShowcase from "@/components/LandingPage/WorkShowcase"
import Quote from "@/components/LandingPage/Quote"
import NewsAndUpdates from "@/components/LandingPage/NewsAndUpdates"
import NeedConsultation from "@/components/LandingPage/NeedConsultation"
import TestimonialContainer from "@/components/LandingPage/TestimonialContainer"
import Popup from "@/components/LandingPage/PopUp"
import LogoSlider from "@/components/LandingPage/LogoSlider"
import Explore from "@/components/LandingPage/Explore"
import ServicesSection from "@/components/LandingPage/Services"
import CallUs from "@/components/LandingPage/CallUs"
import FAQ from "@/components/FAQsPage/FAQ"
import FAQalt from "@/components/FAQsPage/FAQalt"

export const metadata = {
	title: "Home | Takhleeq.ai",
	description:
		"Takhleeq.ai is not just another branding company in Pakistan. What sets us apart is our relentless focus on research and development. Our team is always exploring new trends, technologies, and insights to deliver innovative branding solutions that drive results. We offer the most comprehensive suite of services under one roof, including brand identity, creative design, web services, digital marketing, content creation, media services, and UI/UX design.",
}

export default function Home() {
	return (
		<div>
			<LandingPagehero />
			<LogoSlider />
			<Explore />
			<ServicesSection />
			<BusinessStartupPitch />
			{/* <Clients /> */}
			<WorkShowcase />
			{/* <Quote /> */}
			<TestimonialContainer />
			{/* <FAQ home /> */}
			<FAQalt />
			<NewsAndUpdates />
			<NeedConsultation />
			<Popup />
		</div>
	)
}
