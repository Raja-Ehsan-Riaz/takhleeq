import Image from "next/image";

import { FaRegCheckCircle } from "react-icons/fa";

import ITServicesImage from "/public/Images/it-services-section.png";

const ITservices = () => {
  return (
    <div className="flex flex-row items-center justify-between  px-[5%] py-28">
      <div className="w-[55%]">
        <h2 className="uppercase text-6xl text-left font-semibold">
          One-window Stop <br /> to Boost{" "} <br />
          <span className="text-[#8838D3] border-b-8 border-b-black">
            Your Business
          </span>
        </h2>
        <p className="text-lg mt-12">
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
          <div className="flex flex-row items-start mb-6">
            <FaRegCheckCircle size={20} color="#8838d3" className="mt-1" />
            <p className="text-lg ml-3">
              Targeted marketing strategies to reach and engage your ideal
              customers.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[45%]">
        <Image
          src={ITServicesImage}
          alt="people talking about IT"
          className=""
        />
      </div>
    </div>
  );
};

export default ITservices;
