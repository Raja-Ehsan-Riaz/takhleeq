import Image from "next/image"
import ITServicesImage from "/public/Images/building-head.png"

const SupportingClients = () => {
	return (
		<div className="flex flex-col lg:flex-row items-stretch justify-between  lg:px-[0%] lg:pl-[5%] ">
			<div className="lg:w-[55%] py-0 pt-16   md:py-28 px-[5%] lg:px-0">
				<h2 className="uppercase text-4xl md:text-5xl  text-left font-bold">
					Transforming <span className="text-[#8838D3] ">Visions </span> <br />{" "}
					Into Vibrant <span className="text-[#8838D3] ">Brands</span>
				</h2>
				<p className="text-lg mb-12 lg:mb-0 mt-6 text-justify md:text-left">
					takhleeq.ai is not just another branding company in Pakistan. What
					sets us apart is our relentless focus on research and development. Our
					team is always exploring new trends, technologies, and insights to
					deliver innovative branding solutions that drive results. We offer the
					most comprehensive suite of services under one roof, including brand
					identity, creative design, web services, digital marketing, content
					creation, media services, and UI/UX design.
				</p>
			</div>
			<div className=" w-full lg:w-[30%] h-[30rem] lg:h-auto relative">
				<Image
					src={ITServicesImage}
					alt="people talking about IT"
					style={{ objectFit: "cover" }}
					className=""
					fill
				/>
			</div>
		</div>
	)
}

export default SupportingClients
