import Image from "next/image";

const FAQhero = () => {
    return (
      <div className="flex h-[70vh] relative  bg-[#8838D3]/30 ">
        <Image
          fill={true}
          style={{ objectFit: "cover",objectPosition:"0px 0%" }}
          src="/Images/Heros/faqs.jpg"
          className=" absolute -z-10"
          priority
        />
        <h1 className=" text-white pop text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto">
          Frequently 
          <br />
          Asked {" "}
          <span >
            Questions
          </span>
        </h1>
      </div>
    );
  };
  
  export default FAQhero;