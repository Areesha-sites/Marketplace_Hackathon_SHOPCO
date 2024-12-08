import React from "react";
import Image from "next/image";
import HappyCustomerCardList from "./HappyCustomerCardList";
const HappyCustomer = () => {
  return (
    <>
      <section className="">
        <h1 className="absolute top-[3363px] left-[100px] font-intergraCF text-[48px] font-bold text-blackBgColor">
          OUR HAPPY CUSTOMERS
        </h1>

        <Image
          src="/left-arrow.svg"
          alt="left-arrow"
          height={18.75}
          width={15.76}
          className="h-[24px] w-[24px] absolute top-[3387px] left-[1300px]"
        />
        <Image
          src="/right-arrow.svg"
          alt="left-arrow"
          height={18.75}
          width={15.76}
          className="h-[24px] w-[24px] absolute top-[3387px] left-[1355px]"
        />

        <div className="">
          <HappyCustomerCardList />
        </div>
      </section>
    </>
  );
};

export default HappyCustomer;
