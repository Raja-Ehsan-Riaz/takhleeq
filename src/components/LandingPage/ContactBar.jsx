"use client"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowUp } from "react-icons/md"
import {
	FaWhatsapp,
	FaFacebookMessenger,
	FaPhone,
	FaEnvelope,
	FaTimes,
} from "react-icons/fa"
import { AiFillMessage } from "react-icons/ai"

import Link from "next/link"

const ContactBar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}
	const [isScrolled, setIsScrolled] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<>
			<div className="fixed left-5 lg:left-10  bottom-6 lg:bottom-10 z-20 flex flex-col items-center gap-2">
				{/* Main Toggle Button */}
				{/* Contact Icons */}
				<div
					className={`flex flex-col items-center gap-2 transition-all duration-500 ${
						isOpen ? "opacity-100 visible" : "opacity-0 invisible"
					}`}
				>
					<Link
						href="mailto:info@takhleeq.ai"
						className="p-4 bg-red-500 rounded-full text-white shadow-lg transition-all duration-300"
						style={{ transform: isOpen ? "translateY(0)" : "translateY(60px)" }}
					>
						<FaEnvelope size={26} />
					</Link>
				</div>
				<div
					onClick={handleToggle}
					style={{ cursor: "pointer" }}
					className={`p-3 rounded-full z-30 bg-[#8838D3] text-white shadow-lg transition-transform duration-300 ${
						isOpen ? "rotate-90" : ""
					}`}
				>
					{isOpen ? <FaTimes size={30} /> : <AiFillMessage size={30} />}
				</div>
			</div>
			{!isScrolled ? (
				""
			) : (
				<button
					onClick={scrollToTop}
					className={`p-3 fixed right-5 lg:right-10 bottom-6 z-30 lg:bottom-10 shadow-lg  rounded-full bg-gray-400 opacity-70 `}
				>
					<MdKeyboardArrowUp size={30} color="white" />
				</button>
			)}
		</>
	)
}

export default ContactBar
