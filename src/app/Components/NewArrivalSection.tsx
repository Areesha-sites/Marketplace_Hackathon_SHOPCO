import React from "react";
import NewArrivalCardsList from "./NewArrivalCardsList";
import Link from "next/link";
const NewArrival = () => {
  return (
    <>
      <section>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="absolute md:top-[991px] md:left-[538px] text-blackBgColor md:text-[48px] font-extrabold text-center text-[32px] top-[1147px] left-[70px] tracking-wider font-integralCf"
        >
          NEW ARRIVALS
        </h1>
        <div className="absolute md:top-[1104px] top-[1217px] left-[16px]  md:left-[100px]">
          <NewArrivalCardsList />
        </div>
        <button
          data-aos="zoom-out-up"
          data-aos-delay="300"
          className=" absolute md:top-[1584px] md:left-[600px] py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-black text-[12px] w-[358px] h-[46px] top-[1530px] left-[16px] md:w-[210px] md:h-[52px] font-satoshi"
        >
          <Link href="/casual">View All</Link>
        </button>
        <div
          data-aos="zoom-out-up"
          data-aos-delay="300"
          className="md:w-[1280px] absolute md:top-[1694px] top-[1610px] w-[358px] md:left-[100px] border-b-[1px] border-black/10 left-[16px]"
        ></div>
      </section>
    </>
  );
};

export default NewArrival;
