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
    <div id="testimonials" className=" py-16 md:py-24 bg-gradient-to-r from-[#3d99d6] to-[#382a69]">
      <h2 className=" px-[5%] uppercase  text-white text-5xl  font-bold text-center">
        What Do Our Clients Have To Say?
      </h2>
      <div className=" mx-auto ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          loop={true}
          breakpoints={{
            // when window width is >= 768px
            960: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonials, index) => (
            <SwiperSlide key={index}>
              <Testimonial even={index % 2 === 0} {...testimonials} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialContainer;
