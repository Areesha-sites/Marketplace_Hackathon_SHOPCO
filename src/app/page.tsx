"use client";
import Banner from "./Components/Banner";
import DressStyleSection from "./Components/DressStyleSection";
import TopSelling from "./Components/TopSellingSection";
import Footer from "./Components/Footer";
import NewArrivalSection from "./Components/NewArrivalSection";
import HappyCustomerSection from "./Components/HappyCustomerSection";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Chatbot from "./Components/ChatBots";

interface LoaderProps {
  isVisible: boolean;
}

const Loader = ({ isVisible }: LoaderProps) => {
  const text = "shop.co";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150); 
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-white to-gray-100 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          className="text-4xl font-bold text-gray-800"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {displayText}
          <span className="animate-blink">|</span> {/* Blinking cursor effect */}
        </motion.div>
        <motion.div
          className="mt-4 h-1 bg-gray-800"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? "100%" : 0 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.div
          className="mt-8 text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Loading your fashion world...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaderVisible(false); // Hide loader after 4 seconds
    }, 4000); // Adjust loader duration here

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isLoaderVisible && <Loader isVisible={isLoaderVisible} />}
      </AnimatePresence>
      {!isLoaderVisible && (
        <>
          <Banner />
          <NewArrivalSection />
          <TopSelling />
          <DressStyleSection />
          <HappyCustomerSection />
         <div className="absolute top-[5000px]">
         <Footer />
         </div>
        </>
      )}
    </div>
  );
}