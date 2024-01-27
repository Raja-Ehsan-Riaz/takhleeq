import React from "react";
import TeamCard from "./TeamCard";

const OurTeamContainer = () => {
  return (
    <div className=" py-28">
      <h2 className="uppercase text-4xl  font-bold text-center">
        our{" "}
        <span className="text-[#8838D3] border-b-8 border-b-black">team</span>
      </h2>
      <h2 className=" text-3xl  font-semibold text-center mt-12">Officers</h2>
      <div className="flex flex-wrap justify-center items-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <h2 className=" text-3xl  font-semibold text-center mt-12">Officers</h2>
      <div className="flex flex-wrap justify-center items-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <h2 className=" text-3xl  font-semibold text-center mt-12">Officers</h2>
      <div className="flex flex-wrap justify-center items-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default OurTeamContainer;
