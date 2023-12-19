import Image from "next/image";

import QuoteLeft from "/public/Icons&Symbols/Quote-Left.png";
import QuoteRight from "/public/Icons&Symbols/Quote-Right.png";

const Testimonial = () => {
  return (
    <div className="bg-[#8838D3] text-center text-white py-32 px-[20%] relative">
      <p className="text-3xl z-10">
        You&apos;re in the <b>right place</b> at the <b>right time</b>, and you
        care enough to do what needs to be done. Sometimes{" "}
        <b>that&apos;s enough.</b>
      </p>
      <p className="text-lg font-light mt-6">
        <i>- Erin Morgenstern</i>
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

export default Testimonial;
