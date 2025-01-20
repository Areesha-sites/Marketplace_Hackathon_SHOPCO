"use client";
import React from "react";
import { topSellingCardsData } from "../../../../data/data";
import Image from "next/image";
import ProductDetailsCardList from "@/app/Components/ProductDetailsCardList";
import Footer from "@/app/Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { PiTrashFill } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaCartArrowDown } from "react-icons/fa"
import Link from "next/link";
import ProductDetailsTab from "@/app/Components/ProductDetailsTab";
import { Button } from "@/components/ui/button"
import { ProductDetaildCardsPropsType } from "../../../../types/ComponentsTypes";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
 
interface Props {
  params: {
    id: string;
  };
}
interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  selectedColor?: string;
  selectedSize?: string;
}
const TopSellingDetails: React.FC<Props> = ({ params }) => {
 const [count, setCount] = useState(1);
   const [cart, setCart] = useState([]);
   const [showCart, setShowCart] = useState(false);
   const increaseQuantity = (index:number) => {
     const updatedCart = [...cart];
     updatedCart[index].quantity += 1;
     setCart(updatedCart);
     localStorage.setItem("cart", JSON.stringify(updatedCart));
   };
   const decreaseQuantity = (index:number) => {
     const updatedCart = [...cart];
     if (updatedCart[index].quantity > 1) {
       updatedCart[index].quantity -= 1;
       setCart(updatedCart);
       localStorage.setItem("cart", JSON.stringify(updatedCart));
     }
   };
   const addToCart = (product: Product[]) => {
     const productInCart = cart.find((item) => item.id === product.id);
     if (productInCart) {
       const updatedCart = cart.map((item) =>
         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
       );
       setCart(updatedCart);
       localStorage.setItem("cart", JSON.stringify(updatedCart));
     } else {
       const updatedCart = [...cart, { ...product, quantity: 1 }];
       setCart(updatedCart);
       localStorage.setItem("cart", JSON.stringify(updatedCart));
     }
   };
   const removeFromCart = (index: any) => {
     const updatedCart = cart.filter((_, i) => i !== index);
     setCart(updatedCart);
     localStorage.setItem("cart", JSON.stringify(updatedCart));
   };
   useEffect(() => {
     const savedCart = localStorage.getItem("cart");
     if (savedCart) {
       setCart(JSON.parse(savedCart));
     }
   }, []);
   const handleIncrement = () => {
     setCount(count + 1);
   };
   const handleDecrement = () => {
     if (count > 1) {
       setCount(count - 1);
     }
   };
   const [isActive, setIsActive] = useState("large");
   const handleSizeChange = (size: string) => {
     setIsActive(size);
   };
   const [activeCircle, setActiveCircle] = useState(1);
   const handleCircleClick = (circleIndex: any) => {
     setActiveCircle(circleIndex);
   };
   useEffect(() => {
     AOS.init({
       duration: 1000,
       easing: "ease",
       once: true,
       anchorPlacement: "top-bottom",
     });
   }, []);
  const { id } = params;
  const product = topSellingCardsData.find((item: any) => item.id === id);
  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <button
          onClick={() => (window.location.href = "/topSelling")}
          className="mt-4 px-4 py-2 bg-redBackgroundColor text-whiteText rounded"
        >
          Back to Sales
        </button>
      </div>
    );
  }
  return (
    <>
      <section className="">
        <div
          data-aos="flip-right"
          data-aos-delay="200"
          className="w-[259px] h-[22px] absolute md:top-[158px] md:left-[100px] left-[16px] top-[120px] flex gap-[12px]"
        >
          <div className="w-[63px] flex gap-[4px] items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi font-normal text-black/60 hover:text-black">
             <Link href="/"> Home</Link>
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
          <div className="w-[63px] flex gap-[4px]  items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi font-normal text-black/60 hover:text-black">
           <Link href="/casual">   Shop</Link>
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
          <div className="w-[63px] flex gap-[4px]  items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi font-normal text-black/60 hover:text-black">
            <Link href="/casual">  Men</Link>
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
          <div className="w-[63px] flex gap-[4px]  items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi font-normal text-black whitespace-nowrap">
              T-Shirts
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="md:w-[1240px] xxl:w-[1280px] xl:w-[1100px] absolute md:top-[134px] md:left-[100px]  border-b-[1px] border-black/5 w-[358px] top-[98px] left-[16px]"
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="
          md:w-[1240px] xxl:w-[1240px] xl:w-[1125px] absolute md:top-[134px] md:left-[100px] xxl:left-[100px] xl:left-[80px]
           md:absolute top-[134px] left-[100px] border-b-[1px] border-black/10 opacity-10"
        ></div>
        <Image
          data-aos="zoom-in-down"
          data-aos-delay="200"
          src={product.image}
          alt={product.title}
          height={530}
          width={444}
          className="md:w-[444px] md:h-[530px] absolute md:top-[216px] md:left-[266px] rounded-[20px] bg-productDetailBbImageColor h-[290px] w-[358px] top-[170px] left-[18px]"
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="200"
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[216px] md:left-[100px] rounded-[20px] border-[1px] border-black left-[16px] w-[112px] h-[106px] top-[475px] -hue-rotate-60 "
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="300"
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[397px] md:left-[100px] rounded-[20px] w-[112px] h-[106px] top-[475px] left-[139px] hue-rotate-90 "
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="400"
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[579px] md:left-[100px] rounded-[20px] w-[111px] h-[106px] top-[475px] left-[263px]  -hue-rotate-180"
        />
        <h1
          data-aos="fade-left"
          data-aos-delay="100"
          className="absolute md:top-[216px] md:left-[750px] top-[600px] text-[24px] left-[16px] md:text-[40px] text-black font-black w-[267px] md:w-[600px] leading-[28px] tracking-wider font-integralCf md:whitespace-nowrap xl:whitespace-normal xl:leading-[40px] xl:w-[470px] "
        >
          {product.title}
        </h1>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="md:w-[193px] md:h-[24.71px] absolute xxl:top-[298px] xl:top-[305px] md:top-[278px] md:left-[750px] flex gap-[16px] w-[154px] h-[19px] top-[666px] left-[16px]"
        >
          <Image
            data-aos="fade-left"
            data-aos-delay="200"
            src={product.rating}
            alt="rating"
            height={24.71}
            width={139}
            className="md:w-[139px] md:h-[24.71px] w-[105px] h-[18.67px] xl:w-[100px]"
          />
          <span
            data-aos="fade-left"
            data-aos-delay="200"
            className="w-[139px] h-[24.71px] text-[16px] font-normal text-black font-satoshi"
          >
            {product.ratingReview}
            <span className="text-black opacity-45">/5</span>
          </span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="md:w-[176px] md:h-[43px] absolute md:top-[317px] xl:top-[327px] md:left-[750px] left-[16px] flex gap-[12px] items-center top-[694px]"
        >
          <span className="font-satoshiBold md:text-[32px] text-[24px] font-bold text-black">
            ${product.price}
          </span>
          <span className="font-satoshiBold text-[24px] md:text-[32px] text-black font-bold opacity-30">
            {product.discount}
          </span>
          {product.offer && (
            <p className="py-[6px] px-[14px] rounded-[62px] bg-red-100 text-redTextOfferColor justify-center flex items-center h-[34px] w-[72px] bg-opacity-40 text-opacity-100 font-satoshi text-[14px] md:text-[18px]">
              {product.offer}
            </p>
          )}
        </div>
        <p
          data-aos="fade-left"
          data-aos-delay="400"
          className="md:w-[590px] absolute md:top-[380px] md:left-[750px] font-satoshi md:text-[16px] text-[12px] font-normal text-black text-opacity-60 top-[736px] left-[20px] w-[358px] xxl:w-[590px] xl:w-[500px]  "
        >
          {product.des}
        </p>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="md:w-[590px] xxl:w-[590px] xl:w-[470px]  absolute md:top-[442px] md:left-[750px] border-b-[1px] border-black/10 w-[358px] top-[810px] left-[16px]"
        ></div>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="absolute md:top-[461px] md:left-[750px] left-[16px] font-satoshiBold text-[16px] font-normal text-black/60 top-[834px]"
        >
          Select Colors
        </p>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-[143px] h-[37px] absolute md:top-[494px] top-[870px] md:left-[750px] left-[16px] flex gap-[16px]"
        >
          <div
            className={`h-[37px] w-[37px] bg-productDetailBgCircle1 rounded-full flex justify-center items-center ${
              activeCircle === 1 ? "bg-productDetailBgCircle1Active" : ""
            }`}
            onClick={() => handleCircleClick(1)}
          >
            {activeCircle === 1 && (
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                height={16}
                width={16}
                className="h-[16px] w-[14px]"
              />
            )}
          </div>
          <div
            className={`h-[37px] w-[37px] bg-productDetailBgCircle2 rounded-full flex justify-center items-center  ${
              activeCircle === 2 ? "bg-productDetailBgCircle2Active" : ""
            }`}
            onClick={() => handleCircleClick(2)}
          >
            {activeCircle === 2 && (
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                height={16}
                width={16}
                className="h-[16px] w-[14px]"
              />
            )}
          </div>
          <div
            className={`h-[37px] w-[37px] bg-productDetailBgCircle3 rounded-full flex justify-center items-center  ${
              activeCircle === 3 ? "bg-productDetailBgCircle3Active" : ""
            }`}
            onClick={() => handleCircleClick(3)}
          >
            {activeCircle === 3 && (
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                height={16}
                width={16}
                className="h-[16px] w-[14px]"
              />
            )}
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="md:w-[590px] xxl:w-[590px] xl:w-[470px]  absolute md:top-[549px] md:left-[750px] left-[16px] w-[358px] top-[923px] border-b-[1px] border-black/10"
        ></div>
        <p
          data-aos="fade-right"
          data-aos-delay="400"
          className="absolute md:top-[573px] top-[947px] md:left-[750px] font-satoshiBold text-[16px] font-normal text-black text-opacity-60 left-[16px]"
        >
          Choose Size
        </p>
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="md:w-[420px] w-[353px] h-[46px] absolute md:top-[607px] top-[990px] md:left-[750px] flex gap-[12px] left-[16px]"
        >
          <button
            className={`md:w-[86px] md:h-[46px] w-[74px] h-[39px] md:py-[12px]  md:px-[24px] py-[10px] px-[24px] rounded-[62px] ${
              isActive === "small"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } flex justify-center items-center font-satoshi`}
            onClick={() => handleSizeChange("small")}
          >
            Small
          </button>
          <button
            className={`md:w-[105px] md:h-[46px] w-[90px] h-[39px]  md:py-[12px] md:px-[24px] rounded-[62px] ${
              isActive === "medium"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } py-[10px] px-[20px] flex justify-center items-center font-satoshi`}
            onClick={() => handleSizeChange("medium")}
          >
            Medium
          </button>
          <button
            className={`md:w-[89px] md:h-[46px] w-[76px] h-[39px] md:py-[12px] md:px-[24px] py-[10px] px-[20px] rounded-[62px] ${
              isActive === "large"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } flex justify-center items-center font-satoshi`}
            onClick={() => handleSizeChange("large")}
          >
            large
          </button>
          <button
            className={`md:w-[104px] md:h-[46px] md:py-[12px] md:px-[24px] w-[80px] h-[39px] py-[10px] px-[20px] rounded-[62px] ${
              isActive === "x-large"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } whitespace-nowrap text-center flex justify-center items-center font-satoshi`}
            onClick={() => handleSizeChange("x-large")}
          >
            X-Large
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="md:w-[590px] xxl:w-[590px] xl:w-[470px] w-[353px]  absolute md:top-[673px] md:left-[750px] top-[1056px] left-[16px] border-b-[1px] border-black/10"
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-[170px] w-[110px] md:h-[52px] h-[44px] absolute md:top-[694px] top-[1080px] md:left-[750px] left-[16px] py-[16px] px-[20px] rounded-[62px] flex justify-between bg-bgLightGrayColor items-center"
        >
          <Image
            src="/decrease.svg"
            alt="decrease-icon"
            height={24}
            width={24}
            onClick={handleDecrement}
            className="md:h-[24px] md:w-[24px] h-[16px] w-[16px] cursor-pointer"
          />
          <span className="text-[16px] font-medium text-black font-satoshi">
            {count}
          </span>
          <Image
            src="/increase.svg"
            alt="decrease-icon"
            height={24}
            width={24}
            onClick={handleIncrement}
            className="md:h-[24px] md:w-[24px] h-[16px] w-[16px] cursor-pointer"
          />
        </div>
        <button
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-[400px] xxl:w-[400px] xl:w-[300px] md:h-[52px] h-[44px] absolute md:top-[694px] md:left-[940px] top-[1080px] py-[16px] px-[54px] rounded-[62px] bg-black text-white text-[14px] md:text-[16px] font-medium items-center flex justify-center font-inter w-[236px] left-[138px] font-satoshi"
          onClick={() => addToCart(product)}

        >
          Add to Cart
        </button>
        <div className="absolute top-[800px] xl:left-[50px] xxl:left-[100px]">
          <ProductDetailsTab />
        </div>
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-[579px] md:h-[58px] absolute md:top-[1878px] xl:top-[2000px] md:left-[431px] xxl:left-[431px] xl:left-[330px] font-black text-black md:text-[48px] text-[32px] left-[79px] w-[250px] leading-[36px] mx-auto top-[2200px] text-center uppercase tracking-wider font-integralCf md:whitespace-nowrap  "
        >
          You might also like
        </h1>
        <div className="">
          <ProductDetailsCardList />
        </div>


        <div className="absolute md:top-[2872px] top-[2800px]">
        <Footer />
      </div>
      
      <Sheet open={showCart} onOpenChange={setShowCart}>
      {/* Button to open the sheet */}
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="fixed bottom-6 right-6 font-satoshi bg-black text-white p-4 rounded-full flex items-center justify-center text-lg cursor-pointer w-[50px] h-[50px] hover:text-white hover:bg-black"
          onClick={() => setShowCart(!showCart)}
        >
          <div className="w-[15px] h-[15px] flex justify-center items-center bg-white text-black rounded-full text-[10px] absolute top-[8px] left-[25px]">
            {cart.length}
          </div>
          <FaCartArrowDown className="text-white h-5 w-5 ml-[-10px]" />
        </Button>
      </SheetTrigger>
      {/* Sheet Content */}
      <SheetContent>
        <SheetHeader>
          <h2 className="text-2xl font-semibold mb-4 font-integralCf uppercase">
            Your Cart
          </h2>
        </SheetHeader>
        <div>
          {cart.length === 0 ? (
            <p className="text-lg text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="border-b py-4">
                <div className="flex justify-center items-center w-full px-4 gap-[10px]">
                  <Image
                    src={item.image}
                    alt="product-image"
                    height={40}
                    width={40}
                    className="h-[60px] w-[60px] object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center w-[270px]">
                      <h3 className="font-semibold text-black font-satoshi">{item.title}</h3>
                      <PiTrashFill
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 h-5 w-5 cursor-pointer hover:text-red-400"
                      />
                    </div>
                    <p className="font-satoshi font-normal text-black text-[12px]">
                      Size: <span className="text-black/50">Large</span>
                    </p>
                    <p className="font-satoshi font-normal text-black text-[12px]">
                      Color: <span className="text-black/50">White</span>
                    </p>
                    <div className="flex justify-between items-center w-[270px]">
                      <p className="text-black font-satoshi font-bold text-[16px]">
                        ${item.price}
                      </p>
                      <div className="flex justify-center items-center gap-[10px] w-[100px] bg-BannerBgColor rounded-[50px] px-3 py-2 h-8">
                        <IoAddOutline
                          onClick={() => increaseQuantity(item.id)}
                          className="h-4 w-4 text-black cursor-pointer"
                        />
                        <p className="text-[14px] text-black font-satoshi font-bold">
                          {item.quantity}
                        </p>
                        <RiSubtractLine
                          onClick={() => decreaseQuantity(item.id)}
                          className="h-4 w-4 text-black cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex justify-center gap-[20px] items-center">
          <Link
            href="/cart"
            className="w-full h-[50px] bg-black text-white font-satoshi text-[15px] font-medium rounded-[50px] flex justify-center items-center"
          >
            <button>View cart</button>
          </Link>
        </div>
        <SheetFooter>
          <SheetClose asChild className="border-none outline-none">
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

      </section>
     
    </>
  );
};

export default TopSellingDetails;
