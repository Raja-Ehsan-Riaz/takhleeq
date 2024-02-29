import React from "react";
import Image from "next/image";
import Team from "/public/Images/team-dummy.png";
import { BiLogoInstagramAlt, BiPlusCircle } from "react-icons/bi";
import Link from "next/link";
import { RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";

const TeamCard = ({name,designation}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[15rem] mt-8 relative mx-auto text-center ">
      <div className="bg-gray-300  group rounded-lg overflow-hidden relative">
        <div className="absolute right-4 top-3 transform duration-300 group-hover:rotate-45 z-50">
          <BiPlusCircle size={20} color="black" />
        </div>
        <div className="w-full h-full bg-[#5d32d2] group-hover:block hidden transition-all duration-500 rounded-xl absolute top-0 left-0 z-40 opacity-30"></div>
        <div className="absolute top-10 right-2  flex flex-col gap-2 justify-center items-center transform -translate-y-[15rem] transition-transform duration-500 group-hover:translate-y-0 z-50">
          <Link href="#">
            <FaSquareFacebook
              size={30}
              color="#B418FB"
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <BiLogoInstagramAlt
              size={35}
              color="#B418FB"
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <RiLinkedinBoxFill
              size={30}
              color="#B418FB"
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <RiTwitterXFill
              size={25}
              color="#B418FB"
              className="object-contain bg-white p-1 rounded-sm"
            />
          </Link>
        </div>
        <Image src={Team}  style={{objectFit:"cover"}} className="relative z-30" />
      </div>
      <div className="uppercase text-xl font-bold mt-4">{name}</div>
      <div className="text-sm">{designation}</div>
    </div>
  );
};

export default TeamCard;
