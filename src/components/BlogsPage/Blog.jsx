import Link from "next/link";
import Image from "next/image";
// import React from "react";
import { FaComment, FaEye, FaShare } from "react-icons/fa";

const Blog = ({ title, images, date }) => {
  // Convert dateString to a Date object
  const currentdate = new Date(date);

  // Calculate the difference in milliseconds between now and the provided date
  const differenceInMs = Date.now() - currentdate.getTime();

  // Convert the difference to days
  const daysAgo = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  return (
    <div className="w-full h-[70vw] lg:h-[30vw] hover:shadow-lg transition duration-500 shadow-black ">
      <Link className="w-full h-full  " href={`/blog/${title}`}>
        <div className=" w-full h-[100%] relative text-white bg-gray-900/20">
          <Image
            src={`/Images/Blogs/${ title === "Consistency and Focus Can Beat Every Hurdle"?images[0]:images[1]}`}
            alt=""
            fill
            className="absolute -z-10 object-cover"
          />
          <div className="flex flex-col justify-between items-start  absolute bottom-0 left-0 p-4">
            <button className="p-2 bg-white mb-4 rounded-lg text-black text-[0.6rem]">
              {daysAgo == 0 ? (
                <>today</>
              ) : daysAgo == 1 ? (
                <>{daysAgo} day ago</>
              ) : (
                <> {daysAgo} days ago</>
              )}
            </button> 
            <div className="text-xl md:text-2xl font-bold uppercase">{title}</div>
            <div className=" text-sm md:text-base italic">{date}</div>
          </div>
        </div>
      </Link>
      {/* <div className="flex flex-row justify-between items-center w-full h-[10%] bg-[#BBA2FF] text-[0.7rem] p-6">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden  relative ">
            <Image
              fill={true}
              style={{ objectFit: "cover", objectPosition: "0px 30%" }}
              src="/Images/Team/Core Team/Saqib Malik.jpg"
              className=" absolute "
            />
          </div>
          <div className="italic text-sm"> Saqib Malik</div>
        </div> */}
        {/* <div className="flex gap-4 items-center">
          <div className="flex gap-2  items-center">
            <FaEye size={20} />
            <div>34k views</div>
          </div>
          <div className="flex gap-2 items-center">
            <FaComment size={18} />
            <div> 34k comments</div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaShare size={18} />
            <div>Share</div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Blog;
