"use client";
import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({
    companyName: "",
    organization: "",
    businessType: "",
    email: "",
    budget: "",
    phoneNumber: "",
    servicesRequired: "",
    location: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.companyName ||
      !formData.organization ||
      !formData.businessType ||
      !formData.email ||
      !formData.budget ||
      !formData.phoneNumber ||
      !formData.servicesRequired ||
      !formData.location ||
      !formData.message
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/meqyyljy', {
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
          companyName: "",
          organization: "",
          businessType: "",
          email: "",
          budget: "",
          phoneNumber: "",
          servicesRequired: "",
          location: "",
          message: "",
        });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <div className=" px-[5%] py-28 bg-gray-100">
      <h2 className="uppercase text-5xl  font-semibold text-center ">
        How much will YOUR <br /> PROJECT cost?
      </h2>
      <h2 className=" text-lg  text-center mt-4">
        Choose one of the options below to get an accurate price estimation for
        your project:
      </h2>
      <div className="w-full lg:w-[70%] flex  mt-12 shadow-xl mx-auto">
        <div className="flex flex-col justify-between items-start gap-8 text-white w-full bg-[#6A4EB8] p-8">
          <div className="text-lg font-bold ">Send us a message</div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Company/Organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Business Type"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
            />
            <input
              type="email"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="number"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            />
            <input
              type="number"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Services Required"
              name="servicesRequired"
              value={formData.servicesRequired}
              onChange={handleChange}
            />
            <input
              type="text"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <textarea
            className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0 h-[10rem]"
            placeholder="Send Us a Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-16 flex justify-center">
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

export default Form;
