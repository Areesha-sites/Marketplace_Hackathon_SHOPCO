"use client"
import React from "react";
import Image from "next/image";
import { TopSellingDetailPagePropsTypes } from "../../../types/ComponentsTypes";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
const TopSellingCard = ({id, image, title, price, discount, rating, ratingReview, offer, positionStyles}:TopSellingDetailPagePropsTypes) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const left = isDesktop
    ? positionStyles?.desktop?.left
    : positionStyles?.mobile?.left;
  const top = isDesktop
    ? positionStyles?.desktop?.top
    : positionStyles?.mobile?.top;

  return (
    <>
     <Link href={`/topSelling/${id}`} passHref>
     <div
          className="absolute"
          style={{
            left: left || "0px",
            top: top || "0px",
          }}
        >
      <div className="md:w-[295px] md:h-[298px]  h-[180px] w-[180px] rounded-[20px] bg-BannerBgColor "
      style={{ position: "absolute", ...positionStyles }}>
        <Image
          src={image}
          alt="product-image"
          height={296}
          width={444}
          className="md:w-[444px] md:h-[296px] h-[180px] w-[180px] absolute rounded-[20px]"
        />
        <h1 className="absolute md:top-[317px] top-[190px] font-inter font-bold md:text-[20px] text-[13px] text-blackBgColor">
         {title}
        </h1>
        <div className="w-[150px] h-[19px] absolute md:top-[350px] top-[215px] flex gap-[13px] items-center">
          <Image
            src={rating}
            alt="rating-star"
            height={18.49}
            width={104}
            className="h-[18.49px] md:w-[104px] w-[95px]"
          />
         {ratingReview && ( 
          <p className="md:text-[14px] text-[12px] text-blackBgColor font-normal whitespace-nowrap">
            {ratingReview} <span className="text-opacity-60 text-black">/5</span>
          </p>
        )}
        </div>
        <div className="md:w-[200px] md:h-[32px] absolute md:top-[380px] top-[240px] flex gap-[10px] items-center">
          <span className="md:text-[24px] text-[20px] font-bold font-inter text-blackBgColor">${price}</span>
          {discount && (
          <span className="md:text-[24px] text-[20px] font-bold  text-black opacity-15 font-inter line-through">
            {discount}
          </span>
        )}
          {offer && (
          <span className="md:w-[58px] md:h-[28px] py-[6px] px-[14px] rounded-[62px] bg-red-200 bg-opacity-30 md:text-[12px] text-[10px] font-medium text-redTextOfferColor flex justify-center items-center w-[42px] h-[20px]">
            {offer}
          </span>
        )}
        </div>
      </div>
      </div>
      </Link>
      
    </>
  );
};

export default TopSellingCard;
