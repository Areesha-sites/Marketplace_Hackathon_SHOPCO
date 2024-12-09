import Banner from "./Components/Banner";
import DressStyleSection from "./Components/DressStyleSection";
import HappyCustomer from "./Components/HappyCustomer";
import TopSelling from "./Components/TopSelling";
import NewArrival from "./Components/NewArrival";
import { CartProvider } from "./context/CartContext";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
      <CartProvider>
        <div className="">
          <Banner />
          <NewArrival />
          <TopSelling />
          <HappyCustomer />
          <DressStyleSection />
          <div className="absolute md:top-[3880px] top-[3700px] ">
            <Footer/>
          </div>
        </div>
      </CartProvider>

    </>
  );
}
