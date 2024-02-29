"use client";
import React, { useState } from "react";
import ServicesBox from "./ServicesBox";
import ServiceDetails from "./ServiceDetails";
import services from "../../utils/services.json";

const ServiceContainer = ({ service }) => {
  return (
    <div className="flex items-start gap-12 py-28 px-[10%]">
      <div className="flex flex-col justify-start items-start w-[70%] gap-12">
        <ServiceDetails {...service} />
      </div>
      <div className="flex flex-col justify-start items-center w-[30%] gap-8">
        <ServicesBox services={services} />
      </div>
    </div>
  );
};

export default ServiceContainer;
