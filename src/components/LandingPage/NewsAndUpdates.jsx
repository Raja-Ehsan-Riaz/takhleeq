import Link from "next/link";
import blogs from "../../utils/blogs.json";
import Image from "next/image";

const NewsAndUpdates = () => {
  return (
    <div className="px-[5%] py-24 bg-[#7957931A]">
      <h2 className="text-[#8838D3] text-left text-4xl uppercase font-bold mb-10">
        News and{" "}
        <span className="text-black">
          updates
        </span>
      </h2>
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row">
          {blogs.slice(0, 3).map((news, idx) => (
            <Link
              key={idx}
              href={`/blog/${news.title}`}
              className={`relative bg-gray-900/50  hover:bg-[#8838D3]/90 cursor-pointer p-4 lg:w-[33.33%] pt-36 pr-16`}
            >
              <Image
                fill={true}
                style={{ objectFit: "cover" }}
                src={`/Images/Blogs/${news.images[0]}`}
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
        </div>

        <div className="flex flex-col lg:flex-row ">
          {blogs.slice(3, 5).map((news, idx) => (
            <Link
              key={idx}
              href={`/blog/${news.title}`}
              className={`relative bg-gray-900/50  hover:bg-[#8838D3]/90 cursor-pointer p-4 lg:w-[50%] pt-44 pr-20`}
            >
              <Image
                fill={true}
                style={{ objectFit: "cover" }}
                src={`/Images/Blogs/${news.images[0]}`}
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
        </div>
      </div>
      <div className="flex w-full">
        <Link href={"/blogs"} className="mx-auto">
          <div className="px-12 py-4   focus:outline-none  relative  border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100">
            <div className="relative  z-20">Explore More</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
