import Image from "next/image";

const ClientsHero = () => {
    return (
      <div className="flex h-[70vh] relative overflow-hidden bg-gray-900/40 bg-gradient-to-r from-[#1312149E]/50 via-[#1312149E]/50 to-[#1312149E]/50 ">
      <Image
        fill={true}
        style={{ objectFit: "cover",objectPosition:"0px 10%" }}
        src="/Images/Heros/clients.jpg"
        className=" absolute -z-10"
      />
        <h1 className="text-[#8838D3] text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto">
          Clients 
          <br />
          at {" "}
          <span className="text-white ">
            Takhleeq
          </span>
        </h1>
      </div>
    );
  };
  
  export default ClientsHero;