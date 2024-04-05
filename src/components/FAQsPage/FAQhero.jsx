import Image from "next/image";

const FAQhero = () => {
    return (
      <div className="flex h-[70vh] relative  bg-[#1312149E]/60 bg-gradient-to-r from-[#1312149E]/50 via-[#1312149E]/20 to-[#1312149E]/50">
        <Image
          fill={true}
          style={{ objectFit: "cover",objectPosition:"0px 0%" }}
          src="/Images/Heros/faq.png"
          className=" absolute -z-10"
        />
        <h1 className="text-[#8838D3] text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto">
          Frequently 
          <br />
          Asked {" "}
          <span className="text-white border-b-[6px] border-b-[#8838D3]">
            Questions
          </span>
        </h1>
      </div>
    );
  };
  
  export default FAQhero;