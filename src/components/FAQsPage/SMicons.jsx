import Link from "next/link";
import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const SMicons = () => {
  return (
    <div className="flex justify-center  items-center gap-[10%] px-[5%] py-28 ">
      <Link target="_blank" href={"https://www.facebook.com/takhleeq12"}>
        <FaSquareFacebook size={60} className="object-contain text-black hover:text-[#8838D3] transition duration-300 " />
      </Link>
      <Link target="_blank" href={"https://www.instagram.com/takhleeq.io/"}>
        <BiLogoInstagramAlt size={70} className="object-contain text-black hover:text-[#8838D3] transition duration-300 " />
      </Link>
      <Link target="_blank" href={"https://www.linkedin.com/company/takhleeq-branding/mycompany/verification/"}>
        <IoLogoLinkedin size={60} className="object-contain text-black hover:text-[#8838D3] transition duration-300 " />
      </Link>
     
    </div>
  );
};

export default SMicons;
