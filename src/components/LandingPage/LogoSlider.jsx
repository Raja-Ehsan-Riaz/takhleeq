import React from "react"
import clients from "../../utils/clientsdetails.json"
import Image from "next/image"

const LogoSlider = () => {
	return (
		<div className="w-full inline-flex overflow-hidden flex-nowrap bg-gray-200 text-white font-semibold py-4 uppercase text-xl">
			<ul className="flex items-center divide-x-2 border-l-2  animate-infinite-scroll  justify-center  md:justify-start ">
				{clients.map((client, index) => (
					<div
						className="h-[6rem]  w-[15rem] rounded-lg overflow-hidden bg-slate-600 relative mx-2 border-8  border-white fiter grayscale hover:grayscale-0"
						key={index}
					>
						<Image
							src={`/Icons&Symbols/clients${client.icon}`}
							alt=""
							fill
							className="absolute object-cover"
						/>
					</div>
				))}
			</ul>
			<ul
				className="flex items-center divide-x-2 border-l-2 justify-center md:justify-start  animate-infinite-scroll"
				aria-hidden="true"
			>
				{clients.map((client, index) => (
					<div
						className="h-[6rem]  w-[15rem] rounded-lg overflow-hidden bg-slate-600 relative mx-2 border-8  border-white fiter grayscale hover:grayscale-0"
						key={index}
					>
						<Image
							src={`/Icons&Symbols/clients${client.icon}`}
							alt=""
							fill
							className="absolute object-cover"
						/>
					</div>
				))}
			</ul>
		</div>
	)
}

export default LogoSlider
