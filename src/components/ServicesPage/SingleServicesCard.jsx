import Image from "next/image"
import Link from "next/link"

const SingleServiceCard = ({ title, description, icon }) => {
	return (
		<Link
			href={`/services/#`}
			className="md:w-[25rem] p-8"
		>
			<div className="bg-white rounded-lg px-4 py-8 flex flex-col items-center justify-between shadow-md border h-[400px] transform hover:scale-105 duration-300 ">
				<div>
					<h3 className="text-2xl font-bold text-gray-800 text-center uppercase">
						{title}
					</h3>
					<p className="text-center mt-2">{description}</p>
				</div>
				<div className="h-[10rem] w-full relative ">
					<Image
						fill={true}
						style={{ objectFit: "contain" }}
						src={icon}
						className=" absolute z-10 "
						priority
					/>
				</div>
			</div>
		</Link>
	)
}

export default SingleServiceCard
