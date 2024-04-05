"use client";
import Image from "next/image";

const Portfolio = ({ title, portfolio, bg }) => {
  return (
    <div
      className={`${bg} flex flex-col justify-center items-center gap-6 py-16 `}
    >
      {portfolio.map((item, idx) => (
        <Image
          key={idx}
          src={`/portfolio/${title}/${item}.jpg`}
          alt=""
          width={2000}
          height={100}
          className="w-[60%] "
        />
      ))}
    </div>
  );
};

export default Portfolio;
