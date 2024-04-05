import Image from "next/image";
import SingleSolutionCard from "./SingleSolutionCard";

const Solutions = () => {
  return (
    <div className="bg-[#8838D3] py-24 px-[5%] flex flex-row justify-between items-center  ">
      <div className="w-[60%] flex flex-col gap-4 items-start">
        <h2 className="text-white text-left  text-5xl uppercase font-bold mb-10 mt-auto">
          We Shape the perfect <br />
          <span className="text-black border-b-[6px] border-b-[#ffffff]">
            solutions
          </span>
        </h2>
        <p className=" text-white">
          Takhleeq excels in digital marketing with data-driven strategies,
          crafts intuitive high-performance websites in web development, and
          specializes in creating visually captivating UI/UX designs for
          enhanced user satisfaction. Our branding solutions deliver visually
          striking graphics that effectively communicate brand stories and leave
          a lasting impression on audiences.
        </p>
      </div>
      <div className="w-[30rem] h-[25rem] bg-slate-700 relative overflow-hidden">
      <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src="/Images/services/solutions.png"
          className=" absolute z-0"
        />
      </div>
    </div>
  );
};

export default Solutions;
