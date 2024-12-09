import React from "react";
import Image from "next/image";
const TopHeader = () => {
  return (
    <>
      <header className="md:w-[1440px] w-[390px] md:h-[38px] h-[34px] bg-black">
        <p className="w-[351px] h-[19px] md:absolute md:top-[9px] left-[544px] text-whiteBgColor md:text-[14px] text-[12px] font-normal font-inter whitespace-nowrap md:p-0 py-[9px] mx-auto">
          Sign up and get 20% off to your first order.
          <span className="underline font-medium">Sign Up Now</span>
        </p>
        <Image
          src="/cross-icon.svg"
          alt="cross-icon"
          height={20}
          width={20}
          className="h-[20px] w-[20px] absolute left-[1320px] top-[9px] md:block hidden"
        />
      </header>
    </>
  );
};

export default TopHeader;
