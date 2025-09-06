"use client"
import OfferCard from "./OfferCard"
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Offer = () => {
	const offers = [
		{
			title: "Branding and Strategy",
			src: "/Icons&Symbols/offer/uiux-design.png",
		},
		{
			title: "Creative Design",
			src: "/Icons&Symbols/offer/creative-design.png",
		},
		{
			title: "AI Driven Marketing",
			src: "/Icons&Symbols/offer/digital-marketing.png",
		},
		{ title: "Media Services", src: "/Icons&Symbols/offer/media-services.png" },
		{
			title: "Content Creation",
			src: "/Icons&Symbols/offer/content-creation.png",
		},
		{
			title: "Digital Development",
			src: "/Icons&Symbols/offer/web-development.png",
		},
	]
	return (
		<div className="flex flex-col items-center justify-center px-[5%] py-16 md:py-28  bg-gray-200 text-black">
			<h2 className="uppercase text-4xl text-center md:text-5xl font-bold">
				WHAT DO WE OFFER?
			</h2>
			<div className="text-lg mt-8 text-justify md:text-center ">
				We specialize in UX/UI design for websites and web/mobile apps, blending
				the latest UI/UX trends with clients&apos; unique goals.
			</div>
			<div className=" w-full mt-12 mx-auto px-[15%]">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, A11y, Autoplay]}
					slidesPerView={1}
					autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
					loop={true}
					breakpoints={{
						// when window width is >= 768px
						1100: {
							slidesPerView: 4,
						},
						500: {
							slidesPerView: 2,
						},
					}}
				>
					{offers.map((offer, index) => (
						<SwiperSlide key={index}>
							<OfferCard title={offer.title} src={offer.src} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Offer
