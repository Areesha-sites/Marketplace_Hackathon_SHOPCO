"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
import { PiTrashFill } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { CartItem } from "../../../types/ComponentsTypes";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Footer from "../Components/Footer";
import dynamic from "next/dynamic";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const CheckoutModal = dynamic(
  () => import("../Components/orderSystem/CheckoutModal"),
  {
    ssr: false,
  }
);
const CartPage = () => {
  const [validPromo, setValidPromo] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderSucess, setOrderSuccess] = useState<any | boolean>(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? (JSON.parse(savedCart) as CartItem[]) : [];
    }
    return [];
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart) as CartItem[]);
      }
    }
  }, []);
  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };
  const increaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };
  const decreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
    }
  };
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = validPromo ? subtotal * 0.2 : 0;
  const deliveryFee = 15;
  const total = subtotal - discountAmount + deliveryFee;
  const discount = subtotal ? subtotal * 0.2 : 0;
  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT20") {
      setValidPromo(true);
    } else {
      alert("Invalid Promo Code");
    }
  };
  const handleOpenModal = () => {
    if (cart.length === 0 || subtotal === 0) {
      alert("Please add items to your cart before proceeding to checkout.");
      return;
    }
    setIsModalOpen(true);
  };
  const handleSubmitForm = (formData: any) => {
    console.log(formData);
    localStorage.removeItem("cart");
    setCart([]);
  };
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <section>
      <div className="container mx-auto p-6 px-8">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-y-[10px] h-[400px] xl:mt-32 mt-14">
            <HiOutlineShoppingBag className="w-[100px] h-[100px] text-black/20" />
            <p className="text-black/50 font-satoshi text-[16px] md:text-[20px]">
              Your Cart is Empty!
            </p>
            <Link href="/casual">
              <button className="bg-black hover:bg-black/80 text-white px-6 flex justify-center items-center text-[14px] mt-4 font-satoshi rounded-[50px] w-[200px] h-[50px]">
                Start Shipping
              </button>
            </Link>
          </div>
        ) : (
          <div className="">
            <div className="border-b-[1px] border-black/10 w-full top-[100px] xxl:w-[1300px] xl:w-[1170px] lg:left-[50px] md:mx-auto absolute lg:top-[130px] left-0 lg:w-[920px]"></div>
            <div className="flex justify-start items-start w-full px-7 xl:px-16 mt-[130px]">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link href="/" className="font-satoshi">
                        Casual
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      <Link href="/cart" className="font-satoshi">
                        Cart
                      </Link>
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1 className="md:text-[40px] font-bold text-center mb-6 absolute lg:top-[204px] xl:left-[30px] xxl:left-[100px] font-integralCf left-[16px] text-[32px] top-[140px] lg:left-[50px]">
              Your Cart
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[10px] w-full mx-auto ">
              <div className="flex justify-center items-center w-full mx-auto ">
                <div className="xl:w-[715px] lg:w-[580px] md:h-[708px] lg:h-[500px] h-[389px] xxl:h-[508px] border border-black/10 rounded-[20px] lg:top-[276px] md:top-[220px] top-[200px] absolute xl:left-[30px] left-0 xxl:left-[100px] flex-col gap-[24px] md:px-[24px] w-full flex mx-auto md:w-full lg:left-[20px] overflow-y-auto overflow-x-hidden">
                  <div className="xl:w-[667px] lg:w-[670px] w-full h-[124px] ">
                    {cart.map((product, index) => (
                      <div
                        className="flex md:justify-center xl:justify-start justify-start md:gap-[16px] gap-[17px] items-center border-b-[1px] border-black/10 w-full lg:w-[520px] xl:w-[650px] py-3 md:py-7 px-3 lg:px-8 xl:px-0"
                        key={index}
                      >
                        <Image
                          height={124}
                          width={124}
                          className="md:h-[124px] md:w-[124px] sm:w-[99px] sm:h-[99px] w-[80px] h-[90px] object-cover rounded-[8px]"
                          src={product.image}
                          alt={product.name}
                        />
                        <div className="flex justify-between items-center lg:w-[640px] md:w-[700px] md:px-0 w-full ">
                          <div className="flex flex-col h-[118px] justify-between">
                            <div className="flex flex-col">
                              <h2 className="text-black font-satoshi sm:text-[16px] text-[14px] md:text-[20px] font-bold whitespace-nowrap lg:w-[100px]">
                                {product.title}
                              </h2>
                              <p className=" text-[12px] md:text-[14px] font-satoshi font-normal text-black">
                                Size:{" "}
                                <span className="text-black/60">
                                  {product.size || "N/A"}
                                </span>
                              </p>
                              <p className=" text-[12px] md:text-[14px] font-satoshi font-normal text-black">
                                Color:{" "}
                                <span className="text-black/60">
                                  {product.color || "N/A"}
                                </span>
                              </p>
                            </div>
                            <p className=" text-[20px] md:text-[24px] font-satoshi font-bold text-black">
                              ${(product.price * product.quantity).toFixed(2)}
                            </p>
                          </div>
                          <div className="flex justify-between items-end flex-col h-[124px] sm:ml-[-50px] ml-[-70px] md:ml-[150px] md:mr-0 lg:mr-[10px]">
                            <PiTrashFill
                              onClick={() => removeFromCart(index)}
                              className="text-red-500 md:h-[24px] md:w-[24px] h-[20px] w-[20px] cursor-pointer hover:text-red-400 mt-2"
                            />
                            <div className="flex justify-center items-center gap-[14px] md:gap-[20px] md:px-5 md:py-2 w-[105px] md:w-[126px] h-[31px] py-[14px] px-[20px] md:h-[44px] bg-BannerBgColor rounded-[62px]">
                              <IoAddOutline
                                onClick={() => increaseQuantity(index)}
                                className="md:h-[20px] md:w-[20px] h-[20px] w-[20px] text-black cursor-pointer"
                              />
                              <p className="text-[14px] text-black font-satoshi font-bold ">
                                {product.quantity}
                              </p>
                              <RiSubtractLine
                                onClick={() => decreaseQuantity(index)}
                                className="md:h-[20px] md:w-[20px] h-[20px] w-[20px] text-black cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="xxl:w-[505px] xl:w-[480px] lg:w-[390px] w-full mx-auto md:h-[480px] h-[390px] xl:h-[468px] xxl:h-[458px] xl:left-[760px] xxl:left-[835px] absolute lg:top-[276px] md:top-[940px] top-[600px] rounded-[20px] border border-black/10 md:py-[20px] md:px-[24px] px-[20px] py-[20px] flex flex-col gap-[24px] lg:left-[610px]">
                  <h2 className="text-black font-satoshi md:text-[24px] text-[20px] font-bold  ">
                    Order Summary
                  </h2>
                  <div className="flex flex-col gap-[20px]">
                    <div className="flex justify-between items-center w-full ">
                      <p className="text-black/60 font-normal md:text-[20px] text-[16px] font-satoshi">
                        Subtotal
                      </p>
                      <p className="text-black font-satoshi md:text-[20px] text-[16px] font-bold">
                        ${subtotal.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full ">
                      <p className="text-black/60 font-normal md:text-[20px] text-[16px] font-satoshi">
                        Discount (-20%)
                      </p>
                      <p className="text-red-500 font-satoshi md:text-[20px] text-[16px] font-bold">
                        -${(discount || 0).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full ">
                      <p className="text-black/60 font-normal md:text-[20px] text-[16px] font-satoshi">
                        Delivery Fee
                      </p>
                      <p className="text-black font-satoshi md:text-[20px] text-[16px] font-bold">
                        ${deliveryFee.toFixed(2)}
                      </p>
                    </div>
                    <div className="border-b-[1px] border-black/10 w-full"></div>
                    <div className="flex justify-between items-center w-full ">
                      <p className="text-black font-normal md:text-[20px] text-[16px] font-satoshi">
                        Total
                      </p>
                      <p className="text-black font-satoshi text-[20px] md:text-[24px] font-bold">
                        ${total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-[10px] items-center w-full">
                    <button className="lg:w-[300px] w-full h-[48px] bg-[#F0F0F0] rounded-[62px] py-[12px] px-[16px] flex gap-[16px]">
                      <Image
                        src="/promo-code.svg"
                        alt=""
                        height={24}
                        width={24}
                        className="md:h-[24px] md:w-[24px] h-[20px] w-[20px]"
                      />
                      <input
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Add promo code"
                        className="font-satoshi text-[14px] md:text-[16px] font-normal text-black/40 border-none outline-none bg-[#F0F0F0] w-full"
                      />
                    </button>
                    <button
                      onClick={applyPromoCode}
                      className="h-[48px] w-[119px] rounded-[62px] bg-black text-white py-[12px] px-[16px] text-[16px] font-satoshi font-medium flex justify-center items-center"
                    >
                      Apply
                    </button>
                  </div>
                  <div onClick={handleOpenModal}>
                    <button className="w-full h-[60px] py-[16px] bg-black px-[54px] rounded-[62px] flex justify-center gap-[10px] items-center">
                      <p className="font-satoshi text-[16px] text-white font-medium">
                        Go to Checkout
                      </p>
                      <Image
                        src="/arrowLeft.svg"
                        alt="right-arrow"
                        height={24}
                        width={24}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative top-[1200px] md:top-[1000px]">
        <Footer />
      </div>
      <div className="flex justify-between lg:items-center mt-6 lg:flex-row flex-col lg:gap-0 gap-4">
        {/* <SignedOut>
          <SignInButton mode="modal">
            <button className="px-6 py-2 bg-darkPrimary text-white rounded-md hover:bg-navbarColor">
              Sign in to Checkout
            </button>
          </SignInButton>
        </SignedOut> */}

        {/* <SignedIn> */}
        {/* <button
            onClick={handleOpenModal}
            className="px-6 py-2 bg-darkPrimary text-black rounded-md hover:bg-navbarColor mt-28"
          >
            Go to checkout
          </button> */}
        {/* </SignedIn> */}
        {isModalOpen && (
          <CheckoutModal
            isOpen={setIsModalOpen}
            onSubmit={(formData) => {
              console.log("Order Submitted", formData);
              setTimeout(() => {
                setIsModalOpen(false);
                setOrderSuccess(false);
              }, 5000);
            }}
            cartItems={cart}
            closeModal={handleCloseModal}
            orderSuccess={setOrderSuccess}
            setCartItems={setCart}
            calculateSubtotal={subtotal}
          />
        )}
        {/* <button className="px-6 py-2 bg-darkPrimary text-black rounded-md hover:bg-navbarColor">
          <Link href="/products">Continue Shopping</Link>
        </button> */}
      </div>
    </section>
  );
};

export default CartPage;
