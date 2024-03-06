import { ClientCard } from "./ClientCard";
import clients from "../../../utils/clientsdetails.json";

const ClientsContainer = () => {
  return (
    <div className="py-28 px-[5%]">
      <h2 className="uppercase text-4xl text-[#8838D3]  font-bold text-center">
        Our <span className="text-black">Clients</span>
      </h2>
      <div className="mt-12 flex flex-col justify-center items-center gap-8">
        {clients.map((client, index) => (
          <ClientCard key={index} {...client} />
        ))}
      </div>
    </div>
  );
};

export default ClientsContainer;
