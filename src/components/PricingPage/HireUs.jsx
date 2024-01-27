import React from "react";
import HireCard from "./HireCard";

const HireUs = () => {
  return (
    <div className="py-28 px-[5%]">
      <h2 className="uppercase text-5xl text-left font-bold text-[#8838D3]">
        How much will YOUR <br />
        <span className="text-black">PROJECT cost?</span>
      </h2>
      <div className=" text-lg mt-8">
        Choose one of the options below to get an accurate price estimation for
        your project:
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <HireCard/>
        <HireCard/>
      </div>
    </div>
  );
};

export default HireUs;
