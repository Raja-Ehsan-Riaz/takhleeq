import SingleSolutionCard from "./SingleSolutionCard";

const Solutions = () => {
  return (
    <div className="bg-[#8838D3] py-24 px-[5%]">
      <h2 className="text-white text-left mx-auto text-4xl uppercase font-bold mb-10 mt-auto">
        We Shape the perfect <br />
        <span className="text-black border-b-[6px] border-b-[#ffffff]">
          solutions
        </span>
      </h2>
      <p className="w-[60%] text-white">
        We are committed to providing our customers with exceptional service
        while offering our employees the best training. We are committed to
        providing our customers with exceptional service while offering our
        employees the best training.
      </p>
      <div className="flex flex-wrap gap-12 justify-center mt-10">
        <SingleSolutionCard />
        <SingleSolutionCard />
        <SingleSolutionCard />
        <SingleSolutionCard />
      </div>
    </div>
  );
};

export default Solutions;
