import React from "react";
import Image from "next/image";
import { HappyCustomerCardPropsTypes } from "../../../types/ComponentsTypes";
const HappyCustomerCard = ({
  rating,
  title,
  correctImg,
  des,
  positionStyles,
}: HappyCustomerCardPropsTypes) => {
  return (
    <>
      <div
        className="w-[400px] h-[240px] flex-shrink-0 absolute top-[3461px] left-[100px] rounded-[20px] border-[1px] border-black/10 py-[28px] px-[32px]"
        style={{ position: "absolute", ...positionStyles }}
      >
        <div className=" w-[336px] h-[161.58px] flex justify-between flex-col">
          <Image
            src={rating}
            alt="rating"
            height={22.58}
            width={138.84}
            className="h-[22.58px] w-[138.84px] "
          />
          <div className="w-[336px] h-[124px] flex flex-col gap-[12px]">
            <div className="w-[336px] h-[124px] flex gap-[8px]">
              <h1 className="font-satoshi text-[20px] font-bold text-black ">
                {title}
              </h1>
              <Image
                src={correctImg}
                alt="correct-icon"
                height={24}
                width={24}
                className="h-[24px] w-[24px] mt-[2px]"
              />
            </div>
            <p className="text-[16px] font-satoshi font-normal text-black text-opacity-60 w-[336px]">
              {des}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyCustomerCard;
