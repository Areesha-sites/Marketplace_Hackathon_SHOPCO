"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { BiGitCompare } from "react-icons/bi";
import { toast } from "sonner"; 
import { CasualCardPropsTypes, Product } from "../../../../types/ComponentsTypes";

const KidsCard: React.FC<CasualCardPropsTypes> = ({ product, addToCompare }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    const wishlist: Product[] = storedWishlist ? JSON.parse(storedWishlist) : [];
    setIsWishlisted(wishlist.some((item) => item._id === product._id));
  }, [product._id]);

  const toggleWishlist = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    const wishlist: Product[] = storedWishlist ? JSON.parse(storedWishlist) : [];
    
    let message = "";
    if (isWishlisted) {
      const updatedWishlist = wishlist.filter((item) => item._id !== product._id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      message = `Removed from Wishlist: ${product.name}`;
    } else {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      message = `Added to Wishlist: ${product.name}`;
    }
    setIsWishlisted(!isWishlisted);
    toast.success(message, {
      description: "Your wishlist has been updated.",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo Action"),
      },
    });
    const notificationSound = new Audio("/notification.mp3");
    notificationSound.play();
  };

  const handleCompare = () => {
    addToCompare(product);

    toast.success(`Added to Compare: ${product.name}`, {
      description: "Compare list updated successfully.",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo Action"),
      },
    });

    const notificationSound = new Audio("/notification.mp3");
    notificationSound.play();
  };

  return (
    <Link href={`/kidsDetails/${product._id}`} passHref>
      <div className="sm:h-[190px] md:h-[300px] h-[100px] xxl:h-[270px] xl:h-[250px] flex flex-col justify-between">
        <div className="lg:w-[295px] lg:h-[298px] md:w-[230px] md:h-[230px] xxl:w-[295px] xxl:h-[298px] xl:w-[285px] xl:h-[278px] sm:w-[172px] sm:h-[174px] w-[140px] h-[104px] rounded-[20px] bg-bannerBg relative flex flex-col gap-[10px]">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist();
            }}
            className="absolute top-2 left-2 text-black text-2xl z-10"
          >
            {isWishlisted ? <RiHeart3Fill /> : <RiHeart3Line />}
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleCompare();
            }}
            className="absolute top-12 left-2 text-black text-2xl z-10"
          >
            <BiGitCompare />
          </button>

          <Image
            src={product.imageUrl}
            alt="product-image"
            height={1000}
            width={1000}
            priority
            quality={100}
            className="md:w-[444px] md:h-[296px] xxl:w-[444px] xxl:h-[296px] xl:w-[260px] xl:h-[263px] sm:w-[180px] sm:h-[190px] object-cover rounded-[20px] w-[140px] h-[164px]"
          />

          <div className="flex flex-col justify-center ">
            <h1 className="font-satoshiBold font-semibold md:text-[20px] text-black text-[12px] capitalize sm:leading-[17px] leading-[13px] md:leading-[20px]">
              {product.name}
            </h1>
            <div className="md:w-[150px] w-[117px] h-[19px] flex gap-[11px] items-center md:gap-[13px] ">
              <Image
                src="/Frame 10.svg"
                alt="rating-star"
                height={18.49}
                width={104}
                className="md:h-[18.49px] md:w-[104px] w-[75px] h-[15px]"
              />
              {product.ratingReviews && (
                <p className="md:text-[14px] text-[12px] text-black font-normal whitespace-nowrap font-satoshi ">
                  {product.ratingReviews} <span className="text-opacity-60 text-black">/5</span>
                </p>
              )}
            </div>
            <div className="md:w-[200px] h-[32px] flex gap-[10px] items-center">
              <span className="md:text-[24px] text-[17px] sm:text-[20px] font-bold text-black font-satoshiBold">
                ${product.price}
              </span>
              {product.discountPercent && (
                <span className="md:text-[24px] text-[17px] sm:text-[20px] font-bold font-satoshiBold text-black opacity-15 line-through">
                  ${product.discountPercent}
                </span>
              )}
              {product.offer && (
                <span className="md:w-[58px] w-[32px] sm:w-[42px] md:h-[28px] h-[20px] py-[6px] px-[10px] sm:px-[14px] rounded-[62px] bg-red-400 bg-opacity-20 sm:text-[10px] text-[8px] md:text-[12px] font-medium text-redTextOfferColor flex justify-center items-center font-satoshi">
                  -{product.offer}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default KidsCard;
