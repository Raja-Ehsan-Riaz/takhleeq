import Link from "next/link";

export const ClientCard = ({name, description}) => {
  return (
    <Link href={`/client/${name}`}>
    <div className="flex justify-between  items-stretch p-6 border gap-8 border-gray-600  hover:shadow-xl cursor-pointer transition duration-500 shadow-[#8838D3]">
      <div className="w-[30%] bg-gray-400"></div>
      <div className="flex flex-col items-start justify-between gap-4 w-[70%] ">
        <div className="text-2xl font-bold">{name}</div>
        <div className="w-full">
         { description}
        </div>
        <div className="text-xl font-semibold">Requirements</div>
        <div className="flex justify-start items-center w-full gap-2">
          <div className="rounded-full p-2 bg-gray-200">UI/UX Design</div>
          <div className="rounded-full p-2 bg-gray-200">Web Design</div>
          <div className="rounded-full p-2 bg-gray-200">UI/UX Design</div>
          <div className="rounded-full p-2 bg-gray-200">Web Design</div>
        </div>
        <div className="text-xl font-semibold">Results</div>
        <div className="flex justify-start items-center w-full gap-2">
          <div className="rounded-full p-2 bg-gray-200">100k followers</div>
          <div className="rounded-full p-2 bg-gray-200">150 clients</div>
        </div>
      </div>
    </div>
    </Link>
  );
};
