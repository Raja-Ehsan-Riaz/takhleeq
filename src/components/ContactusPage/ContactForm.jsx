import Link from "next/link";
import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLocation, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const ContactForm = (props) => {
  return (
    <div className="flex flex-col justify-center items-center px-[5%] py-28">
      <h2 className="uppercase text-4xl  font-bold text-center">
        get in{" "}
        <span className="text-[#8838D3] border-b-8 border-b-black">touch</span>
      </h2>
      <h2 className=" text-lg  text-center mt-8">
        Drop us a line! We are here to answer your questions 24/7.
      </h2>
      <div className=" w-full lg:w-[70%] flex flex-col md:flex-row mt-6 shadow-xl">
        <div className="flex flex-col justify-between items-start gap-4 text-white md:w-1/2 bg-[#6A4EB8] p-8">
          <div className="text-lg font-bold ">Send us a message</div>
          <input
            type="text"
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
            placeholder="Email"
          />
          <input
            type="number"
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
            placeholder="Phone Number"
          />
          <textarea
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0 h-[10rem]"
            placeholder="Message"
          />
        </div>
        <div className=" flex flex-col justify-start items-start gap-6 text-white md:w-1/2 p-8  bg-[#79579D3A]">
          <h2 className=" text-lg  font-bold text-center text-[#8838D3]">
            Contact{" "}
            <span className=" text-black border-b-4 border-b-[#8838D3]">
              Details
            </span>
          </h2>
          <div className="flex flex-col gap-2 justify-center items-start text-black mt-2">
            <div className="flex flex-row justify-start items-center gap-4">
              <FaPhone size={25} />
              <div className="ml-1">0333-8483016</div>
            </div>
            <div className="flex flex-row justify-start items-center gap-4">
              <IoMailOutline size={30} />
              <div>hr@takhleeq.io</div>
            </div>
          </div>
          <h2 className=" text-lg  font-bold text-center text-[#8838D3]">
            Office{" "}
            <span className=" text-black border-b-4 border-b-[#8838D3]">
              Location
            </span>
          </h2>
          <div className="flex flex-col justify-center items-start text-black mt-2">
            <div className="flex flex-row justify-start items-start gap-4">
              <IoLocation size={35} />
              <div>GRC, SEECS, NUST, Sector H-12, Islamabad</div>
            </div>
          </div>
          <h2 className=" text-lg  font-bold text-center text-[#8838D3]">
            Social{" "}
            <span className=" text-black border-b-4 border-b-[#8838D3]">
              Media
            </span>
          </h2>
          <div className="flex flex-row justify-evenly items-center w-full text-[#8838D3] mt-2">
            <Link href={"#"}>
              <FaSquareFacebook size={35} className="object-contain" />
            </Link>
            <Link href={"#"}>
              <BiLogoInstagramAlt size={40} className="object-contain" />
            </Link>
            <Link href={"#"}>
              <IoLogoLinkedin size={35} className="object-contain" />
            </Link>
            <Link href={"#"} className="bg-[#8838D3] rounded-md">
              <RiTwitterXFill
                size={30}
                className="object-contain text-gray-300 p-1 rounded-sm"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <button
          type="submit"
          className=" px-12 py-4 mt-4  focus:outline-none   relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100"
        >
          <div className="relative z-20">Submit</div>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
