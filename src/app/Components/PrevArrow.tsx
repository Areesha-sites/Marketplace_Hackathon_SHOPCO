"use client";
import React, { useState } from "react";
import { PrevArrowsProps } from "../../../types/ComponentsTypes";
import { GoArrowLeft } from "react-icons/go";
const PrevArrow = ({ onClick }: PrevArrowsProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => {
        onClick?.(); 
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`md:w-[46px] md:h-[46px] w-[38px] h-[38px] rounded-full ${
        isActive ? "bg-btnBackground" : "card-bg"
      } h-[24px] w-[24px] absolute xxl:left-[1090px] xl:left-[1040px] top-[-50px] cursor-pointer transform -translate-y-1/2 transition-colors duration-300 lg:left-[750px] sm:right-[30px] right-[20px]`}
    >
      <GoArrowLeft className="md:h-[24px] md:w-[24px] h-[20px] w-[20px] text-black" />
    </div>
  );
};

export default PrevArrow;
