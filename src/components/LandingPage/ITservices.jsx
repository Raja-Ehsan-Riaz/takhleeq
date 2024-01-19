import Image from "next/image";

import { FaRegCheckCircle } from "react-icons/fa";

import ITServicesImage from "/public/Images/it-services-section.png";

const ITservices = () => {
  return (
    <div className="flex flex-row px-[5%] py-28">
      <div className="w-[55%]">
        <h2 className="uppercase text-6xl text-left font-semibold">
          IT Services Management help your{" "}
          <span className="text-[#8838D3] border-b-8 border-b-black">
            team succeed
          </span>
        </h2>
        <p className="text-lg mt-12">
          We are committed to providing our customers with exceptional service
          while offering our employees the best training.{" "}
        </p>
        <div className="ml-6 mt-6">
          <div className="flex flex-row items-center mb-3">
            <FaRegCheckCircle size={20} color="#8838d3" />
            <p className="text-lg ml-3">
              Focusing on social, emotional, and spiritual growth
            </p>
          </div>
          <div className="flex flex-row items-center mb-3">
            <FaRegCheckCircle size={20} color="#8838d3" />
            <p className="text-lg ml-3">
              Embracing EdTech/AI for impactful learning
            </p>
          </div>
          <div className="flex flex-row items-center mb-3">
            <FaRegCheckCircle size={20} color="#8838d3" />
            <p className="text-lg ml-3">
              Focusing on social, emotional, and spiritual growth
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
