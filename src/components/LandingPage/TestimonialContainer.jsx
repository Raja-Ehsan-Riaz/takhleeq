"use client";
import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Testimonial from "./Testimonial";

const TestimonialContainer = () => {
  return (
    <div className=" py-28 ">
        <h2 className=" px-[5%] uppercase  text-[#8838D3] text-4xl  font-bold text-left">
        What Clients {" "}
          <span className="text-black border-b-8 border-b-[#8838D3]">Say</span>
        </h2>
      <div className=" mx-auto px-[5%]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y,Autoplay]}
          slidesPerView={1}
          autoplay          
          loop={true}
          breakpoints={{
            // when window width is >= 768px
            960: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <Testimonial/>
          </SwiperSlide>
          
          <SwiperSlide>
            <Testimonial even/>
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial/>
          </SwiperSlide>
          
          <SwiperSlide>
            <Testimonial even/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialContainer;
