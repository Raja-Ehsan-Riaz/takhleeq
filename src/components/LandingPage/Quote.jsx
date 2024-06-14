import Image from "next/image";

import QuoteLeft from "/public/Icons&Symbols/Quote-Left.png";
import QuoteRight from "/public/Icons&Symbols/Quote-Right.png";

const Quote = () => {
  return (
    <div className="bg-[#8838D3] text-center text-white py-32 px-[20%] relative">
      <p className="text-3xl z-10">
        “Don&apos;t sit down and wait for the opportunities to come. Get up and
        make them.”
      </p>
      <p className="text-lg font-light mt-6">
        <i>--Madam C.J. Walker</i>
      </p>

      <Image
        src={QuoteLeft}
        alt=""
        className="absolute left-[20%] bottom-10 w-[150px] z-0"
      />
      <Image
        src={QuoteRight}
        alt=""
        className="absolute right-[20%] top-10 w-[150px] z-0"
      />
    </div>
  );
};

export default Quote;
