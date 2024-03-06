"use client";
import teams from "../../../utils/teams.json";
import TeamCard from "./TeamCard"; // import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const OurTeamContainer = ({ first, coreTeam }) => {
  const swiperRef = useRef(null);

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
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
            achieving the client&apos;s desired results.
          </div>
        </>
      ) : (
        <></>
      )}
      <h2 className=" text-3xl  font-semibold text-center mt-12">
        {coreTeam ? "Core Team" : "Other Members"}
      </h2>
      <div className="w-[80%] mx-auto relative">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={4}
          loop
          autoplay
          ref={swiperRef}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          // navigation
        >
          {coreTeam ? (
            <>
              {teams.slice(0, 4).map((member, index) => (
                <SwiperSlide key={index}>
                  <TeamCard
                    name={member.Name}
                    designation={member.Designation}
                  />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {teams.slice(4).map((member, index) => (
                <SwiperSlide key={index}>
                  <TeamCard
                    name={member.Name}
                    designation={member.Designation}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
        {!coreTeam && (
          <div className="swiper-button-prev-container absolute -left-20 top-[40%] cursor-pointer text-[#8838D3] ">
            <div className="swiper-button-prev-custom" onClick={goToPrevSlide}>
              {<RiArrowLeftSLine size={50} />}
            </div>
          </div>
        )}
        {!coreTeam && (
          <div className="swiper-button-next-container absolute -right-20 top-[40%] cursor-pointer text-[#8838D3] ">
            <div className="swiper-button-next-custom" onClick={goToNextSlide}>
              {<RiArrowRightSLine size={50} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurTeamContainer;
