"use client";

import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const NeedConsultation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("\n\nThis is a test form and currently is not accepting submissions");
  };

  return (
    <div className="w-full bg-[#7957931A] px-[5%] py-20">
      <h2 className="text-[#8838D3] text-left text-4xl uppercase font-bold mb-10">
        Need{" "}
        <span className="text-black border-b-[6px] border-b-[#8838D3]">
          Consultation?
        </span>
      </h2>
      <div className="flex flex-row">
        <div className="w-[75%]">
          <p>Drop us a line! We are here to answer your questions 24/7.</p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
            <div className="flex flex-row justify-between">
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Full Name"
                required
                className="p-4 border border-[#8838D3] rounded-lg bg-transparent"
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Work Email"
                required
                className="p-4 border border-[#8838D3] rounded-lg bg-transparent"
              ></input>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                required
                className="p-4 border border-[#8838D3] rounded-lg bg-transparent"
              ></input>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="Phone Number"
                className="p-4 border border-[#8838D3] rounded-lg bg-transparent"
              ></input>
            </div>
            <div className="mt-4">
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                placeholder="How can we help you?"
                className="p-4 border border-[#8838D3] rounded-lg bg-transparent w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-[#8838D3] text-white mx-auto mt-4"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-[25%] pl-12">
          <div>
            <h3 className="text-[#8838D3] text-left font-bold text-xl uppercase mb-4">
              Contact{" "}
              <span className="text-black border-b-[3px] border-b-[#8838D3]">
                Details
              </span>
            </h3>
            <div className="flex flex-row gap-4 pl-2 mt-4 mb-2">
              <FaPhone size={25} color="#000000" />
              <div>
                <p>0333-1234567</p>
                <p>0333-1234567</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 pl-2">
              <FaEnvelope size={25} color="#000000" />
              <p>contact@takhleeq.com</p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-[#8838D3] text-left font-bold text-xl uppercase">
              Press{" "}
              <span className="text-black border-b-[3px] border-b-[#8838D3]">
                Inquiries
              </span>
            </h3>
            <div className="flex flex-row gap-2 my-2 items-center">
              <p className="uppercase">Get in touch with us</p>
              <IoIosArrowRoundForward size={35} color="#000000" />
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-[#8838D3] text-left font-bold text-xl uppercase">
              Join Our{" "}
              <span className="text-black border-b-[3px] border-b-[#8838D3]">
                Team
              </span>
            </h3>
            <div className="flex flex-row gap-2 my-2 items-center">
              <p className="uppercase">CHECK OUR OPEN VACANCIES</p>
              <IoIosArrowRoundForward size={35} color="#000000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedConsultation;
