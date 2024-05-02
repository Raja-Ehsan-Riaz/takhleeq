import Image from "next/image";

const ServicesHero = () => {
  return (
    <div className="flex h-[70vh] relative overflow-hidden bg-gray-900/60">
      <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src="/Images/Heros/services.png"
          className=" absolute -z-10"
        />
      <h1 className="text-[#8838D3] text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto">
        Services
        <br /> at{" "}
        <span className="text-white ">
          Takhleeq
        </span>
      </h1>
    </div>
  );
};

export default ServicesHero;
