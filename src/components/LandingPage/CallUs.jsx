import Link from "next/link";
import React from "react";

const CallUs = () => {
  return (
    <div className="bg-gradient-to-tr from-[#0059ff99] to-[#a3afc599] px-[5%] py-16 md:py-24">
      <h1 className="uppercase text-4xl  font-bold text-gray-900">
        Ready to take <span>Rig</span> for a spin?
      </h1>
      <div className="flex justify-center space-x-8 items-center mt-12 max-w-7xl m-auto ">
        <div className=" flex flex-col space-y-6 bg-white items-start p-12 border border-gray-300 rounded-xl">
          <h2 className="font-bold text-gray-900 text-2xl ">Schedule a call</h2>
          <p>We are gladly helping companies to get started.</p>
          <Link href={"/"}>
            <div className="px-12 py-4   focus:outline-none   relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100">
              <div className="relative z-20">Explore More</div>
            </div>
          </Link>
        </div>
        <div className=" flex flex-col space-y-6 bg-white items-start p-12 border border-gray-300 rounded-xl">
          <h2 className="font-bold text-gray-900 text-2xl ">Schedule a call</h2>
          <p>We are gladly helping companies to get started.</p>
          <Link href={"/"}>
            <div className="px-12 py-4   focus:outline-none   relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100">
              <div className="relative z-20">Explore More</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
