import Image from "next/image";

import number01 from "/public/Icons&Symbols/01.png";
import SearchInfoIcon from "/public/Icons&Symbols/searching-info.png";

const SingleSolutionCard = () => {
  return (
    <div className="bg-white text-black w-[18%] aspect-square p-6 rounded-lg flex flex-col">
      <div className="flex flex-row justify-between">
        <Image
          src={number01}
          alt=""
          className="w-[40px] h-auto object-contain"
        />
        <Image
          src={SearchInfoIcon}
          alt=""
          className="w-[60px] h-auto object-contain"
        />
      </div>
      <h4 className="text-black font-bold text-3xl text-left mt-auto">
        Branding
      </h4>
    </div>
  );
};

export default SingleSolutionCard;
