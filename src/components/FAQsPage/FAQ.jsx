"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
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
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 1",
      },
      {
        question:
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 2",
      },
      {
        question:
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 2",
      },
      {
        question:
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 2",
      },
    ],
    [
      {
        question: " which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 3",
      },
      {
        question:
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 4",
      },
      {
        question:
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 2",
      },
      {
        question:
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 2",
      },
    ],
    [
      {
        question:
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 5",
      },
      {
        question: " which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 6",
      },
      {
        question:
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 2",
      },
      {
        question:
          "If you could travel back in time to any historical period, which era would you choose, and why?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit 1 2",
      },
    ],
  ];

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className="w-[90%] m-auto">
      <div className="flex justify-evenly items-center gap-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index ? "bg-[#8838D3] text-white" : "bg-white text-[#8838D3]"
            } p-6 rounded-lg focus:outline-none  w-[25rem] relative   font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-[#8838D3] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
          >
            <div className="relative z-20">{tab}</div>
          </button>
        ))}
      </div>
      {faqs.map((item, index) => {
        return (
          <div
          key={index}
            className={`p-4 rounded-b-lg mt-8 ${
              activeTab === index ? "change-item" : "hidden"
            }`}
          >
            {item.map((faq, index) => (
              <div key={index} className="mb-8 relative ">
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
                  className={`cursor-pointer font-semibold border-l-8 border-[#8838D3]  p-4 ${
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
