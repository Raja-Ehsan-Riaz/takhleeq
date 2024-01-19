import Link from "next/link";

import { IoMdSearch } from "react-icons/io";

const LandingPagehero = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-primary-blue text-white">
      <div className="text-center">
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
              className="w-full text-black text-md outline-none"
            ></input>
          </form>
        </div>
        <div className="mt-16">
          <Link href={"#"} className="px-8 py-4 bg-white text-black">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPagehero;
