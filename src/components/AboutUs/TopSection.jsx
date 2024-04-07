"use client";

import { useState } from "react";

import Value1 from "../../../public/Icons&Symbols/aboutus/birth.png";
import Value2 from "../../../public/Icons&Symbols/aboutus/mission.png";
import Value3 from "../../../public/Icons&Symbols/aboutus/values.png";
import Value4 from "../../../public/Icons&Symbols/aboutus/vision.png";
import Image from "next/image";

const TopSection = () => {
  // State to manage the index of the selected item
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  // Array of items
  const items = [
    {
      title: "Takhleeq is Born",
      description:
        "takhleeq.io is born out of a passion for creativity and innovation, with a vision to redefine the branding landscape. Rooted in a culture of excellence and driven by the desire to make a difference, takhleeq.io emerges as a beacon of ingenuity, offering unparalleled solutions that leave a lasting impact.        ",
    },
    {
      title: "Mission ",
      description:
        "Our mission is to provide our clients with innovative, creative, and effective branding solutions that deliver measurable results and help them succeed in today's digital age. We strive to deliver exceptional service and build long-term relationships with our clients, based on trust, collaboration, and mutual success.",
    },
    {
      title: "Vision",
      description:
        "Our vision is to become a leading name in the branding and digital services industry, known for our unique approach to problem-solving and our ability to deliver high-quality work that exceeds our clients' expectations. We aspire to be a company that inspires and empowers our clients to achieve their goals and stand out in their respective industries.",
    },
    {
      title: "Values",
      Values: [
        {
          title: "Innovation",
          description:
            "By pushing boundaries, takhleeq.io unlocks opportunities for growth and innovation.",
        },
        {
          title: "Integrity",
          description:
            " At takhleeq.io, honesty and transparency build trust, forming the foundation of our client relationships.",
        },
        {
          title: "Collaboration",
          description:
            "We thrive on co-creating impactful experiences that resonate with audiences and drive lasting impressions.",
        },
        {
          title: "Excellence",
          description:
            "We consistently deliver exceptional results, setting benchmarks for excellence in every project undertaken. ",
        },
        {
          title: "Customer-Centricity",
          description:
            "At takhleeq.io, we specialize in crafting tailored solutions that deliver remarkable experiences, uniquely tailored to each client's needs. ",
        },
        {
          title: "Growth Mindset",
          description:
            "Embracing continuous learning, takhleeq.io remains committed to staying ahead of industry trends and innovation. ",
        },
      ],
    },
  ];

  // Function to handle circle click
  const handleCircleClick = (index) => {
    setSelectedItemIndex(index);
  };
  return (
    <div className="flex flex-col items-center justify-center px-[20%] py-28  bg-[#7957931A]">
      <div className="flex flex-row justify-evenly w-full items-center mb-8 gap-6">
        <div
          className={`h-32 w-32 rounded-full cursor-pointer relative bg-gray-200 shadow-md flex justify-center items-center ${selectedItemIndex===0 && "border-4 border-[#8838D3]/80"}`}
          onClick={() => handleCircleClick(0)}
        >
          <Image src={Value1} alt="" className="absolute object-contain fill-neutral-50" width={50}/>
        </div>
        <div className="w-24 border-2 border-gray-900"></div>
        <div
          className={`h-32 w-32 rounded-full cursor-pointer relative bg-gray-200 shadow-md flex justify-center items-center ${selectedItemIndex===1  && "border-4 border-[#8838D3]/80"}`}
          onClick={() => handleCircleClick(1)}
        >
          <Image src={Value2} alt="" className="absolute object-contain" width={60}/>
        </div>
        <div className="w-24 border-2 border-gray-900"></div>
        <div
          className={`h-32 w-32 rounded-full cursor-pointer relative bg-gray-200 shadow-md flex justify-center items-center ${selectedItemIndex===2  && "border-4 border-[#8838D3]/80"}`}
          onClick={() => handleCircleClick(2)}
        >
          <Image src={Value4} alt="" className="absolute object-contain" width={40}/>
        </div>
        <div className="w-24 border-2 border-gray-900"></div>
        <div
          className={`h-32 w-32 rounded-full cursor-pointer relative bg-gray-200 shadow-md flex justify-center items-center ${selectedItemIndex===3  && "border-4 border-[#8838D3]/80"}`}
          onClick={() => handleCircleClick(3)}
        >
          <Image src={Value3} alt="" className="absolute object-contain" width={60}/>
        </div>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`text-lg mt-8 text-center  ${
            selectedItemIndex === index ? "change-item" : "hidden"
          }`}
        >
          <h2 className="uppercase text-5xl text-center font-semibold">
            {index === 0 ? (
              <>
                {" "}
                Takhleeq is{" "}
                <span className="text-[#8838D3] border-b-8 border-b-black">
                  born
                </span>
              </>
            ) : (
              <>
                {" "}
                <span className="text-[#8838D3] border-b-8 border-b-black">
                  {item.title}
                </span>
              </>
            )}
          </h2>
          {index === 3 ? (
            <div className="flex flex-col items-start justify-center mt-12 text-left gap-2">
              {item.Values.map((value, index) => (
                <div key={index}>
                  {" "}
                  <span className="text-lg font-bold text-[#8838D3]">
                    {value.title}:
                  </span>{" "}
                  <span>{value.description}</span>{" "}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopSection;
