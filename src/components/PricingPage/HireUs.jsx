import React from "react"
import HireCard from "./HireCard"
import Link from "next/link"

const HireUs = () => {
	const data = [
		{
			title: "Hire Our Team",
			text: "Elevate your brand with cutting-edge design, strategic branding, and unparalleled creative solutions.",
		},
		{
			title: "Rebuild Your Brand",
			text: "We will converge visionary design and strategic re-branding to transform your identity into a compelling and memorable narrative",
		},
	]

	return (
		<div className="py-16 md:py-28 px-[5%]">
			<div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-start">
				<h2 className="uppercase text-4xl md:text-5xl text-left font-bold text-black">
					How much will YOUR <br /> PROJECT cost?
				</h2>
				<Link href="/pricing-form">
					<button className="px-12 py-4  focus:outline-none   relative border bg-white border-black text-black cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
						<div className="relative z-20">Hire Us</div>
					</button>
				</Link>
			</div>

			<div className=" text-lg mt-8">
				Choose one of the options below to get an accurate price estimation for
				your project:
			</div>
			<div className="flex flex-row justify-evenly items-center flex-wrap">
				<HireCard
					src="/Icons&Symbols/pricing/hire.png"
					heading={data[0].title}
					text={data[0].text}
				/>
				<HireCard
					src="/Icons&Symbols/pricing/branding.png"
					heading={data[1].title}
					text={data[1].text}
				/>
			</div>
		</div>
	)
}

export default HireUs
