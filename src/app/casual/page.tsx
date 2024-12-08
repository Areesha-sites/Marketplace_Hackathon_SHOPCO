import React from "react";
import SideBar from "../Components/SideBar";
import Image from "next/image";
import CausalCardsList from "../Components/CasualCardsList";
const Casual = () => {
  return (
    <>
      <section className="">
        <SideBar />
        <h1 className="absolute top-[204px] left-[415px] text-[32px] font-bold text-black font-satoshi">
          Casual
        </h1>
        <div className="w-[396px] h-[16px]  absolute top-[217px] left-[944px] flex gap-[12px]">
          <p className="text-[16px] font-normal font-satoshi text-black/60 whitespace-nowrap">
            Showing 1-10 of 100 Products
          </p>
          <div className="flex gap-[4px] items-center">
            <p className="text-[16px] font-normal font-satoshi text-black/60 whitespace-nowrap">
              Sort by: <span className="text-black">Most Popular</span>
            </p>
            <Image
              src="/sort-chevron.svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]"
            />
          </div>
        </div>

<CausalCardsList/>

      </section>
    </>
  );
};

export default Casual;
