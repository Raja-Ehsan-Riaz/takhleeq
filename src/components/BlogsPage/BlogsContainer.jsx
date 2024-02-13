"use client";
import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Blog from "./Blog";
import SearchBar from "./SearchBar";
import NewsBox from "./NewsBox";
import CategoryBox from "./CategoryBox";

import blogs from "../../utils/blogs.json";

const BlogsContainer = () => {
  const blogsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;

  const endIndex = startIndex + blogsPerPage;

  const displayedBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-start gap-12 py-28 px-[10%]">
      <div className="flex flex-col justify-start items-center w-[70%] gap-12">
        {displayedBlogs.map((blog, index) => (
          <Blog key={index} {...blog} />
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
      <div className="flex flex-col justify-start items-center w-[30%] gap-8">
        <SearchBar />
        <NewsBox blogs={blogs} />
        <CategoryBox categories={blogs} />
      </div>
    </div>
  );
};

export default BlogsContainer;
