import React from "react";
import TopSellingCardList from "./TopSellingCardsList";
const TopSelling = () => {
  return (
    <>
      <section>
        <h1 className="absolute md:top-[1728px] top-[1640px] md:left-[546px] md:text-[48px] text-[32px] font-extrabold  text-black uppercase left-[95px] tracking-tight">
          top selling
        </h1>
        <div className="absolute top-[1841px]">
          <TopSellingCardList />
        </div>
        <button className="absolute md:top-[2285px] md:left-[611px] py-[16px] px-[54px] border-[1px] border-black/10 text-black text-[12px] rounded-[62px] w-[358px] top-[2030px] left-[16px] md:w-[210px] flex justify-center items-center font-inter">
          View All
        </button>
      </section>
    </>
  );
};

export default TopSelling;
