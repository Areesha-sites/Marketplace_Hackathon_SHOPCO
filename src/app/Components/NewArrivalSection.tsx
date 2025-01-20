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
          className="absolute md:top-[1050px] xxl:top-[991px] xxl:left-[538px] xl:top-[1100px] text-blackBgColor lg:text-[48px] font-extrabold text-center text-[25px] sm:text-[32px] top-[1147px] tracking-wider font-integralCf w-full"
        >
          NEW ARRIVALS
        </h1>
        <div className="">
          <NewArrivalCardsList />
        </div>
        <Link href="/casual" className="flex justify-center items-center mx-auto w-full">
        <button
          data-aos="zoom-out-up"
          data-aos-delay="300"
          className=" absolute md:top-[1584px] lg:top-[1650px] xxl:left-[600px] mx-auto xl:left-[530px] py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-black text-[12px] md:left-[280px] sm:w-[338px] w-[270px] h-[46px] top-[1530px] sm:left-[16px] md:w-[210px] md:h-[52px] font-satoshi hover:bg-black hover:text-white transition-all duration-500 ease-in-out lg:left-[400px]"
        >
          View All
        </button>
        </Link>
        {/* <div
          data-aos="zoom-out-up"
          data-aos-delay="300"
          className="md:w-[1280px] xxl:w-[1200px] xl:w-[1155px] absolute md:top-[1694px] top-[1610px] w-[358px] md:left-[100px] xxl:left-[100px] xl:left-[50px] border-b-[1px] border-black/10 left-[16px] lg:w-[930px] lg:mx-auto lg:left-[36px]"
        ></div> */}
      </section>
    </>
  );
};


export default NewArrival;
