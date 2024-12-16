import React from "react";
import Image from "next/image";
import HappyCustomerCardList from "./HappyCustomerCardList";
const HappyCustomerSection = () => {
  return (
    <>
      <section className="">
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="absolute md:top-[3363px] top-[3170px] md:left-[100px] left-[16px]  text-[32px] md:text-[48px] font-extrabold text-blackBgColor leading-[36px] tracking-wider font-integralCf"
        >
          OUR HAPPY CUSTOMERS
        </h1>
        <Image
          data-aos="zoom-in-left"
          data-aos-delay="100"
          src="/arrow-down-bold 2 (1).svg"
          alt="left-arrow"
          height={18.75}
          width={15.76}
          className="h-[24px] w-[24px] absolute md:top-[3383px] top-[3215px] md:left-[1280px] left-[300px]"
        />
        <Image
          data-aos="zoom-in-right"
          data-aos-delay="100"
          src="/arrow-down-bold 1 (1).svg"
          alt="left-arrow"
          height={18.75}
          width={15.76}
          className="h-[24px] w-[24px] absolute md:top-[3383px] top-[3215px]  md:left-[1320px]  left-[345px]"
        />

        <div className="absolute md:left-[100px] md:top-[3461px] left-[135px] top-[3280px]">
          <HappyCustomerCardList />
        </div>
      </section>
    </>
  );
};

export default HappyCustomerSection;
