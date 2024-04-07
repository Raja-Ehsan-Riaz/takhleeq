import Image from "next/image";
import { FaMagnifyingGlass, FaMagnifyingGlassChart } from "react-icons/fa6";

const OfferCard = ({ title, src }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center rounded-full h-48 w-48 text-sm font-bold bg-white text-black">
      <div>
        <Image src={src} alt="" width={55} height={100} />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default OfferCard;
