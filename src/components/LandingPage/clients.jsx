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
        <h3 className="font-bold text-6xl uppercase">
          {activeClientData && activeClientData.punchline}
        </h3>
        <p className="mt-4 mb-10">
          {activeClientData && activeClientData.description}
        </p>
        <Link
          href={"#"}
          className="px-8 py-4 bg-[#8838D3] text-white mt-20 font-semibold"
        >
          Read More
        </Link>
      </div>
      <div className="w-[60%] relative bg-pak-map-globalcss pr-[5%] py-20 relative flex flex-col">
        <div className="ml-[30%] mb-20">
          <p className="font-bold text-9xl text-[#8838D3]">250+</p>
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
              United Kingdom
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
              Gawadar
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
