const ServiceHero = ({service}) => {
    return (
      <div className="services-hero-bg-globalscss flex h-[70vh]">
        <h1 className="text-[#8838D3] text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto">
         {service}
        </h1>
      </div>
    );
  };
  
  export default ServiceHero;