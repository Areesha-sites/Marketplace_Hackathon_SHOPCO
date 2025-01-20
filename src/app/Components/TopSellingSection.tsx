import React from "react";
import TopSellingCardList from "./TopSellingCardsList";
import Link from "next/link";
const TopSelling = () => {
  return (
    <>
      <section>
        <h1
          // data-aos="zoom-in"
          // data-aos-delay="200"
          className="absolute md:top-[1748px] xl:top-[1648px] xxl:left-[538px] xl:left-[460px] top-[1640px] md:left-[546px] md:text-[48px] text-[32px] font-extrabold  text-black uppercase left-[95px] tracking-wider font-integralCf lg:left-[350px]"
        >
          top selling
        </h1>
        <div className="">
          <TopSellingCardList />
        </div>
        <Link href="/casual">
        <button
          // data-aos="zoom-in"
          // data-aos-delay="300"
          className="absolute md:top-[2285px] xl:top-[2200px] md:left-[611px] xxl:left-[611px] xl:left-[511px] py-[16px] px-[54px] border-[1px] border-black/10 text-black text-[12px] rounded-[62px] w-[358px] top-[2030px] left-[16px] md:w-[210px] flex justify-center items-center font-satoshi hover:bg-black hover:text-white transition-all duration-500 ease-in-out lg:left-[400px]"
        >
         View All
        </button>
        </Link>
      </section>
    </>
  );
};

export default TopSelling;
