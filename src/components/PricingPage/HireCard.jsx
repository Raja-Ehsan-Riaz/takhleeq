import Image from "next/image";
import Link from "next/link";

const HireCard = ({src}) => {
  return (
    <div className="flex justify-between items-center p-10 py-16 bg-[#7957931A] w-[35rem] mt-10 relative overflow-hidden hover:shadow-lg transition duration-500">
      <div className="absolute w-[8rem] h-[8rem] rounded-full bg-[#8838D3]/60 -top-12 -left-12 z-10 "></div>
      <div className="absolute w-[4rem] h-[4rem] rounded-full bg-[#8838D3]/60 -bottom-8 left-[40%] z-10 "></div>
      <div className="absolute w-[9rem] h-[9rem] rounded-full bg-[#8838D3]/40 top-[15%] left-[55%] z-10 "></div>
      <div className="flex flex-col items-start justify-between gap-4 relative z-20">
        <div className="text-2xl uppercase font-bold">Hire Our Team</div>
        <div>
          Choose one of the options below to get an accurate price estimation
          for your project:
        </div>
        
      </div>
      <div className="relative z-20 ">
        <Image
          src={src}
          alt=""
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default HireCard;
