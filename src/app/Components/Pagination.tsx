import React from "react";
import Image from "next/image";

const Pagination = () => {
  return (
    <>
    <div className="w-[920px] h-[40px] absolute top-[1670px]  left-[415px] flex justify-center items-center gap-[216px]">
      <div className="w-[110px] h-[36px] rounded-[8px] border-[1px] pt-[8px] pl-[14px] pb-[8px] pr-[14px] flex justify-between border-[#000000] border-opacity-[10%] bg-[#ffffff]">
        <Image
          src="/arrow-left.svg"
          alt="left-arrow"
          height={20}
          width={20}
          className="w-[20px] h-[20px]"
        />
        <span className="font-satoshi font-medium text-[14px] leading-[20px] text-[#000000]">
          Previouse
        </span>
      </div>
      <div className="">
        <Image
          src="/Pagination numbers.svg"
          alt=""
          height={292}
          width={40}
          className="w-[292px] h-[40] "
        />
      </div>
      <div className="w-[86px] h-[36px] rounded-[8px] border-[1px] pt-[8px] pl-[14px] pb-[8px] pr-[14px] flex justify-between border-[#000000] border-opacity-[10%] bg-[#ffffff]">
        <span className="font-satoshi font-medium text-[14px] leading-[20px] text-[#000000]">
          Next
        </span>
        <Image
          src="/arrow-right.svg"
          alt="right-arrow"
          height={20}
          width={20}
          className="w-[20px] h-[20px]"
        />
      </div>
    </div>
    </>
    
  );
};

export default Pagination;
