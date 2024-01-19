import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const NewsAndUpdates = () => {
  return (
    <div className="px-[5%] py-28 bg-[#7957931A]">
      <h2 className="text-[#8838D3] text-left text-4xl uppercase font-bold mb-10">
        News and{" "}
        <span className="text-black border-b-[6px] border-b-[#8838D3]">
          updates
        </span>
      </h2>
      <div className="mb-16">
        <div className="flex flex-row">
          <div className="bg-[url('/Images/news-and-updates-bg-placeholder.png')] hover:bg-none hover:bg-[#9670FF] p-4 w-[33.33%] pt-36 pr-16">
            <div className="bg-[#8838D3] px-3 py-1 text-white text-sm inline-block rounded-sm">
              <p>Latest</p>
            </div>
            <h3 className="text-lg text-white mt-2 font-semibold uppercase">
              A new startup Takhleeq is hiring full-time Graphic Designer.
            </h3>
            <p className="text-sm font-light text-white">
              <i>Sept 17 2023</i>
            </p>
            <div className="flex flex-row text-[#8838D3] hover:text-white mt-8">
              <p>Play Video</p>
              <FaArrowRightLong size={20} className="ml-[10px]" />
            </div>
          </div>

          <div className="bg-[url('/Images/news-and-updates-bg-placeholder.png')] hover:bg-none hover:bg-[#9670FF] p-4 w-[33.33%] pt-36 pr-16">
            <div className="bg-[#8838D3] px-3 py-1 text-white text-sm inline-block rounded-sm">
              <p>Latest</p>
            </div>
            <h3 className="text-lg text-white mt-2 font-semibold uppercase">
              A new startup Takhleeq is hiring full-time Graphic Designer.
            </h3>
            <p className="text-sm font-light text-white">
              <i>Sept 17 2023</i>
            </p>
            <div className="flex flex-row text-[#8838D3] hover:text-white mt-8">
              <p>Play Video</p>
              <FaArrowRightLong size={20} className="ml-[10px]" />
            </div>
          </div>

          <div className="bg-[url('/Images/news-and-updates-bg-placeholder.png')] hover:bg-none hover:bg-[#9670FF] p-4 w-[33.33%] pt-36 pr-16">
            <div className="bg-[#8838D3] px-3 py-1 text-white text-sm inline-block rounded-sm">
              <p>Latest</p>
            </div>
            <h3 className="text-lg text-white mt-2 font-semibold uppercase">
              A new startup Takhleeq is hiring full-time Graphic Designer.
            </h3>
            <p className="text-sm font-light text-white">
              <i>Sept 17 2023</i>
            </p>
            <div className="flex flex-row text-[#8838D3] hover:text-white mt-8">
              <p>Play Video</p>
              <FaArrowRightLong size={20} className="ml-[10px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="bg-[url('/Images/news-and-updates-bg-placeholder.png')] bg-no-repeat bg-cover hover:bg-none hover:bg-[#9670FF] p-4 w-[50%] pt-44 pr-20">
            <div className="bg-[#8838D3] px-3 py-1 text-white text-sm inline-block rounded-sm">
              <p>Latest</p>
            </div>
            <h3 className="text-lg text-white mt-2 font-semibold uppercase">
              A new startup Takhleeq is hiring full-time Graphic Designer.
            </h3>
            <p className="text-sm font-light text-white">
              <i>Sept 17 2023</i>
            </p>
            <p className="text-white text-md my-2">
              A startup Takhleeq is a IT and consulting company that is now
              hiring urgent graphic designers. Send your CVs.
            </p>
            <div className="flex flex-row text-[#8838D3] hover:text-white mt-8">
              <p>Play Video</p>
              <FaArrowRightLong size={20} className="ml-[10px]" />
            </div>
          </div>

          <div className="bg-[url('/Images/news-and-updates-bg-placeholder.png')] bg-no-repeat bg-cover hover:bg-none hover:bg-[#9670FF] p-4 w-[50%] pt-44 pr-20">
            <div className="bg-[#8838D3] px-3 py-1 text-white text-sm inline-block rounded-sm">
              <p>Latest</p>
            </div>
            <h3 className="text-lg text-white mt-2 font-semibold uppercase">
              A new startup Takhleeq is hiring full-time Graphic Designer.
            </h3>
            <p className="text-sm font-light text-white">
              <i>Sept 17 2023</i>
            </p>
            <p className="text-white text-md my-2">
              A startup Takhleeq is a IT and consulting company that is now
              hiring urgent graphic designers. Send your CVs.
            </p>
            <div className="flex flex-row text-[#8838D3] hover:text-white mt-8">
              <p>Play Video</p>
              <FaArrowRightLong size={20} className="ml-[10px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <Link href={"#"} className="px-8 py-4 bg-[#8838D3] text-white mx-auto">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
