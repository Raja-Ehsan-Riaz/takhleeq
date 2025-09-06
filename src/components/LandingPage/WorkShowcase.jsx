import Image from "next/image"
import Link from "next/link"
import askari from "/public/portfolio/Askari Bank/0.jpg"
import fss from "/public/portfolio/Fauji Security Services FSS/1.JPG"
import el from "/public/portfolio/elearning.jpg"
import sentinal from "/public/portfolio/sentinal.jpg"
import toyota from "/public/portfolio/Toyota G.T Motors Pvt Limited/3.jpg"
import truid from "/public/portfolio/truid.png"
import { FaArrowRight } from "react-icons/fa6"

const WorkShowcase = () => {
	return (
		<div className="  py-20 text-center flex flex-col items-center ">
			<h2 className=" text-left text-4xl uppercase font-bold mb-4 px-[5%]">
				Work <span className="text-black ">Showcase</span>
			</h2>
			<div className="flex flex-row flex-wrap gap-2 justify-center mt-4 mb-12 w-full text-white">
				<Link
					href={"/client/Fauji Security Services FSS"}
					className=" lg:w-[36%] w-[29rem]  overflow-hidden border-2 shadow-md text-black  relative  m-2 hover:shadow-2xl hover:border-gray-300 transform duration-500 rounded-3xl  hover:z-40 group"
				>
					<div className="relative h-[20rem] bg-gray-900/30 overflow-hidden">
						<Image
							src={fss}
							alt=""
							fill
							style={{ objectFit: "cover", objectPosition: "0px 10%" }}
							className="absolute "
						/>
					</div>
					<div className="p-8 text-left">
						<div className="w-full text-2xl font-semibold  text-gray-900 ">
							Fauji Security Services
						</div>
						<div className="text-gray-800 font-light mt-4">
							FSS, is one of the pioneers in the security business of Pakistan.
							Founded in 1993, with the noble aim of providing employment
							opportunities to the retired....
						</div>
					</div>
				</Link>
				<Link
					href={"/client/Sentinel AI"}
					className=" lg:w-[36%] w-[29rem]  overflow-hidden border-2 shadow-md text-black  relative  m-2 hover:shadow-2xl hover:border-gray-300 transform duration-500 rounded-3xl  hover:z-40 group"
				>
					<div className="relative h-[20rem] overflow-hidden">
						<Image
							src={sentinal}
							alt=""
							fill
							style={{ objectFit: "cover", objectPosition: "0px 10%" }}
							className="absolute"
						/>
					</div>
					<div className="p-8 text-left">
						<div className="w-full text-2xl font-semibold  text-gray-900 ">
							Sentinal AI
						</div>
						<div className="text-gray-800 font-light mt-4">
							Sentinel AI Technologies Pvt. Ltd., established in 2022, is a
							prominent player in the IT industry, boasting a team of top-notch
							experts in Artificial....
						</div>
					</div>
				</Link>
				<Link
					href={"/client/Askari Bank"}
					className=" lg:w-[36%] w-[29rem]  overflow-hidden border-2 shadow-md text-black  relative  m-2 hover:shadow-2xl hover:border-gray-300 transform duration-500 rounded-3xl  hover:z-40 group"
				>
					<div className="relative h-[20rem] overflow-hidden">
						<Image
							src={askari}
							alt=""
							fill
							style={{ objectFit: "cover", objectPosition: "0px 10%" }}
							className="absolute"
						/>
					</div>
					<div className="p-8 text-left">
						<div className="w-full text-2xl font-semibold  text-gray-900 ">
							Askari Bank
						</div>
						<div className="text-gray-800 font-light mt-4">
							Askari Bank was incorporated in Pakistan on October 9, 1991, as a
							public limited company. It commenced operation on April 1, 1992,
							and is principally engaged....
						</div>
					</div>
				</Link>
				<Link
					href={"/client/Elements Learning"}
					className=" lg:w-[36%] w-[29rem]  overflow-hidden border-2 shadow-md text-black  relative  m-2 hover:shadow-2xl hover:border-gray-300 transform duration-500 rounded-3xl  hover:z-40 group"
				>
					<div className="relative h-[20rem] overflow-hidden">
						<Image
							src={el}
							alt=""
							fill
							style={{ objectFit: "cover", objectPosition: "0px 10%" }}
							className="absolute"
						/>
					</div>
					<div className="p-8 text-left">
						<div className="w-full text-2xl font-semibold  text-gray-900 ">
							Elements Learning
						</div>
						<div className="text-gray-800 font-light mt-4">
							Elements Learning, a leading education system in Pakistan,
							prioritizes experiential and achievable learning, viewing children
							as the pillars of a better....
						</div>
					</div>
				</Link>

				<Link
					href={"/client/Toyota G.T Motors Pvt Limited"}
					className=" lg:w-[36%] w-[29rem]  overflow-hidden border-2 shadow-md text-black  relative  m-2 hover:shadow-2xl hover:border-gray-300 transform duration-500 rounded-3xl  hover:z-40 group"
				>
					<div className="relative h-[20rem] overflow-hidden">
						<Image
							src={toyota}
							alt=""
							fill
							style={{ objectFit: "cover", objectPosition: "0px 10%" }}
							className="absolute"
						/>
					</div>
					<div className="p-8 text-left">
						<div className="w-full text-2xl font-semibold  text-gray-900 ">
							Toyota G.T Motors
						</div>
						<div className="text-gray-800 font-light mt-4">
							Toyota G.T Motors Pvt Limited is a performance-driven automotive
							company dedicated to delivering exceptional results and
							unparalleled customer....
						</div>
					</div>
				</Link>
				<Link
					href={"/client/truID Technologies Pvt. Ltd"}
					className=" lg:w-[36%] w-[29rem]  overflow-hidden border-2 shadow-md text-black  relative  m-2 hover:shadow-2xl hover:border-gray-300 transform duration-500 rounded-3xl  hover:z-40 group"
				>
					<div className="relative h-[20rem] overflow-hidden">
						<Image
							src={truid}
							alt=""
							fill
							style={{ objectFit: "cover", objectPosition: "0px 10%" }}
							className="absolute"
						/>
					</div>
					<div className="p-8 text-left">
						<div className="w-full text-2xl font-semibold  text-gray-900 ">
							truID
						</div>
						<div className="text-gray-800 font-light mt-4">
							Founded in 2021, truID Technologies Pvt. Ltd. stands at the
							forefront of identity verification solutions, catering to global
							enterprise clients. With....
						</div>
					</div>
				</Link>
			</div>
			<Link href={"/clients"} className="mt-4">
				<div className="px-12 py-4  focus:outline-none   relative border bg-white border-black text-black cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
					<div className="relative z-20">Explore More</div>
				</div>
			</Link>
		</div>
	)
}

export default WorkShowcase
