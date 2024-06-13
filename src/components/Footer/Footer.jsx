"use client";
import Link from "next/link";
import Image from "next/image";
import services from "../../utils/services.json";
import LogoFullWhite from "/public/Takhleeq/logo-full-white.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" bg-[#8838D3] B] text-white ">
      <div className="flex flex-col-reverse  items-start lg:flex-row gap-12 lg:gap-28 pt-20 lg:pt-28 pb-16 mx-[10%]">
        <div className="flex flex-col mt-3">
          <Link href={"#"}>
            <h3 className="mb-4 text-2xl font-semibold">About</h3>
          </Link>
          <Link href={"/about-us"} className="mb-2">
            What We Offer
          </Link>
          <Link href={"/about-us/#team"} className="mb-2">
            Our Team
          </Link>
          <Link href={"/about-us/#testimonials"} className="mb-2">
            Testmonials
          </Link>
          <Link href={"/about-us/#tdbr"} className="mb-2">
            TDBR
          </Link>
          <div className="lg:hidden flex-row gap-8 justify-evenly mt-6 flex items-center ">
            <Link target="_blank" href={"https://www.facebook.com/takhleeq12"}>
              <FaSquareFacebook
                size={35}
                color="#ffffff"
                className="object-contain"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/takhleeq.io/"}
            >
              <BiLogoInstagramAlt
                size={40}
                color="#ffffff"
                className="object-contain"
              />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/company/takhleeq-branding/mycompany/verification/"
              }
            >
              <IoLogoLinkedin
                size={35}
                color="#ffffff"
                className="object-contain"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <Link href={"#"}>
            <h3 className="mb-4 text-2xl font-semibold">Services</h3>
          </Link>
          {services.slice(0, 4).map((service, idx) => (
            <Link
              key={idx}
              href={`/service/${service.title.replace(/\//g, "&")}`}
              className="mb-2"
            >
              {service.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col mt-3">
          <Link href={"#"}>
            <h3 className="mb-4 text-2xl font-semibold">Resources</h3>
          </Link>

          <Link href={"/FAQs"} className="mb-2">
            FAQS
          </Link>

          <Link href={"/careers"} className="mb-2">
            Careers
          </Link>

          <Link href={"/blogs"} className="mb-2">
            News
          </Link>

          <Link href={"/pricing"} className="mb-2">
            Pricing
          </Link>
        </div>
        <div className="lg:ml-auto">
          <Image
            src={LogoFullWhite}
            alt="Takhleeq Logo"
            className="w-[300px] h-auto object-contain"
          />

          <div className="lg:pl-[10px]">
            <h4 className="text-xl  uppercase mt-6 mb-8 lg:mb-2 text-center lg:text-left font-medium">
              Subscribe to Our newsletter
            </h4>
            <div className=" bg-black text-white rounded-md items-center my-2 pr-4  ">
              <form className="w-full my-2 mx-4 flex flex-row jus">
                <input
                  type="email"
                  id="newsletter-email"
                  name="newsletter-email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full  text-sm outline-none bg-black text-white placeholder:text-white"
                ></input>

                <button
                  type="submit"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Subscribed succesfuly");
                  }}
                  className="px-6 rounded-r-md text-sm py-3 bg-white text-black"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="lg:flex flex-row justify-evenly mt-6 hidden items-center lg:pl-[10px]">
          <Link target="_blank" href={"https://www.facebook.com/takhleeq12"}>
              <FaSquareFacebook
                size={35}
                color="#ffffff"
                className="object-contain"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/takhleeq.io/"}
            >
              <BiLogoInstagramAlt
                size={40}
                color="#ffffff"
                className="object-contain"
              />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/company/takhleeq-branding/mycompany/verification/"
              }
            >
              <IoLogoLinkedin
                size={35}
                color="#ffffff"
                className="object-contain"
              />
            </Link>
          
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

// bg-gradient-to-b from-[#6A4EB8] to-[#B418F
