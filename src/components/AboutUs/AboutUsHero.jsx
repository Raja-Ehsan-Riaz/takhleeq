import Image from "next/image"

const AboutUsHero = () => {
	return (
		<div className=" flex h-[60vh] overflow-hidden relative  ">
			<h1 className="text-black text-center mx-auto pop max-w-5xl text-4xl md:text-6xl uppercase font-bold my-auto ">
				Where <span className="text-[#8838D3]">creativity</span> meets <br />{" "}
				<span className="text-[#8838D3]">strategy</span> <br /> for effective
				branding !
			</h1>
		</div>
	)
}

export default AboutUsHero
