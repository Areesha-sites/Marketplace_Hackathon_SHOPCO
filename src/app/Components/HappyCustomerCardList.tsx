"use client";
import HappyCustomerCard from "./HappyCustomerCard";
import { happyCustomerCardData } from "../../../data/data";

const HappyCustomerCardList = () => {
  return (
    <div className="w-full px-5">
      <div className="hidden md:flex justify-center md:flex-row flex-col gap-[20px]">
        {happyCustomerCardData.map((item) => (
          <div key={item.id} className="px-2">
            <HappyCustomerCard {...item} />
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:hidden">
        {happyCustomerCardData.map((item) => (
          <div key={item.id}>
            <HappyCustomerCard {...item} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default HappyCustomerCardList;