import Link from "next/link";
import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const SMicons = () => {
  return (
    <div className="flex justify-center  items-center gap-[10%] px-[5%] py-28 ">
      <Link href={"#"}>
        <FaSquareFacebook size={60} className="object-contain text-black hover:text-[#8838D3] transition duration-300 " />
      </Link>
      <Link href={"#"}>
        <BiLogoInstagramAlt size={70} className="object-contain text-black hover:text-[#8838D3] transition duration-300 " />
      </Link>
      <Link href={"#"}>
        <IoLogoLinkedin size={60} className="object-contain text-black hover:text-[#8838D3] transition duration-300 " />
      </Link>
      <Link href={"#"} className="bg-black rounded-lg hover:bg-[#8838D3] transition duration-300">
        <RiTwitterXFill
          size={54}
          className="object-contain text-white   p-1 rounded-sm"
        />
      </Link>
    </div>
  );
};

export default SMicons;
