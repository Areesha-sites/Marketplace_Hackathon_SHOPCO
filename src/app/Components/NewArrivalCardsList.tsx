"use client";
import { client } from "@/sanity/lib/client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { BiGitCompare } from "react-icons/bi";
import ComparisonTable from "./ComparisonTable";
import { NewArrivalProduct, Product } from "../../../types/ComponentsTypes";
const fetchProducts = async (): Promise<NewArrivalProduct[]> => {
  const products = await client.fetch(
    `*[_type=="newArrivals"] {
      ratingReviews,
      sizes,
      colors,
      offer,
      name,
      _id,
      "imageUrl" : image.asset->url,
      discountPercent,
      category,
      description,
      price
    }`
  );
  return products;
};
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useToast } from "@/components/hooks/use-toast";
const NewArrivalCardsList = () => {
  const { toast } = useToast();
  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<NewArrivalProduct[]>([]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    const loadWishlist = () => {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlist(storedWishlist);
    };
    loadProducts();
    loadWishlist();
  }, []);
  const toggleWishlist = (item: NewArrivalProduct) => {
    const isWishlisted = wishlist.some((product) => product._id === item._id);
    let updatedWishlist;
    if (isWishlisted) {
      updatedWishlist = wishlist.filter((product) => product._id !== item._id);
      toast({
        description: "Item removed from wishlist.",
      });
    } else {
      updatedWishlist = [...wishlist, item];
      toast({
        description: "Item added to wishlist successfully.",
      });
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };
  const [comparisonList, setComparisonList] = useState<Product[]>([]);
  const [showCompareDialog, setShowCompareDialog] = useState(false);
  const addToCompare = (product: NewArrivalProduct) => {  
    const productToAdd: Product = {
      _createdAt: new Date().toISOString(), 
      ...product, 
    };
    if (comparisonList.length === 2) {
      if (window.confirm("You can only compare two items at a time. Do you want to clear the comparison list?")) {
        setComparisonList([]);
      }
      return;
    }
    const isAlreadyAdded = comparisonList.some((item) => item._id === product._id);
    if (!isAlreadyAdded) {
      setComparisonList([...comparisonList, productToAdd]); 
      if (comparisonList.length === 0) {
        alert("First product selected successfully. Now select the second product.");
      } else if (comparisonList.length === 1) {
        alert("Second product selected successfully.");
        setShowCompareDialog(true);
      }
    } else {
      alert("This item is already in the comparison list.");
    }
  };
  const removeCompareItem = (productId: string) => {
    const updatedList = comparisonList.filter((item) => item._id !== productId);
    setComparisonList(updatedList);
    if (updatedList.length === 0) {
      setShowCompareDialog(false);
    }
    alert("Item removed from comparison list.");
  };
  const settings = {
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 2 },
      },
    ],
    customPaging: function (i: number) {
      return (
        <div className=" bottom-0 right-0 transform translate-y-1/2 translate-x-1/2">
          {i + 1}
        </div>
      );
    },
  };
  const [products, setProducts] = useState<NewArrivalProduct[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);
  if (loading) {
    return <p>Loading products...</p>;
  }
  return (
   <div className="flex justify-center items-center w-full mx-auto">
     <div className="w-full xxl:px-[90px] lg:px-14 sm:px-2 overflow-hidden px-2 xl:px-14 absolute ">
      <Slider {...settings}>
        {products.map((item, index) => (
           <Link key={index} href={`/newArrival/${item._id}`} passHref>
           <div
             className="md:h-[420px] xxl:h-[420px] xl:h-[380px] h-[260px] sm:h-[280px] flex flex-col justify-between"
           >
             <div className="lg:w-[295px] lg:h-[298px] md:w-[230px] md:h-[230px] xxl:w-[295px] xxl:h-[298px] xl:w-[285px] xl:h-[278px] sm:w-[172px] sm:h-[174px] w-[140px] h-[104px] rounded-[20px] bg-bannerBg relative flex flex-col gap-[10px]">
             <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(item);
                    }}
                    className="absolute top-2 left-2 text-black text-2xl z-10"
                  >
                    {wishlist.some((product) => product._id === item._id) ? (
                      <RiHeart3Fill />
                    ) : (
                      <RiHeart3Line />
                    )}
                  </button>
                  <button
              onClick={(e) => {
                e.preventDefault();
                addToCompare(item);
              }}
              className="absolute top-12 left-2 text-black text-2xl z-10"
            >
              <BiGitCompare />
            </button>
               <Image
                 src={item.imageUrl}
                 alt="product-image"
                 height={1000}
                 width={1000}
                 priority
                 quality={100}
                 className="md:w-[444px] md:h-[296px] xxl:w-[444px] xxl:h-[296px] xl:w-[260px] xl:h-[263px] sm:w-[180px] sm:h-[190px] object-cover rounded-[20px] w-[140px] h-[164px]"
               />
               <div
                 className="flex flex-col justify-center "
               >
                 <h1 className=" font-satoshiBold font-semibold md:text-[20px] text-black text-[12px] w-[150px] sm:w-[280px] capitalize sm:leading-[24px] leading-[18px]">
                   {item.name}
                 </h1>
                 <div className="md:w-[150px] w-[117px] h-[19px] flex gap-[11px] items-center md:gap-[13px] ">
                   <Image
                     src="/Frame 10.svg"
                     alt="rating-star"
                     height={18.49}
                     width={104}
                     className="md:h-[18.49px] md:w-[104px] w-[75px] h-[15px]"
                   />
                   {item.ratingReviews && (
                     <p className="md:text-[14px] text-[12px] text-black font-normal whitespace-nowrap font-satoshi ">
                       {item.ratingReviews}{" "}
                       <span className="text-opacity-60 text-black">/5</span>
                     </p>
                   )}
                 </div>
                 <div className="md:w-[200px] h-[32px]  flex gap-[10px] items-center ">
                   <span className="md:text-[24px] text-[17px] sm:text-[20px] font-bold text-black font-satoshiBold">
                     ${item.price}
                   </span>
                   {item.discountPercent && (
                     <span className="md:text-[24px] text-[17px] sm:text-[20px] font-bold font-satoshiBold  text-black opacity-15 line-through">
                       ${item.discountPercent}
                     </span>
                   )}
                   {item.offer && (
                     <span className="md:w-[58px] w-[32px] sm:w-[42px] md:h-[28px] h-[20px] py-[6px] px-[10px] sm:px-[14px] rounded-[62px] bg-red-400 bg-opacity-20 sm:text-[10px] text-[8px] md:text-[12px] font-medium text-redTextOfferColor flex justify-center items-center font-satoshi">
                       -{item.offer}%
                     </span>
                   )}
                 </div>
               </div>
             </div>
           </div>
         </Link>
        ))}
      </Slider>
      <div>
        {showCompareDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-3/4 relative">
              <button
                className="absolute top-2 right-3 text-gray-400 hover:text-gray-600"
                onClick={() => setShowCompareDialog(false)}
              >
                ✖
              </button>
              <ComparisonTable
                products={comparisonList}
                removeCompareItem={removeCompareItem}
              />
            </div>
          </div>
        )}
      </div>
    </div>
   </div>
  );
};

export default NewArrivalCardsList;
