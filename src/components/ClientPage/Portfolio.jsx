"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Portfolio = ({ title, portfolio }) => {
  const [bg, setBg] = useState("bg-white"); // Default background color

  useEffect(() => {
    // Define background colors for specific titles
    const titleBgColors = {
      Toyota: "bg-red-500",
      // Add more titles and their respective background colors here
    };

    // Determine the background color class based on the title
    const titleKey = title.split(" ")[0];
    setBg(titleBgColors[titleKey] || "bg-white"); // Set default to white if no match found
  }, [title]);

  return (
    <div
      className={`flex flex-col justify-center items-center gap-6 py-16 bg-[#7957931A]`}
    >
      <h2 className="text-[#8838D3] text-left text-4xl uppercase font-bold mb-10">
        Portfolio
      </h2>
      {portfolio.map((item, idx) => (
        <Image
          key={idx}
          src={`/portfolio/${title}/${item}.jpg`}
          alt=""
          width={2000}
          height={100}
          className="w-[60%]"
        />
      ))}
    </div>
  );
};

export default Portfolio;
