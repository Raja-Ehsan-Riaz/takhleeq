import CareerHero from "@/components/CareersPage/CareerHero";
import CareersContainer from "@/components/CareersPage/CareersContainer";
import TopSection from "@/components/CareersPage/TopSection";

export const metadata = {
    title: "Careers",
    description: "Our company seeks passionate and innovative individuals with diverse skills and a keen understanding of global market trends. Our hiring process, including interviews and skills assessments, is designed to identify candidates who can contribute to our dynamic and culturally diverse team, driving excellence in branding on a global scale.    ",
  };


export default function Careers() {
    return (
        <div>
            <CareerHero />
            <TopSection/>
            <CareersContainer/>
        </div>
    );
}
