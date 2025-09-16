import RocketImage from "../../../public/Images/rocket.png"
import Image from "next/image"
const Branding = () => {
	return (
		<div className="flex flex-col lg:flex-row  px-[5%] py-20 gap-16 justify-between items-center overflow-hidden">
			<div className="lg:w-[60%]">
				<h2 className="uppercase text-5xl text-left font-bold">
					Tech-Driven Branding <br />
					<span className="text-[#8838D3]">Revolution</span>
				</h2>
				<p className="text-lg mt-4">
					A driving force of innovators committed to redefining the future of
					branding in the digital era. This specialized unit integrates
					creativity with advanced expertise in AI, Marketing, and emerging
					technologies to deliver brand experiences that not only differentiate
					but also transform industries.
				</p>
				<div className="text-lg mt-2 lg:mt-6">
					Anchored in research, experimentation, and a relentless pursuit of
					excellence, the team develops future-ready branding solutions that
					engage audiences, accelerate business growth, and set new standards of
					leadership in the branding space
				</div>
			</div>
			<div className=" h-[35rem] w-[35rem] overflow-hidden rounded-full   relative ">
				<Image
					src={RocketImage}
					alt="people talking about IT"
					style={{ objectFit: "cover", objectPosition: "0px 50%" }}
					className="absolute "
					fill
				/>
			</div>
		</div>
	)
}

export default Branding
