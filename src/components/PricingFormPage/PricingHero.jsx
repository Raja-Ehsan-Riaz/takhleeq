import Image from "next/image";
const PricingHero = () => {
  return (
    <div className="flex h-[70vh] relative overflow-hidden bg-[#7936b7]/50 bg-gradient-to-r from-[#1312149E]/50 via-[#1312149E]/20 to-[#1312149E]/50 ">
      <Image
        fill={true}
        style={{ objectFit: "cover" }}
        src="/Images/Heros/pricingform.jpg"
        className=" absolute -z-10"
          priority
      />
      <h1 className="text-[#8838D3] pop text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto">
        How to Customize
        <br />
        <span className="text-white ">
          Your Package
        </span>
      </h1>
    </div>
  );
};

export default PricingHero;
