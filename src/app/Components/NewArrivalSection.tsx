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
          className="absolute md:top-[650px] lg:top-[800px] xxl:top-[991px] xl:top-[900px] text-blackBgColor md:text-[48px] font-extrabold text-center text-[25px] sm:text-[32px] top-[1200px] tracking-wider font-integralCf w-full"
        >
          NEW ARRIVALS
        </h1>
        <div className="flex justify-between items-center w-full mx-auto">
          <NewArrivalCardsList />
        </div>
        <Link href="/casual" className="flex justify-center items-center mx-auto w-full">
        <button
          className=" absolute md:top-[1140px] lg:top-[1370px] xl:top-[1460px] mx-auto py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-black text-[12px] sm:w-[338px] w-[270px] h-[46px] top-[1530px] sm:top-[1600px] md:w-[210px] md:h-[52px] font-satoshi hover:bg-black hover:text-white transition-all duration-500 ease-in-out xxl:top-[1550px]"
        >
          View All
        </button>
        </Link>
        {/* <div
          // data-aos="zoom-out-up"
          // data-aos-delay="300"
          className="md:w-[1280px] xxl:w-[1200px] xl:w-[1115px] absolute md:top-[1694px] xl:top-[1600px] top-[1610px] w-full md:left-[100px] xxl:left-[100px] border-b-[1px] border-black/10 sm:left-[16px] lg:w-[930px] lg:mx-auto lg:left-[36px] xl:left-[50px]"
        ></div> */}
      </section>
    </>
  );
};


export default NewArrival;
