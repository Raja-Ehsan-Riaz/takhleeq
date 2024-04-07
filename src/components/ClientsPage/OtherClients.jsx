"use client";
import Image from "next/image";
import clients from "../../utils/clientsdetails.json";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const OtherClients = () => {
  return (
    <div className="py-28 px-[5%] bg-gray-200">
      <h2 className="uppercase text-4xl text-[#8838D3]  font-bold text-center mb-12">
        Meet <span className="text-black">Our Other Clients</span>
      </h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        loop={true}
        
        breakpoints={{
          650: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1330: {
            slidesPerView: 4,
          },
        }}

      >
        {clients
          .filter((client) => client.description.length === 0)
          .map((client, index) => (
            <SwiperSlide 
            key={index}>
              <div
                className="h-[10rem] w-[20rem] rounded-lg overflow-hidden relative m-auto"
              >
                <Image
                  src={`/Icons&Symbols/clients${client.icon}`}
                  alt=""
                  fill
                  className="absolute"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <div className="mt-12 flex flex-wrap gap-2 justify-center items-center">
        
      </div> */}
    </div>
  );
};

export default OtherClients;
