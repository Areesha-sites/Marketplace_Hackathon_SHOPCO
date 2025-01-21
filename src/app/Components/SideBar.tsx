"use client";
import React from "react";
import Image from "next/image";
import RangeSlider from "./PriceRange";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
interface SideBarProps {
  handleCategoryChange: (category: string, index: number) => void;
  activeColor: number | null;
}
// const handleColorClick = (colorIndex: number) => {
//   const [activeColor, setActiveColor] = useState(0);
//   const handleColorClick = (index: any) => {
//     setActiveColor(index);
//   };
//   console.log("Selected color index:", colorIndex);
// };

const SideBar = ({
  handleCategoryChange,
  setFilteredProducts,
  setTotalPages,
}: any) => {
  const categories = ["tshirt", "short", "jeans", "hoodie", "shirt"];
  const [activeSize, setActiveSize] = useState("Large");

  const handleSizeClick = (size: string) => {
    setActiveSize(size);
  };
  const [activeColor, setActiveColor] = useState<number | null>(null); // Active color index

  const handleColorClick = (index: number) => {
    setActiveColor(index);
    console.log("Selected color index:", index); // Debugging purpose
  };
  const colors = [
    "#00C12B",
    "#F50606",
    "#F5DD06",
    "#F57906",
    "#06CAF5",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
    "", // Represents the black circle
    "",
  ];
  return (
    <aside
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="lg:w-[295px] w-full h-[1130px] md:h-[1220px] absolute md:top-[204px] xl:top-[-60px] top-[93px] xxl:left-[100px] xl:left-[-350px] py-[20px] px-[24px] flex flex-col gap-[24px] rounded-[20px] border-[1px] border-black/10 z-50 bg-white lg:left-[50px]"
    >
      <div className="lg:w-[247px] h-[27px] w-full px-4 flex justify-between">
        <h3 className="text-[20px] font-satoshiBold text-black font-bold">
          Filters
        </h3>
        <Image
          src="/Frame (7).svg"
          alt="icon"
          height={24}
          width={24}
          className="w-[24px] h-[24px] lg:hidden block"
        />
        <Image
          src="/side-image.svg"
          alt="icon"
          height={24}
          width={24}
          className="w-[24px] h-[24px] lg:block hidden"
        />
      </div>

      <div className="lg:w-[247px] w-full border-b-[1px] border-black/10 "></div>
      <div className="lg:w-[247px] w-full h-auto flex flex-col gap-[10px]">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryChange(category, index)}
            className={`flex justify-between items-center cursor-pointer text-[16px] font-satoshi ${
              activeColor === index
                ? "text-black font-bold"
                : "text-gray-600 font-normal"
            }`}
          >
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            <Image
              src="/side-chveron.svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]  "
            />
          </div>
        ))}
      </div>

      <div className="lg:w-[247px] w-full border-b-[1px] border-black/10 "></div>

      <div className="lg:w-[247px] w-full h-[90px] flex flex-col gap-[20px]">
        <div className="lg:w-[247px] w-full h-[27px] flex justify-between items-center">
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
        <div className="lg:w-[147px] w-full h-[43px] ">
          <RangeSlider
            setFilteredProducts={setFilteredProducts}
            setTotalPages={setTotalPages}
          />
        </div>
      </div>
      <div className="w-full lg:w-[247px] border-b-[1px] border-black/10 "></div>

      <div className="lg:w-[247px] w-full h-[137px] flex flex-col gap-[20px] ">
        <div className="lg:w-[247px] w-full h-[27px] flex justify-between items-center">
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

        <div className="lg:w-[247px] w-full h-auto flex flex-wrap gap-[8px]">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-[37px] h-[37px] rounded-full ${
                color ? `bg-[${color}]` : "border-[1px] border-black/20"
              } border-[2px] ${
                activeColor === index
                  ? color === ""
                    ? "border-[#c9c7c7] "
                    : ""
                  : color === "#00C12B"
                    ? "border-[#37ab50] bg-[#00C12B]"
                    : color === "#F50606"
                      ? "border-[#d00606] bg-[#F50606]"
                      : color === "#F5DD06"
                        ? "border-[#c5b206] bg-[#F5DD06]"
                        : color === "#F57906"
                          ? "border-[#d06909] bg-[#F57906]"
                          : color === "#06CAF5"
                            ? "border-[#06acd1] bg-[#06CAF5]"
                            : color === "#063AF5"
                              ? "border-[#052cba] bg-[#063AF5]"
                              : color === "#7D06F5"
                                ? "border-[#6505c5] bg-[#7D06F5]"
                                : color === "#F506A4"
                                  ? "border-[#d2088f] bg-[#F506A4]"
                                  : color === "#F506A4"
                                    ? "border-[#f0f0f0] bg-[#ffffff]"
                                    : "border-black/20 bg-black"
              } flex justify-center items-center`}
              onClick={() => handleColorClick(index)}
            >
              {activeColor === index && (
                <Image
                  src="/check-icon.svg"
                  alt="check-icon"
                  height={16}
                  width={16}
                  className="h-[16px] w-[16px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[247px] w-full border-b-[1px] border-black/10 "></div>
      <div className="lg:w-[247px] w-full h-[274px] flex gap-[20px] flex-col">
        <div className="lg:w-[247px] w-full h-[27px] flex justify-between items-center">
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
        <div className="w-[247px] h-[227px] flex flex-wrap gap-[8px]">
          <button
            className={`w-[96px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              activeSize === "XX-Small"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute left-[16px] md:left-[50px] lg:left-[20px]`}
            onClick={() => handleSizeClick("XX-Small")}
          >
            XX-Small
          </button>
          <button
            className={`w-[88px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              activeSize === "X-Small"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute left-[120px] md:left-[160px] lg:left-[125px]`}
            onClick={() => handleSizeClick("X-Small")}
          >
            X-Small
          </button>
          <button
            className={`w-[79px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              activeSize === "Small"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute  lg:top-[725px] left-[216px] md:left-[260px] md:top-[675px] lg:left-[20px]`}
            onClick={() => handleSizeClick("Small")}
          >
            Small
          </button>
          <button
            className={`w-[90px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              activeSize === "Medium"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute lg:left-[108px] left-[16px] top-[715px] md:top-[675px] lg:top-[725px] md:left-[350px]`}
            onClick={() => handleSizeClick("Medium")}
          >
            Medium
          </button>
          <button
            className={`w-[79px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              activeSize === "Large"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute lg:left-[20px] lg:top-[773px] top-[715px] md:top-[675px] left-[114px] md:left-[450px]`}
            onClick={() => handleSizeClick("Large")}
          >
            Large
          </button>
          <button
            className={`w-[89px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              activeSize === "X-Large"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute lg:left-[109px] left-[200px] lg:top-[773px] top-[715px] md:top-[675px] md:left-[540px]`}
            onClick={() => handleSizeClick("X-Large")}
          >
            X-Large
          </button>
          <button
            className={`w-[98px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              activeSize === "XX-Large"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute left-[16px] lg:top-[820px] top-[764px] md:top-[730px] md:left-[50px] lg:left-[25px]`}
            onClick={() => handleSizeClick("XX-Large")}
          >
            XX-Large
          </button>
          <button
            className={`w-[97px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              activeSize === "3X-Large"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute left-[120px] lg:top-[820px] top-[764px] md:top-[730px] md:left-[160px] lg:left-[133px]`}
            onClick={() => handleSizeClick("3X-Large")}
          >
            3X-Large
          </button>
          <button
            className={`w-[98px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              activeSize === "4X-Large"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } font-normal text-[14px] whitespace-nowrap flex items-center justify-center font-satoshi absolute lg:left-[20px] lg:top-[868px] top-[764px] left-[225px] md:top-[730px] md:left-[270px]`}
            onClick={() => handleSizeClick("4X-Large")}
          >
            4X-Large
          </button>
        </div>
      </div>
      <div className="lg:w-[247px] w-full border-b-[1px] border-black/10 md:static relative top-[-83px]"></div>
      <div className="lg:w-[247px] w-full h-[171px] flex flex-col gap-[20px] md:static relative top-[-83px]">
        <div className="lg:w-[247px] w-full h-[27px] flex justify-between items-center">
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
        <div className="lg:w-[247px] w-full h-[124px] flex flex-col gap-[20px]">
          {[
            { name: "Casual", route: "/casual" },
            { name: "Men", route: "/men" },
            { name: "Women", route: "/women" },
            { name: "Kids", route: "/kids" },
          ].map((item, index) => (
            <Link
              href={item.route}
              key={index}
              className="lg:w-[247px] w-full h-[16px] flex justify-between items-center text-[16px] font-normal text-black text-opacity-60 font-satoshi hover:text-black"
            >
              <div className="flex justify-between w-full items-center">
                <span>{item.name}</span>
                <Image
                  src="/side-chveron.svg"
                  alt="icon"
                  height={16}
                  width={16}
                  className="h-[16px] w-[16px]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Button
        className="shadow-white hover:bg-white lg:w-[247px] w-full h-[48px] py-[16px] px-[54px] rounded-[62px] bg-black text-white flex items-center justify-center text-[14px] font-medium font-satoshi md:static relative top-[-83px] hover:bg-black/85"
        onClick={() =>
          toast.success("Applied Filter Successfully", {
            description: "Filters have been applied to your preferences.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo action triggered"),
            },
          })
        }
      >
        Apply Filter
      </Button>
    </aside>
  );
};

export default SideBar;
