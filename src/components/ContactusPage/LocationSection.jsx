import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocation, IoMailOutline } from "react-icons/io5";

const LocationSection = () => {
  return (
    <div className="flex justify-center items-start px-[5%]  mb-16 h-[25rem]">
      <div className="flex flex-col gap-4 justify-between items-start w-1/2 h-full">
        <div className="flex flex-row  border-l-8 border-[#8838D3]">
          <div className="flex flex-col items-start justify-between p-4 px-8 bg-[#79579D3A]">
            <div className="uppercase font-bold text-xl text-[#8838D3]">
              Pakistan
            </div>
            <div className="font-semibold">
              Media Lab, IEAC Building, NUST H-12, Islamabad
            </div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <IoMailOutline size={20} />
                <div>contact@takhleeq.com</div>
              </div>
              <div className="flex flex-row justify-start items-center gap-4">
                <FaPhone size={15} />
                <div className="ml-1">0333-123467</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-[#79579D3A]/80 flex-grow">
            <IoLocation size={30} color="white" />
          </div>
        </div>
        <div className="flex flex-row  border-l-8 border-[#8838D3]">
          <div className="flex flex-col items-start justify-between p-4 px-8 bg-[#79579D3A]">
            <div className="uppercase font-bold text-xl text-[#8838D3]">
              Pakistan
            </div>
            <div className="font-semibold">
              Media Lab, IEAC Building, NUST H-12, Islamabad
            </div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <IoMailOutline size={20} />
                <div>contact@takhleeq.com</div>
              </div>
              <div className="flex flex-row justify-start items-center gap-4">
                <FaPhone size={15} />
                <div className="ml-1">0333-123467</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-[#79579D3A]/80 flex-grow">
            <IoLocation size={30} color="white" />
          </div>
        </div>
        <div className="flex flex-row  border-l-8 border-[#8838D3]">
          <div className="flex flex-col items-start justify-between p-4 px-8 bg-[#79579D3A]">
            <div className="uppercase font-bold text-xl text-[#8838D3]">
              Pakistan
            </div>
            <div className="font-semibold">
              Media Lab, IEAC Building, NUST H-12, Islamabad
            </div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <IoMailOutline size={20} />
                <div>contact@takhleeq.com</div>
              </div>
              <div className="flex flex-row justify-start items-center gap-4">
                <FaPhone size={15} />
                <div className="ml-1">0333-123467</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-[#79579D3A]/80 flex-grow">
            <IoLocation size={30} color="white" />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#79579D3A]"></div>
    </div>
  );
};

export default LocationSection;
