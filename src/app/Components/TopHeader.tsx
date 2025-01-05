import React from "react";
import Image from "next/image";
const TopHeader = () => {
  return (
    <>
      <header
        data-aos="fade-right"
        data-aos-delay="100"
        className="xxl:w-[1440px] absolute top-0 md:w-[1440px] md:h-[38px] bg-black md:py-[9px] md:pl-[544px] xl:pl-[444px] lg:pl-[344px] md:pr-[100px] w-[390px] h-[34px] lg:w-full xl:w-full xxl:pl-[544px] mx-auto"
      >
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="font-normal text-white md:text-[14px] text-[12px] font-satoshi absolute left-[44px] top-[9px] md:static"
        >
          Sign up and get 20% off to your first order.{" "}
          <span
            data-aos="fade-right"
            data-aos-delay="200"
            className="font-medium underline"
          >
            Sign Up Now
          </span>
        </p>
        <Image
          data-aos="fade-left"
          data-aos-delay="200"
          src="/Frame (32).svg"
          alt=""
          height={20}
          width={20}
          className="h-[20px] w-[20px] absolute md:left-[1320px] xxl:left-[1320px] xl:left-[1100px] lg:left-[900px] top-[9px] md:block hidden"
        />
      </header>
    </>
  );
};

export default TopHeader;
