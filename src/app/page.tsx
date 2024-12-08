import Banner from "./Components/Banner"
import DressStyleSection from "./Components/DressStyleSection"
import HappyCustomer from "./Components/HappyCustomer"
import TopSelling from "./Components/TopSelling"
import TopSellingCard from "./Components/TopSellingCard"
import NewArrival from "./NewArrival"
import { CartProvider } from "./context/CartContext"
export default function Home() {
 return (
  <>
  <CartProvider>
 <div className="">
  <Banner/>
  <NewArrival/>
  {/* <TopSelling/>
  <HappyCustomer/> */}
  {/* <DressStyleSection/> */}
 </div>
 </CartProvider>
 
  </>
 )
}
