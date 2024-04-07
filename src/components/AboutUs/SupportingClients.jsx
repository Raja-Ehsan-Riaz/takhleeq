import Image from "next/image";
import ITServicesImage from "/public/Images/building.png";

const SupportingClients = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-[5%] py-28">
      <div className="lg:w-[55%]">
        <h2 className="uppercase text-5xl lg:text-6xl text-left font-semibold">
          Transforming Visions Into Vibrant {" "}
          <span className="text-[#8838D3] border-b-8 border-b-black">
            Brands
          </span>
        </h2>
        <p className="text-lg mb-12 lg:mb-0 mt-12">
          We provide exceptional customer service, working closely with our
          clients to understand their vision and bring it to life. Choose
          takhleeq.io for your branding needs, and experience the difference
          that our expertise and passion for innovation can make.
        </p>
      </div>
      <div className=" w-full lg:w-[40%] h-[30rem] relative">
        <Image
          src={ITServicesImage}
          alt="people talking about IT"
          className=""
          fill
        />
      </div>
    </div>
  );
};

export default SupportingClients;
