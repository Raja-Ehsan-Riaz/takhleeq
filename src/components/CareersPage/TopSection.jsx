"use client";
import Image from "next/image";
import Apply from "../../../public/Icons&Symbols/careers/apply.png";
import Interview from "../../../public/Icons&Symbols/careers/interview.png";
import Skills from "../../../public/Icons&Symbols/careers/skills.png";
import Promise from "../../../public/Icons&Symbols/careers/promise.png";
import { useEffect, useRef, useState } from "react";

const TopSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-[15%] py-16 md:py-28 bg-gray-100 text-black">
      <h2 className="uppercase text-4xl md:text-5xl text-center md:text-left font-bold">
        HOW DO WE <span className="text-[#8838D3]"> HIRE?</span>
      </h2>
      <div className="text-lg mt-8 text-justify md:text-center">
        Our company seeks passionate and innovative individuals with diverse
        skills and a keen understanding of global market trends. Our hiring
        process, including interviews and skills assessments, is designed to
        identify candidates who can contribute to our dynamic and culturally
        diverse team, driving excellence in branding on a global scale.
      </div>
      <div 
        ref={sectionRef}></div>
      {/* Flex container that shows/hides based on visibility */}
      <div
        className={`flex flex-col lg:flex-row justify-start w-full items-center space-y-6 space-x-0 lg:space-y-0 lg:space-x-6 mb-8 mt-12 ${
          isVisible ? "flex" : "hidden py-40"
        }`}
      >
        {/* First Circle */}
        <div className="h-40 w-40 rounded-full relative border-4 p-2 circle-animate opacity-0">
          <svg className="h-40 w-40 absolute" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="76" />
          </svg>
          <div className="flex flex-col justify-center bg-white items-center rounded-full text-sm gap-2 h-full w-full">
            <Image src={Apply} alt="Apply" width={40} />
            <div className="font-bold text-black">Apply</div>
          </div>
        </div>

        {/* Line */}
        <div className={` p-[2px] rotate-90 lg:rotate-0 transform border-white line-animate line-1`}></div>

        {/* Second Circle */}
        <div className="h-40 w-40 rounded-full relative border-4 p-2 circle-2 circle-animate opacity-0">
          <svg className="h-40 w-40 absolute" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="76" />
          </svg>
          <div className="flex flex-col justify-center bg-white items-center rounded-full text-sm gap-2 h-full w-full">
            <Image src={Interview} alt="Interview" width={50} />
            <div className="font-bold text-black">Interview</div>
          </div>
        </div>

        {/* Line */}
        <div className={` p-[2px] rotate-90 lg:rotate-0 transform border-white line-animate line-2`}></div>

        {/* Third Circle */}
        <div className="h-40 w-40 rounded-full relative border-4 p-2 circle-3 circle-animate opacity-0">
          <svg className="h-40 w-40 absolute" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="76" />
          </svg>
          <div className="flex flex-col justify-center bg-white items-center rounded-full text-sm gap-2 h-full w-full">
            <Image src={Skills} alt="Skills" width={40} />
            <div className="font-bold text-black text-center">
              Skills <br /> Assessment
            </div>
          </div>
        </div>

        {/* Line */}
        <div className={` p-[2px] rotate-90 lg:rotate-0 transform border-white line-animate line-3`}></div>

        {/* Fourth Circle */}
        <div className="h-40 w-40 rounded-full relative border-4 p-2 circle-4 circle-animate opacity-0" >
          <svg className="h-40 w-40 absolute" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="76" />
          </svg>
          <div className="flex flex-col justify-center bg-white items-center rounded-full text-sm gap-2 h-full w-full">
            <Image src={Promise} alt="Promise" width={60} />
            <div className="font-bold text-black">Our Promise</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
