import Link from "next/link";
import Image from "next/image";

import LogoFullWhite from "/public/Takhleeq/logo-full-white.svg";

import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-b from-[#6A4EB8] to-[#B418FB] text-white ">
      <div className="flex flex-row gap-24 pt-28 pb-16 mx-[10%]">
        <div className="flex flex-col">
          <Link href={"#"}>
            <h3 className="mb-4 text-2xl font-semibold">About</h3>
          </Link>
          <Link href={"#"} className="mb-2">
            What We Offer
          </Link>
          <Link href={"#"} className="mb-2">
            Our Team
          </Link>
          <Link href={"#"} className="mb-2">
            Careers
          </Link>
          <Link href={"#"} className="mb-2">
            Press
          </Link>
        </div>
        <div className="flex flex-col">
          <Link href={"#"}>
            <h3 className="mb-4 text-2xl font-semibold">Support</h3>
          </Link>
          <Link href={"#"} className="mb-2">
            Privacy Policy
          </Link>
          <Link href={"#"} className="mb-2">
            License Agreement
          </Link>
          <Link href={"#"} className="mb-2">
            Terms & Conditions
          </Link>
          <Link href={"#"} className="mb-2">
            FAQs
          </Link>
          <Link href={"#"} className="mb-2">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col">
          <Link href={"#"}>
            <h3 className="mb-4 text-2xl font-semibold">News & Updates</h3>
          </Link>
        </div>
        <div className="ml-auto">
          <Image
            src={LogoFullWhite}
            alt="Takhleeq Logo"
            className="w-[300px] h-auto object-contain"
          />
          <div className="flex flex-row justify-between mt-3 items-center pl-[10px]">
            <Link href={"#"}>
              <FaSquareFacebook
                size={35}
                color="#ffffff"
                className="object-contain"
              />
            </Link>
            <Link href={"#"}>
              <BiLogoInstagramAlt
                size={40}
                color="#ffffff"
                className="object-contain"
              />
            </Link>
            <Link href={"#"}>
              <IoLogoLinkedin
                size={35}
                color="#ffffff"
                className="object-contain"
              />
            </Link>
            <Link href={"#"}>
              <RiTwitterXFill
                size={30}
                color="#B418FB"
                className="object-contain bg-white p-1 rounded-sm"
              />
            </Link>
          </div>
          <div className="pl-[10px]">
            <h4 className="text-xl uppercase mt-6 mb-2 text-left font-medium">
              Subscribe to Our newsletter
            </h4>
            <div className=" bg-black text-white rounded-md items-center my-2">
              <form className="w-full my-2 mx-4 flex flex-row">
                <input
                  type="email"
                  id="newsletter-email"
                  name="newsletter-email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full text-black text-sm outline-none bg-black text-white placeholder:text-white"
                ></input>

                <button
                  type="submit"
                  className="px-6 rounded-r-md text-sm py-3 bg-white text-black"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white px-[10%] py-4">
        <p>© All rights reserved. Takhleeq Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
