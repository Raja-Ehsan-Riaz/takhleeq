import Image from "next/image";
import clients from "../../utils/clientsdetails.json";
const OtherClients = () => {
  return (
    <div className="py-28 px-[5%] bg-gray-200">
      <h2 className="uppercase text-4xl text-[#8838D3]  font-bold text-center">
        Meet <span className="text-black">Our Other Clients</span>
      </h2>
      <div className="mt-12 flex flex-wrap gap-2 justify-center items-center">
        {clients
          .filter((client) => client.description.length === 0)
          .map((client,index) => (
            <div key={index} className="h-[10rem] w-[20rem] rounded-lg overflow-hidden relative">
              <Image src={`/Icons&Symbols/clients${client.icon}`} alt="" fill className="absolute" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default OtherClients;
