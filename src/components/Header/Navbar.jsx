"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TakhleeqLogo from "/public/Takhleeq/logo-main.svg";
import TakhleeqLogoWhite from "/public/Takhleeq/logo-full-white.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
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
      href: "/contact-us",
      name: "Contact Us",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full justify-between mx-auto lg:items-center lg:flex overflow-x-hidden  ${
        isNavbarFixed
          ? `fixed bg-white border-b-2 border-[#8838D3] nav-in`
          : `${
              pathname === "/"
                ? "fixed bg-transparent text-white pt-2"
                : "relative bg-white border-b-2 border-[#8838D3]"
            }`
      } fixed z-50  overflow-y-hidden  
        ${navbar ? "px-0 bg-white" : " px-4 lg:px-8 "}  
      `}
    >
      <div
        className={`flex items-center justify-between lg:block z-20 ${
          navbar ? "px-8 " : ""
        }`}
      >
        <Link href="/" className="z-20">
          <Image
            src={
              isNavbarFixed
                ? TakhleeqLogo
                : pathname === "/"
                ? navbar
                  ? TakhleeqLogo
                  : TakhleeqLogoWhite
                : TakhleeqLogo
            }
            alt="sparkleo logo"
            quality={100}
            className={` ${
              isNavbarFixed
                ? " w-[180px] lg:w-[280px]"
                : pathname === "/"
                ? "w-[140px] lg:w-[200px] lg:ml-8"
                : "w-[180px] lg:w-[280px]"
            } `}
            onClick={() => setNavbar(false)}
          />
        </Link>
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="lg:hidden z-20">
          <button
            className="p-2 outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <RiCloseLine size={40} className="text-[#8838D3]" />
            ) : (
              <RiMenu3Line
                size={40}
                className={` ${
                  isNavbarFixed ? "text-[#8838D3]" : pathname === "/" ? "text-white" : "text-[#8838D3]"
                } `}
              />
            )}
          </button>
        </div>
      </div>

      <div className="z-20">
        <div
          className={`flex lg:justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
            navbar ? " lg:p-0 block" : "hidden"
          }`}
        >
          <ul
            className={`h-screen w-full lg:h-auto lg:items-center justify-center lg:flex md:gap-6 lg:gap-10 text-xl lg:text-base font-light lg:font-medium transition-all duration-500 px-[10%] lg:px-0`}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className={`py-4 text-left lg:text-center my-2 border-b-2 border-[#8838D3]b-[#6A4DBB]  lg:hover:text-[#6A4DBB] lg:border-b-0 ${
                  pathname === link.href ? "text-[#6A4DBB] font-bold lg:font-medium" : `text-[#6A4DBB] ${isNavbarFixed ?"lg:text-black": pathname==='/'?"lg:text-white":"lg:text-black"} `
                } `}
              >
                <Link href={link.href} onClick={() => setNavbar(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" hidden lg:flex flex-row items-center mr-8">
        <IoIosChatbubbles size={40} className="text-[#8838D3]" />
        <div className="flex flex-col ml-2">
          <p className="text-sm">Call Us On</p>
          <p className="text-md font-medium">0333-8483016</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
