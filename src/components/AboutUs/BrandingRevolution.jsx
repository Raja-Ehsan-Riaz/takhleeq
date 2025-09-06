import Image from "next/image"
import Link from "next/link"

const BrandingRevolution = () => {
	return (
		<div
			id="tdbr"
			className="flex flex-col lg:flex-row px-[5%] justify-between items-stretch  py-16  md:py-32  text-white relative overflow-hidden  bg-[#7936b7]/30 bg-gradient-to-r from-[#1312149E]/50 via-[#1312149E]/50 to-[#1312149E]/50 "
		>
			<Image
				fill={true}
				style={{ objectFit: "cover" }}
				src="/Images/branding.png"
				className=" absolute -z-10"
			/>
			<div className="lg:w-[40%] flex flex-col justify-center text-4xl md:text-5xl font-bold text-center lg:text-left">
				<div>Tech-Driven Branding Revolution</div>
				<div className="mt-8">
					<Link href="/TDBR">
						<button className="relative  bg-transparent px-12 py-5 bg-white text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
							<div className="relative z-20">Read More</div>
						</button>
					</Link>
				</div>
			</div>
			<div className="lg:w-[55%] text-center">
				<p className="text-lg ">
					takhleeq.ai is spearheading a tech-driven branding revolution. With a
					focus on neuromarketing, the company is developing innovative
					solutions to elevate businesses&apos; marketing efforts and boost
					revenue.{" "}
				</p>
				<div className="text-lg mt-6">
					This project offers clients access to cutting-edge technology and
					expertise in neuromarketing research, enabling deeper connections with
					target audiences and the creation of highly effective campaigns.
				</div>
			</div>
		</div>
	)
}

export default BrandingRevolution
