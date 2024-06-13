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

    // Check if all fields are filled
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
      const response = await fetch("https://formspree.io/f/xayrglwz", {
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
      console.log(error)
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <div className="w-full bg-[#7957931A] px-[5%] py-20">
      <h2 className="text-[#8838D3] text-left text-4xl uppercase font-bold mb-6">
        Need <span className="text-black ">Consultation?</span>
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className=" w-full">
          <p>Drop us a line! We are here to answer your questions 24/7.</p>
          <form
            className="mt-4  flex flex-col items-center"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-4 w-full">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                required
                className="p-4 border w-full border-black focus:border-[#8838D3] focus:outline-none rounded-lg bg-transparent"
                value={formData.fullName}
                onChange={handleChange}
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Work Email"
                required
                className="p-4 border w-full border-black focus:border-[#8838D3] focus:outline-none rounded-lg bg-transparent"
                value={formData.email}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                required
                className="p-4 border w-full border-black focus:border-[#8838D3] focus:outline-none rounded-lg bg-transparent"
                value={formData.company}
                onChange={handleChange}
              ></input>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                className="p-4 border w-full border-black focus:border-[#8838D3] focus:outline-none rounded-lg bg-transparent"
                value={formData.phoneNumber}
                onChange={handleChange}
              ></input>
            </div>
            <div className="mt-4 w-full">
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                placeholder="How can we help you?"
                className="p-4 border border-black focus:border-[#8838D3] focus:outline-none rounded-lg bg-transparent w-full"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-12 py-4 mt-6 focus:outline-none relative border border-[#8838D3] bg-[#8838D3] text-white cursor-pointer font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#8838D3] before:hover:scale-x-100"
            >
              <div className="relative z-20">Submit</div>
            </button>
          </form>
        </div>
        {/* <div className="lg:w-[25%] mt-8 lg:mt-0 lg:pl-12">
          <div>
            <h3 className="text-[#8838D3] text-left font-bold text-xl uppercase mb-4">
              Contact{" "}
              <span className="text-black ">
                Details
              </span>
            </h3>
            <div className="flex flex-row gap-4 pl-2 mt-4 mb-2">
              <FaPhone size={25} color="#000000" />
              <div>
                <p>0333-8483016</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 pl-2">
              <FaEnvelope size={25} color="#000000" />
              <p>hr@takhleeq.io</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-[#8838D3] text-left font-bold text-xl uppercase">
              Press{" "}
              <span className="text-black ">
                Inquiries
              </span>
            </h3>
            <div className="flex flex-row gap-2 my-2 items-center">
            <Link href="/contact-us"><p className="uppercase">Get in touch with us</p></Link>
              <IoIosArrowRoundForward size={35} color="#000000" />
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-[#8838D3] text-left font-bold text-xl uppercase">
              Join Our{" "}
              <span className="text-black ">
                Team
              </span>
            </h3>
            <div className="flex flex-row gap-2 my-2 items-center">
             <Link href="/careers"> <p className="uppercase">CHECK OUR OPEN VACANCIES</p></Link>
              <IoIosArrowRoundForward size={35} color="#000000" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NeedConsultation;
