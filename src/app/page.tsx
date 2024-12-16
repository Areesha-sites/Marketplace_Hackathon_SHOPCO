"use client";
import React, { useEffect } from "react";
import Banner from "./Components/Banner";
import DressStyleSection from "./Components/DressStyleSection";
import TopSelling from "./Components/TopSellingSection";
import { CartProvider } from "./context/CartContext";
import Footer from "./Components/Footer";
import NewArrivalSection from "./Components/NewArrivalSection";
import HappyCustomerSection from "./Components/HappyCustomerSection";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <CartProvider>
        <div>
          <Banner />
          <NewArrivalSection />
          <TopSelling />
          <DressStyleSection />
          <HappyCustomerSection />
          <div className="absolute md:top-[3900px] top-[3660px] ">
            <Footer />
          </div>
        </div>
      </CartProvider>
    </>
  );
}
