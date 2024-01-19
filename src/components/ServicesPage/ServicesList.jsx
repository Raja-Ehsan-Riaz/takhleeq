import SingleServiceCard from "./SingleServicesCard";

const ServicesList = () => {
  return (
    <div className="py-20 px-[5%]">
      <h2 className="text-center text-4xl text-black font-bold ">Services</h2>
      <div className="flex flex-wrap w-full">
        <SingleServiceCard />
        <SingleServiceCard />
        <SingleServiceCard />
        <SingleServiceCard />
        <SingleServiceCard />
        <SingleServiceCard />
      </div>
    </div>
  );
};

export default ServicesList;
