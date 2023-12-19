import Image from "next/image";
import Link from "next/link";

import PlaceholderImage from "/public/Images/work-showcase-placeholder.png";

const WorkShowcase = () => {
  return (
    <div className="px-[5%] py-20 text-center">
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
      <Link href={"#"} className="px-8 py-4 bg-[#8838D3] text-white">
        Learn More
      </Link>
    </div>
  );
};

export default WorkShowcase;
