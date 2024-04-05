import Image from "next/image";
import Link from "next/link";

import RoadMap from "/public/Illustrations/roadmap.png";

const BusinessStartupPitch = () => {
  return (
    <div className="flex flex-row px-[5%] py-16 bg-[#8838D3] text-white">
      <div className="w-[45%] px-8">
        <Image
          src={RoadMap}
          alt="people celebrating business startup success"
          className=""
        />
      </div>
      <div className="w-[55%] px-8 pt-16">
        <h2 className="uppercase text-6xl text-left font-semibold">
          Need a Roadmap For Business&apos;s{" "}
          <span className="text-black border-b-8 border-b-black">Success </span>
          ?
        </h2>
        <p className="text-lg mt-12">
          At takhleeq.io, we specialize in crafting personalized roadmaps for
          businesses of all sizes. Whether you&apos;re a startup or an established
          enterprise, our expertise in branding and digital services ensures a
          tailored approach to help you achieve your marketing goals.
        </p>
        <div className="mt-12">
          <Link href="">
            <button className="relative  bg-transparent px-12 py-5 bg-white text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
              <div className="relative z-20">Build with Us</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessStartupPitch;
