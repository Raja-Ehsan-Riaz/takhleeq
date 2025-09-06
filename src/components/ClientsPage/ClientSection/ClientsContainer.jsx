"use client"
import { ClientCard } from "./ClientCard"
import clients from "../../../utils/clientsdetails.json"
import { useState } from "react"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"

const ClientsContainer = () => {
	const clientsPerPage = 4

	const [currentPage, setCurrentPage] = useState(1)

	const totalPages = Math.ceil(
		clients.filter(client => client.description.length !== 0).length /
			clientsPerPage
	)

	const startIndex = (currentPage - 1) * clientsPerPage

	const endIndex = startIndex + clientsPerPage

	const displayedClients = clients
		.filter(client => client.description.length !== 0)
		.slice(startIndex, endIndex)

	const handlePageChange = newPage => {
		if (newPage >= 1 && newPage <= totalPages) {
			setCurrentPage(newPage)
			window.scrollTo({
				top: 1200,
				behavior: "smooth",
			})
		}
	}
	return (
		<div className="py-16 md:py-28 px-[5%]">
			<h2 className="uppercase text-4xl md:text-5xl text-black  font-bold text-center">
				WE CRAFT COMPANIES THAT ARE <br />
				BEST IN BUSINESS
			</h2>
			<div className="mt-12 flex flex-wrap justify-center items-stretch gap-8">
				{displayedClients.map((client, index) => (
					<ClientCard key={index} {...client} />
				))}
			</div>
			<div className="flex items-center justify-center text-[#8838D3] mt-12 ">
				<IoIosArrowDropleft
					size={50}
					className="cursor-pointer"
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				/>
				{[...Array(totalPages)].map((_, index) => (
					<div
						key={index}
						className={`mx-2 cursor-pointer text-lg ${
							currentPage === index + 1 ? "font-bold" : ""
						}`}
						onClick={() => handlePageChange(index + 1)}
					>
						{index + 1}
					</div>
				))}
				<IoIosArrowDropright
					size={50}
					className="cursor-pointer"
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				/>
			</div>
		</div>
	)
}

export default ClientsContainer
