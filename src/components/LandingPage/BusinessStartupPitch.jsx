import Image from "next/image";
import Link from "next/link";

import RoadMap from "/public/Images/RoadMap.png";

const BusinessStartupPitch = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row  lg:px-[0%] lg:pr-[5%] py-16 lg:py-0 justify-between bg-[#8838D3] text-white">
      <div className="lg:w-[40%] md:h-[30rem]  lg:h-auto relative hidden lg:flex justify-end items-end">
        <Image
          src={RoadMap}
          width={600}
          className=""
          alt="people celebrating business startup success"
        />
      </div>
      <div className="lg:w-[55%] lg:pl-8 lg:py-28 px-[5%] lg:px-0">
        <h2 className="uppercase text-4xl md:text-5xl text-left font-bold">
          Need a Roadmap For <br /> Business&apos;s{" "}
          <span className="text-black">Success </span>
          ?
        </h2>
        <p className="text-lg mt-6 text-justify md:text-left">
          At takhleeq.io, we specialize in crafting personalized roadmaps for
          businesses of all sizes. Whether you&apos;re a startup or an established
          enterprise, our expertise in branding and digital services ensures a
          tailored approach to help you achieve your marketing goals.
        </p>
        <div className="mt-12">
          <Link href="/services">
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
