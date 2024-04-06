import Image from "next/image";

const TDBRHero = () => {
  return (
    <div className=" flex h-[70vh] overflow-hidden relative  bg-[#7936b7]/50 bg-gradient-to-r from-[#1312149E]/50 via-[#1312149E]/50 to-[#1312149E]/50">
      <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src="/Images/Heros/tdbr.png"
          className=" absolute -z-10"
        />
      <h1 className="text-white text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto">
        Where creativity meets strategy <br /> for effective{" "}
        <span className="text-[#8838D3] ">branding</span>!
      </h1>
    </div>
  );
};

export default TDBRHero;
