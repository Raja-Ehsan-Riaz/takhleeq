import React, { useState } from "react";
import Link from "next/link";
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
            <Link href={`/career-application/${props.title}}`}>
              <div className="text-[#8838D3] font-semibold">Apply Now</div>
            </Link>
          </div>
          <div dangerouslySetInnerHTML={{__html:props.about}}></div>
          <div className=" flex justify-between items-end w-full">
            <div className="flex gap-8 items-center">
              <div className="flex items-center gap-4 py-3 px-8 font-semibold shadow-md bg-white cursor-pointer relative  bg-transparent  text-black  text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                <IoEarth size={20} className="relative z-20" />{" "}
                <div className="relative z-20"> Remote</div>
              </div>
              <div className="flex items-center gap-4 py-3 px-8 font-semibold shadow-md bg-white cursor-pointer relative  bg-transparent  text-black  text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                <FaClock size={20} className="relative z-20" />{" "}
                <div className="relative z-20"> Fultime</div>
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

          {/* <div className="flex flex-col justify-center items-start w-full gap-2">
            <div className="text-xl font-semibold text-[#8838D3]">The Role</div>
            <div>{props.role}</div>
          </div> */}

          <div className="flex flex-col justify-center items-start w-full gap-2">
            <div className="text-xl font-semibold text-[#8838D3]">
              Requirements
            </div>
            <ul className="list-disc ml-5">
              {props.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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
          <div className=" flex justify-between items-end w-full">
            <Link
              href={`/career-application/${props.title}}`}
              className="flex items-center gap-4 py-3 px-8 font-semibold shadow-md bg-white cursor-pointer relative  bg-transparent  text-[#8838D3]  text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-[#8838D3] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
            >
              <div className="z-50">Apply Now</div>
            </Link>
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
