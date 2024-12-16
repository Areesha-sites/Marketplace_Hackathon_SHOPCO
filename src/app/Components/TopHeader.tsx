import React from "react";
import Image from "next/image";
const TopHeader = () => {
  return (
    <>
      <header
        data-aos="fade-right"
        data-aos-delay="100"
        className="md:w-[1440px] md:h-[38px] bg-black md:py-[9px] md:pl-[544px] md:pr-[100px] w-[390px] h-[34px] "
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
          className="h-[20px] w-[20px] absolute left-[1320px] top-[9px] md:block hidden"
        />
      </header>
    </>
  );
};

export default TopHeader;
