import Image from "next/image";

const CareerHero = () => {
    return (
      <div className="flex h-[70vh] relative  bg-[#7936b7]/50 bg-gradient-to-r  from-[#1312149E]/50 via-[#1312149E]/50 to-[#1312149E]/50">
         <Image
          fill={true}
          style={{ objectFit: "cover",objectPosition:"0px 30%" }}
          src="/Images/Heros/career.jpg"
          className=" absolute -z-10"
        />
        <h1 className="text-[#8838D3] pop text-center mx-auto text-4xl md:text-5xl uppercase font-bold mb-10 mt-auto">
          Careers
        </h1>
      </div>
    );
  };
  
  export default CareerHero;