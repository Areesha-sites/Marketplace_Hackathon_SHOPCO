"use client"
import ContactForm from "./ContactForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../Components/Footer";
const ContactUsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, [0, 100], ["0%", "100%"]);
  const progressPercentage = useTransform(
    progress,
    (value) => `${Math.round(value)}%`
  );
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
              ></motion.div>
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
        <div className="absolute lg:top-[130px] lg:left-[60px] xl:top-[160px] xl:left-[100px] left-[30px] top-[100px]">
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
                <BreadcrumbLink>
                  <Link href="/helpCenter" className="font-satoshi">
                    Help Center
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <Link href="/conatct" className="font-satoshi">
                    Contact
                  </Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mt-36 lg:mt-44 md:mt-32">
          <h1 className="flex justify-center items-center w-full mx-auto text-[25px] md:text-[28px] xxl:text-[42px] lg:text-[35px] text-black font-extrabold font-integralCf tracking-wider">
            Contact Us
          </h1>
          <ContactForm />
        </div>
        {!isLoading && (
          <div className="absolute md:top-[1830px] lg:top-[2700px] xxl:top-[1800px] xl:top-[850px] top-[1800px] sm:top-[2000px] z-20">
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUsPage;
