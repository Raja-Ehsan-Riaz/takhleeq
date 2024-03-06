"use client"
import Image from "next/image";
import { useState } from "react";

const servicesData = [
  {
    title: "Service Provided 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti quasi quidem dolores voluptas nobis. Assumenda, pariatur. Minima molestiae quo pariatur aut",
  },
  {
    title: "Service Provided 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti quasi quidem dolores voluptas nobis. Assumenda, pariatur. Minima molestiae quo pariatur aut",
  },
  {
    title: "Service Provided 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti quasi quidem dolores voluptas nobis. Assumenda, pariatur. Minima molestiae quo pariatur aut",
  },
  {
    title: "Service Provided 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti quasi quidem dolores voluptas nobis. Assumenda, pariatur. Minima molestiae quo pariatur aut",
  },
  {
    title: "Service Provided 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti quasi quidem dolores voluptas nobis. Assumenda, pariatur. Minima molestiae quo pariatur aut",
  },
  // Add more service objects as needed
];

const ServicesProvided = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex flex-row justify-center items-center px-[5%] py-28 text-white ">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`h-[30rem] duration-500 transition-all group  overflow-hidden relative border border-black cursor-pointer ${
            hoveredIndex === index
              ? "bg-[#B418FB]/20 w-[30%] "
              : "w-[20%]  "
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col justify-center items-start gap-8 px-6 py-12">
            <div className="text-white text-3xl uppercase font-bold">
              {service.title}
            </div>
            <div
              className={`text-sm ${
                hoveredIndex === index ? "group-hover:block" : "hidden"
              }`}
            >
              {service.description}
            </div>
          </div>
          <Image
            fill={true}
            style={{ objectFit: "cover" }}
            src="/Images/services-hero-bg.png"
            className=" absolute -z-10"
          />
        </div>
      ))}
    </div>
  );
};

export default ServicesProvided;
