'use client';
import React, { useEffect, useState } from "react";
import { casualCardsData } from "../../../../data/data";
import Image from "next/image";
import ProductDetailsCardList from "@/app/Components/ProductDetailsCardList";
import Footer from "@/app/Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PiTrashFill } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaCartArrowDown } from "react-icons/fa";
import ProductDetailsTab from "@/app/Components/ProductDetailsTab";
import { Button } from "@/components/ui/button";
import { PiSmileySad } from "react-icons/pi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { client } from "@/sanity/lib/client";
interface Props {
  params: {
    id: string;
  };
}
interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity?: number;
}
interface Products {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discountPercent: number | null;
  isNew: boolean | null;
  colors: string[];
  sizes: string[];
  ratingReviews: number;
  offer: number;
  quantiy?: number
}
const WomenDetails: React.FC<Props> = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState<Products | null>(null);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type=="women" && _id==$id][0]{
        _id,
        name,
        description,
        price,
        ratingReviews,
        "imageUrl" : image.asset->url,
        category,
        discountPercent,
        "isNew": new,
        colors,
        offer,
        sizes
      }`;
      try {
        const productData: Products | null = await client.fetch(query, { id });
        if (!productData) {
          notFound();
        } else {
          setProduct(productData);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        notFound();
      }
    };

    fetchProduct();
  }, [id]);
 // Function to increase the quantity of a specific product in the cart
 const increaseQuantity = (productId: string, selectedSize: string) => {
  const updatedCart = cart.map((item) =>
    item.id === productId && item.selectedSize === selectedSize
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

  // Function to decrease the quantity of a specific product in the cart
  const decreaseQuantity = (productId: string, selectedSize: string) => {
    const updatedCart = cart.map((item) =>
      item.id === productId &&
      item.selectedSize === selectedSize &&
      item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
// Function to add product to the cart
const addToCart = (product: Products, selectedSize: string) => {
  const existingProductIndex = cart.findIndex(
    (item) => item.id === product._id && item.selectedSize === selectedSize
  );

  if (existingProductIndex === -1) {
    // Add new product to cart if it's not already present
    const updatedCart = [
      ...cart,
      { ...product, quantity: 1, selectedSize }, // Add selectedSize to cart item
    ];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    // If the product already exists, only increase the quantity
    const updatedCart = [...cart];
    updatedCart[existingProductIndex].quantity += 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};
const removeFromCart = (productId: string, selectedSize: string) => {
  const updatedCart = cart.filter(
    (item) => !(item.id === productId && item.selectedSize === selectedSize) // Only remove the matching product
  );
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

// Load saved cart from localStorage on initial render
useEffect(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    setCart(JSON.parse(savedCart) as Product[]);
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
const [activeImage, setActiveImage] = useState(product?.imageUrl);
  const handleImageClick = (imageSrc: any) => {
    setActiveImage(imageSrc);
  };
  const [isActive, setIsActive] = useState("large");
  
  const handleSizeChange = (size: string) => {
    setIsActive(size);
  };

  const [activeCircle, setActiveCircle] = useState<number>(1);
  
  const handleCircleClick = (circleIndex: number) => {
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
 
  if (!product) {
    return null; 
  }

  return (
    <>
      <section className="h-[3000px]">
        <div
          data-aos="flip-right"
          data-aos-delay="200"
          className="sm:w-[259px] w-[200px] h-[22px] absolute md:top-[158px] md:left-[100px] left-[16px] top-[120px] flex lg:gap-[12px] gap-[5px]"
        >
          <div className="lg:w-[63px] w-[57px] flex gap-[4px] items-center">
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
          <div className="lg:w-[63px] w-[57px] flex gap-[4px]  items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi font-normal text-black/60 hover:text-black">
              <Link href="/casual"> Shop</Link>
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
          <div className="lg:w-[63px] w-[57px] flex gap-[4px]  items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi font-normal text-black/60 hover:text-black">
              <Link href="/women"> Women</Link>
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
          <div className="lg:w-[63px] w-[30px] flex gap-[4px] items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi font-normal text-black hover:text-black whitespace-nowrap">
              <Link href="/casaul">T-Shirts</Link>
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
          className="md:w-[1240px] xxl:w-[1240px] xl:w-[1175px] absolute md:top-[134px] md:left-[100px] xxl:left-[100px] xl:left-[80px] w-full border-b-[1px] border-black/10 top-[98px] sm:left-[16px]"
        ></div>
        {/* <Image
          data-aos="zoom-in-down"
          data-aos-delay="200"
          src={product.image}
          alt={product.title}
          height={530}
          width={444}
          className="md:w-[444px] md:h-[530px] absolute md:top-[216px] md:left-[266px] rounded-[20px] bg-productDetailBbImageColor h-[290px] w-[358px] top-[170px] left-[18px] "
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="200"
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[216px] md:left-[100px] rounded-[20px] border-[1px] border-black left-[16px] w-[112px] h-[106px] top-[475px] -hue-rotate-180"
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="300"
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[397px] md:left-[100px] rounded-[20px] w-[112px] h-[106px] top-[475px] left-[139px] -hue-rotate-90"
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="400"
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[579px] md:left-[100px] rounded-[20px] w-[111px] h-[106px] top-[475px] left-[263px] -hue-rotate-30 "
        /> */}
        <div className="flex justify-center items-center w-full mx-auto">
        <Image
          data-aos="zoom-in-down"
          data-aos-delay="200"
          src={product.imageUrl}
          alt={product.name}
          height={530}
          width={444}
          className="md:w-[444px] md:h-[530px] absolute md:top-[216px] md:left-[266px] rounded-[20px] bg-productDetailBbImageColor sm:h-[290px] sm:w-[358px] w-[285px] h-[290px] top-[170px]  "
        />
    <div className="flex justify-center items-center w-full mx-auto">
          <Image
          data-aos="flip-up"
          data-aos-delay="200"
          src={product.imageUrl}
          alt={product.name}
          height={167}
          width={152}
          className={`md:h-[167px] md:w-[152px] absolute md:top-[216px] md:left-[100px] rounded-[20px] border-[1px] border-black left-[16px] sm:w-[112px] sm:h-[106px] w-[90px] h-[90px] top-[475px] -hue-rotate-180 flex justify-center items-center ${
            activeImage === product.imageUrl ? "border-primary" : ""
          }`}
          onClick={() => handleImageClick(product.imageUrl)}
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="300"
          src={product.imageUrl}
          alt={product.name}
          height={167}
          width={152}
          className={`md:h-[167px] md:w-[152px] absolute md:top-[397px] md:left-[100px] rounded-[20px] sm:w-[112px] sm:h-[106px] w-[90px] h-[90px] top-[475px] left-[113px] sm:left-[139px] -hue-rotate-90 ${
            activeImage === product.imageUrl ? "border-primary" : ""
          }`}
          onClick={() => handleImageClick(product.imageUrl)}
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="400"
          src={product.imageUrl}
          alt={product.name}
          height={167}
          width={152}
          className={`md:h-[167px] md:w-[152px] absolute md:top-[579px] md:left-[100px] rounded-[20px] sm:w-[112px] sm:h-[106px] w-[90px] h-[90px] top-[475px] sm:left-[263px] left-[212px] -hue-rotate-30 ${
            activeImage === product.imageUrl ? "border-primary" : ""
          } `}
          onClick={() => handleImageClick(product.imageUrl)}
        />
    </div>
        </div>
        <div className="flex flex-col gap-y-[10px] absolute md:top-[216px] left-[16px] md:left-[750px] top-[580px] sm:top-[600px]">
        <h1
          data-aos="fade-left"
          data-aos-delay="100"
          className=" text-[24px] md:text-[40px] text-black font-black sm:w-[90%] w-[297px] md:w-[600px] xxl:w-[600px] md:leading-[28px] tracking-wider font-integralCf md:whitespace-nowrap leading-[30px] xl:whitespace-normal xl:leading-[40px] xl:w-[470px]"
        >
          {product.name}
        </h1>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="md:w-[193px] md:h-[24.71px] flex gap-[16px] w-[154px] h-[19px] items-center"
        >
          <Image
            data-aos="fade-left"
            data-aos-delay="200"
             src="/Frame 10.svg"
            alt="rating"
            height={24.71}
            width={139}
            className="md:w-[129px] md:h-[20.71px] w-[105px] h-[18.67px] xl:w-[100px]"
          />
          <span
            data-aos="fade-left"
            data-aos-delay="200"
            className="w-[139px] h-[24.71px] font-satoshi text-[16px] font-normal text-black"
          >
            {product.ratingReviews}
            <span className="text-black opacity-45">/5</span>
          </span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="md:w-[176px] md:h-[43px] flex gap-[12px] items-center"
        >
          <span className="font-satoshiBold md:text-[32px] text-[24px] font-bold text-black">
            ${product.price}
          </span>
          <span className="font-satoshiBold md:text-[32px] text-[24px] text-black font-bold opacity-30">
            ${product.discountPercent}
          </span>
          {product.offer && (
            <p className="py-[6px] px-[14px] rounded-[62px] bg-red-100 text-redTextOfferColor justify-center flex items-center md:h-[34px] text-[14px] md:w-[72px] w-[62px] h-[31px] bg-opacity-40 text-opacity-100 font-satoshi">
              -{product.offer}%
            </p>
          )}
        </div>
        <p
          data-aos="fade-left"
          data-aos-delay="400"
          className="md:w-[590px] xxl:w-[590px] xl:w-[500px] md:text-[16px] text-[12px] font-normal text-black text-opacity-60 w-[280px] font-satoshi "
        >
          {product.description}
        </p>
       <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="md:w-[590px] xxl:w-[590px] xl:w-[470px] border-b-[1px] border-black/10 sm:w-[358px] w-[280px] "
        ></div> 
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="font-satoshi text-[16px] font-normal text-black/60 "
        >
          Select Colors
        </p> 
         <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-[143px] h-[37px] flex gap-[16px]"
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
          className="md:w-[590px] xxl:w-[590px] xl:w-[470px] border-b-[1px] border-black/10 sm:w-[358px] w-[280px] "
        ></div>
         <p
          data-aos="fade-right"
          data-aos-delay="400"
          className=" font-satoshi text-[16px] font-normal text-black text-opacity-60 "
        >
          Choose Size
        </p>
         <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="md:w-[420px] w-[280px] sm:w-[353px] h-[46px] flex gap-[6px] sm:gap-[12px] "
        >
          <button
            className={`md:w-[86px] md:h-[46px] w-[64px] sm:w-[74px] h-[29px] sm:h-[39px] md:py-[12px]  md:px-[24px] py-[10px] px-[24px] rounded-[62px] sm:text-[14px] text-[12px] ${
              isActive === "small"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } flex justify-center items-center font-satoshi`}
            onClick={() => handleSizeChange("small")}
          >
            Small
          </button>
          <button
            className={`md:w-[105px] md:h-[46px] sm:w-[90px] h-[29px] w-[80px] sm:h-[39px]  md:py-[12px] md:px-[24px] rounded-[62px] ${
              isActive === "medium"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } py-[10px] px-[20px] sm:text-[14px] text-[12px] flex justify-center items-center font-satoshi`}
            onClick={() => handleSizeChange("medium")}
          >
            Medium
          </button>
          <button
            className={`md:w-[89px] md:h-[46px] sm:w-[76px] w-[66px] h-[29px] sm:h-[39px] md:py-[12px] md:px-[24px] py-[10px] px-[20px] rounded-[62px] sm:text-[14px] text-[12px] ${
              isActive === "large"
                ? "bg-black text-white"
                : "bg-bgLightGrayColor text-black/60"
            } flex justify-center items-center font-satoshi`}
            onClick={() => handleSizeChange("large")}
          >
            large
          </button>
          <button
            className={`md:w-[104px] md:h-[46px] md:py-[12px] md:px-[24px] w-[70px]  sm:w-[80px] h-[29px] sm:h-[39px] py-[10px] px-[20px] rounded-[62px] sm:text-[14px] text-[12px] ${
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
          className="md:w-[590px] xxl:w-[590px] xl:w-[470px] sm:w-[353px] border-b-[1px] border-black/10] w-[280px] "
        ></div>
     <div className="flex gap-x-[10px]">
     <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-[170px] w-[110px] md:h-[52px] h-[44px] py-[16px] px-[20px] rounded-[62px] flex justify-between bg-bgLightGrayColor items-center"
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
          onClick={() => addToCart(product)}
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-[400px] xxl:w-[400px] xl:w-[300px] md:h-[52px] h-[44px] py-[16px] px-[54px] rounded-[62px] bg-black text-white text-[14px] md:text-[16px] font-medium items-center flex justify-center font-satoshi w-[180px] sm:w-[236px]  "
        >
          Add to Cart
        </button> </div> 
        </div>
{/* <div className="absolute top-[1150px] xl:top-[800px] xl:left-[50px] xxl:left-[100px]">
         <ProductDetailsTab />
        </div> */}
        {/* <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-[579px] md:h-[58px] absolute md:top-[1878px] xl:top-[2000px] md:left-[431px] xxl:left-[431px] xl:left-[330px] font-black text-black md:text-[48px] text-[32px] left-[79px] w-[250px] leading-[36px] mx-auto top-[2200px] text-center uppercase tracking-wider font-integralCf md:whitespace-nowrap "
        >
          You might also like
        </h1> */}
        {/* <div className="">
          <ProductDetailCard />
        </div> */}
        {/* <div className="absolute xl:top-[2870px] xxl:top-[2872px] top-[2800px]">
          <Footer />
        </div> */}



  <Sheet open={showCart} onOpenChange={setShowCart}>
  <SheetTrigger asChild>
    <Button
      variant="outline"
      className="fixed bottom-6 right-6 font-satoshi bg-black text-white p-4 rounded-full flex items-center justify-center text-lg cursor-pointer w-[50px] h-[50px] hover:text-white hover:bg-black"
      onClick={() => setShowCart(!showCart)}
    >
      <div className="w-[15px] h-[15px] flex justify-center items-center bg-white text-black rounded-full text-[10px] absolute top-[8px] left-[25px]">
        {cart.length}
      </div>
      <FaCartArrowDown className="text-white h-7 w-7 ml-[-10px]" />
    </Button>
  </SheetTrigger>
  <SheetContent className="overflow-y-auto h-auto">
    <SheetHeader>
      <h2 className="text-2xl font-semibold mb-4 font-integralCf uppercase">
        Your Cart
      </h2>
    </SheetHeader>
    <div>
      {cart.length === 0 ? (
        <div className="flex justify-start gap-1 items-center">
          <p className="text-lg text-gray-500 font-satoshi">
            Your cart is empty
          </p>
          <PiSmileySad className="h-[20px] w-[20px] text-gray-500" />
        </div>
        ) : (
          cart.map((item) => (
            <div key={`${item.id}-${item.selectedSize}`} className="border-b py-4">
              <div className="flex justify-center items-center w-full px-4 gap-[10px]">
                <Image
                  src={item.imageUrl}
                  alt="product-image"
                  height={40}
                  width={40}
                  className="h-[60px] w-[60px] object-cover"
                />
                <div className="flex flex-col">
                  <div className="flex justify-between items-center w-[270px]">
                    <h3 className="font-semibold text-black font-satoshi">
                      {item.name}
                    </h3>
                    <PiTrashFill
  onClick={() => removeFromCart(item.id, item.selectedSize)}
  className="text-red-500 h-5 w-5 cursor-pointer hover:text-red-400"
/>
                  </div>
                  <p className="font-satoshi font-normal text-black text-[12px]">
                  Size: <span className="text-black/50">{item.selectedSize}</span>
                </p>
                <div className="flex justify-between items-center w-[270px]">
                  <p className="text-black font-satoshi font-bold text-[16px]">
                    ${item.price}
                  </p>
                  <div className="flex justify-center items-center gap-[10px] w-[100px] bg-BannerBgColor rounded-[50px] px-3 py-2 h-8">
                    <IoAddOutline
                      onClick={() => increaseQuantity(item.id, item.selectedSize)}
                      className="h-4 w-4 text-black cursor-pointer"
                    />
                    <p className="text-[14px] text-black font-satoshi font-bold">
                      {item.quantity}
                    </p>
                    <RiSubtractLine
                      onClick={() => decreaseQuantity(item.id, item.selectedSize)}
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
      <SheetClose asChild className="border-none outline-none"></SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
      </section>
    </>
  );
};

export default WomenDetails