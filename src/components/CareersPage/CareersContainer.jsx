"use client";
import React, { useState } from "react";
import Career from "./Career";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import CareersData from "../../utils/careers.json";

const CareersContainer = () => {
  const careersPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CareersData.length / careersPerPage);

  const startIndex = (currentPage - 1) * careersPerPage;

  const endIndex = startIndex + careersPerPage;

  const displayedCareers = CareersData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({
        top: 700,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-[5%] py-28">
      <div className="uppercase text-4xl text-left font-bold">Careers</div>
      <div className="flex flex-col justify-center items-center gap-8 my-12">
        {displayedCareers.map((career) => (
          <Career {...career} key={career.id} />
        ))}

        <div className="flex items-center text-[#8838D3] mt-6 ">
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
    </div>
  );
};

export default CareersContainer;
