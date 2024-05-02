import Image from "next/image";
import Link from "next/link";

const SingleServiceCard = ({ title, description, icon }) => {
  return (
    <Link
      href={`/service/${title.replace(/\//g, "&")}`}
      className="md:w-[25rem] p-8"
    >
      <div className="bg-[#f8e8ff] rounded-lg px-4 py-8 flex flex-col items-center justify-between   h-[400px] transform hover:scale-105 duration-300 ">
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
      </div>
    </Link>
  );
};

export default SingleServiceCard;
