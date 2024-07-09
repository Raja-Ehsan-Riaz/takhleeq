"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLocation, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const ApplicationForm = (props) => {
  const [formData, setFormData] = useState({
    title: props.career.slice(0, props.career.length - 1),
    fullName: "",
    email: "",
    phone: "",
    salary: "",
    location: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, coverLetterFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const {
      fullName,
      email,
      phone,
      salary,
      location,
      coverLetter,
      coverLetterFile,
    } = formData;
    if (
      !fullName ||
      !email ||
      !phone ||
      !coverLetter 
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/myyrrdga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        // Clear the form
        setFormData({
          title: props.career.slice(0, props.career.length - 1),
          fullName: "",
          email: "",
          phone: "",
          salary: "",
          location: "",
          coverLetter: "",
          coverLetterFile: null,
        });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-[5%] py-28 bg-[#7957931A] ">
      <h2 className="uppercase text-4xl font-bold text-center">
        Application <span className="text-[#8838D3]">Form</span>
      </h2>
      <h2 className="text-lg text-center mt-8">
        Fill in the application form:
      </h2>
      <form
        className="w-full lg:w-[70%] flex flex-col items-center mt-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-between items-start gap-8 text-white w-full bg-[#6A4EB8] p-8">
          <div className="text-lg font-bold ">
            {props.career.slice(0, props.career.length - 1)}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="text"
              name="fullName"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="number"
              name="phone"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Contact Number (Whatsapp) *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="salary"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Current Salary"
              value={formData.salary}
              onChange={handleChange}
            />
            {/* <input
              type="number"
              name="tel"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Tel"
              value={formData.tel}
              onChange={handleChange}
              required
            /> */}
          </div>
          {/* <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="text"
              name="experience"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="How many years of experience do you have?"
              value={formData.experience}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="fullTime"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="This is a full-time job. Does this work for you?"
              value={formData.fullTime}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="text"
              name="location"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="coverLetter"
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0 h-[10rem]"
            placeholder="Write Cover Letter / Add Link *"
            value={formData.coverLetter}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mt-16">
          <button
            type="submit"
            className="px-12 py-4 mt-4 focus:outline-none relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100"
          >
            <div className="relative z-20">Submit</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
