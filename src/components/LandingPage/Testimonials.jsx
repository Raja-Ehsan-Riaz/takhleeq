import Image from "next/image";

import Testimonial1 from "/public/Images/testimonial-placeholder-1.png";
import Testimonial2 from "/public/Images/testimonial-placeholder-2.png";

const Testimonials = () => {
  return (
    <div className="px-[5%] py-20">
      <h2 className="text-[#8838D3] text-left text-4xl uppercase font-bold mb-10">
        What Clients{" "}
        <span className="text-black border-b-[6px] border-b-[#8838D3]">
          Say
        </span>
        <div className="flex flex-row gap-12 mt-10">
          <Image
            src={Testimonial1}
            alt="testimonial"
            quality={100}
            className="w-[40%] ml-auto"
          />
          <Image
            src={Testimonial2}
            alt="testimonial"
            quality={100}
            className="w-[40%] mr-auto"
          />
        </div>
      </h2>
    </div>
  );
};

export default Testimonials;
