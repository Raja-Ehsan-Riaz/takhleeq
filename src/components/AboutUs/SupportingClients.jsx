import Image from "next/image";

import { FaRegCheckCircle } from "react-icons/fa";

// import ITServicesImage from "/public/Images/it-services-section.png";

const SupportingClients = () => {
  return (
    <div className="flex flex-row items-center justify-between px-[5%] py-28">
      <div className="w-[55%]">
        <h2 className="uppercase text-6xl text-left font-semibold">
          Supporting clients in all aspects{" "}
          <span className="text-[#8838D3] border-b-8 border-b-black">team</span>
        </h2>
        <p className="text-lg mt-12">
          We are committed to providing our customers with exceptional service
          while offering our employees the best training.{" "}
        </p>
        <div className="text-lg mt-6">
          We are committed to providing our customers with exceptional service
          while offering our employees the best training. We are committed to
          providing our customers with exceptional service while offering our
          employees the best training.
        </div>
      </div>
      <div className="w-[40%] h-[30rem]  bg-[#7957931A]">
        {/* <Image
          src={ITServicesImage}
          alt="people talking about IT"
          className=""
        /> */}
      </div>
    </div>
  );
};

export default SupportingClients;
