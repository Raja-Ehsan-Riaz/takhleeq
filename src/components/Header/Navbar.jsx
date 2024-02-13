"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import TakhleeqLogo from "/public/Takhleeq/logo-main.svg";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      className={`w-full justify-between mx-auto md:items-center md:flex overflow-x-hidden overflow-y-hidden shadow-lg 
        ${navbar ? "px-0" : "px-8"}  
      `}
    >
      <div
        className={`flex items-center justify-between py-2 md:block z-20 ${
          navbar ? "px-8 " : ""
        }`}
      >
        <Link href="/" className="z-20">
          <Image
            src={TakhleeqLogo}
            alt="sparkleo logo"
            quality={100}
            className="w-[300px]"
            onClick={() => setNavbar(false)}
          />
        </Link>
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="md:hidden z-20">
          <button
            className="p-2 outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <RiCloseLine size={40} color="#6A4DBB" />
            ) : (
              <RiMenu3Line size={40} color="#6A4DBB" />
            )}
          </button>
        </div>
      </div>

      <div className="z-20">
        <div
          className={`flex md:justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? " md:p-0 block" : "hidden"
          }`}
        >
          <ul
            className={`h-screen w-full md:h-auto md:items-center justify-center md:flex md:gap-6 lg:gap-10 text-xl md:text-base font-light md:font-medium transition-all duration-500 px-[10%] md:px-0`}
          >
            <li
              className={`py-4 text-left md:text-center my-4 border-b border-b-[#6A4DBB] hover:text-[#6A4DBB] md:border-b-0 `}
            >
              <Link href="/about-us" onClick={() => setNavbar(false)}>
                About Us
              </Link>
            </li>
            <li
              className={`py-4 text-left md:text-center my-4 border-b border-b-[#6A4DBB] hover:text-[#6A4DBB]   md:border-b-0  `}
            >
              <Link href="/services" onClick={() => setNavbar(false)}>
                Services
              </Link>
            </li>
            <li
              className={`py-4 text-left md:text-center my-4 border-b border-b-[#6A4DBB] hover:text-[#6A4DBB]   md:border-b-0 `}
            >
              <Link href="/about-us" onClick={() => setNavbar(false)}>
                Projects
              </Link>
            </li>
            <li
              className={`py-4 text-left md:text-center my-4 border-b border-b-[#6A4DBB] hover:text-[#6A4DBB] md:border-b-0`}
            >
              <Link href="/pricing" onClick={() => setNavbar(false)}>
                Pricing
              </Link>
            </li>
            <li
              className={`py-4 text-left md:text-center my-4 border-b border-b-[#6A4DBB] hover:text-[#6A4DBB] md:border-b-0`}
            >
              <Link href="/" onClick={() => setNavbar(false)}>
                News & Updates
              </Link>
            </li>
            <li
              className={`py-4 text-left md:text-center my-4 hidden md:block hover:text-[#6A4DBB] `}
            >
              <Link href="/contact-us" onClick={() => setNavbar(false)}>
                Contact Us
              </Link>
            </li>

            <Link
              href="/"
              className="block md:hidden py-4 px-4 text-center mx-[10%] mt-16 bg-[#6A4DBB] text-white"
              onClick={() => setNavbar(false)}
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>

      <div className=" hidden md:flex flex-row items-center">
        <IoIosChatbubbles size={40} color="#6A4DBB" />
        <div className="flex flex-col ml-2">
          <p className="text-sm">CALL ANYTIME</p>
          <p className="text-md font-medium">0333-1234567</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
