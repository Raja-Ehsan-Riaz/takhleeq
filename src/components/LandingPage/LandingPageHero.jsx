import Link from "next/link";

import { IoMdSearch } from "react-icons/io";

const LandingPagehero = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-primary-blue text-white">
      <div className="text-center w-[50%]">
        <h1 className="text-8xl font-bold">takhleeq</h1>
        <p className="text-2xl ">Ultimate Branding Experience</p>
        <div className="flex flex-row bg-white rounded-md items-center my-4">
          <IoMdSearch size={25} color="#888888" className="mx-4 my-2" />
          <form className="w-[full] my-2 mx-4">
            <input
              type="text"
              id="top-search"
              name="top-search"
              placeholder="Search"
              className="w-full text-black text-md outline-none p-2"
            ></input>
          </form>
        </div>
        <div className="h-8"></div>
        <Link href="/services">
          <button class="relative  bg-transparent px-12 py-5 bg-white text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
            <div className="relative z-20">Make Brand</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPagehero;
