import Link from "next/link"
import Image from "next/image"
import { BiSolidZap } from "react-icons/bi"

const LandingPagehero = async () => {
	return (
		<div className="w-full h-[90vh] flex flex-col justify-center items-center bg-gray-50 text-gray-900 relative overflow-hidden">
			{/* Main Content Container */}
			<div className="flex flex-col lg:flex-row justify-center items-center h-full z-30 max-w-6xl mx-auto px-4">
				{/* Left Side - Text Content */}
				<div className="flex-1 text-center lg:text-left lg:pr-16">
					<div className="mb-4">
						<span className="text-2xl lg:text-3xl font-light text-gray-700">
							Ultimate
						</span>
					</div>

					<h1 className="text-6xl lg:text-8xl font-black mb-4 leading-none">
						Bran<span className="text-[#8838D3]">ding</span>
					</h1>

					<div className="mb-8">
						<span className="text-xl lg:text-2xl font-light text-gray-600">
							Experience
						</span>
					</div>
				</div>

				{/* Right Side - Purple Circle */}
				<div className="lg:w-1/2 mt-16 lg:mt-0 relative">
					<div className="relative mx-auto w-64 h-64">
						{/* Main purple circle - matching the original design */}
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 to-transparent rounded-full"></div>
						</div>

						{/* White dot accent */}
						<div className="absolute top-24 left-16 w-6 h-6 bg-white rounded-full shadow-lg"></div>

						{/* Orbiting elements */}
						<div
							className="absolute inset-0 animate-spin"
							style={{ animationDuration: "20s" }}
						>
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-300 rounded-full"></div>
							<div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
							<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-200 rounded-full"></div>
							<div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
						</div>
					</div>

					{/* Decorative grid */}
					<div className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-20">
						{[...Array(9)].map((_, i) => (
							<div key={i} className="w-2 h-2 bg-black-600 rounded-full"></div>
						))}
					</div>
				</div>
			</div>

			{/* Subtle background decoration */}
			<div className="absolute top-20 right-20 w-32 h-32 bg-gray-300 rounded-full opacity-30 blur-sm"></div>
			<div className="absolute bottom-32 left-16 w-24 h-24 bg-purple-300 rounded-full opacity-40 blur-sm"></div>
		</div>
	)
}

export default LandingPagehero
