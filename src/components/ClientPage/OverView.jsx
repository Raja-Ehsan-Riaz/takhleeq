const OverView = ({description}) => {
  return (
    <div className="flex flex-row justify-between px-[5%] py-28 gap-8">
      <div className="w-[60%] flex flex-col items-start gap-8">
        <h2 className="uppercase text-4xl text-left font-bold text-[#8838D3]">
          Project{" "}
          <span className="text-black border-b-8 border-b-[#8838D3]">
            Overview
          </span>
        </h2>
        <div className="text-lg mt-6">
         {description}
        </div>
        <div className="px-12 py-4   focus:outline-none   relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100">
          <div className="relative z-20">Visit Page</div>
        </div>
      </div>
      <div className="w-[40%] h-auto bg-slate-400">
        {/* <Image
          src={ITServicesImage}
          alt="people talking about IT"
          className=""
        /> */}
      </div>
    </div>
  );
};

export default OverView;
