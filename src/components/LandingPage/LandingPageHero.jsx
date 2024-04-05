"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { IoMdSearch } from "react-icons/io";

const LandingPagehero = () => {
  const [divs, setDivs] = useState([false, false, false, false]);

  useEffect(() => {
    const timeouts = [0, 250, 500, 1000]; // Delays for each div appearance
    timeouts.forEach((timeout, index) => {
      setTimeout(() => {
        setDivs((prevDivs) => {
          const newDivs = [...prevDivs];
          newDivs[index] = true;
          return newDivs;
        });
      }, timeout);
    });
  }, []);

  return (
    <div className="w-full h-[89vh] flex justify-center items-center  text-white relative overflow-hidden">
      <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src="/Images/Heros/landing.png"
          className=" absolute z-0"
        />
      <div className="flex justify-center items-center absolute z-30 top-0 left-0 w-full h-full bg-[#7936b7]/80 ">
        <div className="text-center w-[40%]">
          <h1 className="text-8xl font-bold">takhleeq</h1>
          <p className="text-2xl ">Ultimate Branding Experience</p>
          <div className="flex flex-row bg-white rounded-md items-center my-4">
            <IoMdSearch size={25} color="#888888" className="mx-4 my-2" />
            <form className="w-full my-2 mx-4">
              <input
                type="text"
                id="top-search"
                name="top-search"
                placeholder="Search"
                className="w-full text-black text-md outline-none p-1"
              ></input>
            </form>
          </div>
          <div className="mt-12">
            <Link href="/services">
              <button className="relative  bg-transparent px-12 py-5 bg-white text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                <div className="relative z-20">Make Brand</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagehero;
