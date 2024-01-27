const Form = (props) => {
  return (
    <div className=" px-[5%] py-28 bg-[#9670FF] text-white">
      <h2 className="uppercase text-5xl  font-semibold text-left ">
        How much will YOUR <br /> PROJECT cost?
      </h2>
      <h2 className=" text-lg  text-left mt-4">
        Choose one of the options below to get an accurate price estimation for
        your project:
      </h2>
      <div className="w-[70%] flex mt-12 shadow-xl mx-auto">
        <div className="flex flex-col justify-between items-start gap-8 text-white w-full bg-[#6A4EB8] p-8">
          <div className="text-lg font-bold ">Send us a message</div>
          <div className="flex flex-row justify-between items-center w-full gap-[10%]">
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Company Name"
            />
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Company/Organization"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-full gap-[10%]">
            <input
              type="number"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Business Type"
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
              placeholder="Budget"
            />
            <input
              type="number"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-full gap-[10%]">
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Services Required"
            />
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Location"
            />
          </div>
          <textarea
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0 h-[10rem]"
            placeholder="Send Us a Message"
          />
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <button
          href={"#"}
          className="px-8 py-4  bg-white text-[#8838D3] border border-[#8838D3]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
