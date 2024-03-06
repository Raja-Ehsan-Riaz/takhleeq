import Image from "next/image";
import { FaMagnifyingGlass, FaMagnifyingGlassChart } from "react-icons/fa6";

const OfferCard = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center rounded-full h-40 w-40 font-semibold text-lg bg-white text-black">
      <div>
        <FaMagnifyingGlassChart size={30} />
      </div>
      <div>Branding</div>
    </div>
  );
};

export default OfferCard;
