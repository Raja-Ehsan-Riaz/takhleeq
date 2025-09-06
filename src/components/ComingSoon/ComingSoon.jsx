"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import LogoMain from "/public/Takhleeq/logo-main.png";

const ComingSoon = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-center",
    });
  }, []);

  return (
    <div className="h-100vh w-full overflow-x-hidden flex flex-col md:flex-row">
      <div className="w-full min-w-[50%] md:w-[50%] pl-[5%] pr-10 py-24 text-center md:text-left">
        <Image
          src={LogoMain}
          alt="Takhleeq Logo"
          className="w-[400px] object-contain mx-auto md:mx-0"
          data-aos="fade-right"
          data-aos-delay="0"
        />
        <h2
          className=" text-xl sm:text-3xl font-medium mt-12"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Website is under
          <br />
          <span className="text-3xl sm:text-5xl">Development</span>
        </h2>
        <br />
        <p
          className="text-3xl sm:text-5xl px-4 py-2 bg-[#6d54a2] text-white mt-2 inline-block"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          It will be live soon.
        </p>
        <p
          className="font-bold text-4xl sm:text-8xl mt-16"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          Stay Tuned!
        </p>
        <div className="flex flex-row gap-2 mt-12">
          <div className="bg-[#6d54a2] w-[20px] h-[20px] ml-auto md:ml-0"></div>
          <div className="bg-[#6d54a2] w-[20px] h-[20px]"></div>
          <div className="bg-[#6d54a2] w-[20px] h-[20px] mr-auto md:mr-0"></div>
        </div>
      </div>
      <div className="w-full md:w-[50%] bg-[#6d54a2] pr-[5%] py-24 md:-skew-x-12 md:translate-x-20"></div>
    </div>
  );
};

export default ComingSoon;
