import Image from "next/image"
import Link from "next/link"

export const ClientCard = ({ name, description, icon, services }) => {
	return (
		<Link href={`/client/${name}`} className="lg:w-[40%] w-[29rem]">
			<div className="flex flex-col h-full justify-start items-stretch p-4  gap-6 bg-white rounded-3xl shadow-lg hover:shadow-3xl border border-gray-100 cursor-pointer transition-all duration-500">
				<div className="h-[10rem] md:h-[15rem] relative rounded-2xl overflow-hidden">
					<Image
						fill={true}
						style={{ objectFit: "cover" }}
						src={`/Icons&Symbols/clients${icon}`}
						className="absolute"
					/>
				</div>
				<div className="flex flex-col items-start  gap-2 px-2 ">
					<div className="text-2xl font-semibold text-gray-900">{name}</div>
					<div className="w-full text-justify md:text-left text-gray-800 font-light text-base flex-grow">
						{description}
					</div>
					<div className="flex justify-start flex-wrap items-start w-full gap-4 mt-auto">
						{services.map((service, idx) => (
							<div key={idx} className="rounded-full text-sm p-3 bg-gray-200">
								{service}
							</div>
						))}
					</div>
				</div>
			</div>
		</Link>
	)
}
