"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TakhleeqLogo from "/public/Takhleeq/logo-main.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const links = [
    {
      id: 2,
      href: "/about-us",
      name: "About Us",
    },
    {
      id: 4,
      href: "/services",
      name: "Services",
    },
    {
      id: 3,
      href: "/clients",
      name: "Clients",
    },
    {
      id: 3,
      href: "/careers",
      name: "Careers",
    },
    {
      id: 6,
      href: "/pricing",
      name: "Pricing",
    },
    {
      id: 6,
      href: "/blogs",
      name: "News & Updates",
    },
    {
      id: 6,
      href: "/FAQs",
      name: "Faqs",
    },
    {
      id: 6,
      href: "/contact-us",
      name: "Contact Us",
    },
  ];
  return (
    <nav
      className={`w-full justify-between mx-auto md:items-center md:flex overflow-x-hidden fixed z-50 bg-white overflow-y-hidden shadow-lg 
        ${navbar ? "px-0" : "px-8"}  
      `}
    >
      <div
        className={`flex items-center justify-between md:block z-20 ${
          navbar ? "px-8 " : ""
        }`}
      >
        <Link href="/" className="z-20">
          <Image
            src={TakhleeqLogo}
            alt="sparkleo logo"
            quality={100}
            className="w-[280px]"
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
            {links.map((link,index) => (
              <li key={index}
                className={`py-4 text-left md:text-center my-2 border-b border-b-[#6A4DBB] hover:text-[#6A4DBB] md:border-b-0 ${pathname===link.href?"text-[#6A4DBB]":""} `}
              >
                <Link href={link.href} onClick={() => setNavbar(false)}>
                 {link.name}
                </Link>
              </li>
            ))}

          
          </ul>
        </div>
      </div>

      <div className=" hidden md:flex flex-row items-center">
        <IoIosChatbubbles size={40} color="#6A4DBB" />
        <div className="flex flex-col ml-2">
          <p className="text-sm">CALL ANYTIME</p>
          <p className="text-md font-medium">0333-8483016</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
