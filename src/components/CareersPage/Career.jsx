import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoEarth } from "react-icons/io5";

const Career = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-12 bg-[#7957931A] w-full rounded-lg flex flex-col items-start gap-6">
      {!show ? (
        <>
          <div className="flex justify-between items-center w-full">
            <div className="text-3xl font-bold text-[#8838D3]">
              {props.title}
            </div>
            <div className="text-[#8838D3] font-semibold">Apply Now</div>
          </div>
          <div>{props.description}</div>
          <div className=" flex justify-between items-end w-full">
            <div className="flex gap-8 items-center">
              <div className="flex items-center gap-4 py-3 px-8 font-semibold shadow-md bg-white cursor-pointer">
                <IoEarth size={20} /> <div> Remote</div>
              </div>
              <div className="flex items-center gap-4 py-3 px-8 font-semibold shadow-md bg-white cursor-pointer">
                <FaClock size={20} /> <div> Fultime</div>
              </div>
            </div>
            <div>
              <IoIosArrowDown
                onClick={() => {
                  setShow(true);
                }}
                size={30}
                className="cursor-pointer text-[#8838D3] "
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center w-full">
            <div className="text-3xl font-bold text-[#8838D3]">
              {props.title}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-full gap-2">
            <div className="text-xl font-semibold text-[#8838D3]">
              About the job
            </div>
            <div>{props.about}</div>
          </div>

          <div className="flex flex-col justify-center items-start w-full gap-2">
            <div className="text-xl font-semibold text-[#8838D3]">The Role</div>
            <div>{props.role}</div>
          </div>
          <div className="flex flex-col justify-center items-start w-full gap-2">
            <div className="text-xl font-semibold text-[#8838D3]">
              Responsibilities
            </div>
            <ul className="list-disc ml-5">
              {props.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-start w-full gap-2">
            <div className="text-xl font-semibold text-[#8838D3]">
              Ideal Profile
            </div>
            <ul className="list-disc ml-5">
              {props.profile.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className=" flex justify-between items-end w-full">
            <button
              href={"#"}
              className="px-10 py-4 bg-white text-black font-semibold"
            >
              Apply Now
            </button>
            <div>
              <IoIosArrowUp
                onClick={() => {
                  setShow(false);
                }}
                size={30}
                className="cursor-pointer text-[#8838D3] "
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Career;
