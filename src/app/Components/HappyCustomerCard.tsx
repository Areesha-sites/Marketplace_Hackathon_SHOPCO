"use client";
import React from "react";
import Image from "next/image";
import { HappyCustomerCardPropsTypes } from "../../../types/ComponentsTypes";
const HappyCustomerCard = ({
  rating,
  title,
  correctImg,
  des,
}: HappyCustomerCardPropsTypes) => {
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="md:w-[400px] md:h-[240px] w-[358px] h-[176px] md:flex-shrink-0 top-[3461px] left-[-40px] rounded-[20px] border-[1px] border-black/10 md:py-[28px] md:px-[32px] p-[24px]"
      >
        <div className=" md:w-[336px] md:h-[161.58px] w-[118px] flex justify-between flex-col">
          <Image
            src={rating}
            alt="rating"
            height={22.58}
            width={138.84}
            className="h-[22.58px] w-[138.84px] "
          />
          <div className="w-[336px] h-[124px] flex flex-col md:gap-[12px] ">
            <div className="w-[336px] h-[124px] flex gap-[8px]">
              <h1 className="font-satoshiBold md:text-[20px] text-[16px] font-bold text-black ">
                {title}
              </h1>
              <Image
                src={correctImg}
                alt="correct-icon"
                height={24}
                width={24}
                className="md:h-[24px] md:w-[24px] h-[19px] w-[19px] mt-[2px]"
              />
            </div>
            <p className="md:text-[14px] text-[12px] text-black/50 md:w-[306px] w-[270px] font-satoshi relative top-[-20px] md:top-0">
              {des}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyCustomerCard;
