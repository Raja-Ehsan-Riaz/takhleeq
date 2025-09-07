import Link from "next/link"
import React from "react"

export default function Explore() {
	return (
		<div className="relative bg-gradient-to-br from-[#300a44] to-[#3d99d6] text-white px-[5%] py-16 md:py-24">
			<div className="flex justify-center items-center space-x-12">
				{/* Left Content */}
				<div className="flex flex-col items-start justify-start space-y-4 w-[60%]">
					<h1 className=" text-4xl md:text-5xl font-bold ">
						Ideas Without Borders, Impact Across the Globe
					</h1>
					<p className=" text-lg max-w-2xl">
						At Takhleeq, our work knows no boundaries. From emerging startups to
						global enterprises, we partner with visionary teams worldwide to
						craft brands that transcend borders and resonate with cultures.
					</p>
				</div>

				{/* Right Content */}
				<div className="relative w-[40%]">
					{/* Placeholder grid for the image */}
					<div className="w-full h-[30rem]  rounded-lg overflow-hidden">
						{/* Add your image here */}
					</div>

					{/* Country Circles */}
					<div className="absolute top-0 left-10">
						<div className="w-24 h-24 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
							<img
								src="https://flagdownload.com/wp-content/uploads/Flag_of_Pakistan_Flat_Round-128x128.png"
								alt="Pk"
								className="w-20 h-20 rounded-full object-cover"
							/>
						</div>
					</div>
					<div className="absolute top-0 right-10">
						<div className="w-24 h-24 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
							<img
								src="https://flagdownload.com/wp-content/uploads/Flag_of_Pakistan_Flat_Round-128x128.png"
								alt="DE"
								className="w-20 h-20 rounded-full"
							/>
						</div>
					</div>
					<div className="absolute top-40 left-0">
						<div className="w-24 h-24 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
							<img
								src="https://flagdownload.com/wp-content/uploads/Flag_of_United_Arab_Emirates_Flat_Round-128x128.png"
								alt="AE"
								className="w-20 h-20 rounded-full"
							/>
						</div>
					</div>
					<div className="absolute top-40     right-20">
						<div className="w-24 h-24 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
							<img
								src="https://flagdownload.com/wp-content/uploads/Flag_of_United_Kingdom_Flat_Round-128x128.png"
								alt="GB"
								className="w-20 h-20 rounded-full"
							/>
						</div>
					</div>
					<div className="absolute bottom-12 right-8">
						<div className="w-24 h-24 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
							<img
								src="https://flagdownload.com/wp-content/uploads/Flag_of_United_States_Flat_Round-128x128.png"
								alt="Sa"
								className="w-20 h-20 rounded-full"
							/>
						</div>
					</div>

					{/* Stats Section */}
					<div className="absolute bottom-8 left-8  transform translate-y-12 text-gray-600 bg-white shadow-lg rounded-lg px-8 py-6">
						<div className="flex space-x-8">
							<div className="text-center">
								<p className="text-[#8838D3] font-bold text-2xl">300+</p>
								<p className="">Projects</p>
							</div>
							<div className="text-center">
								<p className="text-[#8838D3] font-bold text-2xl">50+</p>
								<p className="">Clients</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
