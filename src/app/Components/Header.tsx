import React from "react";
import Image from "next/image";
const TopHeader = () => {
  return (
    <>
      <header className="max-w-[1440px] h-[48px] w-full bg-black relative mx-auto ">
        <div className="w-[859px] h-[24px] absolute  right-[136px] top-[14px] flex flex-row items-center gap-[231px]">
          <div className="left w-[550px] h-[24px] gap-[8px] flex ">
            <p className="w-[474px] h-[18px] whitespace-nowrap font-poppins text-white text-[14px] leading-[21px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p className="font-semibold text-[14px] w-[68px] h-[24px] font-poppins text-whiteText underline">
              ShopNow
            </p>
          </div>

          <div className="right w-[78px] h-[24px] flex items-center gap-[5px] ">
            <span className="w-[49px] h-[21px] text-[14px] leading-[21px] font-normal text-white">
              English
            </span>
            <Image
              src="/dropdown.svg"
              alt="dropdown-icon"
              height={24}
              width={24}
              className="h-[7.78px] w-[12.73px]"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
