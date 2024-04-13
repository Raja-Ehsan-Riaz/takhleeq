import React from "react";
import HireCard from "./HireCard";
import Link from "next/link";

const HireUs = () => {

  const data = [
    {title:"Hire Our Team",text:"Hire the team at takhleeq.io, to elevate your brand with cutting-edge design, strategic branding, and unparalleled creative solutions."},
    {title:"Rebuild Your Brand",text:"Rebuild your brand with takhleeq.io. We will converge visionary design and strategic branding to transform your identity into a compelling and memorable narrative"},
  ]

  return (
    <div className="py-28 px-[5%]">
      <div className="flex justify-between items-start">
        <h2 className="uppercase text-5xl text-left font-bold text-[#8838D3]">
          How much will YOUR <br />
          <span className="text-black">PROJECT cost?</span>
        </h2>
        <Link href="/pricing-form">
          <button className="relative px-12 py-4 bg-[#8838D3] text-white font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100 hover:border hover:border-[#8838D3]">
            <div className="relative z-20">Hire Us</div>
          </button>
        </Link>
      </div>

      <div className=" text-lg mt-8">
        Choose one of the options below to get an accurate price estimation for
        your project:
      </div>
      <div className="flex flex-row justify-evenly items-center flex-wrap">
        <HireCard src="/Icons&Symbols/pricing/hire.png" heading={data[0].title} text={data[0].text} />
        <HireCard src="/Icons&Symbols/pricing/brand.png"  heading={data[1].title} text={data[1].text} />
      </div>
    </div>
  );
};

export default HireUs;
