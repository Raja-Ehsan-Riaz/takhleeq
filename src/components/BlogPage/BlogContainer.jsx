"use client";
import React, { useState } from "react";
import BlogImage from "./BlogImage";
import BlogQuote from "./BlogQuote";
import BlogOwner from "./BlogOwner";
import BlogDetails from "./BlogDetails";
import SearchBar from "../BlogsPage/SearchBar";
import NewsBox from "../BlogsPage/NewsBox";
import CategoryBox from "../BlogsPage/CategoryBox";
import blogs from "../../utils/blogs.json";
import Link from "next/link";
import Image from "next/image";

const BlogContainer = ({
  title,
  description,
  images,
  bottomline,
  date,
  link,
  detail,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-12 py-16 pt-8 lg:py-28 px-4 md:px-[10%]">
      <div className="flex flex-col justify-start items-start lg:w-[70%] gap-6">
        <BlogImage picture={images[0]} />
        <h2 className=" text-3xl md:text-4xl text-center md:text-left font-bold ">{title}</h2>
        <BlogDetails text={description} />
        {/* <BlogQuote /> */}
        {detail.slice(0, 3).map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl text-left font-bold  my-4">{item.title}</h2>
            <BlogDetails text={description} />
          </div>
        ))}
        <div className={`w-full h-[15rem] ${title==="Consistency and Focus Can Beat Every Hurdle"?"md:h-[40vw]":"md:h-[30vw]"}  bg-gray-400 relative`}>
          <Image
            src={`/Images/Blogs/${title==="Consistency and Focus Can Beat Every Hurdle"?images[0]:images[1]}`}
            alt=""
            fill
            className={`absolute ${title==="Consistency and Focus Can Beat Every Hurdle"?"object-contain":""}`}
          />
        </div>
        {detail.slice(3).map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl text-left font-bold  my-4">{item.title}</h2>
            <BlogDetails text={item.description} />
          </div>
        ))}
        <BlogDetails text={bottomline} />
        <div className="font-bold">
          {" "}
          {link.address.length>0 && "Also Read:" }
          {" "}
          <Link target="_blank" className="underline" href={link.address}>
            {link.title}
          </Link>{" "}
        </div>
        {/* <BlogOwner /> */}
      </div>
      <div className="flex flex-col justify-start items-center w-full lg:w-[30%] gap-8">
        {/* <SearchBar /> */}
        <NewsBox blogs={blogs} title={title} />
        {/* <CategoryBox categories={blogs} /> */}
      </div>
    </div>
  );
};

export default BlogContainer;
