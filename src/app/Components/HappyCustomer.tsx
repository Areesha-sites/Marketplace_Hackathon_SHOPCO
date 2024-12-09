import React from "react";
import Image from "next/image";
import HappyCustomerCardList from "./HappyCustomerCardList";
const HappyCustomer = () => {
  return (
    <>
      <section className="">
        <h1 className="absolute md:top-[3363px] top-[3220px] md:left-[100px] left-[16px] tracking-tight text-[32px] md:text-[48px] font-extrabold text-blackBgColor leading-[36px]">
          OUR HAPPY CUSTOMERS
        </h1>

        <Image
          src="/left-arrow.svg"
          alt="left-arrow"
          height={18.75}
          width={15.76}
          className="h-[24px] w-[24px] absolute md:top-[3387px] top-[3250px] md:left-[1300px] left-[300px]"
        />
        <Image
          src="/right-arrow.svg"
          alt="left-arrow"
          height={18.75}
          width={15.76}
          className="h-[24px] w-[24px] absolute md:top-[3387px] top-[3250px] md:left-[1355px]  left-[345px]"
        />

        <div className="">
          <HappyCustomerCardList />
        </div>
      </section>
    </>
  );
};

export default HappyCustomer;
