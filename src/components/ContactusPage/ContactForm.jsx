"use client"
import React, { useState } from "react";
import Link from "next/link";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLocation, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.message) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mzbnnapl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        alert("Form submitted successfully!");
        // Clear the form
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: ""
        });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-[5%] py-16 md:py-28">
      <h2 className="uppercase text-4xl  font-bold text-center">
        get in{" "}
        <span className="text-[#8838D3] ">touch</span>
      </h2>
      <h2 className=" text-lg  text-center mt-8">
        Drop us a line! We are here to answer your questions 24/7.
      </h2>
      <form className="w-full lg:w-[70%] flex flex-col md:flex-row mt-6 shadow-xl" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between items-start gap-4 text-white md:w-1/2 bg-[#6A4EB8] p-8">
          <div className="text-lg font-bold">Send us a message</div>
          <input
            type="text"
            name="fullName"
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="phoneNumber"
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0 h-[10rem]"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-6 text-white md:w-1/2 p-8  bg-[#79579D3A]">
          <h2 className="text-lg font-bold text-center text-[#8838D3]">
            Contact{" "}
            <span className="text-black">
              Details
            </span>
          </h2>
          <div className="flex flex-col gap-4 justify-center items-start text-black ">
            <div className="flex flex-row justify-start items-center gap-4">
              <FaPhone size={25} />
              <div className="ml-1">0333-8483016</div>
            </div>
            <div className="flex flex-row justify-start items-center gap-4">
              <IoMailOutline size={30} />
              <div>info@takhleeq.io</div>
            </div>
          </div>
          <h2 className="text-lg font-bold text-center text-[#8838D3]">
            Office{" "}
            <span className="text-black">
              Location
            </span>
          </h2>
          <div className="flex flex-col justify-center items-start text-black ">
            <div className="flex flex-row justify-start items-center gap-4">
              <IoLocation size={35} />
              <div>Takhleeq, Sector H-12, Islamabad</div>
            </div>
          </div>
          <h2 className="text-lg font-bold text-center text-[#8838D3]">
            Social{" "}
            <span className="text-black">
              Media
            </span>
          </h2>
          <div className="flex flex-row justify-evenly items-center w-full text-[#8838D3] mt-2">
            <Link target="_blank"  href={"https://www.facebook.com/takhleeq12"}>
              <FaSquareFacebook size={35} className="object-contain" />
            </Link>
            <Link target="_blank"  href={"https://www.instagram.com/takhleeq.io/"}>
              <BiLogoInstagramAlt size={40} className="object-contain" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/company/takhleeq-branding/mycompany/verification/"}>
              <IoLogoLinkedin size={35} className="object-contain" />
            </Link>
          </div>
        </div>
      </form>
      <div className="mt-12">
        <button
          type="submit"
          className="px-12 py-4 mt-4 focus:outline-none relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100"
          onClick={handleSubmit}
        >
          <div className="relative z-20">Submit</div>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
