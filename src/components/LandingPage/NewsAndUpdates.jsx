import Link from "next/link"
import blogs from "../../utils/blogs.json"
import Image from "next/image"

const NewsAndUpdates = () => {
	return (
		<div className="px-[5%] py-16 md:py-24 text-white   bg-gradient-to-b from-[#300a44] to-[#007d60]">
			<h2 className="text-center  text-4xl uppercase font-bold mb-10">
				News and updates
			</h2>
			<div className="mb-16">
				<div className="flex flex-row flex-wrap gap-2 justify-center mt-4 mb-12 w-full text-white">
					{blogs.slice(0, 4).map((news, idx) => (
						<Link
							key={idx}
							href={`/blog/${news.title}`}
							className=" lg:w-[40%] w-[29rem]  overflow-hidden border-2 shadow-md bg-white text-black  relative  m-2 hover:shadow-2xl hover:border-gray-800 transform duration-500 rounded-3xl  hover:z-40 group"
						>
							<div className="relative h-[15rem] overflow-hidden">
								<div className="w-[100vw] h-full absolute left-0 top-0 z-20 bg-gray-800/20"></div>
								<Image
									src={`/Images/Blogs/${
										news.title === "Consistency and Focus Can Beat Every Hurdle"
											? news.images[0]
											: news.images[1]
									}`}
									alt=""
									fill
									style={{ objectFit: "cover", objectPosition: "0px 10%" }}
									className="absolute"
								/>
							</div>
							<div className="p-8 text-left">
								<div className="w-full text-2xl font-semibold  text-gray-900 ">
									{news.title}
								</div>
								<div className="text-gray-800 font-light mt-4">
									{news.description.slice(0, 200)}...
								</div>
							</div>
						</Link>
					))}
				</div>
				{/* <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row mb-2 lg:mb-0">
          {blogs.slice(0, 3).map((news, idx) => (
            <Link
              key={idx}
              href={`/blog/${news.title}`}
              className={`relative bg-gray-900/30  hover:bg-[#8838D3]/90 cursor-pointer p-4 lg:w-[33.33%] pt-24 md:pt-36 pr-16`}
            >
              <Image
                fill={true}
                style={{ objectFit: "cover" }}
                src={`/Images/Blogs/${news.title==="Consistency and Focus Can Beat Every Hurdle"?news.images[0]:news.images[1]}`}
                className=" absolute -z-10"
              />
              <div className="bg-[#8838D3] px-3 py-1 text-white text-sm inline-block  border-white border-2 rounded-lg">
                <p>Latest</p>
              </div>
              <h3 className="text-lg text-white mt-4 font-semibold uppercase">
                {news.title}
              </h3>
              <p className="text-sm font-light text-white mb-8">
                <i>{news.date}</i>
              </p>
            </Link>
          ))}
        </div> */}
				{/*         
        <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row ">
          {blogs.slice(3, 5).map((news, idx) => (
            <Link
              key={idx}
              href={`/blog/${news.title}`}
              className={`relative bg-gray-900/30  hover:bg-[#8838D3]/90 cursor-pointer p-4 lg:w-[50%] pt-24 md:pt-44 pr-20`}
            >
              <Image
                fill={true}
                style={{ objectFit: "cover" }}
                src={`/Images/Blogs/${news.images[1]}`}
                className=" absolute -z-10"
              />
              <div className="bg-[#8838D3] px-3 py-1 text-white text-sm inline-block  border-white border-2 rounded-lg">
                <p>Latest</p>
              </div>
              <h3 className="text-lg text-white mt-4 font-semibold uppercase">
                {news.title}
              </h3>
              <p className="text-sm font-light text-white">
                <i>{news.date}</i>
              </p>
              <p className="text-white text-md my-2 mb-8 hidden lg:block">
                {news.description.slice(0, news.description.length / 3)}
                {"..."}
              </p>
            </Link>
          ))}
        </div> */}
			</div>
			<div className="flex w-full">
				<Link href={"/blogs"} className="mx-auto">
					<div className="px-12 py-4  focus:outline-none   relative border bg-white border-black text-black cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
						<div className="relative z-20">Explore More</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default NewsAndUpdates
