import React from "react";
import HappyCustomerCardList from "./HappyCustomerCardList";
const HappyCustomerSection = () => {
  return (
    <>
      <section>
        <h1 className="absolute lg:top-[3363px] xl:top-[3063px] top-[3270px] md:top-[2700px] md:left-[100px] xxl:left-[100px] xl:left-[50px] left-[16px] xxl:top-[3200px] text-[32px] xl:text-[48px] font-extrabold text-blackBgColor leading-[36px] tracking-wider font-integralCf lg:left-[100px] lg:text-[40px]">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="relative top-[170px] md:top-[150px] xl:top-[200px] left-[0px] md:left-0 xxl:left-[0px] xl:left-0 lg:left-0">
          <HappyCustomerCardList />
        </div>
      </section>
    </>
  );
};

export default HappyCustomerSection;
