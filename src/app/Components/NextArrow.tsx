"use client";
import React, { useState } from "react";
import { NextArrowsProps } from "../../../types/ComponentsTypes";
import { GoArrowRight } from "react-icons/go";
const NextArrow = ({ onClick }: NextArrowsProps) => {
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
      } h-[24px] w-[24px] absolute xxl:left-[1120px] sm:right-[10px] right-[0px] xl:left-[1070px] top-[-50px] cursor-pointer transform -translate-y-1/2 transition-colors duration-300 lg:left-[780px] `}
    >
      <GoArrowRight className="md:h-[24px] md:w-[24px] h-[20px] w-[20px] text-black" />
    </div>
  );
};

export default NextArrow;
