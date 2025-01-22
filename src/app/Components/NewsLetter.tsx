import React from "react";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center w-full mx-auto">
      <div className="bg-black text-white rounded-[20px] py-8 px-6 w-full ">
        <h1 className=" font-integralCf uppercase font-extrabold text-[24px] sm:text-[32px] leading-[35px] tracking-wider xl:text-[40px] xl:leading-[45px] w-full whitespace-nowrap">
          STAY UP TO DATE <br /> ABOUT OUR <br /> LATEST OFFERS
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <div className="flex items-center bg-white font-satoshi rounded-[62px] px-4 py-2 w-full ">
            <Image
              src="/Frame (38).svg"
              alt="email icon"
              height={20}
              width={20}
              className="w-[24px] h-[24px]"
            />
            <input
              type="text"
              placeholder="Enter your email address"
              className="flex-1 text-black text-[14px] font-satoshi md:text-[16px] opacity-70 outline-none border-none px-2"
            />
          </div>
          <button className="bg-white font-satoshi text-black text-[14px] md:text-[16px] font-medium px-6 py-2 rounded-[62px] w-full ">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
