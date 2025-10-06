"use client"

import { useState } from "react"

import Value1 from "../../../public/Icons&Symbols/aboutus/birth.png"
import Value2 from "../../../public/Icons&Symbols/aboutus/mission.png"
import Value3 from "../../../public/Icons&Symbols/aboutus/values.png"
import Value4 from "../../../public/Icons&Symbols/aboutus/vision.png"
import Image from "next/image"

const TopSection = () => {
	// State to manage the index of the selected item
	const [selectedItemIndex, setSelectedItemIndex] = useState(0)

	// Array of items
	const items = [
		{
			title: "Takhleeq is Born",
			description:
				"takhleeq.ai is born out of a passion for creativity and innovation, with a vision to redefine the branding landscape. Rooted in a culture of excellence and driven by the desire to make a difference, takhleeq.ai emerges as a beacon of ingenuity, offering unparalleled solutions that leave a lasting impact.        ",
		},
		{
			title: "Mission ",
			description:
				"Our mission is to provide our clients with innovative, creative, and effective branding solutions that deliver measurable results and help them succeed in today's digital age. We strive to deliver exceptional service and build long-term relationships with our clients, based on trust, collaboration, and mutual success.",
		},
		{
			title: "Vision",
			description:
				"Our vision is to become a leading name in the branding and digital services industry, known for our unique approach to problem-solving and our ability to deliver high-quality work that exceeds our clients' expectations. We aspire to be a company that inspires and empowers our clients to achieve their goals and stand out in their respective industries.",
		},
		{
			title: "Values",
			description:
				"At takhleeq.ai, innovation fuels our drive, unlocking boundless opportunities for growth and progress. Our commitment to integrity ensures honesty and transparency, fostering trust and robust client relationships. Collaboration lies at the heart of our endeavors, as we strive to co-create impactful experiences that resonate and leave lasting impressions. With a relentless pursuit of excellence, we consistently surpass expectations, setting new standards of achievement in every project.",
		},
	]

	// Function to handle circle click
	const handleCircleClick = index => {
		setSelectedItemIndex(index)
	}
	return (
		<div className="flex flex-col items-center justify-center lg:px-[5%] py-16 md:py-28  bg-gray-100">
			<div className="flex flex-row justify-center gap-[1%] sm:gap-2 md:gap-6 w-full items-center mb-2 md:mb-8">
				<div
					className={`h-16 sm:h-32 w-16 sm:w-32 rounded-full cursor-pointer relative bg-white shadow-md flex justify-center items-center ${
						selectedItemIndex === 0 &&
						"border-2 sm:border-4 border-[#8838D3]/80"
					}`}
					onClick={() => handleCircleClick(0)}
				>
					<Image
						src={Value1}
						alt=""
						className="absolute object-contain filter w-8 md:w-12"
						width={50}
					/>
				</div>
				<div className=" w-6 sm:w-12 lg:w-24 border-2 border-gray-900 border-dashed"></div>
				<div
					className={`h-16 sm:h-32 w-16 sm:w-32 rounded-full cursor-pointer relative bg-white shadow-md flex justify-center items-center ${
						selectedItemIndex === 1 &&
						"border-2 sm:border-4 border-[#8838D3]/80"
					}`}
					onClick={() => handleCircleClick(1)}
				>
					<Image
						src={Value2}
						alt=""
						className="absolute object-contain w-10 md:w-16"
						width={60}
					/>
				</div>
				<div className=" w-6 sm:w-12 lg:w-24 border-2 border-gray-900 border-dashed"></div>
				<div
					className={`h-16 sm:h-32 w-16 sm:w-32 rounded-full cursor-pointer relative bg-white shadow-md flex justify-center items-center ${
						selectedItemIndex === 2 &&
						"border-2 sm:border-4 border-[#8838D3]/80"
					}`}
					onClick={() => handleCircleClick(2)}
				>
					<Image
						src={Value4}
						alt=""
						className="absolute object-contain w-6 md:w-12"
						width={40}
					/>
				</div>
				<div className=" w-6 sm:w-12 lg:w-24 border-2 border-gray-900 border-dashed"></div>
				<div
					className={`h-16 sm:h-32 w-16 sm:w-32 rounded-full cursor-pointer relative bg-white shadow-md flex justify-center items-center ${
						selectedItemIndex === 3 &&
						"border-2 sm:border-4 border-[#8838D3]/80"
					}`}
					onClick={() => handleCircleClick(3)}
				>
					<Image
						src={Value3}
						alt=""
						className="absolute object-contain w-10 md:w-16"
						width={60}
					/>
				</div>
			</div>
			{items.map((item, index) => (
				<div
					key={index}
					className={`text-lg mt-8 px-4 lg:px-[10%] text-center  ${
						selectedItemIndex === index ? "change-item" : "hidden"
					}`}
				>
					<h2 className="uppercase text-4xl md:text-5xl text-center font-semibold">
						{index === 0 ? (
							<> Takhleeq is born</>
						) : (
							<>
								{" "}
								<span>{item.title}</span>
							</>
						)}
					</h2>
					<div className=" mt-4 md:mt-12 text-justify md:text-left">
						{item.description}
					</div>
				</div>
			))}
		</div>
	)
}

export default TopSection
