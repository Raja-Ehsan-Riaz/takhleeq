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
    <div className="flex items-start gap-12 py-28 px-[10%]">
      <div className="flex flex-col justify-start items-start w-[70%] gap-6">
        <BlogImage />
        <h2 className="text-4xl text-left font-bold mt-8">{title}</h2>
        <BlogDetails text={description} />
        <BlogQuote />
        {detail.slice(0, 3).map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl text-left font-bold  my-4">{item.title}</h2>
            <BlogDetails text={item.description} />
          </div>
        ))}
        <div className="w-full h-[30vw] bg-gray-400"></div>
        {detail.slice(3).map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl text-left font-bold  my-4">{item.title}</h2>
            <BlogDetails text={item.description} />
          </div>
        ))}
        <BlogDetails text={bottomline} />
        <div className="font-bold">
          {" "}
          Also Read:{" "}
          <Link target="_blank" className="underline" href={link.address}>
            {link.title}
          </Link>{" "}
        </div>
        <BlogOwner />
      </div>
      <div className="flex flex-col justify-start items-center w-[30%] gap-8">
        <SearchBar />
        <NewsBox blogs={blogs} />
        {/* <CategoryBox categories={blogs} /> */}
      </div>
    </div>
  );
};

export default BlogContainer;
