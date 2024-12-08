import React from "react";
import TopSellingCardList from "./TopSellingCardsList";
const TopSelling = () => {
  return (
    <>
      <section>
        <h1 className="absolute top-[1728px] left-[546px] text-[48px] font-bold font-[Integral CF] text-black uppercase">
          top selling
        </h1>
        <div className="absolute top-[1841px]">
          <TopSellingCardList />
        </div>
        <button className="absolute top-[2285px] left-[611px] py-[16px] px-[54px] border-[1px] border-black/10 text-black text-[12px] rounded-[62px]">
          View All
        </button>
      </section>
    </>
  );
};

export default TopSelling;
