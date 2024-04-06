import SingleServiceCard from "./SingleServicesCard";
import services from "../../utils/services.json";

const ServicesList = ({ upper }) => {
  return (
    <div className="py-20 px-[5%]">
      <h2 className="text-center text-4xl text-black font-bold ">Services</h2>
      <div className="flex flex-col md:flex-row items-center justify-center  flex-wrap w-full">
        {upper ? (
          <>
            {services.slice(0, 6).map((service, index) => (
              <SingleServiceCard key={index} {...service} />
            ))}
          </>
        ) : (
          <>
            {services.slice(6).map((service, index) => (
              <SingleServiceCard key={index} {...service} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesList;
