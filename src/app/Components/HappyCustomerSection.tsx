import React from "react";
import Image from "next/image";
import HappyCustomerCardList from "./HappyCustomerCardList";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
const HappyCustomerSection = () => {
  return (
    <>
      <section className="">
        <h1
          // data-aos="zoom-in"
          // data-aos-delay="200"
          className="absolute lg:top-[3363px] xl:top-[3263px] top-[3170px] md:left-[100px] xxl:left-[100px] xl:left-[50px] left-[16px] text-[32px] xl:text-[48px] font-extrabold text-blackBgColor leading-[36px] tracking-wider font-integralCf lg:left-[100px] lg:text-[40px]"
        >
          OUR HAPPY CUSTOMERS
        </h1>
        {/* <PrevArrow onClick={() => {}}/>
        <NextArrow onClick={() => {}}/> */}
        {/* <Image
          data-aos="zoom-in-left"
          data-aos-delay="100"
          src="/arrow-down-bold 2 (1).svg"
          alt="left-arrow"
          height={18.75}
          width={15.76}
          className="h-[24px] w-[24px] absolute md:top-[3383px] top-[3215px] md:left-[1280px] xxl:left-[1280px] left-[300px] xl:left-[1150px]"
        />
        <Image
          data-aos="zoom-in-right"
          data-aos-delay="100"
          src="/arrow-down-bold 1 (1).svg"
          alt="left-arrow"
          height={18.75}
          width={15.76}
          className="h-[24px] w-[24px] absolute md:top-[3383px] top-[3215px] md:left-[1320px] xxl:left-[1320px] xl:left-[1180px] left-[345px]"
        /> */}
        <div className="relative top-[3280px] md:top-[3461px] xl:top-[3350px] left-[135px] md:left-0 xxl:left-[0px] xl:left-0 lg:left-0">
          <HappyCustomerCardList />
        </div>
      </section>
    </>
  );
};

export default HappyCustomerSection;
