import Image from "next/image";
import Link from "next/link";

import PlaceholderImage from "/public/Images/work-showcase-placeholder.png";

const WorkShowcase = () => {
  return (
    <div className="px-[5%] py-20 text-center flex flex-col items-center">
      <h2 className="text-[#8838D3] text-left text-4xl uppercase font-bold mb-4">
        Work{" "}
        <span className="text-black border-b-[6px] border-b-[#8838D3]">
          Showcase
        </span>
      </h2>
      <div className="flex flex-wrap mt-8 mb-12">
        <div className="w-[33%] p-8">
          <Image src={PlaceholderImage} alt="" className="rounded-md" />
        </div>
        <div className="w-[33%] p-8">
          <Image src={PlaceholderImage} alt="" className="rounded-md" />
        </div>
        <div className="w-[33%] p-8">
          <Image src={PlaceholderImage} alt="" className="rounded-md" />
        </div>
        <div className="w-[33%] p-8">
          <Image src={PlaceholderImage} alt="" className="rounded-md" />
        </div>
        <div className="w-[33%] p-8">
          <Image src={PlaceholderImage} alt="" className="rounded-md" />
        </div>
        <div className="w-[33%] p-8">
          <Image src={PlaceholderImage} alt="" className="rounded-md" />
        </div>
      </div>
      <Link href={"#"}>
        <div className="px-12 py-4   focus:outline-none   relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100">
          <div className="relative z-20">Learn More</div>
        </div>
      </Link>
    </div>
  );
};

export default WorkShowcase;
