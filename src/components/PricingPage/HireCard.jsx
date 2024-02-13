import Image from "next/image";
import Link from "next/link";

const HireCard = () => {
  return (
    <div className="flex justify-between items-center p-10 bg-[#7957931A] w-[35rem] mt-10 relative overflow-hidden">
      <div className="absolute w-[8rem] h-[8rem] rounded-full bg-[#8838D3]/60 -top-12 -left-12 z-10 "></div>
      <div className="absolute w-[4rem] h-[4rem] rounded-full bg-[#8838D3]/60 -bottom-8 left-[40%] z-10 "></div>
      <div className="absolute w-[9rem] h-[9rem] rounded-full bg-[#8838D3]/40 top-[15%] left-[55%] z-10 "></div>
      <div className="flex flex-col items-start justify-between gap-4 relative z-20">
        <div className="text-2xl uppercase font-bold">Hire Our Team</div>
        <div>
          Choose one of the options below to get an accurate price estimation
          for your project:
        </div>
        <Link href="/#">
          <button class="relative  bg-transparent px-12 py-4 bg-white text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
            <div className="relative z-20">Hire Us</div>
          </button>
        </Link>
      </div>
      <div className="relative z-20">
        <Image
          src="/Icons&Symbols/Hire-me.png"
          alt=""
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default HireCard;
