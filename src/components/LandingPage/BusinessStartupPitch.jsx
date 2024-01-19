import Image from "next/image";
import Link from "next/link";

import BusinessCelebrationImage from "/public/Images/business-celebration-group.png";

const BusinessStartupPitch = () => {
  return (
    <div className="flex flex-row px-[5%] py-28 bg-[#8838D3] text-white">
      <div className="w-[45%] px-8">
        <Image
          src={BusinessCelebrationImage}
          alt="people celebrating business startup success"
          className=""
        />
      </div>
      <div className="w-[55%] px-8 pt-16">
        <h2 className="uppercase text-6xl text-left font-semibold">
          DONT KNOW hOW YOUR BUSINESS STARTUP{" "}
          <span className="text-black border-b-8 border-b-black">SUCCEED?</span>
        </h2>
        <p className="text-lg mt-12">
          Takhleeq, a Media House that started from the grounds and now has
          striven to reach the corporate world&apos;s height. Characterized by
          digitization and changing dynamics, we aim to build firm foundations.
        </p>
        <div className="mt-16">
          <Link href={"#"} className="px-8 py-4 bg-white text-black">
            Build With Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessStartupPitch;
