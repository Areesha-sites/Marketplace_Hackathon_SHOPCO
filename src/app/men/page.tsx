"use client";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MenCards from "../Components/menComp/MenCard";

const Men: React.FC = () => {
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

      {/* Main Content */}
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <section>
          <div className="xl:w-[1100px] xxl:w-[1240px] absolute md:top-[100px] md:left-[20px] lg:left-[50px] xl:left-[100px] border-b-[1px] border-black/10 top-[98px] w-full left-0 mx-auto lg:w-[930px] md:w-[710px] lg:top-[120px]"></div>
          <div className="mt-[120px] ml-5 lg:ml-12 lg:mt-[140px] xl:ml-[100px]">
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
                    <Link href="/men" className="font-satoshi">
                      Men
                    </Link>
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex justify-between items-center w-full px-2 mx-auto">
            <div className="flex justify-between w-full ml-2 items-center gap-x-[40px] lg:ml-11">
              <h1 className=" md:text-[32px] text-[24px] font-bold text-black font-satoshiBold lg:ml-[340px] xl:ml-[350px] xl:mt-[40px] lg:mt-[30px]">
                Men
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center w-full mx-auto px-6">
            <div className="absolute md:top-[236px] lg:top-[263px] xl:left-[400px] lg:left-[370px] top-[220px]">
              <MenCards />
            </div>
          </div>
          <div className="flex justify-center items-center w-full mx-auto mt-[1500px]">
            {/* <div className="lg:w-[600px] md:w-[700px] w-full mx-auto xxl:w-[925px] xl:w-[770px] border-b-[1px] border-black/10 "></div> */}
          </div>
        </section>
      </div>

      {!isLoading && (
        <div className="absolute md:top-[1830px] lg:top-[2700px] xxl:top-[1800px] xl:top-[1750px] top-[1800px] sm:top-[2000px] z-20">
          <Footer />
        </div>
      )}
    </>
  );
};

export default Men;