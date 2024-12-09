"use client";
import React from "react";
import Image from "next/image";
import { HappyCustomerCardPropsTypes } from "../../../types/ComponentsTypes";
import { useMediaQuery } from "react-responsive";
const HappyCustomerCard = ({
  rating,
  title,
  correctImg,
  des,
  positionStyles,
}: HappyCustomerCardPropsTypes) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const left = isDesktop
    ? positionStyles?.desktop?.left
    : positionStyles?.mobile?.left;
  const top = isDesktop
    ? positionStyles?.desktop?.top
    : positionStyles?.mobile?.top;
  return (
    <>
      <div
        className="absolute"
        style={{
          left: left || "0px",
          top: top || "0px",
        }}
      >
        <div
          className="md:w-[400px] md:h-[240px] w-[358px] h-[186px] md:flex-shrink-0 absolute top-[3461px] md:left-[100px] left-[-40px] rounded-[20px] border-[1px] border-black/10 md:py-[28px] md:px-[32px] p-[24px]"
          style={{ position: "absolute", ...positionStyles }}
        >
          <div className=" md:w-[336px] md:h-[161.58px] w-[118px] flex justify-between flex-col">
            <Image
              src={rating}
              alt="rating"
              height={22.58}
              width={138.84}
              className="h-[22.58px] w-[138.84px] "
            />
            <div className="w-[336px] h-[124px] flex flex-col gap-[12px]">
              <div className="w-[336px] h-[124px] flex gap-[8px]">
                <h1 className="font-satoshi md:text-[20px] text-[16px] font-bold font-inter text-black ">
                  {title}
                </h1>
                <Image
                  src={correctImg}
                  alt="correct-icon"
                  height={24}
                  width={24}
                  className="md:h-[24px] md:w-[24px] h-[19px] w-[19px]  mt-[2px]"
                />
              </div>
              <p className="md:text-[14px] text-[12px] font-inter font-normal text-black/50 w-[336px]">
                {des}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyCustomerCard;
