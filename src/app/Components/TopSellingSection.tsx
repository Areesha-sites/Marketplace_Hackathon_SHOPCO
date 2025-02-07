import React from "react";
import TopSellingCardList from "./TopSellingCardsList";
import Link from "next/link";
const TopSelling = () => {
  return (
    <>
      <section className="flex flex-col gap-y-[70px] absolute md:top-[1350px] lg:top-[1500px] xxl:top-[1660px] xl:top-[1600px] top-[1750px] w-full ">
        <h1 className="text-blackBgColor md:text-[48px] font-extrabold text-center text-[25px] sm:text-[32px] tracking-wider font-integralCf ">
          top selling
        </h1>
        <div className="mt-40">
          <TopSellingCardList />
        </div>
        <Link
          href="/casual"
          className="flex justify-center items-center w-full mx-auto"
        >
          <button className=" mx-auto py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-black text-[12px] sm:w-[338px] w-[270px] h-[46px] md:w-[210px] md:h-[52px] font-satoshi hover:bg-black hover:text-white transition-all duration-500 ease-in-out md:mt-36">
            View All
          </button>
        </Link>
      </section>
    </>
  );
};

export default TopSelling;
