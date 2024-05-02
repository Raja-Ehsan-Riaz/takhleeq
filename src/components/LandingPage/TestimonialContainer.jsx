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
import testimonials from "../../utils/testimonials.json";

const TestimonialContainer = () => {
  return (
    <div className=" py-20 ">
      <h2 className=" px-[5%] uppercase  text-[#8838D3] text-4xl  font-bold text-left">
        What Clients{"  "}
        <span className="text-black ">Say</span>
      </h2>
      <div className=" mx-auto px-[5%]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          loop={true}
          breakpoints={{
            // when window width is >= 768px
            960: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonials,index) => (
            <SwiperSlide key={index}>
              <Testimonial even={index%2===0} {...testimonials} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialContainer;
