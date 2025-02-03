"use client";
import React, { useState } from "react";
// import Faqs from "./Faqs";
// import Image from "next/image";
// import { useRef } from "react";
import ReviewCardList from "./ReviewCardList";
// import ProductDetailsTable from "./ProductDetailsTable";
// import { GiSettingsKnobs } from "react-icons/gi";
import {   Popover,
  PopoverContent,
  PopoverTrigger, } from "@radix-ui/react-popover";
import Link from "next/link";
import SubscriptionComponent from "./Subscription";
// import { Minus, Plus } from "lucide-react";
// import { Bar, BarChart, ResponsiveContainer } from "recharts";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { Button } from "@/components/ui/button";
// import SideBar from "./SideBar";
// import Faqs from "@/sanity/schemaTypes/faqs";
const ProductDetailsTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  // const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  // const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsDropdownOpen(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsDropdownOpen(false);
  //   setIsSubDropdownOpen(false);
  // };
  // const toggleSubDropdown = () => {
  //   setIsSubDropdownOpen(!isSubDropdownOpen);
  // };
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
                <li className="md:text-[16px] text-[12px]">
                  Eco-friendly and sustainable production processes.
                </li>
                <li className="md:text-[16px] text-[12px]">
                  Available in multiple sizes and color variants.
                </li>
              </ul>
              <div className="mt-0">
              <SubscriptionComponent/>
              </div>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div id="content-tab2" role="tabpanel" aria-labelledby="tab2">
            <div className="">
              <div className="flex items-center px-0 sm:px-4 xl:px-10 gap-x-[10px] w-full mx-auto justify-start">
                <h4 className=" text-[16px] md:text-[24px] font-bold text-black font-satoshiBold mt-[30px]">
                  All Reviews
                </h4>
                <span className="font-satoshi md:text-[16px] font-normal text-black/60 text-[12px] mt-[30px]">
                  (451)
                </span>
              </div>
              <div className="md:w-[354px] mx-auto h-[48px] lg:left-0 lg:top-0 absolute md:left-0 xxl:left-0 xl:left-0 xl:top-0 xxl:w-[986px] flex justify-between top-[80px] md:top-[1280px] left-[170px] ">
                {/* <div
                  // data-aos="fade-up-left"
                  // data-aos-delay="300"
                  className="md:h-[48px] md:w-[48px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] bg-bgLightGrayColor rounded-full absolute md:left-[986px] xxl:left-[910px] xl:left-[830px] xl:top-[100px] md:top-[888px] flex justify-center items-center sm:left-[30px] "
                >
                  <Image
                    src="/product-detail-review-icon.svg"
                    alt="client-review"
                    height={24}
                    width={24}
                    className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] h-[15px] w-[15px]"
                  />
                </div> */}
                {/* <Drawer>
                  <DrawerTrigger asChild>
                    <Button
                      variant="default"
                      className="bg-white hover:bg-white shadow-white"
                    >
                      <div className="md:h-[48px] md:w-[48px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] bg-bgLightGrayColor rounded-full absolute md:left-[986px] xxl:left-[910px] xl:left-[830px] xl:top-[100px] md:top-[888px] flex justify-center items-center sm:left-[30px] ">
                        <Image
                          src="/product-detail-review-icon.svg"
                          alt="client-review"
                          height={24}
                          width={24}
                          className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] h-[15px] w-[15px]"
                        />
                        <GiSettingsKnobs className="md:w-[50px] md:h-[50px] sm:w-[20px] sm:h-[20px] h-[15px] w-[15px] text-black" />
                      </div>
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <SideBar
                    handleCategoryChange={handleCategoryChange}
                    activeColor={activeColor}
                    setFilteredProducts={setProducts}
                    setTotalPages={setTotalPages}
                    />
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer> */}
              </div>
              <div className="flex justify-end w-full sm:px-4 mx-auto px-0 xl:px-48 mt-[-30px]">
                <div className="relative inline-block ">
                  <button
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="text-black bg-bgLightGrayColor rounded-[62px] outline-none border-none font-medium text-[12px] sm:text-sm px-4 sm:px-7 py-1.5 sm:py-3 inline-flex items-center font-satoshi"
                  >
                    Latest
                    <svg
                      className="w-2.5 h-2.5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute left-[-120px] md:left-[-170px] z-10 mt-2 w-24 md:w-36 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
                        <li>
                          <button
                            onClick={() =>
                              setIsSubDropdownOpen((prev) => !prev)
                            }
                            className="flex items-center font-satoshi justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Shop
                            <svg
                              className="w-2.5 h-2.5 ml-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                              />
                            </svg>
                          </button>
                          {isSubDropdownOpen && (
                            <div className="absolute left-full top-0 z-20 ml-2 w-24 md:w-36 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                              <ul className="py-2 font-satoshi text-sm text-gray-700 dark:text-gray-200">
                                <li>
                                  <Link
                                    href="/casual"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Casual
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/men"
                                    className="block font-satoshi px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Men
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/women"
                                    className="block font-satoshi px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Women
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/kids"
                                    className="block font-satoshi px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Kids
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </li>
                        <li>
                          <Link
                            href="/cart"
                            className="block px-4 py-2 font-satoshi hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Cart
                          </Link>
                        </li>

                        <li>
                          <Popover>
                            <PopoverTrigger asChild>
                              <span className="block px-4 py-2 font-satoshi hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Sizes Available
                              </span>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="grid gap-4">
                                <div className="space-y-2">
                                  <h4 className="font-medium leading-none font-satoshiBold">
                                    Available Sizes
                                  </h4>
                                  <p className="text-sm text-muted-foreground font-satoshi">
                                    Here are the sizes available in our shop:
                                  </p>
                                </div>
                                <ul className="list-disc pl-6 text-sm font-satoshi text-gray-800">
                                  <li>Small (S)</li>
                                  <li>Medium (M)</li>
                                  <li>Large (L)</li>
                                  <li>Extra Large (XL)</li>
                                  <li>Extra Extra Large (XXL)</li>
                                </ul>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </li>

                        <li>
                          <Link
                            href="/signup"
                            className="block px-4 py-2 font-satoshi hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Sign out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-[30px]">
              <ReviewCardList />
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div id="content-tab3" role="tabpanel" aria-labelledby="tab3">
            <div className="">{/* <Faqs/> */}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTab;
