import Image from "next/image"
import Link from "next/link"

import RoadMap from "/public/Images/road.png"

const BusinessStartupPitch = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row  lg:px-[0%] lg:pr-[5%] py-16 lg:py-0 justify-between bg-gradient-to-tr from-[#3d99d6] to-[#382a69] text-white">
			<div className="lg:w-[40%] md:h-[30rem]  lg:h-auto relative hidden lg:flex justify-end items-end">
				<Image
					src={RoadMap}
					width={600}
					className=""
					alt="people celebrating business startup success"
				/>
			</div>
			<div className="lg:w-[55%] lg:pl-8 lg:py-28 px-[5%] lg:px-0 flex flex-col items-start">
				<h2 className="uppercase text-4xl md:text-5xl text-left font-bold">
					<span className="text-gray-950">Brands</span> that people love and
					make companies
					<span className="text-gray-950"> thrive</span>
				</h2>
				<p className="text-lg mt-6 text-justify md:text-left">
					Wherever innovation is needed, we bring strategy, creativity, and
					technology together to shape future-ready identities that drive
					influence, unify teams, and fuel growth.
				</p>
				<div className="mt-12">
					<Link href={"/services"}>
						<div className="px-12 py-4  focus:outline-none   relative border bg-white border-black text-black cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
							<div className="relative z-20">Build with Us</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BusinessStartupPitch
