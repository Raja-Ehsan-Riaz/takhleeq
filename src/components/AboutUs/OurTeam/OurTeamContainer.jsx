"use client"
import teams from "../../../utils/teams.json"
import TeamCard from "./TeamCard" // import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { useRef } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"

const OurTeamContainer = ({ first, coreTeam }) => {
	const swiperRef = useRef(null)

	const goToPrevSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev()
		}
	}

	const goToNextSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext()
		}
	}
	return (
		<div
			id="team"
			className={` ${first ? " pt-16 md:pt-28 pb-12" : "pt-4 pb-28"}  px-[5%] `}
		>
			{first ? (
				<>
					<h2 className="uppercase text-4xl  font-bold text-center mb-4">
						Meet the Executives
					</h2>
					<div className=" text-lg text-justify md:text-center">
						A story that began with a daring vision.
					</div>
				</>
			) : (
				<>
					<h2 className="uppercase text-3xl  font-bold text-center mb-4">
						Brand Builders
					</h2>
					<div className=" text-lg text-justify md:text-center">
						Diverse, tight-knit team bringing ideas to life through strategy,
						design, and innovation.
					</div>
				</>
			)}
			<div className="w-[85%] mx-auto relative">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, A11y, Autoplay]}
					slidesPerView={1}
					loop
					autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
					ref={swiperRef}
					navigation={{
						prevEl: ".swiper-button-prev",
						nextEl: ".swiper-button-next",
					}}
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

					// navigation
				>
					{coreTeam ? (
						<>
							{teams.slice(0, 5).map((member, index) => (
								<SwiperSlide key={index}>
									<TeamCard
										name={member.Name}
										designation={member.Designation}
										picture={member.Picture}
									/>
								</SwiperSlide>
							))}
						</>
					) : (
						<>
							{teams.slice(5).map((member, index) => (
								<SwiperSlide key={index}>
									<TeamCard
										name={member.Name}
										designation={member.Designation}
										picture={member.Picture}
									/>
								</SwiperSlide>
							))}
						</>
					)}
				</Swiper>
				<div className="swiper-button-prev-container absolute -left-20 top-[40%] cursor-pointer text-[#8838D3] hidden lg:block ">
					<div className="swiper-button-prev-custom" onClick={goToPrevSlide}>
						{<RiArrowLeftSLine size={50} />}
					</div>
				</div>
				<div className="swiper-button-next-container absolute -right-20 top-[40%] cursor-pointer text-[#8838D3]  hidden lg:block ">
					<div className="swiper-button-next-custom" onClick={goToNextSlide}>
						{<RiArrowRightSLine size={50} />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurTeamContainer
