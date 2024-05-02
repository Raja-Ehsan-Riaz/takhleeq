import Image from "next/image";
import Link from "next/link";

const HireCard = ({ src, heading, text }) => {
  return (
    <div className="flex justify-between flex-col sm:flex-row items-center p-10 py-16 bg-[#7957931A] w-[35rem] sm:h-[20rem] group mt-10 lg:mt-16 relative overflow-hidden hover:shadow-lg transition duration-500">
      <div className="absolute w-[8rem] h-[8rem] rounded-full bg-[#8838D3]/10 -top-12 -left-12 z-10 "></div>
      <div className="absolute w-[4rem] h-[4rem] rounded-full bg-[#8838D3]/10 -bottom-8 left-[40%] z-10 "></div>
      <div className="absolute w-[9rem] h-[9rem] rounded-full bg-[#8838D3]/10 top-[15%] left-[55%] z-10 "></div>
      <div className="flex flex-col items-start justify-between gap-4 relative z-20">
        <div className="text-2xl uppercase font-bold">{heading}</div>
        <div>{text}</div>
      </div>
      <div className=" w-[50%] sm:w-auto relative z-20 ">
        <Image src={src} alt="" height={300} width={600} />
      </div>
    </div>
  );
};

export default HireCard;
