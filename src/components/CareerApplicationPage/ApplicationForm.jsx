const ApplicationForm = (props) => {
  return (
    <div className="flex flex-col justify-center items-center px-[5%] py-28 bg-[#7957931A] ">
      <h2 className="uppercase text-4xl  font-bold text-center">
        Application{" "}
        <span className="text-[#8838D3]">Form</span>
      </h2>
      <h2 className=" text-lg  text-center mt-8">
        Fill in the application form:
      </h2>
      <div className=" w-full lg:w-[70%] flex mt-6 shadow-xl">
        <div className="flex flex-col justify-between items-start gap-8 text-white w-full bg-[#6A4EB8] p-8">
          <div className="text-lg font-bold ">{props.career.slice(0,props.career.length-1)}</div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="number"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Phone"
            />
            <input
              type="number"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Tel"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="How many years of experience do you have?"
            />
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="This is a full-time job. Does this work for you?"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Salary"
            />
            <input
              type="email"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Location"
            />
          </div>
          <textarea
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0 h-[10rem]"
            placeholder="Write or attach cover letter"
          />
        </div>
      </div>
      <div className="mt-16">
      <button
              type="submit"
              className=" px-12 py-4 mt-4  focus:outline-none   relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100"
            >
              <div className="relative z-20">
              Submit
              </div>
            </button>
      </div>
    </div>
  );
};

export default ApplicationForm;
