import Image from "next/image"
const PricingPageHero = () => {
	return (
		<div className="flex h-[70vh] relative overflow-hidden bg-[#7936b7]/50 bg-gradient-to-r p-2 from-[#1312149E]/50 via-[#1312149E]/50 to-[#1312149E]/50 ">
			<Image
				fill={true}
				style={{ objectFit: "cover" }}
				src="/Images/Heros/pricingform.jpg"
				priority
				className=" absolute -z-10"
			/>
			<h1 className="text-white pop text-center mx-auto text-4xl md:text-5xl uppercase font-bold mb-10 mt-auto">
				How to Customize
				<br />
				Your Package
			</h1>
		</div>
	)
}

export default PricingPageHero
