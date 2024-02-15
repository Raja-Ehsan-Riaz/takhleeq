import Image from "next/image";
import Link from "next/link";

import { IoMdSearch } from "react-icons/io";

const LandingPagehero = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center bg-[#7936b7] items-center  text-white relative overflow-hidden">
      <div className="bg-[#9346db] h-full w-[25%] hero-translate-1 uppercase text-8xl  flex justify-center items-center text-center font-bold ">
        <div className="transform rotate-[270deg] opacity-40">
          Branding <br />
          <span className="text-border text-[#9346db]"> Branding</span>
        </div>
      </div>
      <div className="relative  h-full w-[25%] hero-translate-2 uppercase text-8xl  flex justify-center items-center text-center font-bold ">
        <div className="transform rotate-[270deg] opacity-40 relative z-20 ">
          Content <br />
          <span className="text-border text-[#8838D3]"> Creation</span>
        </div>
        <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src="/Images/hero-bg.png"
          className=" absolute z-0"
        />
        <div className="w-full h-full absolute z-10 top-0 left-0 bg-[#8838D3]/90    "></div>
      </div>
      <div className="bg-[#9346db] h-full w-[25%] hero-translate-1 uppercase text-8xl  flex justify-center items-center text-center font-bold ">
        <div className="transform rotate-[270deg] opacity-40">
          Digital AI <br />
          <span className="text-border text-[#9346db]"> Marketing</span>
        </div>
      </div>
      <div className="relative  h-full w-[25%] hero-translate-2 uppercase text-8xl  flex justify-center items-center text-center font-bold ">
        <div className="transform rotate-[270deg] opacity-40 relative z-20 ">
          Interior <br />
          <span className="text-border text-[#8838D3]"> Design</span>
        </div>
        <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src="/Images/hero-bg.png"
          className=" absolute z-0"
        />
        <div className="w-full h-full absolute z-10 top-0 left-0 bg-[#8838D3]/90    "></div>
      </div>
      <div className="flex justify-center items-center absolute z-30 top-0 left-0 w-full h-full bg-transparent">
        <div className="text-center w-[40%]">
          <h1 className="text-8xl font-bold">takhleeq</h1>
          <p className="text-2xl ">Ultimate Branding Experience</p>
          <div className="flex flex-row bg-white rounded-md items-center my-4">
            <IoMdSearch size={25} color="#888888" className="mx-4 my-2" />
            <form className="w-full my-2 mx-4">
              <input
                type="text"
                id="top-search"
                name="top-search"
                placeholder="Search"
                className="w-full text-black text-md outline-none p-1"
              ></input>
            </form>
          </div>
          <div className="mt-12">
            <Link href="/services">
              <button className="relative  bg-transparent px-12 py-5 bg-white text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                <div className="relative z-20">Make Brand</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagehero;
