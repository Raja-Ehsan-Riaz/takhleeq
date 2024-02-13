import Link from "next/link";

const BrandingRevolution = () => {
  return (
    <div className="flex flex-row px-[5%] justify-between py-28 bg-[#6A4EB8] text-white">
      <div className="w-[30%] flex justify-center items-center text-4xl font-semibold">
        Tech Driven Branding Revolution
      </div>
      <div className="w-[55%] text-center">
        <p className="text-lg mt-12">
          We are committed to providing our customers with exceptional service
          while offering our employees the best training while offering our employees the best trainin.{" "}
        </p>
        <div className="text-lg mt-6">
          We are committed to providing our customers with exceptional service
          while offering our employees the best trainin while offering our employees the best trainin
        </div>
        <div className="mt-16">
        <Link href="">
            <button class="relative  bg-transparent px-12 py-5 bg-white text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
              <div className="relative z-20">Read More</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandingRevolution;
