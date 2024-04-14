import Image from "next/image";
import Link from "next/link";
import askari from "/public/portfolio/Askari Bank/0.jpg";
import fss from "/public/portfolio/Fauji Security Services FSS/1.JPG";
import el from "/public/portfolio/elearning.jpg";
import sentinal from "/public/portfolio/sentinal.jpg";
import toyota from "/public/portfolio/Toyota G.T Motors Pvt Limited/3.jpg";
import truid from "/public/portfolio/truid.png";
import { FaArrowRight } from "react-icons/fa6";

const WorkShowcase = () => {
  return (
    <div className="  py-20 text-center flex flex-col items-start">
      <h2 className="text-[#8838D3] text-left text-4xl uppercase font-bold mb-4 px-[5%]">
        Work{" "}
        <span className="text-black border-b-[6px] border-b-[#8838D3]">
          Showcase
        </span>
      </h2>
      <div className="flex flex-row flex-wrap gap-2 justify-center mt-8 mb-12 w-full text-white font-bold">
        <Link
          href={"/client/Fauji Security Services FSS"}
          className="w-[29rem] lg:w-[30%] h-[20rem]  relative overflow-hidden m-2 transform duration-500 hover:scale-110 hover:z-40 group"
        >
          <div className="w-full h-full bg-[#5d32d2] group-hover:flex justify-center items-center hidden transition-all duration-500 absolute top-0 left-0 z-20 bg-opacity-60 ">
            <FaArrowRight className="z-30" size={80} />
          </div>
          <Image
            src={fss}
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "0px 20%" }}
            className="absolute"
          />
          <div className="w-full bg-[#8838D3]/80 p-3 bottom-0 left-0 group-hover:hidden absolute ">
            Fauji Security Services
          </div>
        </Link>
        <Link
          href={"/client/Sentinel AI"}
          className="w-[29rem] lg:w-[30%] h-[20rem]  relative overflow-hidden m-2 transform duration-500 hover:scale-110 hover:z-40 group"
        >
          <div className="w-full h-full bg-[#5d32d2] group-hover:flex justify-center items-center hidden transition-all duration-500 absolute top-0 left-0 z-20 bg-opacity-60 ">
            <FaArrowRight className="z-30" size={80} />
          </div>
          <Image
            src={sentinal}
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "0px 20%" }}
            className="absolute"
          />
          <div className="w-full bg-[#8838D3]/80 p-3 bottom-0 left-0 group-hover:hidden absolute">
            Sentinal AI
          </div>
        </Link>
        <Link
          href={"/client/Askari Bank"}
          className="w-[29rem] lg:w-[30%] h-[20rem]  relative overflow-hidden m-2 transform duration-500 hover:scale-110 hover:z-40 group"
        >
          <div className="w-full h-full bg-[#5d32d2] group-hover:flex justify-center items-center hidden transition-all duration-500 absolute top-0 left-0 z-20 bg-opacity-60 ">
            <FaArrowRight className="z-30" size={80} />
          </div>
          <Image
            src={askari}
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "0px 20%" }}
            className="absolute"
          />
          <div className="w-full bg-[#8838D3]/80 p-3 bottom-0 left-0 group-hover:hidden absolute">
            Askari Bank
          </div>
        </Link>
        <Link
          href={"/client/Elements Learning"}
          className="w-[29rem] lg:w-[30%] h-[20rem]  relative overflow-hidden m-2 transform duration-500 hover:scale-110 hover:z-40 group"
        >
          <div className="w-full h-full bg-[#5d32d2] group-hover:flex justify-center items-center hidden transition-all duration-500 absolute top-0 left-0 z-20 bg-opacity-60 ">
            <FaArrowRight className="z-30" size={80} />
          </div>
          <Image
            src={el}
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "0px 20%" }}
            className="absolute"
          />
          <div className="w-full bg-[#8838D3]/80 p-3 bottom-0 left-0 group-hover:hidden absolute">
            Elements Learning
          </div>
        </Link>

        <Link
          href={"/client/Toyota G.T Motors Pvt Limited"}
          className="w-[29rem] lg:w-[30%] h-[20rem]  relative overflow-hidden m-2 transform duration-500 hover:scale-110 hover:z-40 group"
        >
          <div className="w-full h-full bg-[#5d32d2] group-hover:flex justify-center items-center hidden transition-all duration-500 absolute top-0 left-0 z-20 bg-opacity-60 ">
            <FaArrowRight className="z-30" size={80} />
          </div>
          <Image
            src={toyota}
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "0px 20%" }}
            className="absolute"
          />
          <div className="w-full bg-[#8838D3]/80 p-3 bottom-0 left-0 group-hover:hidden absolute">
            Toyota GT Motors
          </div>
        </Link>
        <Link
          href={"/client/truID Technologies Pvt. Ltd"}
          className="w-[29rem] lg:w-[30%] h-[20rem]  relative overflow-hidden m-2 transform duration-500 hover:scale-110 hover:z-40 group"
        >
          <div className="w-full h-full bg-[#5d32d2] group-hover:flex justify-center items-center hidden transition-all duration-500 absolute top-0 left-0 z-20 bg-opacity-60 ">
            <FaArrowRight className="z-30" size={80} />
          </div>
          <Image
            src={truid}
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "0px 20%" }}
            className="absolute"
          />
          <div className="w-full bg-[#8838D3]/80 p-3 bottom-0 left-0 group-hover:hidden absolute">
            truID
          </div>
        </Link>
      </div>
      <Link href={"/client/"}  className="m-auto">
        <div className="px-12 py-4   focus:outline-none   relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100">
          <div className="relative z-20">Learn More</div>
        </div>
      </Link>
    </div>
  );
};

export default WorkShowcase;
