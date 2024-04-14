import Image from "next/image";
import { FaComment, FaEye, FaShare } from "react-icons/fa";

const BlogImage = ({ picture }) => {
  return (
    <div className="w-full h-[30vw] ">
      <div className=" w-full h-[90%] relative text-white">
        <Image
          src={`/Images/blogs/${picture}`}
          alt=""
          fill
          className="absolute"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full h-[10%] bg-[#BBA2FF] text-[0.7rem] p-6">
        <div className="flex gap-4 items-center">
          {" "}
          <div className="h-10 w-10 rounded-full overflow-hidden  relative ">
            <Image
              fill={true}
              style={{ objectFit: "cover", objectPosition: "0px 30%" }}
              src="/Images/Team/Core Team/Saqib Malik.jpg"
              className=" absolute "
            />
          </div>
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
