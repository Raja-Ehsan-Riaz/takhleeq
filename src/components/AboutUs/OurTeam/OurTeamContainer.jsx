"use client";
import teams from "../../../utils/teams.json";
import TeamCard from "./TeamCard"; // import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const OurTeamContainer = ({ first, team }) => {
  return (
    <div className={` ${first ? "pt-28" : ""}  px-[5%] `}>
      {first ? (
        <>
          <h2 className="uppercase text-4xl  font-bold text-center mb-10">
            our{" "}
            <span className="text-[#8838D3] border-b-8 border-b-black">
              team
            </span>
          </h2>
          <div className="text-center text-lg">
            Our team of highly talented and professional individuals is at the
            heart of our mission and vision. With a focus on problem-solving
            through research and development, our young and dynamic
            professionals think outside the box and come up with unique
            solutions that are both visually appealing and effective in
            achieving the client's desired results.
          </div>
        </>
      ) : (
        <></>
      )}
      <h2 className=" text-3xl  font-semibold text-center mt-12">{team}</h2>
      <div className="w-[80%] mx-auto">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={4}
          loop={true}
          // navigation
        >
          {teams
            .find((item) => item.Name === team)
            ?.Members.map((member) => (
              <SwiperSlide>
                <TeamCard name={member.Name} designation={member.Designation} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeamContainer;
