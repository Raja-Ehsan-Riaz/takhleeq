import Link from "next/link"
import Image from "next/image"
import { BiSolidZap } from "react-icons/bi"

const LandingPagehero = async () => {
	return (
		<div className="w-full h-[90vh] md:h-[70vh] flex flex-col justify-center items-center bg-gray-50 text-gray-900 relative overflow-hidden py-28">
			{/* Main Content Container */}
			<div className="flex flex-col md:flex-row justify-center items-center h-full z-30 max-w-6xl mx-auto px-4">
				{/* Left Side - Text Content */}
				<div className="flex-1 text-left md:pr-16">
					<div className="mb-4">
						<span className="text-2xl md:text-4xl font-light text-gray-700">
							Ultimate
						</span>
					</div>

					<h1 className="text-6xl md:text-9xl font-black mb-4 leading-none relative">
						Bran<span className="text-white">ding</span>
						<div className="absolute -right-[7%] -top-[65%] h-40 w-40 md:h-80 md:w-80 text-left -z-10   ">
							{/* Main purple circle - matching the original design */}
							<div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full shadow-2xl">
								<div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 to-transparent rounded-full"></div>
							</div>
						</div>
					</h1>

					<div className="mb-8">
						<span className="text-2xl md:text-4xl font-light text-gray-600">
							Experience
						</span>
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
