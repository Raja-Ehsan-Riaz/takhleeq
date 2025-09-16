"use client"
import Link from "next/link"
import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

const faqs = [
	{
		question: "What services does takhleeq.ai provide?",
		answer:
			"We specialize in branding, design, digital strategy, and creative solutions that help businesses stand out, grow, and connect with their audience.",
	},
	{
		question:
			"Do you only work with large companies, or do you support startups too?",
		answer:
			"We partner with both from ambitious startups shaping their first identity to established brands looking to evolve and expand.",
	},
	{
		question: "How do you start working on a new project?",
		answer:
			"We begin with a discovery session to understand your goals, challenges, and vision. From there, we craft a tailored roadmap to bring your brand to life.",
	},
	{
		question: "How long does the branding process usually take?",
		answer:
			"Timelines vary based on the scope of the project. A full branding project may take a few days to a couple of weeks, while smaller deliverables can be completed faster.",
	},
	{
		question: "What makes takhleeq.ai different from other branding agencies?",
		answer:
			"We don’t just create logos or visuals. We craft future-ready brands rooted in clarity, storytelling, and culture. Our focus is on building brands that inspire, influence, and endure.",
	},
]

const FAQalt = () => {
	const [activeQuestion, setActiveQuestion] = useState(null)

	const handleQuestionClick = index => {
		setActiveQuestion(index === activeQuestion ? null : index)
	}

	return (
		<div className=" px-[5%] py-16 lg:py-24 lg:pb-28 ">
			<div className="flex flex-col items-center justify-center text-center max-w-6xl m-auto">
				<h2 className=" text-5xl text-gray-950 uppercase font-bold mb-6 max-w-2xl">
					We&apos;re here to answer all{" "}
					<span className="text-[#8838D3]">your Questions</span>
				</h2>
				<p className="text-lg max-w-2xl text-gray-700">
					Curious about our process, services, or how we can help your business
					grow? Find answers here and if not, we&apso;re only a message away.
				</p>
				<div className={`py-4 md:p-4 rounded-b-lg mt-8 w-full `}>
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="mb-4 relative p-2 pr-12 text-sm md:text-base bg-gray-50 rounded-xl border hover:bg-gray-100"
						>
							<div className="absolute right-6 top-6">
								<IoIosArrowDown
									className={`text-black duration-500 transition-transform ${
										activeQuestion === index ? "rotate-180" : "rotate-0"
									}`}
									size={22}
								/>
							</div>
							<div
								onClick={() => handleQuestionClick(index)}
								className={`cursor-pointer font-semibold  text-left   p-4 ${
									activeQuestion === index ? "text-black" : "text-gray-800"
								}`}
							>
								{faq.question}
							</div>
							{activeQuestion === index && (
								<div className="text-black p-4 text-left change-item">
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>
				<div className="text-sm font-semibold mt-4">Got Any More Question?</div>
				<Link href={"/FAQs"} className="mt-4">
					<div className="px-12 py-4  focus:outline-none   relative border bg-white border-black text-black cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
						<div className="relative z-20">Explore FAQs</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default FAQalt
