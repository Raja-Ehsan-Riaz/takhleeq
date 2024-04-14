import Image from "next/image";
const ServiceHero = ({service,image}) => {
    return (
      <div className="flex h-[70vh] relative overflow-hidden bg-[#7936b7]/30 bg-gradient-to-r from-[#1312149E]/50 via-[#1312149E]/50 to-[#1312149E]/50 ">
      <Image
        fill={true}
        style={{ objectFit: "cover", objectPosition: "0px 10%" }}
        src={image}
        className=" absolute -z-10"
      />
        <h1 className="text-white text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto">
         {service}
        </h1>
      </div>
    );
  };
  
  export default ServiceHero;