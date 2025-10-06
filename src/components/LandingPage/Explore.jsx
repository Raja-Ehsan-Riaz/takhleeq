"use client"
import React, { useEffect, useRef, useState } from "react"

export default function Explore() {
	const sectionRef = useRef(null)
	const [inView, setInView] = useState(false)
	const [projects, setProjects] = useState(0)
	const [clients, setClients] = useState(0)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					setInView(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.3 }
		)

		if (sectionRef.current) observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [])

	// Simple counter animation
	useEffect(() => {
		if (inView) {
			let start = 0
			const projectTarget = 300
			const clientTarget = 50
			const duration = 2000
			const steps = 60
			const interval = duration / steps

			const incrementProjects = projectTarget / steps
			const incrementClients = clientTarget / steps

			const counter = setInterval(() => {
				start++
				setProjects(prev => Math.min(prev + incrementProjects, projectTarget))
				setClients(prev => Math.min(prev + incrementClients, clientTarget))
				if (start >= steps) clearInterval(counter)
			}, interval)
		}
	}, [inView])

	return (
		<div
			ref={sectionRef}
			className="relative bg-gradient-to-br from-[#300a44] to-[#3d99d6] text-white px-[5%] py-16 md:py-24"
		>
			<div className="flex justify-center flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
				{/* Left Content */}
				<div className="flex flex-col items-start justify-start space-y-6 md:w-[60%]">
					<h1 className="text-4xl md:text-5xl font-bold">
						Ideas Without Borders, Impact Across the Globe
					</h1>
					<p className="text-lg max-w-2xl">
						At Takhleeq, our work knows no boundaries. From emerging startups to
						global enterprises, we partner with visionary teams worldwide to
						craft brands that transcend borders and resonate with cultures.
					</p>
				</div>

				{/* Right Content */}
				<div className="relative md:w-[40%]  flex md:flex-none gap-2 flex-wrap">
					<div className="w-full md:h-[30rem]  rounded-lg overflow-hidden" />

					{/* Country Flags */}
					{[
						{
							src: "https://flagdownload.com/wp-content/uploads/Flag_of_Pakistan_Flat_Round-128x128.png",
							class: "top-0 left-10",
						},
						{
							src: "https://flagdownload.com/wp-content/uploads/Flag_of_Germany_Flat_Round-128x128.png",
							class: "top-0 right-10",
						},
						{
							src: "https://flagdownload.com/wp-content/uploads/Flag_of_United_Arab_Emirates_Flat_Round-128x128.png",
							class: "top-40 left-0",
						},
						{
							src: "https://flagdownload.com/wp-content/uploads/Flag_of_United_Kingdom_Flat_Round-128x128.png",
							class: "top-40 right-20",
						},
						{
							src: "https://flagdownload.com/wp-content/uploads/Flag_of_United_States_Flat_Round-128x128.png",
							class: "bottom-12 right-8",
						},
					].map((flag, i) => (
						<div
							key={i}
							className={`md:absolute ${flag.class} ${
								inView ? `fade-in delay-${i}` : "opacity-0"
							}`}
						>
							<div className="w-24 h-24 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
								<img
									src={flag.src}
									alt={`Flag ${i}`}
									className="w-20 h-20 rounded-full object-cover"
								/>
							</div>
						</div>
					))}

					{/* Stats Section */}
					<div className="md:absolute mx-auto bottom-8 left-8 transform translate-y-4 md:translate-y-12 text-gray-900 bg-white shadow-lg rounded-lg px-8 py-6">
						<div className="flex space-x-8">
							<div className="text-center">
								<p className="font-bold text-2xl">{Math.floor(projects)}+</p>
								<p>Projects</p>
							</div>
							<div className="text-center">
								<p className="font-bold text-2xl">{Math.floor(clients)}+</p>
								<p>Clients</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Animation Styles */}
			<style jsx>{`
				.fade-in {
					opacity: 0;
					transform: translateY(20px);
					animation: fadeInUp 0.8s forwards;
				}
				.delay-0 {
					animation-delay: 0s;
				}
				.delay-1 {
					animation-delay: 0.2s;
				}
				.delay-2 {
					animation-delay: 0.4s;
				}
				.delay-3 {
					animation-delay: 0.6s;
				}
				.delay-4 {
					animation-delay: 0.8s;
				}
				@keyframes fadeInUp {
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</div>
	)
}
