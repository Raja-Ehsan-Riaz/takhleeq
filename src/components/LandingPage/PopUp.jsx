"use client"

import { useState, useEffect } from "react"

const Popup = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Show the popup only once per session, after 3 seconds
		const hasSeenPopup = sessionStorage.getItem("hasSeenPopup")
		if (!hasSeenPopup) {
			const timer = setTimeout(() => {
				setIsVisible(true)
				sessionStorage.setItem("hasSeenPopup", "true")
			}, 3000) // 3000ms = 3 seconds

			// Cleanup the timer if the component unmounts before the timeout
			return () => clearTimeout(timer)
		}
	}, [])

	const closePopup = () => {
		setIsVisible(false)
	}

	return (
		isVisible && (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
				<div className="bg-white  shadow-lg p-8 lg:p-12 w-11/12 max-w-2xl relative">
					{/* Close button */}
					<button
						onClick={closePopup}
						className="absolute top-4 right-4 text-black text-2xl font-bold focus:outline-none"
					>
						×
					</button>

					<h2 className="text-lg font-bold text-center mb-4">
						GET A <span className="text-[#8838D3]">30 MINUTES FREE</span>{" "}
						STRATEGY SESSION TO KICKSTART YOUR{" "}
						<span className="text-black">CAMPAIGNS</span>
					</h2>
					<form className="w-[60%]">
						<div className="space-y-8">
							{/* Name input */}
							<input
								type="text"
								placeholder="Name"
								className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#8838D3]"
								required
							/>
							{/* Email input */}
							<input
								type="email"
								placeholder="Email"
								className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#8838D3]"
								required
							/>
							{/* Phone number input */}

							<input
								type="tel"
								placeholder="+92"
								className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#8838D3]"
								required
							/>

							<input
								type="text"
								placeholder=""
								className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#8838D3]"
								required
							/>
							{/* Dropdown */}
							<select
								className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#8838D3]"
								required
							>
								<option value="">Please Select</option>
								{/* Add options here */}
							</select>
							{/* Checkbox */}
							<div className="flex items-center">
								<input type="checkbox" id="newsletter" className="mr-2" />
								<label htmlFor="newsletter" className="text-sm">
									Subscribe to our newsletter
								</label>
							</div>
							{/* Submit button */}
							<button
								type="submit"
								className="bg-[#8838D3] text-white py-2 px-4 rounded-md w-full hover:bg-red-600 transition"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	)
}

export default Popup
