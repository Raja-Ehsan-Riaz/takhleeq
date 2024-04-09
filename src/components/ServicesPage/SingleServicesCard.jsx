import Image from "next/image";
import Link from "next/link";

const SingleServiceCard = ({ title, description, icon }) => {
  return (
    <div className="md:w-[25rem] p-8">
      <div className="bg-[#f8e8ff] rounded-lg px-6 py-8 flex flex-col items-center justify-between   h-[500px] ">
        <div>
          <h3 className="text-2xl font-bold text-[#8838D3] text-center uppercase">
            {title}
          </h3>
          <p className="text-center mt-2">{description}</p>
        </div>
        <Image
          src={icon}
          alt="rebranding"
          quality={100}
          width={200}
          height={200}
          className="  mx-auto mt-4"
        />
        <Link href={`/service/${title.replace(/\//g, "&")}`} className="mx-auto mt-10">
          <div className="px-12 py-4   focus:outline-none  relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100">
            <div className="relative z-20">Load More</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleServiceCard;
