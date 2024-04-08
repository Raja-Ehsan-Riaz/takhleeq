import React from "react";
import { FaComment, FaEye, FaShare } from "react-icons/fa";

const BlogImage = () => {
  return (
    <div className="w-full h-[30vw]">
      <div className="services-hero-bg-globalscss w-full h-[90%] relative text-white">
        
      </div>
      <div className="flex flex-row justify-between items-center w-full h-[10%] bg-[#BBA2FF] text-[0.7rem] p-6">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-10 rounded-full bg-gray-400"></div>
          <div className="italic text-sm"> Saqib Malik</div>
        </div>
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
      </div>
    </div>
  );
};

export default BlogImage;
