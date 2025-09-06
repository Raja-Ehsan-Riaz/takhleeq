"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = ({ home }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const tabs = [
    "Services Related Questions",
    "Planning and Pricing",
    "Technical Support",
  ];

  const faqs = [
    [
      {
        question:
          "What branding services does takhleeq.io offer to help businesses establish a strong identity in the market? ",
        answer:
          "takhleeq.io offers comprehensive branding services, including brand identity development, logo design, and brand strategy. ",
      },
      {
        question:
          "How can takhleeq.io's web development services enhance my online presence and engage my target audience effectively? ",
        answer:
          "takhleeq.io's web development services create intuitive and high-performance websites that reflect brand identities and engage visitors effectively.",
      },
      {
        question:
          "Does takhleeq.io provide social media marketing solutions to help businesses increase their brand visibility and engage with their audience?",
        answer:
          "Yes, takhleeq.io provides social media marketing solutions to boost brand visibility and foster meaningful interactions across diverse platforms.",
      },
      {
        question:
          "Can takhleeq.io assist with content creation to develop compelling and relevant content that resonates with my target audience?",
        answer:
          "takhleeq.io specializes in content creation, producing engaging and relevant content tailored to your target audience's preferences and interests. ",
      },
    ],
    [
      {
        question:
          "What is the typical process and timeline for takhleeq.io's branding services, and how much does it cost?",
        answer:
          "takhleeq.io's branding process typically involves initial consultations, research, design iterations, and final delivery, with pricing varying based on project scope and complexity.",
      },
      {
        question:
          "Can you provide an overview of the pricing structure for takhleeq.io's web development services, and are there any additional fees or charges?",
        answer:
          "takhleeq.io's web development pricing depends on factors such as site complexity, features, and customization, with transparent pricing structures and options for additional services.",
      },
      {
        question:
          "How does takhleeq.io determine pricing for social media marketing campaigns, and what factors influence the overall cost?",
        answer:
          "takhleeq.io's social media marketing pricing is influenced by campaign objectives, target audience, ad placement, and ad spend, with flexible pricing models tailored to client budgets.",
      },
      {
        question:
          "What are the pricing options available for takhleeq.io's content creation services, and do you offer customizable packages based on specific needs?",
        answer:
          "takhleeq.io offers content creation pricing based on factors like content type, volume, complexity, and level of customization, with options for customizable packages to suit specific needs and budgets.",
      },
    ],
    [
      {
        question:
          "How does takhleeq.io handle technical issues or bugs that arise during the branding or web development process?",
        answer:
          "takhleeq.io promptly addresses technical issues and bugs during projects, ensuring smooth progress and client satisfaction.",
      },
      {
        question:
          "What technical support options are available for clients using takhleeq.io's digital marketing services, particularly for troubleshooting or optimizing campaigns?",
        answer:
          "Clients have access to technical support for troubleshooting and optimizing digital marketing campaigns, ensuring optimal performance.",
      },
      {
        question:
          "Can takhleeq.io as sist with website maintenance and updates post-launch, and what level of technical support is included in ongoing service packages?",
        answer:
          "takhleeq.io offers website maintenance and updates post-launch, with varying levels of technical support included in service packages.",
      },
      {
        question:
          "Does takhleeq.io provide technical assistance for integrating and optimizing third-party tools or platforms used in branding, web development, or digital marketing efforts?",
        answer:
          "Yes, takhleeq.io provides technical assistance for integrating and optimizing third-party tools or platforms, enhancing overall project efficiency and effectiveness.",
      },
    ],
  ];

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div
      className={` ${
        home ? ` px-[5%] py-16 lg:py-24 bg-gray-200 w-full` : " w-full md:w-[90%] m-auto"
      }`}
    >
      {home && (
        <h1 className="uppercase text-4xl  font-bold text-gray-900 mb-12">
          Frequently Asked <span className="text-[#8838D3]">Questions</span>
        </h1>
      )}
      <div className="flex flex-col md:flex-row  justify-evenly items-center gap-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index
                ? "bg-[#8838D3] text-white"
                : "bg-white text-[#8838D3]"
            } p-6 rounded-lg focus:outline-none w-[20rem]  md:w-[25rem] relative   font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-[#8838D3] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
          >
            <div className="relative z-20">{tab}</div>
          </button>
        ))}
      </div>
      {faqs.map((item, index) => {
        return (
          <div
            key={index}
            className={`py-4 md:p-4 rounded-b-lg mt-8 ${
              activeTab === index ? "change-item" : "hidden"
            }`}
          >
            {item.map((faq, index) => (
              <div
                key={index}
                className="mb-8 relative pr-8 text-sm md:text-base"
              >
                <div className="absolute right-2 top-2">
                  <IoIosArrowDown
                    className={`text-black duration-500 transition-transform ${
                      activeQuestion === index ? "rotate-180" : "rotate-0"
                    }`}
                    size={30}
                  />
                </div>
                <div
                  onClick={() => handleQuestionClick(index)}
                  className={`cursor-pointer font-semibold border-l-8 border-[#8838D3]   p-4 ${
                    activeQuestion === index ? "text-black" : "text-black"
                  }`}
                >
                  {faq.question}
                </div>
                {activeQuestion === index && (
                  <div className="text-black p-4 change-item">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
