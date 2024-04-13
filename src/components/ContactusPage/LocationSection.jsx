import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocation, IoMailOutline } from "react-icons/io5";

const LocationSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch px-[5%] gap-12 lg:gap-[5%] mb-16">
      <div className="flex flex-col gap-4 justify-between items-start lg:w-[50%] ">
        <div className="flex flex-col sm:flex-row  sm:border-l-8 border-[#8838D3] w-full">
          <div className="flex flex-col sm:w-[90%] items-start justify-between p-6 px-8 bg-[#79579D3A]">
            <div className="uppercase font-bold text-xl text-[#8838D3] mb-2">
              Main Office
            </div>
            <div className="font-semibold">
              GRC, SEECS, NUST, Sector H-12, Islamabad
            </div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <IoMailOutline size={20} />
                <div>hr@takhleeq.io</div>
              </div>
              <div className="flex flex-row justify-start items-center gap-4">
                <FaPhone size={15} />
                <div className="ml-1">0333-8483016</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-[#79579D3A]/80 flex-grow">
            <IoLocation size={30} color="white" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  sm:border-l-8 border-[#8838D3] w-full">
          <div className="flex flex-col sm:w-[90%] items-start justify-between p-6 px-8 bg-[#79579D3A]">
            <div className="uppercase font-bold text-xl text-[#8838D3] mb-2">
              Coorporate Office
            </div>
            <div className="font-semibold">
              AKLASC Plaza, behind Babri Masjid, G-10 Markaz Islamabad
            </div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <IoMailOutline size={20} />
                <div>hr@takhleeq.io</div>
              </div>
              <div className="flex flex-row justify-start items-center gap-4">
                <FaPhone size={15} />
                <div className="ml-1">0333-8483016</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-[#79579D3A]/80 flex-grow">
            <IoLocation size={30} color="white" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  sm:border-l-8 border-[#8838D3] w-full">
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
        </div>
      </div>
      <div className=" w-full lg:w-[40%] h-[30rem] bg-[#79579D3A]"></div>
    </div>
  );
};

export default LocationSection;
