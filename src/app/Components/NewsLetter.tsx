import React from "react";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div
      data-aos="flip-down"
      data-aos-delay="300"
      className="md:w-[1240px] md:h-[180px] w-[358px] h-[293px] top-[1052px] absolute  md:left-[100px] z-20 rounded-[20px] flex justify-between md:flex-row flex-col md:pt-[36px] md:px-[64px] md:pb-[36px] md:pl-[64px] bg-[#000000] left-[16px]"
    >
      <span className="md:w-[651px] w-[330px] font-extrabold md:text-[40px] text-[32px] leading-[35px] md:leading-[45px] text-[#ffffff] md:text-left md:static relative top-[32px] left-[24px] tracking-wider font-integralCf">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </span>

      <div className="md:w-[349px] md:h-[108px] flex flex-col gap-[14px]">
        <div className="md:w-[349px] w-[311px] h-[42px] md:h-[48px] rounded-[62px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[12px] bg-[#ffffff] md:static absolute  left-[24px] top-[169px] flex items-center">
          <Image
            src="/Frame (38).svg"
            alt="email.img"
            height={20}
            width={20}
            className="w-[24px] h-[24px]"
          />
          <input
            type="text"
            placeholder="Enter your email address"
            className=" font-satoshi font-normal md:text-[16px] text-[14px] leading-[21.6px] text-[#000000] opacity-[40%] border-none outline-none w-[311px]"
          />
        </div>

        <div className="md:w-[349px] w-[311px] h-[42px] md:h-[48px] rounded-[62px] pt-[12px] pr-[16px] pb-[12px] pl-[16px]  bg-[#ffffff] flex justify-center items-center md:static absolute top-[223px] left-[24px]">
          <span className=" font-satoshi font-normal md:text-[16px] text-[14px] leading-[21.6px] text-black ">
            Subscribe to Newsletter
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
