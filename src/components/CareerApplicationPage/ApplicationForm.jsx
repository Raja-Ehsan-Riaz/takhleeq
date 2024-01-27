const ApplicationForm = (props) => {
  return (
    <div className="flex flex-col justify-center items-center px-[5%] py-28 bg-[#7957931A] ">
      <h2 className="uppercase text-4xl  font-bold text-center">
        Application{" "}
        <span className="text-[#8838D3] border-b-8 border-b-black">Form</span>
      </h2>
      <h2 className=" text-lg  text-center mt-8">
        Fill in the application form:
      </h2>
      <div className="w-[70%] flex mt-6 shadow-xl">
        <div className="flex flex-col justify-between items-start gap-8 text-white w-full bg-[#6A4EB8] p-8">
          <div className="text-lg font-bold ">Graphic Designer</div>
          <div className="flex flex-row justify-between items-center w-full gap-[10%]">
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
          <div className="flex flex-row justify-between items-center w-full gap-[10%]">
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
          <div className="flex flex-row justify-between items-center w-full gap-[10%]">
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
          <div className="flex flex-row justify-between items-center w-full gap-[10%]">
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
          href={"#"}
          className="px-8 py-4 bg-white text-[#8838D3] border border-[#8838D3]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ApplicationForm;
