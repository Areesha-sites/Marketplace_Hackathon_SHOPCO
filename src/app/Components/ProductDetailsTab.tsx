"use client";
import React, { useState } from "react";
import Faqs from "./Faqs";
import Image from "next/image";
import { useRef } from "react";
import ReviewCardList from "./ReviewCardList";
import ProductDetailsTable from "./ProductDetailsTable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const ProductDetailsTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsSubDropdownOpen(false);
  };
  const toggleSubDropdown = () => {
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };
  return (
    <div className="flex justify-between md:justify-center items-center w-full flex-col mx-auto px-4 sm:px-2">

      <div className="border-b border-black/10 dark:border-neutral-700 w-[270px] sm:w-full mx-auto xl:w-[1160px] xxl:w-[1240px]">

        <nav
          className="flex justify-between sm:gap-x-[40px] gap-x-[30px] w-full md:px-11 "
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            type="button"
            className={`py-4 px-1 text-[12px] sm:text-[14px] md:text-[20px] font-satoshi whitespace-nowrap ${
              activeTab === "tab1"
                ? "font-medium border-b-2 border-black text-black w-[80px] md:w-[414px]"
                : "border-transparent text-gray-500 text-[12px] sm:text-[14px] md:text-[20px] hover:text-black"
            }`}
            id="tab1"
            onClick={() => setActiveTab("tab1")}
            role="tab"
            aria-selected={activeTab === "tab1"}
          >
            Product Details
          </button>

          <button
            type="button"
            className={`py-4 px-1 text-[12px] sm:text-[14px] md:text-[20px] font-satoshi whitespace-nowrap ${
              activeTab === "tab2"
                ? "font-medium border-b-2 border-black text-black w-[70px] md:w-[414px]"
                : "border-transparent text-gray-500 text-[12px] sm:text-[14px] md:text-[20px] hover:text-black"
            }`}
            id="tab2"
            onClick={() => setActiveTab("tab2")}
            role="tab"
            aria-selected={activeTab === "tab2"}
          >
            Rating & Reviews
          </button>
          <button
            type="button"
            className={`py-4 px-1 text-[12px] sm:text-[14px] md:text-[20px] font-satoshi whitespace-nowrap ${
              activeTab === "tab3"
                ? "font-medium border-b-2 border-black text-black w-[70px] md:w-[414px]"
                : "border-transparent text-gray-500 text-[12px] sm:text-[14px] md:text-[20px] hover:text-black"
            }`}
            id="tab3"
            onClick={() => setActiveTab("tab3")}
            role="tab"
            aria-selected={activeTab === "tab3"}
          >
            FAQs
          </button>
        </nav>
      </div>
      <div className="md:mt-10 mt-0 w-full">
        {activeTab === "tab1" && (
          <div id="content-tab1" role="tabpanel" aria-labelledby="tab1">
            <div className="p-6">
              <h2 className="md:text-2xl text-[18px] font-bold text-black/70 tracking-wider mb-4 font-integralCf">
                Key Highlights
              </h2>
              <ul className="list-disc list-inside text-gray-600 font-satoshi">
                <li className="md:text-[16px] text-[12px] font-normal">
                  High-quality materials ensuring durability and comfort.
                </li>
                <li className="md:text-[16px] text-[12px]">
                  Advanced technology for unmatched performance in all
                  conditions.
                </li>
                <li className="md:text-[16px] text-[12px]">Eco-friendly and sustainable production processes.</li>
                <li className="md:text-[16px] text-[12px]">Available in multiple sizes and color variants.</li>
              </ul>
              <div className="mt-6 md:mt-14">
                <ProductDetailsTable />
              </div>
            </div>
          </div>
        )}

        {activeTab === "tab2" && (
          <div id="content-tab2" role="tabpanel" aria-labelledby="tab2">
            <div className="">
              <div className="flex items-center">
                <h4
                  data-aos="fade-up-right"
                  data-aos-delay="300"
                  className="absolute md:top-[100px] xl:left-[50px] xxl:left-0 left-[16px] text-[16px]  lg:top-[1245px] top-[80px] md:text-[24px] font-bold text-black font-satoshiBold"
                >
                  All Reviews
                </h4>
                <span
                  data-aos="fade-up-right"
                  data-aos-delay="300"
                  className="absolute md:top-[110px] xl:left-[180px] xxl:left-[130px] font-satoshi md:text-[16px] font-normal text-black/60 text-[12px] lg:top-[1245px] top-[85px] left-[105px] md:left-[140px] "
                >
                  (451)
                </span>
              </div>
              <div className="md:w-[354px] mx-auto h-[48px] lg:left-0 lg:top-0 absolute md:left-0 xxl:left-0 xl:left-0 xl:top-0 xxl:w-[986px] flex justify-between top-[80px] md:top-[1280px] left-[170px] ">
                <div
                  data-aos="fade-up-left"
                  data-aos-delay="300"
                  className="md:h-[48px] md:w-[48px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] bg-bgLightGrayColor rounded-full absolute md:left-[986px] xxl:left-[910px] xl:left-[830px] xl:top-[100px] md:top-[888px] flex justify-center items-center sm:left-[30px] "
                >
                  <Image
                    src="/product-detail-review-icon.svg"
                    alt="client-review"
                    height={24}
                    width={24}
                    className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] h-[15px] w-[15px]"
                  />
                </div>

                <Select>
                  <SelectTrigger className="w-[120px] h-[48px] py-[16px] px-[20px] rounded-[62px] absolute md:left-[1045px] xxl:left-[965px] xl:left-[885px] xl:top-[100px] xxl:top-[100px] md:flex justify-between items-center bg-bgLightGrayColor hidden cursor-pointer border-none outline-none font-satoshi">
                    <SelectValue
                      placeholder="Latest"
                      className="border-none outline-none text-[20px]"
                    />
                  </SelectTrigger>
                  <SelectContent className="border-none outline-none">
                    <SelectGroup>
                      <SelectLabel className="font-satoshi">Latest</SelectLabel>
                      <SelectItem value="apple" className="font-satoshi">
                        Overview
                      </SelectItem>
                      <SelectItem value="banana" className="font-satoshi">
                        {" "}
                        My downloads
                      </SelectItem>
                      <SelectItem value="blueberry" className="font-satoshi">
                        Billing
                      </SelectItem>
                      <SelectItem value="grapes" className="font-satoshi">
                        Rewards
                      </SelectItem>
                      <SelectItem value="pineapple" className="font-satoshi">
                        Earnings
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* <div
                  ref={dropdownRef}
                  className="w-[120px] h-[48px] py-[16px] px-[20px] rounded-[62px] absolute md:left-[1045px] xxl:left-[1045px] xl:left-[885px] xl:top-[100px] xxl:top-[888px] md:flex justify-between items-center bg-bgLightGrayColor hidden cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className="text-[16px] font-medium font-satoshi text-black">
                    Latest
                  </p>
                  <Image
                    src="/dropdown (3).svg"
                    alt="dropdown"
                    height={16}
                    width={16}
                    className="w-[16px] h-[16px] "
                  />
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-md rounded-md z-20">
                      <ul className="p-2">
                        <li className="font-satoshi text-[14px] text-black font-normal hover:bg-gray-100 px-4 py-2">
                          Dashboard
                        </li>
                        <li
                          className="font-satoshi text-[14px] text-black font-normal hover:bg-gray-100 px-4 py-2 flex justify-between items-center"
                          onClick={toggleSubDropdown}
                        >
                          Dropdown
                          <Image
                            src="/dropdown (3).svg"
                            alt="dropdown"
                            height={12}
                            width={12}
                            className={`w-[12px] h-[12px] transition-transform ml-2 ${
                              isSubDropdownOpen ? "rotate-90" : "rotate-0"
                            }`}
                          />
                        </li>
                        {isSubDropdownOpen && (
                          <div className="absolute top-0 left-[120px] bg-white shadow-md rounded-md z-30">
                            <ul className="p-2">
                              <li className="font-satoshi text-[14px] text-black font-normal hover:bg-gray-100 px-4 py-2">
                                Overview
                              </li>
                              <li className="font-satoshi text-[14px] text-black font-normal hover:bg-gray-100 px-4 py-2">
                                My downloads
                              </li>
                              <li className="font-satoshi text-[14px] text-black font-normal hover:bg-gray-100 px-4 py-2">
                                Billing
                              </li>
                              <li className="font-satoshi text-[14px] text-black font-normal hover:bg-gray-100 px-4 py-2">
                                Rewards
                              </li>
                            </ul>
                          </div>
                        )}
                        <li className="font-satoshi text-[14px] text-black font-normal hover:bg-gray-100 px-4 py-2">
                          Earnings
                        </li>
                        <li className="font-satoshi text-[14px] text-black font-normal hover:bg-gray-100 px-4 py-2">
                          Sign out
                        </li>
                      </ul>
                    </div>
                  )}
                </div> */}
                <div
                  data-aos="fade-up-left"
                  data-aos-delay="300"
                  className="md:w-[166px] sm:w-[113px] md:h-[48px] h-[40px] py-[10px] sm:py-[16px] px-[10px] sm:px-[20px] rounded-[62px] absolute md:left-[1178px] xl:top-[100px] xxl:left-[1090px] xl:left-[1012px] md:top-[888px] flex justify-center items-center bg-black text-white whitespace-nowrap text-[10px] sm:text-[12px] md:text-[16px] font-medium top-[-5px] left-[40px] font-satoshi sm:left-[80px]"
                >
                  Write a Review
                </div>
              </div>
              {/* <div className="absolute md:top-[180px] md:left-[100px] xxl:left-[0px] xl:left-0 top-[130px] left-[16px]">
                <ReviewCardList />
              </div> */}
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div id="content-tab3" role="tabpanel" aria-labelledby="tab3">
            <div className="">
              <Faqs />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTab;
