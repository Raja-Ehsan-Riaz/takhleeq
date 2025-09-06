"use client";
import React, { useState } from "react";

const NeedConsultation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.message
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xayrrdwa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while submitting the form");
    }
  };
  // 
  return (
    <div className="w-full   px-[5%] py-20 flex justify-center items-center">
      <div className="max-w-xl">
        <h2 className="text-left text-5xl uppercase font-bold mb-6">
          What&apos;s the next step for your brand?
        </h2>
        <p className="text-lg">
          Wherever you are in your branding journey, our dynamic team of experts
          will guide your growth, elevate your strategy, and bring your
          brand&apos;s hidden potential to life.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:ml-12">
        <div className="bg-gradient-to-bl from-[#382a69] to-[#3c2886] text-white p-12 rounded-3xl border border-black">
          <form className="mt-4 flex flex-col items-center">
            <div className="flex flex-col lg:flex-row justify-between space-x-6 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="fullName" className="mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  required
                  className="p-4 w-full border-b border-white  focus:outline-none bg-transparent"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="mb-2 font-semibold">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                  required
                  className="p-4 w-full border-b border-white  focus:outline-none bg-transparent"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between space-x-6 w-full mt-4">
              <div className="flex flex-col w-full">
                <label htmlFor="company" className="mb-2 font-semibold">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  required
                  className="p-4 w-full border-b border-white  focus:outline-none bg-transparent"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="phoneNumber" className="mb-2 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="123 45678"
                  className="p-4 w-full border-b border-white  focus:outline-none bg-transparent"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-4 w-full">
              <label htmlFor="message" className="mb-2 font-semibold">
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                placeholder="Write here your message"
                className="p-4 border-b border-white  focus:outline-none bg-transparent w-full"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-12 py-4 focus:outline-none relative border bg-white border-black text-black cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 mt-12"
            >
              <div className="relative z-20">Submit</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NeedConsultation;
