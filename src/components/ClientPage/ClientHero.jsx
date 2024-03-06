const ClientHero = ({title}) => {
    return (
      <div className="services-hero-bg-globalscss flex h-[70vh]">
        <h1 className="text-[#8838D3] text-center mx-auto text-5xl uppercase font-bold mb-10 mt-auto">
          {/* {title.split(" ")[0]}
          <br />
          <span className="text-white border-b-[6px] border-b-[#8838D3]">
            {title.split(" ")[1]}
          </span> */}
          {title}
        </h1>
      </div>
    );
  };
  
  export default ClientHero;