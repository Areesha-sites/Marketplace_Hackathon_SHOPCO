import React from "react";
import Image from "next/image";
const SideBar = () => {
  return (
    <>
      <aside className="w-[295px] h-[1220px] absolute top-[204px] left-[100px] py-[20px] px-[24px] flex flex-col gap-[24px] rounded-[20px] border-[1px] border-black/10 ">
        <div className="w-[247px] h-[27px] flex justify-between">
          <h3 className="text-[20px] font-satoshi text-black font-bold">
            Filters
          </h3>
          <Image
            src="/side-image.svg"
            alt="icon"
            height={24}
            width={24}
            className="w-[24px] h-[24px]"
          />
        </div>
        <div className="w-[247px] border-b-[1px] border-black/10 "></div>

        <div className="w-[247px] h-[160px] flex flex-col gap-[20px]">
          <div className="w-[247px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 ">
              T-shirts
            </span>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]  "
            />
          </div>
          <div className="w-[247px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 ">
              Shorts
            </span>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]  "
            />
          </div>
          <div className="w-[247px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 ">
              Shirts
            </span>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]  "
            />
          </div>
          <div className="w-[247px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 ">
              Hoodie
            </span>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]  "
            />
          </div>
          <div className="w-[247px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 ">
              Jeans
            </span>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]  "
            />
          </div>
        </div>
        <div className="w-[247px] border-b-[1px] border-black/10 "></div>

        <div className="w-[247px] h-[90px] flex flex-col gap-[20px]">
          <div className="w-[247px] h-[27px] flex justify-between items-center">
            <h1 className="text-black text-[20px] font-satoshi font-bold">
              Price
            </h1>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="w-[16px] h-[16px] -rotate-90"
            />
          </div>

          <div className="w-[247px] h-[43px] ">
            <Image
              src="/Group 6 (1).svg"
              alt="icon"
              height={20}
              width={247}
              className="h-[20px] w-[247x] "
            />
            <div className="flex justify-between w-[180px] mx-auto mt-1">
              <span className="text-[14px] font-satoshi font-medium">$50</span>
              <span className="text-[14px] font-satoshi font-medium">$200</span>
            </div>
          </div>
        </div>

        <div className="w-[247px] border-b-[1px] border-black/10 "></div>

        <div className="w-[247px] h-[137px] flex flex-col gap-[20px] ">
          <div className="w-[247px] h-[27px] flex justify-between items-center">
            <h1 className="text-black text-[20px] font-satoshi font-bold">
              Colors
            </h1>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="w-[16px] h-[16px] -rotate-90"
            />
          </div>

          <div className="w-[247px] h-[90px] flex flex-col gap-[26px]">
            <div className="w-[247px] h-[27px] flex justify-between items-center ">
              <div className="w-[37px] h-[37px] rounded-full bg-[#00C12B] border-[2px] border-[#37ab50]"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F50606] border-[2px] border-[#d00606]"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F5DD06] border-[2px] border-[#c5b206]"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F57906] border-[2px] border-[#d06909]"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#06CAF5] border-[2px] border-[#06acd1]"></div>
            </div>
            <div className="w-[247px] h-[27px] flex justify-between items-center ">
              <div className="w-[37px] h-[37px] rounded-full bg-[#063AF5] border-[2px] border-[#052cba] flex justify-center items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check-icon"
                  height={16}
                  width={16}
                  className="h-[16px] w-[16px] "
                />
              </div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#7D06F5] border-[2px] border-[#6505c5]"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F506A4] border-[2px] border-[#d2088f]"></div>
              <div className="w-[37px] h-[37px] rounded-full border-[1px] border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-black  "></div>
            </div>
          </div>
        </div>
        <div className="w-[247px] border-b-[1px] border-black/10 "></div>
        <div className="w-[247px] h-[274px] flex flex-col gap-[20px] ">
          <div className="w-[247px] h-[27px] flex justify-between items-center">
            <h1 className="text-black text-[20px] font-satoshi font-bold">
              Size
            </h1>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="w-[16px] h-[16px] -rotate-90"
            />
          </div>

          <div className="w-[247px] h-[227px] flex gap-[8px] flex-col ">
            <div className="flex gap-[8px]">
              <button className="w-[96px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center">
                XX-Small
              </button>
              <button className="w-[88px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center">
                X-Small
              </button>
            </div>

            <div className="flex gap-[8px]">
              <button className="w-[74px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center">
                Small
              </button>
              <button className="w-[90px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center">
                Medium
              </button>
            </div>

            <div className="flex gap-[8px]">
              <button className="w-[76px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal bg-black text-white text-[14px] whitespace-nowrap flex items-center justify-center">
                Large
              </button>
              <button className="w-[89px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center">
                X-Large
              </button>
            </div>
            <div className="flex gap-[8px]">
              <button className="w-[98px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60  text-[14px] whitespace-nowrap flex items-center justify-center">
                XX-Large
              </button>
              <button className="w-[97px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center">
                3X-Large
              </button>
            </div>
            <div className="flex gap-[8px]">
              <button className="w-[98px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60  text-[14px] whitespace-nowrap flex items-center justify-center">
                4X-Large
              </button>
            </div>
          </div>
        </div>
        <div className="w-[247px] border-b-[1px] border-black/10 "></div>
        <div className="w-[247px] h-[171px] flex flex-col gap-[20px]">
          <div className="w-[247px] h-[27px] flex justify-between items-center">
            <h1 className="text-black text-[20px] font-satoshi font-bold">
              Dress Style
            </h1>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="w-[16px] h-[16px] -rotate-90"
            />
          </div>

          <div className="w-[247px] h-[124px] flex flex-col gap-[20px]">
            <div className="w-[247px] h-[16px] justify-between flex">
              <span className="text-[16px] font-normal text-black text-opacity-60 ">
                Casual
              </span>
              <Image
                src="/side-chveron.svg"
                alt="icon"
                height={16}
                width={16}
                className="h-[16px] w-[16px]  "
              />
            </div>
            <div className="w-[247px] h-[16px] justify-between flex">
              <span className="text-[16px] font-normal text-black text-opacity-60 ">
                Formal
              </span>
              <Image
                src="/side-chveron.svg"
                alt="icon"
                height={16}
                width={16}
                className="h-[16px] w-[16px]  "
              />
            </div>
            <div className="w-[247px] h-[16px] justify-between flex">
              <span className="text-[16px] font-normal text-black text-opacity-60 ">
                Party
              </span>
              <Image
                src="/side-chveron.svg"
                alt="icon"
                height={16}
                width={16}
                className="h-[16px] w-[16px]  "
              />
            </div>
            <div className="w-[247px] h-[16px] justify-between flex">
              <span className="text-[16px] font-normal text-black text-opacity-60 ">
                Gym
              </span>
              <Image
                src="/side-chveron.svg"
                alt="icon"
                height={16}
                width={16}
                className="h-[16px] w-[16px]  "
              />
            </div>
          </div>
        </div>

        <button className="w-[247px] h-[48px] py-[16px] px-[54px] rounded-[62px] bg-black text-white flex items-center justify-center text-[14px] font-medium font-satoshi">
          Apply Filter
        </button>
      </aside>
    </>
  );
};

export default SideBar;
