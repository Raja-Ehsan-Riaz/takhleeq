"use client";
import React, { useState } from "react";

const ApplicationForm = (props) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    tel: "",
    experience: "",
    fullTime: "",
    salary: "",
    location: "",
    coverLetter: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { fullName, email, phone, tel, experience, fullTime, salary, location, coverLetter } = formData;
    if (!fullName || !email || !phone || !tel || !experience || !fullTime || !salary || !location || !coverLetter) {
      alert("All fields are required");
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("title", props.career.slice(0, props.career.length - 1));
    formDataToSubmit.append("fullName", fullName);
    formDataToSubmit.append("email", email);
    formDataToSubmit.append("phone", phone);
    formDataToSubmit.append("tel", tel);
    formDataToSubmit.append("experience", experience);
    formDataToSubmit.append("fullTime", fullTime);
    formDataToSubmit.append("salary", salary);
    formDataToSubmit.append("location", location);
    formDataToSubmit.append("coverLetter", coverLetter);

    try {
      const response = await fetch("https://formspree.io/f/mbjnvprp", {
        method: "POST",
        body: formDataToSubmit,
      });
      console.log(response);
      if (response.ok) {
        alert("Form submitted successfully!");
        // Clear the form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          tel: "",
          experience: "",
          fullTime: "",
          salary: "",
          location: "",
          coverLetter: "",
        });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.log(error)
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
      <form className="w-full flex flex-col justify-center items-center" onSubmit={handleSubmit}>
        <div className="w-full lg:w-[70%] flex mt-6 shadow-xl">
          <div className="flex flex-col justify-between items-start gap-8 text-white w-full bg-[#6A4EB8] p-8">
            <div className="text-lg font-bold ">
              {props.career.slice(0, props.career.length - 1)}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
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
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
              <input
                type="number"
                name="phone"
                className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="tel"
                className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
                placeholder="Tel"
                value={formData.tel}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
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
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-[10%]">
              <input
                type="text"
                name="salary"
                className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
                placeholder="Salary"
                value={formData.salary}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="location"
                className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="coverLetter"
              className="bg-transparent placeholder-white/80 focus:outline-none text-sm border-b border-white/80 w-full p-2 pl-0 h-[10rem]"
              placeholder="Write or attach cover letter"
              value={formData.coverLetter}
              onChange={handleChange}
            />
          </div>
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
