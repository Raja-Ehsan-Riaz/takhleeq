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
          <Link href={"#"} className="px-8 py-4 bg-white text-black">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandingRevolution;
