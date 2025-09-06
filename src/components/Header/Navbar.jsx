"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import TakhleeqLogo from "/public/Takhleeq/logo-primary.png"
import TakhleeqLogoWhite from "/public/Takhleeq/logo-full-white.svg"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { IoIosChatbubbles } from "react-icons/io"
import { usePathname } from "next/navigation"

function NavBar() {
	const pathname = usePathname()
	const [navbar, setNavbar] = useState(false)
	const [isNavbarFixed, setIsNavbarFixed] = useState(false)
	const links = [
		{
			id: 2,
			href: "/about-us",
			name: "About",
		},
		{
			id: 3,
			href: "/services",
			name: "Services",
		},
		{
			id: 4,
			href: "/clients",
			name: "Brands",
		},

		{
			id: 5,
			href: "/pricing",
			name: "Pricing",
		},
		{
			id: 7,
			href: "/blogs",
			name: "Insights",
		},
		{
			id: 7,
			href: "/careers",
			name: "Careers",
		},
		{
			id: 8,
			href: "/contact-us",
			name: "Contact",
		},
	]

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 80) {
				setIsNavbarFixed(true)
			} else {
				setIsNavbarFixed(false)
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<nav
			className={`w-full justify-between mx-auto lg:items-center lg:flex overflow-x-hidden  ${
				isNavbarFixed
					? `fixed bg-white lg:top-2 lg:left-2 lg:rounded-full lg:w-[99%] shadow-lg  nav-in`
					: `${
							pathname === "//"
								? "fixed bg-transparent text-white pt-2"
								: "relative bg-white  "
					  }`
			} fixed z-50 shadow-md  overflow-y-hidden  
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
								: pathname === "//"
								? navbar
									? TakhleeqLogo
									: TakhleeqLogoWhite
								: TakhleeqLogo
						}
						alt="sparkleo logo"
						quality={100}
						className={` ${
							isNavbarFixed
								? " w-[180px] lg:w-[190px]"
								: pathname === "/"
								? "w-[140px] lg:w-[190px] "
								: "w-[180px] lg:w-[190px]"
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
									isNavbarFixed
										? "text-[#8838D3]"
										: pathname === "//"
										? "text-white"
										: "text-[#8838D3]"
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
								className={`py-4 text-left lg:text-center my-2  border-[#8838D3]b-[#6A4DBB]  lg:hover:text-[#6A4DBB] lg:border-b-0 ${
									pathname === link.href
										? "text-[#6A4DBB] font-bold lg:font-medium"
										: `text-[#6A4DBB] ${
												isNavbarFixed
													? "lg:text-black"
													: pathname === "//"
													? "lg:text-white"
													: "lg:text-black"
										  } `
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
		</nav>
	)
}

export default NavBar
