import Image from "next/image";
import Link from "next/link";

import askari from "/public/portfolio/Askari Bank/0.jpg";
import fss from "/public/portfolio/Fauji Security Services FSS/1.JPG";
import el from "/public/portfolio/elearning.jpg";
import sentinal from "/public/portfolio/sentinal.jpg";
import toyota from "/public/portfolio/Toyota G.T Motors Pvt Limited/3.jpg";
import truid from "/public/portfolio/truid.png";

const WorkShowcase = () => {
  return (
    <div className=" px-[5%] py-20 text-center flex flex-col items-center">
      <h2 className="text-[#8838D3] text-left text-4xl uppercase font-bold mb-4">
        Work{" "}
        <span className="text-black border-b-[6px] border-b-[#8838D3]">
          Showcase
        </span>
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center mt-8 mb-12 w-full">
        <div className="w-[35rem] h-[35rem]  relative overflow-hidden m-2">
          <Image src={fss} alt="" fill style={{objectFit:"cover"}} className="absolute" />
        </div>
        <div className="w-[35rem] h-[35rem]  relative overflow-hidden m-2">
          <Image src={sentinal} alt="" fill style={{objectFit:"cover"}} className="absolute" />
        </div>
        <div className="w-[35rem] h-[35rem]  relative overflow-hidden m-2">
          <Image src={askari} alt="" fill style={{objectFit:"cover"}} className="absolute" />
        </div>
        <div className="w-[35rem] h-[35rem]  relative overflow-hidden m-2">
          <Image src={el} alt="" fill style={{objectFit:"cover"}} className="absolute" />
        </div>

        <div className="w-[35rem] h-[35rem]  relative overflow-hidden m-2">
          <Image src={toyota} alt="" fill style={{objectFit:"cover"}} className="absolute" />
        </div>
        <div className="w-[35rem] h-[35rem]  relative overflow-hidden m-2">
          <Image src={truid} alt="" fill style={{objectFit:"cover"}} className="absolute" />
        </div>
      </div>
      <Link href={"/clients"}>
        <div className="px-12 py-4   focus:outline-none   relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100">
          <div className="relative z-20">Learn More</div>
        </div>
      </Link>
    </div>
  );
};

export default WorkShowcase;
