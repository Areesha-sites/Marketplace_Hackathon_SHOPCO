import React from "react";
import Image from "next/image";
import { ReviewCardPropsTypes } from "../../../types/ComponentsTypes";
const TopSellingCard = ({
  rating,
  title,
  correct,
  des,
  date,
}: ReviewCardPropsTypes) => {
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="md:w-[610px] md:h-[241.58px] w-[358px] h-[244px] p-[24px] rounded-[20px] border-black/10 border-[1px]  md:py-[28px] md:px-[32px] "
      >
        <div className=" md:h-[139.58px] flex justify-between">
          <div className="md:w-[522px] md:h-[139.58px] w-[310px] h-[176px] flex flex-col gap-[15px]">
            <Image
              src={rating}
              alt="rating"
              height={22.58}
              width={127}
              className="h-[22.58px] md:w-[127px] w-[107px]"
            />
            <div className="md:w-[522px] md:h-[102px] flex flex-col gap-[12px]">
              <div className="md:w-[146px] md:h-[24px] flex gap-[4px] items-center whitespace-nowrap">
                <h1 className="md:text-[20px] text-[16px] font-bold text-black font-satoshiBold">
                  {title}
                </h1>
                <Image
                  src={correct}
                  alt="correct-icon"
                  height={24}
                  width={24}
                  className="md:h-[24px] md:w-[24px] h-[19px] w-[19px]"
                />
              </div>
              <p className="md:w-[522px] md:h-[66px] w-[310px] font-satoshi font-normal text-[12px] md:text-[16px] text-black/60">
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
            className="w-[24px] h-[24px] md:block hidden"
          />
        </div>
        <p className="font-satoshi font-medium md:text-[16px] text-[12px] text-black/60 relative md:top-[25px]">
          {date}
        </p>
      </div>
    </>
  );
};

export default TopSellingCard;
