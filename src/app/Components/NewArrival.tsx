import React from "react";
import NewArrivalCardsList from "./NewArrivalCardsList";
import Link from "next/link";
const NewArrival = () => {
  return (
    <>
      <section>
        <h1 className="absolute md:top-[991px] md:left-[538px] text-blackBgColor md:text-[48px] font-extrabold text-center text-[32px] top-[1147px] left-[70px] tracking-tight">
          NEW ARRIVALS
        </h1>
        <div className="absolute md:top-[1104px] top-[1217px] ">
          <NewArrivalCardsList />
        </div>
        <button className=" absolute md:top-[1584px] md:left-[600px] py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-black text-[12px] w-[358px] h-[46px] top-[1530px] left-[16px] md:w-[210px] md:h-[52px]">
          <Link href="/casual">View All</Link>
        </button>
        <div className="md:w-[1280px] absolute md:top-[1664px] top-[1610px] w-[358px] md:left-[100px] border-b-[1px] border-black/10 left-[16px]"></div>
      </section>
    </>
  );
};

export default NewArrival;
