import ApplicationForm from "@/components/CareerApplicationPage/ApplicationForm"
import CareerHero from "@/components/CareersPage/CareerHero"
import SMicons from "@/components/FAQsPage/SMicons"

export default function CareerApplication({ params }) {
	const career = decodeURIComponent(params.career)
	return (
		<div>
			<ApplicationForm career={career} />
		</div>
	)
}
