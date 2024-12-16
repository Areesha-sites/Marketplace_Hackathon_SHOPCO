import React from "react";
import Image from "next/image";
interface SideBarProps {
  closeSidebar: () => void;
}
const SideBar: React.FC<SideBarProps> = ({ closeSidebar }) => {
  return (
    <>
      <aside
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="md:w-[295px] w-[390px] h-[1130px] md:h-[1220px] absolute md:top-[204px]  top-[93px] md:left-[100px]  py-[20px] px-[24px] flex flex-col gap-[24px] rounded-[20px] border-[1px] border-black/10 z-50 bg-white"
      >
        <div className="md:w-[247px] h-[27px] w-[353px] flex justify-between">
          <h3 className="text-[20px] font-satoshiBold text-black font-bold">
            Filters
          </h3>
          <Image
            onClick={closeSidebar}
            src="/Frame (7).svg"
            alt="icon"
            height={24}
            width={24}
            className="w-[24px] h-[24px] md:hidden block"
          />
          <Image
            src="/side-image.svg"
            alt="icon"
            height={24}
            width={24}
            className="w-[24px] h-[24px] md:block hidden"
          />
        </div>
        <div className="md:w-[247px] w-[353px] border-b-[1px] border-black/10 "></div>
        <div className="md:w-[247px] w-[353px] h-[160px] flex flex-col gap-[20px]">
          <div className="md:w-[247px] w-[353px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 font-satoshi">
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
          <div className="md:w-[247px] w-[353px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 font-satoshi">
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
          <div className="md:w-[247px] w-[353px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 font-satoshi">
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
          <div className="md:w-[247px] w-[353px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 font-satoshi">
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
          <div className="md:w-[247px] w-[353px] h-[16px] justify-between flex">
            <span className="text-[16px] font-normal text-black text-opacity-60 font-satoshi">
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
        <div className="md:w-[247px] w-[353px] border-b-[1px] border-black/10 "></div>
        <div className="md:w-[247px] w-[353px] h-[90px] flex flex-col gap-[20px]">
          <div className="md:w-[247px] w-[353px] h-[27px] flex justify-between items-center">
            <h1 className="text-black text-[20px] font-satoshiBold font-bold">
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
          <div className="md:w-[247px] w-[353px] h-[43px] ">
            <Image
              src="/Group 6 (1).svg"
              alt="icon"
              height={20}
              width={247}
              className="h-[20px] md:w-[247px] w-[353px] "
            />
            <div className="flex justify-between w-[180px] mx-auto mt-1">
              <span className="text-[14px] font-satoshi font-medium">$50</span>
              <span className="text-[14px] font-satoshi font-medium">$200</span>
            </div>
          </div>
        </div>
        <div className=" w-[353px] md:w-[247px] border-b-[1px] border-black/10 "></div>
        <div className="md:w-[247px] w-[353px] h-[137px] flex flex-col gap-[20px] ">
          <div className="md:w-[247px] w-[353px] h-[27px] flex justify-between items-center">
            <h1 className="text-black text-[20px] font-satoshiBold font-bold">
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
          <div className="md:w-[247px] w-[343px] h-auto flex flex-wrap gap-[8px]">
            <div className="w-[37px] h-[37px] rounded-full bg-[#00C12B] border-[2px] border-[#37ab50]"></div>
            <div className="w-[37px] h-[37px] rounded-full bg-[#F50606] border-[2px] border-[#d00606]"></div>
            <div className="w-[37px] h-[37px] rounded-full bg-[#F5DD06] border-[2px] border-[#c5b206]"></div>
            <div className="w-[37px] h-[37px] rounded-full bg-[#F57906] border-[2px] border-[#d06909]"></div>
            <div className="w-[37px] h-[37px] rounded-full bg-[#06CAF5] border-[2px] border-[#06acd1]"></div>
            <div className="w-[37px] h-[37px] rounded-full bg-[#063AF5] border-[2px] border-[#052cba] flex justify-center items-center">
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                height={16}
                width={16}
                className="h-[16px] w-[16px]"
              />
            </div>
            <div className="w-[37px] h-[37px] rounded-full bg-[#7D06F5] border-[2px] border-[#6505c5]"></div>
            <div className="w-[37px] h-[37px] rounded-full bg-[#F506A4] border-[2px] border-[#d2088f]"></div>
            <div className="w-[37px] h-[37px] rounded-full border-[1px] border-black/20"></div>
            <div className="w-[37px] h-[37px] rounded-full bg-black"></div>
          </div>
        </div>
        <div className="md:w-[247px] w-[353px] border-b-[1px] border-black/10 "></div>
        <div className="w-[247px] h-[274px] flex gap-[20px] flex-col">
          <div className="md:w-[247px] w-[353px] h-[27px] flex justify-between items-center">
            <h1 className="text-black text-[20px] font-satoshiBold font-bold">
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

          <div className="w-[247px] h-[227px] flex gap-[8px]">
            <button className="w-[96px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi">
              XX-Small
            </button>
            <button className="w-[88px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi">
              X-Small
            </button>
            <button className="w-[79px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute md:left-[25px] md:top-[725px] left-[224px]">
              Small
            </button>
            <button className="w-[90px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute md:left-[112px] left-[25px] top-[725px]">
              Medium
            </button>
            <button className="w-[79px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-black text-white font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute md:left-[25px] md:top-[773px] top-[725px] left-[124px]">
              Large
            </button>
            <button className="w-[89px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute md:left-[112px] left-[212px] md:top-[773px] top-[725px]">
              X-Large
            </button>
            <button className="w-[98px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi  absolute  left-[25px] md:top-[820px] top-[774px]">
              XX-Large
            </button>
            <button className="w-[97px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute left-[132px] md:top-[820px]  top-[774px]">
              3X-Large
            </button>
            <button className="w-[98px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor font-normal text-black/60 text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute md:left-[25px] md:top-[868px] top-[774px] left-[235px]">
              4X-Large
            </button>
          </div>
        </div>

        <div className="md:w-[247px] w-[353px]  border-b-[1px] border-black/10 md:static relative top-[-83px]"></div>
        <div className="md:w-[247px] w-[353px] h-[171px] flex flex-col gap-[20px] md:static relative top-[-83px]">
          <div className="md:w-[247px] w-[353px] h-[27px] flex justify-between items-center">
            <h1 className="text-black text-[20px] font-satoshiBold font-bold">
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

          <div className="md:w-[247px] w-[353px] h-[124px] flex flex-col gap-[20px]">
            <div className="md:w-[247px] w-[353px] h-[16px] justify-between flex">
              <span className="text-[16px] font-normal text-black text-opacity-60 font-satoshi">
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
            <div className="md:w-[247px] w-[353px] h-[16px] justify-between flex">
              <span className="md:w-[247px] w-[353px] font-normal text-black text-opacity-60 font-satoshi">
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
            <div className="md:w-[247px] w-[353px] h-[16px] justify-between flex">
              <span className="text-[16px] font-normal text-black text-opacity-60 font-satoshi ">
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
            <div className="md:w-[247px] w-[353px] h-[16px] justify-between flex">
              <span className="text-[16px] font-normal text-black text-opacity-60 font-satoshi">
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
        <button className="md:w-[247px] w-[353px] h-[48px] py-[16px] px-[54px] rounded-[62px] bg-black text-white flex items-center justify-center text-[14px] font-medium font-satoshi md:static relative top-[-83px]">
          Apply Filter
        </button>
      </aside>
    </>
  );
};

export default SideBar;
