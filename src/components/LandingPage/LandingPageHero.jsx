import Link from "next/link"
import Image from "next/image"
import { BiSolidZap } from "react-icons/bi"

const LandingPagehero = async () => {
	return (
		<div className="w-full h-[90vh] md:h-[72vh] flex flex-col justify-center items-center bg-gray-50 text-gray-900 relative overflow-hidden py-28">
			{/* Main Content Container */}
			<div className="flex flex-col md:flex-row justify-center items-center h-full z-30 max-w-6xl mx-auto px-4">
				{/* Left Side - Text Content */}
				<div className="flex-1 text-left md:pr-16">
					<div className="mb-4">
						<span className="text-2xl md:text-3xl font-light text-gray-700">
							Ultimate
						</span>
					</div>

					<h1 className="text-6xl md:text-8xl font-black mb-4 leading-none relative">
						Bran<span className="text-white md:text-gray-900">ding</span>
						<div className="absolute -right-[10%] -top-[80%] h-40 w-40 text-left -z-10   md:hidden block">
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
					</h1>

					<div className="mb-8">
						<span className="text-2xl md:text-3xl font-light text-gray-600">
							Experience
						</span>
					</div>
				</div>

				{/* Right Side - Purple Circle */}
				<div className="md:w-1/2 mt-16 md:mt-0 relative hidden md:block">
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
			<div className="absolute top-20 right-20 w-32 h-32 bg-gray-300 rounded-full opacity-30 blur-sm hidden md:block"></div>
			<div className="absolute bottom-32 left-16 w-24 h-24 bg-purple-300 rounded-full opacity-40 blur-sm  hidden md:block"></div>
		</div>
	)
}

export default LandingPagehero
