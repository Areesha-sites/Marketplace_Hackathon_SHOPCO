"use client";
import Banner from "./Components/Banner";
import DressStyleSection from "./Components/DressStyleSection";
import TopSelling from "./Components/TopSellingSection";
import Footer from "./Components/Footer";
import NewArrivalSection from "./Components/NewArrivalSection";
import HappyCustomerSection from "./Components/HappyCustomerSection";
import "aos/dist/aos.css";
export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrivalSection />
      <TopSelling />
      <DressStyleSection />
      <HappyCustomerSection />
      <div className="absolute md:top-[3750px] top-[3660px]">
        <Footer />
      </div>
    </div>
  );
}
