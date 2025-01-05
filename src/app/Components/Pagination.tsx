import React from "react";
import Image from "next/image";

const Pagination = () => {
  return (
    <>
      <div
        data-aos="zoom-in-down"
        data-aos-delay="200"
        className="md:w-[920px] xxl:w-[920px] xl:w-[766px] w-[359px] h-[40px] absolute md:top-[1610px] xxl:top-[1610px] xl:top-[1400px] top-[1110px] md:left-[415px] left-[15px] flex justify-center items-center gap-[15px] md:gap-[216px]"
      >
        <div className="md:w-[110px] xxl:w-[110px] xl:w-[160px] h-[36px] w-[90px] rounded-[8px] border-[1px] pt-[8px] pl-[14px] pb-[8px] pr-[14px] flex md:justify-between md:items-center gap-[4px] justify-center items-center border-[#000000] border-opacity-[10%] bg-[#ffffff]">
          <Image
            src="/arrow-left.svg"
            alt="left-arrow"
            height={20}
            width={20}
            className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
          />
          <span className="font-satoshi font-medium text-[12px] md:text-[14px] leading-[20px] text-[#000000]">
            Previous
          </span>
        </div>
        <div className="">
          <Image
            src="/Pagination numbers.svg"
            alt=""
            height={292}
            width={40}
            className="md:w-[292px] md:h-[40px] w-[250px] h-[60px]"
          />
        </div>
        <div className="md:w-[86px] h-[36px] w-[73px] xxl:w-[86px] xl:w-[100px] rounded-[8px] border-[1px] pt-[8px] pl-[14px] pb-[8px] pr-[14px] flex md:justify-between justify-center gap-[4px] items-center border-[#000000] border-opacity-[10%] bg-[#ffffff]">
          <span className="font-satoshi font-medium text-[12px] md:text-[14px] leading-[20px] text-[#000000]">
            Next
          </span>
          <Image
            src="/arrow-right.svg"
            alt="right-arrow"
            height={20}
            width={20}
            className="md:w-[20px] md:h-[20px] h-[16px] w-[16px]"
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
