import React from "react"
import { FaPhone } from "react-icons/fa"
import { IoLocation, IoMailOutline } from "react-icons/io5"

const LocationSection = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-center items-center px-[5%] gap-12 lg:gap-[5%] mb-16">
			<div className="flex flex-col gap-8 justify-start items-start lg:w-[50%] ">
				<div className="uppercase font-bold text-3xl text-black mb-4">
					{" "}
					Our Offices
				</div>
				<div className="flex flex-col sm:flex-row  sm:border-l-8 border-[#8838D3] w-full shadow-sm">
					<div className="flex flex-col sm:w-[90%] items-start justify-between p-6 px-8 bg-gray-50 ">
						<div className="uppercase font-bold text-xl text-[#8838D3] mb-2">
							Main Office
						</div>
						<div className="font-semibold">
							Takhleeq, Sector H-12, Islamabad
						</div>
						<div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-6 mt-2">
							<div className="flex flex-row justify-start items-center gap-4">
								<IoMailOutline size={20} />
								<div>info@takhleeq.io</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center p-4 bg-[#79579D3A]/80 flex-grow">
						<IoLocation size={30} color="white" />
					</div>
				</div>
				<div className="flex flex-col sm:flex-row  sm:border-l-8 border-[#8838D3] w-full shadow-sm">
					<div className="flex flex-col sm:w-[90%] items-start justify-between p-6 px-8 bg-gray-50">
						<div className="uppercase font-bold text-xl text-[#8838D3] mb-2">
							Coorporate Office
						</div>
						<div className="font-semibold">
							AKLASC Plaza, behind Babri Masjid, G-10 Markaz Islamabad
						</div>
						<div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-6 mt-2">
							<div className="flex flex-row justify-start items-center gap-4">
								<IoMailOutline size={20} />
								<div>info@takhleeq.io</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center p-4 bg-[#79579D3A]/80 flex-grow">
						<IoLocation size={30} color="white" />
					</div>
				</div>
				{/* <div className="flex flex-col sm:flex-row  sm:border-l-8 border-[#8838D3] w-full">
          <div className="flex flex-col sm:w-[90%] items-start justify-between p-6 px-8 bg-[#79579D3A]">
            <div className="uppercase font-bold text-xl text-[#8838D3] mb-2">
              United Kingdom
            </div>
            <div className="font-semibold">Not Available</div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <IoMailOutline size={20} />
                <div>not available</div>
              </div>
              <div className="flex flex-row justify-start items-center gap-4">
                <FaPhone size={15} />
                <div className="ml-1">not available</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-[#79579D3A]/80 flex-grow">
            <IoLocation size={30} color="white" />
          </div>
        </div> */}
			</div>
			<div className=" w-full lg:w-[40%] ">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1725.5137061472228!2d72.98949349975159!3d33.64301202702659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675d7dbe26f%3A0xb13cf5184b4f8b46!2sSEECS%20Faculty%20Block!5e0!3m2!1sen!2s!4v1715430691241!5m2!1sen!2s"
					width="600"
					height="450"
					style={{ border: 0 }}
					allowfullscreen=""
					className="w-full"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	)
}

export default LocationSection
