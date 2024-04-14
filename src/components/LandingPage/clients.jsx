"use client";
import Link from "next/link";
import { useState } from "react";

import ClientsData from "../../utils/clients.json";

const Clients = () => {
  const [activeClient, setActiveClient] = useState("Elements Learning");

  const clients = ClientsData;

  const activeClientData = clients.find(
    (client) => client.name === activeClient
  );

  return (
    <div className="w-full bg-[#7957931A] flex flex-row">
      <div className="w-[40%] pl-[5%] py-20">
        <h3 className="font-bold text-4xl uppercase">
          {activeClientData.punchline.split(" ").map((word, index) => {
            // Check if the word starts with '&'
            if (word.startsWith("&")) {
              // Wrap the word in a span tag with the desired style
              return (
                <span className="text-[#8838D3]" key={index}>
                  {word.slice(1, word.length + 1) + " "}
                </span>
              );
            } else {
              return word + " ";
            }
          })}
        </h3>
        <p
          className="mt-4 mb-10"
          dangerouslySetInnerHTML={{ __html: activeClientData.description }}
        >
          {/* {activeClientData && activeClientData.description} */}
        </p>
        <Link href={activeClientData.link}>
          <button className="relative  bg-transparent px-12 py-5 bg-white text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
            <div className="relative z-20">Read More</div>
          </button>
        </Link>
      </div>
      <div className="w-[60%] relative bg-pak-map-globalcss pr-[5%] py-20 flex flex-col">
        <div className="ml-[30%] mb-20">
          <p className="font-bold text-9xl text-[#8838D3]">30+</p>
          <p className="font-bold text-4xl uppercase">
            Globally
            <br />
            Satisfied
            <br />
            Clients
          </p>
        </div>
        <div className="flex flex-row w-[50%] mt-auto mb-10  mr-auto ml-20">
          <div className="text-right font-semibold pr-2">
            <div className="p-2"> </div>
            <p
              className={`cursor-pointer px-2 py-1 my-1 hover:bg-[#8838D3] hover:text-white ${
                activeClient == "Elements Learning"
                  ? "bg-[#8838D3] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveClient("Elements Learning")}
            >
              Islamabad
            </p>
            <p
              className={`cursor-pointer px-2 py-1 my-1 hover:bg-[#8838D3] hover:text-white ${
                activeClient == "truID"
                  ? "bg-[#8838D3] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveClient("truID")}
            >
              NSTP
            </p>
            <p
              className={`cursor-pointer px-2 py-1 my-1 hover:bg-[#8838D3] hover:text-white ${
                activeClient == "Murabbi"
                  ? "bg-[#8838D3] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveClient("Murabbi")}
            >
              NUST
            </p>
            <p
              className={`cursor-pointer px-2 py-1 my-1 hover:bg-[#8838D3] hover:text-white ${
                activeClient == "Toyota"
                  ? "bg-[#8838D3] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveClient("Toyota")}
            >
              Islamabad
            </p>
          </div>
          <div className="border-l-4 border-[#8838D3] text-left font-semibold">
            <div className="flex flew-row -mt-[4px]">
              <div className="px-2 py-1 my-1 w-[20px] border-t-4 border-[#8838D3]"></div>
              <h4 className="text-2xl font-bold text-[#8838D3] -mt-[14px] ml-[10px]">
                Featuring
              </h4>
            </div>
            <p
              className={`cursor-pointer px-2 py-1 my-1 ml-2 hover:bg-[#8838D3] hover:text-white ${
                activeClient == "Elements Learning"
                  ? "bg-[#8838D3] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveClient("Elements Learning")}
            >
              Elements Learning
            </p>
            <p
              className={`cursor-pointer px-2 py-1 my-1 ml-2 hover:bg-[#8838D3] hover:text-white ${
                activeClient == "truID"
                  ? "bg-[#8838D3] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveClient("truID")}
            >
              truID
            </p>
            <p
              className={`cursor-pointer px-2 py-1 my-1 ml-2 hover:bg-[#8838D3] hover:text-white ${
                activeClient == "Murabbi"
                  ? "bg-[#8838D3] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveClient("Murabbi")}
            >
              Murabbi
            </p>
            <p
              className={`cursor-pointer px-2 py-1 my-1 ml-2 hover:bg-[#8838D3] hover:text-white ${
                activeClient == "Toyota"
                  ? "bg-[#8838D3] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveClient("Toyota")}
            >
              Toyota
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
