import Image from "next/image";

import { FaRegCheckCircle } from "react-icons/fa";

// import ITServicesImage from "/public/Images/it-services-section.png";

const SupportingClients = () => {
  return (
    <div className="flex flex-row items-center justify-between px-[5%] py-28">
      <div className="w-[55%]">
        <h2 className="uppercase text-6xl text-left font-semibold">
          Transforming Visions Into Vibrant <br />
          <span className="text-[#8838D3] border-b-8 border-b-black">
            Brands
          </span>
        </h2>
        <p className="text-lg mt-12">
          We provide exceptional customer service, working closely with our
          clients to understand their vision and bring it to life. Choose
          takhleeq.io for your branding needs, and experience the difference
          that our expertise and passion for innovation can make.
        </p>
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
