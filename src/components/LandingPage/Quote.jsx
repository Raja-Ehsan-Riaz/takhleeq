import Image from "next/image";

import QuoteLeft from "/public/Icons&Symbols/Quote-Left.png";
import QuoteRight from "/public/Icons&Symbols/Quote-Right.png";

const Quote = () => {
  return (
    // <div className="bg-[#8838D3] text-center text-white py-32 px-[20%] relative">
    //   <p className="text-3xl z-10">
    //     “Don&apos;t sit down and wait for the opportunities to come. Get up and
    //     make them.”
    //   </p>
    //   <p className="text-lg font-light mt-6">
    //     <i>--Madam C.J. Walker</i>
    //   </p>

    //   <Image
    //     src={QuoteLeft}
    //     alt=""
    //     className="absolute left-[20%] bottom-10 w-[150px] z-0"
    //   />
    //   <Image
    //     src={QuoteRight}
    //     alt=""
    //     className="absolute right-[20%] top-10 w-[150px] z-0"
    //   />
    // </div>
    <div className="px-[5%] py-16 lg:py-24 lg:pb-28 bg-gradient-to-r from-[#1c7665] to-[#f4d03f]">
      <div className="max-w-7xl m-auto">
        <h1 className=" text-4xl md:text-5xl font-bold text-white">Services</h1>
        <div className="relative p-16 bg-gray-900/50 flex flex-col items-start text-white mt-12 rounded-3xl">
          <div className="text-3xl font-bold max-w-xl">
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
            consequatur rem, officiis minimaconsequatur rem, officiis minima&quot;
          </div>
          <div className="w-24 h-24 rounded-full bg-gray-400 mt-12 mb-4"></div>
          <div className="font-bold text-lg mb-2">Jan Mraz</div>
          <div>Co-Founder Atheros</div>
          <div>Design Infuencer</div>
          <div className="w-60 h-60 rounded-3xl absolute -bottom-[2rem] round right-[7rem] rotate-45 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
