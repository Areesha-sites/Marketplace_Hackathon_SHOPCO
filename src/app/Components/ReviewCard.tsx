import React from "react";
import Image from "next/image";
import { ReviewCardPropsTypes } from "../../../types/ComponentsTypes";
const TopSellingCard = ({
  rating,
  title,
  correct,
  des,
  date,
  positionStyles,
}: ReviewCardPropsTypes) => {
  return (
    <>
      <div
        className="w-[610px] h-[241.58px] rounded-[20px] border-black/10 border-[1px]  py-[28px] px-[32px] absolute  flex flex-col justify-between"
        style={{ position: "absolute", ...positionStyles }}
      >
        <div className=" h-[139.58px] flex justify-between">
          <div className="w-[522px] h-[139.58px] flex flex-col gap-[15px]">
            <Image
              src={rating}
              alt="rating"
              height={22.58}
              width={127}
              className="h-[22.58px] w-[127px]"
            />

            <div className="w-[522px] h-[102px] flex flex-col gap-[12px]">
              <div className="w-[146px] h-[24px] flex gap-[4px] items-center whitespace-nowrap">
                <h1 className="text-[20px] font-bold text-black font-satoshi">
                  {title}
                </h1>
                <Image
                  src={correct}
                  alt="correct-icon"
                  height={24}
                  width={24}
                  className="h-[24px] w-[24px]"
                />
              </div>

              <p className="w-[522px] h-[66px] font-satoshi font-normal text-[16px] text-black/60">
                {" "}
                {des}
              </p>
            </div>
          </div>
          <Image
            src="/three-dot.svg"
            alt="three-dot"
            height={24}
            width={24}
            className="w-[24px] h-[24px]"
          />
        </div>

        <p className="font-satoshi font-medium text-[16px] text-black/60">
          {date}
        </p>
      </div>
    </>
  );
};

export default TopSellingCard;
