"use client";
import React, { useState } from "react";
import ServicesBox from "./ServicesBox";
import ServiceDetails from "./ServiceDetails";
import services from "../../utils/services.json";

const ServiceContainer = ({ service,title }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-12 py-16 lg:py-28 px-4 lg:px-[10%]">
      <div className="flex flex-col justify-start items-start lg:w-[70%] gap-12">
        <ServiceDetails {...service} />
      </div>
      <div className="flex flex-col justify-start items-center w-full lg:w-[30%] gap-8">
        <ServicesBox services={services} title={title} />
      </div>
    </div>
  );
};

export default ServiceContainer;
