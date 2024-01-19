import Image from "next/image";

import placeholder from "/public/Placeholders/video-placeholder-services.png";

const SolutionsVideo = () => {
  return (
    <div className="py-20 px-[5%] flex flex-col">
      <h2 className="text-[#8838D3] text-center mx-auto text-4xl uppercase font-bold mb-10 mt-auto">
        We Shape{" "}
        <span className="text-black border-b-[6px] border-b-[#8838D3]">
          solutions
        </span>
      </h2>
      <p className="text-center px-[5%]">
        We are committed to providing our customers with exceptional service
        while offering our employees the best training. We are committed to
        providing our customers with exceptional service while offering our
        employees the best training.
      </p>
      <Image
        src={placeholder}
        alt=""
        className="w-[80%] mx-auto rounded-lg mt-6"
      />
    </div>
  );
};

export default SolutionsVideo;
