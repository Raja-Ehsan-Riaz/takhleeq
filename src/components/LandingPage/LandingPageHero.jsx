import Link from "next/link";
// import { list } from "@vercel/blob";
import Image from "next/image";

const LandingPagehero = async () => {
  // const { blobs } = await list({
  //   prefix: "PromoVideoTakhleeq",
  //   limit: 1,
  // });
  // const { url } = blobs[0];
  // console.log(blobs);

  return (
    <div className="w-full h-[100vh] flex flex-col-reverse justify-start  items-center bg-[#8838D3]/80 lg:bg-[#8838D3] text-white relative overflow-hidden ">
      <div className="w-[100vw] h-full absolute left-0 top-0 z-20 bg-gray-800/20"></div>
      <Image
        src={"/Images/Heros/landing.png"}
        className="object-cover absolute -z-10 block lg:hidden"
        fill
        alt=""
      />
      <video
        width="320"
        height="240"
        className="w-full block"
        autoPlay
        muted
        playsInline
        preload="auto"
        loop
      >
        <source src="/Promo Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex justify-center items-center h-full z-30  lg:hidden">
        <div className="text-center lg:w-[40%] pop">
          <h1 className="text-5xl lg:text-8xl font-bold">takhleeq.io</h1>
          <p className=" text-lg lg:text-2xl ">Ultimate Branding Experience</p>
          {/* <div className="flex flex-row bg-white rounded-md items-center my-4">
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
          </div> */}
          <Link href="/services">
            <button className="relative  mt-8 bg-transparent px-12 py-5 bg-white text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
              <div className="relative z-20">Make Brand</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPagehero;
