"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PiTrashFill } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import ProductDetailsTab from "@/app/Components/ProductDetailsTab";
import { PiSmileySad } from "react-icons/pi";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { client } from "@/sanity/lib/client";
import { CasualDetailsProduct } from "../../../../types/ComponentsTypes";
import { CasualDetailsProducts } from "../../../../types/ComponentsTypes";
interface Props {
  params: {
    id: string;
  };
}
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductDetailsCardList from "@/app/Components/ProductDetailsCardList";
import Footer from "@/app/Components/Footer";
const ProductDetails: React.FC<Props> = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState<CasualDetailsProducts | null>(null);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState<CasualDetailsProduct[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type=="products" && _id==$id][0]{
        _id,
        name,
        description,
        price,
        ratingReviews,
        "imageUrl": image.asset->url,
        category,
        discountPercent,
        "isNew": new,
        colors,
        offer,
        sizes
      }`;

      try {
        const productData = await client.fetch<CasualDetailsProducts>(query, {
          id,
        });

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
  const addToCart = (
    product: CasualDetailsProducts,
    size: string,
    color: string
  ) => {
    const productInCart = cart.find(
      (item) =>
        item.id === product._id &&
        item.selectedSize === size &&
        item.selectedColor === color
    );

    if (productInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product._id &&
        item.selectedSize === size &&
        item.selectedColor === color
          ? { ...item, quantity: (item.quantity ?? 0) + 1 }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [
        ...cart,
        {
          id: product._id,
          title: product.name,
          image: product.imageUrl,
          price: product.price,
          quantity: 1,
          colors: product.colors,
          sizes: product.sizes,
          selectedSize: size,
          selectedColor: color,
        },
      ];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  const increaseQuantity = (productId: string) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: (item.quantity ?? 0) + 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const decreaseQuantity = (productId: string) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && (item.quantity ?? 0) > 1) {
        return { ...item, quantity: (item.quantity ?? 0) - 1 };
      } else {
        return item;
      }
    });
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
  // const [mainImage, setMainImage] = useState("");
  // const [activeImage, setActiveImage] = useState(product?.imageUrl);
  // const handleImageClick = (imageSrc: any) => {
  //   setActiveImage(imageSrc);
  // };
  // const [isActive, setIsActive] = useState("large");
  // const handleSizeChange = (size: string) => {
  //   setIsActive(size);
  // };
  // const [activeCircle, setActiveCircle] = useState<number>(1);
  // const handleCircleClick = (circleIndex: number) => {
  //   setActiveCircle(circleIndex);
  // };
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
        <div className="absolute top-[160px] left-[100px]">
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
                  <Link href="/casual" className="font-satoshi">
                    Shop
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <Link href="/casualDetails" className="font-satoshi">
                    Casual
                  </Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="md:w-[1240px] xxl:w-[1240px] xl:w-[1175px] absolute md:top-[134px] md:left-[100px] xxl:left-[100px] xl:left-[80px] w-full border-b-[1px] border-black/10 top-[98px] sm:left-[16px]"
        ></div>
        <Image
          data-aos="zoom-in-down"
          data-aos-delay="200"
          src={product.imageUrl}
          alt={product.name}
          height={530}
          width={444}
          className="md:w-[444px] md:h-[530px] absolute md:top-[216px] md:left-[266px] rounded-[20px] bg-productDetailBbImageColor h-[290px] w-[358px] top-[170px] left-[18px] hue-rotate-30 "
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="200"
          src={product.imageUrl}
          alt={product.name}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[216px] md:left-[100px] rounded-[20px] border-[1px] border-black left-[16px] w-[112px] h-[106px] top-[475px] hue-rotate-90"
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="300"
          src={product.imageUrl}
          alt={product.name}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[397px] md:left-[100px] rounded-[20px] w-[112px] h-[106px] top-[475px] left-[139px] "
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="400"
          src={product.imageUrl}
          alt={product.name}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[579px] md:left-[100px] rounded-[20px] w-[111px] h-[106px] top-[475px] left-[263px]  -hue-rotate-90"
        />
        <div className="flex flex-col gap-y-[10px] absolute md:top-[216px] left-[16px] md:left-[750px] top-[580px] sm:top-[600px]">
          <h1 className=" text-[24px] md:text-[40px] text-black font-black sm:w-[90%] w-[297px] md:w-[600px] xxl:w-[600px] md:leading-[28px] tracking-wider font-integralCf md:whitespace-nowrap leading-[30px] xl:whitespace-normal xl:leading-[40px] xl:w-[470px]">
            {product.name}
          </h1>
          <div className="md:w-[193px] md:h-[24.71px] flex gap-[16px] w-[154px] h-[19px] items-center">
            <Image
              src="/Frame 10.svg"
              alt="rating"
              height={24.71}
              width={139}
              className="md:w-[129px] md:h-[20.71px] w-[105px] h-[18.67px] xl:w-[100px]"
            />
            <span className="w-[139px] h-[24.71px] font-satoshi text-[16px] font-normal text-black">
              {product.ratingReviews}
              <span className="text-black opacity-45">/5</span>
            </span>
          </div>
          <div className="md:w-[176px] md:h-[43px] flex gap-[12px] items-center">
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
          <p className="md:w-[590px] xxl:w-[590px] xl:w-[500px] md:text-[16px] text-[12px] font-normal text-black text-opacity-60 w-[280px] font-satoshi ">
            {product.description}
          </p>
          <div className="md:w-[590px] xxl:w-[590px] xl:w-[470px] border-b-[1px] border-black/10 sm:w-[358px] w-[280px] "></div>
          <p className="font-satoshi text-[16px] font-normal text-black/60 ">
            Select Colors
          </p>
          <div className="w-[143px] h-[37px] flex gap-[16px]">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`h-[37px] w-[37px] rounded-full flex justify-center items-center ${
                  selectedColor === color ? "" : ""
                }`}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && (
                  <Image
                    src="/check-icon.svg"
                    alt="check-icon"
                    height={16}
                    width={16}
                    className="h-[16px] w-[14px]"
                  />
                )}
              </div>
            ))}
          </div>
          <p className="font-satoshi text-[16px] font-normal text-black text-opacity-60 ">
            Choose Size
          </p>
          <div className="md:w-[420px] w-[280px] sm:w-[353px] h-[46px] flex gap-[6px] sm:gap-[12px]">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`md:w-[86px] md:h-[46px] w-[64px] sm:w-[74px] h-[29px] sm:h-[39px] md:py-[12px] md:px-[24px] py-[10px] px-[24px] rounded-[62px] sm:text-[14px] text-[12px] ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-bgLightGrayColor text-black/60"
                } flex justify-center items-center font-satoshi`}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="font-satoshi font-normal text-black text-[12px]">
            Size: <span className="text-black/50">{selectedSize}</span>
          </p>
          <p className="font-satoshi font-normal text-black text-[12px]">
            Color: <span className="text-black/50">{selectedColor}</span>
          </p>
          <div className="md:w-[590px] xxl:w-[590px] xl:w-[470px] sm:w-[353px] border-b-[1px] border-black/10] w-[280px] "></div>
          <div className="flex gap-x-[10px]">
            <div className="md:w-[170px] w-[110px] md:h-[52px] h-[44px] py-[16px] px-[20px] rounded-[62px] flex justify-between bg-bgLightGrayColor items-center">
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
              onClick={() => {
                if (!selectedSize || !selectedColor) {
                  alert(
                    "Please select a size and color before adding to cart."
                  );
                  return;
                }
                addToCart(product, selectedSize, selectedColor);
              }}
              className="md:w-[400px] xxl:w-[400px] xl:w-[300px] md:h-[52px] h-[44px] py-[16px] px-[54px] rounded-[62px] bg-black text-white text-[14px] md:text-[16px] font-medium items-center flex justify-center font-satoshi w-[180px] sm:w-[236px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="absolute top-[1150px] xl:top-[900px] xl:left-[50px] xxl:left-[100px]">
          <ProductDetailsTab />
        </div>
        <h1 className="md:w-[579px] md:h-[58px] absolute md:top-[1878px] xl:top-[2100px] md:left-[431px] xxl:left-[431px] xl:left-[330px] font-black text-black md:text-[48px] text-[32px] left-[79px] w-[250px] leading-[36px] mx-auto top-[2200px] text-center uppercase tracking-wider font-integralCf md:whitespace-nowrap ">
          You might also like
        </h1>
        <div className="">
          <ProductDetailsCardList />
        </div>
        <div className="absolute xl:top-[2870px] xxl:top-[2872px] top-[2800px]">
          <Footer />
        </div>
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
                          <h3 className="font-semibold text-black font-satoshi">
                            {item.title}
                          </h3>
                          <PiTrashFill
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 h-5 w-5 cursor-pointer hover:text-red-400"
                          />
                        </div>
                        <p className="font-satoshi font-normal text-black text-[12px]">
                          Size:{" "}
                          <span className="text-black/50">{item.sizes}</span>
                        </p>
                        <p className="font-satoshi font-normal text-black text-[12px]">
                          Color:{" "}
                          <span className="text-black/50">{item.colors}</span>
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
              <SheetClose
                asChild
                className="border-none outline-none"
              ></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default ProductDetails;
