import React from "react";
import NewArrivalCard from "./Components/NewArrivalCard";
import NewArrivalCardsList from "./Components/NewArrivalCardsList";

const NewArrival = () => {
  return (
    <>
      <section>
        <h1 className="absolute md:top-[991px] md:left-[538px] text-blackBgColor md:text-[48px] font-bold text-center text-[32px] top-[1147px] left-[70px]">
          NEW ARRIVALS
        </h1>

        <div className="absolute md:top-[1104px] top-[1217px] ">
          <NewArrivalCardsList />
        </div>

        <button className=" absolute top-[1584px] md:-[611px] py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-black text-[12px]">
          View All
        </button>

        <div className="md:w-[1280px] absolute top-[1664px] md:left-[100px] border-b-[1px] border-black "></div>
      </section>
    </>
  );
};

export default NewArrival;
