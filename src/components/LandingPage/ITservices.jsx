import Image from "next/image";

import { FaRegCheckCircle } from "react-icons/fa";

import ITServicesImage from "/public/Images/target.png";

const ITservices = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  px-[5%]  lg:px-[0%] lg:pl-[5%] py-16  md:py-28 lg:py-0   ">
      <div className="lg:w-[55%] lg:pr-8 lg:py-28 py-0">
        <h2 className="uppercase text-4xl md:text-5xl text-left font-bold">
          One-window Stop <br /> to Boost <br />
          <span className="text-[#8838D3]">Your Business</span>
        </h2>
        <p className="text-lg mt-6">
          Looking to give your business a boost? With takhleeq.io, you can
          streamline your business growth and achieve your goals with
          confidence.{" "}
        </p>
        <div className="ml-6 mt-10">
          <div className="flex flex-row items-start mb-6">
            <FaRegCheckCircle size={20} color="#8838d3" className="mt-1" />
            <p className="text-lg ml-3">
              Strategic branding expertise to define and strengthen your brand
              identity.
            </p>
          </div>
          <div className="flex flex-row items-start mb-6">
            <FaRegCheckCircle size={20} color="#8838d3" className="mt-1" />
            <p className="text-lg ml-3">
              Captivating design solutions that leave a lasting impression on
              your audience.
            </p>
          </div>
          <div className="flex flex-row items-start mb-12 lg:mb-0">
            <FaRegCheckCircle size={20} color="#8838d3" className="mt-1" />
            <p className="text-lg ml-3">
              Targeted marketing strategies to reach and engage your ideal
              customers.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full md:h-[30rem] lg:w-[45%] lg:h-auto">
        <Image src={ITServicesImage} className="float" alt="people talking about IT" />
      </div>
    </div>
  );
};

export default ITservices;
