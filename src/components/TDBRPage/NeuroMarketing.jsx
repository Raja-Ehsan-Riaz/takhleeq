import Image from "next/image"
import Neuro from "../../../public/Images/neuro.png"
const NeuroMarketing = () => {
	return (
		<div className="flex flex-col lg:flex-row pl-[5%] lg:pl-[0%] lg:pr-[5%] py-28 gap-12 lg:gap-[5%] bg-gray-100 items-center overflow-hidden">
			<div className="lg:w-[40%]  ">
				<Image src={Neuro} alt="Man with brain" />
			</div>
			<div className="w-full lg:w-[55%]">
				<h2 className="uppercase text-5xl text-left text-black  font-bold">
					AI Neuromarketing The Future of <br />
					<span className="text-[#8838D3]">Brand Connection</span>
				</h2>
				<p className="text-lg mt-4">
					Takhleeq is set to become Pakistan&apos;s 1st Branding Agency
					introducing upcoming AI-powered Neuromarketing into its research and
					branding practices. By combining neuroscience with advanced tools, the
					aim is to study the subconscious reactions and emotional responses of
					consumers to marketing stimuli.
				</p>
				<div className="text-lg mt-6">
					This next-generation approach will allow brands to uncover hidden
					motivations behind decision-making and design campaigns, products, and
					experiences that connect more deeply, strengthening engagement,
					building trust, and driving sustainable growth.
				</div>
			</div>
		</div>
	)
}

export default NeuroMarketing
