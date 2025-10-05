"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"

export default function ServicesSection() {
	const sectionRef = useRef(null)
	const [animateSquares, setAnimateSquares] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	])

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					// Animate each square with delays
					;[0, 1, 2, 3, 4, 5].forEach(index => {
						setTimeout(() => {
							setAnimateSquares(prev => {
								const updated = [...prev]
								updated[index] = true
								return updated
							})
						}, index * 300) // Delay: 0.5s, 1s, 1.5s, 2s
					})
				}
			},
			{ threshold: 0.5 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	return (
		<div
			ref={sectionRef}
			className="relative px-[5%] py-16 lg:py-24 lg:pb-28" //bg-gradient-to-r from-[#c13939] to-[#c13939]
		>
			<div className="container mx-auto flex flex-col items-center justify-center">
				{/* Title */}
				<h1 className="text-4xl font-bold text-center mb-12 max-w-lg">
					Transforming Ideas into Bold, Digital Realities
				</h1>

				{/* Central Image */}
				<div className="relative w-[25rem] h-[30rem] m-auto px-2 flex justify-center">
					<img
						src="/Images/center.jpg"
						alt="Center"
						className="w-full h-full object-contain "
					/>

					{[
						{
							position: "top-[10%] left-[-20rem]",
							bgColor: "#8838D3",
							heading: "Branding and Strategy",
							icon: "/Icons&Symbols/offer/uiux-design.png",
						},
						{
							position: "top-[10%] right-[-20rem]",
							bgColor: "#8838D3",
							heading: "Creative Design",
							icon: "/Icons&Symbols/offer/creative-design.png",
						},
						{
							position: "top-[40%] left-[-25rem]",
							bgColor: "#8838D3",
							heading: "AI Driven Marketing",
							icon: "/Icons&Symbols/offer/digital-marketing.png",
						},
						{
							position: "top-[40%] right-[-25rem]",
							bgColor: "#8838D3",
							heading: "Media Services",
							icon: "/Icons&Symbols/offer/media-services.png",
						},
						{
							position: "top-[70%] left-[-20rem]",
							bgColor: "#8838D3",
							heading: "Content Creation",
							icon: "/Icons&Symbols/offer/content-creation.png",
						},
						{
							position: "top-[70%] right-[-20rem]",
							bgColor: "#8838D3",
							heading: "Digital Development",
							icon: "/Icons&Symbols/offer/web-development.png",
						},
					].map((box, index) => (
						<div
							key={index}
							style={{
								backgroundColor: box.bgColor,
							}}
							className={`absolute ${
								box.position
							} w-[20rem] shadow-lg rounded-lg p-6 flex flex-col items-center text-center cursor-pointer  transition-transform duration-300 ${
								animateSquares[index]
									? "animate-popup opacity-100"
									: "opacity-0 hidden"
							}`}
						>
							<div className="absolute -top-10 right-4 w-16 h-16 border-2 border-[#8838D3] bg-white rounded-full flex items-center justify-center text-3xl font-semibold">
								<Image src={box.icon} alt="Icon" width={30} height={30} />
							</div>
							<h3 className="text-lg font-bold text-white">{box.heading}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
