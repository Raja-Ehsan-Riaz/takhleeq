import Image from "next/image";
import ITServicesImage from "/public/Images/building.png";

const SupportingClients = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between px-[5%] lg:px-[0%] lg:pl-[5%] ">
      <div className="lg:w-[55%] py-28">
        <h2 className="uppercase text-5xl  text-left font-bold">
          Transforming <span className="text-[#8838D3] ">Visions </span> <br />  Into   Vibrant{" "}
            Brands
        </h2>
        <p className="text-lg mb-12 lg:mb-0 mt-6">
          takhleeq.io is not just another branding company in Pakistan. What
          sets us apart is our relentless focus on research and development. Our
          team is always exploring new trends, technologies, and insights to
          deliver innovative branding solutions that drive results. We offer the
          most comprehensive suite of services under one roof, including brand
          identity, creative design, web services, digital marketing, content
          creation, media services, and UI/UX design. <br /> But what truly makes us
          the best in Pakistan is our commitment to client satisfaction. We
          understand that every business has unique needs and challenges, and we
          take a client-centric approach to deliver bespoke branding strategies
          that meet their objectives. Our rates are affordable, and we never
          compromise on quality. 
        </p>
      </div>
      <div className=" w-full lg:w-[40%] h-[30rem] lg:h-auto relative">
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
