import React from "react";
import TopSellingCardList from "./TopSellingCardsList";
import Link from "next/link";
const TopSelling = () => {
  return (
    <>
      <section>
        <h1 className="absolute md:top-[1250px] lg:top-[1500px] xxl:top-[1660px] xl:top-[1600px] text-blackBgColor md:text-[48px] font-extrabold text-center text-[25px] sm:text-[32px] top-[1650px] tracking-wider font-integralCf w-full">
          top selling
        </h1>
        <div className="">
          <TopSellingCardList />
        </div>
        <Link
          href="/casual"
          className="flex justify-center items-center w-full mx-auto"
        >
          <button className=" absolute md:top-[1740px] lg:top-[2070px] xl:top-[2160px] xxl:top-[2210px] mx-auto py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-black text-[12px] sm:w-[338px] w-[270px] h-[46px] top-[1970px] sm:top-[1600px] md:w-[210px] md:h-[52px] font-satoshi hover:bg-black hover:text-white transition-all duration-500 ease-in-out ">
            View All
          </button>
        </Link>
      </section>
    </>
  );
};

export default TopSelling;
