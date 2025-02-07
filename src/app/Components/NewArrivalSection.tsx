import React from "react";
import NewArrivalCardsList from "./NewArrivalCardsList";
import Link from "next/link";
const NewArrival = () => {
  return (
    <>
      <section className="flex flex-col justify-center md:gap-y-[70px] gap-y-[30px] items-center absolute md:top-[650px] top-[1200px] w-full lg:top-[800px] xxl:top-[991px] xl:top-[900px]">
        <h1
          className="  text-blackBgColor md:text-[48px] font-extrabold text-center text-[25px] sm:text-[32px]  tracking-wider font-integralCf w-full"
        >
          NEW ARRIVALS
        </h1>
        <div className="md:mt-40 mt-32">
          <NewArrivalCardsList />
        </div>
        <Link href="/casual" className="flex justify-center items-center mx-auto w-full">
        <button
          className=" mx-auto py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-black text-[12px] sm:w-[338px] w-[270px] h-[46px] md:w-[210px] md:h-[52px] font-satoshi hover:bg-black hover:text-white transition-all duration-500 ease-in-out md:mt-36 mt-40"
        >
          View All
        </button>
        </Link>
        <div
          className="md:w-[700px] xxl:w-[1200px] xl:w-[1115px] w-full border-b-[1px] border-black/10 lg:w-[930px] lg:mx-auto "
        ></div>
      </section>
    </>
  );
};


export default NewArrival;
