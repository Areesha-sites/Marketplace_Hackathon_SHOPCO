"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
  import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
  import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../Components/Footer";
const HelpCenter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, [0, 100], ["0%", "100%"]); 
  const progressPercentage = useTransform(progress, (value) => `${Math.round(value)}%`); 
  useEffect(() => {
    const interval = setInterval(() => {
      progress.set(progress.get() + 10); 
      if (progress.get() >= 100) {
        clearInterval(interval);
        setIsLoading(false); 
      }
    }, 200);
    window.onload = () => {
      clearInterval(interval);
      setIsLoading(false);
    };
    return () => clearInterval(interval);
  }, [progress]);
  return (
    <>
     <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-animation"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#f5f5f5", 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#333", 
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "backOut" }}
                style={{
                  fontSize: "64px",
                  marginBottom: "20px",
                }}
              >
              </motion.div>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontFamily: "'Integralcf', sans-serif",
                }}
              >
                Welcome to SHOP.CO
              </h1>
              <div
                style={{
                  width: "80%",
                  maxWidth: "400px",
                  height: "10px",
                  backgroundColor: "#e0e0e0", 
                  borderRadius: "5px",
                  overflow: "hidden",
                  margin: "0 auto",
                }}
              >
                <motion.div
                   style={{
                    width: progressWidth,
                    height: "100%",
                    backgroundColor: "#333",
                    borderRadius: "5px",
                    boxShadow: "0 0 10px rgba(104, 85, 224, 0.6)",
                  }}
                  animate={{
                    scale: progress.get() === 100 ? [1, 1.05, 1] : 1,
                    transition: { repeat: Infinity, duration: 1 },
                  }}
                />
              </div>
              <motion.div
                style={{
                  marginTop: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {progressPercentage}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
      <div className="absolute top-[150px] left-[100px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/" className="font-satoshi">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <Link href="/helpCenter" className="font-satoshi">
                  Help Center
                </Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="flex justify-center items-center w-full mx-auto h-auto mt-28 lg:mt-44 md:mt-36">
        <div className="flex flex-col justify-center items-center gap-y-[10px]">
          <div className="flex justify-center items-center gap-x-[10px] h-[30px] bg-bgLightGrayColor w-[200px] md:w-[250px] rounded-[50px]">
            <div className=" text-black font-satoshi text-[12px] md:text-[14px] ">
              All Services Customer
            </div>
            <FaArrowRight className="sm:h-4 sm:w-4 text-black/80" />
          </div>
          <h1 className="uppercase font-integralCf text-[28px] md:text-[42px] text-black font-extrabold tracking-wider text-center ">
            Help Center
          </h1>
          <p className="text-center font-satoshi text-[12px] md:text-[14px] md:px-20 font-normal px-7 lg:px-[200px] xl:px-[300px] text-black/50 xxl:text-[16px]">
            Running into a problem? Our help center is here to help you find
            quick and easy solutions. Explore our FAQs, guides, and contact us
            for personalized support.
          </p>
          <div className="flex justify-center items-center gap-x-[10px] mt-3">
            <Link href="/liveChat">
            <button className="bg-black text-white w-[120px] h-[30px] rounded-[50px] font-satoshi text-[14px] font-medium flex justify-center items-center transition-all duration-300 hover:bg-white hover:border-[1px] hover:border-black/25 hover:text-black">
              Chatbot
            </button>
            </Link>
            <button className="bg-white text-black w-[120px] h-[30px] rounded-[50px] font-satoshi text-[14px] font-medium flex justify-center items-center transition-all duration-300 hover:bg-black border-[1px] border-black/25 hover:text-white">
              Request Send
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-0 px-5 sm:px-0 md:px-16 lg:px-20 xl:px-11 xxl:px-3 mt-6">
            <div className="w-[250px] h-[250px] border-t-[1px] border-full border-green-500 ">
              <div className="flex flex-col gap-y-[10px] justify-start py-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer ease-linear">
                <AiOutlineFileSearch className="h-[30px] w-[30px] text-black/50" />
                <h1 className="text-black font-satoshi text-[20px] font-semibold">
                  User Guide
                </h1>
                <p className="text-left font-normal text-black font-satoshi text-[14px]">
                  Easily navigate our platform with our comprehensive user
                  guide. Find step-by-step instructions, helpful tips, and
                  answers to common questions.
                </p>
                <Link
                  href="/user-guide"
                  className="flex justify-between items-center w-full mx-auto "
                >
                  <button className="text-black font-satoshi hover:text-black/80 text-[14px] ">
                    Read More
                  </button>
                  <FaArrowRight className="text-black h-[15px] w-[15px]" />
                </Link>
              </div>
            </div>
            <div className="w-[250px] h-[250px] border-t-[1px] border-full border-yellow-500">
              <div className="flex flex-col gap-y-[10px] justify-start py-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer ease-linear">
                <GoQuestion className="h-[30px] w-[30px] text-black/50" />
                <h1 className="text-black font-satoshi text-[20px] font-semibold">
                  FAQs
                </h1>
                <p className="text-left font-normal text-black font-satoshi text-[14px]">
                  Find answers to frequently asked questions about our products,
                  services, and more.
                </p>
                <Link
                  href="/faq"
                  className="flex justify-between items-center w-full mx-auto "
                >
                  <button className="text-black font-satoshi hover:text-black/80 text-[14px] ">
                    Read More
                  </button>
                  <FaArrowRight className="text-black h-[15px] w-[15px]" />
                </Link>
              </div>
            </div>
            <div className="w-[250px] h-[250px] border-t-[1px] border-full border-red-500">
              <div className="flex flex-col gap-y-[10px] justify-start py-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer ease-linear">
                <MdOutlineEmail className="h-[30px] w-[30px] text-black/50" />
                <h1 className="text-black font-satoshi text-[20px] font-semibold">
                  Contact Us
                </h1>
                <p className="text-left font-normal text-black font-satoshi text-[14px]">
                  Get quick answers to common questions about our products,
                  services, and more.
                </p>
                <Link
                  href="/contact"
                  className="flex justify-between items-center w-full mx-auto "
                >
                  <button className="text-black font-satoshi hover:text-black/80 text-[14px] ">
                    Read More
                  </button>
                  <FaArrowRight className="text-black h-[15px] w-[15px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {!isLoading && (
        <div className="absolute md:top-[1830px] lg:top-[2700px] xxl:top-[1800px] xl:top-[850px] top-[1800px] sm:top-[2000px] z-20">
          <Footer />
        </div>
      )}
      </div>
    </>
  );
};

export default HelpCenter;
