import Image from "next/image";
import Link from "next/link";

import RebrandingImage from "/public/Illustrations/rebranding.png";

const SingleServiceCard = () => {
  return (
    <div className="w-[33%] p-8 ">
      <div className="bg-[#f8e8ff] rounded-lg px-6 py-8 flex flex-col">
        <h3 className="text-2xl font-bold text-[#8838D3] text-center">
          Branding
        </h3>
        <p className="text-center mt-2">
          Phaseus sit amet tristique lorem ipsum is simply free text ligua donec
          culis leo sus cipit.
        </p>
        <Image
          src={RebrandingImage}
          alt="rebranding"
          quality={100}
          className="w-[65%] mx-auto mt-4"
        />
        <Link
          href={"#"}
          className="px-8 py-4 bg-[#8838D3] text-white mx-auto mt-10"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default SingleServiceCard;
