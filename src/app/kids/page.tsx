"use client";
import React, { useState, useEffect } from "react";
import SideBar from "../Components/SideBar";
import Image from "next/image";
import Pagination from "../Components/Pagination";
import CausalCardsList from "../Components/CasualCardsList";
import Footer from "../Components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { client } from "@/sanity/lib/client";
import CasualCard from "../Components/casualComp/CasualCard";
import CasualProduct from "../Components/CasualProduct";
import { notFound } from "next/navigation";
import KidsCard from "../Components/kidsComp/KidsCard";
// interface Products {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   category: string;
//   discountPercent: number | null;
//   isNew: boolean | null;
//   colors: string[];
//   sizes: string[];
// }
// const fetchProducts = async ({ params }: { params: { id: string } }) => {
//   const { id } = params;
//   const query = `*[_type=="products" && _id==$id][0]{
//     _id,
//     name,
//     description,
//     price,
//     "imageUrl" : image.asset->url,
//     category,
//     discountPercent,
//     "isNew": new,
//     colors,
//     sizes
//   }`;
//   try {
//     const product: Products | null = await client.fetch(query, { id });

//     if (!product) {
//       return notFound();
//     }
//     return product;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return notFound();
//   }
// };
const Kids: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full 3xl:w-full 2xl:w-full">
        <section>
          {/* <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="xl:w-[1240px] xxl:w-[1240px] absolute md:top-[134px] lg:left-[50px] xl:left-[100px] border-b-[1px] border-black/10 top-[98px] w-full left-0 mx-auto lg:w-[930px] md:w-[600px]"
        ></div> */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="md:w-[106px] w-[89px] h-[22px] absolute lg:top-[158px] xl:left-[100px] lg:left-[50px] left-[16px] flex lg:gap-[12px] gap-[5px] items-center top-[118px]"
          >
            <span className="font-satoshi md:text-[16px] text-[14px] font-normal text-black/60">
              <Link href="/"> Home</Link>
            </span>
            <Image
              src="/Frame (5).svg"
              alt="icon"
              height={16}
              width={16}
              className="md:h-[16px] md:w-[16px] h-[14px] w-[14px]"
            />
            <span className="font-satoshi md:text-[16px] text-[14px] font-normal text-black">
              <Link href="/kids"> Kids</Link>
            </span>
          </div>
          <div className={`${isSidebarVisible ? "block" : "hidden"} lg:block`}>
            {/* <Drawer>
  <DrawerTrigger asChild>
  <div
            className="w-[32px] h-[32px] absolute top-[200px] left-[180px] rounded-[62px] bg-bgLightGrayColor flex justify-center items-center md:hidden"
            onClick={toggleSidebar}
          >
            <Image
              src="/Frame (6).svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]"
            />
          </div>
  </DrawerTrigger>
  <DrawerContent>
  <SideBar closeSidebar={toggleSidebar} />
    <div className="p-4">
      <DrawerFooter>
        <Button onClick={toggleSidebar}>Close Sidebar</Button>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer> */}

            {/* <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              {/* <ResponsiveContainer width="100%" height="100%"> */}
            {/* <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer> */}
            {/* <SideBar closeSidebar={toggleSidebar} /> */}
          </div>
          <div className="flex justify-between items-center w-full px-2 mx-auto">
            <div className="flex justify-between w-full ml-2 items-center gap-x-[40px]">
              <h1
                data-aos="zoom-in"
                data-aos-delay="200"
                className="absolute lg:top-[204px] top-[149px]  lg:left-[360px] xl:left-[415px] md:text-[32px] text-[24px] font-bold text-black font-satoshiBold"
              >
                Kids
              </h1>

              <div className="flex justify-end items-center w-full px-5">
                <div
                  className=" md:w-[396px] md:h-[16px] absolute lg:top-[217px] lg:left-[580px] xxl:left-[944px] xl:left-[770px] flex md:gap-[12px] top-[157px] left-[96px] items-center mt-1 md:mt-3 md:ml-6"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="md:text-[16px] xxl:text-[16px] xl:text-[14px] sm:text-[14px] text-[12px] font-normal font-satoshi text-black/60 whitespace-nowrap text-center"
                  >
                    Showing 1-10 of 100 Products
                  </p>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="md:flex gap-[4px] items-center hidden "
                  >
                    <p className="text-[16px] font-normal font-satoshi text-black/60 whitespace-nowrap">
                      Sort by: <span className="text-black">Most Popular</span>
                    </p>
                    <Image
                      src="/sort-chevron.svg"
                      alt="icon"
                      height={16}
                      width={16}
                      className={`h-[16px] w-[16px] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute top-[25px] left-[300px] bg-white border border-gray-200 shadow-md rounded-md w-[150px] z-50">
                      <ul className="text-black text-[14px] font-satoshi">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500">
                          Price: Low to High
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500">
                          Price: High to Low
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500">
                          New Arrivals
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="flex justify-end items-center w-full px-5">
                    <div
                      className="w-[32px] h-[32px] absolute top-[-5px] left-[170px] lg:left-[700px] lg:top-[120px] rounded-[62px] bg-bgLightGrayColor flex justify-center items-center lg:hidden md:top-[0px] md:left-[600px]"
                      onClick={toggleSidebar}
                    >
                      <Image
                        src="/Frame (6).svg"
                        alt="icon"
                        height={16}
                        width={16}
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=""></div>
            </div>

            {/* <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="absolute md:top-[204px] top-[149px] lg:left-[360px] xl:left-[415px] md:text-[32px] text-[24px] font-bold text-black font-satoshiBold"
        >
          Casual
        </h1> */}
            {/* <div
          className=" md:w-[396px] md:h-[16px] absolute md:top-[217px] md:left-[944px] xxl:left-[944px] xl:left-[800px] left-[90px] flex md:gap-[12px] top-[157px] mt-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="md:text-[16px] xxl:text-[16px] xl:text-[14px] text-[14px] font-normal font-satoshi text-black/60 whitespace-nowrap"
          >
            Showing 1-10 of 100 Products
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="md:flex gap-[4px] items-center hidden "
          >
            <p className="text-[16px] font-normal font-satoshi text-black/60 whitespace-nowrap">
              Sort by: <span className="text-black">Most Popular</span>
            </p>
            <Image
              src="/sort-chevron.svg"
              alt="icon"
              height={16}
              width={16}
              className={`h-[16px] w-[16px] transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {isOpen && (
            <div className="absolute top-[25px] left-[300px] bg-white border border-gray-200 shadow-md rounded-md w-[150px] z-50">
              <ul className="text-black text-[14px] font-satoshi">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500">
                  Price: Low to High
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500">
                  Price: High to Low
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500">
                  New Arrivals
                </li>
              </ul>
            </div>
          )}
          <div
            className="w-[32px] h-[32px] absolute top-[-5px] left-[200px] rounded-[62px] bg-bgLightGrayColor flex justify-center items-center md:hidden"
            onClick={toggleSidebar}
          >
            <Image
              src="/Frame (6).svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]"
            />
          </div>
        </div> */}
          </div>
          <div className="flex justify-center items-center w-full mx-auto px-6">
            <div className="absolute md:top-[236px] lg:top-[263px] xl:left-[420px] lg:left-[370px] top-[220px]">
             <KidsCard/>
            </div>
          </div>
          <div className="flex justify-center items-center w-full mx-auto">
            {/* <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="lg:w-[600px] md:w-[700px] w-full mx-auto lg:left-[375px] xl:left-[415px] md:top-[1333px] lg:top-[2400px] xxl:top-[1580px] xxl:w-[925px] xl:w-[770px] xl:top-[1370px] top-[1400px] sm:top-[1590px] absolute border-b-[1px] border-black/10 "
        ></div> */}
          </div>
          {/* <Pagination /> */}
        </section>
      </div>
      {/* <div className="absolute md:top-[1830px] xxl:top-[2100px] xl:top-[1800px] top-[1500px] z-20">
        <Footer />
      </div> */}
    </>
  );
};

export default Kids;
