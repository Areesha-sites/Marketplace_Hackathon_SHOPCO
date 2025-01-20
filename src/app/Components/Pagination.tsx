import React from "react";
import Image from "next/image";

const Pagination = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full mx-auto px-">
    <div
        // data-aos="zoom-in-down"
        // data-aos-delay="200"
        className="lg:w-[600px] xxl:w-[920px] xl:w-[766px] md:w-full sm:w-[359px] h-[40px] absolute xxl:top-[1610px] xl:top-[1400px] sm:top-[1610px] top-[1420px] md:top-[1360px] lg:left-[330px] xl:left-[415px] flex justify-center items-center gap-[15px] xl:gap-[216px] lg:top-[2430px]"
      >
        <div className="md:w-[110px] xxl:w-[110px] xl:w-[160px] sm:h-[36px] h-[26px] w-[60px] sm:w-[90px] rounded-[8px] border-[1px] pt-[8px] pl-[14px] pb-[8px] lg:pr-[14px] pr-[14px] md:pr-[30px] flex md:justify-between md:items-center gap-[4px] justify-center items-center border-[#000000] border-opacity-[10%] bg-[#ffffff]">
          <Image
            src="/arrow-left.svg"
            alt="left-arrow"
            height={20}
            width={20}
            className="md:w-[20px] md:h-[20px] sm:w-[16px] sm:h-[16px] w-[10px] h-[10px]"
          />
          <span className="font-satoshi font-medium text-[10px] sm:text-[12px] md:text-[14px] leading-[20px] text-[#000000]">
            Previous
          </span>
        </div>
        <div className="">
          <Image
            src="/Pagination numbers.svg"
            alt=""
            height={292}
            width={40}
            className="lg:w-[292px] md:h-[40px] w-full md:w-[300px] mx-auto"
          />
        </div>
        <div className="md:w-[100px] sm:h-[36px] h-[26px] w-[60px] sm:w-[73px] xxl:w-[86px] xl:w-[100px] rounded-[8px] border-[1px] pt-[8px] pl-[14px] pb-[8px] pr-[14px] md:pr-[24px] lg:pr-[14px] flex md:justify-between justify-center gap-[4px] items-center border-[#000000] border-opacity-[10%] bg-[#ffffff]">
          <span className="font-satoshi font-medium text-[10px] sm:text-[12px] md:text-[14px] leading-[20px] text-[#000000]">
            Next
          </span>
          <Image
            src="/arrow-right.svg"
            alt="right-arrow"
            height={20}
            width={20}
            className="md:w-[20px] md:h-[20px] sm:w-[16px] sm:h-[16px] w-[10px] h-[10px]"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Pagination;
