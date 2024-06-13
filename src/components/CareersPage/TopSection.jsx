import Image from "next/image";
import Apply from "../../../public/Icons&Symbols/careers/apply.png";
import Interview from "../../../public/Icons&Symbols/careers/interview.png";
import Skills from "../../../public/Icons&Symbols/careers/skills.png";
import Promise from "../../../public/Icons&Symbols/careers/promise.png";

const TopSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-[15%] py-16 md:py-28 bg-gray-200 text-black">
      <h2 className="uppercase text-4xl md:text-5xl text-center md:text-left font-bold">
        HOW DO WE{" "}
        <span className="text-[#8838D3]"> HIRE?</span>
      </h2>
      <div className="text-lg mt-8 text-justify md:text-center">
        Our company seeks passionate and innovative individuals with diverse
        skills and a keen understanding of global market trends. Our hiring
        process, including interviews and skills assessments, is designed to
        identify candidates who can contribute to our dynamic and culturally
        diverse team, driving excellence in branding on a global scale.
      </div>
      <div className="flex flex-col lg:flex-row justify-center w-full items-center gap-6 mb-8  mt-12">
        <div className={`h-40 w-40 rounded-full border-4 border-white p-1 `}>
          <div className="flex flex-col justify-center bg-white items-center rounded-full text-sm gap-2  h-full w-full">
            <Image src={Apply} alt="" width={40} />
            <div className="font-bold text-black">Apply</div>
          </div>
        </div>
        <div className="w-12 lg:w-24 border-2 rotate-90 lg:rotate-0 transform border-white"></div>
        <div className={`h-40 w-40 rounded-full border-4 border-white p-1 `}>
          <div className="flex flex-col justify-center bg-white items-center rounded-full text-sm gap-2  h-full w-full">
            <Image src={Interview} alt="" width={50} />
            <div className="font-bold text-black">Interview</div>
          </div>
        </div>
        <div className="w-12 lg:w-24 border-2 rotate-90 lg:rotate-0 transform border-white"></div>
        <div className={`h-40 w-40 rounded-full border-4 border-white p-1 `}>
          <div className="flex flex-col justify-center bg-white items-center rounded-full text-sm gap-2  h-full w-full">
            <Image src={Skills} alt="" width={40} />
            <div className="font-bold text-black text-center">
              Skills <br /> Assessment
            </div>
          </div>
        </div>
        <div className="w-12 lg:w-24 border-2 rotate-90 lg:rotate-0 transform border-white"></div>
        <div className={`h-40 w-40 rounded-full border-4 border-white p-1 `}>
          <div className="flex flex-col justify-center bg-white items-center rounded-full text-sm gap-2  h-full w-full">
            <Image src={Promise} alt="" width={60} />
            <div className="font-bold text-black">Our Promise</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
