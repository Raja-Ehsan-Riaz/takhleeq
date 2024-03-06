const Outcomes = ({ outcomes }) => {
  return (
    <div className=" flex flex-col items-start gap-8 px-[5%] py-28">
      <h2 className="uppercase text-4xl text-left font-bold ">
        Project{" "}
        <span className="text-[#8838D3] border-b-8 border-b-black">
          Outcomes
        </span>
      </h2>
      <div className="w-full flex flex-col items-center">
        <div className="w-[90%]"> {outcomes.description}</div>
        <div className="py-6  w-[80%]">
          <ul className="list-disc  flex flex-col gap-2">
            {outcomes.bullets.map((item,index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8 w-[80%] h-[25rem] bg-gray-600"></div>
      </div>
    </div>
  );
};

export default Outcomes;
