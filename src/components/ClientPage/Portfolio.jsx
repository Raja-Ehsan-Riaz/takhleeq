"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Portfolio = ({ title, portfolio }) => {
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
    <div
      className={`flex flex-col justify-center items-center gap-6 py-16 lg:py-28 bg-[#7957931A]`}
    >
      <h2 className=" text-left text-4xl uppercase font-bold mb-10">
        Portfolio
      </h2>
      <div className=" mx-auto px-[5%] w-full relative ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          ref={swiperRef}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {portfolio.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                key={index}
                src={`/portfolio/${title}/${item}.jpg`}
                alt=""
                width={3000}
                height={100}
                className="md:w-[60%] m-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
          <div className="swiper-button-prev-container absolute left-20 top-[40%] cursor-pointer text-[#8838D3] hidden lg:block z-20 ">
            <div className="swiper-button-prev-custom" onClick={goToPrevSlide}>
              {<RiArrowLeftSLine size={80} />}
            </div>
          </div>
          <div className="swiper-button-next-container absolute right-20 top-[40%] cursor-pointer text-[#8838D3]  hidden lg:block z-20 ">
            <div className="swiper-button-next-custom" onClick={goToNextSlide}>
              {<RiArrowRightSLine size={80} />}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
