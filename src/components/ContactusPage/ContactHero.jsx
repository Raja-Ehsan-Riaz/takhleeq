import Image from "next/image";

const ContactHero = () => {
    return (
      <div className="flex h-[70vh] relative overflow-hidden bg-[#7936b7]/50 bg-gradient-to-r from-[#1312149E]/50 via-[#1312149E]/50 to-[#1312149E]/50 ">
        <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src="/Images/Heros/contact.jpg"
          className=" absolute -z-10"
        />
        <h1 className="text-[#8838D3] text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto ">
          Contact{" "}
          <span className="text-white">
            Us
          </span>
        </h1>
      </div>
    );
  };
  
  export default ContactHero;