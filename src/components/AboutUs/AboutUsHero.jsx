import Image from "next/image";

const AboutUsHero = () => {
  return (
    <div className=" flex h-[70vh] overflow-hidden relative  bg-[#7936b7]/30 bg-gradient-to-r from-[#1312149E]/50 via-[#1312149E]/50 to-[#1312149E]/50 ">
      <Image
        fill={true}
        style={{ objectFit: "cover", objectPosition: "0px 30%" }}
        src="/Images/Heros/aboutus.jpg"
        className=" absolute -z-10"
        priority
      />
      <h1 className="text-white text-center mx-auto pop text-4xl md:text-5xl uppercase font-bold mb-10 mt-auto ">
        Where <span className="text-[#8838D3]"> creativity</span> meets{" "}
        <span className="text-[#8838D3]"> strategy </span> <br /> for effective
        branding !
      </h1>
    </div>
  );
};

export default AboutUsHero;
