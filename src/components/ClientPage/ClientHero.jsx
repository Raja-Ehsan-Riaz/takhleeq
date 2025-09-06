import Image from "next/image";
const ClientHero = ({ title, images }) => {
  return (
    <div className="flex h-[70vh] relative overflow-hidden p-2 bg-[#7936b7]/50 bg-gradient-to-r  from-[#1312149E]/50 via-[#1312149E]/50 to-[#1312149E]/50">
      <Image
        fill={true}
        style={{ objectFit: "cover", objectPosition: "0px 30%" }}
        src={images}
        className=" absolute -z-10"
        priority
      />
      <h1 className="text-white pop text-center mx-auto text-4xl md:text-5xl uppercase font-bold mb-10 mt-auto">
        {title}
      </h1>
    </div>
  );
};

export default ClientHero;
