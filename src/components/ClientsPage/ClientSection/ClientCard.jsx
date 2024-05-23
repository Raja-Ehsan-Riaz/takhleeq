import Image from "next/image";
import Link from "next/link";

export const ClientCard = ({ name, description, icon, services }) => {
  return (
    <Link href={`/client/${name}`}>
      <div className="flex flex-col lg:flex-row  justify-between  items-stretch p-6 md:p-16 hover:scale-105  md:gap-8   hover:shadow-xl shadow-lg border border-gray-100 cursor-pointer transition duration-500 ">
        <div className=" h-[10rem] md:h-[15rem] lg:h-auto lg:w-[30%] relative">
          <Image
            fill={true}
            style={{ objectFit: "contain" }}
            src={`/Icons&Symbols/clients${icon}`}
            className=" absolute"
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-4 lg:w-[70%] ">
          <div className="text-2xl font-bold">{name}</div>
          <div className="w-full text-justify md:text-left">{description}</div>
          {/* <div className="text-xl font-semibold">Requirements</div> */}
          <div className="flex justify-start flex-wrap items-center w-full gap-4">
            {services.map((service,idx) => (
              <div key={idx} className="rounded-full text-sm p-3 bg-gray-200">{service}</div>
            ))}
          </div>
          {/* <div className="text-xl font-semibold">Results</div>
          <div className="flex justify-start items-center w-full gap-2">
            <div className="rounded-full p-2 bg-gray-200">100k followers</div>
            <div className="rounded-full p-2 bg-gray-200">150 clients</div>
          </div> */}
        </div>
      </div>
    </Link>
  );
};
